// Herramientas de apoyo para servicios de motor central y comunicación
// Navigation
// Josafat Vargas O.
var extend = require('extend')
var moment = require('moment')
module.exports = 
	{
		toolsConfig:
			{
				lvl_print_log:0 // Desactivado
				//lvl_print_log:1 // + errores
				//lvl_print_log:2 // + advertencias
				//lvl_print_log:3 // + log & info
			},
		ResetServicio: function(motivo){
			this.Log('Reset de servicio motivo:', motivo, 'error')
			process.exit(1)
		},
		Log: function (titulo, contenido = null, tipo = 'log')
			{
				var today = new Date()
				var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
				var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
				var dateTime = date+' '+time
				if(this.toolsConfig.lvl_print_log == 0)
					return
				switch (tipo) {
					case 'log':{
						if(this.toolsConfig.lvl_print_log > 2)
							console.log(dateTime+' / '+titulo, (contenido!=null?contenido:'.'))
					}
					break;
					case 'info':{
						if(this.toolsConfig.lvl_print_log > 2)
							console.info(dateTime+' / '+titulo, (contenido!=null?contenido:'.'))
					}
					break;
					case 'alert':{
						if(this.toolsConfig.lvl_print_log > 1)
							console.warn(dateTime+' / '+titulo, (contenido!=null?contenido:'.'))
					}
					break;
					case 'error':{
						if(this.toolsConfig.lvl_print_log > 0)
							console.error(dateTime+' / '+titulo, (contenido!=null?contenido:'.'))
					}
					break;
					case 'time':{
						if(this.toolsConfig.lvl_print_log > 0)
							console.time(titulo)
					}
					break;
					case 'end':{
						if(this.toolsConfig.lvl_print_log > 0)
							console.timeEnd(titulo)
					}
					break;
					default:{
						if(this.toolsConfig.lvl_print_log > 2)
							console.log(dateTime+' / '+titulo, (contenido!=null?contenido:'.'))
					}
				}
			},
		LogError: function (titulo, contenido = null)
			{
				this.Log(titulo, contenido, 'error')
			},
		LogInfo: function (titulo, contenido = null)
			{
				this.Log(titulo, contenido, 'info')
			},
		LogAlert: function (titulo, contenido = null)
			{
				this.Log(titulo, contenido, 'alert')
			},
		resetFecha: function(fecha)
			{
				//console.log('---------------------------')
				//console.log('Reset fecha org:', fecha)
				if(fecha == null){
					//console.log('Reset fecha NA:', new Date(moment().utc()))
					return new Date(moment().utc())
				}
				var fechaRegistro = moment(fecha)
				var fechaMax = moment().utc().add(10, 'minutes')
				var fechaMin = moment().utc().subtract(1, 'years')
				if(fechaMax < fechaRegistro){
					//console.log('Reset fecha A:', new Date(moment().utc()))
					return new Date(moment().utc())
				}
				if(fechaMin > fechaRegistro){
					//console.log('Reset fecha B:', new Date(moment().utc()))
					return new Date(moment().utc())
				}
				//console.log('Reset fecha C:', fecha)
				return fecha
			},
		organizarInformacion: function(tipo, procesar, unidad = null)
			{
				var organizado = {}
				// TIPOS
				// 0 = nuevo
				// 1 = actualización
				
				if(tipo == 0){
					var nowDate = Date.now()
					var todayDate = new Date(nowDate)
					var nuevo = 
						{
							//cliente:0,
							unidad:
								{
									tipo:0,
									eco:procesar.unitid,
									altaRegistro:todayDate
								},
							control:
								{
									activo:false,
									sms:false
								},
							notificacionesSMS:
								{
									panico:false,
									paromotor:false,
									jammer:false,
									bateria:false,
									pdi:false,
									geocercas:false,
									pdip:false,
									ignicion:false
								},
							notificacionesEMAIL:
								{
									panico:false,
									paromotor:false,
									jammer:false,
									bateria:false,
									pdi:false,
									geocercas:false,
									pdip:false,
									ignicion:false
								},
							rastreo:
								{
									ignicion: false
								}
						}
					extend(true, organizado, organizado, nuevo)	
				}
				
				
				/* GPS */
				var gps = {}
				// Serial (adicional)
				// protocolomsn
				this.controlExisteFusion(gps, procesar, 'protocolomsn')
				// serialmsn.[protocolo]
				if(gps.protocolomsn != '' && gps.protocolomsn != null)
					this.controlExisteFusion(gps, procesar, "serialmsn."+gps.protocolomsn+".serialmsn")
				// registro
				this.controlExisteFusion(gps, procesar, "registro")
				// registroUbicacion
				this.controlExisteFusion(gps, procesar, "registroUbicacion")
				// unitid
				this.controlExisteFusion(gps, procesar, "unitid")
				// imei
				this.controlExisteFusion(gps, procesar, "imei")
				// marcaGPS
				this.controlExisteFusion(gps, procesar, "marcaGPS")
				// modeloGPS
				this.controlExisteFusion(gps, procesar, "modeloGPS")
				// submodeloGPS
				this.controlExisteFusion(gps, procesar, "submodeloGPS")
				// identificadorGPS
				this.controlExisteFusion(gps, procesar, "identificadorGPS")
				// motorcom
				this.controlExisteFusion(gps, procesar, "motorcom")
				// crudo
				this.controlExisteFusion(gps, procesar, "crudo")
				// tipomsn
				this.controlExisteFusion(gps, procesar, "tipomsn")
				// tipomsnExtraInfo
				this.controlExisteFusion(gps, procesar, "tipomsnExtraInfo")
				// tipomsnExtraData
				this.controlExisteFusion(gps, procesar, "tipomsnExtraData")
				// camposExtrasAsignables
				this.controlExisteFusion(gps, procesar, "camposExtrasAsignables")
				if(unidad != null){// Configurando Campos extra asignables
					if(unidad.camposExtrasAsignablesOrden != null && gps.camposExtrasAsignables != null){
						for(var icampo in unidad.camposExtrasAsignablesOrden){
							if(unidad.camposExtrasAsignablesOrden[icampo] != null){
								var campo = unidad.camposExtrasAsignablesOrden[icampo]
								if(gps.camposExtrasAsignables[icampo] != null){
									procesar[campo] = gps.camposExtrasAsignables[icampo]
								}
							}
						}
						if(gps.camposExtrasAsignables != null)
							delete gps.camposExtrasAsignables
					}
				}
				
				// protocolotipo
				this.controlExisteFusion(gps, procesar, "protocolotipo")
				// Guardar
				if(Object.keys(gps).length > 0)
					extend(true, organizado, organizado, {gps:gps})
				
				/* Posición y telemetria */
				var rastreo = {}
				// latitud
				this.controlExisteFusion(rastreo, procesar, "latitud")
				// longitud
				this.controlExisteFusion(rastreo, procesar, "longitud")
				// altitud
				this.controlExisteFusion(rastreo, procesar, "altitud")
				// velocidad
				this.controlExisteFusion(rastreo, procesar, "velocidad")
				// direccion
				this.controlExisteFusion(rastreo, procesar, "direccion")
				// senal
				this.controlExisteFusion(rastreo, procesar, "senal")
				// nosatelites
				this.controlExisteFusion(rastreo, procesar, "nosatelites")
				// odometro
				this.controlExisteFusion(rastreo, procesar, "odometro")
				// ignicion
				//this.controlExisteFusion(rastreo, procesar, "ignicion")
				// Guardar
				//if(Object.keys(rastreo).length > 0)
					//extend(true, organizado, organizado, {rastreo:rastreo}) GUARDA MAS ABAJO EN IO DIGITAL
				
				/* LBS */
				var lbs = {}
				// lbsBanda
				this.controlExisteFusion(lbs, procesar, "lbsBanda")
				// lbsRegistro
				this.controlExisteFusion(lbs, procesar, "lbsRegistro")
				// lbsMCC
				this.controlExisteFusion(lbs, procesar, "lbsMCC")
				// lbsMNC
				this.controlExisteFusion(lbs, procesar, "lbsMNC")
				// lbsTowers.[0~N]
				this.controlExisteFusion(lbs, procesar, "lbsTowers")
				// Guardar
				if(Object.keys(lbs).length > 0)
					extend(true, organizado, organizado, {lbs:lbs})
				
				/* Energia */
				var energia = {}
				// energiaExternaVol
				this.controlExisteFusion(energia, procesar, "energiaExternaVol")
				// energiaExternaLVL
				this.controlExisteFusion(energia, procesar, "energiaExternaLVL")
				// energiaExternaAct
				this.controlExisteFusion(energia, procesar, "energiaExternaAct")
				// energiaInternaVol
				this.controlExisteFusion(energia, procesar, "energiaInternaVol")
				// energiaInternaLVL
				this.controlExisteFusion(energia, procesar, "energiaInternaLVL")
				// frontLightSensorVoltaje
				this.controlExisteFusion(energia, procesar, "frontLightSensorVoltaje")
				// cargaSolar
				this.controlExisteFusion(energia, procesar, "cargaSolar")
				// solarPanelVoltaje
				this.controlExisteFusion(energia, procesar, "solarPanelVoltaje")
				// energiaADCVol
				this.controlExisteFusion(energia, procesar, "energiaADCVol")
				// Guardar
				if(Object.keys(energia).length > 0)
					extend(true, organizado, organizado, {energia:energia})
				
				/* I/O Digital */
				var iodigital = {}
				// entradasDigital.[0~N]
				this.controlExisteFusion(iodigital, procesar, "entradasDigital")
				// salidasDigital.[0~N]
				this.controlExisteFusion(iodigital, procesar, "salidasDigital")
				if(tipo == 0){
					if(Object.keys(iodigital).length > 0){
						if(iodigital.entradasDigital != null && iodigital.entradasDigital.length > 0){
							var entradasDigital = {}
							for(var i in iodigital.entradasDigital){
								var ioproce = iodigital.entradasDigital[i]
								var ionuevo = {
									estado:ioproce,
									tipo:0
								}
								if(i == 0)
									ionuevo.tipo = 1
								entradasDigital[i] = ionuevo
							}
							iodigital.entradasDigital = entradasDigital
						}
						if(iodigital.salidasDigital != null && iodigital.salidasDigital.length > 0){
							var salidasDigital = {}
							for(var i in iodigital.salidasDigital){
								var ioproce = iodigital.salidasDigital[i]
								var ionuevo = {
									estado:ioproce,
									tipo:0
								}
								if(i == 0)
									ionuevo.tipo = 1
								salidasDigital[i] = ionuevo
							}
							iodigital.salidasDigital = salidasDigital
						}
					}
				}else if(tipo == 1){
					if(Object.keys(iodigital).length > 0){
						if(iodigital.entradasDigital != null && iodigital.entradasDigital.length > 0){
							if(unidad.iodigital != null && unidad.iodigital.entradasDigital != null){
								if(iodigital.entradasDigital.length == Object.keys(unidad.iodigital.entradasDigital).length){
									var entradasDigital = {}
									for(var i in iodigital.entradasDigital){
										var ioproce = iodigital.entradasDigital[i]
										var ioantes = unidad.iodigital.entradasDigital[i]
										ioantes.estado = ioproce
										entradasDigital[i] = ioantes
									}
									iodigital.entradasDigital = entradasDigital
										
								}else{
									var entradasDigital = {}
									for(var i in iodigital.entradasDigital){
										var ioproce = iodigital.entradasDigital[i]
										var ionuevo = {
											estado:ioproce,
											tipo:0
										}
										if(i == 0)
											ionuevo.tipo = 1
										entradasDigital[i] = ionuevo
									}
									iodigital.entradasDigital = entradasDigital
								}
							}else{
								var entradasDigital = {}
								for(var i in iodigital.entradasDigital){
									var ioproce = iodigital.entradasDigital[i]
									var ionuevo = {
										estado:ioproce,
										tipo:0
									}
									if(i == 0)
										ionuevo.tipo = 1
									entradasDigital[i] = ionuevo
								}
								iodigital.entradasDigital = entradasDigital
							}
						}
						if(iodigital.salidasDigital != null && iodigital.salidasDigital.length > 0){
							if(unidad.iodigital != null && unidad.iodigital.entradasDigital != null){
								if(iodigital.salidasDigital.length == Object.keys(unidad.iodigital.salidasDigital).length){
									var salidasDigital = {}
									for(var i in iodigital.salidasDigital){
										var ioproce = iodigital.salidasDigital[i]
										var ioantes = unidad.iodigital.salidasDigital[i]
										ioantes.estado = ioproce
										salidasDigital[i] = ioantes
									}
									iodigital.salidasDigital = salidasDigital	
										
								}else{
									var salidasDigital = {}
									for(var i in iodigital.salidasDigital){
										var ioproce = iodigital.salidasDigital[i]
										var ionuevo = {
											estado:ioproce,
											tipo:0
										}
										if(i == 0)
											ionuevo.tipo = 1
										salidasDigital[i] = ionuevo
									}
									iodigital.salidasDigital = salidasDigital
								}
							}else{
								var salidasDigital = {}
								for(var i in iodigital.salidasDigital){
									var ioproce = iodigital.salidasDigital[i]
									var ionuevo = {
										estado:ioproce,
										tipo:0
									}
									if(i == 0)
										ionuevo.tipo = 1
									salidasDigital[i] = ionuevo
								}
								iodigital.salidasDigital = salidasDigital
							}
							
						}
					}
				}
				
				// reset 
				// ignicion
				if(iodigital != null){
					if(iodigital.entradasDigital != null){
						for(var indexIOIN in iodigital.entradasDigital){
							var ioIN = iodigital.entradasDigital[indexIOIN]
							if(ioIN.tipo == 1){
								procesar.ignicion = ioIN.estado
							}
								
						}
					}
				}
				this.controlExisteFusion(rastreo, procesar, "ignicion")
				// Guardar
				if(Object.keys(iodigital).length > 0)
					extend(true, organizado, organizado, {iodigital:iodigital})
				// Guardar
				if(Object.keys(rastreo).length > 0)
					extend(true, organizado, organizado, {rastreo:rastreo})
					
						
				
				
					
				/* I/O Analogo */
				var ioanaloga = {}
				// entradasAnaloga.[0~N]
				this.controlExisteFusion(ioanaloga, procesar, "entradasAnaloga")
				// salidasAnaloga.[0~N]
				this.controlExisteFusion(ioanaloga, procesar, "salidasAnaloga")
				// Guardar
				if(Object.keys(ioanaloga).length > 0)
					extend(true, organizado, organizado, {ioanaloga:ioanaloga})
				
				/* Información y Estados */
				var estados = {}
				// realtime
				this.controlExisteFusion(estados, procesar, "realtime")
				// lbsEstado
				this.controlExisteFusion(estados, procesar, "lbsEstado")
				// gnnsEstado
				this.controlExisteFusion(estados, procesar, "gnnsEstado")
				// gnssModoDormido
				this.controlExisteFusion(estados, procesar, "gnssModoDormido")
				// paroMotorEstado
				this.controlExisteFusion(estados, procesar, "paroMotorEstado")
				// gpsFixed
				this.controlExisteFusion(estados, procesar, "gpsFixed")
				// modoReporte
				this.controlExisteFusion(estados, procesar, "modoReporte")
				// resetFactoryRegistro
				this.controlExisteFusion(estados, procesar, "resetFactoryRegistro")
				// temperaturaInterna
				this.controlExisteFusion(estados, procesar, "temperaturaInterna")
				// temperaturaInternaPos
				this.controlExisteFusion(estados, procesar, "temperaturaInternaPos")
				// temperaturaInternaMedida
				this.controlExisteFusion(estados, procesar, "temperaturaInternaMedida")
				// reinicioRegistro
				this.controlExisteFusion(estados, procesar, "reinicioRegistro")
				// Guardar
				if(Object.keys(estados).length > 0)
					extend(true, organizado, organizado, {estados:estados})
				
				/* Configuracion */
				var configuracion = {}
				// gpsAct
				this.controlExisteFusion(configuracion, procesar, "gpsAct")
				// tipoIgnicion
				this.controlExisteFusion(configuracion, procesar, "tipoIgnicion")
				// unidadMedida
				this.controlExisteFusion(configuracion, procesar, "unidadMedida")
				// managerStatus
				this.controlExisteFusion(configuracion, procesar, "managerStatus")
				// simLock
				this.controlExisteFusion(configuracion, procesar, "simLock")
				// dispositivoBloqueado
				this.controlExisteFusion(configuracion, procesar, "dispositivoBloqueado")
				// managerActivo
				this.controlExisteFusion(configuracion, procesar, "managerActivo")
				// parkingLock
				this.controlExisteFusion(configuracion, procesar, "parkingLock")
				// modoDormido
				this.controlExisteFusion(configuracion, procesar, "modoDormido")
				// conectPersistente
				this.controlExisteFusion(configuracion, procesar, "conectPersistente")
				// saveBuffer
				this.controlExisteFusion(configuracion, procesar, "saveBuffer")
				// smsLng
				this.controlExisteFusion(configuracion, procesar, "smsLng")
				// alarmaArrastre
				this.controlExisteFusion(configuracion, procesar, "alarmaArrastre")
				// smsSendManager
				this.controlExisteFusion(configuracion, procesar, "smsSendManager")
				// smsSendInput2
				this.controlExisteFusion(configuracion, procesar, "smsSendInput2")
				// numSMSSendInfo
				this.controlExisteFusion(configuracion, procesar, "numSMSSendInfo")
				// volumenBocina
				this.controlExisteFusion(configuracion, procesar, "volumenBocina")
				// simPIN
				this.controlExisteFusion(configuracion, procesar, "simPIN")
				// INTERVALO DE REPORTE (intervaloReporte)
				// intervaloRepIngOn
				this.controlExisteFusion(configuracion, procesar, "intervaloReporte.intervaloRepIngOn.intervaloRepIngOn")
				// intervaloRepIngOff
				this.controlExisteFusion(configuracion, procesar, "intervaloReporte.intervaloRepIngOff.intervaloRepIngOff")
				// intervaloReqAngulo
				this.controlExisteFusion(configuracion, procesar, "intervaloReporte.intervaloReqAngulo.intervaloReqAngulo")
				// intervaloReqDistancia
				this.controlExisteFusion(configuracion, procesar, "intervaloReporte.intervaloReqDistancia.intervaloReqDistancia")
				// intervaloReqHeartbeat
				this.controlExisteFusion(configuracion, procesar, "intervaloReporte.intervaloReqHeartbeat.intervaloReqHeartbeat")
				// intervaloRepEmg
				this.controlExisteFusion(configuracion, procesar, "intervaloReporte.intervaloRepEmg.intervaloRepEmg")
				// intentosAckEmg
				this.controlExisteFusion(configuracion, procesar, "intervaloReporte.intentosAckEmg.intentosAckEmg")
				// REPORTES (reporte)
				// reporteCRR
				this.controlExisteFusion(configuracion, procesar, "reporteCRR")
				// limiteVelocidadAlt
				this.controlExisteFusion(configuracion, procesar, "limiteVelocidadAlt")
				// SENSORES (sensores)
				// frontSensorAct
				this.controlExisteFusion(configuracion, procesar, "frontSensorAct")
				// dispositivoRemovidoAct
				this.controlExisteFusion(configuracion, procesar, "dispositivoRemovidoAct")
				// dispositivoAbiertoAct
				this.controlExisteFusion(configuracion, procesar, "dispositivoAbiertoAct")
				// temperaturaReporteAct
				this.controlExisteFusion(configuracion, procesar, "temperaturaReporteAct")
				// gSensorSensibilidad
				this.controlExisteFusion(configuracion, procesar, "gSensorSensibilidad")
				// sensorGTipo
				this.controlExisteFusion(configuracion, procesar, "sensorGTipo")
				// antitheftActivado
				this.controlExisteFusion(configuracion, procesar, "antitheftActivado")
				// antitheftSensibilidad
				this.controlExisteFusion(configuracion, procesar, "antitheftSensibilidad")
				// VERIFICADORES (verificadores)
				// verificadorEnergiaExterna
				this.controlExisteFusion(configuracion, procesar, "verificadorEnergiaExterna")
				// verificadorAntenaGPS
				this.controlExisteFusion(configuracion, procesar, "verificadorAntenaGPS")
				// verificadorEnergiaExterna
				this.controlExisteFusion(configuracion, procesar, "verificadorEnergiaExterna")
				// verificadorEnergiaExternaAutoOff
				this.controlExisteFusion(configuracion, procesar, "verificadorEnergiaExternaAutoOff")
				// verificadorEnergiaExternaUmbral
				this.controlExisteFusion(configuracion, procesar, "verificadorEnergiaExternaUmbral")
				// VOLATJE (voltaje)
				// voltajeConfigurado
				this.controlExisteFusion(configuracion, procesar, "voltajeConfigurado")
				// voltajeOperacionProtecion12v
				this.controlExisteFusion(configuracion, procesar, "voltajeOperacionProtecion12v")
				// voltajeOperacionProtecion24v
				this.controlExisteFusion(configuracion, procesar, "voltajeOperacionProtecion24v")
				// voltajeIgnicionVirtualOn
				this.controlExisteFusion(configuracion, procesar, "voltajeIgnicionVirtualOn")
				// voltajeIgnicionVirtualOff
				this.controlExisteFusion(configuracion, procesar, "voltajeIgnicionVirtualOff")
				// SOCKETS (io)
				// entradasConfig.[0~N]
				this.controlExisteFusion(configuracion, procesar, "entradasConfig")
				// salidasConfig.[0~N]
				this.controlExisteFusion(configuracion, procesar, "salidasConfig")
				// relayTipo
				this.controlExisteFusion(configuracion, procesar, "relayTipo")
				// JAMMER (jammer)
				// jammerDetection
				this.controlExisteFusion(configuracion, procesar, "jammer.jammerDetection.jammerDetection")
				// jammerTipo
				this.controlExisteFusion(configuracion, procesar, "jammer.jammerTipo.jammerTipo")
				// jammerConfigDistancia
				this.controlExisteFusion(configuracion, procesar, "jammer.jammerConfigDistancia.jammerConfigDistancia")
				// jammerConfigTiempo
				this.controlExisteFusion(configuracion, procesar, "jammer.jammerConfigTiempo.jammerConfigTiempo")
				// jammerRelay
				this.controlExisteFusion(configuracion, procesar, "jammer.jammerRelay.jammerRelay")
				// INFO VERSION (infoversion)
				// firmwareSoftwareVersion
				this.controlExisteFusion(configuracion, procesar, "firmwareSoftwareVersion")
				// hardwareVersion
				this.controlExisteFusion(configuracion, procesar, "hardwareVersion")
				// basicSoftwareVersion
				this.controlExisteFusion(configuracion, procesar, "basicSoftwareVersion")
				// platformSoftwareVersion
				this.controlExisteFusion(configuracion, procesar, "platformSoftwareVersion")
				// modelMcu
				this.controlExisteFusion(configuracion, procesar, "modelMcu")
				// versionMcu
				this.controlExisteFusion(configuracion, procesar, "versionMcu")
				// versionModem
				this.controlExisteFusion(configuracion, procesar, "versionModem")
				// versionModemApp
				this.controlExisteFusion(configuracion, procesar, "versionModemApp")
				// CONECCION (connect)
				// authGPRS
				this.controlExisteFusion(configuracion, procesar, "authGPRS")
				// apn
				this.controlExisteFusion(configuracion, procesar, "apn")
				// apnUser
				this.controlExisteFusion(configuracion, procesar, "apnUser")
				// apnPass
				this.controlExisteFusion(configuracion, procesar, "apnPass")
				// serverIP
				this.controlExisteFusion(configuracion, procesar, "serverIP")
				// serverPort
				this.controlExisteFusion(configuracion, procesar, "serverPort")
				// serverType
				this.controlExisteFusion(configuracion, procesar, "serverType")
				// serverIPBackup
				this.controlExisteFusion(configuracion, procesar, "serverIPBackup")
				// serverPortBackup
				this.controlExisteFusion(configuracion, procesar, "serverPortBackup")
				// serverTypeBackup
				this.controlExisteFusion(configuracion, procesar, "serverTypeBackup")
				// Guardar
				if(Object.keys(configuracion).length > 0)
					extend(true, organizado, organizado, {configuracion:configuracion})
				
				/* OBD */
				var obd = {}
				// obdOdometro
				this.controlExisteFusion(obd, procesar, "obdOdometro")
				// obdCombustible
				this.controlExisteFusion(obd, procesar, "obdCombustible")
				// obdVelocidad
				this.controlExisteFusion(obd, procesar, "obdVelocidad")
				// obdRendimientoInactivo
				this.controlExisteFusion(obd, procesar, "obdRendimientoInactivo")
				// obdTemperaturaMotor
				this.controlExisteFusion(obd, procesar, "obdTemperaturaMotor")
				// obdPresionAceite
				this.controlExisteFusion(obd, procesar, "obdPresionAceite")
				// obdRPM
				this.controlExisteFusion(obd, procesar, "obdRPM")
				// obdCruseroTiempo
				this.controlExisteFusion(obd, procesar, "obdCruseroTiempo")
				// obdDTC.[0~N]
				this.controlExisteFusion(obd, procesar, "obdDTC")
				// obdRelantiTiempo
				this.controlExisteFusion(obd, procesar, "obdRelantiTiempo")
				// obdRendimiento
				this.controlExisteFusion(obd, procesar, "obdRendimiento")
				// Guardar
				if(Object.keys(obd).length > 0)
					extend(true, organizado, organizado, {obd:obd})
				
				/* OBD o ECU */
				var estadoviaje = {}
				// horasManejando
				this.controlExisteFusion(estadoviaje, procesar, "horasManejando")
				// dpaAutoCalibrado
				this.controlExisteFusion(estadoviaje, procesar, "dpaAutoCalibrado")
				// dpaAccX
				this.controlExisteFusion(estadoviaje, procesar, "dpaAccX")
				// dpaAccY
				this.controlExisteFusion(estadoviaje, procesar, "dpaAccY")
				// dpaAccZ
				this.controlExisteFusion(estadoviaje, procesar, "dpaAccZ")
				// Guardar
				if(Object.keys(estadoviaje).length > 0)
					extend(true, organizado, organizado, {estadoviaje:estadoviaje})
			
				/* Drivers ID */
				var driverids = {}
				// driverID
				this.controlExisteFusion(driverids, procesar, "driverID")
				// driverIDReg
				this.controlExisteFusion(driverids, procesar, "driverIDReg")
				// Guardar
				if(Object.keys(driverids).length > 0)
					extend(true, organizado, organizado, {driverids:driverids})
			
				/* I/O Raw (ioraw) */
				var ioraw = {}
				//tempID.[0~N]
				this.controlExisteFusion(ioraw, procesar, "tempID")
				// Guardar
				if(Object.keys(ioraw).length > 0)
					extend(true, organizado, organizado, {ioraw:ioraw})
				
				/* Reporte de Viaje (reporteviaje) */
				var reporteviaje = {}
				// travelReportInfo
				this.controlExisteFusion(reporteviaje, procesar, "travelReportInfo")
				// travelReportDatos
				this.controlExisteFusion(reporteviaje, procesar, "travelReportDatos")
				// Guardar
				if(Object.keys(reporteviaje).length > 0)
					extend(true, organizado, organizado, {reporteviaje:reporteviaje})
			
				/* RS232 (rs232) */
				var rs232 = {}
				// RSMensaje
				this.controlExisteFusion(rs232, procesar, "RSMensaje")
				// RSCodeMensaje
				this.controlExisteFusion(rs232, procesar, "RSCodeMensaje")
				// RSRegistro
				this.controlExisteFusion(rs232, procesar, "RSRegistro")
				// RSBaud
				this.controlExisteFusion(rs232, procesar, "RSBaud")
				// Guardar
				if(Object.keys(rs232).length > 0)
					extend(true, organizado, organizado, {rs232:rs232})
			
				/* CMD Comandos (cmd) */
				var cmd = {}
				// CMDMensaje
				this.controlExisteFusion(cmd, procesar, "CMDMensaje")
				// CMDRegistro
				this.controlExisteFusion(cmd, procesar, "CMDRegistro")
				// CMDEncode
				this.controlExisteFusion(cmd, procesar, "CMDEncode")
				// CMDBanderaSerial
				this.controlExisteFusion(cmd, procesar, "CMDBanderaSerial")
				// Guardar
				if(Object.keys(cmd).length > 0)
					extend(true, organizado, organizado, {cmd:cmd})
				
				/* SIM & Network (network) */
				var network = {}
				// iccid
				this.controlExisteFusion(network, procesar, "iccid")
				// imsi
				this.controlExisteFusion(network, procesar, "imsi")
				// networkName
				this.controlExisteFusion(network, procesar, "networkName")
				// accessTecnologic
				this.controlExisteFusion(network, procesar, "accessTecnologic")
				// bandName
				this.controlExisteFusion(network, procesar, "bandName")
				// Guardar
				if(Object.keys(network).length > 0)
					extend(true, organizado, organizado, {network:network})
			
				/* I/O Bluetooth (iobluetooth) */
				var iobluetooth = {}
				// bleIO
				this.controlExisteFusion(iobluetooth, procesar, "bleIO")
				// Guardar
				if(Object.keys(iobluetooth).length > 0)
					extend(true, organizado, organizado, {iobluetooth:iobluetooth})
			
				return organizado
			},
		controlExisteFusion: function(arreglo, predatos, llaves)
			{
				try{
					var llavesArray = llaves.split('.')
					if(predatos[llavesArray[llavesArray.length-1]] == null)
						return false
					if(llavesArray.length == 1)
						return extend(true, arreglo, arreglo, {[llaves]:predatos[llaves]})
					// Mas lvl en las llaves
					var llavesCount = llavesArray.length
					var jsonString = '{'
					// graba lvl
					for(var i_llave in llavesArray){
						var llaveSelect = llavesArray[i_llave]
						if (!--llavesCount){
							jsonString = jsonString.slice(0,-1)
							jsonString += (isNaN(predatos[llavesArray[llavesArray.length-1]])?'"'+predatos[llavesArray[llavesArray.length-1]]+'"':predatos[llavesArray[llavesArray.length-1]])
							for(var i_llaveOther in llavesArray){
								if(i_llaveOther < (llavesArray.length-1))
									jsonString += '}'
							}
						}else{
							jsonString += '"'+llaveSelect+'"' + ':{'
						}
					}
					try{
						var agregarArragelo = JSON.parse(jsonString)
						extend(true, arreglo, arreglo, agregarArragelo)
					}catch(error){
						this.LogError('Error codificar JSON', error)
						return false
					}
				}catch(error){
					this.entorno.LogError('Error controlExisteFusion()', error)
				}
				
			}
	}