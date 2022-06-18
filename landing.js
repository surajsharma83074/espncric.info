// -------------------------------navbar js starts here----------------------------------
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
  let ary2=document.querySelectorAll("#whitediv>div")
  console.log(ary2.length);
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
      let chand=document.querySelector("#chandamama>img")
      chand.src='https://www.linkpicture.com/q/sunmama.png'
      let bell=document.querySelector("#bell>img")
      bell.src='https://www.linkpicture.com/q/bellmama.png'
      let kakha=document.querySelector("#kakha>img")
      kakha.src='https://www.linkpicture.com/q/kakhadark.png'
      let keypad=document.querySelector("#keypad>img")
      keypad.src='https://www.linkpicture.com/q/keypaddark.png'
      // console.log('im in dark mode')
    } else {
      document.querySelector("#container11").style.backgroundColor = "#0398dc";
      for (let i = 0; i < ary2.length; i++) {
        ary2[i].style.backgroundColor = "white";
      }
      document.querySelector("#fnavbar").style.backgroundColor = "#03a9f4";
      for (let i = 0; i < ary.length; i++) {
        ary[i].style.backgroundColor = "#03a9f4";
      }
      document.querySelector("#rightside div").style.backgroundColor = "#03a9f4";
      let chand=document.querySelector("#chandamama>img")
      chand.src='https://www.linkpicture.com/q/chandamama.png'
      let bell=document.querySelector("#bell>img")
      bell.src='https://www.linkpicture.com/q/bell_1.png'
      let kakha=document.querySelector("#kakha>img")
      kakha.src='https://www.linkpicture.com/q/kakha.png'
      let keypad=document.querySelector("#keypad>img")
      keypad.src='https://www.linkpicture.com/q/keypad.png'
      // console.log('im in normal work')
      count = 0;
    }
  }
// ---------------------------------------navbar js ends here----------------------------------  
