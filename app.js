let tabs = document.getElementsByClassName("tablinks");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", showTab);
  console.log(tabs[i]);

  function showTab(e) {
    let contents = document.getElementsByClassName("tabcontent");
    for (let x = 0; x < contents.length; x++) {
      console.log(contents[x]);
      // e.contents[x].style.backgroundColor = "green";
      // e.contents[i].style.display = "none";
    }
  }
}
