"use strict";

function crop1d(nx, res) {
  res.length = nx;
}

function crop2d(nx, ny, res) {
  res.length = nx;
  for(var i=0; i<nx; ++i) {
    res[i].length = ny;
  }
}

function crop3d(nx, ny, nz, res) {
  res.length = nx;
  for(var i=0; i<nx; ++i) {
    res[i].length = ny;
    var r = res[i];
    for(var j=0; j<ny; ++j) {
      r[j].length = nz;
    }
  }
}

function cropnd(dims, res, n) {
  if(n + 3 === dims.length) {
    crop3d(dims[n], dims[n+1], dims[n+2], res);
    return;
  }
  res.length = dims[n];
  for(var i=0; i<dims.length; ++i) {
    cropnd(dims, res[i], n+1);
  }
}

function crop(dims, image) {
  switch(dims.length) {
    case 0:
    break;
    case 1:
      crop1d(dims[0], image);
    break;
    case 2:
      crop2d(dims[0], dims[1], image);
    break;
    case 3:
      crop3d(dims[0], dims[1], dims[2], image);
    break;
    default:
      cropnd(dims, image, 0);
    break;
  }
  return image;
}
module.exports = crop;