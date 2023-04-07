fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}

