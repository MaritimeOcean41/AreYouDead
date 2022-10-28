let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 64;
canvas.height = 64;

ctx.font = '55px Poppins';
ctx.textAlign = 'center';
ctx.fillText('😃',32,51);

document.getElementById('ico').setAttribute('href', canvas.toDataURL());