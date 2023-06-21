// Require A
var CONFIGSRV = require('./configsrv.js')
var TOOLS = require('./tools_v2.js')
// DECODES
var CRCITU16 = require('./decodes/crc16.js') // CRC-16
var SEPARADOR_MARCAS = require('./decodes/separador_v2.js') //	SEPARADOR DE MARCAS
var DECODE_TOPFLYTECH = require('./decodes/topflytech_v2.js') //	TOPFLYTECH
var DECODE_SUNTECH = require('./decodes/suntech_v2.js') //	SUNTECH
var DECODE_CONCOX = require('./decodes/concox_v2.1.js') //	CONCOX
var DECODE_MEITRACK = require('./decodes/meitrack_v2.js') //	MITRACK

// Variables de entorno
var entorno = {}
process.argv.forEach(function (val, index, array) {
	if(val.includes('--')){
		let en = val.split(':')
		if(en.length == 2 && en[1] != ''){
			let llave = en[0].replace('--', '')
			let valor = en[1]
			entorno[llave] = valor
		}
	}
});
const ENV_MOTOR = entorno.motor ?? 'topflytech'
const ENV_CLIEN = entorno.cliente ?? 'developer'
const ENV_PUERT = entorno.puerto ?? 0
const ENV_LVLLO = entorno.lvllog ?? 3

const CONFIGURACION = CONFIGSRV.seleccionarMotor(ENV_MOTOR, ENV_CLIEN, ENV_PUERT)
var UNIDADES = []
//console.log('puerto', ENV_PUERT)
console.log('CONFIGURACION', CONFIGURACION)

// Require B
const IO = require("socket.io-client")
const IOWSCLI = IO(CONFIGURACION.hostcentral)
var NET = require('net')
var MOTOR = NET.createServer()

// Developer
var solouno = 3
	
// Configuración
TOOLS.toolsConfig.lvl_print_log = ENV_LVLLO
MOTOR.maxConnections = 100000
var _timeoutClear = 1000*60*60 // 60 min
//var _timeoutClear = 10000 // 60 min

IOWSCLI.on("connect", () => {
	TOOLS.LogInfo('WS conectado', IOWSCLI.id)
	TOOLS.LogInfo('WS Iniciando sessión', IOWSCLI.id)
	IOWSCLI.emit('login-motor', {token:'123456', info:CONFIGURACION})
})

IOWSCLI.on("disconnect", () => {
	TOOLS.LogAlert('WS desconectado', IOWSCLI.id)
	cerrarMotor()
})

IOWSCLI.on("connect_error", (err) => {
	TOOLS.LogError('WS Error', err)
})

IOWSCLI.on("login-motor", (message) => {
	TOOLS.LogInfo('WS Info login', message)
	if(message.login == true){
		TOOLS.LogInfo('WS login correcto')
		abrirMotor()
		actualizarUnidadesCentral()
	}
})

IOWSCLI.on("motor-cmd", (comando) => {
	TOOLS.LogInfo('WS Envia comando', comando)
	try{
		for(var unidad of UNIDADES){
			if(comando.cmd._id != null){
				if(unidad.unitid == comando.unidad){
					var ComandoResult = crearComandoV2(comando, unidad)
					if(!unidad.socket.write(ComandoResult)) {
						//stream.once('drain', cb);
					}else{
						IOWSCLI.emit('motor-cmd', {_id:comando.cmd._id})
					}
					break
				}
			}else{
				if(unidad.unitid == comando.unidad.unitid){
					TOOLS.LogInfo('MOTOR Unidad find cmd', comando.cmd.cmd_msn)
					var ComandoResult = crearComando(comando.cmd, comando.unidad)
					if(!unidad.socket.write(ComandoResult.cmd)) {
						//stream.once('drain', cb);
					}else{
						IOWSCLI.emit('motor-cmd', {id:comando.cmd.id})
					}
					if(ComandoResult.cmd2 != ""){
						if(!unidad.socket.write(ComandoResult.cmd2)) {
							 //stream.once('drain', cb);
						}else{
							IOWSCLI.emit('motor-cmd', {id:comando.cmd.id})
						}
					}
					break
				}
			}
			
		}
	}catch(error){
		TOOLS.LogAlert('Error al envia comando', error)
	}	
})

var cerrarMotor = function()
{
	MOTOR.close()
	resetUnidadesLista()
}

