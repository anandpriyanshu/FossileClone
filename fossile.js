document.getElementById("arrow").addEventListener("mouseover", () => {
  if (document.getElementById("teer").style.transform == "rotate(0deg)") {
    document.getElementById("teer").style.transition = "all .5s";
    document.getElementById("teer").style.transform = "rotate(180deg)";
  } else {
    document.getElementById("teer").style.transition = "all .5s";
    document.getElementById("teer").style.transform = "rotate(0deg)";
  }
});
let x = document.getElementById("ham");
x.addEventListener("click", () => {
  if (document.getElementById("content2").style.display == "none") {
    document.getElementById("content2").style.display = "grid";
    document.getElementById("content2").style.animation =
      "movenavbar2 1s linear ";
  } else {
    document.getElementById("content2").style.display = "none";
  }
});
