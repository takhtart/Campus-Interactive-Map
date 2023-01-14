	var mapopts = {
				zoomSnap: 0.25,
			};

			var map = L.map("map", mapopts).setView([43.262552,-79.918722], 17);

			var roadMutant = L.gridLayer
				.googleMutant({
          minZoom: 16,
					maxZoom: 20,
					type: "roadmap",
				})
				.addTo(map);

			var Mac = [43.262552,-79.918722]
				madBounds = [
					[40.7, -4.19],
					[40.12, -3.31],
				],
				mad = [40.4, -3.7];

			var marker1 = L.marker(Mac).addTo(map)

			var rectangle = L.rectangle(madBounds).addTo(map);

			document.getElementById("McMaster1").onclick = function () {
				map.flyTo(Mac, 17);
			};
			document.getElementById("McMaster2").onclick = function () {
				map.setView(Mac, 17);
			};

			grid.createTile = function (coords) {
				var tile = L.DomUtil.create("div", "tile-coords");
				tile.style.border = "1px solid black";
				tile.style.lineHeight = "256px";
				tile.style.textAlign = "center";
				tile.style.fontSize = "20px";
				tile.innerHTML = [coords.x, coords.y, coords.z].join(", ");

				return tile;
			};