var abrirMotor = function()
{
	TOOLS.LogInfo('Motor Socket Abierto')
	MOTOR = null
	MOTOR = NET.createServer()
	MOTOR.maxConnections = 5000
	MOTOR.on('connection', 
		function(socket) {
			try {
				socket.infosocket = {"unitid":null}
				socket.setTimeout(_timeoutClear)
				socket.on('timeout', 
					() => {
						TOOLS.Log('Socket TimeOut', socket.infosocket)
						borarUnidadLista(socket)
						socket.end()
						socket.destroy()
					})
				socket.on("error", 
					(err) => {
						TOOLS.Log('Socket Error', socket.infosocket)
						borarUnidadLista(socket)
						socket.destroy()
					})
					
				socket.on('data', 
					async (data) => {
						var dataBufferHex = Buffer.from(data, 'hex')
//						console.log('Info', dataBufferHex.toString('hex'))
						//TOOLS.Log('DATA-HEX-', dataBufferHex.toString('hex'))
						// var VVVV = dataBufferHex.toString('ascii')
						// TOOLS.Log('DATA', VVVV)
						//revisarCrudo('865284040351730', dataBufferHex)
						//revisarCrudo('865284040305603', dataBufferHex)
						
						var separador = SEPARADOR_MARCAS.detectar(data)
						if(separador.error){
							TOOLS.LogError('Marca no detectado', dataBufferHex)
						}else{
							// Procesar información
							//console.log('separador.bufferData', separador.bufferData.length)
//							console.log('separador.bufferData', separador.bufferData[0].modelo)
							for(var i_buffer in separador.bufferData){
								var buffer = separador.bufferData[i_buffer]
								//console.log('Procesar')
								procesarBuffer(buffer, socket)
							}
						}
					})
			}catch (error) {
				TOOLS.LogAlert('Motor mensaje error', error)
			}
	}).listen(CONFIGURACION.puerto)
	
}

var procesarBuffer = function(buffer, socket)
{
	var procesado = {}
	var agregarUnidad = false
	if(socket.infosocket.unitid == null)
			agregarUnidad = true
	switch (buffer.modelo.idDecode) {
		case 0:{
			procesado = DECODE_TOPFLYTECH.tlw1(buffer.data, socket.infosocket.unitid)					
		}
		break
		case 1:{
			procesado = DECODE_TOPFLYTECH.tlp1(buffer.data, socket.infosocket.unitid)
		}
		break
		case 2:{
			procesado = DECODE_TOPFLYTECH.tlp1(buffer.data, socket.infosocket.unitid)
		}
		break
		case 10:{
			//var subBuffer = Buffer.from(buffer.data, 'hex')
			//var paquete600Demo = subBuffer.toString('utf8')
			//console.log('Bufer 600', paquete600Demo)
			procesado = DECODE_SUNTECH.st600(buffer.data, socket.infosocket.unitid)
			//var comandoDireccion = "ST600NTW;"+procesado.save.unitid+";02;0;internet.mvne1.com;;;control.navigation.com.mx;1098;;;;"
			//socket.write(comandoDireccion)
		}
		break
		case 11:{
			/*
			var subBuffer = Buffer.from(buffer.data, 'hex')
			var paquete300Demo = subBuffer.toString('utf8')
			if(paquete300Demo.includes('807064193')){
				console.log('---------------------')
				console.log('Check motor:', paquete300Demo)
			}*/
			procesado = DECODE_SUNTECH.st300(buffer.data, socket.infosocket.unitid)
			
			//var comandoDireccion = "ST300NTW;"+procesado.save.unitid+";02;0;internet.mvne1.com;;;control.navigation.com.mx;1098;;;;"
			//socket.write(comandoDireccion)
			
		}
		break
		case 12:{
			procesado = DECODE_SUNTECH.universal(buffer.data, socket.infosocket.unitid)
		}
		break
		case 100:{
			// if(socket.infosocket.unitid == '359857084747609')
			// 	TOOLS.Log('DANIE', buffer.data)
			procesado = DECODE_CONCOX.at6(buffer.data, socket.infosocket.unitid)
			// if(socket.infosocket.unitid == '359857084747609')
			// 	TOOLS.Log('Danieprocesado', procesado)
		}
		break
		case 110:{
			// if(socket.infosocket.unitid == '359857084747609')
			// 	TOOLS.Log('DANIE', buffer.data)
			procesado = DECODE_MEITRACK.t366(buffer.data, socket.infosocket.unitid)
			//console.log('procesado', procesado)
			
			// if(socket.infosocket.unitid == '359857084747609')
			// 	TOOLS.Log('Danieprocesado', procesado)
		}
		break
		default:{
			TOOLS.LogAlert('Marca no registrada', buffer)
			agregarUnidad = false
		}
	}
	if(agregarUnidad){
		socket.infosocket.unitid = procesado.save.unitid
		agregarUnidadLista(socket, procesado)
	}
		
	try{
		// Final enviar datos para ser procesados
		if(IOWSCLI.connected){
			IOWSCLI.emit('motor-procesar', {unitid:socket.infosocket.unitid, procesar:procesado.save})
			if(procesado.respuesta != null)
				socket.write(procesado.respuesta)
		}
	}catch(error){
		TOOLS.LogAlert('Error al procesar (b)', error)
	}
}

