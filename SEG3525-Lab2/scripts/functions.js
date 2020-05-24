function openCity(evt, tabToBeOpened) {

  var counter, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");

  for (counter = 0; counter < tabcontent.length; counter++) {
    tabcontent[counter].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tabLink");

  for (counter = 0; counter < tablinks.length; counter++) {
    tablinks[counter].className = tablinks[counter].className.replace(" active", "");
  }

  document.getElementById(tabToBeOpened).style.display = "block";
  evt.currentTarget.className += " active";
  
}
