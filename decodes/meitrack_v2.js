module.exports = {
	meitrack:{
		't366':{
			'identificador':'2424',
			'msn':{
				'status_report':{
					'hex': ['32','33','34','35'],
					'titulo':'Status Report',
					'protocolotipo':1
				},
				'event_report':{
					'hex': 'ST600EVT',
					'titulo':'Event report',
					'protocolotipo':1
				},
				'comando-res':{
					'hex': 'ST600CMD',
					'titulo':'Resquest CMD',
					'protocolotipo':2
				}
			}
			
		}
	},
	tipoMensaje: function(mensaje, adicional=null){
		var traductorMensaje = 0
		switch (mensaje) {
			// No definidos
			case 'A3':
			aductorMensaje = 0
			break;
			// Posicion
			case 'P32':
			traductorMensaje = 10
			break
			case 'P33':
			traductorMensaje = 9
			break
			case 'P35':
			traductorMensaje = 1
			break
			// Alertas
			case 'A1':{
				traductorMensaje = 23
			}
			break;
			// Eventos
			case 'EV8':
			traductorMensaje = 67
			break;
			
			default:{
				traductorMensaje = parseFloat(mensaje)
			}
		}
		return traductorMensaje
	},
	
	// T366
	t366: function (buffer, unitIDMotor = null) {
		var data_return = {}
		data_return.save = {}
		var subBuffer = Buffer.from(buffer, 'hex')
		var paquete = subBuffer.toString('ascii')
		paquete = paquete.split(",")
		//console.log('paquete', paquete)
		
		var mensaje = paquete[3]
		for(var msn_i in this.meitrack.t366.msn){	
			var msn = this.meitrack.t366.msn[msn_i]
			if(mensaje == msn.hex || msn.hex.includes(mensaje)){
				data_return.save.unitid = String(paquete[1])
				unitIDMotor = String(paquete[1])
				
				data_return.identificadorUnitID = parseFloat(data_return.save.unitid)
				data_return.save.marcaGPS = 'meitrack'
				data_return.save.modeloGPS = 'T366'
				data_return.save.identificadorGPS = 'T366'
				data_return.save.motorcom = 0
				data_return.save.crudo = buffer.toString('hex')
				data_return.save.protocolomsn = msn_i
				data_return.save.protocolotipo = msn.protocolotipo
				data_return.runInit = true
				// Variables de ayuda
				var nowDate = Date.now()
				var todayDate = new Date(nowDate)
				// Separador de mensaje
				switch (msn_i) {
					case 'status_report':{
						data_return.save.tipomsn = this.tipoMensaje('P' + paquete[3], 'T366')
						
						
						var registro = new Date(
							'20' + paquete[6].slice(0,2)+'-'+
							paquete[6].slice(2,4)+'-'+
							paquete[6].slice(4,6)+'T'+
							paquete[6].slice(6,8)+':'+
							paquete[6].slice(8,10)+':'+
							paquete[6].slice(10,12)
						)
						data_return.save.registro = registro
						data_return.save.serialmsn = parseFloat(paquete[6])
						data_return.save.latitud = parseFloat(paquete[4])
						data_return.save.longitud = parseFloat(paquete[5])
						data_return.save.altitud = parseFloat(paquete[13])
						data_return.save.velocidad = parseFloat(paquete[10])
						data_return.save.direccion = parseFloat(paquete[11])
						data_return.save.odometro = parseFloat(paquete[14])
						data_return.save.senal = Math.round((parseInt(paquete[9])*1000)/310)
						data_return.save.nosatelites = parseInt(paquete[8])
						var digitalIO = this.hex2bin(paquete[17], 16)
						
						// IO
						data_return.save.entradasDigital = [
							(digitalIO[7]=='0'?false:true),
							(digitalIO[6]=='0'?false:true),
							(digitalIO[5]=='0'?false:true),
							(digitalIO[4]=='0'?false:true),
							(digitalIO[3]=='0'?false:true),
						]
						data_return.save.salidasDigital = [
							(digitalIO[15]=='0'?false:true),
							(digitalIO[14]=='0'?false:true),
							(digitalIO[13]=='0'?false:true),
							(digitalIO[12]=='0'?false:true),
							(digitalIO[11]=='0'?false:true),
						]
						//console.log('IO', data_return.save.entradasDigital)
						try{
							var lbsData = paquete[16]
							lbsBanda = lbsData.split('|')
							data_return.save.lbsBanda = '3G'
							data_return.save.lbsRegistro = registro
							data_return.save.lbsMCC = parseInt(lbsBanda[0])
							data_return.save.lbsMNC = parseInt(lbsBanda[1])
							var ciHex = Buffer.from(lbsBanda[3], 'hex')
							var lacHex = Buffer.from(lbsBanda[2], 'hex')
							data_return.save.lbsTowers = 
								[
									{
										LAC: lacHex.slice(0,2).readInt16BE(0),
										CI: ciHex.slice(0,4).readInt32BE(0),
										LVL: data_return.save.senal,
									}
								]
						}catch(error){
							console.log('Error al decodificar LBS', error)
							console.log('CurdoInfo', paquete)
						}
						var inputAnalogo = paquete[18]
						inputAnalogo = inputAnalogo.split('|')
						var energiaExBuffer = Buffer.from(inputAnalogo[4], 'hex')
						data_return.save.energiaExternaVol = parseFloat(energiaExBuffer.slice(0,2).readInt16BE(0)) / 100
						var energiaInBuffer = Buffer.from(inputAnalogo[3], 'hex')
						data_return.save.energiaInternaVol = parseFloat(energiaInBuffer.slice(0,2).readInt16BE(0)) / 100
						
						
						/*
						var digitalIO = paquete[19].split("")
						data_return.save.entradasDigital = this.st600IOStatus(digitalIO, paquete[2], 1)
						data_return.save.salidasDigital = this.st600IOStatus(digitalIO, paquete[2], 0)
						if(msn_i == 'emergency_report' || msn_i == 'event_report' || msn_i == 'alert'){
							data_return.save.realtime = (paquete[23]=='1'?true:false)
						}else{
							data_return.save.realtime = (paquete[24]=='1'?true:false)
						}
						data_return.save.lbsEstado = true
						data_return.save.gnnsEstado = true
						data_return.save.gpsFixed = (paquete[16]=="1"?true:false)
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.firmwareSoftwareVersion = paquete[3]
						data_return.save.hardwareVersion = paquete[2]
						if(msn_i == 'emergency_report' || msn_i == 'event_report' || msn_i == 'alert'){
							data_return.save.horasManejando = parseFloat(paquete[21])
						}else{
							data_return.save.horasManejando = parseFloat(paquete[22])
						}
						
						if(paquete[2] == '34' || paquete[2] == '35'){
							if(msn_i == 'emergency_report' || msn_i == 'event_report' || msn_i == 'alert'){
								data_return.save.obdOdometro = parseFloat(paquete[25])
								data_return.save.obdCombustible = parseFloat(paquete[26])
								data_return.save.obdVelocidad = parseFloat(paquete[27])
								if(msn_i == 'alert' && paquete[33] != null){
									data_return.save.obdRendimientoInactivo = parseFloat(paquete[33])
									data_return.save.obdTemperaturaMotor = parseFloat(paquete[34])
									data_return.save.obdPresionAceite = parseFloat(paquete[35])
									data_return.save.obdRPM = parseFloat(paquete[36])
									data_return.save.obdCruseroTiempo = parseFloat(paquete[37])
									data_return.save.obdDTC = [paquete[38]] 
									data_return.save.obdRelantiTiempo = parseFloat(paquete[39])
									data_return.save.obdRendimiento = parseFloat(paquete[40])
								}else if(paquete[30] != null){
									data_return.save.obdRendimientoInactivo = parseFloat(paquete[30])
									data_return.save.obdTemperaturaMotor = parseFloat(paquete[31])
									data_return.save.obdPresionAceite = parseFloat(paquete[32])
									data_return.save.obdRPM = parseFloat(paquete[33])
									data_return.save.obdCruseroTiempo = parseFloat(paquete[34])
									data_return.save.obdDTC = [paquete[35]] 
									data_return.save.obdRelantiTiempo = parseFloat(paquete[36])
									data_return.save.obdRendimiento = parseFloat(paquete[37])
								}
							}else{
								data_return.save.obdOdometro = parseFloat(paquete[26])
								data_return.save.obdCombustible = parseFloat(paquete[27])
								data_return.save.obdVelocidad = parseFloat(paquete[28])
								if(paquete[34] !=  null){
									data_return.save.obdRendimientoInactivo = parseFloat(paquete[34])
									data_return.save.obdTemperaturaMotor = parseFloat(paquete[35])
									data_return.save.obdPresionAceite = parseFloat(paquete[36])
									data_return.save.obdRPM = parseFloat(paquete[37])
									data_return.save.obdCruseroTiempo = parseFloat(paquete[38])
									data_return.save.obdDTC = [paquete[39]] 
									data_return.save.obdRelantiTiempo = parseFloat(paquete[40])
									data_return.save.obdRendimiento = parseFloat(paquete[41])
								}
							}
						}
						if(paquete[2] == '35' || paquete[2] == '36'){
							if(msn_i == 'emergency_report' || msn_i == 'event_report' || msn_i == 'alert'){
								data_return.save.driverID = paquete[28]
								data_return.save.driverIDReg = (paquete[29]=='1'?true:false)
							}else{
								data_return.save.driverID = paquete[29]
								data_return.save.driverIDReg = (paquete[30]=='1'?true:false)
							}
						}
						if(paquete[2] == '35'){
							if(msn_i == 'status_report'){
								data_return.save.tempID = []
								if(paquete[31] != ':')
									data_return.save.tempID.push({id:paquete[31].split(':')[0], temperatura:parseFloat(paquete[31].split(':')[1])})
								if(paquete[32] != ':')
									data_return.save.tempID.push({id:paquete[32].split(':')[0], temperatura:parseFloat(paquete[32].split(':')[1])})
								if(paquete[33] != ':')
									data_return.save.tempID.push({id:paquete[33].split(':')[0], temperatura:parseFloat(paquete[33].split(':')[1])})
								if(data_return.save.tempID.length == 0)
									delete data_return.save.tempID
							}
							if(msn_i == 'alert'){
								data_return.save.tempID = []
								if(paquete[30] != ':')
									data_return.save.tempID.push({id:paquete[30].split(':')[0], temperatura:parseFloat(paquete[30].split(':')[1])})
								if(paquete[31] != ':')
									data_return.save.tempID.push({id:paquete[31].split(':')[0], temperatura:parseFloat(paquete[31].split(':')[1])})
								if(paquete[32] != ':')
									data_return.save.tempID.push({id:paquete[32].split(':')[0], temperatura:parseFloat(paquete[32].split(':')[1])})
								if(data_return.save.tempID.length == 0)
									delete data_return.save.tempID
							}
						}
						*/
						if(msn_i == 'emergency_report' || msn_i == 'alert'){
							data_return.respuesta = Buffer.from(String("ST600CMD;"+paquete[1]+";02;AckEmerg"), 'hex')
						}else{
							data_return.respuesta = Buffer.from(String(""), 'hex')
						}
						
					}
					break
					case 'travel_event_report':{
						data_return.save.tipomsn = this.tipoMensaje(59)
						data_return.save.serialmsn = 
							Math.floor(
								new Date(
									paquete[4].slice(0,4)+'-'+
									paquete[4].slice(4,6)+'-'+
									paquete[4].slice(6,8)+'T'+
									paquete[5]
								)
							/ 1000)
						var registro = new Date(
							paquete[4].slice(0,4)+'-'+
							paquete[4].slice(4,6)+'-'+
							paquete[4].slice(6,8)+'T'+
							paquete[5]
						)
						data_return.save.registro = registro
						data_return.save.energiaExternaVol = paquete[6]
						data_return.save.energiaInternaVol = paquete[7]
						data_return.save.realtime = false
						data_return.save.travelReportInfo = {}
						data_return.save.travelReportInfo.distanciaRec = parseFloat(paquete[8])
						data_return.save.travelReportInfo.tiempoViaje = parseFloat(paquete[9])
						data_return.save.travelReportInfo.latitudIn = parseFloat(paquete[10])
						data_return.save.travelReportInfo.longitudIn = parseFloat(paquete[11])
						data_return.save.travelReportInfo.latitudOut = parseFloat(paquete[12])
						data_return.save.travelReportInfo.longitudOut = parseFloat(paquete[13])
						data_return.save.travelReportInfo.velocidadMed = parseFloat(paquete[14])
						data_return.save.travelReportInfo.velocidadMax = parseFloat(paquete[15])
						data_return.save.travelReportInfo.velocidadMaxTiempoAc = parseFloat(paquete[16])
						data_return.save.travelReportInfo.tiempoEstacionado = parseFloat(paquete[17])
						data_return.save.travelReportInfo.driverID = paquete[39]
						
						data_return.save.travelReportDatos = []
						data_return.save.travelReportDatos.push(parseFloat(paquete[18]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[19]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[20]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[21]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[22]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[23]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[24]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[25]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[26]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[27]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[28]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[29]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[30]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[31]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[32]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[33]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[34]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[35]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[36]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[37]))
						data_return.save.travelReportDatos.push(parseFloat(paquete[38]))
						
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.firmwareSoftwareVersion = paquete[3]
						data_return.save.hardwareVersion = paquete[2]
						
						data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
					}
					break
					case 'keep_alive':{
						data_return.save.tipomsn = this.tipoMensaje(144)
						data_return.save.serialmsn = 
							Math.floor(todayDate.getTime() / 1000)
						var registro = new Date(nowDate)
						data_return.save.registro = registro
						data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
					}
					break
					case 'data_report_delivered_rs232':{
						data_return.save.tipomsn = this.tipoMensaje(145)
						data_return.save.serialmsn = 
							Math.floor(
								new Date(
									paquete[4].slice(0,4)+'-'+
									paquete[4].slice(4,6)+'-'+
									paquete[4].slice(6,8)+'T'+
									paquete[5]
								)
							/ 1000)
						var registro = new Date(
							paquete[4].slice(0,4)+'-'+
							paquete[4].slice(4,6)+'-'+
							paquete[4].slice(6,8)+'T'+
							paquete[5]
						)
						data_return.save.registro = registro
						data_return.save.latitud = parseFloat(paquete[11])
						data_return.save.longitud = parseFloat(paquete[12])
						data_return.save.velocidad = parseFloat(paquete[13])
						data_return.save.direccion = parseFloat(paquete[14])
						data_return.save.odometro = parseFloat(paquete[17])
						data_return.save.senal = parseInt(paquete[10])
						data_return.save.nosatelites = parseInt(paquete[15])
						data_return.save.lbsBanda = '3G'
						data_return.save.lbsRegistro = registro
						data_return.save.lbsMCC = parseInt(paquete[7])
						data_return.save.lbsMNC = parseInt(paquete[8])
						var ciHex = Buffer.from(paquete[6], 'hex')
						var lacHex = Buffer.from(paquete[9], 'hex')
						data_return.save.lbsTowers = 
							[
								{
									LAC: lacHex.slice(0,2).readInt16BE(0),
									CI: ciHex.slice(0,4).readInt32BE(0),
									LVL:parseFloat(paquete[10]),
								}
							]
						data_return.save.energiaExternaVol = paquete[18]
						data_return.save.energiaInternaVol = paquete[24]
						
						var digitalIO = paquete[19].split("")
						data_return.save.entradasDigital = this.st600IOStatus(digitalIO, paquete[2], 1)
						data_return.save.salidasDigital = this.st600IOStatus(digitalIO, paquete[2], 0)
						
						data_return.save.realtime = (paquete[25]=='1'?true:false)
						data_return.save.lbsEstado = true
						data_return.save.gnnsEstado = true
						data_return.save.gpsFixed = (paquete[16]=="1"?true:false)
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.firmwareSoftwareVersion = paquete[3]
						data_return.save.hardwareVersion = paquete[2]
						data_return.save.horasManejando = parseFloat(paquete[23])
						data_return.save.RSMensaje = paquete[21]
						data_return.save.RSCodeMensaje = "string"
						data_return.save.RSRegistro = registro
						data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
					}
					break
					case 'management_report':{
						data_return.save.tipomsn = this.tipoMensaje(0)
						data_return.save.serialmsn = 
							Math.floor(
								new Date(
									paquete[4].slice(0,4)+'-'+
									paquete[4].slice(4,6)+'-'+
									paquete[4].slice(6,8)+'T'+
									paquete[5]
								)
							/ 1000)
						var registro = new Date(
							paquete[4].slice(0,4)+'-'+
							paquete[4].slice(4,6)+'-'+
							paquete[4].slice(6,8)+'T'+
							paquete[5]
						)
						data_return.save.registro = registro
						data_return.save.realtime = false
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
					}
					break
					case 'crash_reconstruction_report':{
						data_return.save.tipomsn = this.tipoMensaje(0)
						data_return.save.serialmsn = 
							Math.floor(
								new Date(
									paquete[4].slice(0,4)+'-'+
									paquete[4].slice(4,6)+'-'+
									paquete[4].slice(6,8)+'T'+
									paquete[5]
								)
							/ 1000)
						var registro = new Date(
							paquete[4].slice(0,4)+'-'+
							paquete[4].slice(4,6)+'-'+
							paquete[4].slice(6,8)+'T'+
							paquete[5]
						)
						data_return.save.registro = registro
						data_return.save.realtime = false
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
					}
					break
					case 'comando-res':{
						data_return.save.tipomsn = this.tipoMensaje(140)
						data_return.save.serialmsn = 
							Math.floor(
								todayDate.getTime()
							/ 1000)
						var registro = todayDate
						data_return.save.registro = registro
						data_return.save.firmwareSoftwareVersion = paquete[3]
						var mensajeCMD = ""
						for(var i=0;i<paquete.length;i++){
							mensajeCMD += paquete[i]+";"
						}
						data_return.save.CMDMensaje = mensajeCMD
						data_return.save.CMDRegistro = registro
						data_return = this.st600ConfigAndStatus(paquete[4], paquete, data_return)
						data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
					}
					break
					default:{
						data_return.save.protocolotipo = 10
						data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
					}
					break
				}
			}
			
		}
		return data_return
	},
	st600ModelSelect:function(model){
		switch (model) {
			case "20":{
				return 'ST600R (20)'
			}
			break
			case "21":{
				return 'ST600V (21)'
			}
			break
			case "22":{
				return 'ST630 (22)'
			}
			break
			case "23":{
				return 'ST640 (23)'
			}
			break
			case "24":{
				return 'ST650 (24)'
			}
			break
			case "33":{
				return 'ST600LC (33)'
			}
			break
			case "34":{
				return 'ST600M (34)'
			}
			break
			case "35":{
				return 'ST600MD (35)'
			}
			break
			case "36":{
				return 'ST640R-iButton&RFID (36)'
			}
			break
			default:{
				return 'ST600 ('+model+')'
			}
			break
		}
	},
	st600ConfigAndStatus:function(config, paquete, data_return){
		switch (config) {
			case 'Reset':{
				data_return.save.protocolotipo = 3
				data_return.save.resetFactoryRegistro = data_return.save.registro
			}
			break
			case 'Preset':
			case 'PresetA':{
				data_return.save.protocolotipo = 3
				if(paquete[5] != null){
					var paqueteUn = paquete.join(';')
					var configPresets = paqueteUn.match(/([A-Z]{3}[^A-Z]{3,})/g)
					for(configPreset of configPresets){
						data_return = this.st600ConfigPreset(configPreset, data_return)
					}
				}
			}
			break
			case 'AckEmerg':{
				data_return.save.protocolotipo = 10
			}
			break
			case 'Enable1':
			case 'Enable2':
			case 'Enable3':
			case 'Enable4':
			case 'Disable1':
			case 'Disable2':
			case 'Disable3':
			case 'Disable4':{
				var tipoMensaje
				if(config.includes("Disable")){
					if(config.includes("1")){
						tipoMensaje = this.tipoMensaje(61)
					}else if(config.includes("2")){
						tipoMensaje = this.tipoMensaje(63)
					}else if(config.includes("3")){
						tipoMensaje = this.tipoMensaje(65)					
					}else if(config.includes("4")){
						tipoMensaje = this.tipoMensaje(67)					
					}else{
						tipoMensaje = this.tipoMensaje(0)
					}
				}else{
					if(config.includes("1")){
						tipoMensaje = this.tipoMensaje(60)
					}else if(config.includes("2")){
						tipoMensaje = this.tipoMensaje(62)
					}else if(config.includes("3")){
						tipoMensaje = this.tipoMensaje(64)					
					}else if(config.includes("4")){
						tipoMensaje = this.tipoMensaje(65)					
					}else{
						tipoMensaje = this.tipoMensaje(0)
					}
				}
				data_return.save.tipomsn = tipoMensaje
				if(paquete[5] == null){
					data_return.save.protocolotipo = 2
				}else{
					data_return.save.protocolotipo = 1
					data_return.save.serialmsn = 
					Math.floor(
						new Date(
							paquete[5].slice(0,4)+'-'+
							paquete[5].slice(4,6)+'-'+
							paquete[5].slice(6,8)+'T'+
							paquete[6]
						)
					/ 1000)
					data_return.save.registro = new Date(
						paquete[5].slice(0,4)+'-'+
						paquete[5].slice(4,6)+'-'+
						paquete[5].slice(6,8)+'T'+
						paquete[6]
					)
					data_return.save.CMDRegistro = data_return.save.registro
					data_return.save.latitud = parseFloat(paquete[8])
					data_return.save.longitud = parseFloat(paquete[9])
					data_return.save.velocidad = parseFloat(paquete[10])
					data_return.save.direccion = parseFloat(paquete[11])
					data_return.save.nosatelites = parseInt(paquete[12])
					data_return.save.gpsFixed = (paquete[13]=="1"?true:false)
					data_return.save.odometro = parseFloat(paquete[14])
					data_return.save.energiaExternaVol = paquete[15]
					data_return.save.entradasDigital = this.st600IOStatus(paquete[16].split(""), null, 1)
					data_return.save.salidasDigital = this.st600IOStatus(paquete[16].split(""), null, 0)
				}
			}
			break
			case 'Enable1NoUse':
			case 'Enable2NoUse':
			case 'Enable3NoUse':
			case 'Enable4NoUse':
			case 'Disable1NoUse':
			case 'Disable2NoUse':
			case 'Disable3NoUse':
			case 'Disable4NoUse':{
				data_return.save.protocolotipo = 2
			}
			break
			case 'ReqIMSI':{
				data_return.save.protocolotipo = 3
				if(paquete[5] != null)
					data_return.save.imsi = paquete[5]
			}
			break
			case 'ReqICCID':{
				data_return.save.protocolotipo = 3
				if(paquete[5] != null)
					data_return.save.iccid = paquete[5]
			}
			break
			case 'ReqDriverID':{
				data_return.save.protocolotipo = 3
				if(paquete[5] != null)
					data_return.save.driverID = paquete[5]
				
			}
			break
			case 'ReqVol':{
				data_return.save.protocolotipo = 3
				if(paquete[5] != null)
					data_return.save.volumenBocina = paquete[5]
			}
			break
			case 'Reboot':{
				data_return.save.protocolotipo = 3
				data_return.save.reinicioRegistro = data_return.save.registro
			}
			break
			case 'GetBatLevel':{
				data_return.save.protocolotipo = 3
				if(paquete[5] != null)
					data_return.save.energiaInternaLVL = paquete[5]
			}
			break
			default:{
				data_return.save.protocolotipo = 2
			}
		}
		return data_return
	},
	st600ConfigPreset:function(configPresetInv, data_return){
		/*if(configPresetInv[10] != null){
			data_return.save.clave = configPresetInv[0]
		}*/
		configPresetInv = configPresetInv.split(";")
		switch (String(configPresetInv[0])) {
			case 'NTW':{
				if(configPresetInv[10] != null){
					data_return.save.authGPRS = 'Desconocido'
					if(configPresetInv[1]=='0'){
						data_return.save.authGPRS = '(0) PAP'
					}else if(configPresetInv[1]=='1'){
						data_return.save.authGPRS = '(1) CHAP'
					}else if(configPresetInv[1]=='A'){
						data_return.save.authGPRS = '(A) Automatica'
					}
					data_return.save.apn = configPresetInv[2]
					data_return.save.apnUser = configPresetInv[3]
					data_return.save.apnPass = configPresetInv[4]
					data_return.save.serverIP = configPresetInv[5]
					data_return.save.serverPort = configPresetInv[6]
					data_return.save.serverIPBackup = configPresetInv[7]
					data_return.save.serverPortBackup = configPresetInv[8]
					data_return.save.numSMSSendInfo = configPresetInv[9]
					data_return.save.simPIN = configPresetInv[10]
				}
			}
			break
			case 'RPT':{
				if(configPresetInv[6] != null){
					data_return.save.intervaloRepIngOff = configPresetInv[1]
					data_return.save.intervaloRepIngOn = configPresetInv[2]
					data_return.save.intervaloRepEmg = configPresetInv[3]
					data_return.save.intentosAckEmg = configPresetInv[4]
					data_return.save.intervaloReqDistancia = configPresetInv[5]
					data_return.save.intervaloReqHeartbeat = configPresetInv[6]
				}
			}
			break
			case 'EVT':{
				if(configPresetInv[19] != null){
					data_return.save.tipoIgnicion = 'Desconocido'
					if(configPresetInv[1]=='0'){
						data_return.save.tipoIgnicion = '(0) No usa ignicion'
					}else if(configPresetInv[1]=='1'){
						data_return.save.tipoIgnicion = '(1) Usa linea de ignición'
					}else if(configPresetInv[1]=='2'){
						data_return.save.tipoIgnicion = '(2) Ignición virtual (potencia de volts)'
					}else if(configPresetInv[1]=='3'){
						data_return.save.tipoIgnicion = '(3) Ignición virtual (movimiento)'
					}
					
					data_return.save.entradasConfig = [
						{'lugar':1, 'tipo':configPresetInv[4], 'tiempo':configPresetInv[7]},
						{'lugar':2, 'tipo':configPresetInv[5], 'tiempo':configPresetInv[8]},
						{'lugar':3, 'tipo':configPresetInv[6], 'tiempo':configPresetInv[9]}
					]
					data_return.save.salidasConfig = [
						{'lugar':1, 'tipo':configPresetInv[10], 'GND':(configPresetInv[12]=='0'?true:false), 'pulsoNumero':configPresetInv[14], 'pulsoONDuracion':configPresetInv[15], 'pulsoOFFDuracion':configPresetInv[16]},
						{'lugar':2, 'tipo':configPresetInv[11], 'GND':(configPresetInv[13]=='0'?true:false), 'pulsoNumero':configPresetInv[17], 'pulsoONDuracion':configPresetInv[18], 'pulsoOFFDuracion':configPresetInv[19]},
					]
					if(configPresetInv[20] != null && configPresetInv[24] != null)
						data_return.save.entradasConfig.push({'lugar':4, 'tipo':configPresetInv[20], 'tiempo':configPresetInv[24]})
					if(configPresetInv[21] != null && configPresetInv[22] != null)
						data_return.save.salidasConfig.push({'lugar':4, 'tipo':configPresetInv[21], 'GND':(configPresetInv[22]=='0'?true:false)})
					if(configPresetInv[23] != null && configPresetInv[25] != null)
						data_return.save.entradasConfig.push({'lugar':5, 'tipo':configPresetInv[23], 'tiempo':configPresetInv[25]})
					if(configPresetInv[26] != null){
						if(configPresetInv[26] == '0'){
							data_return.save.RSBaud = '(0) Sin Uso'
						}else if(configPresetInv[26] == '1'){
							data_return.save.RSBaud = '(1) 4800bps'
						}else if(configPresetInv[26] == '2'){
							data_return.save.RSBaud = '(2) 9600bps'
						}else if(configPresetInv[26] == '3'){
							data_return.save.RSBaud = '(3) 19200bps'
						}else if(configPresetInv[26] == '4'){
							data_return.save.RSBaud = '(4) 38400bps'
						}else if(configPresetInv[26] == '5'){
							data_return.save.RSBaud = '(5) 115200bps'
						}else if(configPresetInv[26] == '6'){
							data_return.save.RSBaud = '(6) 2400bps'
						}
					}
				}
			}
			break
			case 'GSM':{
				if(configPresetInv[6] != null){
					data_return.save.simLock = (configPresetInv[1]=='1'?true:false)
					data_return.save.managerActivo = 
					[
						(configPresetInv[2]==''?false:configPresetInv[2]),
						(configPresetInv[3]==''?false:configPresetInv[3]),
						(configPresetInv[4]==''?false:configPresetInv[4]),
						(configPresetInv[5]==''?false:configPresetInv[5])
					]
					data_return.save.callLock = (configPresetInv[6]=='1'?true:false)
					
				}
			}
			break
			case 'SVC':{
				if(configPresetInv[10] != null){
					data_return.save.parkingLock = (configPresetInv[1]=='1'?true:false)
					data_return.save.limiteVelocidadAlt = configPresetInv[2]
					if(configPresetInv[3] == '0')
						data_return.save.modoDormido = '(0) Desactivado'
					if(configPresetInv[3] == '1')
						data_return.save.modoDormido = '(1) Modo dormido profundo'
					if(configPresetInv[3] == '2')
						data_return.save.modoDormido = '(2) Modo dormido'
					data_return.save.conectPersistente = (configPresetInv[4]=='0'?true:false)
					data_return.save.verificadorEnergiaExterna = (configPresetInv[7]=='1'?true:false)
					data_return.save.verificadorAntenaGPS = (configPresetInv[8]=='1'?true:false)
					data_return.save.verificadorEnergiaExterna = (configPresetInv[9]=='1'?true:false)
					data_return.save.sensorGTipo = configPresetInv[10]
				}
			}
			break;
			case 'ADP':{
				if(configPresetInv[5] != null){
					data_return.save.reporteCRR = (configPresetInv[5]=='1'?true:false)
				}
			}
			break
			case 'BAT':{
				if(configPresetInv[2] != null){
					data_return.save.verificadorEnergiaExternaAutoOff = (configPresetInv[1]=='1'?true:false)
					data_return.save.verificadorEnergiaExternaUmbral = configPresetInv[2]
				}
			}
			break
			case 'MBV':{
				// FALTA INTEGRAR
				if(configPresetInv[7] != null){
					data_return.save.voltajeConfigurado = configPresetInv[3]
					data_return.save.voltajeOperacionProtecion12v = configPresetInv[4]
					data_return.save.voltajeOperacionProtecion24v = configPresetInv[5]
					data_return.save.voltajeIgnicionVirtualOn = configPresetInv[6]
					data_return.save.voltajeIgnicionVirtualOff = configPresetInv[7]
				}
			}
			break
			case 'NPT':{
				if(configPresetInv[7] != null){
					data_return.save.intervaloReqAngulo = configPresetInv[1]
					if(configPresetInv[2]=='0')
						data_return.save.saveBuffer = '(0) FIFO'
					if(configPresetInv[2]=='1')
						data_return.save.saveBuffer = '(1) LIFO'
					data_return.save.jammerTipo = configPresetInv[5]
					data_return.save.jammerConfigDistancia = configPresetInv[6]
					data_return.save.jammerConfigTiempo = configPresetInv[7]
				}
			}
			break;
			default:{}
		}
		return data_return
	},
	st600IOStatus:function(digitalIO, modelo, IO){
		var entradasDigital, salidasDigital
		if(modelo == '21' || digitalIO.length == 8){ // Solo para el modelo 21
			entradasDigital =
				[
					(digitalIO[0]=='0'?false:true),
					(digitalIO[1]=='0'?false:true),
					(digitalIO[2]=='0'?false:true),
					(digitalIO[3]=='0'?false:true),
					(digitalIO[4]=='0'?false:true)
				]
			salidasDigital = 
				[
					(digitalIO[5]=='0'?false:true),
					(digitalIO[6]=='0'?false:true),
					(digitalIO[7]=='0'?false:true)
				]
		}else{
			entradasDigital =
				[
					(digitalIO[0]=='0'?false:true),
					(digitalIO[1]=='0'?false:true),
					(digitalIO[2]=='0'?false:true),
					(digitalIO[3]=='0'?false:true)
				]
			salidasDigital = 
				[
					(digitalIO[4]=='0'?false:true),
					(digitalIO[5]=='0'?false:true)
				]
		}
		if(IO == 1){
			return entradasDigital
		}else{
			return salidasDigital
		}
		 
	},
	
	st300IOStatus:function(digitalIO, modelo, IO){
		var entradasDigital, salidasDigital
		if(modelo == '13'){
			entradasDigital =
			[
				(digitalIO[0]=='0'?false:true),
				(digitalIO[1]=='0'?false:true),
				(digitalIO[2]=='0'?false:true),
				(digitalIO[3]=='0'?false:true),
				(digitalIO[4]=='0'?false:true),
				(digitalIO[5]=='0'?false:true)
			]
		salidasDigital = 
			[
				(digitalIO[6]=='0'?false:true),
				(digitalIO[7]=='0'?false:true)
			]
		}else if(modelo == '10' || digitalIO.length == 8){
			entradasDigital =
				[
					(digitalIO[0]=='0'?false:true),
					(digitalIO[1]=='0'?false:true),
					(digitalIO[2]=='0'?false:true),
					(digitalIO[3]=='0'?false:true),
					(digitalIO[4]=='0'?false:true)
				]
			salidasDigital = 
				[
					(digitalIO[5]=='0'?false:true),
					(digitalIO[6]=='0'?false:true),
					(digitalIO[7]=='0'?false:true)
				]
		}else{
			entradasDigital =
				[
					(digitalIO[0]=='0'?false:true),
					(digitalIO[1]=='0'?false:true),
					(digitalIO[2]=='0'?false:true),
					(digitalIO[3]=='0'?false:true)
				]
			salidasDigital = 
				[
					(digitalIO[4]=='0'?false:true),
					(digitalIO[5]=='0'?false:true)
				]
		}
		if(IO == 1){
			return entradasDigital
		}else{
			return salidasDigital
		}
		 
	},
	
	// Herramientas
	hex2bin:function (hex, pad=8){
		return (parseInt(hex, 16).toString(2)).padStart(pad, '0');
	}

}