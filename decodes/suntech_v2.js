module.exports = {
	suntech:{
		'st600':{
			'identificador':'5354363030',
			'msn':{
				'status_report':{
					'hex': 'ST600STT',
					'titulo':'Status Report',
					'protocolotipo':1
				},
				'emergency_report':{
					'hex': 'ST600EMG',
					'titulo':'Emergency report',
					'protocolotipo':1
				},
				'event_report':{
					'hex': 'ST600EVT',
					'titulo':'Event report',
					'protocolotipo':1
				},
				'alert':{
					'hex': 'ST600ALT',
					'titulo':'Alert',
					'protocolotipo':1
				},
				'travel_event_report':{
					'hex': 'ST600HTE',
					'titulo':'Travel-event report',
					'protocolotipo':6
				},
				'keep_alive':{
					'hex': 'ST600ALV',
					'titulo':'Keep-alive report',
					'protocolotipo':0
				},
				'data_report_delivered_rs232':{
					'hex': 'ST600UEX',
					'titulo':'Data report delivered through external RS232',
					'protocolotipo':1
				},
				'management_report':{
					'hex': 'ST600MNT',
					'titulo':'Management Report (ST630/640 Series)',
					'protocolotipo':10
				},
				'crash_reconstruction_report':{
					'hex': 'ST600CRR',
					'titulo':'Crash reconstruction report',
					'protocolotipo':10
				},
				'comando-res':{
					'hex': 'ST600CMD',
					'titulo':'Resquest CMD',
					'protocolotipo':2
				}
			}
			
		},
		'st300':{
			'identificador':'5354333030',
			'msn':{
				'status_report':{
					'hex': 'ST300STT',
					'titulo':'Status Report',
					'protocolotipo':1
				},
				'emergency_report':{
					'hex': 'ST300EMG',
					'titulo':'Emergency report',
					'protocolotipo':1
				},
				'event_report':{
					'hex': 'ST300EVT',
					'titulo':'Event report',
					'protocolotipo':1
				},
				'alert':{
					'hex': 'ST300ALT',
					'titulo':'Alert',
					'protocolotipo':1
				},
				'keep_alive':{
					'hex': 'ST300ALV',
					'titulo':'Keep-alive report',
					'protocolotipo':0
				},
				'comando-res':{
					'hex': 'ST300CMD',
					'titulo':'Resquest CMD',
					'protocolotipo':2
				}
			}
			
		},
		'universal':{
			'identificador':'5354543b',
			'msn':{
				'status_report':{
					'hex': 'STT',
					'titulo':'Status Report',
					'protocolotipo':1
				},
				'alert':{
					'hex': 'ALT',
					'titulo':'Alert',
					'protocolotipo':1
				},
				'keep_alive':{
					'hex': 'ALV',
					'titulo':'Keep-alive report',
					'protocolotipo':0
				},
				'data_report_delivered_rs232':{
					'hex': 'UEX',
					'titulo':'Data report delivered through external RS232',
					'protocolotipo':1
				},
				'travel_event_report':{
					'hex': 'TRV',
					'titulo':'Travel-event report',
					'protocolotipo':6
				},
				'comando-res':{
					'hex': 'RES',
					'titulo':'Resquest CMD',
					'protocolotipo':2
				}
			}
			
		}
	},
	tipoMensaje: function(mensaje, adicional=null){
		var traductorMensaje = 0
		switch (mensaje) {
			case 'A3':
			case 'A4':
			case 'A5':
			case 'A6':
			case 'A8':
			case 'A11':
			case 'A12':
			case 'A18':
			case 'A19':
			case 'A27':
			case 'A28':
			case 'A29':
			case 'A31':
			case 'A35':
			case 'A36':
			case 'A48':
			case 'A49':
			case 'A55':
			case 'A56':
			case 'A57':
			case 'A58':
			case 'A59':
			case 'A60':
			case 'A67':
			case 'A68':
			case 'A69':
			case 'A75':
			case 'A76':
			case 'A77':
			case 'A78':
			case 'A80':
			case 'A81':
			case 'A82':
			case 'A83':
			case 'A84':
			case 'A85':
			case 'A86':
			case 'A87':
			case 'A88':
			case 'A89':
			case 'A90':
			case 'A91':
			case 'A92':
			case 'A93':
			case 'A97':
			case 'A99':
			case 'A70':
			case 'A71':
			case 'A74':
			case 'A79':
			case 'A100':
			case 'A101':
			case 'A103':
			case 'A104':
			case 'A105':
			case 'A106':
			case 'A116':
			case 'A117':
			case 'A129':
			case 'A130':
			case 'A131':
			case 'A132':
			
			traductorMensaje = 0
			break;
			
			case 'P0':
			traductorMensaje = 7
			break;
			
			case 'P1':{
				traductorMensaje = 9
				if(adicional != null && adicional == 'ST600'){
					traductorMensaje = 7
				}
			}
			break;
			
			case 'P2':{
				traductorMensaje = 52
				if(adicional != null && adicional == 'ST600'){
					traductorMensaje = 8
				}
			}
			break;
			
			case 'P3':
			case 'A1':{
				traductorMensaje = 23
				if(mensaje == 'P3'){
					if(adicional != null && adicional == 'ST600'){
						traductorMensaje = 10
					}
				}
				
			}
			break;
			
			case 'P4':{
				traductorMensaje = 104
				if(adicional != null && adicional == 'ST600'){
					traductorMensaje = 9
				}
			}
			break;
			
			case 'A2':
			traductorMensaje = 84
			break;
			
			case 'A9':
			traductorMensaje = 29
			break;
			
			case 'A10':
			traductorMensaje = 30
			break;
			
			case 'A13':
			traductorMensaje = 31
			break;
			
			case 'A14':
			traductorMensaje = 32
			break;
			
			case 'A15':
			case 'A16':
			traductorMensaje = 33
			break;
			
			case 'A33':
			traductorMensaje = 43
			break;
			
			case 'A34':
			traductorMensaje = 44
			break;
			
			case 'A40':
			traductorMensaje = 45
			break;
			
			case 'A41':
			case 'E3':
			traductorMensaje = 46
			break;
			
			case 'A44':
			traductorMensaje = 47
			break;
			
			case 'A45':
			traductorMensaje = 85
			break;
			
			case 'A61':
			case 'A62':
			case 'A22':
			case 'A23':{
				traductorMensaje = 37
				if(mensaje == 'A62'){
					if(adicional != null && adicional == 'ST600'){
						traductorMensaje = 12
					}else if(adicional != null && adicional == 'ST300'){
						traductorMensaje = 12
					}
				}
				if(mensaje == 'A61'){
					if(adicional != null && adicional == 'ST300'){
						traductorMensaje = 0
					}
				}
			}
			break;
			
			case 'A63':
			case 'A24':{
				traductorMensaje = 38
				if(mensaje == 'A63'){
					if(adicional != null && adicional == 'ST300'){
						traductorMensaje = 0
					}
				}
			}
			break;
			
			case 'A64':
			case 'A25':{
				traductorMensaje = 39
				if(mensaje == 'A64'){
					if(adicional != null && adicional == 'ST300'){
						traductorMensaje = 0
					}
				}
			}
			break;
			
			case 'A65':
			case 'A26':{
				traductorMensaje = 40
				if(mensaje == 'A65'){
					if(adicional != null && adicional == 'ST300'){
						traductorMensaje = 0
					}
				}
			}
			break;
			
			case 'A66':{
				traductorMensaje = 43
				if(mensaje == 'A66'){
					if(adicional != null && adicional == 'ST300'){
						traductorMensaje = 0
					}
				}
			}
			break;
			
			case 'A46':
			traductorMensaje = 48
			break;
			
			case 'A47':
			traductorMensaje = 104
			break;
			
			case 'A50':
			traductorMensaje = 51
			break;
			
			case 'A43':
			traductorMensaje = 6
			break;
			
			case 'A72':
			traductorMensaje = 82
			break;
			
			case 'A42':
			case 'E1':
			traductorMensaje = 3
			break;
			
			case 'A73':
			case 'E5':
			case 'E6':
			case 'E8':{
				traductorMensaje = 103
				if(mensaje == 'A73'){
					if(adicional != null && adicional == 'ST300'){
						traductorMensaje = 0
					}
				}
			}
			break;
			
			case 'E7':
			traductorMensaje = 53
			break;
			
			case 'EV1':
			traductorMensaje = 60
			break;
			case 'EV2':
			traductorMensaje = 61
			break;
			case 'EV3':
			traductorMensaje = 62
			break;
			case 'EV4':
			traductorMensaje = 63
			break;
			case 'EV5':
			traductorMensaje = 64
			break;
			case 'EV6':
			traductorMensaje = 65
			break;
			case 'EV7':
			traductorMensaje = 66
			break;
			case 'EV8':
			traductorMensaje = 67
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
	// ST600
	st600: function (buffer, unitIDMotor = null) {
		var data_return = {}
		data_return.save = {}
		var subBuffer = Buffer.from(buffer, 'hex')
		var paquete = subBuffer.toString('utf8')
		paquete = paquete.split(";")
		
		var mensaje = paquete[0]
		for(var msn_i in this.suntech.st600.msn){	
			var msn = this.suntech.st600.msn[msn_i]
			if(mensaje == msn.hex){
				if(String(paquete[0]) == 'ST600CMD'){
					data_return.save.unitid = String(paquete[2])
				}else{
					data_return.save.unitid = String(paquete[1])
					data_return.save.submodeloGPS = this.st600ModelSelect(paquete[2])
				}
				data_return.identificadorUnitID = parseFloat(data_return.save.unitid)
				data_return.save.marcaGPS = 'suntech'
				data_return.save.modeloGPS = 'ST600'
				data_return.save.identificadorGPS = 'ST600'
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
					case 'status_report':
					case 'emergency_report':
					case 'event_report':
					case 'alert':{
						if(msn_i == 'alert'){
							if(paquete[20].includes(":")){
								data_return.save.tipomsnExtraInfo = paquete[20].split(":")[1]
								paquete[20] = paquete[20].split(":")[0]
							}
							if(paquete[20].length > 3 && !paquete[20].includes(":")){
								data_return.save.tipomsnExtraInfo = paquete[20].split(":")[1]
								paquete[20] = paquete[20].split(":")[0]
								data_return.save.protocolotipo = 10
								data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
								break; 
							}
							data_return.save.tipomsn = this.tipoMensaje('A' + paquete[20], 'ST600')
							data_return.save.serialmsn = 
								Math.floor(
									new Date(
										paquete[4].slice(0,4)+'-'+
										paquete[4].slice(4,6)+'-'+
										paquete[4].slice(6,8)+'T'+
										paquete[5]
									)
								/ 1000)
						}else if(msn_i == 'emergency_report'){
							data_return.save.tipomsn = this.tipoMensaje('E' + paquete[20])
							data_return.save.serialmsn = 
								Math.floor(
									new Date(
										paquete[4].slice(0,4)+'-'+
										paquete[4].slice(4,6)+'-'+
										paquete[4].slice(6,8)+'T'+
										paquete[5]
									)
								/ 1000)
						}else if(msn_i == 'event_report'){
							data_return.save.tipomsn = this.tipoMensaje('EV' + paquete[20], 'ST600')
							data_return.save.serialmsn = 
								Math.floor(
									new Date(
										paquete[4].slice(0,4)+'-'+
										paquete[4].slice(4,6)+'-'+
										paquete[4].slice(6,8)+'T'+
										paquete[5]
									)
								/ 1000)
						}else{
							data_return.save.tipomsn = this.tipoMensaje('P' + paquete[20], 'ST600')
							data_return.save.serialmsn = parseFloat(paquete[21])
						}
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
						try{
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
						}catch(error){
							console.log('Error al decodificar LBS', error)
							console.log('CurdoInfo', paquete)
						}
						
						data_return.save.energiaExternaVol = paquete[18]
						if(msn_i == 'emergency_report' || msn_i == 'event_report' || msn_i == 'alert'){
							data_return.save.energiaInternaVol = paquete[22]
						}else{
							data_return.save.energiaInternaVol = paquete[23]
						}
						if(paquete[2] == '20' || 
							 paquete[2] == '21' || 
							 paquete[2] == '34' || 
							 paquete[2] == '35' || 
							 paquete[2] == '36'){
							if(msn_i == 'emergency_report' || msn_i == 'event_report' || msn_i == 'alert'){
								data_return.save.energiaADCVol = parseFloat(paquete[24])
							}else{
								data_return.save.energiaADCVol = parseFloat(paquete[25])
							}
						}
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
						if(msn_i == 'emergency_report' || msn_i == 'alert'){
							data_return.respuesta = Buffer.from(String("ST600CMD;"+paquete[1]+";02;AckEmerg"), 'hex')
						}else{
							data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
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
	// ST300
	st300: function (buffer, unitIDMotor = null) {
		var data_return = {}
		data_return.save = {}
		var subBuffer = Buffer.from(buffer, 'hex')
		var paquete = subBuffer.toString('utf8')
		paquete = paquete.split(";")
		
		var mensaje = paquete[0]
		for(var msn_i in this.suntech.st300.msn){	
			var msn = this.suntech.st300.msn[msn_i]
			if(mensaje == msn.hex){
				if(String(paquete[0]) == 'ST300CMD'){
					data_return.save.unitid = String(paquete[2])
				}else{
					data_return.save.unitid = String(paquete[1])
					data_return.save.submodeloGPS = this.st300ModelSelect(paquete[2])
				}
				data_return.save.marcaGPS = 'suntech'
				data_return.save.modeloGPS = 'ST300'
				data_return.save.identificadorGPS = 'ST300'
				data_return.save.motorcom = 0
				data_return.save.crudo = buffer.toString('hex')
				data_return.save.protocolomsn = msn_i
				data_return.save.protocolotipo = msn.protocolotipo
				// Variables de ayuda
				var nowDate = Date.now()
				var todayDate = new Date(nowDate)
				// Separador de mensaje
				switch (msn_i) {
					case 'status_report':
					case 'emergency_report':
					case 'event_report':
					case 'alert':{
						if(msn_i == 'alert'){
							if(paquete[16].includes(":")){
								data_return.save.tipomsnExtraInfo = paquete[16].split(":")[1]
								paquete[16] = paquete[16].split(":")[0]
							}
							if(paquete[16].length > 3 && !paquete[16].includes(":")){ // Elimina las alertas de PDI y Geo nativas
								data_return.save.tipomsnExtraInfo = paquete[16].split(":")[1]
								paquete[16] = paquete[16].split(":")[0]
								data_return.save.protocolotipo = 10
								data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
								break; 
							}
							data_return.save.tipomsn = this.tipoMensaje('A' + paquete[16], 'ST300')
							data_return.save.serialmsn = 
								Math.floor(
									new Date(
										paquete[4].slice(0,4)+'-'+
										paquete[4].slice(4,6)+'-'+
										paquete[4].slice(6,8)+'T'+
										paquete[5]
									)
								/ 1000)
						}else if(msn_i == 'emergency_report'){
							data_return.save.tipomsn = this.tipoMensaje('E' + paquete[16])
							data_return.save.serialmsn = 
								Math.floor(
									new Date(
										paquete[4].slice(0,4)+'-'+
										paquete[4].slice(4,6)+'-'+
										paquete[4].slice(6,8)+'T'+
										paquete[5]
									)
								/ 1000)
						}else if(msn_i == 'event_report'){
							data_return.save.tipomsn = this.tipoMensaje('EV' + paquete[16])
							data_return.save.serialmsn = 
								Math.floor(
									new Date(
										paquete[4].slice(0,4)+'-'+
										paquete[4].slice(4,6)+'-'+
										paquete[4].slice(6,8)+'T'+
										paquete[5]
									)
								/ 1000)
						}else{
							data_return.save.tipomsn = this.tipoMensaje('P' + paquete[16], 'ST600')
							data_return.save.serialmsn = parseFloat(paquete[17])
						}
						var registro = new Date(
							paquete[4].slice(0,4)+'-'+
							paquete[4].slice(4,6)+'-'+
							paquete[4].slice(6,8)+'T'+
							paquete[5]
						)
						data_return.save.registro = registro
						data_return.save.latitud = parseFloat(paquete[7])
						data_return.save.longitud = parseFloat(paquete[8])
						data_return.save.velocidad = parseFloat(paquete[9])
						data_return.save.direccion = parseFloat(paquete[10])
						data_return.save.odometro = parseFloat(paquete[13])
						data_return.save.nosatelites = parseInt(paquete[11])
						data_return.save.lbsBanda = '3G'
						data_return.save.lbsRegistro = registro
						//var ciHex = Buffer.from(paquete[6], 'hex')
						data_return.save.lbsTowers = 
							[
								{
									CI: paquete[6]
								}
							]
						data_return.save.energiaExternaVol = paquete[14]
						if(msn_i == 'emergency_report' || msn_i == 'event_report' || msn_i == 'alert'){
							data_return.save.energiaInternaVol = paquete[18]
						}else{
							data_return.save.energiaInternaVol = paquete[19]
						}
						if(paquete[2] == '07' || 
							 paquete[2] == '08' || 
							 paquete[2] == '10' ||
							 paquete[2] == '11' || 
							 paquete[2] == '12' ||
							 paquete[2] == '14' || 
							 paquete[2] == '16'){
							if(msn_i == 'emergency_report' || msn_i == 'event_report' || msn_i == 'alert'){
								data_return.save.energiaADCVol = parseFloat(paquete[20])
							}else{
								data_return.save.energiaADCVol = parseFloat(paquete[21])
							}
						}
						var digitalIO = paquete[15].split("")
						data_return.save.entradasDigital = this.st300IOStatus(digitalIO, paquete[2], 1)
						data_return.save.salidasDigital = this.st300IOStatus(digitalIO, paquete[2], 0)
						if(msn_i == 'emergency_report' || msn_i == 'event_report' || msn_i == 'alert'){
							data_return.save.realtime = (paquete[19]=='1'?true:false)
						}else{
							data_return.save.realtime = (paquete[20]=='1'?true:false)
						}
						data_return.save.lbsEstado = true
						data_return.save.gnnsEstado = true
						data_return.save.gpsFixed = (paquete[12]=="1"?true:false)
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.firmwareSoftwareVersion = paquete[3]
						data_return.save.hardwareVersion = paquete[2]
						if(msn_i == 'emergency_report' || msn_i == 'event_report' || msn_i == 'alert'){
							data_return.save.horasManejando = parseFloat(paquete[17])
						}else{
							data_return.save.horasManejando = parseFloat(paquete[18])
						}
						
						if(msn_i == 'emergency_report' || msn_i == 'alert'){
							data_return.respuesta = Buffer.from(String("ST300CMD;"+paquete[1]+";02;AckEmerg"), 'hex')
						}else{
							data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
						}
						
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
						data_return = this.st300ConfigAndStatus(paquete[4], paquete, data_return)
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
	st300ModelSelect:function(model){
		switch (model) {
			case "01":{
				return 'ST300SI'
			}
			break
			case "02":{
				return 'ST340'
			}
			break
			case "03":{
				return 'ST340LC(4pin)'
			}
			break
			case "04":{
				return 'ST300H'
			}
			break
			case "05":{
				return 'ST350'
			}
			break
			case "06":{
				return 'ST480'
			}
			break
			case "07":{
				return 'ST300A'
			}
			break
			case "08":{
				return 'ST300R'
			}
			break
			case "09":{
				return 'ST300B'
			}
			break
			case "10":{
				return 'ST300V'
			}
			break
			case "11":{
				return 'ST300C'
			}
			break
			case "12":{
				return 'ST300K'
			}
			break
			case "13":{
				return 'ST300P'
			}
			break
			case "14":{
				return 'ST300F'
			}
			break
			case "16":{
				return 'ST300D'
			}
			break
			case "17":{
				return 'ST340R'
			}
			break
			default:{
				return 'ST300 ('+model+')'
			}
			break
		}
	},
	st300ConfigAndStatus:function(config, paquete, data_return){
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
					data_return.save.entradasDigital = this.st300IOStatus(paquete[16].split(""), null, 1)
					data_return.save.salidasDigital = this.st300IOStatus(paquete[16].split(""), null, 0)
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
	st300ConfigPreset:function(configPresetInv, data_return){
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
						{'lugar':3, 'tipo':configPresetInv[6], 'tiempo':configPresetInv[9]},
						{'lugar':4, 'tipo':configPresetInv[20], 'tiempo':configPresetInv[22]},
						{'lugar':5, 'tipo':configPresetInv[21], 'tiempo':configPresetInv[23]}
					]
					data_return.save.salidasConfig = [
						{'lugar':1, 'tipo':configPresetInv[10], 'GND':(configPresetInv[12]=='0'?true:false), 'pulsoNumero':configPresetInv[14], 'pulsoONDuracion':configPresetInv[15], 'pulsoOFFDuracion':configPresetInv[16]},
						{'lugar':2, 'tipo':configPresetInv[11], 'GND':(configPresetInv[13]=='0'?true:false), 'pulsoNumero':configPresetInv[17], 'pulsoONDuracion':configPresetInv[18], 'pulsoOFFDuracion':configPresetInv[19]},
					]	
					if(configPresetInv[24] != null){
						if(configPresetInv[24] == '0'){
							data_return.save.RSBaud = '(0) Sin Uso'
						}else if(configPresetInv[24] == '1'){
							data_return.save.RSBaud = '(1) 4800bps'
						}else if(configPresetInv[24] == '2'){
							data_return.save.RSBaud = '(2) 9600bps'
						}else if(configPresetInv[24] == '3'){
							data_return.save.RSBaud = '(3) 19200bps'
						}else if(configPresetInv[24] == '4'){
							data_return.save.RSBaud = '(4) 38400bps'
						}else if(configPresetInv[24] == '5'){
							data_return.save.RSBaud = '(5) 115200bps'
						}else if(configPresetInv[24] == '6'){
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
			break
			// case 'ADP':{
			// 	if(configPresetInv[5] != null){
			// 		data_return.save.reporteCRR = (configPresetInv[5]=='1'?true:false)
			// 	}
			// }
			// break
			case 'BAT':{
				if(configPresetInv[2] != null){
					data_return.save.verificadorEnergiaExternaAutoOff = (configPresetInv[1]=='1'?true:false)
					data_return.save.verificadorEnergiaExternaUmbral = configPresetInv[2]
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
			break
			default:{}
		}
		return data_return
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
	// Universal
	universal: function(buffer, unitIDMotor = null) {
		var data_return = {}
		data_return.save = {}
		var subBuffer = Buffer.from(buffer, 'hex')
		var paquete = subBuffer.toString('utf8')
		paquete = paquete.split(";")
		
		var mensaje = paquete[0]
		for(var msn_i in this.suntech.universal.msn){	
			var msn = this.suntech.universal.msn[msn_i]
			if(mensaje == msn.hex){
				data_return.save.unitid = String(paquete[1])
				if(String(paquete[0]) != 'RES'){// CAMBIO
					data_return.save.submodeloGPS = this.universalModelSelect(paquete[3])// CAMBIO
				}
				data_return.save.marcaGPS = 'suntech'
				data_return.save.modeloGPS = 'Universal'
				data_return.save.identificadorGPS = 'suntech-universal'
				data_return.save.motorcom = 0
				data_return.save.crudo = buffer.toString('hex')
				data_return.save.protocolomsn = msn_i
				data_return.save.protocolotipo = msn.protocolotipo
				// Variables de ayuda
				var nowDate = Date.now()
				var todayDate = new Date(nowDate)
				// Separador de mensaje
				switch (msn_i) {
					case 'status_report':
					case 'alert':{
						if(msn_i == 'alert'){
							if(paquete[22] != ''){
								data_return.save.tipomsnExtraInfo = paquete[22]
							}
							if(paquete[23] != ''){
								data_return.save.tipomsnExtraData = paquete[22]
							}
							data_return.save.tipomsn = this.tipoMensaje('A' + paquete[21]) 
							//data_return.save.tipomsn = parseFloat(paquete[21])
							data_return.save.serialmsn = 
								Math.floor(
									new Date(
										paquete[6].slice(0,4)+'-'+
										paquete[6].slice(4,6)+'-'+
										paquete[6].slice(6,8)+'T'+
										paquete[7]
									)
								/ 1000)
						}else{
							//data_return.save.tipomsn = this.tipoMensaje('P' + paquete[22])
							data_return.save.tipomsn = this.tipoMensaje('P' + paquete[21]) 
							//data_return.save.tipomsn = parseFloat(paquete[22])
							data_return.save.tipomsnExtraInfo = parseInt(paquete[21])
							data_return.save.serialmsn = parseFloat(paquete[23])
						}
						var registro = new Date(
							paquete[6].slice(0,4)+'-'+
							paquete[6].slice(4,6)+'-'+
							paquete[6].slice(6,8)+'T'+
							paquete[7]
						)
						
						data_return.save.registro = registro
						data_return.save.latitud = parseFloat(paquete[13])
						data_return.save.longitud = parseFloat(paquete[14])
						data_return.save.velocidad = parseFloat(paquete[15])
						data_return.save.direccion = parseFloat(paquete[16])
						data_return.save.senal = parseInt(paquete[12])
						data_return.save.nosatelites = parseInt(paquete[17])
						
						if(String(paquete[8]).includes("0000")){
							data_return.save.lbsBanda = '2G'
						}else{
							data_return.save.lbsBanda = '3G'
						}
						try{
							data_return.save.lbsRegistro = registro
							data_return.save.lbsMCC = parseInt(paquete[9])
							data_return.save.lbsMNC = parseInt(paquete[10])
							data_return.save.lbsTowers = 
								[
									{
										LAC: String(paquete[11]),
										CI: String(paquete[8]),
										LVL:parseFloat(paquete[12]),
									}
								]
						}catch(error){
							console.log('Error el LBS', error)
						}
						
						var digitalI = paquete[19].split("")
						var digitalO = paquete[20].split("")
						data_return.save.entradasDigital = this.universalIOStatus(digitalI, paquete[3], 1)
						data_return.save.salidasDigital = this.universalIOStatus(digitalO, paquete[3], 0)
						data_return.save.realtime = (paquete[5]=='1'?true:false)
						data_return.save.lbsEstado = true
						data_return.save.gnnsEstado = true
						data_return.save.gpsFixed = (paquete[18]=="1"?true:false)
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.firmwareSoftwareVersion = paquete[4]
						data_return.save.camposExtrasAsignables = []
						for(var iextra=24;iextra<paquete.length;iextra++){
							data_return.save.camposExtrasAsignables.push(paquete[iextra])
						}
						if(paquete[0] == 'AALT' || paquete[0] == 'ASTT'){ // Pendiente hacer el ACK
							// var cuentaPack = subBuffer.toString('utf8')
							// cuentaPack += "\r"
							data_return.respuesta = Buffer.from(String("ACK;"+paquete[1]+";AB"), 'hex')
						}else{
							data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
						}
					}
					break
					case 'travel_event_report':{
						data_return.save.tipomsn = this.tipoMensaje(59)
						data_return.save.serialmsn = 
						Math.floor(
							new Date(
								paquete[6].slice(0,4)+'-'+
								paquete[6].slice(4,6)+'-'+
								paquete[6].slice(6,8)+'T'+
								paquete[7]
							)
						/ 1000)
						var registro = new Date(
							paquete[6].slice(0,4)+'-'+
							paquete[6].slice(4,6)+'-'+
							paquete[6].slice(6,8)+'T'+
							paquete[7]
						)
						
						data_return.save.registro = registro
						data_return.save.realtime = (paquete[5]=='1'?true:false)
						
						// 8
						data_return.save.travelReportInfo = {}
						data_return.save.travelReportInfo.latitudIn = parseFloat(paquete[8])
						data_return.save.travelReportInfo.longitudIn = parseFloat(paquete[9])
						data_return.save.travelReportInfo.latitudOut = parseFloat(paquete[10])
						data_return.save.travelReportInfo.longitudOut = parseFloat(paquete[11])
						data_return.save.travelReportInfo.driverID = paquete[12]
						data_return.save.travelReportInfo.distanciaRec = parseFloat(paquete[13])
						data_return.save.travelReportInfo.tiempoViaje = parseFloat(paquete[14])
						data_return.save.travelReportInfo.idleTiempo = parseFloat(paquete[14])
						data_return.save.travelReportInfo.idleEventos = parseFloat(paquete[14])
						data_return.save.travelReportInfo.velocidadMaxTiempoAc = parseFloat(paquete[16])
						data_return.save.travelReportInfo.velocidadEventos = parseFloat(paquete[16])
						data_return.save.travelReportInfo.velocidadMax = parseFloat(paquete[15])
						data_return.save.travelReportInfo.velocidadMed = parseFloat(paquete[14])
						data_return.save.travelReportInfo.odometroViaje = parseFloat(paquete[17])
						data_return.save.travelReportDatos = paquete[22].split(',')
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.firmwareSoftwareVersion = paquete[4]
						
						
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
									paquete[6].slice(0,4)+'-'+
									paquete[6].slice(4,6)+'-'+
									paquete[6].slice(6,8)+'T'+
									paquete[7]
								)
							/ 1000)
						var registro = new Date(
							paquete[6].slice(0,4)+'-'+
							paquete[6].slice(4,6)+'-'+
							paquete[6].slice(6,8)+'T'+
							paquete[7]
						)
						
						data_return.save.registro = registro
						data_return.save.latitud = parseFloat(paquete[13])
						data_return.save.longitud = parseFloat(paquete[14])
						data_return.save.velocidad = parseFloat(paquete[15])
						data_return.save.direccion = parseFloat(paquete[16])
						data_return.save.senal = parseInt(paquete[12])
						data_return.save.nosatelites = parseInt(paquete[17])
						
						if(String(paquete[8]).includes("0000")){
							data_return.save.lbsBanda = '2G'
						}else{
							data_return.save.lbsBanda = '3G'
						}
						try{
							data_return.save.lbsRegistro = registro
							data_return.save.lbsMCC = parseInt(paquete[9])
							data_return.save.lbsMNC = parseInt(paquete[10])
							data_return.save.lbsTowers = 
								[
									{
										LAC: String(paquete[11]),
										CI: String(paquete[8]),
										LVL:parseFloat(paquete[12]),
									}
								]
						}catch(error){
							console.log('Error el LBS', error)
						}
						
						var digitalI = paquete[19].split("")
						var digitalO = paquete[20].split("")
						data_return.save.entradasDigital = this.universalIOStatus(digitalI, paquete[3], 1)
						data_return.save.salidasDigital = this.universalIOStatus(digitalO, paquete[3], 0)
						data_return.save.realtime = (paquete[5]=='1'?true:false)
						data_return.save.lbsEstado = true
						data_return.save.gnnsEstado = true
						data_return.save.gpsFixed = (paquete[18]=="1"?true:false)
						data_return.save.modoReporte = data_return.save.tipomsn
						data_return.save.firmwareSoftwareVersion = paquete[4]
						data_return.save.RSMensaje = paquete[22]
						data_return.save.RSCodeMensaje = "string"
						data_return.save.RSRegistro = registro
						
						if(paquete[0] == 'AALT' || paquete[0] == 'ASTT'){ // Pendiente hacer el ACK
							// var cuentaPack = subBuffer.toString('utf8')
							// cuentaPack += "\r"
							data_return.respuesta = Buffer.from(String("ACK;"+paquete[1]+";AB"), 'hex')
						}else{
							data_return.respuesta = Buffer.from(String(paquete[0]+";"+paquete[1]), 'hex')
						}
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
						data_return = this.universalConfigAndStatus(paquete[2]+paquete[3], paquete, data_return)
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
	universalModelSelect:function(model){
		//Model Identification Table
		switch (model) {
			case "36":{
				return 'ST4300'
			}
			break
			case "46":{
				return 'ST4500'
			}
			break
			case "47":{
				return 'ST4340'
			}
			break
			case "49":{
				return 'ST4340R'
			}
			break
			case "52":{
				return 'ST4340LC'
			}
			break
			default:{
				return 'Universal ('+model+')'
			}
			break
		}
	},
	universalConfigAndStatus:function(config, paquete, data_return){
		switch (config) {
			case '0302':{
				data_return.save.protocolotipo = 3
				data_return.save.resetFactoryRegistro = data_return.save.registro
			}
			break
			case '0305':{
				data_return.save.protocolotipo = 3
				if(paquete[5] != null){
					var paqueteUn = paquete.join(';')
					paqueteUn = paqueteUn.slice(21)
					var configPresets = paqueteUn.match(/([0-9]{2}\;[^,]{0,})/g)
					data_return.save.entradasConfig = []
					data_return.save.salidasConfig = []
					for(configPreset of configPresets){
						data_return = this.universalConfigPreset(configPreset, data_return)
					}
				}
			}
			break
			case '0401':// Enable 1
			case '0403':// Enable 2
			case '0409':// Enable 3
			case '0413':// Enable 4
			case '0402':// Disable 1
			case '0404':// Disable 2
			case '0410':// Disable 3
			case '0414':{// Disable 4
				var tipoMensaje = 0
				if(config == '0402' || config == '0404' || config == '0410' || config == '0414'){
					if(config == '0402')
						tipoMensaje = tipoMensaje + 10
					if(config == '0404')
						tipoMensaje = tipoMensaje + 11
					if(config == '0410')
						tipoMensaje = tipoMensaje + 12
					if(config == '0414')
						tipoMensaje = tipoMensaje + 13
				}else{
					if(config == '0401')
						tipoMensaje = tipoMensaje
					if(config == '0403')
						tipoMensaje = tipoMensaje + 1
					if(config == '0409')
						tipoMensaje = tipoMensaje + 2
					if(config == '0413')
						tipoMensaje = tipoMensaje + 3
				}
				
				data_return.save.tipomsnExtraInfo = config
				if(paquete[4] == null || paquete[4] == "Unknown CMD"){
					data_return.save.protocolotipo = 2
				}else{
					data_return.save.protocolotipo = 1
					data_return.save.serialmsn = 
					Math.floor(
						new Date(
							paquete[4]+'-'+
							paquete[5]+'-'+
							paquete[6]+'T'+
							paquete[7]
						)
					/ 1000)
					data_return.save.registro = new Date(
						paquete[4]+'-'+
						paquete[5]+'-'+
						paquete[6]+'T'+
						paquete[7]
					)
					data_return.save.CMDRegistro = data_return.save.registro
					data_return.save.latitud = parseFloat(paquete[9])
					data_return.save.longitud = parseFloat(paquete[10])
					data_return.save.velocidad = parseFloat(paquete[11])
					data_return.save.direccion = parseFloat(paquete[12])
					data_return.save.nosatelites = parseInt(paquete[13])
					data_return.save.gpsFixed = (paquete[14]=="1"?true:false)
					data_return.save.odometro = parseFloat(paquete[15])
					data_return.save.energiaExternaVol = paquete[16]
					data_return.save.entradasDigital = this.universalIOStatus(paquete[17].split(""), null, 1)
					data_return.save.salidasDigital = this.universalIOStatus(paquete[18].split(""), null, 0)
				}
			}
			break
			case '0102':{
				data_return.save.protocolotipo = 3
				if(paquete[5] != null)
					data_return.save.imsi = paquete[4]
			}
			break
			case '0103':{
				data_return.save.protocolotipo = 3
				if(paquete[5] != null)
					data_return.save.iccid = paquete[4]
			}
			break
			case '0510':{
				data_return.save.protocolotipo = 3
				if(paquete[5] != null)
					data_return.save.volumenBocina = paquete[4]
			}
			break
			case '0303':{
				data_return.save.protocolotipo = 3
				data_return.save.reinicioRegistro = data_return.save.registro
			}
			break
			default:{
				data_return.save.protocolotipo = 2
			}
		}
		return data_return
	},
	universalConfigPreset:function(configPresetInv, data_return){
		var indexConfig = configPresetInv.slice(0,2)
		var configItemIn = configPresetInv.match(/([0-9]{2}\#[^;]{0,})/g)
		for(var configIn of configItemIn){
			var configInSeparate = configIn.split('#')
			// NTW
			// NTW->1000: Authentication
			if(parseInt(indexConfig+configInSeparate[0]) == 1000){
				if(configInSeparate[1]=='00'){
					data_return.save.authGPRS = '(0) PAP'
				}else if(configInSeparate[1]=='01'){
					data_return.save.authGPRS = '(1) CHAP'
				}else if(configInSeparate[1]=='02'){
					data_return.save.authGPRS = '(2) Automatica'
				}else if(configInSeparate[1]=='03'){
					data_return.save.authGPRS = '(3) None'
				}  
			}
			// NTW->1001: APN
			if(parseInt(indexConfig+configInSeparate[0]) == 1001 && configInSeparate[1] != '')
				data_return.save.apn = configInSeparate[1]
			// NTW->1002: User ID
			if(parseInt(indexConfig+configInSeparate[0]) == 1002 && configInSeparate[1] != '')
				data_return.save.apnUser = configInSeparate[1]
			// NTW->1003: User Password	
			if(parseInt(indexConfig+configInSeparate[0]) == 1003 && configInSeparate[1] != '')
				data_return.save.apnPass = configInSeparate[1]
			// NTW->1004: PIN Number	
			if(parseInt(indexConfig+configInSeparate[0]) == 1004 && configInSeparate[1] != '')
				data_return.save.simPIN = configInSeparate[1]
			// NTW->1005: Server IP
			if(parseInt(indexConfig+configInSeparate[0]) == 1005 && configInSeparate[1] != '')
				data_return.save.serverIP = configInSeparate[1]
			// NTW->1006: Server Port
			if(parseInt(indexConfig+configInSeparate[0]) == 1006 && configInSeparate[1] != '')
				data_return.save.serverPort = configInSeparate[1]
			// NTW->1007: Server Type
			if(parseInt(indexConfig+configInSeparate[0]) == 1007 && configInSeparate[1] != '')
				data_return.save.serverType = (configInSeparate[1]=='00'?'(0) TCP':'(1) UDP')
			// NTW->1008: Backup Server IP
			if(parseInt(indexConfig+configInSeparate[0]) == 1008 && configInSeparate[1] != '')
				data_return.save.serverIPBackup = configInSeparate[1]
			// NTW->1009: Backup Server Port
			if(parseInt(indexConfig+configInSeparate[0]) == 1009 && configInSeparate[1] != '')
				data_return.save.serverPortBackup = configInSeparate[1]
			// NTW->1010: Backup Server Type
			if(parseInt(indexConfig+configInSeparate[0]) == 1010 && configInSeparate[1] != '')
				data_return.save.serverTypeBackup = (configInSeparate[1]=='00'?'(0) TCP':'(1) UDP')
			// NTW->1013: Connection Type
			if(parseInt(indexConfig+configInSeparate[0]) == 1013 && configInSeparate[1] != '')
				data_return.save.conectPersistente = (configInSeparate[1]=='00'?true:false)
			// NTW->1060: Keep Alive Interval
			if(parseInt(indexConfig+configInSeparate[0]) == 1060 && configInSeparate[1] != '')
				data_return.save.intervaloReqHeartbeat = configInSeparate[1]
			// NTW->1061: Jamming Detection
			if(parseInt(indexConfig+configInSeparate[0]) == 1061 && configInSeparate[1] != '')
				data_return.save.jammerTipo = configInSeparate[1]
			// NTW->1062: Check distance for jamming[meter]
			if(parseInt(indexConfig+configInSeparate[0]) == 1062 && configInSeparate[1] != '')
				data_return.save.jammerConfigDistancia = configInSeparate[1]
			// NTW->1063: Check no GPS duration for jamming[sec.]
			if(parseInt(indexConfig+configInSeparate[0]) == 1063 && configInSeparate[1] != '')
				data_return.save.jammerConfigTiempo = configInSeparate[1]
			// NTW->1059: GPS Antenna Check
			if(parseInt(indexConfig+configInSeparate[0]) == 1059 && configInSeparate[1] != '')
				data_return.save.verificadorAntenaGPS = (configInSeparate[1]=='01'?true:false)
			// PRF->1621: Speed Threshold
			if(parseInt(indexConfig+configInSeparate[0]) == 1621 && configInSeparate[1] != '')
				data_return.save.limiteVelocidadAlt = configInSeparate[1]
			// INP->1720-1721: Input 1 Type
			if(parseInt(indexConfig+configInSeparate[0]) == 1720 && configInSeparate[1] != '')
				data_return.save.entradasConfig.push({'lugar':1, 'tipo':configInSeparate[1], 'tiempo':null})
			if(parseInt(indexConfig+configInSeparate[0]) == 1721 && configInSeparate[1] != ''){
				if(data_return.save.entradasConfig[0] != null)
					data_return.save.entradasConfig[0].tiempo = configInSeparate[1]
			}
			// INP->1722-1723: Input 2 Type
			if(parseInt(indexConfig+configInSeparate[0]) == 1722 && configInSeparate[1] != '')
				data_return.save.entradasConfig.push({'lugar':2, 'tipo':configInSeparate[1], 'tiempo':null})
			if(parseInt(indexConfig+configInSeparate[0]) == 1723 && configInSeparate[1] != ''){
				if(data_return.save.entradasConfig[1] != null)
					data_return.save.entradasConfig[1].tiempo = configInSeparate[1]
			}
			// INP->1724-1725: Input 3 Type
			if(parseInt(indexConfig+configInSeparate[0]) == 1724 && configInSeparate[1] != '')
				data_return.save.entradasConfig.push({'lugar':3, 'tipo':configInSeparate[1], 'tiempo':null})
			if(parseInt(indexConfig+configInSeparate[0]) == 1725 && configInSeparate[1] != ''){
				if(data_return.save.entradasConfig[2] != null)
					data_return.save.entradasConfig[2].tiempo = configInSeparate[1]
			}
			// INP->1726-1727: Input 4 Type	
			if(parseInt(indexConfig+configInSeparate[0]) == 1726 && configInSeparate[1] != '')
				data_return.save.entradasConfig.push({'lugar':4, 'tipo':configInSeparate[1], 'tiempo':null})
			if(parseInt(indexConfig+configInSeparate[0]) == 1727 && configInSeparate[1] != ''){
				if(data_return.save.entradasConfig[3] != null)
					data_return.save.entradasConfig[3].tiempo = configInSeparate[1]
			}
			// OUT->1760-1761, 1775-1777: Output 1 Type
			if(parseInt(indexConfig+configInSeparate[0]) == 1760 && configInSeparate[1] != '')
				data_return.save.salidasConfig.push({'lugar':1, 'tipo':configInSeparate[1], 'GND':false, 'pulsoNumero':0, 'pulsoONDuracion':0, 'pulsoOFFDuracion':0})
			if(parseInt(indexConfig+configInSeparate[0]) == 1761 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[0] != null)
					data_return.save.salidasConfig[0].GND = (configInSeparate[1]=='00'?true:false)
			}
			if(parseInt(indexConfig+configInSeparate[0]) == 1775 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[0] != null)
					data_return.save.salidasConfig[0].pulsoNumero = configInSeparate[1]
			}
			if(parseInt(indexConfig+configInSeparate[0]) == 1776 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[0] != null)
					data_return.save.salidasConfig[0].pulsoONDuracion = configInSeparate[1]
			}
			if(parseInt(indexConfig+configInSeparate[0]) == 1777 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[0] != null)
					data_return.save.salidasConfig[0].pulsoOFFDuracion = configInSeparate[1]
			}
			// OUT->1762-1763, 1780-1782: Output 2 Type
			if(parseInt(indexConfig+configInSeparate[0]) == 1762 && configInSeparate[1] != '')
				data_return.save.salidasConfig.push({'lugar':2, 'tipo':configInSeparate[1], 'GND':false, 'pulsoNumero':0, 'pulsoONDuracion':0, 'pulsoOFFDuracion':0})
			if(parseInt(indexConfig+configInSeparate[0]) == 1763 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[1] != null)
					data_return.save.salidasConfig[1].GND = (configInSeparate[1]=='00'?true:false)
			}
			if(parseInt(indexConfig+configInSeparate[0]) == 1780 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[1] != null)
					data_return.save.salidasConfig[1].pulsoNumero = configInSeparate[1]
			}
			if(parseInt(indexConfig+configInSeparate[0]) == 1781 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[1] != null)
					data_return.save.salidasConfig[1].pulsoONDuracion = configInSeparate[1]
			}
			if(parseInt(indexConfig+configInSeparate[0]) == 1782 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[1] != null)
					data_return.save.salidasConfig[1].pulsoOFFDuracion = configInSeparate[1]
			}
			// OUT->1764-1765, 1783-1785: Output 3 Type
			if(parseInt(indexConfig+configInSeparate[0]) == 1764 && configInSeparate[1] != '')
				data_return.save.salidasConfig.push({'lugar':3, 'tipo':configInSeparate[1], 'GND':false, 'pulsoNumero':0, 'pulsoONDuracion':0, 'pulsoOFFDuracion':0})
			if(parseInt(indexConfig+configInSeparate[0]) == 1765 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[2] != null)
					data_return.save.salidasConfig[2].GND = (configInSeparate[1]=='00'?true:false)
			}
			if(parseInt(indexConfig+configInSeparate[0]) == 1783 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[2] != null)
					data_return.save.salidasConfig[2].pulsoNumero = configInSeparate[1]
			}
			if(parseInt(indexConfig+configInSeparate[0]) == 1784 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[2] != null)
					data_return.save.salidasConfig[2].pulsoONDuracion = configInSeparate[1]
			}
			if(parseInt(indexConfig+configInSeparate[0]) == 1785 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[2] != null)
					data_return.save.salidasConfig[2].pulsoOFFDuracion = configInSeparate[1]
			}
			// OUT->1766-1767: Output 4 Type
			if(parseInt(indexConfig+configInSeparate[0]) == 1766 && configInSeparate[1] != '')
				data_return.save.salidasConfig.push({'lugar':4, 'tipo':configInSeparate[1], 'GND':false})
			if(parseInt(indexConfig+configInSeparate[0]) == 1767 && configInSeparate[1] != ''){
				if(data_return.save.salidasConfig[3] != null)
					data_return.save.salidasConfig[3].GND = (configInSeparate[1]=='00'?true:false)
			}	
			// MVB->1933: Decide Vehicle Battery 12V or 24V
			if(parseInt(indexConfig+configInSeparate[0]) == 1933 && configInSeparate[1] != '')
				data_return.save.voltajeConfigurado = configInSeparate[1]
			// MVB->1934: Shutdown Threshold 12V Vehicle Battery
			if(parseInt(indexConfig+configInSeparate[0]) == 1934 && configInSeparate[1] != '')
				data_return.save.voltajeOperacionProtecion12v = configInSeparate[1]
			// MVB->1935: Shutdown Threshold 24V Vehicle Battery
			if(parseInt(indexConfig+configInSeparate[0]) == 1935 && configInSeparate[1] != '')
				data_return.save.voltajeOperacionProtecion24v = configInSeparate[1]
			// MVB->1951: Baud Rate
			if(parseInt(indexConfig+configInSeparate[0]) == 1951 && configInSeparate[1] != ''){
				if(configInSeparate[1] == '00'){
					data_return.save.RSBaud = '(0) Sin Uso'
				}else if(configInSeparate[1] == '01'){
					data_return.save.RSBaud = '(1) 4800bps'
				}else if(configInSeparate[1] == '02'){
					data_return.save.RSBaud = '(2) 9600bps'
				}else if(configInSeparate[1] == '03'){
					data_return.save.RSBaud = '(3) 19200bps'
				}else if(configInSeparate[1] == '04'){
					data_return.save.RSBaud = '(4) 38400bps'
				}else if(configInSeparate[1] == '05'){
					data_return.save.RSBaud = '(5) 115200bps'
				}else if(configInSeparate[1] == '06'){
					data_return.save.RSBaud = '(6) 2400bps'
				}
			}
			
		}
		return data_return
	},
	universalIOStatus:function(digitalIO, modelo, IO){
		var entradasDigital, salidasDigital
		if(IO == 1){
			entradasDigital =
			[
				(digitalIO[7]=='0'?false:true),
				(digitalIO[6]=='0'?false:true),
				(digitalIO[5]=='0'?false:true),
				(digitalIO[4]=='0'?false:true),
				(digitalIO[3]=='0'?false:true),
				(digitalIO[2]=='0'?false:true),
				(digitalIO[1]=='0'?false:true),
				(digitalIO[0]=='0'?false:true)
			]
			return entradasDigital
		}else{
			salidasDigital =
			[
				(digitalIO[7]=='0'?false:true),
				(digitalIO[6]=='0'?false:true),
				(digitalIO[5]=='0'?false:true),
				(digitalIO[4]=='0'?false:true),
				(digitalIO[3]=='0'?false:true),
				(digitalIO[2]=='0'?false:true),
				(digitalIO[1]=='0'?false:true),
				(digitalIO[0]=='0'?false:true)
			]
			return salidasDigital
		}
	},
	// Herramientas
	hex2bin:function (hex, pad=8){
		return (parseInt(hex, 16).toString(2)).padStart(pad, '0');
	}

}