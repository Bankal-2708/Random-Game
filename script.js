let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter", function () {
  let x = Math.floor(Math.random() * 100);
  s1.innerHTML = x;
});

s1.addEventListener("mouseleave", function () {
  s1.innerHTML = "1";
});

let s2 = document.getElementById("sq2");
let clr = ["red", "pink", "green", "skyBlue"];
s2.addEventListener("mouseenter", function () {
  let bg=Math.floor(Math.random()*clr.length);
  s2.style.backgroundColor=clr[bg];
});

s2.addEventListener("mouseleave", function () {
  s2.style.backgroundColor="white";
});


let s3 = document.getElementById("sq3");
let color="red";
s3.addEventListener("mouseenter", function () {
  if(color==="red"){
      s3.style.backgroundColor="red";
      color="green";
  }
  else if (color==="green") {
    s3.style.backgroundColor="green";
    color="skyBlue";
  } else {
    s3.style.backgroundColor="skyBlue";
    color="red";
  }
});

s3.addEventListener("mouseleave", function () {
  s3.style.backgroundColor="white";
});


let s4 = document.getElementById("sq4");

s4.addEventListener("mouseenter", function () {
  let r1=Math.floor(Math.random()*256);
  let r2=Math.floor(Math.random()*256);
  let r3=Math.floor(Math.random()*256);
  s4.style.backgroundColor=`rgb(${r1},${r2},${r3})`
});

s4.addEventListener("mouseleave", function () {
  s4.style.backgroundColor="white";
});

s4.addEventListener("click", function () {
  let r1=Math.floor(Math.random()*256);
  let r2=Math.floor(Math.random()*256);
  let r3=Math.floor(Math.random()*256);
  s1.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
  s2.style.backgroundColor=`rgb(${r3},${r2},${r1})`;
  s3.style.backgroundColor=`rgb(${r2},${r1},${r3})`;
});
 
s4.addEventListener("mouseleave", function () {
  s1.style.backgroundColor="white";
  s2.style.backgroundColor="white";
  s3.style.backgroundColor="white";
});