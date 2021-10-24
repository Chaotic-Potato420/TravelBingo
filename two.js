var click = 0;
var click2 = 0;

var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;
var r5 = 0;

var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c5 = 0;

//B
document.getElementById("b").onclick = function () {
  if (c1 == 4) {
    console.log("column 1 bingo");
    window.location.replace("end.html");
  }
  c1 += 1;
  if (r1 == 4) {
    console.log("row 1 bingo!");
    window.location.replace("end.html");
  }
  r1 += 1;
  if (click == 3) {
    console.log("diagonal 1 bingo!");
    window.location.replace("end.html");
  }
  document.getElementById("b").style.backgroundColor = "#F7C59F";
  document.getElementById("b").style.color = "black";
  document.getElementById("b").disabled = true;

  console.log(c1 + " " + r1 + " " + click);
};
document.getElementById("b2").onclick = function () {
  if (c2 == 4) {
    console.log("column 2 bingo");
    window.location.replace("end.html");
  }
  c2 += 1;
  if (r1 == 4) {
    console.log("row 1 bingo!");
    window.location.replace("end.html");
  }
  r1 += 1;
  console.log(r1);
  document.getElementById("b2").style.backgroundColor = "#F7C59F";
  document.getElementById("b2").style.color = "black";
  document.getElementById("b2").disabled = true;
};
document.getElementById("b3").onclick = function () {
  if (c3 == 4) {
    console.log("column 3 bingo");
    window.location.replace("end.html");
  }
  c3 += 1;
  if (r1 == 4) {
    console.log("row 1 bingo!");
    window.location.replace("end.html");
  }
  r1 += 1;
  console.log(r1);
  document.getElementById("b3").style.backgroundColor = "#F7C59F";
  document.getElementById("b3").style.color = "black";

  document.getElementById("b3").disabled = true;
};
document.getElementById("b4").onclick = function () {
  if (c4 == 4) {
    console.log("column 4 bingo");
    window.location.replace("end.html");
  }
  c4 += 1;
  if (r1 == 4) {
    console.log("row 1 bingo!");
    window.location.replace("end.html");
  }
  r1 += 1;
  console.log(r1);
  document.getElementById("b4").style.backgroundColor = "#F7C59F";
  document.getElementById("b4").style.color = "black";

  document.getElementById("b4").disabled = true;
};
document.getElementById("b5").onclick = function () {
  if (c5 == 4) {
    console.log("column 5 bingo");
    window.location.replace("end.html");
  }
  c5 += 1;
  if (r1 == 4) {
    console.log("row 1 bingo!");
    window.location.replace("end.html");
  }
  r1 += 1;
  console.log(r1);
  if (click2 == 4) {
    console.log("BINGO 2!!!!!");
    window.location.replace("end.html");
  }
  click2 += 1;
  document.getElementById("b5").style.backgroundColor = "#F7C59F";
  document.getElementById("b5").style.color = "black";

  document.getElementById("b5").disabled = true;
};

