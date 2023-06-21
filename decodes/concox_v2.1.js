var CRCITU16 = require('./crc16.js')
module.exports = {
		concox: {
			'AT6': {
				'identificador':'7878',
				'msn': {
					'login_message': {
						'hex': '01',
						'titulo': 'Login Message',
						'protocolotipo': 0,
					},
					'heartbeat_message': {
						'hex': '23',
						'titulo': 'Heartbeat Message',
						'protocolotipo': 0,
					},
					'heartbeat_message_gv20': {
						'hex': '13',
						'titulo': 'Heartbeat Message',
						'protocolotipo': 0,
						'keyname': 'heartbeat_message',
					},
					'position_message': {
						'hex': '22',
						'titulo': 'Position Message',
						'protocolotipo': 1,
					},
					'position_message_jmll01': {
						'hex': '70',
						'titulo': 'Position Message',
						'protocolotipo': 1,
					},
					'position_message_gv20': {
						'hex': '12',
						'titulo': 'Position Message',
						'protocolotipo': 1,
						'keyname': 'position_message',
					},
					'alarm_message': {
						'hex': '26',
						'titulo':'Alarm Message',
						'protocolotipo': 1,
					},
					'alarm_message_gv20': {
						'hex': '16',
						'titulo': 'Alarm Message',
						'protocolotipo': 1,
						'keyname': 'alarm_message',
					},
					'alarm_message_fences': { //Para el GV20
						'hex': '27',
						'titulo':'Alarm Message Fences',
						'protocolotipo': 1,
					},
					'alarm_message_lbs': { //Para el AT6
						'hex': '19',
						'titulo': 'Alarm Message only LBS',
						'protocolotipo': 1,
					},
					'information_transmission_packet': {
						'hex': '94',
						'titulo': 'Information transmission packet',
						'protocolotipo': 5,
					},
					'comando_res': {
						'hex': '21',
						'titulo': 'Resquest CMD',
						'protocolotipo': 2,
					},
					'comando_res_gv20': {
						'hex': '15',
						'titulo': 'Resquest CMD',
						'protocolotipo': 2,
						'keyname': 'comando_res',
					}
				}
			}
		},
		tipoMensaje: function(mensaje, adicional=null) {
			var traductorMensaje = 0
			switch (mensaje) {
				case 'A04':
				case 'A05':
				case 'P09':
				case 'A0A':
				case 'A0B':
				case 'A0D':
				case 'A10':
				case 'A12':
				case 'A14':
				case 'A16':
				case 'A17':
				case 'A24':
				case 'A28':
				case 'A32':
				case 'E14':
				case 'E15':
				traductorMensaje = 0
				break;
				
				case 'A01':
				traductorMensaje = 3
				break;
				
				case 'A0E':
				case 'A0F':
				case 'A15':
				case 'A19':
				case 'E22':
				traductorMensaje = 6
				break;
				
				case 'P01':
				traductorMensaje = 9
				break;
				
				case 'I01':
				traductorMensaje = 11
				break;
				
				case 'E1b':
				traductorMensaje = 23
				break;
				
				case 'A20':
				traductorMensaje = 29
				break;
				
				case 'E1a':
				traductorMensaje = 32
				break;
				
				case 'A11':
				traductorMensaje = 44
				break;
				
				case 'A0C':
				traductorMensaje = 45
				break;
				
				case 'A02':
				case 'E21':
				traductorMensaje = 46
				break;
				
				case 'A09':
				traductorMensaje = 53
				break;
				
				case 'P02':
				case 'P04':
				case 'P05':
				case 'P06':
				case 'P07':
				case 'P08':
				case 'P0A':
				case 'P0D':
				case 'P0E':
				case 'P00':
				case 'A00':
				case 'E00':
				traductorMensaje = 58
				break;
				
				case 'A13':
				traductorMensaje = 83
				break;
				
				case 'E12':
				traductorMensaje = 114
				break;
				
				case 'A18':
				case 'E22':
				traductorMensaje = 115
				break;
				
				case 'A03':
				case 'E20':
				traductorMensaje = 123
				break;
				
				case 'E1c':
				traductorMensaje = 128
				break;
				
				case 'E1d':
				traductorMensaje = 129
				break;
				
				case 'E13':
				traductorMensaje = 132
				break;
				
				case 'E10':
				traductorMensaje = 154
				break;
				
				case 'E11':
				traductorMensaje = 155
				break;
				
				case 'E17':
				traductorMensaje = 156
				break;
				
				case 'E18':
				traductorMensaje = 157
				break;
				
				case 'E19':
				traductorMensaje = 158
				break;
				
				case 'E1e':
				traductorMensaje = 159
				break;
				
				case 'E1f':
				traductorMensaje = 160
				break;
				
				case 'E16':
				traductorMensaje = 161
				break;
				
				
				
				// case 'AAAA':
				// traductorMensaje = 0
				// break;
				
				default: {
					var mensajeValue = mensaje.toString().replace(/ +/g, '');
					// Remove thousands separators (a . or , followed by three digits)
					mensajeValue = mensajeValue.replace(/[,.](\d{3})/g, '$1');
					// Normalize decimal point
					mensajeValue = mensajeValue.replace(/,/g, '.');
					// Parse
					traductorMensaje = parseFloat(mensajeValue)
					if(traductorMensaje.isNaN)
						traductorMensaje = 0
				}
				
				
			}
//			console.log('mensaje', mensaje)
//			console.log('traductorMensaje', traductorMensaje)
			return traductorMensaje
		},
		at6: function (buffer, unitIDMotor = null) {
			var data_return = {}
			data_return.save = {}
			var paquete = 0
			//Valida si el bit de inicio es 7979
			if (buffer.slice(0,2).toString('hex') == '7979') {
				//Obtenemos el tamaño del paquete
				paquete = buffer.slice(2,4).readUInt16BE(0)
				//console.log('CUENTA A', paquete)
				paquete = paquete + 6
				
			}else if(buffer.toString('hex').length == (Buffer.from('00'+buffer.slice(2,3).toString('hex'), 'hex').readInt16BE(0) + 4)){
				//var cuentG = Buffer.from('00'+buffer.slice(2,3).toString('hex'))
				paquete =  buffer.slice(2,3).readInt16BE(0)
				//console.log('CUENTA C', paquete)
				paquete = paquete + 5
			}else{
				var cuentG = Buffer.from('00'+buffer.slice(2,3).toString('hex'), 'hex')
				//console.log('CUENTA B', cuentG)
				paquete = cuentG.readInt16BE(0)
				//console.log('CUENTA B', paquete)
				paquete = paquete + 5
			}
			//Obtiene la mitad del tamaño del buffer en hexadecimal
			var paqueteCount = (buffer.toString('hex').length / 2)
			//Compara el tamaño del paquete para saber si es un paquete valido
			if(paquete != paqueteCount) {
				//Devolvemos que es paquete erroneo
				data_return.error = "Error de paquete, No completo"
				console.log('paqueteCount', paqueteCount)
				console.log('paquete', paquete)
				console.log('Error de paquete, No completo', buffer.toString('hex'))
				return data_return
			}
			var mensaje = ""
			//Validamos si el bit de inicio incia con 7979
			if(buffer.slice(0,2).toString('hex') == '7979') {
				//Asigna el numero de protocolo a mensaje
				var mensaje = buffer.slice(4,5).toString('hex')
			} else {
				//Asigna el numero de protocolo a mensaje
				var mensaje = buffer.slice(3,4).toString('hex')
			}
			//Empieza a recorrer los mensajes del arreglo de AT6 y GV20
			for(var msn_i in this.concox.AT6.msn) {
				//almacena el tipo de mensaje
				var msn = this.concox.AT6.msn[msn_i]
				//valida si el mensaje en el valor hexa es 01(login) es igual al mensaje que se recibe(buffer)
				if (mensaje == msn.hex) {
					//valida cuando el hexa sea 01
					if (msn.hex == '01') {
						//Almacenamos el terminal ID en ambas variblas del objecto
						data_return.save.unitid = String(parseInt(buffer.slice(4,12).toString('hex')))
						data_return.identificadorUnitID = parseInt(buffer.slice(4,12).toString('hex'))
					} else {
						//Sino le pasamos lo que nos envia en el UnitIdMotor
						data_return.save.unitid = unitIDMotor
					}
					data_return.save.submodeloGPS = ''
					data_return.save.motorcom = 0
					data_return.save.crudo = buffer.toString('hex')
					data_return.save.protocolomsn = msn_i
					data_return.save.protocolotipo = msn.protocolotipo
					// Variables de ayuda
					var nowDate = Date.now()
					var todayDate = new Date(nowDate)
					// Separador de mensaje
					switch (msn_i) {
						case 'login_message': {
							// Registro json
							var registro = new Date(nowDate)
							//Hace refeencia a que el equipo conecto
							data_return.save.tipomsn = this.tipoMensaje(143)
							data_return.save.serialmsn = Math.floor(todayDate.getTime() / 1000)
							data_return.save.registro = registro
							data_return.save.realtime = true
							data_return.save.modoReporte = data_return.save.tipomsn
							//valida el tamaño para saber a que GPS responder
							if (buffer.length > 18 ) {
								//Es un AT6 porque son 22 bits
								data_return.save.marcaGPS = 'concox'
								data_return.save.modeloGPS = 'AT6'
								data_return.save.identificadorGPS = 'AT6'
								data_return.respuesta = this.at6Res(buffer, [16,18])
							} else {
								//Es un gv20 porque son solo 18 bits maximo
								data_return.save.marcaGPS = 'concox'
								data_return.save.modeloGPS = 'GV20'
								data_return.save.identificadorGPS = 'GV20'
								data_return.respuesta = this.at6Res(buffer, [12,14])
							}
						}
						break
						case 'heartbeat_message_gv20':
						case 'heartbeat_message': {
							// Registro json
							var registro = new Date(nowDate)
							//Hace  referencia a que conecto por heartbeat
							data_return.save.tipomsn = this.tipoMensaje(144)
							data_return.save.registro = registro
							data_return.save.realtime = true
							data_return.save.modoReporte = data_return.save.tipomsn
							//Validamos el tipo de GPS si es AT6
							if (msn.hex == '23') {
								//Como es mayo de 15 es un AT6 ya que tiene 16 bits
								data_return.save.marcaGPS = 'concox'
								data_return.save.modeloGPS = 'AT6'
								data_return.save.identificadorGPS = 'AT6'
								//Obtiene el serail number
								data_return.save.serialmsn = buffer.slice(10,12).readUInt16BE(0)
								
								// Voltaje batería interna AT6 (TMP) cambiar solución
								var voltaje100 = 58
								var voltaje0 = 355
								var energiaInternaLVL = buffer.slice(5,7).readUInt16BE(0) //Voltage level
								data_return.save.energiaInternaVol = (energiaInternaLVL / 100)
								energiaInternaLVL = energiaInternaLVL - voltaje0
								energiaInternaLVL = energiaInternaLVL * 100
								energiaInternaLVL = energiaInternaLVL / voltaje100
								if(energiaInternaLVL > 100)
									energiaInternaLVL = 100
								data_return.save.energiaInternaLVL = Math.round(energiaInternaLVL)
								energiaInternaLVL = energiaInternaLVL * 100
								data_return.save.energiaExternaVol = Math.round(energiaInternaLVL)
								
								
								//Envia la respuesta al AT6 con su serial number
								data_return.respuesta = this.at6Res(buffer, [10,12])
							} else if(msn.hex == '13') {
								//Es un GV20 porque tiene 15 bits solamente
								data_return.save.marcaGPS = 'concox'
								data_return.save.modeloGPS = 'GV20'
								data_return.save.identificadorGPS = 'GV20'
								//Obtenemos el serial number y lo asignamos al objeto
								data_return.save.serialmsn = buffer.slice(9,11).readUInt16BE(0)
								//Enviamos la respuesa pasando el serial number
								data_return.respuesta = this.at6Res(buffer, [9,11])
							}
						}
						break
						case 'position_message_gv20':
						case 'position_message': {
							//Validamos el tipo de GPS, validamos si es un AT6
							if (msn.hex == '22') {
								//Es un AT6 porque tiene 39 bits la cadena
								data_return.save.marcaGPS = 'concox'
								data_return.save.modeloGPS = 'AT6'
								data_return.save.identificadorGPS = 'AT6'
								//Hace referencia al Data Upload mode que es Autoreporte
								data_return.save.tipomsn = this.tipoMensaje('P'+buffer.slice(31,32).toString('hex'))
								//Este es el serial number
								data_return.save.serialmsn = buffer.slice(33,35).readUInt16BE(0)
							} else if(msn.hex == '12') {
								//Es un GV20 porque solo tiene 36 bits en el crudo
								data_return.save.marcaGPS = 'concox'
								data_return.save.modeloGPS = 'GV20'
								data_return.save.identificadorGPS = 'GV20'
								//Hace referencia al Data Upload mode que es Autoreporte
								data_return.save.tipomsn = this.tipoMensaje(58) //Data upload mode no esta pero es Autoreporte
								if(buffer.length == 40) {
									data_return.save.serialmsn = buffer.slice(34,36).readUInt16BE(0) //Serial number en 40
								} else {
									data_return.save.serialmsn = buffer.slice(30,32).readUInt16BE(0) //Serial number
								}
							}
							//Lo que si se repite en ambos GPS
							var registro = new Date (
								'20'+
								("00"+buffer.slice(4,5).readInt8(0)).slice(-2)+'-'+  //datetime
								("00"+buffer.slice(5,6).readInt8(0)).slice(-2)+'-'+  //datetime
								("00"+buffer.slice(6,7).readInt8(0)).slice(-2)+'T'+  //datetime
								("00"+buffer.slice(7,8).readInt8(0)).slice(-2)+':'+  //datetime
								("00"+buffer.slice(8,9).readInt8(0)).slice(-2)+':'+  //datetime
								("00"+buffer.slice(9,10).readInt8(0)).slice(-2)  	 //datetime
							)
							data_return.save.registro = registro
							var nosatelites = buffer.slice(10,11).toString('hex')
							var sateliteBuffer = Buffer.from("0" + nosatelites[1], "hex")
							data_return.save.nosatelites = parseInt(sateliteBuffer.readInt8(0))
							//data_return.save.nosatelites = parseFloat(nosatelites[1])
							var cursostatus1 = this.hex2bin(buffer.slice(20,21).toString('hex'), 8)
							var cursostatus2 = this.hex2bin(buffer.slice(21,22).toString('hex'), 8)
							//validamos si el GPS es un GV20 para la ACC
							
							if (msn.hex == '12') {
								//es un Gv20 por el hexa 12
								if (typeof cursostatus1[1]!='undefined' || cursostatus1[1]=="1") {
									//Validamos si en el bit 7 es igual a 1 es verdadero(ACC ON) y solo en el primer dato del arreglo
									var estadoACC = [(cursostatus1[0]=="1"?true: false), false, false, false, false]
								} else {
									//Caso contrario todos son falsos
									var estadoACC = [false, false, false, false, false]
								}
								data_return.save.entradasDigital = estadoACC
							} else {
								//Es un AT6 y se guarda así
								data_return.save.entradasDigital = [
									(buffer.slice(30,31).toString('hex')=='00'?false:true), false, false, false, false
								]
							}
							//Se encarga de calcular la latitud
							data_return.save.latitud = (cursostatus1[5]=="0"?-Math.abs((buffer.slice(11,15).readInt32BE(0) / 1800000)):(buffer.slice(11,15).readInt32BE(0) / 1800000))
							//Se encarga de calcular la longitud 
							data_return.save.longitud = (cursostatus1[4]=="1"?-Math.abs((buffer.slice(15,19).readInt32BE(0) / 1800000)):(buffer.slice(15,19).readInt32BE(0) / 1800000))
							//Obtiene la direcciòn de acuerdo a los cursos status
							var direccion = parseInt(cursostatus1[6]+""+cursostatus1[7]+""+cursostatus2[0]+""+cursostatus2[1]+""+cursostatus2[2]+""+cursostatus2[3]+""+cursostatus2[4]+""+cursostatus2[5]+""+cursostatus2[6]+""+cursostatus2[7],2)
							data_return.save.direccion = direccion
							//Obtiene y procesa la velocidad (Speed)
							var bufferVel = new Buffer.from(String('00'+buffer.slice(19,20).toString('hex')), 'hex')
							data_return.save.velocidad = bufferVel.slice(0,2).readInt16BE(0)
							if(msn.hex == '22') {
								if(parseFloat(data_return.save.velocidad) > 5){
									data_return.save.entradasDigital[0] = true
								}
							}
							data_return.save.realtime = (cursostatus1[2]=='0'?true:false)
							data_return.save.gpsFixed = (cursostatus1[3]=='1'?true:false)
							data_return.save.lbsBanda = '3G'
							data_return.save.lbsRegistro = registro
							data_return.save.lbsMCC = buffer.slice(22,24).readInt16BE(0) //MMC
							data_return.save.lbsMNC = buffer.slice(24,25).readInt8(0) //MNC
							var ciDecode = "00"+buffer.slice(27,30).toString('hex') //Cell ID
							ciDecode = Buffer.from(ciDecode, 'hex')
							var lacDecode = buffer.slice(25,27).readInt16BE(0) //LAC
							data_return.save.lbsTowers =
								[{
									LAC: lacDecode,
									CI: ciDecode.readInt32BE(0)
								}]
							data_return.save.modoReporte = data_return.save.tipomsn
							if (msn.hex == '22') {
								//Es un AT6 porque tiene 39 bits la cadena
								data_return.respuesta = this.at6Res(buffer, [33,35])
							} else if(msn.hex == '12') {
								//Es un GV20 porque solo tiene 36 bits en el crudo
								data_return.save.marcaGPS = 'concox'
								data_return.save.modeloGPS = 'GV20'
								data_return.save.identificadorGPS = 'GV20'
								//Hace referencia al Data Upload mode que es Autoreporte
								data_return.save.tipomsn = this.tipoMensaje(58) //Data upload mode no esta pero es Autoreporte
								if(buffer.length == 40) {
									data_return.respuesta = this.at6Res(buffer, [34,36]) //Serial number en 40
								} else {
									data_return.respuesta = this.at6Res(buffer, [30,32]) //Serial number
								}
							}
						}
						break
						case 'position_message_jmll01':{
							//Validamos el tipo de GPS, validamos si es un JMLL01
							data_return.save.marcaGPS = 'concox'
							data_return.save.modeloGPS = 'JM-LL01'
							data_return.save.submodeloGPS = 'JMLL01'
							data_return.save.identificadorGPS = 'JMLL01'
							//Hace referencia al Data Upload mode que es Autoreporte
							//data_return.save.tipomsn = this.tipoMensaje('P'+buffer.slice(31,32).toString('hex'))
							//Este es el serial number
							//data_return.save.serialmsn = buffer.slice(33,35).readUInt16BE(0)
							
							var modulosPaquetes = this.dividirModuloPaquete(buffer)
							
							for(var imod in modulosPaquetes){
								var modulo = modulosPaquetes[imod]
								var procesado = this.revisarModulo(modulo, data_return)
								data_return.save = Object.assign(data_return.save, procesado)
							}
							var contador = (buffer.toString('hex').length / 2)
							data_return.save.serialmsn = buffer.slice((contador - 6), (contador - 4)).readUInt16BE(0)
							data_return.respuesta = this.at6Res(buffer, (contador - 6), (contador - 4))
							

						}
						break
						case 'alarm_message':
						case 'alarm_message_gv20':
						case 'alarm_message_fences': {
							//valida el bit de inicio para obtener la informacion de numero de serie
							data_return.save.tipomsn = this.tipoMensaje('A'+buffer.slice(34,35).toString('hex'))
							//validamos si es un gv20 con el men.hex o puede ser un AT6 en multiple fences
							if (msn.hex == '27') {
								data_return.save.serialmsn = buffer.slice(37,39).readUInt16BE(0)
							//Validamos si es un AT6 o un GV20 en mensaje normal
							} else if((msn.hex == '26') || (msn.hex == '16')) {
								data_return.save.serialmsn = buffer.slice(36,38).readUInt16BE(0)
							}
							//Obtiene la fecha eviada por el GPS
							var registro = new Date(
								'20'+
								("00"+buffer.slice(4,5).readInt8(0)).slice(-2)+'-'+		//datetime
								("00"+buffer.slice(5,6).readInt8(0)).slice(-2)+'-'+		//datetime
								("00"+buffer.slice(6,7).readInt8(0)).slice(-2)+'T'+		//datetime
								("00"+buffer.slice(7,8).readInt8(0)).slice(-2)+':'+		//datetime
								("00"+buffer.slice(8,9).readInt8(0)).slice(-2)+':'+		//datetime
								("00"+buffer.slice(9,10).readInt8(0)).slice(-2)			//datetime
							)
							data_return.save.registro = registro
							var nosatelites = buffer.slice(10,11).toString('hex') //Quantity of GPS information satellites
							var sateliteBuffer = Buffer.from("0" + nosatelites[1], "hex")
							data_return.save.nosatelites = parseInt(sateliteBuffer.readInt8(0))
							//data_return.save.nosatelites = parseFloat(nosatelites[1])
							var cursostatus1 = this.hex2bin(buffer.slice(20,21).toString('hex'), 8) //Course, Status
							var cursostatus2 = this.hex2bin(buffer.slice(21,22).toString('hex'), 8) //Course, Status
							var direccion = parseInt(cursostatus1[6]+""+cursostatus1[7]+""+cursostatus2[0]+""+cursostatus2[1]+""+cursostatus2[2]+""+cursostatus2[3]+""+cursostatus2[4]+""+cursostatus2[5]+""+cursostatus2[6]+""+cursostatus2[7],2)
							data_return.save.latitud = (cursostatus1[5]=="0"?-Math.abs((buffer.slice(11,15).readInt32BE(0) / 1800000)):(buffer.slice(11,15).readInt32BE(0) / 1800000)) //latitude
							data_return.save.longitud = (cursostatus1[4]=="1"?-Math.abs((buffer.slice(15,19).readInt32BE(0) / 1800000)):(buffer.slice(15,19).readInt32BE(0) / 1800000)) //longitude
							var bufferVel = new Buffer.from(String('00'+buffer.slice(19,20).toString('hex')), 'hex')
							data_return.save.velocidad = bufferVel.slice(0,2).readInt16BE(0)
							data_return.save.direccion = direccion
							data_return.save.realtime = (cursostatus1[2]=='0'?true:false)
							data_return.save.gpsFixed = (cursostatus1[3]=='1'?true:false)
							var terminalinfo = this.hex2bin(buffer.slice(31,32).toString('hex'), 8)
							data_return.save.entradasDigital =
							[
								(terminalinfo[7]=='0'?false:true)
							]
							if((msn.hex == '26') || (msn.hex == '19')) {
								if(parseFloat(data_return.save.velocidad) > 5){
									data_return.save.entradasDigital[0] = true
								}
							}
							
							
							
							var alarmInfo = terminalinfo[2]+''+terminalinfo[3]+''+terminalinfo[4]
							if(alarmInfo == '100')
								data_return.save.tipomsnExtraInfo = '(100) SOS'
							if(alarmInfo == '011')
								data_return.save.tipomsnExtraInfo = '(011) Alarma bateria baja'
							if(alarmInfo == '010')
								data_return.save.tipomsnExtraInfo = '(010) Alarma de corte de energía'
							if(alarmInfo == '001')
								data_return.save.tipomsnExtraInfo = '(001) Alarma de vibración'
								
							data_return.save.lbsBanda = '3G'
							data_return.save.lbsRegistro = registro
							data_return.save.lbsMCC = buffer.slice(23,25).readInt16BE(0) //MMC
							data_return.save.lbsMNC = buffer.slice(25,26).readInt8(0) //MNC
							var ciDecode = "00"+buffer.slice(28,31).toString('hex') //Cell ID
							ciDecode = Buffer.from(ciDecode, 'hex')
							var lacDecode = buffer.slice(26,28).readInt16BE(0)
							data_return.save.lbsTowers =
								[{
									LAC: lacDecode,
									CI: ciDecode.readInt32BE(0)
								}]
							/*
							var energiaInternaLVL = parseInt(buffer.slice(32,33).toString('hex')) //Voltage level
							energiaInternaLVL = (energiaInternaLVL * 100) / 6
							data_return.save.energiaInternaLVL = Math.round(energiaInternaLVL)
							*/
							var senal = parseInt(buffer.slice(33,34).toString('hex')) //GMS signal streegth
							senal = (senal * 100) / 4
							data_return.save.senal = Math.round(senal)
							data_return.save.modoReporte = data_return.save.tipomsn
							//validamos si el GPS es un GV20 con el hexadecimal
							if (msn.hex == '27') {
								data_return.respuesta = this.at6Res(buffer, [37,39])
							} else if((msn.hex == '26') || (msn.hex == '16')) {
								data_return.respuesta = this.at6Res(buffer, [36,38])
							}
						}
						break
						case 'alarm_message_lbs': {
							//Este solo es para el AT6 por lo que se quedo igual
							data_return.save.tipomsn = this.tipoMensaje('A'+buffer.slice(15,17).toString('hex'))
							data_return.save.serialmsn = buffer.slice(17,19).readUInt16BE(0)
							data_return.save.registro = todayDate
							var terminalinfo = this.hex2bin(buffer.slice(12,13).toString('hex'), 8)
							data_return.save.entradasDigital =
							[
								(terminalinfo[7]=='0'?false:true)
							]
							
							var alarmInfo = terminalinfo[2]+''+terminalinfo[3]+''+terminalinfo[4]
							if (alarmInfo == '100')
								data_return.save.tipomsnExtraInfo = '(100) SOS'
							if (alarmInfo == '011')
								data_return.save.tipomsnExtraInfo = '(011) Alarma bateria baja'
							if (alarmInfo == '010')
								data_return.save.tipomsnExtraInfo = '(010) Alarma de corte de energía'
							if (alarmInfo == '001')
								data_return.save.tipomsnExtraInfo = '(001) Alarma de vibración'
								
							data_return.save.lbsBanda = '3G'
							data_return.save.lbsRegistro = registro
							data_return.save.lbsMCC = buffer.slice(4,6).readInt16BE(0)
							data_return.save.lbsMNC = buffer.slice(6,7).readInt8(0)
							var ciDecode = "00"+buffer.slice(9,12).toString('hex')
							ciDecode = Buffer.from(ciDecode, 'hex')
							var lacDecode = buffer.slice(7,9).readInt16BE(0)
							data_return.save.lbsTowers =
								[{
									LAC: lacDecode,
									CI: ciDecode.readInt32BE(0)
								}]
							/*
							var energiaInternaLVL = parseInt(buffer.slice(13,14).toString('hex'))
							energiaInternaLVL = (energiaInternaLVL * 100) / 6
							data_return.save.energiaInternaLVL = Math.round(cauculoLvlVoltajeInterno)
							*/
							var senal = parseInt(buffer.slice(14,15).toString('hex'))
							senal = (senal * 100) / 4
							data_return.save.senal = Math.round(senal)
							data_return.save.modoReporte = data_return.save.tipomsn
							data_return.respuesta = this.at6Res(buffer, [17,19])
						}
						break
						case 'comando_res_gv20': {
							var limiteMensajeCMD = ((buffer.toString('hex').length / 2) - 6)
							data_return.save.tipomsn = this.tipoMensaje(140) //Hace referencia a la respuesta de comando
							data_return.save.serialmsn = buffer.slice(limiteMensajeCMD,(limiteMensajeCMD + 2)).readUInt16BE(0) //Information serial number
							data_return.save.registro = todayDate
							data_return.save.CMDRegistro = todayDate
							data_return.save.CMDEncode = 'ASCII'
							data_return.save.CMDMensaje = buffer.slice(9,(limiteMensajeCMD - 2)).toString('utf8') //Respuesta comando
							data_return.save.CMDBanderaSerial = buffer.slice(5,9).readInt32BE(0)
							data_return.respuesta = "OK"
						}
						break
						case 'comando_res': {
							var limiteMensajeCMD = ((buffer.toString('hex').length / 2) - 6)
							data_return.save.tipomsn = this.tipoMensaje(140) //Hace referencia a la respuesta de comando
							data_return.save.serialmsn = buffer.slice(limiteMensajeCMD,(limiteMensajeCMD + 2)).readUInt16BE(0) //Information serial number
							data_return.save.registro = todayDate
							data_return.save.CMDBanderaSerial = buffer.slice(5,9).readInt32BE(0)
							data_return.save.CMDEncode = (buffer.slice(9,10).toString('hex')=='01'?'ASCII':'UTF16-BE')
							data_return.save.CMDRegistro = todayDate
							if (buffer.slice(9,10).toString('hex')=='01') {
								data_return.save.CMDMensaje = buffer.slice(10,limiteMensajeCMD).toString('ascii')
								//data_return.save.CMDMensaje = buffer.slice(9,(limiteMensajeCMD - 2)).toString('utf8') //Respuesta comando
							} else {
								var bufUTF16BE = Buffer.from(buffer.slice(10,limiteMensajeCMD).toString('hex'),'hex') 
								var reversedbufUTF16BE = bufUTF16BE.swap16() // <Buffer 48 00 65 00 6c 00 6c 00 6f 00 20 00 16 4e 4c 75>
								//const backToJavascriptString = reversedbufUTF16BE.toString("utf16le")
								data_return.save.CMDMensaje = reversedbufUTF16BE.toString("utf16le")
							}
							data_return.respuesta = "OK"
						}
						break
						case 'information_transmission_packet':{
							// Registro json
							var registro = new Date(nowDate)
							//Hace  referencia a que conecto por heartbeat
							data_return.save.tipomsn = this.tipoMensaje('I01')
							data_return.save.registro = registro
							data_return.save.realtime = true
							data_return.save.modoReporte = data_return.save.tipomsn
							data_return.save.marcaGPS = 'concox'
							
							var subprotocolo = String(buffer.slice(5,6).toString('hex'))
							
							if(subprotocolo == '00'){ // Voltaje de bateria
								data_return.save.energiaExternaVol = (parseFloat(buffer.slice(6,8).readUInt16BE(0)) / 100)
							}
							if(subprotocolo == '0a'){ // SIM Info
								var imeiget = parseFloat(buffer.slice(6,14).toString('hex'))
								var imsiget = parseFloat(buffer.slice(14,22).toString('hex'))
								var iccidget = buffer.slice(22,32).toString('hex')
								data_return.save.imei = imeiget
								data_return.save.imsi = imsiget
								data_return.save.iccid = iccidget
							}
							if(subprotocolo == '04'){ // Info
								// Sin asignar es configuración
							}
							var contenidoPaquete = parseFloat(buffer.length)
							var inicioPaqueteSerial = contenidoPaquete - 4
							var finPaqueteSerial = contenidoPaquete - 2
							//Obtiene el serail number
							data_return.save.serialmsn = buffer.slice(inicioPaqueteSerial,finPaqueteSerial).readUInt16BE(0)
							data_return.respuesta = 'OK'
						}
						break
						default: {
							data_return.save.protocolotipo = 10
							data_return.respuesta = "OK"
						}
						break
					}
				}
			}
			return data_return
		},
		//Se encarga de responder a los GPS de AT6 y GV20
		at6Res: function (buffer, serialPos, tipo=0) {
			var errorCheck = '05'+ buffer.slice(3,4).toString('hex') + buffer.slice(serialPos[0],serialPos[1]).toString('hex')
			errorCheck = CRCITU16(errorCheck)
			errorCheck = ("0000" + errorCheck.toString(16)).slice(-4)
			errorCheck = Buffer.from(errorCheck, 'hex')
			var responder = buffer.slice(0,2).toString('hex') + '05' +
				buffer.slice(3,4).toString('hex') +
				buffer.slice(serialPos[0],serialPos[1]).toString('hex') +
				errorCheck.toString('hex') + "0d0a"
			return Buffer.from(responder, 'hex')
		},
		//temporal
		at6gv20CMDConfig: function (cmd, unidad){
			var comandoA = "status#" // device status => 73 74 61 74 75 73 23
			var comandoB = "where#" // device coordinate => 77 68 65 72 65 23
			var comandoC = "url#" // location url	=> 75 72 6c 23
			var comandoD = "gprsset#" // network setting	=> 67 70 72 73 73 65 74 23
			var comandoE = "sos#" // SOS settings	=> 73 6f 73 23
			var comandoF = "timer,10,20#" // GPS data upload time interval	=> 74 69 6d 65 72 23
			var comandoG = "distance#" // GPS data upload distance interval	=> 64 69 73 74 61 6e 63 65 23
			var comandoH = "defense#" // Delayed defense setting	=> 64 65 66 65 6e 73 65 23
			var comandoI = "senalm,on#" // Vibration alarm	=> 73 65 6e 61 6c 6d 2c 6f 6e 23
			var comandoJ = "senalm,off#" // Vibration alarm	=> 73 65 6e 61 6c 6d 2c 6f 66 66 23
			var comandoK = "moving,ON,200,2#" // Displacement alarm setting	=> 6d 6f 76 69 6e 67 2c 6f 6e 23
			var comandoL = "moving,OFF#" // Displacement alarm setting	=> 6d 6f 76 69 6e 67 2c 6f 66 66 23
			var comandoM = "relay,1#" // Power / oil control	=> 72 65 6c 61 79 23
			var comandoN = "reset#" // Restart	=> 72 65 73 65 74 23
			return Buffer.from(comandoA, 'hex')
		},
		//temporal
		CMDConcox: function(comando) {
			var comandoBuffer = Buffer.from(comando.cmd, 'ascii')
			var serial = comando.serial
			serial = ("00000000" + this.decimalToHexString(serial)).slice(-8)
			
			var tamanoComando = 4 + comandoBuffer.length
			var tamanoCompleto = comandoBuffer.length + 10
			
			tamanoCompleto = ("00" + this.decimalToHexString(tamanoCompleto)).slice(-2)
			tamanoComando = ("00" + this.decimalToHexString(tamanoComando)).slice(-2)
			
			var errorCheckRecolector = tamanoCompleto + '80' + tamanoComando + serial + comandoBuffer.toString('hex') + "0001"
			errorCheckRecolector = CRCITU16(errorCheckRecolector)
			errorCheckRecolector = ("0000"+errorCheckRecolector.toString(16)).slice(-4)
			
			var cmdString = "7878"
			cmdString += tamanoCompleto
			cmdString += String("80")
			cmdString += tamanoComando
			cmdString += serial
			cmdString += comandoBuffer.toString('hex')
			cmdString += String("0001")
			cmdString += errorCheckRecolector
			cmdString += String("0D0A")
			
			console.log('Comando: ', comando.cmd)
			console.log('CMD: ', cmdString)
			console.log('CMD ENVIADO', cmdString)
			return Buffer.from(cmdString, 'hex')
		},
		decimalToHexString: function (number) {
			  if (number < 0) {
				number = 0xFFFFFFFF + number + 1;
			  }
			  return number.toString(16).toUpperCase();
		},
		hex2bin:function (hex, pad=8) {
			return (parseInt(hex, 16).toString(2)).padStart(pad, '0')
		},
		dividirModuloPaquete: function(dividir){
			var contador = (dividir.toString('hex').length / 2)
			var inicio = 5
			var termina = contador - 6
			var cuenta = inicio
			var modulos = []
			var extracto = dividir.slice(inicio, termina).toString('hex')
			var moduloseccion = 2
			while(cuenta < termina){
				var modulo = {
					'modulo':null,
					'tamano':null,
					'tamanoHex':null,
					'contenido':null
				};
				var cuentaLLave = cuenta + moduloseccion
				var llaveModulo = dividir.slice(cuenta, cuentaLLave).toString('hex')
				modulo.modulo = llaveModulo
				cuenta += moduloseccion
				var cuentaTamano = cuenta + moduloseccion
				var tamanoModulo = dividir.slice(cuenta, cuentaTamano).readUInt16BE(0)
				modulo.tamanoHex = dividir.slice(cuenta, cuentaTamano).toString('hex')
				modulo.tamano = tamanoModulo
				cuenta += moduloseccion
				// extracion del paquete
				var extracion = dividir.slice(cuenta, (cuenta + tamanoModulo)).toString('hex')
				modulo.contenido = extracion
				cuenta += tamanoModulo
				modulos.push(modulo)
			}
			//console.log('modulos', modulos);
			return modulos
		},
		revisarModulo: function(modulo, data_return){
			var buffer = Buffer.from(modulo.contenido, 'hex')
			
			var respuesta = {}
			switch (modulo.modulo){
				case '0000': // evento de GPS
				break;
				case '0001': // IMEI (hexadecimal)
					respuesta.imei = parseFloat(buffer.toString('hex'))
				break;
				case '0002': // IMSI (hexadecimal)
					respuesta.imsi = buffer.toString('hex')
				break;
				case '0003': // ICCID (hexadecimal)
					respuesta.iccid = buffer.toString('hex')
				break;
				case '0009': // no. de satelites para posicionar
					var nosatelites = buffer.slice(0,1).toString('hex')
					var sateliteBuffer = Buffer.from("0" + nosatelites[1], "hex")
					respuesta.nosatelites = parseInt(sateliteBuffer.readInt8(0))
				break;
				case '000a': // no. de satelites visibles
					var nosatelites = buffer.slice(0,1).toString('hex')
					var sateliteBuffer = Buffer.from("0" + nosatelites[1], "hex")
					respuesta.nosatelitesVisible = parseInt(sateliteBuffer.readInt8(0))
				break;
				case '000b': // Señal satelital
					respuesta.nosatelitesSenal = buffer.toString('hex')
				break;
				case '0011': // LBS main
					// MCC(2) MNC(2) LAC(2) CI(3) RSSI(1)
					respuesta.lbsMCC = buffer.slice(0,2).readInt16BE(0) 
					respuesta.lbsMNC = buffer.slice(2,4).readInt8(0) 
					respuesta[0].LAC = buffer.slice(4,6).readInt16BE(0)
					var ciDecode = "00"+buffer.slice(6,9).toString('hex') //Cell ID
					ciDecode = Buffer.from(ciDecode, 'hex')
					respuesta[0].CI = ciDecode.readInt32BE(0)
					var lvlDecode = "00"+buffer.slice(9,10).toString('hex') //Cell ID
					respuesta[0].LVL = lvlDecode.readInt8(0)
				break;
				case '0012': // LBS secundary
					respuesta[1].LAC = buffer.slice(0,2).readInt16BE(0)
					var ciDecode = "00"+buffer.slice(2,5).toString('hex') //Cell ID
					ciDecode = Buffer.from(ciDecode, 'hex')
					respuesta[1].CI = ciDecode.readInt32BE(0)
					var lvlDecode = "00"+buffer.slice(5,6).toString('hex') //Cell ID
					respuesta[1].LVL = lvlDecode.readInt8(0)
				break;
				case '0016': // GSM Signal CSQ
					//descartada
				break;
				case '0018': // bateria voltaje
					//descartada
				break;
				case '0028': // HDOP
					//descartada
				break;
				case '0029': // Sequence Number
					//descartada
				break;
				case '002a': // Input’s Status
					//Bit 0-3: Door button status (1/0 Door Open/Close),
					//Bit 4-7: Tamper button status (1/0 Removal/Installation) 0xff: Failed to get button status
					
				break;
				case '002b': // Boot Reason
				
				break;
				case '002c': // RTC TIME
					// ignorar los datos no son logicos (unitx timestamp)
				break;
				case '002e': // Mileage statistics
				
				break;
				case '00030': // Reporting mode and parameters of each mode
				
				break;
				case '0031': // Geofence trigger
					//descartada
				break;
				case '0033': // GPS Data
				{
					// 18 bytes
					// 0-4 Time and Date (4 Bytes), Timestamp; INT32 - Big Endian (ABCD)
					// 4-5 Number of GPS satellites (1 Byte), Convert to decimal;
					// 5-7 Height (2 Bytes), Convert to decimal to get result, if in binery the highest bit is 1, it means negative, transfer the last 7 bits to decimal to get the height value.
					// 7-11 Latitude (4 Bytes), Convert to decimal and devide by 1800000
					// 11-15 Longitude (4 Bytes), Convert to decimal and devide by 1800000
					// 15-16 Speed (1 Byte), Convert to decimal
					// 16-17 Course and Status(2 Bytes) Parte 1
					// 17-18 Course and Status(2 Bytes) Parte 2
					var registro = new Date ((buffer.slice(0,4).readInt32BE(0) * 1000))
					respuesta.serialmsn = buffer.slice(0,4).readInt32BE(0)
					
					respuesta.registro = registro
					var cursostatus1 = this.hex2bin(buffer.slice(16,17).toString('hex'), 8)
					var cursostatus2 = this.hex2bin(buffer.slice(17,18).toString('hex'), 8)
					respuesta.latitud = (cursostatus1[5]=="0"?-Math.abs((buffer.slice(7,11).readInt32BE(0) / 1800000)):(buffer.slice(7,11).readInt32BE(0) / 1800000))
					respuesta.longitud = (cursostatus1[4]=="1"?-Math.abs((buffer.slice(11,15).readInt32BE(0) / 1800000)):(buffer.slice(11,15).readInt32BE(0) / 1800000))
					var direccion = parseInt(cursostatus1[6]+""+cursostatus1[7]+""+cursostatus2[0]+""+cursostatus2[1]+""+cursostatus2[2]+""+cursostatus2[3]+""+cursostatus2[4]+""+cursostatus2[5]+""+cursostatus2[6]+""+cursostatus2[7],2)
					respuesta.direccion = direccion
					var bufferVel = new Buffer.from(String('00'+buffer.slice(15,16).toString('hex')), 'hex')
					respuesta.velocidad = bufferVel.slice(0,2).readInt16BE(0)
					respuesta.realtime = (cursostatus1[2]=='0'?true:false)
					respuesta.gpsFixed = (cursostatus1[3]=='1'?true:false)
				}	
				break;
				case '0034': // Report Status
					// generar el evento
					var evento = buffer.slice(0,1).toString('hex')
					var registro = new Date ((buffer.slice(1,5).readInt32BE(0) * 1000))
					respuesta.registro = registro	
					respuesta.tipomsn = this.tipoMensaje('E'+evento)
					respuesta.modoReporte = respuesta.tipomsn
				break;
				case '0035': // GPS is Real Time or Buffer
					respuesta.realtime = (buffer.toString('hex')=='00'?true:false)
				break;
				case '0036': // WIFI
				break;
				case '1000': // Server need to respond the packet 
				break;
				default:
				
			}
			return respuesta
			
		}
	}
