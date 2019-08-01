function openDay(evt, Day) {
  // Declare all variables
  let tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementsByClassName(Day).style.display = "block";
    evt.currentTarget.className += " active";
    console.log(Day);
  }
}
