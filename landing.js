// -------------------------------navbar js starts here----------------------------------
document.querySelector("body").style.backgroundColor="#f9f9fb"
let divdata = [
  {
    span1: "Live",
    span2: "3rd T20",
    span3: "Vishakhapattnam",
    cflag:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
    cname: "India",
    score: "179/8",
    cflag1:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
    cname1: "SA",
    score1: "181/5",
    result: "India won by 48 runs",
    cat: "Regular",
  },
  {
    span1: "Live",
    span2: "3rd T20",
    span3: "Vishakhapattnam",
    cflag:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
    cname: "Sri Lanka",
    score: "179/8",
    cflag1:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png",
    cname1: "AUS",
    score1: "181/5",
    result: "India won by 48 runs",
    cat: "International",
  },
  {
    span1: "Live",
    span2: "3rd T20",
    span3: "Vishakhapattnam",
    cflag:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
    cname: "WI",
    score: "179/8",
    cflag1:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313145.logo.png",
    cname1: "Bangladesh",
    score1: "181/5",
    result: "India won by 48 runs",
    cat: "Ranji Trophy",
  },
  {
    span1: "Live",
    span2: "3rd T20",
    span3: "Vishakhapattnam",
    cflag:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313133.logo.png",
    cname: "USA",
    score: "179/8",
    cflag1:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
    cname1: "India",
    score1: "181/5",
    result: "India won by 48 runs",
    cat: "Ashes",
  },
];

let whitediv = document.querySelector("#whitediv");

addtoWhite(divdata);
function addtoWhite(divdata) {
  document.querySelector("#whitediv").innerHTML = "";

  divdata.forEach(function (ele) {
    let innerDiv = document.createElement("div");

    let threeSpan = document.createElement("div");
    threeSpan.id = "thrspan";
    let sp1 = document.createElement("span");
    sp1.innerText = ele.span1;
    let sp2 = document.createElement("span");
    sp2.innerText = ele.span2;
    let sp3 = document.createElement("span");
    sp3.innerText = ele.span3;
    threeSpan.append(sp1, sp2, sp3);

    let div1 = document.createElement("div");
    div1.id = "country1";
    let countryImage = document.createElement("img");
    countryImage.setAttribute("src", ele.cflag);
    let countryName = document.createElement("span");
    countryName.innerText = ele.cname;
    countryName.style.fontSize = "12px";
    countryName.style.fontWeight = "bolder";
    let scrdiv = document.createElement("div");
    let scor = document.createElement("span");
    scor.innerText = ele.score;
    scor.style.fontSize = "14px";
    scor.style.fontWeight = "bold";
    scrdiv.append(scor);
    div1.append(countryImage, countryName, scrdiv);

    let div2 = document.createElement("div");
    div2.id = "country2";
    let countryImage1 = document.createElement("img");
    countryImage1.setAttribute("src", ele.cflag1);
    let countryName1 = document.createElement("span");
    countryName1.innerText = ele.cname1;
    countryName1.style.fontSize = "12px";
    countryName1.style.fontWeight = "bolder";
    let scrdiv1 = document.createElement("div");
    let scor1 = document.createElement("span");
    scor1.innerText = ele.score1;
    scor1.style.fontSize = "14px";
    scor1.style.fontWeight = "bold";
    scrdiv1.append(scor1);
    div2.append(countryImage1, countryName1, scrdiv1);

    let res = document.createElement("span");
    res.innerText = ele.result;
    res.style.marginBottom = "8px";

    let repDiv = document.createElement("div");
    repDiv.id = "repdiving";
    let scheduleSpan = document.createElement("span");
    scheduleSpan.innerText = "Schedule";
    let scheduleSpan1 = document.createElement("span");
    scheduleSpan1.innerText = "Table";
    let scheduleSpan2 = document.createElement("span");
    scheduleSpan2.innerText = "Images";
    repDiv.style.borderTop = "1px solid";
    repDiv.style.paddingTop = "8px";
    repDiv.style.fontSize = "12px";
    repDiv.style.fontWeight = "bolder";
    repDiv.append(scheduleSpan, scheduleSpan1, scheduleSpan2);

    innerDiv.append(threeSpan, div1, div2, res, repDiv);
    whitediv.append(innerDiv);
  });
}