var agregarUnidadLista = function(socket, procesado)
{
	if(procesado.save.unitid == null){
		TOOLS.LogAlert('Unidad sin unitid', procesado)
		return
	}
	var unidadFind = false
	for(var i_unidad in UNIDADES){ // reemplazar
		var unidad = UNIDADES[i_unidad]
		if(unidad.unitid == procesado.save.unitid){
			UNIDADES[i_unidad].socket = socket
			unidadFind = true
			break
		}
	}
	// Condicion para agregar la unidad
	if(unidadFind == false){
		UNIDADES.push({socket:socket, unitid:procesado.save.unitid, modeloidentificador: procesado.save.identificadorGPS || null})
		actualizarUnidadesCentral()
	}	
}

var borarUnidadLista = function(socket)
{
	var UNIDADES_TMP = []
	for(var unidad of UNIDADES){
		if(unidad.socket != socket){
			UNIDADES_TMP.push(unidad)
		}
	}
	UNIDADES = []
	UNIDADES = UNIDADES_TMP
	UNIDADES_TMP = null
	actualizarUnidadesCentral()
}

var enviarCMDUnidadLista = function()
{
	
}

var resetUnidadesLista = function()
{
	UNIDADES = []
}

var actualizarUnidadesCentral = function()
{
	if(IOWSCLI.connected){
		var UNIDADESACT = []
		for(var unidad of UNIDADES){
			UNIDADESACT.push({unitid:unidad.unitid, modeloidentificador: unidad.modeloidentificador})
		}
		//console.log('Actualizando UND Motor', UNIDADESACT)
		IOWSCLI.emit('motor-com', {tipocom:0, unidades:UNIDADESACT})
	}
}

var crearComando = function(cmd, unidad)
{
	var cmdmsn = ""
	var cmdmsn2 = ""
	console.log('unidad.modeloidentificador', unidad.modeloidentificador)
	switch (unidad.modeloidentificador) {
		case 'TLW1':
		case 'TLW2':
		case 'TLP1':{
			if(cmd.cmd_msn.includes("0x25;") ||cmd.cmd_msn.includes("0x26;") || cmd.cmd_msn.includes("0x27;"))
				cmd.cmd_msn = cmd.cmd_msn.substring(21)
			cmdmsn = DECODE_TOPFLYTECH.tlw1CMD({cmd:cmd.cmd_msn, serial:1}, unidad.unitid)
			if(cmd.cmd_msn == 'DOUT2,0#')
				cmd.cmd_msn = 'DOUT,1,0#'
			if(cmd.cmd_msn == 'DOUT2,1#')
				cmd.cmd_msn = 'DOUT,1,1#'
			cmdmsn2 = DECODE_TOPFLYTECH.tlw1CMD({cmd:cmd.cmd_msn, serial:1}, unidad.unitid)
		}
		break
		case 'ST300':
		case 'ST600':
		case 'suntech-universal':{
			if(unidad.modeloidentificador == 'suntech-universal' && !cmd.cmd_msn.includes('CMD')){
				cmd.cmd_msn = 'CMD;'+cmd.cmd_msn
			}
			cmdmsn = cmd.cmd_msn
		}
		break
		case 'AT6':
		case 'GV20': {
			cmdmsn = DECODE_CONCOX.CMDConcox({cmd:cmd.cmd_msn, serial:1})
		}
		break
	}
	return {cmd:cmdmsn, cmd2:cmdmsn2}
}
var crearComandoV2 = function(cmd, unidad)
{
	var cmdmsn = ""
	switch (unidad.modeloidentificador) {
		case 'TLW1':
		case 'TLW2':
		case 'TLP1':{
			if(cmd.cmd.cmd.mensaje.includes("0x25;") ||cmd.cmd.cmd.mensaje.includes("0x26;") || cmd.cmd.cmd.mensaje.includes("0x27;"))
				cmd.cmd.cmd.mensaje = cmd.cmd.cmd.mensaje.substring(21)
			cmdmsn = DECODE_TOPFLYTECH.tlw1CMD({cmd:cmd.cmd.cmd.mensaje, serial:1}, unidad.unitid)
			if(cmd.cmd_msn == 'DOUT2,0#')
				cmd.cmd_msn = 'DOUT,1,0#'
			if(cmd.cmd_msn == 'DOUT2,1#')
				cmd.cmd_msn = 'DOUT,1,1#'
			//cmdmsn2 = DECODE_TOPFLYTECH.tlw1CMD({cmd:cmd.cmd.mensaje, serial:1}, unidad.unitid)
		}
		break
		case 'ST300':
		case 'ST600':
		case 'suntech-universal':{
			if(unidad.modeloidentificador == 'suntech-universal' && !cmd.cmd.cmd.mensaje.includes('CMD')){
				cmd.cmd.cmd.mensaje = 'CMD;'+cmd.cmd_msn
			}
			cmdmsn = cmd.cmd.mensaje
		}
		break
		case 'AT6':
		case 'GV20': {
			cmdmsn = DECODE_CONCOX.CMDConcox({cmd:cmd.cmd.cmd.mensaje, serial:1})
		}
		break
	}
	return cmdmsn
}

var revisarCrudo = function(clave, buffer)
	{
		if(buffer.toString('hex').includes(clave)){
			console.log('CRUDO - '+clave+':', buffer.toString('hex'))
		}
	}
