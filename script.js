
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

			var fieldIcon = L.icon({
				iconUrl: 'field.png',

				iconSize:     [30, 30],
				//iconAnchor:   [22, 94],
				//popupAnchor:  [-3, -76]
			});

			var alumni_House = L.marker([43.26518094700698, -79.92301044918118], {icon: buildingIcon},{"title":"Alumni House"}).bindPopup('Alumni House'),
				alumni_Memorial_Hall = L.marker([43.26397129243122, -79.91966833683068], {icon: buildingIcon}).bindPopup('Alumni Memorial Hall (University Club)'),
				ADL = L.marker([43.26338472524064, -79.92741377296909], {icon: buildingIcon}).bindPopup('Applied Dynamics Laboratory (ADL)'),
				ABB = L.marker([43.26024673736459, -79.92178256090025], {icon: buildingIcon}).bindPopup('Arthur N. Bourns Building (ABB)'),
				bertrand_Russel_Center = L.marker([43.26255947397407, -79.91553022123686], {icon: buildingIcon}).bindPopup('Bertrand Russell Archives and Research Centre'),
				biology_Greenhouse = L.marker([43.2629889319551, -79.92070808078601], {icon: buildingIcon}).bindPopup('Biology Greenhouse'),
				BSB = L.marker([43.26228156013504, -79.92012982037897], {icon: buildingIcon}).bindPopup('Burke Science Building (BSB)'),
				CSB = L.marker([43.26197938112731, -79.92775166994888], {icon: buildingIcon}).bindPopup('Campus Services Building (CSB)'),
				CES_Exam = L.marker([43.257463361417116, -79.92084545432259], {icon: buildingIcon}).bindPopup('Canadian Martyrs CES Testing/Exam Centre'),
				CNH = L.marker([43.26377663224458, -79.91840282201355], {icon: buildingIcon}).bindPopup('Chester New Hall (CNH)'),
				commons_Building = L.marker([43.265548357466976, -79.91926878692516], {icon: buildingIcon}).bindPopup('Commons Building'),
				CRL = L.marker([43.25919876246554, -79.91937281647718], {icon: buildingIcon}).bindPopup('Communications Research Laboratory (CRL)'),
				DBAC = L.marker([43.265058583060714, -79.91586108963861], {icon: buildingIcon}).bindPopup('David Braley Athletic Centre (DBAC)'),
				DSB = L.marker([43.26411311045421, -79.91646577909465], {icon: buildingIcon}).bindPopup('DeGroote School of Business (DSB)'),
				ET_Clark_Center = L.marker([43.261763470048756, -79.9218168203562], {icon: buildingIcon}).bindPopup('E.T. Clarke Centre (Security)'),
				ETB = L.marker([43.258430387558334, -79.92009092932781], {icon: buildingIcon}).bindPopup('Engineering Technology Building (ETB)'),
				GSB = L.marker([43.26238339017586, -79.92121175812069], {icon: buildingIcon}).bindPopup('General Sciences Building (GSB)'),
				GH = L.marker([43.26348604132332, -79.91821967422175], {icon: buildingIcon}).bindPopup('Gilmour Hall (GH)'),
				HH = L.marker([43.26319430984207, -79.92009662626108], {icon: buildingIcon}).bindPopup('Hamilton Hall (HH)'),
				HSC = L.marker([43.25997250169118, -79.91776605095988], {icon: buildingIcon}).bindPopup('Health Sciences Centre (HSC/MUMC)'),
				ITB = L.marker([43.25885533481163, -79.92090681249833], {icon: buildingIcon}).bindPopup('Information Technology Building (ITB)'),
				IAHS = L.marker([43.259695736518985, -79.92033666506835], {icon: buildingIcon}).bindPopup('Institute for Applied Health Sciences (IAHS)'),
				IWC = L.marker([43.26503861221833, -79.91534251331016], {icon: buildingIcon}).bindPopup('Ivor Wynne Centre (IWC - Athletic Centre)'),
				JHE = L.marker([43.26083813984687, -79.92040061341251], {icon: buildingIcon}).bindPopup('John Hodgins Engineering Building (JHE)'),
				KTH = L.marker([43.26401003317645, -79.91700992661775], {icon: buildingIcon}).bindPopup('Kenneth Taylor Hall (KTH)'),
				LRW = L.marker([43.261675891840014, -79.91674681630279], {icon: buildingIcon}).bindPopup('L.R. Wilson Hall (LRW)'),
				LSB = L.marker([43.26114220512191, -79.91783295177363], {icon: buildingIcon}).bindPopup('Life Sciences Building (LSB)'),
				T33 = L.marker([43.26385951228728, -79.92729696725802], {icon: buildingIcon}).bindPopup('McMaster Childrens Centre T33 '),
				MDC = L.marker([43.26190603400241, -79.91804987368359], {icon: buildingIcon}).bindPopup('McMaster Divinity College (MDC)'),
				MUSC = L.marker([43.2634760710908, -79.91773018297955], {icon: buildingIcon}).bindPopup('McMaster University Student Centre (MUSC)'),
				MDCL = L.marker([43.261056258416595, -79.91698919720072], {icon: buildingIcon}).bindPopup('Michael DeGroote Centre for Learning and Discovery (MDCL)'),
				nuclear_Reactor = L.marker([43.26120958882823, -79.92148960826708], {icon: buildingIcon}).bindPopup('Nuclear Reactor'),
				NRB = L.marker([43.261494741655106, -79.92108813819983], {icon: buildingIcon}).bindPopup('Nuclear Research Building (NRB)'),
				parking_Services = L.marker([43.26380860132735, -79.92776957343956], {icon: buildingIcon}).bindPopup('Parking Services'),
				preliminary_Laboratory = L.marker([43.2586154076459, -79.91951218195048], {icon: buildingIcon}).bindPopup('Preliminary Laboratory'),
				PC = L.marker([43.25990940964341, -79.91965812825536], {icon: buildingIcon}).bindPopup('Psychology Building (PC)'),
				ron_Joyce_Les_Prince = L.marker([43.266182155819365, -79.91699222626396], {icon: fieldIcon}).bindPopup('Ron Joyce Stadium / Les Prince Field'),
				alumni_Field = L.marker([43.26661721264709, -79.91572558876193], {icon: fieldIcon}).bindPopup('Alumni Field'),
				tandem_Accelerator = L.marker([43.262032904481785, -79.92118690911701], {icon: buildingIcon}).bindPopup('Tandem Accelerator Building'),
				TB26 = L.marker([43.262955509772446, -79.92809354287985], {icon: buildingIcon}).bindPopup('Temporary Building, Multi-Use (TB26)'),
				T34 = L.marker([43.261414728009456, -79.91776769899744], {icon: buildingIcon}).bindPopup('Temporary Lecture Theatre (T34)'),
				TSH = L.marker([43.26434966810287, -79.91775291398201], {icon: buildingIcon}).bindPopup('Togo Salmon Hall (TSH)'),
				UH = L.marker([43.26343606291722, -79.9190510291054], {icon: buildingIcon}).bindPopup('University Hall (UH)'),
				
				//Residences
				bates = L.marker([43.264022938889426, -79.92263328280163], {icon: residenceIcon}).bindPopup('Bates Residence Building '),
				brandon = L.marker([43.265964734158835, -79.91985766097226], {icon: residenceIcon}).bindPopup('Brandon Hall'),
				edwards = L.marker([43.264098394679664, -79.91898373530091], {icon: residenceIcon}).bindPopup('Edwards Hall'),
				hedden = L.marker([43.26640106919067, -79.91819994694575], {icon: residenceIcon}).bindPopup('Hedden Hall'),
				les_Prince = L.marker([43.26748453431998, -79.91706166956165], {icon: residenceIcon}).bindPopup('Les Prince Hall'),
				mary_Keyes = L.marker([43.2624846576374, -79.92291223256726], {icon: residenceIcon}).bindPopup('Mary E. Keyes Residence'),
				matthews = L.marker([43.26280192834418, -79.92228425889543], {icon: residenceIcon}).bindPopup('Matthews Hall'),
				mckay = L.marker([43.265158002904684, -79.9190180497049], {icon: residenceIcon}).bindPopup('McKay Hall'),
				moulton = L.marker([43.26341866194993, -79.92219041226814], {icon: residenceIcon}).bindPopup('Moulton Hall'),
				PGCLL = L.marker([43.26542293154426, -79.91825866207355], {icon: residenceIcon}).bindPopup('Peter George Centre for Living and Learning (PGCLL)'),
				wallingford = L.marker([43.26305733628535, -79.92167375889548], {icon: residenceIcon}).bindPopup('Wallingford Hall'),
				whidden = L.marker([43.265076975145575, -79.91958717424114], {icon: residenceIcon}).bindPopup('Whidden Hall'),
				woodstock = L.marker([43.265981917597244, -79.91901457430036], {icon: residenceIcon}).bindPopup('Woodstock Hall'),
				
				//Food
				bistro = L.marker([43.26240178244867, -79.92256806090192], {icon: foodIcon}).bindPopup('Bistro/Bistro 2 Go/Tim Hortons (Mary Keyes)'),
				centro = L.marker([43.265593530214396, -79.91919636724484], {icon: foodIcon}).bindPopup('Centro'),
				la_Piazza = L.marker([43.2635144001761, -79.91743390936927], {icon: foodIcon}).bindPopup('La Piazza'),
				buttery = L.marker([43.26404625007599, -79.9196947239773], {icon: foodIcon}).bindPopup('The Buttery'),
				caffeine = L.marker([43.26233431533462, -79.92035771239284], {icon: foodIcon}).bindPopup('Caffeine, The Elements'),
				bymac_booster_Juice_DBAC = L.marker([43.26506369701495, -79.91635327669256], {icon: foodIcon}).bindPopup('Bymac/Booster Juice @ DBAC'),
				cafe_One_Tim_Hortons = L.marker([43.26127522332594, -79.9168361568933], {icon: foodIcon}).bindPopup('Cafe One/Tim Hortons'),
				e_Cafe = L.marker([43.25839584379581, -79.92000093045489], {icon: foodIcon}).bindPopup('Booster Juice @ E-cafe/E-cafe'),
				math_Cafe = L.marker([43.26314139275686, -79.92012116781247], {icon: foodIcon}).bindPopup('Math Cafe'),
				IAHS_Cafe = L.marker([43.259809305532116, -79.92021879159427], {icon: foodIcon}).bindPopup('IAHS Cafe'),
				fireball_Cafe = L.marker([43.260802388888656, -79.92023611727502], {icon: foodIcon}).bindPopup('Fireball Cafe'),
				chopped_Leaf = L.marker([43.26578199655438, -79.91805684219752], {icon: foodIcon}).bindPopup('Chopped Leaf'),
				second_Cup = L.marker([43.265563240726074, -79.91806862122473], {icon: foodIcon}).bindPopup('Second Cup'),
				booster_Juice_MUSC = L.marker([43.26348850955341, -79.91761478623076], {icon: foodIcon}).bindPopup('Booster Juice @ MUSC'),
				starbucks = L.marker([43.26315742394501, -79.91807815661966], {icon: foodIcon}).bindPopup('Starbucks'),
				teriyaki_Experience = L.marker([43.26343967927192, -79.91754504879252], {icon: foodIcon}).bindPopup('Teriyaki Experience'),
				twelve_Eighty = L.marker([43.26368484426791, -79.9176339637643], {icon: foodIcon}).bindPopup('Twelve Eighty'),
				grind = L.marker([43.26355412335101, -79.91749314096805], {icon: foodIcon}).bindPopup('The Grind'),
				tim_Hortons_MUSC = L.marker([43.26344358569473, -79.91763624390587], {icon: foodIcon}).bindPopup('Tim Hortons @ MUSC'),
				reactor_Cafe = L.marker([43.260988664699994, -79.92229299860202], {icon: foodIcon}).bindPopup('Reactor Cafe'),
				refectory = L.marker([43.26290699707361, -79.92112925047886], {icon: foodIcon}).bindPopup('Refectory/Pheonix'),
				//Library
				MML = L.marker([43.26290496959234, -79.91764135651201], {icon: libraryIcon}).bindPopup('Mills Memorial Library / Alvin A. Lee Building / Museum of Art (MML)'),
				thode = L.marker([43.26115735728779, -79.9223187368986], {icon: libraryIcon}).bindPopup('H.G. Thode Library of Science and Engineering'),
				health_Sciences_Library = L.marker([43.260346455130325, -79.9175233183129], {icon: libraryIcon}).bindPopup('Health Sciences Library'),
				//Parking
				A = L.marker([43.2618667284894, -79.91754505831739], {icon: parkingIcon}).bindPopup('Parking Lot A'),
				B = L.marker([43.263043074193874, -79.91651751488166], {icon: parkingIcon}).bindPopup('Parking Lot B'),
				C = L.marker([43.264010969785744, -79.91597966387074], {icon: parkingIcon}).bindPopup('Parking Lot C'),
				D = L.marker([43.264387088766355, -79.91510238564027], {icon: parkingIcon}).bindPopup('Parking Lot D'),
				G = L.marker([43.26634880564805, -79.91779590856646], {icon: parkingIcon}).bindPopup('Parking Lot G'),
				H = L.marker([43.26768333174091, -79.9150693863457], {icon: parkingIcon}).bindPopup('Parking Lot H'),
				I = L.marker([43.25924656197729, -79.9221097538365], {icon: parkingIcon}).bindPopup('Parking Lot I'),
				M = L.marker([43.26226823514483, -79.92955518448068], {icon: parkingIcon}).bindPopup('Parking Lot M'),
				N = L.marker([43.26292206196168, -79.92777230962884], {icon: parkingIcon}).bindPopup('Parking Lot N'),
				P = L.marker([43.264183527185416, -79.92729057822426], {icon: parkingIcon}).bindPopup('Parking Lot P'),
				wilson_underground = L.marker([43.26220716764564, -79.91699352498799], {icon: parkingIcon}).bindPopup('Wilson Underground Parking'),
				stadium_underground = L.marker([43.266894659387845, -79.91674527970409], {icon: parkingIcon}).bindPopup('Stadium Underground Parking')
				HSC_Parking = L.marker([43.26002241271315, -79.91752331655162], {icon: parkingIcon}).bindPopup('HSC_Parking'),

				madBounds = [
					[40.7, -4.19],
					[40.12, -3.31],
				],
				mad = [40.4, -3.7];
		
			
			var buildings = L.layerGroup([alumni_House,alumni_Memorial_Hall,ADL,ABB,bertrand_Russel_Center,biology_Greenhouse,BSB,CSB,CES_Exam,CNH,commons_Building,CRL,DBAC,DSB,ET_Clark_Center,ETB,GSB,GH,HH,HSC,ITB,IAHS,IWC,JHE,KTH,LRW,LSB,T33,MDC,MUSC,MDCL,nuclear_Reactor,NRB,preliminary_Laboratory,PC,tandem_Accelerator,TB26,T34,TSH,UH,PGCLL,parking_Services]),
				residences = L.layerGroup([bates,brandon,edwards,hedden,les_Prince,mary_Keyes,matthews,mckay,moulton,PGCLL,wallingford,whidden,woodstock]),
				food = L.layerGroup([bistro,refectory,centro,la_Piazza,buttery,caffeine,bymac_booster_Juice_DBAC,cafe_One_Tim_Hortons,e_Cafe,math_Cafe,IAHS_Cafe,fireball_Cafe,chopped_Leaf,second_Cup,booster_Juice_MUSC,starbucks,teriyaki_Experience,tim_Hortons_MUSC,reactor_Cafe,twelve_Eighty,grind]),
				library = L.layerGroup([MML,thode,health_Sciences_Library]),
				parking = L.layerGroup([A,B,C,D,G,H,I,M,N,P,wilson_underground,stadium_underground,HSC_Parking]),
				field = L.layerGroup([ron_Joyce_Les_Prince,alumni_Field])
			
			//Google Map (Requires API)

			var gmap = L.gridLayer.googleMutant({
				minZoom: 16,
			maxZoom: 20,
			type: "satellite",
			})

			//OpenStreet Map
			//gmap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			//	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			//})
			


			var southWest = L.latLng(43.2573691315058, -79.93213830932247),
    			northEast = L.latLng(43.26891643196347, -79.9102314311739),
    			bounds = L.latLngBounds(southWest, northEast);
			
			var map = L.map('map', {
				center: [43.262245, -79.919977],
				maxBounds: bounds,
				zoom: 15.5,
				layers: [buildings,residences,food,library,parking,field]
			});

			//Routing
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

			//L.Routing.control({
			//	waypoints: [
			//	  L.latLng(43.258430387558334, -79.92009092932781),
			//	  L.latLng(43.265058583060714, -79.91586108963861)
			//	]
			//  }).addTo(map);

			
	

		
			var rectangle = L.rectangle(madBounds).addTo(map);

			var baseMaps = {
				"GoogleMaps": gmap
			};

			var overlayMaps = {
				"Buildings": buildings,
				"Residences": residences,
				"Food": food,
				"Parking Lots": parking,
				"Libraries": library,
				"Fields": field
			};

			var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

			L.Control.geocoder().addTo(map);
			//var searchLayer = L.layerGroup().addTo(map);
			//map.addControl( new L.Control.Search({layer: searchLayer}) );

			

			//Legend
			legend = L.control.Legend({
				position: "bottomleft",
				collapsed: false,
				symbolWidth: 24,
				opacity: 1,
				column: 2,
				legends: [{
					label: "Building",
					type: "image",
					url: "building.png",
				},
				{
					label: "Residence",
					type: "image",
					url: "residence.png",
				},
				{
					label: "Library",
					type: "image",
					url: "library.png",
				},
				{
					label: "Food & Drink",
					type: "image",
					url: "food.png",
				},
				{
					label: "Parking",
					type: "image",
					url: "parking.png",
				},
				{
					label: "Fields",
					type: "image",
					url: "field.png",
				}, ]
			}).addTo(map);

			var controlSearch = new L.Control.Search({
				position:'topright',		
				layer: buildings,
				initial: false,
				zoom: 12,
				marker: false
			});
		
			map.addControl( controlSearch );


			//document.getElementById("McMaster1").onclick = function () {
			//	map.flyTo(DBAC, 17);
			//};
			//document.getElementById("McMaster2").onclick = function () {
			//	map.setView(ETB, 17);
			//};
