highp vec2 func(highp vec2 a, highp vec2 b) {
  

  return normalize(length(a) * b + a * length(b));
}

//Do not change this line
#pragma glslify: export(func)