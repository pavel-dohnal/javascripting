bool inBox(highp vec2 lo, highp vec2 hi, highp vec2 x) {
  
  if (lo.x > x.x) return false;
  if (lo.y > x.y) return false;
  if (hi.x < x.x) return false;
  if (hi.y < x.y) return false;
  
  return true;
}


//Do not change this line or the name of the above function
#pragma glslify: export(inBox)