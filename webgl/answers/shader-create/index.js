//This is a helper function to make it easier to get started.
//You should call this function once your shader is set up
var drawTriangle = require('./draw-triangle');
var fs = require('fs');

//Load the fragment/vertex shader sources
var FRAG_SRC = fs.readFileSync(__dirname + '/shader.frag', 'utf8');
var VERT_SRC = fs.readFileSync(__dirname + '/shader.vert', 'utf8');

var program;

// Run once at the beginning: use this to create
// and setup things to be used in your draw function.
exports.init = function(gl) {
  var frag = gl.createShader(gl.FRAGMENT_SHADER);
  var vert = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(frag, FRAG_SRC);
  gl.shaderSource(vert, VERT_SRC);
  gl.compileShader(frag);
  gl.compileShader(vert);
  program = gl.createProgram();
  gl.attachShader(program, frag);
  gl.attachShader(program, vert);
  gl.linkProgram(program);
}

// Run every frame: use this to draw things to the screen.
exports.draw = function(gl) {
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  //Clear drawing buffer
  gl.clearColor(0,0,0,1);
  gl.clear(gl.COLOR_BUFFER_BIT);  
  
  gl.useProgram(program);
  //Now draw the triangle
  drawTriangle(gl);
}
