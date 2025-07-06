document.getElementById("triggerAnimation").addEventListener("click", function() {
  var box = document.getElementById("growBox");
  var size = 50;
  var id = setInterval(frame, 15);
  function frame() {
    if (size >= 300) {
      clearInterval(id);
    } else {
      size++;
      box.style.width = size + "px";
    }
  }
});
