var canvas;
var gl;
var program;


var vertices = [];

var theta = 10.0;

var radian;

var degree = 0.0;

var index = 1;

var xr = 0.2;
var xrLoc;
var yr = 0.1;
var yrLoc;


var red = 1.0;
var green = 0.0;
var blue = 0.0;

var redLoc;
var greenLoc;
var blueLoc;



var x = 0.0;
var y = 0.0;
var xLoc;
var yLoc;

//var maxNumVertices = 3600;

window.onload = function init()
{
	canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    //
    //  Configure WebGL
    //
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
		gl.clear( gl.COLOR_BUFFER_BIT );

    //  Load shaders and initialize attribute buffers
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );



		//TODO: create geometry
		createGeometry();


	//vertex buffer

	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );



    // Associate out shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );


		//TODO: create geometry

		xLoc = gl.getUniformLocation(program, "x");
		yLoc = gl.getUniformLocation(program, "y");

 		xrLoc = gl.getUniformLocation(program, "xr");
		yrLoc = gl.getUniformLocation(program, "yr");

		redLoc = gl.getUniformLocation(program, "vRed");
		greenLoc = gl.getUniformLocation(program, "vGreen");
		blueLoc = gl.getUniformLocation(program, "vBlue");


		xLoc = gl.getUniformLocation(program, "x");
		yLoc = gl.getUniformLocation(program, "y");


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
			  xr = event.target.value;
    };
    document.getElementById("scaleY").oninput = function(event) {
        //TODO: fill here to adjust scale according to slider value
				yr = event.target.value;
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
	 document.getElementById("theta1").onclick = function(event) {
        //TODO: fill here to adjust resolution of the ellipse

				theta = parseFloat(event.target.value);
				index = 1;
				init();
    };
	 document.getElementById("theta2").onclick = function(event) {
        //TODO: fill here to adjust resolution of the ellipse

				theta = parseFloat(event.target.value);
				index = 1;
				init();
    };
   document.getElementById("theta3").onclick = function(event) {
        //TODO: fill here to adjust resolution of the ellipse

				theta = parseFloat(event.target.value);
				index = 1;
				init();

    };
	 document.getElementById("theta4").onclick = function(event) {
        //TODO: fill here to adjust resolution of the ellipse
				theta = parseFloat(event.target.value);
				index = 1;
				init();
    };
	 document.getElementById("theta5").onclick = function(event) {
        //TODO: fill here to adjust resolution of the ellipse
				theta = parseFloat(event.target.value);
				index = 1;
				init();
    };
	 document.getElementById("xrSlider").oninput = function(event) {
        //TODO: fill here to adjust x radius of the ellipse
				xr = event.target.value;
    };
	document.getElementById("yrSlider").oninput = function(event) {
        //TODO: fill here to adjust y radius of the ellipse
				yr = event.target.value;
    };


    render();

};



function createGeometry() {
	vertices[0]=vec2(0.0,0.0);
	for(degree = 0.0; degree <=360; degree+=theta){
		var radian = degree * Math.PI / 180;
		console.log(vertices+ " " + theta + " " + degree + " "+ index);
		vertices[index]=vec2(Math.cos(radian), Math.sin(radian));
	  index++;
	}
	render();

}


function render() {
	//TODO: send necessary variables to shader, draw call, swap buffers
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays(gl.TRIANGLE_FAN, 0, index);

	/*	gl.drawArrays( gl.POINTS, 0, index );
    for(var i=0; i<maxNumVertices; i++) {
        gl.drawArrays( gl.TRIANGLE_FAN, 0, maxNumVertices[i] );
    }*/

	  gl.uniform1f(xrLoc, xr);
	  gl.uniform1f(yrLoc, yr);

		gl.uniform1f(redLoc, red);
		gl.uniform1f(greenLoc, green);
		gl.uniform1f(blueLoc, blue);

		gl.uniform1f(xLoc, x);
	  gl.uniform1f(yLoc, y);


    window.requestAnimFrame(render);
}