//I
document.getElementById("i").onclick = function () {
  if (c1 == 4) {
    console.log("column 1 bingo");
    window.location.replace("end.html");
  }
  c1 += 1;
  if (r2 == 4) {
    console.log("row 2 bingo");
    window.location.replace("end.html");
  }
  r2 += 1;
  document.getElementById("i").style.backgroundColor = "#F7C59F";
  document.getElementById("i").style.color = "black";
  document.getElementById("i").disabled = true;
};
document.getElementById("i2").onclick = function () {
  if (c2 == 4) {
    console.log("column 2 bingo");
    window.location.replace("end.html");
  }
  c2 += 1;
  if (r2 == 4) {
    console.log("row 2 bingo");
    window.location.replace("end.html");
  }
  r2 += 1;
  if (click == 3) {
    console.log("BINGO 1!!!!!");
    window.location.replace("end.html");
  }
  click += 1;
  document.getElementById("i2").style.backgroundColor = "#F7C59F";
  document.getElementById("i2").style.color = "black";
  document.getElementById("i2").disabled = true;
};
document.getElementById("i3").onclick = function () {
  if (c3 == 4) {
    console.log("column 3 bingo");
    window.location.replace("end.html");
  }
  c3 += 1;
  if (r2 == 4) {
    console.log("row 2 bingo");
    window.location.replace("end.html");
  }
  r2 += 1;
  document.getElementById("i3").style.backgroundColor = "#F7C59F";
  document.getElementById("i3").style.color = "black";
  document.getElementById("i3").disabled = true;
};
document.getElementById("i4").onclick = function () {
  if (c4 == 4) {
    console.log("column 4 bingo");
    window.location.replace("end.html");
  }
  c4 += 1;
  if (r2 == 4) {
    console.log("row 2 bingo");
    window.location.replace("end.html");
  }
  r2 += 1;
  if (click2 == 4) {
    console.log("BINGO 2!!!!!");
    window.location.replace("end.html");
  }
  click2 += 1;
  document.getElementById("i4").style.backgroundColor = "#F7C59F";
  document.getElementById("i4").style.color = "black";
  document.getElementById("i4").disabled = true;
};
document.getElementById("i5").onclick = function () {
  if (c5 == 4) {
    console.log("column 5 bingo");
    window.location.replace("end.html");
  }
  c5 += 1;
  if (r2 == 4) {
    console.log("row 2 bingo");
    window.location.replace("end.html");
  }
  r2 += 1;
  document.getElementById("i5").style.backgroundColor = "#F7C59F";
  document.getElementById("i5").style.color = "black";
  document.getElementById("i5").disabled = true;
};

//N
document.getElementById("n").onclick = function () {
  if (c1 == 4) {
    console.log("column 1 bingo");
    window.location.replace("end.html");
  }
  c1 += 1;
  if (r3 == 4) {
    console.log("row 3 bingo");
    window.location.replace("end.html");
  }
  r3 += 1;
  document.getElementById("n").style.backgroundColor = "#F7C59F";
  document.getElementById("n").style.color = "black";
  document.getElementById("n").disabled = true;
};
document.getElementById("n2").onclick = function () {
  if (c2 == 4) {
    console.log("column 2 bingo");
    window.location.replace("end.html");
  }
  c2 += 1;
  if (r3 == 4) {
    console.log("row 3 bingo");
    window.location.replace("end.html");
  }
  r3 += 1;
  document.getElementById("n2").style.backgroundColor = "#F7C59F";
  document.getElementById("n2").style.color = "black";
  document.getElementById("n2").disabled = true;
};
document.getElementById("n4").onclick = function () {
  if (c4 == 4) {
    console.log("column 4 bingo");
    window.location.replace("end.html");
  }
  c4 += 1;
  if (r3 == 4) {
    console.log("row 3 bingo");
    window.location.replace("end.html");
  }
  r3 += 1;
  document.getElementById("n4").style.backgroundColor = "#F7C59F";
  document.getElementById("n4").style.color = "black";
  document.getElementById("n4").disabled = true;
};
document.getElementById("n5").onclick = function () {
  if (c5 == 4) {
    console.log("column 5 bingo");
    window.location.replace("end.html");
  }
  c5 += 1;
  if (r3 == 4) {
    console.log("row 3 bingo");
    window.location.replace("end.html");
  }
  r3 += 1;
  document.getElementById("n5").style.backgroundColor = "#F7C59F";
  document.getElementById("n5").style.color = "black";
  document.getElementById("n5").disabled = true;
};

