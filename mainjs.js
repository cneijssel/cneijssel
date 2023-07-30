
function openNav() {
  document.getElementById("main-menu").style.width = "200px";
  document.getElementById("open-menu").style.width = "0px";
  document.getElementById("open-menu").style.padding = "0px 0px";
}

function closeNav() {
  document.getElementById("main-menu").style.width = "0px";
  document.getElementById("open-menu").style.width = "120px";
  document.getElementById("open-menu").style.padding = "14px 16px";
}


function openCVinfo(ID) {
  document.getElementById(ID).style.height = "200px";
}

function closeCVinfo(ID) {
  document.getElementById(ID).style.width = "0px";
}


