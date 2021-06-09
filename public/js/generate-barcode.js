function generateBarCode(elementId, value) {
  let canvas = document.createElement('canvas');
  let options = {
    bcid:        'pdf417',        // Barcode type
    text:        value.toString(),    // Text to encode
    scale:       2,               // 3x scaling factor
    height:      10,              // Bar height, in millimeters
    includetext: true,            // Show human-readable text
    textxalign:  'center',        // Always good to set this
  }
  bwipjs.toCanvas(canvas, options);
  document.getElementById(elementId).src = canvas.toDataURL('image/png');
}