//G
document.getElementById("g").onclick = function () {
  if (c1 == 4) {
    console.log("column 1 bingo");
    window.location.replace("end.html");
  }
  c1 += 1;
  if (r4 == 4) {
    console.log("row 4 bingo");
    window.location.replace("end.html");
  }
  r4 += 1;
  document.getElementById("g").style.backgroundColor = "#F7C59F";
  document.getElementById("g").style.color = "black";
  document.getElementById("g").disabled = true;
};
document.getElementById("g2").onclick = function () {
  if (c2 == 4) {
    console.log("column 2 bingo");
    window.location.replace("end.html");
  }
  c2 += 1;
  if (r4 == 4) {
    console.log("row 4 bingo");
    window.location.replace("end.html");
  }
  r4 += 1;
  if (click2 == 4) {
    console.log("BINGO 2!!!!!");
    window.location.replace("end.html");
  }
  click2 += 1;
  document.getElementById("g2").style.backgroundColor = "#F7C59F";
  document.getElementById("g2").style.color = "black";
  document.getElementById("g2").disabled = true;
};
document.getElementById("g3").onclick = function () {
  if (c3 == 4) {
    console.log("column 3 bingo");
    window.location.replace("end.html");
  }
  c3 += 1;
  if (r4 == 4) {
    console.log("row 4 bingo");
    window.location.replace("end.html");
  }
  r4 += 1;
  document.getElementById("g3").style.backgroundColor = "#F7C59F";
  document.getElementById("g3").style.color = "black";
  document.getElementById("g3").disabled = true;
};
document.getElementById("g4").onclick = function () {
  if (c4 == 4) {
    console.log("column 4 bingo");
    window.location.replace("end.html");
  }
  c4 += 1;
  if (r4 == 4) {
    console.log("row 4 bingo");
    window.location.replace("end.html");
  }
  r4 += 1;
  if (click == 3) {
    console.log("BINGO 1!!!!!");
    window.location.replace("end.html");
  }
  click += 1;
  document.getElementById("g4").style.backgroundColor = "#F7C59F";
  document.getElementById("g4").style.color = "black";
  document.getElementById("g4").disabled = true;
};
document.getElementById("g5").onclick = function () {
  if (c5 == 4) {
    console.log("column 5 bingo");
    window.location.replace("end.html");
  }
  c5 += 1;
  if (r4 == 4) {
    console.log("row 4 bingo");
    window.location.replace("end.html");
  }
  r4 += 1;
  document.getElementById("g5").style.backgroundColor = "#F7C59F";
  document.getElementById("g5").style.color = "black";
  document.getElementById("g5").disabled = true;
};

//O
document.getElementById("o").onclick = function () {
  if (c1 == 4) {
    console.log("column 1 bingo");
    window.location.replace("end.html");
  }
  c1 += 1;
  if (r5 == 4) {
    console.log("row 5 bingo");
    window.location.replace("end.html");
  }
  r5 += 1;
  if (click2 == 4) {
    console.log("BINGO 2!!!!!");
    window.location.replace("end.html");
  }
  click2 += 1;
  document.getElementById("o").style.backgroundColor = "#F7C59F";
  document.getElementById("o").style.color = "black";
  document.getElementById("o").disabled = true;
};
document.getElementById("o2").onclick = function () {
  if (c2 == 4) {
    console.log("column 2 bingo");
    window.location.replace("end.html");
  }
  c2 += 1;
  if (r5 == 4) {
    console.log("row 5 bingo");
    window.location.replace("end.html");
  }
  r5 += 1;
  document.getElementById("o2").style.backgroundColor = "#F7C59F";
  document.getElementById("o2").style.color = "black";
  document.getElementById("o2").disabled = true;
};
document.getElementById("o3").onclick = function () {
  if (c3 == 4) {
    console.log("column 3 bingo");
    window.location.replace("end.html");
  }
  c3 += 1;
  if (r5 == 4) {
    console.log("row 5 bingo");
    window.location.replace("end.html");
  }
  r5 += 1;
  document.getElementById("o3").style.backgroundColor = "#F7C59F";
  document.getElementById("o3").style.color = "black";
  document.getElementById("o3").disabled = true;
};
document.getElementById("o4").onclick = function () {
  if (c4 == 4) {
    console.log("column 4 bingo");
    window.location.replace("end.html");
  }
  c4 += 1;
  if (r5 == 4) {
    console.log("row 5 bingo");
    window.location.replace("end.html");
  }
  r5 += 1;
  document.getElementById("o4").style.backgroundColor = "#F7C59F";
  document.getElementById("o4").style.color = "black";
  document.getElementById("o4").disabled = true;
};
document.getElementById("o5").onclick = function () {
  if (c5 == 4) {
    console.log("column 5 bingo");
    window.location.replace("end.html");
  }
  c5 += 1;
  if (r5 == 4) {
    console.log("row 5 bingo");
    window.location.replace("end.html");
  }
  r5 += 1;
  if (click == 3) {
    console.log("BINGO 1!!!!!");
    window.location.replace("end.html");
  }
  click += 1;
  document.getElementById("o5").style.backgroundColor = "#F7C59F";
  document.getElementById("o5").style.color = "black";
  document.getElementById("o5").disabled = true;
};

