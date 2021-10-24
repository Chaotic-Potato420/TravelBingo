var click = 0;
var click2 = 0;

var corner = 0;

//B
document.getElementById("b").onclick = function () {
  if (corner == 4) {
    console.log("bingo!!");
    window.location.replace("end.html");
  }
  corner += 1;
  document.getElementById("b").style.backgroundColor = "#F7C59F";
  document.getElementById("b").style.color = "black";
  document.getElementById("b").disabled = true;
};
document.getElementById("b2").onclick = function () {
  document.getElementById("b2").style.backgroundColor = "#F7C59F";
  document.getElementById("b2").style.color = "black";
};
document.getElementById("b3").onclick = function () {
  document.getElementById("b3").style.backgroundColor = "#F7C59F";
  document.getElementById("b3").style.color = "black";
};
document.getElementById("b4").onclick = function () {
  document.getElementById("b4").style.backgroundColor = "#F7C59F";
  document.getElementById("b4").style.color = "black";
};
document.getElementById("b5").onclick = function () {
  if (corner == 4) {
    console.log("bingo!!");
    window.location.replace("end.html");
  }
  corner += 1;
  document.getElementById("b5").style.backgroundColor = "#F7C59F";
  document.getElementById("b5").style.color = "black";
  document.getElementById("b5").disabled = true;
};

//I
document.getElementById("i").onclick = function () {
  document.getElementById("i").style.backgroundColor = "#F7C59F";
  document.getElementById("i").style.color = "black";
};
document.getElementById("i2").onclick = function () {
  document.getElementById("i2").style.backgroundColor = "#F7C59F";
  document.getElementById("i2").style.color = "black";
};
document.getElementById("i3").onclick = function () {
  document.getElementById("i3").style.backgroundColor = "#F7C59F";
  document.getElementById("i3").style.color = "black";
};
document.getElementById("i4").onclick = function () {
  document.getElementById("i4").style.backgroundColor = "#F7C59F";
  document.getElementById("i4").style.color = "black";
};
document.getElementById("i5").onclick = function () {
  document.getElementById("i5").style.backgroundColor = "#F7C59F";
  document.getElementById("i5").style.color = "black";
};

//N
document.getElementById("n").onclick = function () {
  document.getElementById("n").style.backgroundColor = "#F7C59F";
  document.getElementById("n").style.color = "black";
};
document.getElementById("n2").onclick = function () {
  document.getElementById("n2").style.backgroundColor = "#F7C59F";
  document.getElementById("n2").style.color = "black";
};
document.getElementById("n4").onclick = function () {
  document.getElementById("n4").style.backgroundColor = "#F7C59F";
  document.getElementById("n4").style.color = "black";
};
document.getElementById("n5").onclick = function () {
  document.getElementById("n5").style.backgroundColor = "#F7C59F";
  document.getElementById("n5").style.color = "black";
};

//G
document.getElementById("g").onclick = function () {
  document.getElementById("g").style.backgroundColor = "#F7C59F";
  document.getElementById("g").style.color = "black";
};
document.getElementById("g2").onclick = function () {
  document.getElementById("g2").style.backgroundColor = "#F7C59F";
  document.getElementById("g2").style.color = "black";
};
document.getElementById("g3").onclick = function () {
  document.getElementById("g3").style.backgroundColor = "#F7C59F";
  document.getElementById("g3").style.color = "black";
};
document.getElementById("g4").onclick = function () {
  document.getElementById("g4").style.backgroundColor = "#F7C59F";
  document.getElementById("g4").style.color = "black";
};
document.getElementById("g5").onclick = function () {
  document.getElementById("g5").style.backgroundColor = "#F7C59F";
  document.getElementById("g5").style.color = "black";
};

//O
document.getElementById("o").onclick = function () {
  if (corner == 4) {
    console.log("bingo!!");
    window.location.replace("end.html");
  }
  corner += 1;
  document.getElementById("o").style.backgroundColor = "#F7C59F";
  document.getElementById("o").style.color = "black";

  document.getElementById("o").disabled = true;
};
document.getElementById("o2").onclick = function () {
  document.getElementById("o2").style.backgroundColor = "#F7C59F";
  document.getElementById("o2").style.color = "black";
};
document.getElementById("o3").onclick = function () {
  document.getElementById("o3").style.backgroundColor = "#F7C59F";
  document.getElementById("o3").style.color = "black";
};
document.getElementById("o4").onclick = function () {
  document.getElementById("o4").style.backgroundColor = "#F7C59F";
  document.getElementById("o4").style.color = "black";
};
document.getElementById("o5").onclick = function () {
  if (corner == 4) {
    console.log("bingo!!");
    window.location.replace("end.html");
  }
  corner += 1;
  document.getElementById("o5").style.backgroundColor = "#F7C59F";
  document.getElementById("o5").style.color = "black";
  document.getElementById("o5").disabled = true;
};

window.onload = function () {
  document.getElementById("n3").style.backgroundColor = "#F7C59F";
  document.getElementById("n3").style.color = "black";
  document.getElementById("n3").disabled = true;
  corner = 1;
  document.getElementById("card").style.display = "block";

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
function change() {
  window.location.replace("index.html");
}
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

  document.getElementById("o").disabled = false;
  document.getElementById("o5").disabled = false;
  document.getElementById("b").disabled = false;
  document.getElementById("b5").disabled = false;

  corner = 0;
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
