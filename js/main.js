// On Click of Button, render new image

$("#button").click(function() {
    $("img.main").hide();

    // first clear the canvas	
	var clearCanvas = true;

    if(clearCanvas && project.activeLayer.hasChildren()){
        project.activeLayer.removeChildren();
        clearCanvas = false;
    }

	// Create a raster item using the image tag with id='portrait'
	var raster = new Raster('portrait');

	// Since the example image we're using is much too large,
	// and therefore has way too many pixels, lets downsize it to
	// 40 pixels wide and 30 pixels high:
	raster.size = new Size(40, 30);

	// Hide the raster:
	raster.visible = false;

	// The size of our grid cells
	var gridSize = 36;


	//decide which route to go on with a random 0 or 1
	var route = Math.floor(Math.random() * (2));

	if (route === 0){

		// need a random number for variety, between 0 and 10
		var randomNum = Math.floor(Math.random() * (11));

		// Space the cells by a bit of randomness
		var spacing = (randomNum * 0.1) + 0.2;

		for (var y = 0; y < raster.height; y++) {
			for(var x = 0; x < raster.width; x++) {

				// Get the color of the pixel:
				var color = raster.getPixel(x, y);

				// now, let's create some shapes based on randomness
				var randomNum2 = Math.floor(Math.random() * (11));
				if (randomNum2>=0 && randomNum2<4){
					// Create a circle shaped path:
					var path = new Path.Circle({
						center: new Point(x, y) * gridSize,
						radius: gridSize / 2 / spacing
					});
				}

				else if (randomNum2>=4 && randomNum2<7){
					// Create a rectangle shaped path:
					var path = new Path.Rectangle({
						point: new Point(x, y) * gridSize,
						size: gridSize / 2 / spacing
					});
				}

				else if (randomNum2>=7 && randomNum2<=10){
					// Create a polygon shaped path:
					var path = new Path.RegularPolygon({
						sides: 3+randomNum,
						center: new Point(x, y) * gridSize,
						radius: gridSize / 2 / spacing
					});
				}

				// play with alpha
				//path.fillColor.alpha = (randomNum * 0.1);

				// Set the fill color of the path to the color
				// of the pixel:
				path.fillColor = color;
			}
		}

		// Move the active layer to the center of the view:
		project.activeLayer.position = view.center;
	}

	else if (route === 1){

		// need a random number for variety, between 0 and 10
		var randomNum = Math.floor(Math.random() * (11));

		// Space the cells by a bit of randomness
		var spacing = (randomNum * 0.1) + 0.2;

		for (var y = 0; y < raster.height; y++) {
			for(var x = 0; x < raster.width; x++) {

				// Get the color of the pixel:
				var color = raster.getPixel(x, y);

				if (randomNum>=0 && randomNum<4){
					// Create a circle shaped path:
					var path = new Path.Circle({
						center: new Point(x, y) * gridSize,
						radius: gridSize / 2 / spacing
					});
				}

				else if (randomNum>=4 && randomNum<7){
					// Create a rectangle shaped path:
					var path = new Path.Rectangle({
						point: new Point(x, y) * gridSize,
						size: gridSize / 2 / spacing
					});
				}

				else if (randomNum>=7 && randomNum<=10){
					// Create a polygon shaped path:
					var path = new Path.RegularPolygon({
						sides: 3+randomNum,
						center: new Point(x, y) * gridSize,
						radius: gridSize / 2 / spacing
					});
				}

				// play with alpha
				//path.fillColor.alpha = (randomNum * 0.1);

				// Set the fill color of the path to the color
				// of the pixel:
				path.fillColor = color;
			}
		}

		// Move the active layer to the center of the view:
		project.activeLayer.position = view.center;

	}

});

// on click of button2, restore original image
$("#button2").click(function() {
	$("img.main").show();

    // and clear the canvas	
	var clearCanvas = true;

    if(clearCanvas && project.activeLayer.hasChildren()){
        project.activeLayer.removeChildren();
        clearCanvas = false;
    }
});