window.onload = function () {
  c3 += 1;
  r3 += 1;
  click2 = 1;
  click = 1;

  console.log(click, click2, c3, r3);
  document.getElementById("n3").style.backgroundColor = "#F7C59F";
  document.getElementById("n3").style.color = "black";
  document.getElementById("card").style.display = "block";
  document.getElementById("n3").disabled = true;

  choosePic();
  choosePicC();
  choosePicd();
  choosePice();
  choosePicf();
  choosePich();
  choosePicj();
  choosePick();
  choosePicl();
  choosePicm();
  choosePicp();
  choosePicq();
  choosePicr();
  choosePics();
  choosePict();
  choosePicu();
  choosePicv();
  choosePicw();
  choosePicx();
  choosePicz();
  choosePicaa();
  choosePicbb();
  choosePicCc();
  choosePicdd();
};

function reload() {
  document.getElementById("b").style.backgroundColor = "#7FD1B9";
  document.getElementById("b2").style.backgroundColor = "#7FD1B9";
  document.getElementById("b3").style.backgroundColor = "#7FD1B9";
  document.getElementById("b4").style.backgroundColor = "#7FD1B9";
  document.getElementById("b5").style.backgroundColor = "#7FD1B9";
  document.getElementById("i").style.backgroundColor = "#7FD1B9";
  document.getElementById("i2").style.backgroundColor = "#7FD1B9";
  document.getElementById("i3").style.backgroundColor = "#7FD1B9";
  document.getElementById("i4").style.backgroundColor = "#7FD1B9";
  document.getElementById("i5").style.backgroundColor = "#7FD1B9";
  document.getElementById("n").style.backgroundColor = "#7FD1B9";
  document.getElementById("n2").style.backgroundColor = "#7FD1B9";
  document.getElementById("n4").style.backgroundColor = "#7FD1B9";
  document.getElementById("n5").style.backgroundColor = "#7FD1B9";
  document.getElementById("g").style.backgroundColor = "#7FD1B9";
  document.getElementById("g2").style.backgroundColor = "#7FD1B9";
  document.getElementById("g3").style.backgroundColor = "#7FD1B9";
  document.getElementById("g4").style.backgroundColor = "#7FD1B9";
  document.getElementById("g5").style.backgroundColor = "#7FD1B9";
  document.getElementById("o").style.backgroundColor = "#7FD1B9";
  document.getElementById("o2").style.backgroundColor = "#7FD1B9";
  document.getElementById("o3").style.backgroundColor = "#7FD1B9";
  document.getElementById("o4").style.backgroundColor = "#7FD1B9";
  document.getElementById("o5").style.backgroundColor = "#7FD1B9";

  choosePic();
  choosePicC();
  choosePicd();
  choosePice();
  choosePicf();
  choosePich();
  choosePicj();
  choosePick();
  choosePicl();
  choosePicm();
  choosePicp();
  choosePicq();
  choosePicr();
  choosePics();
  choosePict();
  choosePicu();
  choosePicv();
  choosePicw();
  choosePicx();
  choosePicz();
  choosePicaa();
  choosePicbb();
  choosePicCc();
  choosePicdd();

  click = 1;
  click2 = 1;

  r1 = 0;
  r2 = 0;
  r3 = 0;
  r4 = 0;
  r5 = 0;

  c1 = 0;
  c2 = 0;
  c3 = 0;
  c4 = 0;
  c5 = 0;

  
  document.getElementById("b").disabled = false;
  document.getElementById("b2").disabled = false;
  document.getElementById("b3").disabled = false;
  document.getElementById("b4").disabled = false;
  document.getElementById("b5").disabled = false;
  
  document.getElementById("i").disabled = false;
  document.getElementById("i2").disabled = false;
  document.getElementById("i3").disabled = false;
  document.getElementById("i4").disabled = false;
  document.getElementById("i5").disabled = false;
  
  document.getElementById("n").disabled = false;
  document.getElementById("n2").disabled = false;
  document.getElementById("n4").disabled = false;
  document.getElementById("n5").disabled = false;
  
  document.getElementById("g").disabled = false;
  document.getElementById("g2").disabled = false;
  document.getElementById("g3").disabled = false;
  document.getElementById("g4").disabled = false;
  document.getElementById("g5").disabled = false;
  
  document.getElementById("o").disabled = false;
  document.getElementById("o2").disabled = false;
  document.getElementById("o3").disabled = false;
  document.getElementById("o4").disabled = false;
  document.getElementById("o5").disabled = false;
}

