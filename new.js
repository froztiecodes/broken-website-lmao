const cursor = document.querySelector('.cursor');
const hoverTargets = document.querySelectorAll('.hover');

// Mouse position
let mouseX = 0;
let mouseY = 0;

// Track the mouse position
window.addEventListener('mousemove', function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// Animate the cursor
window.requestAnimationFrame(function mousePos (e) {
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
  window.requestAnimationFrame(mousePos);
});

hoverTargets.forEach((target) => {
  target.addEventListener('mouseenter', function (e) {
    cursor.style.transform = 'scale(0) translate(-150%, -150%)';
  }); 
  
  target.addEventListener('mouseleave', function (e) {
    cursor.style.transform = 'scale(1) translate(-50%, -50%)';
  }); 
});