document.querySelector("#reg").addEventListener("click", clicking);
function clicking() {
  let filterData = divdata.filter(function (ele) {
    return document.querySelector("#reg").innerText == ele.cat;
  });
  addtoWhite(filterData);
}
document.querySelector("#int").addEventListener("click", clicking1);
function clicking1() {
  let filterData = divdata.filter(function (ele) {
    return document.querySelector("#int").innerText == ele.cat;
  });
  addtoWhite(filterData);
}
document.querySelector("#ran").addEventListener("click", clicking2);
function clicking2() {
  let filterData = divdata.filter(function (ele) {
    return document.querySelector("#ran").innerText == ele.cat;
  });
  addtoWhite(filterData);
}
document.querySelector("#ash").addEventListener("click", clicking3);
function clicking3() {
  let filterData = divdata.filter(function (ele) {
    return document.querySelector("#ash").innerText == ele.cat;
  });
  addtoWhite(filterData);
}
document.querySelector("#alldata").addEventListener("click", clickingall);
function clickingall() {
  addtoWhite(divdata);
}

document.querySelector("#chandamama").addEventListener("click", insideDark);
let count = 0;
let ary = document.querySelectorAll(".dropbtn");
let ary2 = document.querySelectorAll("#whitediv>div");
<<<<<<< HEAD
let footerArray = document.querySelectorAll("body a");
let childftr = document.querySelectorAll(".childfooter");
let matches = document.querySelectorAll(".Matches");
let left_boxes = document.querySelectorAll(".content-box");
=======
let footerArray=document.querySelectorAll('body a')
let childftr=document.querySelectorAll('.childfooter')
let heading=document.querySelectorAll(".childfooter>div>h1")
let end=document.querySelectorAll(".theend>span>a")
>>>>>>> 31e2deae994d1c667fe033aab3bcf9c24c7b24bb
console.log(childftr.length);
let IMG = document.createElement("img");
IMG.src = "https://wassets.hscicdn.com/static/images/nlp-logo.svg";
IMG.style.width = "100%";
document.querySelector(".first-box-1").append(IMG);
let last = document.querySelectorAll(" .flex-75-child-box");