function change() {
  window.location.replace("index.html");
}

var randomImage = new Array(
  "gas-pump.png",
  "hawk.png",
  "hot-air-balloon.png",
  "parking.png",
  "pet.png",
  "speed-boat.png",
  "stop.png",
  "traffic-cone.png",
  "rv.png",
  "plane.png",
  "bus.png",
  "railroad-crossing.png",
  "bridge.png",
  "cow.png",
  "taxi.png",
  "silo.png",
  "train.png",
  "motorbike.png",
  "police-car.png",
  "wind-turbine.png",
  "car.png",
  "deer.png",
  "semi.png",
  "tractor.png",
  "meadow.png",
  "church.png",
  "horse.png",
  "restaurant.png",
  "hotel.png",
  "forest.png"
);
function choosePic() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("a").src = randomImage[randomNum];
}
function choosePicC() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("c").src = randomImage[randomNum];
}
function choosePicd() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("d").src = randomImage[randomNum];
}
function choosePice() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("e").src = randomImage[randomNum];
}
function choosePicf() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("f").src = randomImage[randomNum];
}
function choosePich() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("h").src = randomImage[randomNum];
}
function choosePicj() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("j").src = randomImage[randomNum];
}
function choosePick() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("k").src = randomImage[randomNum];
}
function choosePicl() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("l").src = randomImage[randomNum];
}
function choosePicC() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("c").src = randomImage[randomNum];
}
function choosePicm() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("m").src = randomImage[randomNum];
}
function choosePicp() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("p").src = randomImage[randomNum];
}
function choosePicq() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("q").src = randomImage[randomNum];
}
function choosePicr() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("r").src = randomImage[randomNum];
}
function choosePics() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("s").src = randomImage[randomNum];
}
function choosePict() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("t").src = randomImage[randomNum];
}
function choosePicu() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("u").src = randomImage[randomNum];
}
function choosePicv() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("v").src = randomImage[randomNum];
}
function choosePicw() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("w").src = randomImage[randomNum];
}
function choosePicx() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("x").src = randomImage[randomNum];
}
function choosePicz() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("z").src = randomImage[randomNum];
}
function choosePicaa() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("aa").src = randomImage[randomNum];
}
function choosePicbb() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("bb").src = randomImage[randomNum];
}
function choosePicCc() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("cc").src = randomImage[randomNum];
}
function choosePicdd() {
  var randomNum = Math.floor(Math.random() * randomImage.length);
  document.getElementById("dd").src = randomImage[randomNum];
}
