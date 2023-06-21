// Configuración de los Servicios
// Navigation
// Josafat Vargas O.
module.exports = 
	{
		seleccionarCentral: function(cliente, lvl_print_log)
			{
				var config = 
					{
						wsspuerto:9100,
						wsshost:'http://127.0.0.1',
						host:'',	
						lvl_print_log:lvl_print_log,
						cliente:cliente,
						dbNombre:'navigationgps',
						dbLink:'',
						motortipo:'central',
						//tmp_mysql_host: '172.31.69.30',
						tmp_mysql_host: '54.243.64.189',
						tmp_mysql_user: 'superoperador',
						tmp_mysql_pass: 'TcYzJZ1swAIjMtZI9oTG',
						tmp_mysql_db: 'motor_navigation',
						tmp_mysql_port: 3310,
						tmp_ws_host:''
					}
				switch (cliente) {
					case 'navigation':{
						config.host = 'central.navigation.com.mx'
						config.dbLink = 'mongodb://root:Fhso1ciaqmr7@db-mongodb-v1.navigation.com.mx:27017/?retryWrites=true&writeConcern=majority'
					}
					break;
					case 'pyxis':{
						config.wsspuerto = 9200
						config.wsshost = 'http://127.0.0.1'
						config.dbLink = 'mongodb://root:Fhso1ciaqmr7@db-mongodb-v1.navigation.com.mx:27017/?retryWrites=true&writeConcern=majority'
						config.host = 'pyx-central.navigation.com.mx'
						config.tmp_mysql_host = 'admin.totalplayflotillas.com'
						config.tmp_mysql_user = 'superoperador'
						config.tmp_mysql_pass = 'TcYzJZ1swAIjMtZI9oTG'
						config.tmp_mysql_db = 'motor_pyxis'
						config.tmp_mysql_port = 3310
					}
					break;
					case 'developer':{
						config.wsspuerto = 9000
						config.host = 'dev-central.navigation.com.mx'
						config.dbLink = 'mongodb://root:rDz9Lj5FaqmB@35.175.181.207:27017/?retryWrites=true&writeConcern=majority'
					}
					break;
					default:{
						config.wsspuerto = 9000
						config.host = 'central.navigation.com.mx'
						config.dbLink = 'mongodb://root:rDz9Lj5FaqmB@35.175.181.207:27017/?retryWrites=true&writeConcern=majority'
					}
					
				}
				return config
			},
		seleccionarMotor: function(motor, cliente, puertoAdicional)
			{
				var config = 
					{
						puerto:0,
						host:'',
						motor:motor,
						modelos:'',
						cliente:cliente,
						hostcentral:'http://central.navred.com:9000',
						motortipo:'motorcom'
					}
				switch (cliente) {
					case 'navigation':{
						config.hostcentral = 'http://central.navred.com:9100'
					}
					break;
					case 'pyxis':{
						config.hostcentral = 'http://central.navred.com:9200'
					}
					break;
					case 'developer':{
						config.hostcentral = 'http://central.navred.com:9000'
					}
					break;
					default:{
						config.hostcentral = 'http://central.navred.com:9000'
					}
					
				}
				var modelosLista = 
				{
					'topflytech':['TLW1', 'TLW2', 'TLP1-SF', 'TLP2', 'TLD1'],
					'suntech':['ST300', 'ST600', 'STUniversal'],
					'concox':['AT6'],
					'queclink':[],
					'meitrack':[]
				}
				// Selecionar Motor
				switch (motor) {
					case 'topflytech':{
						config.puerto = 10001
						config.host = 'topflytech.navigation.com.mx'
						config.modelos = modelosLista.topflytech
						if(cliente == 'pyxis'){
							config.puerto = 10002
							config.host = 'pyx-topflytech.navigation.com.mx'
						}
					}
					break;
					case 'suntech-old':{
						config.puerto = 1098
						config.host = 'suntech.navigation.com.mx'
						config.modelos = modelosLista.suntech
						if(cliente == 'pyxis'){
							config.puerto = 1096
							config.host = 'motorazteca.navigation.com.mx'
						}
					}
					break;
					case 'suntech':{
						config.puerto = 10003
						config.host = 'suntech.navigation.com.mx'
						config.modelos = modelosLista.suntech
						if(cliente == 'pyxis'){
							config.puerto = 10004
							config.host = 'pyx-suntech.navigation.com.mx'
						}
					}
					break;
					case 'concox':{
						config.puerto = 10005
						config.host = 'concox.navigation.com.mx'
						config.modelos = modelosLista.concox
						if(cliente == 'pyxis'){
							config.puerto = 10006
							config.host = 'pyx-concox.navigation.com.mx'
						}
					}
					break;
					case 'queclink':{
						config.puerto = 10007
						config.host = 'queclink.navigation.com.mx'
						config.modelos = modelosLista.queclink
						if(cliente == 'pyxis'){
							config.puerto = 10008
							config.host = 'pyx-queclink.navigation.com.mx'
						}
					}
					break;
					case 'meitrack':{
						config.puerto = 10009
						config.host = 'meitrack.navigation.com.mx'
						config.modelos = modelosLista.meitrack
						if(cliente == 'pyxis'){
							config.puerto = 10010
							config.host = 'pyx-meitrack.navigation.com.mx'
						}
					}
					break;
					case 'motor-universal':{
						config.puerto = 10100
						config.host = 'universal.navigation.com.mx'
						config.modelos = modelosLista
						if(cliente == 'pyxis'){
							config.puerto = 10101
							config.host = 'pyx-universal.navigation.com.mx'
						}
					}
					break;
					case 'motor-respaldo':{
						config.puerto = 10102
						config.host = 'motorrespaldo.navigation.com.mx'
						config.modelos = modelosLista
						if(cliente == 'pyxis'){
							config.puerto = 10103
							config.host = 'pyx-motorrespaldo.navigation.com.mx'
						}
					}
					break;
					case 'motor-developer':{
						config.puerto = 3002
						config.host = 'motordeveloper.navigation.com.mx'
						config.modelos = modelosLista
					}
					break;
					default:{
						config.puerto = 3002
						config.host = 'motordeveloper.navigation.com.mx'
						config.modelos = modelosLista
					}
					
				}
				
				// Cambio de puerto Adicional
				if(puertoAdicional != null)
					config.puerto = parseFloat(puertoAdicional)
				
				
				
				return config
			},
		seleccionarMotorWSTMP: function(cliente)
		{
			var config = 
				{
					cliente:cliente,
					hostcentral:'http://127.0.0.1:9000',
					motortipo:'motorws-tmp',
					hostws:'http://control.navigation.com.mx/',
					login:{"usuario":"appnavandroid-pix","codigo":"Hyd&%hdjkYd834"},
				}
			switch (cliente) {
				case 'navigation':{
					config.hostcentral = 'http://127.0.0.1:9100'
					config.hostws = 'http://control.navigation.com.mx/'
					config.login = {"usuario":"appnavandroid-pix","codigo":"Hyd&%hdjkYd834"}
				}
				break;
				case 'pyxis':{
					config.hostcentral = 'http://127.0.0.1:9200'
					config.hostws = 'http://admin.totalplayflotillas.com/'
					config.login = {"usuario":"superControlPyxis","codigo":"8nRpJ5rddddSpVHj5aQX"}
				}
				break;
				case 'developer':{
					config.hostcentral = 'http://127.0.0.1:9000'
					config.hostws = 'http://control.navigation.com.mx/'
					config.login = {"usuario":"appnavandroid-pix","codigo":"Hyd&%hdjkYd834"}
				}
				break;
				default:{
					config.hostcentral = 'http://127.0.0.1:9000'
					config.hostws = 'http://control.navigation.com.mx/'
					config.login = {"usuario":"appnavandroid-pix","codigo":"Hyd&%hdjkYd834"}
				}
				
			}
			
			return config
		},
		seleccionarNotificaciones: function(cliente = 'navigation')
			{
			var config = 
				{
					'cliente':'navigation',
					'hostcentral':'http://127.0.0.1:9100',
					'motortipo':'notificaciones'
				}
			//config.cliente = cliente
			if(cliente == 'pyxis')
				config.hostcentral = 'http://127.0.0.1:9100'
			
			return config
		}
	}
