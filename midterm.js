var canvas;
var gl;
var vPosition;
var program;

var color, colorLoc;

var letter1vertices, letter2vertices, letter3vertices, letter4vertices, letter5vertices, letter6vertices, letter7vertices, letter8vertices;
var buffer1, buffer2, buffer3, buffer4, buffer5, buffer6, buffer7, buffer8;

var red = 1.0;
var green = 0.0;
var blue = 0.0;

var x = 0.0;
var y = 0.0;
var xLoc;
var yLoc;

var scaleX = 1.0;
var scaleY = 1.0;
var scaleXLoc;
var scaleYLoc;

// TODO: define any global variables you need

window.onload = function init()
{
	canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    //  Configure WebGL
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    //  Load shaders and initialize attribute buffers
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Create geometry data

		// TODO: create vertex coordinates for your initial letters instead of these vertices

		// for K;
    letter1vertices = [vec2(-0.8, -0.5),
                        vec2(-0.7, -0.5),
                        vec2(-0.8, 0.5),
												vec2(-0.7, 0.5)];



	  letter7vertices = [vec2(-0.7, -0.13),
								 		   vec2(-0.1, 0.5),
								 		   vec2(-0.7, 0),
										   vec2(-0.21, 0.5)];

		letter8vertices = [vec2(-0.6, 0.05),
 										   vec2(-0.1, -0.5),
 										   vec2(-0.7, 0),
 										   vec2(-0.2, -0.5)];

		// for C;
	  letter2vertices = [vec2(0.1, -0.4),
											 vec2(0.2, -0.4),
											 vec2(0.1, 0.4),
											 vec2(0.2, 0.4)];

		letter3vertices = [vec2(0.2, -0.4),
									 		 vec2(0.2, -0.5),
									 		 vec2(0.8, -0.4),
									 		 vec2(0.8, -0.5)];

	  letter4vertices = [vec2(0.2, -0.4),
									 		 vec2(0.2, -0.5),
									 		 vec2(0.1, -0.4)];


		letter5vertices = [vec2(0.2, 0.4),
									 		 vec2(0.2, 0.5),
									 		 vec2(0.8, 0.4),
									 		 vec2(0.8, 0.5)];

	  letter6vertices = [vec2(0.2, 0.4),
									 		 vec2(0.2, 0.5),
									 		 vec2(0.1, 0.4)];



    // Load the data into the GPU
	  buffer1 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer1 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(letter1vertices), gl.STATIC_DRAW );

    buffer2 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer2 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(letter2vertices), gl.STATIC_DRAW );

		buffer3 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer3 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(letter3vertices), gl.STATIC_DRAW );

		buffer4 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer4 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(letter4vertices), gl.STATIC_DRAW );

		buffer5 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer5 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(letter5vertices), gl.STATIC_DRAW );

		buffer6 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer6 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(letter6vertices), gl.STATIC_DRAW );

		buffer7 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer7 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(letter7vertices), gl.STATIC_DRAW );

		buffer8 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer8 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(letter8vertices), gl.STATIC_DRAW );



		xLoc = gl.getUniformLocation(program, "x");
		yLoc = gl.getUniformLocation(program, "y");

		scaleXLoc =gl.getUniformLocation(program, "scaleX");
		scaleYLoc =gl.getUniformLocation(program, "scaleY");

		colorLoc = gl.getUniformLocation(program,"color");


	document.getElementById("posX").oninput = function(event) {
        //TODO: fill here to adjust translation according to slider value
				x = event.target.value;
    };
    document.getElementById("posY").oninput = function(event) {
        //TODO: fill here to adjust translation according to slider value
				y = event.target.value;
    };
    document.getElementById("scaleX").oninput = function(event) {
        //TODO: fill here to adjust scale according to slider value
				scaleX = event.target.value;
    };
    document.getElementById("scaleY").oninput = function(event) {
        //TODO: fill here to adjust scale according to slider value
				scaleY = event.target.value;
    };
    document.getElementById("redSlider").oninput = function(event) {
        //TODO: fill here to adjust color according to slider value

				red = event.target.value;
    };
    document.getElementById("greenSlider").oninput = function(event) {
        //TODO: fill here to adjust color according to slider value

				green = event.target.value;
    };
    document.getElementById("blueSlider").oninput = function(event) {
        //TODO: fill here to adjust color according to slider value

				blue = event.target.value;
    };

    render();
};


function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );

    // TODO: Send necessary uniform variables to shader and
    // perform draw calls for drawing letters

    // bind vertex buffer and associate position data with shader variables
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer1 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
    // draw triangle
		color = vec4(red, green, blue, 1.0);
		gl.uniform4fv(colorLoc,color);
	  gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter1vertices.length);

	  // bind vertex buffer and associate position data with shader variables
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer2 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
    // draw rectangle
		color = vec4(1-red, 1-green, 1-blue, 1.0);
		gl.uniform4fv(colorLoc,color);
	  gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter2vertices.length);

		// bind vertex buffer and associate position data with shader variables
		gl.bindBuffer( gl.ARRAY_BUFFER, buffer3 );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition );
		// draw rectangle
	  color = vec4(1-red, 1-green, 1-blue, 1.0);
	  gl.uniform4fv(colorLoc,color);
	  gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter3vertices.length);

		// bind vertex buffer and associate position data with shader variables
		gl.bindBuffer( gl.ARRAY_BUFFER, buffer4 );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition );
		// draw rectangle
	  color = vec4(1-red, 1-green, 1-blue, 1.0);
	  gl.uniform4fv(colorLoc,color);
	  gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter4vertices.length);

		// bind vertex buffer and associate position data with shader variables
		gl.bindBuffer( gl.ARRAY_BUFFER, buffer5 );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition );
		// draw rectangle
		color = vec4(1-red, 1-green, 1-blue, 1.0);
		gl.uniform4fv(colorLoc,color);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter5vertices.length);

		// bind vertex buffer and associate position data with shader variables
		gl.bindBuffer( gl.ARRAY_BUFFER, buffer6 );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition );
		// draw rectangle
		color = vec4(1-red, 1-green, 1-blue, 1.0);
		gl.uniform4fv(colorLoc,color);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter6vertices.length);

		// bind vertex buffer and associate position data with shader variables
		gl.bindBuffer( gl.ARRAY_BUFFER, buffer7 );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition );
		// draw rectangle
		color = vec4(red, green, blue, 1.0);
		gl.uniform4fv(colorLoc,color);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter7vertices.length);

		// bind vertex buffer and associate position data with shader variables
		gl.bindBuffer( gl.ARRAY_BUFFER, buffer8 );
		gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( vPosition );
		// draw rectangle
		color = vec4(red, green, blue, 1.0);
		gl.uniform4fv(colorLoc,color);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter8vertices.length);



	  gl.uniform1f(xLoc, x);
	  gl.uniform1f(yLoc, y);

	  gl.uniform1f(scaleXLoc, scaleX);
	  gl.uniform1f(scaleYLoc, scaleY);

    window.requestAnimFrame(render);
}
