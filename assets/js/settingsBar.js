function openNav() {
  document.getElementById("sideBar").style.width = "270px";
  document.getElementById("main").style.marginRight = "270px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}