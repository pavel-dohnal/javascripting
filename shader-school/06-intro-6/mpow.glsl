mat2 matrixPower(highp mat2 m, int n) {
  
  //Raise the matrix m to nth power

  // For example:
  //
  //  matrixPower(m, 2) = m * m
  //
  highp mat2 x = m;
  for (int i = 1; i < 10000; i++) {  	
  	if (i >= n) {
  		break;
  	} 
  	x = x * m;
  }

  return x;
}

//Do not change this line or the name of the above function
#pragma glslify: export(matrixPower)