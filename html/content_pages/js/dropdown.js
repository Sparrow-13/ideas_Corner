function drop() {
    let targetDiv = document.getElementById("drop_down");
    let el = document.getElementsByClassName('main_background');
    let imag = document.getElementById("down_image");
    if (targetDiv.style.display !== "none") {
      targetDiv.style.display = "none";
      imag.src="../assets/caret-down-fill.svg";
      el.style="backdrop-filter: blur(6px);";
  
    } else {
      targetDiv.style.display = "block";
      imag.src="../assets/caret-up-fill.svg";
      
    }
  };
