
			var buildingIcon = L.icon({
				iconUrl: 'building.png',

				iconSize:     [30, 30],
				//iconAnchor:   [22, 94],
				//popupAnchor:  [-3, -76]
			});

			var residenceIcon = L.icon({
				iconUrl: 'residence.png',

				iconSize:     [30, 30],
				//iconAnchor:   [22, 94],
				//popupAnchor:  [-3, -76]
			});

			var foodIcon = L.icon({
				iconUrl: 'food.png',

				iconSize:     [30, 30],
				//iconAnchor:   [22, 94],
				//popupAnchor:  [-3, -76]
			});

			var libraryIcon = L.icon({
				iconUrl: 'library.png',

				iconSize:     [30, 30],
				//iconAnchor:   [22, 94],
				//popupAnchor:  [-3, -76]
			});

			var parkingIcon = L.icon({
				iconUrl: 'parking.png',

				iconSize:     [30, 30],
				//iconAnchor:   [22, 94],
				//popupAnchor:  [-3, -76]
			});

			var alumni_House = L.marker([43.265502799254776, -79.9230388814274], {icon: buildingIcon}).bindPopup('alumni_House'),
				alumni_Memorial_Hall = L.marker([43.26412129790871, -79.91952754722499], {icon: buildingIcon}).bindPopup('alumni_Memorial_Hall'),
				ADL = L.marker([43.26372030228843, -79.92718362328982], {icon: buildingIcon}).bindPopup('ADL'),
				ABB = L.marker([43.260283979006665, -79.92177213558212], {icon: buildingIcon}).bindPopup('ABB'),
				bertrand_Russel_Center = L.marker([43.26255947397407, -79.91553022123686], {icon: buildingIcon}).bindPopup('bertrand_Russel_Center'),
				biology_Greenhouse = L.marker([43.26322156737324, -79.92058934722498], {icon: buildingIcon}).bindPopup('biology_Greenhouse'),
				BSB = L.marker([43.26228156013504, -79.92012982037897], {icon: buildingIcon}).bindPopup('BSB'),
				CSB = L.marker([43.262218690592285, -79.9276781625722], {icon: buildingIcon}).bindPopup('CSB'),
				CES_Exam = L.marker([43.25882697874374, -79.91685748303209], {icon: buildingIcon}).bindPopup('CES_Exam'),
				CNH = L.marker([43.26377663224458, -79.91840282201355], {icon: buildingIcon}).bindPopup('CNH'),
				commons_Building = L.marker([43.265548357466976, -79.91926878692516], {icon: buildingIcon}).bindPopup('commons_Building'),
				CRL = L.marker([43.25931026060745, -79.9191698453867], {icon: buildingIcon}).bindPopup('CRL'),
				DBAC = L.marker([43.265058583060714, -79.91586108963861], {icon: buildingIcon}).bindPopup('DBAC'),
				DSB = L.marker([43.26411311045421, -79.91646577909465], {icon: buildingIcon}).bindPopup('DSB'),
				ET_Clark_Center = L.marker([43.2619210610585, -79.92111736314975], {icon: buildingIcon}).bindPopup('ET_Clark_Center'),
				ETB = L.marker([43.25848149123487, -79.92000560148966], {icon: buildingIcon}).bindPopup('ETB'),
				GSB = L.marker([43.26245958173133, -79.92083252635582], {icon: buildingIcon}).bindPopup('GSB'),
				GH = L.marker([43.26348604132332, -79.91821967422175], {icon: buildingIcon}).bindPopup('GH'),
				HH = L.marker([43.263235944789926, -79.91977388587125], {icon: buildingIcon}).bindPopup('HH'),
				HSC = L.marker([43.260296406534124, -79.91730147771193], {icon: buildingIcon}).bindPopup('HSC'),
				ITB = L.marker([43.25893348806628, -79.92005375761376], {icon: buildingIcon}).bindPopup('ITB'),
				IAHS = L.marker([43.259846066384135, -79.92002902820116], {icon: buildingIcon}).bindPopup('IAHS'),
				IWC = L.marker([43.26503861221833, -79.91534251331016], {icon: buildingIcon}).bindPopup('IWC'),
				JHE = L.marker([43.26097778984951, -79.92035872024229], {icon: buildingIcon}).bindPopup('JHE'),
				KTH = L.marker([43.26401003317645, -79.91700992661775], {icon: buildingIcon}).bindPopup('KTH'),
				LRW = L.marker([43.26181016134316, -79.91595653062404], {icon: buildingIcon}).bindPopup('LRW'),
				LSB = L.marker([43.26132443874075, -79.91719580547964], {icon: buildingIcon}).bindPopup('LSB'),
				T33 = L.marker([43.263835529177385, -79.92733084823294], {icon: buildingIcon}).bindPopup('T33'),
				MDC = L.marker([43.26204187379636, -79.91740300547966], {icon: buildingIcon}).bindPopup('MDC'),
				MUSC = L.marker([43.2634760710908, -79.91773018297955], {icon: buildingIcon}).bindPopup('MUSC'),
				MDCL = L.marker([43.262552,-79.918722], {icon: buildingIcon}).bindPopup('MDCL'),
				nuclear_Reactor = L.marker([43.2613443756761, -79.92081130547966], {icon: buildingIcon}).bindPopup('nuclear_Reactor'),
				NRB = L.marker([43.26160938325881, -79.92063911101565], {icon: buildingIcon}).bindPopup('NRB'),
				parking_Services = L.marker([43.263934891879636, -79.92737843169597], {icon: buildingIcon}).bindPopup('parking_Services'),
				preliminary_Laboratory = L.marker([43.25872668843782, -79.9192403723764], {icon: buildingIcon}).bindPopup('preliminary_Laboratory'),
				PC = L.marker([43.260083039180316, -79.91918405334555], {icon: buildingIcon}).bindPopup('PC'),
				refectory = L.marker([43.263156212813776, -79.92085472820116], {icon: buildingIcon}).bindPopup('refectory'),
				ron_Joyce_Les_Prince = L.marker([43.266182155819365, -79.91699222626396], {icon: buildingIcon}).bindPopup('ron_Joyce_Les_Prince'),
				alumni_Field = L.marker([43.26661721264709, -79.91572558876193], {icon: buildingIcon}).bindPopup('alumni_Field'),
				tandem_Accelerator = L.marker([43.26211033023623, -79.92058497848993], {icon: buildingIcon}).bindPopup('tandem_Accelerator'),
				TB26 = L.marker([43.262955509772446, -79.92809354287985], {icon: buildingIcon}).bindPopup('TB26'),
				T34 = L.marker([43.261405862455256, -79.91773599514157], {icon: buildingIcon}).bindPopup('T34'),
				TSH = L.marker([43.26434966810287, -79.91775291398201], {icon: buildingIcon}).bindPopup('TSH'),
				UH = L.marker([43.26343606291722, -79.9190510291054], {icon: buildingIcon}).bindPopup('UH'),
				
				//Residences
				bates = L.marker([43.264022938889426, -79.92263328280163], {icon: residenceIcon}).bindPopup('bates'),
				brandon = L.marker([43.265964734158835, -79.91985766097226], {icon: residenceIcon}).bindPopup('brandon'),
				edwards = L.marker([43.264098394679664, -79.91898373530091], {icon: residenceIcon}).bindPopup('edwards'),
				hedden = L.marker([43.26640106919067, -79.91819994694575], {icon: residenceIcon}).bindPopup('hedden'),
				les_Prince = L.marker([43.26748453431998, -79.91706166956165], {icon: residenceIcon}).bindPopup('les_Prince'),
				mary_Keyes = L.marker([43.2624846576374, -79.92291223256726], {icon: residenceIcon}).bindPopup('mary_Keyes'),
				matthews = L.marker([43.26280192834418, -79.92228425889543], {icon: residenceIcon}).bindPopup('matthews'),
				mckay = L.marker([43.265158002904684, -79.9190180497049], {icon: residenceIcon}).bindPopup('mckay'),
				moulton = L.marker([43.26341866194993, -79.92219041226814], {icon: residenceIcon}).bindPopup('moulton'),
				PGCLL = L.marker([43.26542293154426, -79.91825866207355], {icon: residenceIcon}).bindPopup('PGCLL'),
				wallingford = L.marker([43.26305733628535, -79.92167375889548], {icon: residenceIcon}).bindPopup('wallingford'),
				whidden = L.marker([43.265076975145575, -79.91958717424114], {icon: residenceIcon}).bindPopup('whidden'),
				woodstock = L.marker([43.265981917597244, -79.91901457430036], {icon: residenceIcon}).bindPopup('woodstock'),
				
				//Food
				bistro = L.marker([43.26240178244867, -79.92256806090192], {icon: foodIcon}).bindPopup('bistro'),
				centro = L.marker([43.265593530214396, -79.91919636724484], {icon: foodIcon}).bindPopup('centro'),
				la_Piazza = L.marker([43.2635144001761, -79.91743390936927], {icon: foodIcon}).bindPopup('la_Piazza'),
				buttery = L.marker([43.26404625007599, -79.9196947239773], {icon: foodIcon}).bindPopup('buttery'),
				caffeine = L.marker([43.26233431533462, -79.92035771239284], {icon: foodIcon}).bindPopup('caffeine'),
				bymac_booster_Juice_DBAC = L.marker([43.26506369701495, -79.91635327669256], {icon: foodIcon}).bindPopup('bymac_booster_Juice_DBAC'),
				cafe_One_Tim_Hortons = L.marker([43.26127522332594, -79.9168361568933], {icon: foodIcon}).bindPopup('cafe_One_Tim_Hortons'),
				e_Cafe = L.marker([43.25839584379581, -79.92000093045489], {icon: foodIcon}).bindPopup('e_Cafe'),
				math_Cafe = L.marker([43.26314139275686, -79.92012116781247], {icon: foodIcon}).bindPopup('math_Cafe'),
				IAHS_Cafe = L.marker([43.259809305532116, -79.92021879159427], {icon: foodIcon}).bindPopup('IAHS_Cafe'),
				fireball_Cafe = L.marker([43.260802388888656, -79.92023611727502], {icon: foodIcon}).bindPopup('fireball_Cafe'),
				chopped_Leaf = L.marker([43.26578199655438, -79.91805684219752], {icon: foodIcon}).bindPopup('chopped_Leaf'),
				second_Cup = L.marker([43.265563240726074, -79.91806862122473], {icon: foodIcon}).bindPopup('second_Cup'),
				booster_Juice_MUSC = L.marker([43.26348850955341, -79.91761478623076], {icon: foodIcon}).bindPopup('booster_Juice_MUSC'),
				starbucks = L.marker([43.26315742394501, -79.91807815661966], {icon: foodIcon}).bindPopup('starbucks'),
				teriyaki_Experience = L.marker([43.26343967927192, -79.91754504879252], {icon: foodIcon}).bindPopup('teriyaki_Experience'),
				twelve_Eighty = L.marker([43.26368484426791, -79.9176339637643], {icon: foodIcon}).bindPopup('twelve_Eighty'),
				grind = L.marker([43.26355412335101, -79.91749314096805], {icon: foodIcon}).bindPopup('grind'),
				tim_Hortons_MUSC = L.marker([43.26344358569473, -79.91763624390587], {icon: foodIcon}).bindPopup('tim_Hortons_MUSC'),
				reactor_Cafe = L.marker([43.260988664699994, -79.92229299860202], {icon: foodIcon}).bindPopup('reactor_Cafe'),
				//Library
				MML = L.marker([43.26290496959234, -79.91764135651201], {icon: libraryIcon}).bindPopup('MML'),
				thode = L.marker([43.26115735728779, -79.9223187368986], {icon: libraryIcon}).bindPopup('thode'),
				health_Sciences_Library = L.marker([43.260346455130325, -79.9175233183129], {icon: libraryIcon}).bindPopup('health_Sciences_Library'),
				//Parking
				A = L.marker([43.2618667284894, -79.91754505831739], {icon: parkingIcon}).bindPopup('A'),
				B = L.marker([43.263043074193874, -79.91651751488166], {icon: parkingIcon}).bindPopup('B'),
				C = L.marker([43.264010969785744, -79.91597966387074], {icon: parkingIcon}).bindPopup('C'),
				D = L.marker([43.264387088766355, -79.91510238564027], {icon: parkingIcon}).bindPopup('D'),
				G = L.marker([43.26634880564805, -79.91779590856646], {icon: parkingIcon}).bindPopup('G'),
				H = L.marker([43.26768333174091, -79.9150693863457], {icon: parkingIcon}).bindPopup('H'),
				I = L.marker([43.25924656197729, -79.9221097538365], {icon: parkingIcon}).bindPopup('I'),
				M = L.marker([43.26226823514483, -79.92955518448068], {icon: parkingIcon}).bindPopup('M'),
				N = L.marker([43.26292206196168, -79.92777230962884], {icon: parkingIcon}).bindPopup('N'),
				P = L.marker([43.264183527185416, -79.92729057822426], {icon: parkingIcon}).bindPopup('P'),
				wilson_underground = L.marker([43.26220716764564, -79.91699352498799], {icon: parkingIcon}).bindPopup('wilson_underground'),
				stadium_underground = L.marker([43.266894659387845, -79.91674527970409], {icon: parkingIcon}).bindPopup('stadium_underground')
				HSC_Parking = L.marker([43.26002241271315, -79.91752331655162], {icon: parkingIcon}).bindPopup('HSC_Parking'),

				madBounds = [
					[40.7, -4.19],
					[40.12, -3.31],
				],
				mad = [40.4, -3.7];
		

			var buildings = L.layerGroup([alumni_House,alumni_Memorial_Hall,ADL,ABB,bertrand_Russel_Center,biology_Greenhouse,BSB,CSB,CES_Exam,CNH,commons_Building,CRL,DBAC,DSB,ET_Clark_Center,ETB,GSB,GH,HH,HSC,ITB,IAHS,IWC,JHE,KTH,LRW,LSB,T33,MDC,MUSC,MDCL,nuclear_Reactor,NRB,preliminary_Laboratory,PC,ron_Joyce_Les_Prince,tandem_Accelerator,TB26,T34,TSH,UH,PGCLL,alumni_Field]),
				residences = L.layerGroup([bates,brandon,edwards,hedden,les_Prince,mary_Keyes,matthews,mckay,moulton,PGCLL,wallingford,whidden,woodstock]),
				food = L.layerGroup([bistro,refectory,centro,la_Piazza,buttery,caffeine,bymac_booster_Juice_DBAC,cafe_One_Tim_Hortons,e_Cafe,math_Cafe,IAHS_Cafe,fireball_Cafe,chopped_Leaf,second_Cup,booster_Juice_MUSC,starbucks,teriyaki_Experience,tim_Hortons_MUSC,reactor_Cafe,twelve_Eighty,grind]),
				library = L.layerGroup([MML,thode,health_Sciences_Library]),
				parking = L.layerGroup([A,B,C,D,G,H,I,M,N,P,wilson_underground,stadium_underground,HSC_Parking])

			var gmap = L.gridLayer.googleMutant({
				minZoom: 16,
			maxZoom: 20,
			type: "satellite",
			})

			var southWest = L.latLng(43.2573691315058, -79.93213830932247),
    			northEast = L.latLng(43.26891643196347, -79.9102314311739),
    			bounds = L.latLngBounds(southWest, northEast);

			var map = L.map('map', {
				center: [43.262245, -79.919977],
				maxBounds: bounds,
				zoom: 15.5,
				layers: [gmap,buildings,residences,food,library,parking]
			});

			
			var rectangle = L.rectangle(madBounds).addTo(map);

			var baseMaps = {
				"GoogleMaps": gmap
			};

			var overlayMaps = {
				"Buildings": buildings,
				"Residences": residences,
				"Food": food,
				"Parking Lots": parking,
				"Libraries": library
			};

			var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

			//document.getElementById("McMaster1").onclick = function () {
			//	map.flyTo(DBAC, 17);
			//};
			//document.getElementById("McMaster2").onclick = function () {
			//	map.setView(ETB, 17);
			//};

			