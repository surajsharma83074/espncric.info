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
    cat:'Regular'
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
    cat:'International'
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
    cat:'Ranji Trophy'
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
    cat:'Ashes'
  },
];

let whitediv = document.querySelector("#whitediv");

addtoWhite(divdata);
function addtoWhite(divdata) {
  document.querySelector('#whitediv').innerHTML=''
  // event.preventDefault();
  divdata.forEach(function (ele) {
    let innerDiv = document.createElement("div");

    let threeSpan = document.createElement("div");
    let sp1 = document.createElement("span");
    sp1.innerText = ele.span1;
    let sp2 = document.createElement("span");
    sp2.innerText = ele.span2;
    let sp3 = document.createElement("span");
    sp3.innerText = ele.span3;
    threeSpan.append(sp1, sp2, sp3);

    let div1 = document.createElement("div");
    let countryImage = document.createElement("img");
    countryImage.setAttribute("src", ele.cflag);
    let countryName = document.createElement("span");
    countryName.innerText = ele.cname;
    let scrdiv = document.createElement("div");
    let scor = document.createElement("span");
    scor.innerText = ele.score;
    scrdiv.append(scor);
    div1.append(countryImage, countryName, scrdiv);

    let div2 = document.createElement("div");
    let countryImage1 = document.createElement("img");
    countryImage1.setAttribute("src", ele.cflag1);
    let countryName1 = document.createElement("span");
    countryName1.innerText = ele.cname1;
    let scrdiv1 = document.createElement("div");
    let scor1 = document.createElement("span");
    scor1.innerText = ele.score1;
    scrdiv1.append(scor1);
    div2.append(countryImage1, countryName1, scrdiv1);

    let res = document.createElement("span");
    res.innerText = ele.result;
    res.style.marginBottom='8px'

    let repDiv = document.createElement("div");
    let scheduleSpan = document.createElement("span");
    scheduleSpan.innerText = "Schedule";
    let scheduleSpan1 = document.createElement("span");
    scheduleSpan1.innerText = "Table";
    let scheduleSpan2 = document.createElement("span");
    scheduleSpan2.innerText = "Images";
    repDiv.style.borderTop = "1px solid";
    repDiv.style.paddingTop='8px'
    repDiv.append(scheduleSpan, scheduleSpan1, scheduleSpan2);

    innerDiv.append(threeSpan, div1, div2, res, repDiv);
    whitediv.append(innerDiv);
  });
}


document.querySelector('#reg').addEventListener('click',clicking)
function clicking(){
  
    let filterData=divdata.filter(function(ele){
      return document.querySelector('#reg').innerText==ele.cat
    })
   addtoWhite(filterData)
}
document.querySelector('#int').addEventListener('click',clicking1)
function clicking1(){
    let filterData=divdata.filter(function(ele){
      return document.querySelector('#int').innerText==ele.cat
    })
    addtoWhite(filterData)
}
document.querySelector('#ran').addEventListener('click',clicking2)
function clicking2(){
    let filterData=divdata.filter(function(ele){
      return document.querySelector('#ran').innerText==ele.cat
    })
    addtoWhite(filterData)
}
document.querySelector('#ash').addEventListener('click',clicking3)
function clicking3(){
    let filterData=divdata.filter(function(ele){
      return document.querySelector('#ash').innerText==ele.cat
    })
    addtoWhite(filterData)
}
     

