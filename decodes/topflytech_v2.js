module.exports = {
	topflytech:{
		'TLW1':{
			'identificador':'2525',
			'msn':{
				'login_message':{
					'hex': '01',
					'titulo':'Login Message',
					'protocolotipo':0
				},
				'position_message':{
					'hex': '02',
					'titulo':'Position Message',
					'protocolotipo':1
				},
				'position_message_twl2':{
					'hex': '13',
					'titulo':'Position Message',
					'protocolotipo':1,
					'keyname': 'position_message'
				},
				'heartbeat_message':{
					'hex': '03',
					'titulo':'Heartbeat Message',
					'protocolotipo':0
				},
				'alarm_message':{
					'hex': '04',
					'titulo':'Alarm Message',
					'protocolotipo':1
				},
				'alarm_message_twl2':{
					'hex': '14',
					'titulo':'Alarm Message',
					'protocolotipo':1,
					'keyname': 'alarm_message'
				},
				// Desabilitado
				'driver_behavior_GNSS':{
					'hex': '05',
					'titulo':'Driver Behavior via GNSS Message',
					'protocolotipo':6
				},
				'driver_behavior_accel':{
					'hex': '06',
					'titulo':'Driver Behavior via Acceleration Message ',
					'protocolotipo':6
				},
				'accident_acceleration_message':{
					'hex': '07',
					'titulo':'Accident via Acceleration Message',
					'protocolotipo':10
				},
				'RS232_message':{
					'hex': '09',
					'titulo':'RS232 Message',
					'protocolotipo':3
				},
				// Desabilitado
				'BLE_message':{
					'hex': '10',
					'titulo':'BLE Message',
					'protocolotipo':3
				},
				'network_information':{
					'hex': '11',
					'titulo':'Network Information Message ',
					'protocolotipo':1
				},
				// Desabilitado
				'BLE_message_position':{
					'hex': '12',
					'titulo':'BLE Message And Position',
					'protocolotipo':1
				},
				// Desabilitado
				'setting_message':{
					'hex': '81',
					'titulo':'Setting Message (From server to device)',
					'protocolotipo':3
				}
			}
			
		},
		'TLD1':{
			'identificador':'2626',
			'msn':{
				'login_message':{
					'hex': '01',
					'titulo':'Login Message',
					'protocolotipo':0
				},
				'position_message':{
					'hex': '02',
					'titulo':'Position Message',
					'protocolotipo':1
				},
				'position_message_twl2':{
					'hex': '13',
					'titulo':'Position Message',
					'protocolotipo':1,
					'keyname': 'position_message'
				},
				'heartbeat_message':{
					'hex': '03',
					'titulo':'Heartbeat Message',
					'protocolotipo':0
				},
				'alarm_message':{
					'hex': '04',
					'titulo':'Alarm Message',
					'protocolotipo':1
				},
				'alarm_message_twl2':{
					'hex': '14',
					'titulo':'Alarm Message',
					'protocolotipo':1,
					'keyname': 'alarm_message'
				},
				// Desabilitado
				'driver_behavior_GNSS':{
					'hex': '05',
					'titulo':'Driver Behavior via GNSS Message',
					'protocolotipo':6
				},
				'driver_behavior_accel':{
					'hex': '06',
					'titulo':'Driver Behavior via Acceleration Message ',
					'protocolotipo':6
				},
				'accident_acceleration_message':{
					'hex': '07',
					'titulo':'Accident via Acceleration Message',
					'protocolotipo':10
				},
				'RS232_message':{
					'hex': '09',
					'titulo':'RS232 Message',
					'protocolotipo':3
				},
				// Desabilitado
				'BLE_message':{
					'hex': '10',
					'titulo':'BLE Message',
					'protocolotipo':3
				},
				'network_information':{
					'hex': '11',
					'titulo':'Network Information Message ',
					'protocolotipo':1
				},
				// Desabilitado
				'BLE_message_position':{
					'hex': '12',
					'titulo':'BLE Message And Position',
					'protocolotipo':1
				},
				// Desabilitado
				'setting_message':{
					'hex': '81',
					'titulo':'Setting Message (From server to device)',
					'protocolotipo':3
				}
			}
		},
		'TLP1':{
			'identificador':'2727',
			'msn':{
				'login_message':{
					'hex': '01',
					'titulo':'Login Message',
					'protocolotipo':0
				},
				'position_message':{
					'hex': '02',
					'titulo':'Position Message',
					'protocolotipo':1
				},
				'heartbeat_message':{
					'hex': '03',
					'titulo':'Heartbeat Message',
					'protocolotipo':0
				},
				'alarm_message':{
					'hex': '04',
					'titulo':'Alarm Message',
					'protocolotipo':1
				},
				'network_information':{
					'hex': '05',
					'titulo':'Network Information Message ',
					'protocolotipo':1
				},
				'BLE_message':{
					'hex': '10',
					'titulo':'BLE Message',
					'protocolotipo':3
				},
				'setting_message':{
					'hex': '81',
					'titulo':'Setting Message (From server to device)',
					'protocolotipo':3
				}
			}
			
		}
	},
	tipoMensaje: function(mensaje, adicional=null){
		var traductorMensaje = 0
		switch (mensaje) {
			case 'A5':
			case 'A6':
			case 'A9':
			case 'A11':
			case 'A12':
			case 'A13':
			case 'A14':
			case 'AA7':
			case 'AA12':
			case 'AA13':
			case 'AA14':
			case 'AA15':
			case 'AA20':
			case 'AA29':
			case 'AA54':
			case 'AA55':
			case 'AA56':
			case 'AA57':
			case 'AA58':
			case 'AA59':
			case 'AA60':
			case 'AA61':
			case 'AA62':
			case 'AA63':
			case 'AA64':
			case 'AA65':
			traductorMensaje = 0
			break;
			
			case 'A1':
			case 'AA68':
			traductorMensaje = 46
			break;
			
			case 'A2':
			case 'AA5':
			traductorMensaje = 6
			break;
			
			case 'A3':
			case 'AA3':
			traductorMensaje = 3
			break;
			
			case 'A4':
			case 'AA70':
			traductorMensaje = 23
			break;
			
			case 'A5':
			traductorMensaje = 23
			break;
			
			case 'A7':
			case 'AA71':
			traductorMensaje = 102
			break;
			
			case 'A8':
			traductorMensaje = 123
			break;
			
			case 'A10':
			case 'AA74':
			traductorMensaje = 103
			break;
			
			case 'A15':
			case 'AA16':
			traductorMensaje = 43
			break;
			
			case 'A16':
			case 'AA17':
			traductorMensaje = 44
			break;
			
			case 'A17':
			case 'A18':
			case 'AA40':
			case 'AA41':
			case 'AA42':
			case 'AA43':
			case 'AA44':
			case 'AA45':
			case 'AA46':
			case 'AA47':
			case 'AA48':
			case 'AA49':
			case 'AA50':
			case 'AA51':
			traductorMensaje = 146
			break;
			
			case 'A19':
			case 'AA18':
			traductorMensaje = 52
			break;
			
			case 'A20':
			case 'AA19':
			traductorMensaje = 99
			break;
			
			case 'A21':
			case 'AA66':
			traductorMensaje = 51
			break;
			
			case 'A22':
			case 'AA67':
			traductorMensaje = 98
			break;
			
			case 'A23':
			case 'AA69':
			traductorMensaje = 45
			break;
			
			case 'A24':
			case 'AA75':
			traductorMensaje = 32
			break;
			
			case 'A25':
			traductorMensaje = 64
			break;
			
			case 'A26':
			traductorMensaje = 65
			break;
			
			case 'A27':
			traductorMensaje = 66
			break;
			
			case 'A28':
			traductorMensaje = 67
			break;
			
			case 'A29':
			traductorMensaje = 84
			break;
			
			case 'AA1':
			traductorMensaje = 114
			break;
			
			case 'AA5':
			traductorMensaje = 117
			break;
			
			case 'AA8':
			traductorMensaje = 149
			break;
			
			case 'AA9':
			traductorMensaje = 123
			break;
			
			case 'AA10':
			traductorMensaje = 34
			break;
			
			case 'AA21':
			traductorMensaje = 132
			break;
			
			case 'AA24':
			traductorMensaje = 131
			break;
			
			case 'AA25':
			traductorMensaje = 150
			break;
			
			case 'AA26':
			traductorMensaje = 124
			break;
			
			case 'AA27':
			traductorMensaje = 120
			break;
			
			case 'AA66':
			traductorMensaje = 120
			break;
			
			case 'AA67':
			traductorMensaje = 120
			break;
			
			
			// case 'A18':
			// traductorMensaje = 146
			// break;
			
			case 'P1':
			traductorMensaje = 58
			break;
			
			
			// case 'AAAA':
			// traductorMensaje = 0
			// break;
			
			default:{
				traductorMensaje = parseFloat(mensaje)
			}
		}
		return traductorMensaje
	},
	tlw1: function (buffer, unitIDMotor = null) {
		var data_return = {}
		data_return.save = {}
		var paquete = buffer.slice(3,5).readInt16BE(0)
		var paqueteCount = (buffer.toString('hex').length / 2)
		if(paquete != paqueteCount){
			data_return.error = "Error de paquete, No completo"
			console.log('Error de paquete, No completo', buffer.toString('hex'))	
			return data_return
		}
		
		var mensaje = buffer.slice(2,3).toString('hex')
		for(var msn_i in this.topflytech.TLW1.msn){	
			var msn = this.topflytech.TLW1.msn[msn_i]
			if(mensaje == msn.hex){
				data_return.save.unitid = String(parseInt(buffer.slice(7,15).toString('hex')))
				data_return.save.imei = parseInt(buffer.slice(7,15).toString('hex'))
				data_return.identificadorUnitID = data_return.save.unitid
				data_return.save.marcaGPS = 'topflytech'
				// data_return.save.modeloGPS = 'TLW1'
				// data_return.save.identificadorGPS = 'TLW1'
				// data_return.save.submodeloGPS = 'TLW1-Series'
				data_return.save.motorcom = 0
				data_return.save.crudo = buffer.toString('hex')
				data_return.save.protocolomsn = msn_i
				if(msn.keyname != null)
					data_return.save.protocolomsn = msn.keyname
				data_return.save.protocolotipo = msn.protocolotipo
				data_return.save.serialmsn = buffer.slice(5,7).readUInt16BE(0)
				// init login add unidad 
				data_return.runInit = true
				
				// Variables de ayuda
				var nowDate = Date.now()
				var todayDate = new Date(nowDate)
				// Separador de mensaje
				switch (msn_i) {
					case 'login_message':{
						
						// Variables separador
						if(buffer.length > 22){
							// Modelo Asignado TWL2
							data_return.save.modeloGPS = 'TLW2'
							data_return.save.identificadorGPS = 'TLW2'
							data_return.save.submodeloGPS = 'TLW2-Series'
							
							var modelMcu = buffer.slice(15,17).toString('hex')[0]
							var versionMcu = buffer.slice(15,17).toString('hex')[1]+'.'+buffer.slice(15,17).toString('hex')[2]+'.'+buffer.slice(15,17).toString('hex')[3]
							var versionModem = buffer.slice(17,20).toString('hex')
							var versionModemApp = buffer.slice(20,22).toString('hex')[0]+'.'+buffer.slice(20,22).toString('hex')[1]+'.'+buffer.slice(20,22).toString('hex')[2]+'.'+buffer.slice(20,22).toString('hex')[3]
							var hardwareVersion = buffer.slice(22,23).toString('hex')[0]+'.'+buffer.slice(22,23).toString('hex')[1]
							data_return.save.modelMcu = modelMcu
							data_return.save.versionMcu = versionMcu
							data_return.save.versionModem = versionModem
							data_return.save.versionModemApp = versionModemApp
							data_return.save.hardwareVersion = hardwareVersion
							
						}else{
							// Modelo Asignado TWL1
							data_return.save.modeloGPS = 'TLW1'
							data_return.save.identificadorGPS = 'TLW1'
							data_return.save.submodeloGPS = 'TLW1-Series'
							
							var versionInformacion = buffer.slice(15,21).toString('hex')
							data_return.save.firmwareSoftwareVersion = String(versionInformacion[3]+'.'+versionInformacion[4]+'.'+versionInformacion[5])
							data_return.save.hardwareVersion = String(versionInformacion[10]+'.'+versionInformacion[11])
							data_return.save.basicSoftwareVersion = String(versionInformacion[0]+'.'+versionInformacion[1]+'.'+versionInformacion[2])
							data_return.save.platformSoftwareVersion = String(versionInformacion[6]+versionInformacion[7]+versionInformacion[8]+versionInformacion[9])
						}
						
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(143)
						data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  todayDate
						
						// Respuesta
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					case 'position_message':
					case 'alarm_message':{
						// Modelo Asignado TWL1
						data_return.save.modeloGPS = 'TLW1'
						data_return.save.identificadorGPS = 'TLW1'
						data_return.save.submodeloGPS = 'TLW1-Series'
						// Variables separador
						var registro = new Date(
							'20'+
							buffer.slice(44,45).toString('hex')+'-'+
							buffer.slice(45,46).toString('hex')+'-'+
							buffer.slice(46,47).toString('hex')+'T'+
							buffer.slice(47,48).toString('hex')+':'+
							buffer.slice(48,49).toString('hex')+':'+
							buffer.slice(49,50).toString('hex')
						)
						var overSpeedNetworkSignal = this.hex2bin(buffer.slice(22,24).toString('hex'), 16)
						var dataGNSS = this.hex2bin(buffer.slice(24,25).toString('hex'))
						var others = this.hex2bin(buffer.slice(25,26).toString('hex'))
						var gsensorManagerStatus = this.hex2bin(buffer.slice(25,26).toString('hex'))
						var relayStatus = this.hex2bin(buffer.slice(28,29).toString('hex'))
						var digitalIO = this.hex2bin(buffer.slice(31,33).toString('hex'), 16)
						var dragAlarm = this.hex2bin(buffer.slice(29,31).toString('hex'), 16)
						var jammerDetect = this.hex2bin(buffer.slice(38,39).toString('hex'))
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje('A' + parseFloat(buffer.slice(37,38).toString('hex')))
						if(msn_i == 'position_message'){
							data_return.save.tipomsn = this.tipoMensaje('P1')
						}
						data_return.save.realtime = (dataGNSS[0]=='0'?true:false)
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  registro
						// Configuracion
						data_return.save.intervaloRepIngOn = buffer.slice(15,17).readInt16BE(0)
						data_return.save.intervaloRepIngOff = buffer.slice(17,19).readInt16BE(0)
						data_return.save.intervaloReqAngulo = buffer.slice(19,20).readInt8(0)
						data_return.save.intervaloReqDistancia = buffer.slice(20,22).readInt16BE(0)
						data_return.save.intervaloReqHeartbeat = buffer.slice(27,28).readInt8(0)
						data_return.save.unidadMedida = (overSpeedNetworkSignal[0]=='0'?"km":"mile")
						data_return.save.limiteVelocidadAlt = parseInt(overSpeedNetworkSignal[1]+overSpeedNetworkSignal[2]+overSpeedNetworkSignal[3]+overSpeedNetworkSignal[4]+overSpeedNetworkSignal[5]+overSpeedNetworkSignal[6]+overSpeedNetworkSignal[7]+overSpeedNetworkSignal[8], 2)
						data_return.save.antitheftActivado = (others[3]=='0'?false:true)
						data_return.save.antiSensibilidad = parseInt(others[4]+others[5]+others[6]+others[7], 2)
						data_return.save.gSensorSensibilidad = parseInt(gsensorManagerStatus[0]+gsensorManagerStatus[1]+gsensorManagerStatus[2]+gsensorManagerStatus[3], 2)
						data_return.save.managerActivo = [
							(gsensorManagerStatus[4]==0?false:true),
							(gsensorManagerStatus[5]==0?false:true),
							(gsensorManagerStatus[6]==0?false:true),
							(gsensorManagerStatus[7]==0?false:true)
						]
						data_return.save.alarmaArrastre = parseInt(dragAlarm, 2)
						data_return.save.smsLng = parseInt(relayStatus[4]+relayStatus[5]+relayStatus[6]+relayStatus[7], 2)
						data_return.save.jammerDetection = (parseInt(jammerDetect[4]+""+jammerDetect[5])==0?false:true)
						data_return.save.jammerRelay = (parseInt(jammerDetect[4]+""+jammerDetect[5])==11?true:false)
						data_return.save.relayTipo = String(relayStatus[2]+relayStatus[3])
						// Rastreo y Información
						data_return.save.lbsEstado = (dataGNSS[1]=='0'?true:false)
						data_return.save.gnnsEstado = (dataGNSS[1]=='1'?true:false)
						data_return.save.senal = parseInt(overSpeedNetworkSignal[9]+overSpeedNetworkSignal[10]+overSpeedNetworkSignal[11]+overSpeedNetworkSignal[12]+overSpeedNetworkSignal[13]+overSpeedNetworkSignal[14]+overSpeedNetworkSignal[15], 2)
						data_return.save.nosatelites = parseInt(dataGNSS[3]+dataGNSS[4]+dataGNSS[5]+dataGNSS[6]+dataGNSS[7], 2)
						if(dataGNSS[1]!='0'){
							data_return.save.latitud = buffer.slice(58,62).readFloatLE(0)
							data_return.save.longitud = buffer.slice(54,58).readFloatLE(0)
							data_return.save.altitud = buffer.slice(50,54).readFloatLE(0)
							data_return.save.velocidad = parseFloat(buffer.slice(62,64).toString('hex')) / 10
							data_return.save.direccion = buffer.slice(64,66).readInt16BE(0)
						}else{
							var LBSData = buffer.slice(50,52).toString('hex')
							if(LBSData != 'ffff'){ // valida si LBS no esta vacía
								var LBSDataLTE = this.hex2bin(buffer.slice(50,52).toString('hex'), 16) 
								LBSDataLTECheck = parseFloat(LBSDataLTE[0])
								data_return.save.lbsBanda = (LBSDataLTECheck==1?'4G-LTE':'2G')
								data_return.save.lbsRegistro = data_return.save.registro
								if(LBSDataLTECheck == 1){ // 4G-LTE
									data_return.save.lbsMCC = parseInt(LBSDataLTE[1]+LBSDataLTE[2]+LBSDataLTE[3]+LBSDataLTE[4]+LBSDataLTE[5]+LBSDataLTE[6]+LBSDataLTE[7]+LBSDataLTE[8]+LBSDataLTE[9]+LBSDataLTE[10]+LBSDataLTE[11]+LBSDataLTE[12]+LBSDataLTE[13]+LBSDataLTE[14]+LBSDataLTE[15], 2)
									data_return.save.lbsMNC = buffer.slice(52,54).readInt16BE(0)
									data_return.save.lbsTowers = 
									[
										{
											LAC: buffer.slice(58,60).readInt16BE(0),
											CI: buffer.slice(54,58).readInt32BE(0),
											CIP: buffer.slice(60,62).readInt16BE(0),
											LVL: data_return.save.senal
										},
										{
											LAC: buffer.slice(62,64).readInt16BE(0),
											CIP: buffer.slice(64,66).readInt16BE(0)
										},
									]
									
								}else{
									data_return.save.lbsMCC = parseInt(LBSDataLTE[1]+LBSDataLTE[2]+LBSDataLTE[3]+LBSDataLTE[4]+LBSDataLTE[5]+LBSDataLTE[6]+LBSDataLTE[7]+LBSDataLTE[8]+LBSDataLTE[9]+LBSDataLTE[10]+LBSDataLTE[11]+LBSDataLTE[12]+LBSDataLTE[13]+LBSDataLTE[14]+LBSDataLTE[15], 2)
									data_return.save.lbsMNC = buffer.slice(52,54).readInt16BE(0)
									data_return.save.lbsTowers = 
									[
										{
											LAC: buffer.slice(54,56).readInt16BE(0),
											CI: buffer.slice(56,58).readInt16BE(0),
											LVL: data_return.save.senal
										},
										{
											CI:buffer.slice(60,62).readInt16BE(0),
											LAC:buffer.slice(58,60).readInt16BE(0)
										},
										{
											CI:buffer.slice(64,66).readInt16BE(0),
											LAC:buffer.slice(62,64).readInt16BE(0)
										}
									]
								}
								
							}
						}
						data_return.save.odometro = buffer.slice(39,43).readInt32BE(0)
						// Informacion
						data_return.save.simLock = (others[0]=='0'?false:true)
						data_return.save.dispositivoBloqueado = (others[1]=='0'?false:true)
						// Energia
						data_return.save.energiaExternaVol = parseFloat(buffer.slice(66,67).toString('hex') +'.'+buffer.slice(67,68).toString('hex'))
						data_return.save.energiaInternaLVL = (parseFloat(buffer.slice(43,44).toString('hex'))==0?100:buffer.slice(43,44).toString('hex'))
						data_return.save.energiaExternaAct = (digitalIO[0]=='0'?true:false)
						// IO
						data_return.save.entradasDigital = [
							(digitalIO[1]=='0'?false:true),
							false,
							false,
							(digitalIO[3]=='0'?false:true),
							(digitalIO[4]=='0'?false:true)
						]
						data_return.save.salidasDigital = [
							(digitalIO[5]=='0'?false:true),
							(digitalIO[6]=='0'?false:true)
						]
						data_return.save.entradasAnaloga = [
							buffer.slice(33,35).toString('hex'),
							buffer.slice(35,37).toString('hex')
						]
						// Valores omitidos
						// ACCDigital:(digitalIO[2]=='0'?false:true),
						// speaker:(digitalIO[9]=='0'?true:false),
						// RS232Output:(digitalIO[10]=='0'?true:false),
						// ACCDet:(digitalIO[15]=='0'?false:true)
						//relayCMD:(relayStatus[0]=='0'?true:false),
						//relayStatus:(relayStatus[1]=='0'?false:true),
						
						if(msn_i == 'position_message'){
							data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
						}else{
							data_return.respuesta = Buffer.from("2525"+msn.hex+"0010"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex')+""+buffer.slice(37,38).toString('hex'), 'hex')
						}
						
					}
					break
					case 'position_message_twl2':
					case 'alarm_message_twl2':{
						// Modelo Asignado TWL2
						data_return.save.modeloGPS = 'TLW2'
						data_return.save.identificadorGPS = 'TLW2'
						data_return.save.submodeloGPS = 'TLW2-Series'
						// Variables separador
						var registro = new Date(
							'20'+
							buffer.slice(52,53).toString('hex')+'-'+
							buffer.slice(53,54).toString('hex')+'-'+
							buffer.slice(54,55).toString('hex')+'T'+
							buffer.slice(55,56).toString('hex')+':'+
							buffer.slice(56,57).toString('hex')+':'+
							buffer.slice(57,58).toString('hex')
						)
						var overSpeedNetworkSignal = this.hex2bin(buffer.slice(22,24).toString('hex'), 16)
						var dataGNSS = this.hex2bin(buffer.slice(24,25).toString('hex'))
						var others = this.hex2bin(buffer.slice(25,26).toString('hex'))
						var gsensorManagerStatus = this.hex2bin(buffer.slice(25,26).toString('hex'))
						var relayStatus = this.hex2bin(buffer.slice(28,29).toString('hex'))
						var digitalIO = this.hex2bin(buffer.slice(31,33).toString('hex'), 16)
						var digitalOUT = this.hex2bin(buffer.slice(33,34).toString('hex'))
						var dragAlarm = this.hex2bin(buffer.slice(29,31).toString('hex'), 16)
						var jammerDetect = this.hex2bin(buffer.slice(46,47).toString('hex'))
						var temperaturaInternaPre = this.hex2bin(buffer.slice(83,84).toString('hex'))
						var temperaturaInterna = parseInt(temperaturaInternaPre[1]+''+temperaturaInternaPre[2]+''+temperaturaInternaPre[3]+''+temperaturaInternaPre[4]+''+temperaturaInternaPre[5]+''+temperaturaInternaPre[6]+''+temperaturaInternaPre[7],2)
						var temperaturaInternaPos = (temperaturaInternaPre[0]=='0'?true:false)
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje('AA' + parseFloat(buffer.slice(45,46).toString('hex')))
						//data_return.save.tipoMensajeOrg = buffer.slice(45,46).toString('hex')
						if(msn_i == 'position_message_twl2'){
							data_return.save.tipomsn = this.tipoMensaje('P1')
						}
						data_return.save.realtime = (dataGNSS[0]=='0'?true:false)
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  registro
						// Configuracion
						data_return.save.intervaloRepIngOn = buffer.slice(15,17).readInt16BE(0)
						data_return.save.intervaloRepIngOff = buffer.slice(17,19).readInt16BE(0)
						data_return.save.intervaloReqAngulo = buffer.slice(19,20).readInt8(0)
						data_return.save.intervaloReqDistancia = buffer.slice(20,22).readInt16BE(0)
						data_return.save.intervaloReqHeartbeat = buffer.slice(27,28).readInt8(0)
						data_return.save.unidadMedida = (overSpeedNetworkSignal[0]=='0'?"km":"mile")
						data_return.save.limiteVelocidadAlt = parseInt(overSpeedNetworkSignal[1]+overSpeedNetworkSignal[2]+overSpeedNetworkSignal[3]+overSpeedNetworkSignal[4]+overSpeedNetworkSignal[5]+overSpeedNetworkSignal[6]+overSpeedNetworkSignal[7]+overSpeedNetworkSignal[8], 2)
						data_return.save.antitheftActivado = (others[3]=='0'?false:true)
						data_return.save.antiSensibilidad = parseInt(others[4]+others[5]+others[6]+others[7], 2)
						data_return.save.gSensorSensibilidad = parseInt(gsensorManagerStatus[0]+gsensorManagerStatus[1]+gsensorManagerStatus[2]+gsensorManagerStatus[3], 2)
						data_return.save.managerActivo = [
							(gsensorManagerStatus[4]==0?false:true),
							(gsensorManagerStatus[5]==0?false:true),
							(gsensorManagerStatus[6]==0?false:true),
							(gsensorManagerStatus[7]==0?false:true)
						]
						data_return.save.alarmaArrastre = parseInt(dragAlarm, 2)
						data_return.save.smsLng = parseInt(relayStatus[4]+relayStatus[5]+relayStatus[6]+relayStatus[7], 2)
						data_return.save.jammerDetection = (parseInt(jammerDetect[4]+""+jammerDetect[5])==0?false:true)
						data_return.save.jammerRelay = (parseInt(jammerDetect[4]+""+jammerDetect[5])==11?true:false)
						data_return.save.relayTipo = String(relayStatus[2]+relayStatus[3])
						// Rastreo y Información
						data_return.save.lbsEstado = (dataGNSS[1]=='0'?true:false)
						data_return.save.gnnsEstado = (dataGNSS[1]=='1'?true:false)
						data_return.save.senal = parseInt(overSpeedNetworkSignal[9]+overSpeedNetworkSignal[10]+overSpeedNetworkSignal[11]+overSpeedNetworkSignal[12]+overSpeedNetworkSignal[13]+overSpeedNetworkSignal[14]+overSpeedNetworkSignal[15], 2)
						data_return.save.nosatelites = parseInt(dataGNSS[3]+dataGNSS[4]+dataGNSS[5]+dataGNSS[6]+dataGNSS[7], 2)
						if(dataGNSS[1]!='0'){
							data_return.save.latitud = buffer.slice(66,70).readFloatLE(0)
							data_return.save.longitud = buffer.slice(62,66).readFloatLE(0)
							data_return.save.altitud = buffer.slice(58,62).readFloatLE(0)
							data_return.save.velocidad = parseFloat(buffer.slice(70,72).toString('hex')) / 10
							data_return.save.direccion = buffer.slice(72,74).readInt16BE(0)
						}else{
							var LBSData = buffer.slice(58,60).toString('hex')
							if(LBSData != 'ffff'){ // valida si LBS no esta vacía
								var LBSDataLTE = this.hex2bin(buffer.slice(58,60).toString('hex'), 16) 
								LBSDataLTECheck = parseFloat(LBSDataLTE[0])
								data_return.save.lbsBanda = (LBSDataLTECheck==1?'4G-LTE':'2G')
								data_return.save.lbsRegistro = data_return.save.registro
								if(LBSDataLTECheck == 1){ // 4G-LTE
									data_return.save.lbsMCC = parseInt(LBSDataLTE[1]+LBSDataLTE[2]+LBSDataLTE[3]+LBSDataLTE[4]+LBSDataLTE[5]+LBSDataLTE[6]+LBSDataLTE[7]+LBSDataLTE[8]+LBSDataLTE[9]+LBSDataLTE[10]+LBSDataLTE[11]+LBSDataLTE[12]+LBSDataLTE[13]+LBSDataLTE[14]+LBSDataLTE[15], 2)
									data_return.save.lbsMNC = buffer.slice(60,62).readInt16BE(0)
									data_return.save.lbsTowers = 
									[
										{
											LAC: buffer.slice(66,68).readInt16BE(0),
											CI: buffer.slice(62,66).readInt32BE(0),
											CIP: buffer.slice(68,70).readInt16BE(0),
											LVL: data_return.save.senal
										},
										{
											LAC: buffer.slice(70,72).readInt16BE(0),
											CIP: buffer.slice(72,74).readInt16BE(0)
										},
									]
									
								}else{
									data_return.save.lbsMCC = parseInt(LBSDataLTE[1]+LBSDataLTE[2]+LBSDataLTE[3]+LBSDataLTE[4]+LBSDataLTE[5]+LBSDataLTE[6]+LBSDataLTE[7]+LBSDataLTE[8]+LBSDataLTE[9]+LBSDataLTE[10]+LBSDataLTE[11]+LBSDataLTE[12]+LBSDataLTE[13]+LBSDataLTE[14]+LBSDataLTE[15], 2)
									data_return.save.lbsMNC = buffer.slice(60,62).readInt16BE(0)
									data_return.save.lbsTowers = 
									[
										{
											LAC: buffer.slice(62,64).readInt16BE(0),
											CI: buffer.slice(64,66).readInt16BE(0),
											LVL: data_return.save.senal
										},
										{
											CI:buffer.slice(68,70).readInt16BE(0),
											LAC:buffer.slice(66,68).readInt16BE(0)
										},
										{
											CI:buffer.slice(72,74).readInt16BE(0),
											LAC:buffer.slice(70,72).readInt16BE(0)
										}
									]
								}
								
							}
						}
						data_return.save.odometro = buffer.slice(47,51).readInt32BE(0)
						// Informacion
						data_return.save.simLock = (others[0]=='0'?false:true)
						data_return.save.dispositivoBloqueado = (others[1]=='0'?false:true)
						// Energia
						data_return.save.energiaExternaVol = parseFloat(buffer.slice(76,77).toString('hex') +'.'+buffer.slice(77,78).toString('hex'))
						data_return.save.energiaInternaLVL = parseFloat((parseFloat(buffer.slice(51,52).toString('hex'))==0?100:buffer.slice(51,52).toString('hex')))
						data_return.save.energiaInternaVol = parseFloat(buffer.slice(47,48).toString('hex')[0]+'.'+buffer.slice(47,48).toString('hex')[1])
						data_return.save.energiaExternaAct = (digitalIO[0]=='0'?true:false)
						// IO
						data_return.save.entradasDigital = [
							(digitalIO[1]=='0'?false:true),
							(digitalIO[2]=='0'?false:true),
							(digitalIO[3]=='0'?false:true),
							(digitalIO[4]=='0'?false:true),
							(digitalIO[5]=='0'?false:true),
							(digitalIO[6]=='0'?false:true)
						]
						data_return.save.salidasDigital = [
							(digitalOUT[2]=='0'?false:true),
							(digitalOUT[3]=='0'?false:true),
							(digitalOUT[4]=='0'?false:true)
						]
						data_return.save.salidaVoltConfig = (digitalOUT[0]=='0'?'5V':'12V')
						data_return.save.salidaVoltConfigAct = (digitalOUT[1]=='0'?false:true)
						data_return.save.entradasAnaloga = [
							buffer.slice(35,37).toString('hex'),
							buffer.slice(37,39).toString('hex'),
							buffer.slice(39,41).toString('hex'),
							buffer.slice(41,43).toString('hex'),
							buffer.slice(43,45).toString('hex')
						]
						data_return.save.temperaturaInterna = temperaturaInterna
						data_return.save.temperaturaInternaPos = temperaturaInternaPos
						data_return.save.temperaturaInternaMedida = 'C'
						// Valores omitidos
						// ACCDigital:(digitalIO[2]=='0'?false:true),
						// speaker:(digitalIO[9]=='0'?true:false),
						// RS232Output:(digitalIO[10]=='0'?true:false),
						// ACCDet:(digitalIO[15]=='0'?false:true)
						//relayCMD:(relayStatus[0]=='0'?true:false),
						//relayStatus:(relayStatus[1]=='0'?false:true),
						
						if(msn_i == 'position_message_twl2'){
							data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
						}else{
							data_return.respuesta = Buffer.from("2525"+msn.hex+"0010"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex')+""+buffer.slice(45,46).toString('hex'), 'hex')
						}
						
					}
					break
					case 'heartbeat_message':{	
						// Variables separador
						
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(144)
						data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  todayDate
						
						// Respuesta
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					/*
					case 'driver_behavior_GNSS':{
						// Variables separador
						var registro = new Date(
							'20'+
							buffer.slice(16,17).toString('hex')+'-'+
							buffer.slice(17,18).toString('hex')+'-'+
							buffer.slice(18,19).toString('hex')+'T'+
							buffer.slice(19,20).toString('hex')+':'+
							buffer.slice(20,21).toString('hex')+':'+
							buffer.slice(21,22).toString('hex')
						)
						var registroOut = new Date(
							'20'+
							buffer.slice(38,39).toString('hex')+'-'+
							buffer.slice(39,40).toString('hex')+'-'+
							buffer.slice(40,41).toString('hex')+'T'+
							buffer.slice(41,42).toString('hex')+':'+
							buffer.slice(42,43).toString('hex')+':'+
							buffer.slice(43,44).toString('hex')
						)
						//var overSpeedNetworkSignal = this.hex2bin(buffer.slice(22,24).toString('hex'), 16)
						
						// Registro json
						data_return.save.gps.tipoMensaje = parseFloat(buffer.slice(15,16).toString('hex')) + 100
						data_return.save.gps.registro = registro
						data_return.save.gps.protocolo = 'avanzado_comportamiento_conductor'
						data_return.save.actualizar =
									{
										historico:true,
										posicion:false,
										tiempo:true,
										realtime:false,
										comando:false,
										
									}
						
						data_return.save.informacion = 
									{
										realtime:false,
										locationType:"GNSS",
										GNSS:true
									}
						
						data_return.save.rastreoIn =
						{
							latitud:buffer.slice(30,34).readFloatLE(0),
							longitud:buffer.slice(26,30).readFloatLE(0),
							altitud:buffer.slice(22,26).readFloatLE(0),
							velocidad:parseFloat(buffer.slice(34,36).toString('hex')) / 10,
							direccion:buffer.slice(36,38).readInt16BE(0),
							registro:registro
						}
						data_return.save.rastreoOut =
						{
							latitud:buffer.slice(52,56).readFloatLE(0),
							longitud:buffer.slice(48,52).readFloatLE(0),
							altitud:buffer.slice(44,48).readFloatLE(0),
							velocidad:parseFloat(buffer.slice(56,58).toString('hex')) / 10,
							direccion:buffer.slice(58,60).readInt16BE(0),
							registro:registroOut
						}
						
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex')+""+buffer.slice(37,38).toString('hex'), 'hex')
					}
					break
					case 'driver_behavior_accel':{					
						data_return.save.actualizar =
									{
										historico:false,
										posicion:false,
										tiempo:false,
										realtime:false,
										comando:false,
										
									}
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					case 'accident_acceleration_message':{					
						data_return.save.actualizar =
									{
										historico:false,
										posicion:false,
										tiempo:false,
										realtime:false,
										comando:false,
										
									}
						data_return.respuesta = Buffer.from("2525"+msn.hex+"0010"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex')+buffer.slice(15,16).toString('hex'), 'hex')
					}
					break
					
					case 'RS232_message':{					
						data_return.save.actualizar =
									{
										historico:false,
										posicion:false,
										tiempo:false,
										realtime:false,
										comando:false,
										
									}
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					*/
					case 'BLE_message':{
						// Variables separador	
						var registro = new Date(
							'20'+
							buffer.slice(15,16).toString('hex')+'-'+
							buffer.slice(16,17).toString('hex')+'-'+
							buffer.slice(17,18).toString('hex')+'T'+
							buffer.slice(18,19).toString('hex')+':'+
							buffer.slice(19,20).toString('hex')+':'+
							buffer.slice(20,21).toString('hex')
						)
						var tipoBLE = parseFloat(buffer.slice(22,24).toString('hex'))
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(147)
						//data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  registro
						data_return.save.bleIO = []
						switch (tipoBLE) {
							case 4:{ // Sensor de temperatura y humedad (TSTH1-B)
								var sensorCount = 1
								var bufferCount = (buffer.toString('hex').length / 2)
								var sumeRun = 0
								var sumeCadena = 15 
								if(bufferCount > 39)
									sensorCount = 2
								for(var i=0;i<sensorCount;i++){
									var sensorID = buffer.slice((24+sumeRun),(30+sumeRun)).toString('hex')
									var sensorVol = 0
									var sensorBatPor = 0
									var sensorTem = 0
									var sensorTemPositivo = true
									var sensorHum = 0
									var sensorLuz = 0
									var sensorRSSI = 0
									
									if(buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0) != -1)
										sensorVol = (200 + buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0)) * 0.010 //  (200 + value) * 10mv
									if(buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0) != -1)
										sensorBatPor = buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0)
									if(buffer.slice((32+sumeRun),(33+sumeRun)).readInt8(0) != -1){
										var sensorTemPre = this.hex2bin(buffer.slice((32+sumeRun),(34+sumeRun)).toString('hex'), 16)
										sensorTemPositivo = (sensorTemPre[0]=='0'?true:false)
										sensorTem = (buffer.slice((32+sumeRun),(34+sumeRun)).readUInt16BE(0) * 0.01)
									}
									if(buffer.slice((34+sumeRun),(35+sumeRun)).readInt8(0) != -1)
										sensorHum = (buffer.slice((34+sumeRun),(36+sumeRun)).readUInt16BE(0) / 100)
									sensorLuz = parseFloat(buffer.slice((36+sumeRun),(38+sumeRun)).toString('hex'))
									sensorRSSI = buffer.slice((38+sumeRun),(39+sumeRun)).readInt8(0)
									sensorRSSI = sensorRSSI - 128
									var BLE =
										{
											bletipo:'sensor_temp_hum_ble',
											marca:'topflytech',
											modelo:'TSTH1-B',
											sensorID: sensorID,
											sensorVol: sensorVol,
											sensorBatPor: sensorBatPor,
											sensorTem:sensorTem,
											sensorTemPositivo:sensorTemPositivo,
											sensorTemUnidad:'C',
											sensorHum:sensorHum,
											sensorLuz:(sensorLuz==0?false:true),
											sensorRSSI:sensorRSSI
										}
									data_return.save.bleIO.push(BLE)
									sumeRun = sumeRun + sumeCadena
								}
							}
							break;
							case 5:{ // Sensor de puerta y temperatura (TSDT1-B)
								var sensorCount = 1
								var bufferCount = (buffer.toString('hex').length / 2)
								var sumeRun = 0
								var sumeCadena = 12
								if(bufferCount > 36)
									sensorCount = 2
								for(var i=0;i<sensorCount;i++){
									var sensorID = buffer.slice((24+sumeRun),(30+sumeRun)).toString('hex')
									var sensorVol = 0
									var sensorBatPor = 0
									var sensorTem = 0
									var sensorTemPositivo = true
									var sensorDoor = false
									var sensorRSSI = 0
									
									if(buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0) != -1)
										sensorVol = (200 + buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0)) * 0.010 //  (200 + value) * 10mv
									if(buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0) != -1)
										sensorBatPor = buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0)
									if(buffer.slice((32+sumeRun),(33+sumeRun)).readInt8(0) != -1){
										var sensorTemPre = this.hex2bin(buffer.slice((32+sumeRun),(34+sumeRun)).toString('hex'), 16)
										sensorTemPositivo = (sensorTemPre[0]=='0'?true:false)
										sensorTem = (buffer.slice((32+sumeRun),(34+sumeRun)).readUInt16BE(0) * 0.01)
									}
									sensorDoor = parseFloat(buffer.slice((34+sumeRun),(35+sumeRun)).toString('hex'))
									sensorRSSI = buffer.slice((35+sumeRun),(36+sumeRun)).readInt8(0)
									sensorRSSI = sensorRSSI - 128
									var BLE =
										{
											bletipo:'sensor_door_temp_ble',
											marca:'topflytech',
											modelo:'TSDT1-B',
											sensorID: sensorID,
											sensorVol: sensorVol,
											sensorBatPor: sensorBatPor,
											sensorTem:sensorTem,
											sensorTemPositivo:sensorTemPositivo,
											sensorTemUnidad:'C',
											sensorDoor:(sensorDoor==0?false:true),
											sensorRSSI:sensorRSSI
										}
									data_return.save.bleIO.push(BLE)
									sumeRun = sumeRun + sumeCadena
								}
							}
							break;
							case 6:{ // Relay BLE (TSR1-B)
								var sensorCount = 1
								var bufferCount = (buffer.toString('hex').length / 2)
								var sumeRun = 0
								var sumeCadena = 12
								if(bufferCount > 36)
									sensorCount = 2
								for(var i=0;i<sensorCount;i++){
									var sensorID = buffer.slice((24+sumeRun),(30+sumeRun)).toString('hex')
									var sensorVol = 0
									var sensorBatPor = 0
									var sensorTem = 0
									var sensorTemPositivo = true
									var sensorRelay = false
									var sensorRSSI = 0
									
									if(buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0) != -1)
										sensorVol = (200 + buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0)) * 0.010 //  (200 + value) * 10mv
									if(buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0) != -1)
										sensorBatPor = buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0)
									if(buffer.slice((32+sumeRun),(33+sumeRun)).readInt8(0) != -1){
										var sensorTemPre = this.hex2bin(buffer.slice((32+sumeRun),(34+sumeRun)).toString('hex'), 16)
										sensorTemPositivo = (sensorTemPre[0]=='0'?true:false)
										sensorTem = (buffer.slice((32+sumeRun),(34+sumeRun)).readUInt16BE(0) * 0.01)
									}
									sensorRelay = parseFloat(buffer.slice((34+sumeRun),(35+sumeRun)).toString('hex'))
									sensorRSSI = buffer.slice((35+sumeRun),(36+sumeRun)).readInt8(0)
									sensorRSSI = sensorRSSI - 128
									var BLE =
										{
											bletipo:'sensor_relay_temp_ble',
											marca:'topflytech',
											modelo:'TSR1-B',
											sensorID: sensorID,
											sensorVol: sensorVol,
											sensorBatPor: sensorBatPor,
											sensorTem:sensorTem,
											sensorTemPositivo:sensorTemPositivo,
											sensorTemUnidad:'C',
											sensorRelay:(sensorRelay==0?false:true),
											sensorRSSI:sensorRSSI
										}
									data_return.save.bleIO.push(BLE)
									sumeRun = sumeRun + sumeCadena
								}
							}
							break;
							default:{}
						}
						// Datos omitidos
						// data_return.save.rawIO =
						// 			{
						// 				ignicionDigital:(parseFloat(buffer.slice(21,22).toString('hex'))==1?true:false),
						// 				ACCDigital:parseFloat(buffer.slice(21,22).toString('hex'))
						// 			}
						
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					case 'network_information':{
						// Variables separador
						var registro = new Date(
							'20'+
							buffer.slice(15,16).toString('hex')+'-'+
							buffer.slice(16,17).toString('hex')+'-'+
							buffer.slice(17,18).toString('hex')+'T'+
							buffer.slice(18,19).toString('hex')+':'+
							buffer.slice(19,20).toString('hex')+':'+
							buffer.slice(20,21).toString('hex')
						)
						var indexPaquete = [21, 22] // Index Paquetes
						// Nombre Operador
						var tamanoOperador = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoOperador
						var nombreOperador = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// Nombre de la tecnologia
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoTecnologia = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoTecnologia
						var nombreAccesoTecnologia = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// Nombre de la Banda
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoBanda = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoBanda
						var nombreBanda = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// SIM CARD
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoSIM = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoSIM
						var simCard = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// ICCID
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoICCID = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoICCID
						var iccid = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(148)
						data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  registro
						data_return.save.networkName = nombreOperador
						data_return.save.accessTecnologic = nombreAccesoTecnologia
						data_return.save.bandName = nombreBanda
						data_return.save.imsi = simCard
						data_return.save.iccid = iccid
						
						// Respuesta
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					// case 'BLE_message_position':{					
					// 	// Variables separador
					// 	
					// 	// Registro json
					// 	data_return.save.gps.tipoMensaje = 1007
					// 	data_return.save.gps.registro =  todayDate
					// 	data_return.save.gps.protocolo = 'avanzado_position_ble'
					// 	data_return.save.actualizar =
					// 				{
					// 					historico:true,
					// 					posicion:true,
					// 					tiempo:true,
					// 					realtime:false,
					// 					comando:false,
					// 					
					// 				}
					// 	data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					// }
					// break
					case 'setting_message':{
						// Variables separador
						var limiteBuffer = buffer.length
						var reqCMD = buffer.slice(16, limiteBuffer).toString('utf8')
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(140)
						data_return.save.serialmsn = buffer.slice(5,7).readUInt16BE(0)
						data_return.save.registro = todayDate
						data_return.save.CMDMensaje = reqCMD.replaceAll("\x00", "") 
						data_return.save.CMDRegistro = todayDate
						console.log('CMD recibido', reqCMD)
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					default:{
						// Registro json
						data_return.save.protocolotipo = 10
						data_return.save.registro =  todayDate
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
				}
			}
		}
		return data_return
	},
	tlw1CMD: function (cmd, imei){
		var comandoA = "252581" // modelo y header
		var comandoB = "0010" // Tamaño
		var comandoC = cmd.serial.toString(16) // Serial
		comandoC = ('0000'+comandoC).slice(-4)
		comandoC += ('0000000000000000'+imei).slice(-16)
		comandoC += "01"
		comandoC += Buffer.from(cmd.cmd, 'ascii').toString('hex')
		var cmdSend = Buffer.from(comandoA+comandoB+comandoC, 'hex')
		return cmdSend
	},
	tld1:function (buffer, unitIDMotor = null) {
		var data_return = {}
		data_return.save = {}
		var paquete = buffer.slice(3,5).readInt16BE(0)
		var paqueteCount = (buffer.toString('hex').length / 2)
		if(paquete != paqueteCount){
			data_return.error = "Error de paquete, No completo"
			console.log('Error de paquete, No completo', buffer.toString('hex'))	
			return data_return
		}
		
		var mensaje = buffer.slice(2,3).toString('hex')
		for(var msn_i in this.topflytech.TLW1.msn){	
			var msn = this.topflytech.TLW1.msn[msn_i]
			if(mensaje == msn.hex){
				data_return.save.unitid = String(parseInt(buffer.slice(7,15).toString('hex')))
				data_return.save.imei = parseInt(buffer.slice(7,15).toString('hex'))
				data_return.identificadorUnitID = data_return.save.unitid
				data_return.save.marcaGPS = 'topflytech'
				// data_return.save.modeloGPS = 'TLW1'
				// data_return.save.identificadorGPS = 'TLW1'
				// data_return.save.submodeloGPS = 'TLW1-Series'
				data_return.save.motorcom = 0
				data_return.save.crudo = buffer.toString('hex')
				data_return.save.protocolomsn = msn_i
				if(msn.keyname != null)
					data_return.save.protocolomsn = msn.keyname
				data_return.save.protocolotipo = msn.protocolotipo
				data_return.save.serialmsn = buffer.slice(5,7).readUInt16BE(0)
				// init login add unidad 
				data_return.runInit = true
				
				// Variables de ayuda
				var nowDate = Date.now()
				var todayDate = new Date(nowDate)
				// Separador de mensaje
				switch (msn_i) {
					case 'login_message':{
						// Modelo Asignado TWL2
						data_return.save.modeloGPS = 'TLD1'
						data_return.save.identificadorGPS = 'TLD1'
						data_return.save.submodeloGPS = 'TLD1-A'
						
						// Version
						var versionInformacion = buffer.slice(15,21).toString('hex')
						data_return.save.firmwareSoftwareVersion = String(versionInformacion[3]+'.'+versionInformacion[4]+'.'+versionInformacion[5])
						data_return.save.hardwareVersion = String(versionInformacion[10]+'.'+versionInformacion[11])
						data_return.save.basicSoftwareVersion = String(versionInformacion[0]+'.'+versionInformacion[1]+'.'+versionInformacion[2])
						data_return.save.platformSoftwareVersion = String(versionInformacion[6]+versionInformacion[7]+versionInformacion[8]+versionInformacion[9])
						// OBD Version
						var versionOBD = buffer.slice(21,25).toString('hex')
						data_return.save.obdActivo = parseFloat(versionInformacion[1])
						data_return.save.obdModuloVersion = String(versionInformacion[3]+'.'+parseFloat(versionInformacion[4]+versionInformacion[5]))
						data_return.save.obdVersion = String(parseFloat(versionInformacion[0]+versionInformacion[1])+'.'+parseFloat(versionInformacion[2]+versionInformacion[3])+'.'+parseFloat(versionInformacion[4]+versionInformacion[5]))
						data_return.save.obdHardwareVersion = String(versionInformacion[6]+'.'+versionInformacion[7])
						
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(143)
						data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  todayDate
						
						// Respuesta
						data_return.respuesta = Buffer.from("2626"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					case 'position_message':
					case 'alarm_message':{
						// Modelo Asignado TWL1
						data_return.save.modeloGPS = 'TLD1'
						data_return.save.identificadorGPS = 'TLD1'
						data_return.save.submodeloGPS = 'TLD1-A'
						// Variables separador
						var registro = new Date(
							'20'+
							buffer.slice(40,41).toString('hex')+'-'+
							buffer.slice(41,42).toString('hex')+'-'+
							buffer.slice(42,43).toString('hex')+'T'+
							buffer.slice(43,44).toString('hex')+':'+
							buffer.slice(44,45).toString('hex')+':'+
							buffer.slice(45,46).toString('hex')
						)
						
						var overSpeedNetworkSignal = this.hex2bin(buffer.slice(22,24).toString('hex'), 16)
						var dataGNSS = this.hex2bin(buffer.slice(24,25).toString('hex'))
						var others = this.hex2bin(buffer.slice(25,26).toString('hex'))
						var gsensorManagerStatus = this.hex2bin(buffer.slice(25,26).toString('hex'))
						var relayStatus = this.hex2bin(buffer.slice(28,29).toString('hex'))
						var digitalIO = this.hex2bin(buffer.slice(31,33).toString('hex'), 16)
						var dragAlarm = this.hex2bin(buffer.slice(29,31).toString('hex'), 16)
						var jammerDetect = this.hex2bin(buffer.slice(34,35).toString('hex'))
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje('A' + parseFloat(buffer.slice(33,34).toString('hex')))
						if(msn_i == 'position_message'){
							data_return.save.tipomsn = this.tipoMensaje('P1')
						}
						data_return.save.realtime = (dataGNSS[0]=='0'?true:false)
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  registro
						// Configuracion
						data_return.save.intervaloRepIngOn = buffer.slice(15,17).readInt16BE(0)
						data_return.save.intervaloRepIngOff = buffer.slice(17,19).readInt16BE(0)
						data_return.save.intervaloReqAngulo = buffer.slice(19,20).readInt8(0)
						data_return.save.intervaloReqDistancia = buffer.slice(20,22).readInt16BE(0)
						data_return.save.intervaloReqHeartbeat = buffer.slice(27,28).readInt8(0)
						data_return.save.unidadMedida = (overSpeedNetworkSignal[0]=='0'?"km":"mile")
						data_return.save.limiteVelocidadAlt = parseInt(overSpeedNetworkSignal[1]+overSpeedNetworkSignal[2]+overSpeedNetworkSignal[3]+overSpeedNetworkSignal[4]+overSpeedNetworkSignal[5]+overSpeedNetworkSignal[6]+overSpeedNetworkSignal[7]+overSpeedNetworkSignal[8], 2)
						data_return.save.antitheftActivado = (others[3]=='0'?false:true)
						data_return.save.antiSensibilidad = parseInt(others[4]+others[5]+others[6]+others[7], 2)
						data_return.save.gSensorSensibilidad = parseInt(gsensorManagerStatus[0]+gsensorManagerStatus[1]+gsensorManagerStatus[2]+gsensorManagerStatus[3], 2)
						data_return.save.managerActivo = [
							(gsensorManagerStatus[4]==0?false:true),
							(gsensorManagerStatus[5]==0?false:true),
							(gsensorManagerStatus[6]==0?false:true),
							(gsensorManagerStatus[7]==0?false:true)
						]
						data_return.save.alarmaArrastre = parseInt(dragAlarm, 2)
						data_return.save.smsLng = parseInt(relayStatus[4]+relayStatus[5]+relayStatus[6]+relayStatus[7], 2)
						data_return.save.jammerDetection = (parseInt(jammerDetect[4]+""+jammerDetect[5])==0?false:true)
						data_return.save.jammerRelay = (parseInt(jammerDetect[4]+""+jammerDetect[5])==11?true:false)
						data_return.save.relayTipo = String(relayStatus[2]+relayStatus[3])
						// Rastreo y Información
						data_return.save.lbsEstado = (dataGNSS[1]=='0'?true:false)
						data_return.save.gnnsEstado = (dataGNSS[1]=='1'?true:false)
						data_return.save.senal = parseInt(overSpeedNetworkSignal[9]+overSpeedNetworkSignal[10]+overSpeedNetworkSignal[11]+overSpeedNetworkSignal[12]+overSpeedNetworkSignal[13]+overSpeedNetworkSignal[14]+overSpeedNetworkSignal[15], 2)
						data_return.save.nosatelites = parseInt(dataGNSS[3]+dataGNSS[4]+dataGNSS[5]+dataGNSS[6]+dataGNSS[7], 2)
						if(dataGNSS[1]!='0'){
							data_return.save.latitud = buffer.slice(54,58).readFloatLE(0)
							data_return.save.longitud = buffer.slice(50,54).readFloatLE(0)
							data_return.save.altitud = buffer.slice(46,50).readFloatLE(0)
							data_return.save.velocidad = parseFloat(buffer.slice(64,66).toString('hex')) / 10
							data_return.save.direccion = buffer.slice(60,62).readInt16BE(0)
						}else{
							var LBSData = buffer.slice(46,48).toString('hex')
							if(LBSData != 'ffff'){ // valida si LBS no esta vacía
								var LBSDataLTE = this.hex2bin(buffer.slice(46,48).toString('hex'), 16) 
								LBSDataLTECheck = parseFloat(LBSDataLTE[0])
								data_return.save.lbsBanda = (LBSDataLTECheck==1?'4G-LTE':'2G')
								data_return.save.lbsRegistro = data_return.save.registro
								if(LBSDataLTECheck == 1){ // 4G-LTE
									data_return.save.lbsMCC = parseInt(LBSDataLTE[1]+LBSDataLTE[2]+LBSDataLTE[3]+LBSDataLTE[4]+LBSDataLTE[5]+LBSDataLTE[6]+LBSDataLTE[7]+LBSDataLTE[8]+LBSDataLTE[9]+LBSDataLTE[10]+LBSDataLTE[11]+LBSDataLTE[12]+LBSDataLTE[13]+LBSDataLTE[14]+LBSDataLTE[15], 2)
									data_return.save.lbsMNC = buffer.slice(48,50).readInt16BE(0)
									data_return.save.lbsTowers = 
									[
										{
											LAC: buffer.slice(54,56).readInt16BE(0),
											CI: buffer.slice(50,54).readInt32BE(0),
											CIP: buffer.slice(56,58).readInt16BE(0),
											LVL: data_return.save.senal
										},
										{
											LAC: buffer.slice(58,60).readInt16BE(0),
											CIP: buffer.slice(60,62).readInt16BE(0)
										},
									]
									
								}else{
									data_return.save.lbsMCC = parseInt(LBSDataLTE[1]+LBSDataLTE[2]+LBSDataLTE[3]+LBSDataLTE[4]+LBSDataLTE[5]+LBSDataLTE[6]+LBSDataLTE[7]+LBSDataLTE[8]+LBSDataLTE[9]+LBSDataLTE[10]+LBSDataLTE[11]+LBSDataLTE[12]+LBSDataLTE[13]+LBSDataLTE[14]+LBSDataLTE[15], 2)
									data_return.save.lbsMNC = buffer.slice(48,50).readInt16BE(0)
									data_return.save.lbsTowers = 
									[
										{
											LAC: buffer.slice(50,52).readInt16BE(0),
											CI: buffer.slice(52,54).readInt16BE(0),
											LVL: data_return.save.senal
										},
										{
											CI:buffer.slice(56,58).readInt16BE(0),
											LAC:buffer.slice(54,56).readInt16BE(0)
										},
										{
											CI:buffer.slice(60,62).readInt16BE(0),
											LAC:buffer.slice(58,60).readInt16BE(0)
										}
									]
								}
								
							}
						}
						data_return.save.odometro = buffer.slice(35,39).readInt32BE(0)
						// Informacion
						data_return.save.simLock = (others[0]=='0'?false:true)
						data_return.save.dispositivoBloqueado = (others[1]=='0'?false:true)
						// Energia
						data_return.save.energiaExternaVol = parseFloat(buffer.slice(62,63).toString('hex') +'.'+buffer.slice(63,64).toString('hex'))
						data_return.save.energiaInternaLVL = (parseFloat(buffer.slice(39,40).toString('hex'))==0?100:buffer.slice(43,44).toString('hex'))
						data_return.save.energiaExternaAct = (digitalIO[0]=='0'?true:false)
						// IO
						data_return.save.entradasDigital = [
							(digitalIO[1]=='0'?false:true),
							false,
							false,
							(digitalIO[3]=='0'?false:true),
							(digitalIO[4]=='0'?false:true)
						]
						data_return.save.salidasDigital = [
							(digitalIO[5]=='0'?false:true),
							(digitalIO[6]=='0'?false:true)
						]
						// data_return.save.entradasAnaloga = [
						// 	buffer.slice(33,35).toString('hex'),
						// 	buffer.slice(35,37).toString('hex')
						// ]
						// Valores omitidos
						// ACCDigital:(digitalIO[2]=='0'?false:true),
						// speaker:(digitalIO[9]=='0'?true:false),
						// RS232Output:(digitalIO[10]=='0'?true:false),
						// ACCDet:(digitalIO[15]=='0'?false:true)
						//relayCMD:(relayStatus[0]=='0'?true:false),
						//relayStatus:(relayStatus[1]=='0'?false:true),
						
						if(msn_i == 'position_message'){
							data_return.respuesta = Buffer.from("2626"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
						}else{
							data_return.respuesta = Buffer.from("2626"+msn.hex+"0010"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex')+""+buffer.slice(33,34).toString('hex'), 'hex')
						}
						
					}
					break
					break
					case 'heartbeat_message':{	
						// Variables separador
						
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(144)
						data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  todayDate
						
						// Respuesta
						data_return.respuesta = Buffer.from("2626"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					/*
					case 'driver_behavior_GNSS':{
						// Variables separador
						var registro = new Date(
							'20'+
							buffer.slice(16,17).toString('hex')+'-'+
							buffer.slice(17,18).toString('hex')+'-'+
							buffer.slice(18,19).toString('hex')+'T'+
							buffer.slice(19,20).toString('hex')+':'+
							buffer.slice(20,21).toString('hex')+':'+
							buffer.slice(21,22).toString('hex')
						)
						var registroOut = new Date(
							'20'+
							buffer.slice(38,39).toString('hex')+'-'+
							buffer.slice(39,40).toString('hex')+'-'+
							buffer.slice(40,41).toString('hex')+'T'+
							buffer.slice(41,42).toString('hex')+':'+
							buffer.slice(42,43).toString('hex')+':'+
							buffer.slice(43,44).toString('hex')
						)
						//var overSpeedNetworkSignal = this.hex2bin(buffer.slice(22,24).toString('hex'), 16)
						
						// Registro json
						data_return.save.gps.tipoMensaje = parseFloat(buffer.slice(15,16).toString('hex')) + 100
						data_return.save.gps.registro = registro
						data_return.save.gps.protocolo = 'avanzado_comportamiento_conductor'
						data_return.save.actualizar =
									{
										historico:true,
										posicion:false,
										tiempo:true,
										realtime:false,
										comando:false,
										
									}
						
						data_return.save.informacion = 
									{
										realtime:false,
										locationType:"GNSS",
										GNSS:true
									}
						
						data_return.save.rastreoIn =
						{
							latitud:buffer.slice(30,34).readFloatLE(0),
							longitud:buffer.slice(26,30).readFloatLE(0),
							altitud:buffer.slice(22,26).readFloatLE(0),
							velocidad:parseFloat(buffer.slice(34,36).toString('hex')) / 10,
							direccion:buffer.slice(36,38).readInt16BE(0),
							registro:registro
						}
						data_return.save.rastreoOut =
						{
							latitud:buffer.slice(52,56).readFloatLE(0),
							longitud:buffer.slice(48,52).readFloatLE(0),
							altitud:buffer.slice(44,48).readFloatLE(0),
							velocidad:parseFloat(buffer.slice(56,58).toString('hex')) / 10,
							direccion:buffer.slice(58,60).readInt16BE(0),
							registro:registroOut
						}
						
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex')+""+buffer.slice(37,38).toString('hex'), 'hex')
					}
					break
					case 'driver_behavior_accel':{					
						data_return.save.actualizar =
									{
										historico:false,
										posicion:false,
										tiempo:false,
										realtime:false,
										comando:false,
										
									}
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					case 'accident_acceleration_message':{					
						data_return.save.actualizar =
									{
										historico:false,
										posicion:false,
										tiempo:false,
										realtime:false,
										comando:false,
										
									}
						data_return.respuesta = Buffer.from("2525"+msn.hex+"0010"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex')+buffer.slice(15,16).toString('hex'), 'hex')
					}
					break
					
					case 'RS232_message':{					
						data_return.save.actualizar =
									{
										historico:false,
										posicion:false,
										tiempo:false,
										realtime:false,
										comando:false,
										
									}
						data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					*/
					case 'BLE_message':{
						// Variables separador	
						var registro = new Date(
							'20'+
							buffer.slice(15,16).toString('hex')+'-'+
							buffer.slice(16,17).toString('hex')+'-'+
							buffer.slice(17,18).toString('hex')+'T'+
							buffer.slice(18,19).toString('hex')+':'+
							buffer.slice(19,20).toString('hex')+':'+
							buffer.slice(20,21).toString('hex')
						)
						var tipoBLE = parseFloat(buffer.slice(22,24).toString('hex'))
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(147)
						//data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  registro
						data_return.save.bleIO = []
						switch (tipoBLE) {
							case 4:{ // Sensor de temperatura y humedad (TSTH1-B)
								var sensorCount = 1
								var bufferCount = (buffer.toString('hex').length / 2)
								var sumeRun = 0
								var sumeCadena = 15 
								if(bufferCount > 39)
									sensorCount = 2
								for(var i=0;i<sensorCount;i++){
									var sensorID = buffer.slice((24+sumeRun),(30+sumeRun)).toString('hex')
									var sensorVol = 0
									var sensorBatPor = 0
									var sensorTem = 0
									var sensorTemPositivo = true
									var sensorHum = 0
									var sensorLuz = 0
									var sensorRSSI = 0
									
									if(buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0) != -1)
										sensorVol = (200 + buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0)) * 0.010 //  (200 + value) * 10mv
									if(buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0) != -1)
										sensorBatPor = buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0)
									if(buffer.slice((32+sumeRun),(33+sumeRun)).readInt8(0) != -1){
										var sensorTemPre = this.hex2bin(buffer.slice((32+sumeRun),(34+sumeRun)).toString('hex'), 16)
										sensorTemPositivo = (sensorTemPre[0]=='0'?true:false)
										sensorTem = (buffer.slice((32+sumeRun),(34+sumeRun)).readUInt16BE(0) * 0.01)
									}
									if(buffer.slice((34+sumeRun),(35+sumeRun)).readInt8(0) != -1)
										sensorHum = (buffer.slice((34+sumeRun),(36+sumeRun)).readUInt16BE(0) / 100)
									sensorLuz = parseFloat(buffer.slice((36+sumeRun),(38+sumeRun)).toString('hex'))
									sensorRSSI = buffer.slice((38+sumeRun),(39+sumeRun)).readInt8(0)
									sensorRSSI = sensorRSSI - 128
									var BLE =
										{
											bletipo:'sensor_temp_hum_ble',
											marca:'topflytech',
											modelo:'TSTH1-B',
											sensorID: sensorID,
											sensorVol: sensorVol,
											sensorBatPor: sensorBatPor,
											sensorTem:sensorTem,
											sensorTemPositivo:sensorTemPositivo,
											sensorTemUnidad:'C',
											sensorHum:sensorHum,
											sensorLuz:(sensorLuz==0?false:true),
											sensorRSSI:sensorRSSI
										}
									data_return.save.bleIO.push(BLE)
									sumeRun = sumeRun + sumeCadena
								}
							}
							break;
							case 5:{ // Sensor de puerta y temperatura (TSDT1-B)
								var sensorCount = 1
								var bufferCount = (buffer.toString('hex').length / 2)
								var sumeRun = 0
								var sumeCadena = 12
								if(bufferCount > 36)
									sensorCount = 2
								for(var i=0;i<sensorCount;i++){
									var sensorID = buffer.slice((24+sumeRun),(30+sumeRun)).toString('hex')
									var sensorVol = 0
									var sensorBatPor = 0
									var sensorTem = 0
									var sensorTemPositivo = true
									var sensorDoor = false
									var sensorRSSI = 0
									
									if(buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0) != -1)
										sensorVol = (200 + buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0)) * 0.010 //  (200 + value) * 10mv
									if(buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0) != -1)
										sensorBatPor = buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0)
									if(buffer.slice((32+sumeRun),(33+sumeRun)).readInt8(0) != -1){
										var sensorTemPre = this.hex2bin(buffer.slice((32+sumeRun),(34+sumeRun)).toString('hex'), 16)
										sensorTemPositivo = (sensorTemPre[0]=='0'?true:false)
										sensorTem = (buffer.slice((32+sumeRun),(34+sumeRun)).readUInt16BE(0) * 0.01)
									}
									sensorDoor = parseFloat(buffer.slice((34+sumeRun),(35+sumeRun)).toString('hex'))
									sensorRSSI = buffer.slice((35+sumeRun),(36+sumeRun)).readInt8(0)
									sensorRSSI = sensorRSSI - 128
									var BLE =
										{
											bletipo:'sensor_door_temp_ble',
											marca:'topflytech',
											modelo:'TSDT1-B',
											sensorID: sensorID,
											sensorVol: sensorVol,
											sensorBatPor: sensorBatPor,
											sensorTem:sensorTem,
											sensorTemPositivo:sensorTemPositivo,
											sensorTemUnidad:'C',
											sensorDoor:(sensorDoor==0?false:true),
											sensorRSSI:sensorRSSI
										}
									data_return.save.bleIO.push(BLE)
									sumeRun = sumeRun + sumeCadena
								}
							}
							break;
							case 6:{ // Relay BLE (TSR1-B)
								var sensorCount = 1
								var bufferCount = (buffer.toString('hex').length / 2)
								var sumeRun = 0
								var sumeCadena = 12
								if(bufferCount > 36)
									sensorCount = 2
								for(var i=0;i<sensorCount;i++){
									var sensorID = buffer.slice((24+sumeRun),(30+sumeRun)).toString('hex')
									var sensorVol = 0
									var sensorBatPor = 0
									var sensorTem = 0
									var sensorTemPositivo = true
									var sensorRelay = false
									var sensorRSSI = 0
									
									if(buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0) != -1)
										sensorVol = (200 + buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0)) * 0.010 //  (200 + value) * 10mv
									if(buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0) != -1)
										sensorBatPor = buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0)
									if(buffer.slice((32+sumeRun),(33+sumeRun)).readInt8(0) != -1){
										var sensorTemPre = this.hex2bin(buffer.slice((32+sumeRun),(34+sumeRun)).toString('hex'), 16)
										sensorTemPositivo = (sensorTemPre[0]=='0'?true:false)
										sensorTem = (buffer.slice((32+sumeRun),(34+sumeRun)).readUInt16BE(0) * 0.01)
									}
									sensorRelay = parseFloat(buffer.slice((34+sumeRun),(35+sumeRun)).toString('hex'))
									sensorRSSI = buffer.slice((35+sumeRun),(36+sumeRun)).readInt8(0)
									sensorRSSI = sensorRSSI - 128
									var BLE =
										{
											bletipo:'sensor_relay_temp_ble',
											marca:'topflytech',
											modelo:'TSR1-B',
											sensorID: sensorID,
											sensorVol: sensorVol,
											sensorBatPor: sensorBatPor,
											sensorTem:sensorTem,
											sensorTemPositivo:sensorTemPositivo,
											sensorTemUnidad:'C',
											sensorRelay:(sensorRelay==0?false:true),
											sensorRSSI:sensorRSSI
										}
									data_return.save.bleIO.push(BLE)
									sumeRun = sumeRun + sumeCadena
								}
							}
							break;
							default:{}
						}
						// Datos omitidos
						// data_return.save.rawIO =
						// 			{
						// 				ignicionDigital:(parseFloat(buffer.slice(21,22).toString('hex'))==1?true:false),
						// 				ACCDigital:parseFloat(buffer.slice(21,22).toString('hex'))
						// 			}
						
						data_return.respuesta = Buffer.from("2626"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					case 'network_information':{
						// Variables separador
						var registro = new Date(
							'20'+
							buffer.slice(15,16).toString('hex')+'-'+
							buffer.slice(16,17).toString('hex')+'-'+
							buffer.slice(17,18).toString('hex')+'T'+
							buffer.slice(18,19).toString('hex')+':'+
							buffer.slice(19,20).toString('hex')+':'+
							buffer.slice(20,21).toString('hex')
						)
						var indexPaquete = [21, 22] // Index Paquetes
						// Nombre Operador
						var tamanoOperador = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoOperador
						var nombreOperador = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// Nombre de la tecnologia
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoTecnologia = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoTecnologia
						var nombreAccesoTecnologia = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// Nombre de la Banda
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoBanda = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoBanda
						var nombreBanda = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// SIM CARD
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoSIM = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoSIM
						var simCard = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// ICCID
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoICCID = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoICCID
						var iccid = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(148)
						data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  registro
						data_return.save.networkName = nombreOperador
						data_return.save.accessTecnologic = nombreAccesoTecnologia
						data_return.save.bandName = nombreBanda
						data_return.save.imsi = simCard
						data_return.save.iccid = iccid
						
						// Respuesta
						data_return.respuesta = Buffer.from("2626"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					// case 'BLE_message_position':{					
					// 	// Variables separador
					// 	
					// 	// Registro json
					// 	data_return.save.gps.tipoMensaje = 1007
					// 	data_return.save.gps.registro =  todayDate
					// 	data_return.save.gps.protocolo = 'avanzado_position_ble'
					// 	data_return.save.actualizar =
					// 				{
					// 					historico:true,
					// 					posicion:true,
					// 					tiempo:true,
					// 					realtime:false,
					// 					comando:false,
					// 					
					// 				}
					// 	data_return.respuesta = Buffer.from("2525"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					// }
					// break
					case 'setting_message':{
						// Variables separador
						var limiteBuffer = buffer.length
						var reqCMD = buffer.slice(16, limiteBuffer).toString('utf8')
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(140)
						data_return.save.serialmsn = buffer.slice(5,7).readUInt16BE(0)
						data_return.save.registro = todayDate
						data_return.save.CMDMensaje = reqCMD.replaceAll("\x00", "") 
						data_return.save.CMDRegistro = todayDate
						console.log('CMD recibido', reqCMD)
						data_return.respuesta = Buffer.from("2626"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					default:{
						// Registro json
						data_return.save.protocolotipo = 10
						data_return.save.registro =  todayDate
						data_return.respuesta = Buffer.from("2626"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
				}
			}
		}
		return data_return
	},
	tlp1: function (buffer, unitIDMotor = null) {
		var data_return = {}
		data_return.save = {}
		var paquete = buffer.slice(3,5).readInt16BE(0)
		var paqueteCount = (buffer.toString('hex').length / 2)
		if(paquete != paqueteCount){
			data_return.error = "Error de paquete, No completo"
			console.log('Error de paquete, No completo', buffer.toString('hex'))	
			return data_return
		}
		
		var mensaje = buffer.slice(2,3).toString('hex')
		for(var msn_i in this.topflytech.TLP1.msn){	
			var msn = this.topflytech.TLP1.msn[msn_i]
			if(mensaje == msn.hex){
				data_return.save.unitid = String(parseInt(buffer.slice(7,15).toString('hex')))
				data_return.save.imei = parseInt(buffer.slice(7,15).toString('hex'))
				data_return.identificadorUnitID = data_return.save.unitid
				data_return.save.marcaGPS = 'topflytech'
				data_return.save.modeloGPS = 'TLP1'
				data_return.save.identificadorGPS = 'TLP1'
				data_return.save.submodeloGPS = 'TLP1-Series'
				data_return.save.motorcom = 0
				data_return.save.crudo = buffer.toString('hex')
				data_return.save.protocolomsn = msn_i
				data_return.save.protocolotipo = msn.protocolotipo
				data_return.save.serialmsn = buffer.slice(5,7).readUInt16BE(0)
				
				// Variables de ayuda
				var nowDate = Date.now()
				var todayDate = new Date(nowDate)
				// Separador de mensaje
				switch (msn_i) {
					case 'login_message':{
						// Variables separador
						var modelMcu = buffer.slice(15,17).toString('hex')[0]
						var versionMcu = buffer.slice(15,17).toString('hex')[1]+'.'+buffer.slice(15,17).toString('hex')[2]+'.'+buffer.slice(15,17).toString('hex')[3]
						var versionModem = buffer.slice(17,20).toString('hex')
						var versionModemApp = buffer.slice(20,22).toString('hex')[0]+'.'+buffer.slice(20,22).toString('hex')[1]+'.'+buffer.slice(20,22).toString('hex')[2]+'.'+buffer.slice(20,22).toString('hex')[3]
						var hardwareVersion = buffer.slice(22,23).toString('hex')[0]+'.'+buffer.slice(22,23).toString('hex')[1]
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(143)
						data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  todayDate
						
						data_return.save.modelMcu = modelMcu
						data_return.save.versionMcu = versionMcu
						data_return.save.versionModem = versionModem
						data_return.save.versionModemApp = versionModemApp
						data_return.save.hardwareVersion = hardwareVersion
						
						// Respuesta
						data_return.respuesta = Buffer.from("2727"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					case 'position_message':
					case 'alarm_message':{
						// Variables separador
						var registro = new Date(
							'20'+
							buffer.slice(17,18).toString('hex')+'-'+
							buffer.slice(18,19).toString('hex')+'-'+
							buffer.slice(19,20).toString('hex')+'T'+
							buffer.slice(20,21).toString('hex')+':'+
							buffer.slice(21,22).toString('hex')+':'+
							buffer.slice(22,23).toString('hex')
						)
						var dataGNSS = this.hex2bin(buffer.slice(15,16).toString('hex'))
						var statusInfo0 = this.hex2bin(buffer.slice(53,55).toString('hex'), 16)
						var statusInfo1 = this.hex2bin(buffer.slice(65,66).toString('hex'))
						var statusInfo2 = this.hex2bin(buffer.slice(66,67).toString('hex'))
						var statusInfo3 = this.hex2bin(buffer.slice(67,68).toString('hex'))
						var temperaturaInternaPre = this.hex2bin(buffer.slice(45,46).toString('hex'))
						var temperaturaInterna = parseInt(temperaturaInternaPre[1]+''+temperaturaInternaPre[2]+''+temperaturaInternaPre[3]+''+temperaturaInternaPre[4]+''+temperaturaInternaPre[5]+''+temperaturaInternaPre[6]+''+temperaturaInternaPre[7],2)
						var temperaturaInternaPos = (temperaturaInternaPre[0]=='0'?true:false)
						
						
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje('AA' + parseFloat(buffer.slice(16,17).toString('hex')))
						if(msn_i == 'position_message'){
							data_return.save.tipomsn = this.tipoMensaje('P1')
						}
						data_return.save.realtime = (dataGNSS[0]=='0'?true:false)
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  registro
						// Configuracion
						data_return.save.intervaloRepIngOn = buffer.slice(55,57).readInt16BE(0)
						data_return.save.intervaloRepIngOff = buffer.slice(57,61).readInt32BE(0)
						var bufferAngulo = '00'+buffer.slice(61,62).toString('hex')
						bufferAngulo = Buffer.from(bufferAngulo, 'hex')
						data_return.save.intervaloReqAngulo = bufferAngulo.slice(0,2).readInt16BE(0)
						data_return.save.intervaloReqDistancia = buffer.slice(62,64).readInt16BE(0)
						data_return.save.intervaloReqHeartbeat = buffer.slice(64,65).readInt8(0)
						data_return.save.unidadMedida = (statusInfo2[2]=='0'?"km":"mile")
						data_return.save.managerActivo = [
							(statusInfo0[1]==0?false:true),
							(statusInfo0[2]==0?false:true),
							(statusInfo0[3]==0?false:true),
							(statusInfo0[4]==0?false:true)
						]
						//Tipo de conexión TCP, UDP o MTQQ
						if(statusInfo2[5]=='1'){
							data_return.save.serverType = "TCP"
						}else if (statusInfo2[6]=='1') {
							data_return.save.serverType = "TCP"
						}else if (statusInfo2[7]=='1') {
							data_return.save.serverType = "MTQQ"
						}else{
							data_return.save.serverType = "Desconocido"
						}
						data_return.save.frontSensorAct = (statusInfo1[4]=='0'?false:true)
						data_return.save.dispositivoRemovidoAct = (statusInfo1[5]=='0'?false:true)
						data_return.save.dispositivoAbiertoAct = (statusInfo1[6]=='0'?false:true)
						data_return.save.temperaturaReporteAct = (statusInfo1[7]=='0'?false:true)
						// Omitidos
						//data_return.save.xtra = (statusInfo0[14]=='1'?true:false)
						//data_return.save.temporisadorInteligente = (statusInfo0[15]=='1'?true:false)
						// data_return.save.usbConector = (statusInfo0[0]=='1'?true:false)
						// data_return.save.agpsAct = (statusInfo1[2]=='0'?false:true)
						// data_return.save.gsensorAct = (statusInfo1[3]=='0'?false:true)
						// data_return.save.SMSalertAct = (statusInfo2[0]=='0'?false:true)
						// data_return.save.ACCDETAct = (statusInfo2[1]=='0'?false:true)
						// data_return.save.GFENCEAct = (statusInfo2[4]=='0'?false:true)
						// data_return.save.SmartPowerAct = (statusInfo3[0]=='0'?false:true)
						
						// Rastreo y Información
						data_return.save.senal = parseInt(statusInfo0[5]+statusInfo0[6]+statusInfo0[7]+statusInfo0[8]+statusInfo0[9]+statusInfo0[10]+statusInfo0[11], 2)
						data_return.save.lbsEstado = (dataGNSS[1]=='0'?true:false)
						data_return.save.gnnsEstado = (dataGNSS[1]=='1'?true:false)
						data_return.save.nosatelites = parseInt(dataGNSS[3]+dataGNSS[4]+dataGNSS[5]+dataGNSS[6]+dataGNSS[7], 2)
						
						if(dataGNSS[1]!='0'){
							data_return.save.latitud = buffer.slice(31,35).readFloatLE(0)
							data_return.save.longitud = buffer.slice(27,31).readFloatLE(0)
							data_return.save.altitud = buffer.slice(23,27).readFloatLE(0)
							data_return.save.velocidad = parseFloat(buffer.slice(35,37).toString('hex')) / 10
							data_return.save.direccion = buffer.slice(37,39).readInt16BE(0)
						}else{
							var LBSData = buffer.slice(23,25).toString('hex')
							if(LBSData != 'ffff'){ // valida si LBS no esta vacía
								var LBSDataLTE = this.hex2bin(buffer.slice(23,25).toString('hex'), 16)
								LBSDataLTECheck = parseFloat(LBSDataLTE[0])
								data_return.save.lbsBanda = (LBSDataLTECheck==1?'4G-LTE':'2G')
								data_return.save.lbsRegistro = data_return.save.registro
								if(LBSDataLTECheck == 1){ // 4G-LTE
									data_return.save.lbsMCC = parseInt(LBSDataLTE[1]+LBSDataLTE[2]+LBSDataLTE[3]+LBSDataLTE[4]+LBSDataLTE[5]+LBSDataLTE[6]+LBSDataLTE[7]+LBSDataLTE[8]+LBSDataLTE[9]+LBSDataLTE[10]+LBSDataLTE[11]+LBSDataLTE[12]+LBSDataLTE[13]+LBSDataLTE[14]+LBSDataLTE[15], 2)
									data_return.save.lbsMNC = buffer.slice(25,27).readInt16BE(0)
									data_return.save.lbsTowers = 
									[
										{
											LAC: buffer.slice(31,33).readInt16BE(0),
											CI: buffer.slice(27,31).readInt32BE(0),
											LVL: data_return.save.senal
										},
										{
											LAC: buffer.slice(37,39).readInt16BE(0),
											CIP: buffer.slice(35,37).readInt16BE(0)
										},
									]
									
								}else{
									data_return.save.lbsMCC = parseInt(LBSDataLTE[1]+LBSDataLTE[2]+LBSDataLTE[3]+LBSDataLTE[4]+LBSDataLTE[5]+LBSDataLTE[6]+LBSDataLTE[7]+LBSDataLTE[8]+LBSDataLTE[9]+LBSDataLTE[10]+LBSDataLTE[11]+LBSDataLTE[12]+LBSDataLTE[13]+LBSDataLTE[14]+LBSDataLTE[15], 2)
									data_return.save.lbsMNC = buffer.slice(52,54).readInt16BE(0)
									data_return.save.lbsTowers = 
									[
										{
											LAC: buffer.slice(27,29).readInt16BE(0),
											CI: buffer.slice(29,31).readInt16BE(0),
											LVL: data_return.save.senal
										},
										{
											CI:buffer.slice(33,35).readInt16BE(0),
											LAC:buffer.slice(31,33).readInt16BE(0)
										},
										{
											CI:buffer.slice(37,39).readInt16BE(0),
											LAC:buffer.slice(35,37).readInt16BE(0)
										}
									]
								}
								
							}
						}
						data_return.save.odometro = buffer.slice(49,53).readInt32BE(0)
						
						// Informacion
						data_return.save.simLock = (statusInfo1[0]=='0'?false:true)
						data_return.save.dispositivoBloqueado = (statusInfo1[1]=='0'?false:true)
						data_return.save.gpsAct = (statusInfo2[3]=='0'?false:true)
						data_return.save.temperaturaInterna = temperaturaInterna
						data_return.save.temperaturaInternaPos = temperaturaInternaPos
						data_return.save.temperaturaInternaMedida = 'C'
						// Energia
						data_return.save.frontLightSensorVoltaje = parseFloat(buffer.slice(46,47).toString('hex')[0]+'.'+buffer.slice(46,47).toString('hex')[1])
						data_return.save.solarPanelVoltaje = parseFloat(buffer.slice(48,49).toString('hex')[0]+'.'+buffer.slice(48,49).toString('hex')[1])
						data_return.save.energiaInternaLVL = (parseFloat(buffer.slice(44,45).toString('hex'))==0?100:buffer.slice(44,45).toString('hex'))
						data_return.save.energiaInternaVol = parseFloat(buffer.slice(74,75).toString('hex')[0]+'.'+buffer.slice(75,76).toString('hex')[1])
						data_return.save.cargaSolar = (statusInfo0[12]=='1'?true:false),
						
						// IO
						data_return.save.entradasDigital = [
							(statusInfo0[13]=='0'?false:true)
						]
						data_return.save.salidasDigital = [
							false
						]
						
						if(msn_i == 'position_message'){
							data_return.respuesta = Buffer.from("2727"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
						}else{
							data_return.respuesta = Buffer.from("2727"+msn.hex+"0010"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex')+""+buffer.slice(16,17).toString('hex'), 'hex')
						}
						
					}
					break
					case 'heartbeat_message':{	
						// Variables separador
						
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(144)
						data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  todayDate
						
						// Respuesta
						data_return.respuesta = Buffer.from("2727"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					case 'BLE_message':{
						// Variables separador	
						var registro = new Date(
							'20'+
							buffer.slice(15,16).toString('hex')+'-'+
							buffer.slice(16,17).toString('hex')+'-'+
							buffer.slice(17,18).toString('hex')+'T'+
							buffer.slice(18,19).toString('hex')+':'+
							buffer.slice(19,20).toString('hex')+':'+
							buffer.slice(20,21).toString('hex')
						)
						var tipoBLE = parseFloat(buffer.slice(22,24).toString('hex'))
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(147)
						//data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  registro
						data_return.save.bleIO = []
						switch (tipoBLE) {
							case 4:{ // Sensor de temperatura y humedad (TSTH1-B)
								var sensorCount = 1
								var bufferCount = (buffer.toString('hex').length / 2)
								var sumeRun = 0
								var sumeCadena = 15 
								if(bufferCount > 39)
									sensorCount = 2
								for(var i=0;i<sensorCount;i++){
									var sensorID = buffer.slice((24+sumeRun),(30+sumeRun)).toString('hex')
									var sensorVol = 0
									var sensorBatPor = 0
									var sensorTem = 0
									var sensorTemPositivo = true
									var sensorHum = 0
									var sensorLuz = 0
									var sensorRSSI = 0
									
									if(buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0) != -1)
										sensorVol = (200 + buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0)) * 0.010 //  (200 + value) * 10mv
									if(buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0) != -1)
										sensorBatPor = buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0)
									if(buffer.slice((32+sumeRun),(33+sumeRun)).readInt8(0) != -1){
										var sensorTemPre = this.hex2bin(buffer.slice((32+sumeRun),(34+sumeRun)).toString('hex'), 16)
										sensorTemPositivo = (sensorTemPre[0]=='0'?true:false)
										sensorTem = (buffer.slice((32+sumeRun),(34+sumeRun)).readUInt16BE(0) * 0.01)
									}
									if(buffer.slice((34+sumeRun),(35+sumeRun)).readInt8(0) != -1)
										sensorHum = (buffer.slice((34+sumeRun),(36+sumeRun)).readUInt16BE(0) / 100)
									sensorLuz = parseFloat(buffer.slice((36+sumeRun),(38+sumeRun)).toString('hex'))
									sensorRSSI = buffer.slice((38+sumeRun),(39+sumeRun)).readInt8(0)
									sensorRSSI = sensorRSSI - 128
									var BLE =
										{
											bletipo:'sensor_temp_hum_ble',
											marca:'topflytech',
											modelo:'TSTH1-B',
											sensorID: sensorID,
											sensorVol: sensorVol,
											sensorBatPor: sensorBatPor,
											sensorTem:sensorTem,
											sensorTemPositivo:sensorTemPositivo,
											sensorTemUnidad:'C',
											sensorHum:sensorHum,
											sensorLuz:(sensorLuz==0?false:true),
											sensorRSSI:sensorRSSI
										}
									data_return.save.bleIO.push(BLE)
									sumeRun = sumeRun + sumeCadena
								}
							}
							break;
							case 5:{ // Sensor de puerta y temperatura (TSDT1-B)
								var sensorCount = 1
								var bufferCount = (buffer.toString('hex').length / 2)
								var sumeRun = 0
								var sumeCadena = 12
								if(bufferCount > 36)
									sensorCount = 2
								for(var i=0;i<sensorCount;i++){
									var sensorID = buffer.slice((24+sumeRun),(30+sumeRun)).toString('hex')
									var sensorVol = 0
									var sensorBatPor = 0
									var sensorTem = 0
									var sensorTemPositivo = true
									var sensorDoor = false
									var sensorRSSI = 0
									
									if(buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0) != -1)
										sensorVol = (200 + buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0)) * 0.010 //  (200 + value) * 10mv
									if(buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0) != -1)
										sensorBatPor = buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0)
									if(buffer.slice((32+sumeRun),(33+sumeRun)).readInt8(0) != -1){
										var sensorTemPre = this.hex2bin(buffer.slice((32+sumeRun),(34+sumeRun)).toString('hex'), 16)
										sensorTemPositivo = (sensorTemPre[0]=='0'?true:false)
										sensorTem = (buffer.slice((32+sumeRun),(34+sumeRun)).readUInt16BE(0) * 0.01)
									}
									sensorDoor = parseFloat(buffer.slice((34+sumeRun),(35+sumeRun)).toString('hex'))
									sensorRSSI = buffer.slice((35+sumeRun),(36+sumeRun)).readInt8(0)
									sensorRSSI = sensorRSSI - 128
									var BLE =
										{
											bletipo:'sensor_door_temp_ble',
											marca:'topflytech',
											modelo:'TSDT1-B',
											sensorID: sensorID,
											sensorVol: sensorVol,
											sensorBatPor: sensorBatPor,
											sensorTem:sensorTem,
											sensorTemPositivo:sensorTemPositivo,
											sensorTemUnidad:'C',
											sensorDoor:(sensorDoor==0?false:true),
											sensorRSSI:sensorRSSI
										}
									data_return.save.bleIO.push(BLE)
									sumeRun = sumeRun + sumeCadena
								}
							}
							break;
							case 6:{ // Relay BLE (TSR1-B)
								var sensorCount = 1
								var bufferCount = (buffer.toString('hex').length / 2)
								var sumeRun = 0
								var sumeCadena = 12
								if(bufferCount > 36)
									sensorCount = 2
								for(var i=0;i<sensorCount;i++){
									var sensorID = buffer.slice((24+sumeRun),(30+sumeRun)).toString('hex')
									var sensorVol = 0
									var sensorBatPor = 0
									var sensorTem = 0
									var sensorTemPositivo = true
									var sensorRelay = false
									var sensorRSSI = 0
									
									if(buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0) != -1)
										sensorVol = (200 + buffer.slice((30+sumeRun),(31+sumeRun)).readInt8(0)) * 0.010 //  (200 + value) * 10mv
									if(buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0) != -1)
										sensorBatPor = buffer.slice((31+sumeRun),(32+sumeRun)).readInt8(0)
									if(buffer.slice((32+sumeRun),(33+sumeRun)).readInt8(0) != -1){
										var sensorTemPre = this.hex2bin(buffer.slice((32+sumeRun),(34+sumeRun)).toString('hex'), 16)
										sensorTemPositivo = (sensorTemPre[0]=='0'?true:false)
										sensorTem = (buffer.slice((32+sumeRun),(34+sumeRun)).readUInt16BE(0) * 0.01)
									}
									sensorRelay = parseFloat(buffer.slice((34+sumeRun),(35+sumeRun)).toString('hex'))
									sensorRSSI = buffer.slice((35+sumeRun),(36+sumeRun)).readInt8(0)
									sensorRSSI = sensorRSSI - 128
									var BLE =
										{
											bletipo:'sensor_relay_temp_ble',
											marca:'topflytech',
											modelo:'TSR1-B',
											sensorID: sensorID,
											sensorVol: sensorVol,
											sensorBatPor: sensorBatPor,
											sensorTem:sensorTem,
											sensorTemPositivo:sensorTemPositivo,
											sensorTemUnidad:'C',
											sensorRelay:(sensorRelay==0?false:true),
											sensorRSSI:sensorRSSI
										}
									data_return.save.bleIO.push(BLE)
									sumeRun = sumeRun + sumeCadena
								}
							}
							break;
							default:{
								
							}
						}
						data_return.respuesta = Buffer.from("2727"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					case 'network_information':{
						// Variables separador
						var registro = new Date(
							'20'+
							buffer.slice(15,16).toString('hex')+'-'+
							buffer.slice(16,17).toString('hex')+'-'+
							buffer.slice(17,18).toString('hex')+'T'+
							buffer.slice(18,19).toString('hex')+':'+
							buffer.slice(19,20).toString('hex')+':'+
							buffer.slice(20,21).toString('hex')
						)
						var indexPaquete = [21, 22] // Index Paquetes
						// Nombre Operador
						var tamanoOperador = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoOperador
						var nombreOperador = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// Nombre de la tecnologia
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoTecnologia = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoTecnologia
						var nombreAccesoTecnologia = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// Nombre de la Banda
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoBanda = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoBanda
						var nombreBanda = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// SIM CARD
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoSIM = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoSIM
						var simCard = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// ICCID
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + 1
						var tamanoICCID = buffer.slice(indexPaquete[0], indexPaquete[1]).readInt8(0)
						indexPaquete[0] = indexPaquete[1]
						indexPaquete[1] = indexPaquete[1] + tamanoICCID
						var iccid = buffer.slice(indexPaquete[0], indexPaquete[1]).toString('utf8')
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(148)
						data_return.save.realtime = true
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.registro =  registro
						data_return.save.networkName = nombreOperador
						data_return.save.accessTecnologic = nombreAccesoTecnologia
						data_return.save.bandName = nombreBanda
						data_return.save.imsi = simCard
						data_return.save.iccid = iccid
						
						// Respuesta
						data_return.respuesta = Buffer.from("2727"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					case 'setting_message':{
						// Variables separador
						var limiteBuffer = buffer.length
						var reqCMD = buffer.slice(16, limiteBuffer).toString('utf8')
						// Registro json
						data_return.save.tipomsn = this.tipoMensaje(140)
						data_return.save.serialmsn = buffer.slice(5,7).readUInt16BE(0)
						data_return.save.registro = todayDate
						data_return.save.CMDMensaje = reqCMD.replaceAll("\x00", "")
						data_return.save.CMDRegistro = todayDate
						data_return.respuesta = Buffer.from("2727"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
					break
					default:{
						// Registro json
						console.log('Default')
						data_return.save.protocolotipo = 10
						data_return.save.registro =  todayDate
						data_return.respuesta = Buffer.from("2727"+msn.hex+"000F"+buffer.slice(5,7).toString('hex')+""+buffer.slice(7,15).toString('hex'), 'hex')
					}
				}
			}
			
		}
		return data_return
	},
	hex2bin:function (hex, pad=8){
		return (parseInt(hex, 16).toString(2)).padStart(pad, '0');
	}

}