function insideDark() {
  count++;
  if (count == 1) {
    document.querySelector("#container11").style.backgroundColor = "#1d1e1f";
    for (let i = 0; i < ary2.length; i++) {
      ary2[i].style.backgroundColor = "#2b2c2d";
    }
    document.querySelector("#fnavbar").style.backgroundColor = "#1d1e1f";
    for (let i = 0; i < ary.length; i++) {
      ary[i].style.backgroundColor = "#1d1e1f";
    }
    document.querySelector("#rightside div").style.backgroundColor = "#1d1e1f";
    let chand = document.querySelector("#chandamama>img");
    chand.src = "https://www.linkpicture.com/q/sunmama.png";
    let bell = document.querySelector("#bell>img");
    bell.src = "https://www.linkpicture.com/q/bellmama.png";
    let kakha = document.querySelector("#kakha>img");
    kakha.src = "https://www.linkpicture.com/q/kakhadark.png";
    let keypad = document.querySelector("#keypad>img");
    keypad.src = "https://www.linkpicture.com/q/keypaddark.png";
<<<<<<< HEAD
    document.querySelector("body").style.backgroundColor = "#1d1e1f";
    // ------------------footer start-----------------
    document.querySelector(".parentfooter").style.backgroundColor = "#1d1e1f";
    for (let i = 0; i < footerArray.length; i++) {
      footerArray[i].style.backgroundColor = "#1d1e1f";
    }
    footerArray.forEach(function (el) {
      el.style.color = "white";
    });
    childftr.forEach(function (ele) {
      ele.style.backgroundColor = "#1d1e1f";
    });
    document.querySelector("#footerlastpart").style.backgroundColor = "#1d1e1f";
=======
    document.querySelector('body').style.backgroundColor='black'
    // ------------------footer start-----------------
    document.querySelector('.parentfooter').style.backgroundColor='#1d1e1f'
    document.querySelector(".parentfooter").style.border="1px solid black"
    for(let i=0;i<footerArray.length;i++){
      footerArray[i].style.backgroundColor='#1d1e1f'
    }
    footerArray.forEach(function(el){
      el.style.color='white'
    })
    childftr.forEach(function(ele){
      ele.style.backgroundColor='#1d1e1f'
    })
    heading.forEach(function(elem){
      elem.style.color="white"
    })
    document.querySelector('#footerlastpart').style.backgroundColor='#1d1e1f'
    // document.querySelector(".childfooter>div h1").style.color="white"
>>>>>>> 31e2deae994d1c667fe033aab3bcf9c24c7b24bb
    // -------------------footer end--------------------
    document.querySelector("body").style.color = "white"; //please do not remove this line or this code will not work

    // ------------changes from praful side-----------------------------
    document.querySelector(".flex-50").style.backgroundColor = "#1d1e1f";
    document.querySelector(".highlight-image-box").style.backgroundColor =
      "#1d1e1f";
    document.querySelector(".highlight-image-box").style.color = "white";
    document.querySelector(".dhoni").style.backgroundColor = "#1d1e1f";

    document.querySelector(".highlight-image-box-2").style.backgroundColor =
      "#1d1e1f";
    document.querySelector(".highlight-image-box-3").style.backgroundColor =
      "#1d1e1f";
    document.querySelector(".players").style.backgroundColor = "#1d1e1f";
    document.querySelector(".players").style.color = "white";
    document.querySelector(".players-image-box").style.color = "white";

    document.querySelector(".highlight-image-box-2").style.color = "white";
    document.querySelector(".explanation").style.backgroundColor = "#1d1e1f";
    document.querySelector(".explanation").style.color = "white";
    document.querySelector(".explanation").style.color = "white";
    IMG.src = "https://wassets.hscicdn.com/static/images/nlp-logo-dark.svg";
    IMG.style.width = "100%";
    document.querySelector(".first-box-1").append(IMG);
    document.querySelector(".first-box-1").append(IMG);
    document.querySelector(".ask-qustion").style.backgroundColor =
      "transparent";
    document.querySelector(".ask-qustion").style.border = "#0cabf4";

    document.querySelector(".first-box").style.backgroundColor = "#1d1e1f";
    document.querySelector(".flex-75").style.backgroundColor = "#1d1e1f";
    document.querySelector(".flex-75").style.color = "white";
    document.querySelector(".flex-75-box").style.backgroundColor = "#1d1e1f";
    document.querySelector(".flex-75-box").style.color = "white";
    document.querySelector(".flex-50-second-box").style.backgroundColor =
      "#1d1e1f";

    document.querySelector(".first-box").style.color = "white";
    document.querySelector(".flex-25").style.backgroundColor = "#1d1e1f";

    document.querySelector(".dhoni").style.backgroundColor = "#1d1e1f";
    document.querySelector(".feed-image").style.backgroundColor = "#1d1e1f";
    document.querySelector(".feed-image").style.color = "white";
    document.querySelector(".feed-image").style.backgroundColor = "#1d1e1f";

    matches.forEach(function (el) {
      el.style.backgroundColor = "#1d1e1f";
      el.style.color = "white";
    });
    left_boxes.forEach(function (el) {
      el.style.backgroundColor = "#1d1e1f";
      el.style.color = "white";
    });
    last.forEach(function (el) {
      el.style.backgroundColor = "#1d1e1f";
      el.style.color = "white";
    });

    // ------------changes from praful side-----------------------------

    // console.log('im in dark mode')
  } else {
    // ------------changes from praful side-----------------------------
    document.querySelector(".flex-50").style.backgroundColor = "white";
    document.querySelector(".flex-50").style.color = "black";
    document.querySelector(".highlight-image-box").style.backgroundColor =
      "white";
    document.querySelector(".highlight-image-box").style.color = "black";
    document.querySelector(".highlight-image-box-2").style.backgroundColor =
      "white";
    document.querySelector(".highlight-image-box-3").style.backgroundColor =
      "white";
    document.querySelector(".feed-image").style.backgroundColor = "white";
    document.querySelector(".feed-image").style.color = "black";
    document.querySelector(".explanation").style.backgroundColor = "white";
    document.querySelector(".players").style.backgroundColor = "white";
    document.querySelector(".players").style.color = "black";
    document.querySelector(".players-image-box").style.color = "black";
    document.querySelector(".flex-50-second-box").style.backgroundColor =
      "white";

    document.querySelector(".explanation").style.color = "black";
    document.querySelector(".dhoni").style.backgroundColor = "white";
    document.querySelector(".explanation").style.color = "black";
    IMG.src = "https://wassets.hscicdn.com/static/images/nlp-logo.svg";
    IMG.style.width = "100%";
    document.querySelector(".first-box-1").append(IMG);

    document.querySelector(".flex-75").style.backgroundColor = "white";
    document.querySelector(".flex-75").style.color = "black";
    document.querySelector(".flex-75-box").style.backgroundColor = "white";
    document.querySelector(".flex-75-box").style.color = "black";
    document.querySelector(".first-box").style.backgroundColor = "white";
    document.querySelector(".first-box").style.color = "black";
    left_boxes.forEach(function (el) {
      el.style.backgroundColor = "white";
      el.style.color = "black";
    });
    document.querySelector(".flex-25").style.backgroundColor = "white";
    matches.forEach(function (el) {
      el.style.backgroundColor = "white";
      el.style.color = "black";
    });
    last.forEach(function (el) {
      el.style.backgroundColor = "white";
      el.style.color = "black";
    });
    document.querySelector(".flex-75").style.backgroundColor = "white";
    document.querySelector(".flex-75").style.color = "white";
    //

    // ------------changes from praful side-----------------------------

    document.querySelector("body").style.color = "black";
    document.querySelector("#container11").style.backgroundColor = "#0398dc";
    for (let i = 0; i < ary2.length; i++) {
      ary2[i].style.backgroundColor = "white";
    }
    document.querySelector("#fnavbar").style.backgroundColor = "#03a9f4";
    for (let i = 0; i < ary.length; i++) {
      ary[i].style.backgroundColor = "#03a9f4";
    }
    document.querySelector("#rightside div").style.backgroundColor = "#03a9f4";
    let chand = document.querySelector("#chandamama>img");
    chand.src = "https://www.linkpicture.com/q/chandamama.png";
    let bell = document.querySelector("#bell>img");
    bell.src = "https://www.linkpicture.com/q/bell_1.png";
    let kakha = document.querySelector("#kakha>img");
    kakha.src = "https://www.linkpicture.com/q/kakha.png";
    let keypad = document.querySelector("#keypad>img");
    keypad.src = "https://www.linkpicture.com/q/keypad.png";
<<<<<<< HEAD
    document.querySelector("body").style.backgroundColor = "white";
    // ------------------footer start-----------------
    document.querySelector(".parentfooter").style.backgroundColor = "white";
    for (let i = 0; i < footerArray.length; i++) {
      footerArray[i].style.backgroundColor = "white";
    }
    footerArray.forEach(function (el) {
      el.style.color = "black";
    });
    childftr.forEach(function (ele) {
      ele.style.backgroundColor = "white";
    });
    document.querySelector("#footerlastpart").style.backgroundColor = "white";
    // -------------------footer end--------------------
=======
    document.querySelector('body').style.backgroundColor='#f9f9fb'
     // ------------------footer start-----------------
     document.querySelector('.parentfooter').style.backgroundColor='white'
     for(let i=0;i<footerArray.length;i++){
       footerArray[i].style.backgroundColor='white'
     }
     footerArray.forEach(function(el){
       el.style.color='black'
     })
     childftr.forEach(function(ele){
       ele.style.backgroundColor='white'
     })
     heading.forEach(function(elem){
      elem.style.color="black"
     })
     end.forEach(function(elem){
      elem.style.backgroundColor="#edeef0"
     })
     document.querySelector('#footerlastpart').style.backgroundColor='#edeef0'

     // -------------------footer end--------------------
>>>>>>> 31e2deae994d1c667fe033aab3bcf9c24c7b24bb
    // console.log('im in normal work')
    count = 0;
  }
}
// ---------------------------------------navbar js ends here----------------------------------
// ---------------------------------------middle js start here----------------------------------

let headings = [
  "Key Series",
  "Quick Links",
  "ESPNcricinfo Apps",
  "Follow ESPNcricinfo",
  "ESPN Sites",
  "News Headlines",
];
for (let i = 0; i < headings.length; i++) {
  document.querySelectorAll(".note")[i].innerText = headings[i];
}

// ---------------------------------------middle js ends here----------------------------------
