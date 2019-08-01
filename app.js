// let tabs = document.getElementsByClassName("tablinks");
// for (let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener("click", showTab);
//   console.log(tabs[i]);

//   function showTab(e) {
//     let contents = document.getElementsByClassName("tabcontent");
//     for (let x = 0; x < contents.length; x++) {
//       console.log(e.contents);
//       // e.contents[x].style.backgroundColor = "green";
//       // e.contents[i].style.display = "none";
//     }
//   }
// }

function click1() {
  let content1 = document.getElementById("tabcontent1");
  console.log(content1);
  content1.style.backgroundColor = "green";
  content1.style.display = "none";
}

function click2() {
  let content2 = document.getElementById("tabcontent2");
  console.log(content2);
  content2.style.backgroundColor = "green";
}

function click3() {
  let content3 = document.getElementById("tabcontent3");
  console.log(content3);
  content3.style.backgroundColor = "green";
}
