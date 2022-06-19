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

// **************navbar js**************
document.querySelector("#button1").addEventListener("click",fun1)
  function fun1(){
    // ***************
   document.querySelector("#leftpart").innerText=""
 document.querySelector("#leftpart").style.height="63vh"
let left_top=document.createElement("div")
left_top.setAttribute("id","left_top")

let button=document.createElement("div")
button.setAttribute("id","button")

let button1=document.createElement("div")
button1.setAttribute("id","button1")
button1.innerText="Fixtures"

let button2=document.createElement("div")
button2.setAttribute("id","button2")
button2.innerText="Result"
// ********************
// *****************
let left_middle=document.createElement("div")
left_middle.setAttribute("id","left_middle")

let div1=document.createElement("div")
div1.setAttribute("id","div1")
div1.innerText="FRI, 17 JUN, 7:00 PM"


let div2=document.createElement("div")
div2.setAttribute("id","div2")
let imgdiv=document.createElement("div")
let pic=document.createElement("img")
pic.setAttribute("src","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313128.logo.png")
let teamname=document.createElement("div")
teamname.innerText="INDIA"


let div3=document.createElement("div")
div3.setAttribute("id","div3")
let imgdiv2=document.createElement("div")
let pic2=document.createElement("img")
pic2.setAttribute("src","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313125.logo.png")
let teamname2=document.createElement("div")
teamname2.innerText="SA"

let div4=document.createElement("div")
div4.setAttribute("id","div4")
div4.innerText="Match yet to begin"
let heading1=document.createElement("hr")

imgdiv2.append(pic2)
div3.append(imgdiv2,teamname2)
imgdiv.append(pic)
div2.append(imgdiv,teamname)
left_middle.append(div1,div2,div3,div4,heading1)

button.append(button1,button2)
left_top.append(button,left_middle)
// ********************
// ********************
// ********************
let left_bottom=document.createElement("div")
left_bottom.setAttribute("id","left_bottom")
let Div1=document.createElement("div")
Div1.innerText="SUN, 19 JUN, 7:00 PM"

let Div2=document.createElement("div")
Div2.setAttribute("id","div2")
let imgDiv=document.createElement("div")
let Pic=document.createElement("img")
Pic.setAttribute("src","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313128.logo.png")
let Teamname=document.createElement("div")
Teamname.innerText="INDIA"

let Div3=document.createElement("div")
Div3.setAttribute("id","div3")
let imgDiv2=document.createElement("div")
let Pic2=document.createElement("img")
Pic2.setAttribute("src","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313125.logo.png")
let Teamname2=document.createElement("div")
Teamname2.innerText="SA"

let Div4=document.createElement("div")
Div4.setAttribute("id","div4")
Div4.innerText="Match yet to begin"
let line=document.createElement("hr")

imgDiv2.append(Pic2)
Div3.append(imgDiv2,Teamname2)
imgDiv.append(Pic)
Div2.append(imgDiv,Teamname)
left_bottom.append(Div1,Div2,Div3,Div4,line)

let left_last=document.createElement("div")
left_last.setAttribute("id","div4")
left_last.innerText="VIEW ALL FIXTURES"

document.querySelector("#leftpart").append(left_top,left_bottom,left_last)





// *****************
    let x=document.querySelector("#button1")
    // console.log("hi1")
    x.style.backgroundColor="#03A9F4";
    x.style.color="white"
    let y=document.querySelector("#button2")
    y.style.backgroundColor="white"
    y.style.color="#03A9F4"
  }




  document.querySelector("#button2").addEventListener("click",fun2)
  function fun2(){

    document.querySelector("#leftpart").innerText=""
    document.querySelector("#leftpart").style.height="66vh"
    let left_top=document.createElement("div")
    left_top.setAttribute("id","left_top")
    
    let button=document.createElement("div")
    button.setAttribute("id","button")
    
    let button1=document.createElement("div")
    button1.setAttribute("id","button1")
    button1.innerText="Fixtures"
    
    let button2=document.createElement("div")
    button2.setAttribute("id","button2")
    button2.innerText="Result"
    // ********************
    // *****************
    let left_middle=document.createElement("div")
    left_middle.setAttribute("id","left_middle")
    
    let div1=document.createElement("div")
    div1.setAttribute("id","div1")
    div1.innerText="RESULT"
    let div5=document.createElement("div")
    div5.innerText="3rd T20"
    div5.style.fontSize="12px"
    div5.style.marginBottom="-8px"
    
    let div2=document.createElement("div")
    div2.setAttribute("id","div2")
    let imgdiv=document.createElement("div")
    let pic=document.createElement("img")
    pic.setAttribute("src","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313128.logo.png")
    let teamname=document.createElement("div")
    teamname.innerText="INDIA ---------------  179/5"
    
    
    let div3=document.createElement("div")
    div3.setAttribute("id","div3")
    let imgdiv2=document.createElement("div")
    let pic2=document.createElement("img")
    pic2.setAttribute("src","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313125.logo.png")
    let teamname2=document.createElement("div")
    teamname2.innerText="SA (19.1/20 ov, T:180) 131"
    
    let div4=document.createElement("div")
    div4.setAttribute("id","div4")
    div4.innerText="India won by 48 runs"
    let heading1=document.createElement("hr")
    
    imgdiv2.append(pic2)
    div3.append(imgdiv2,teamname2)
    imgdiv.append(pic)
    div2.append(imgdiv,teamname)
    left_middle.append(div1,div5,div2,div3,div4,heading1)
    
    button.append(button1,button2)
    left_top.append(button,left_middle)
    // ********************
    // ********************
    // ********************
    let left_bottom=document.createElement("div")
    left_bottom.setAttribute("id","left_bottom")
    let Div1=document.createElement("div")
    Div1.innerText="RESULT"
    let Div5=document.createElement("div")
    Div5.innerText="2rd T20"
    Div5.style.fontSize="12px"
    Div5.style.marginBottom="-8px"

    
    let Div2=document.createElement("div")
    Div2.setAttribute("id","div2")
    let imgDiv=document.createElement("div")
    let Pic=document.createElement("img")
    Pic.setAttribute("src","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313128.logo.png")
    let Teamname=document.createElement("div")
    Teamname.innerText="INDIA----------------148/6"
    
    let Div3=document.createElement("div")
    Div3.setAttribute("id","div3")
    let imgDiv2=document.createElement("div")
    let Pic2=document.createElement("img")
    Pic2.setAttribute("src","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313125.logo.png")
    let Teamname2=document.createElement("div")
    Teamname2.innerText="SA (18.2/20 ov, T:149) 149"
    
    let Div4=document.createElement("div")
    Div4.setAttribute("id","div4")
    Div4.innerText="South Africa won by 4 wickets "
    let line=document.createElement("hr")
    
    imgDiv2.append(Pic2)
    Div3.append(imgDiv2,Teamname2)
    imgDiv.append(Pic)
    Div2.append(imgDiv,Teamname)
    left_bottom.append(Div1,Div5,Div2,Div3,Div4,line)
    
    let left_last=document.createElement("div")
    left_last.setAttribute("id","div4")
    left_last.innerText="VIEW ALL RESULTS"
    
    document.querySelector("#leftpart").append(left_top,left_bottom,left_last)
    
    




    let a=document.querySelector("#button2")
    // console.log("hi2")
    a.style.backgroundColor="#03A9F4"
    a.style.color="white"
    let b=document.querySelector("#button1")
    b.style.backgroundColor="white"
    b.style.color="#03A9F4"
  }

// ****************players details**********

let bowlerobj=[
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304100/304194.png",
        name:"Bhuvneshwar Kuma rm",
        number:"6",
        inning:"Innings: 3 Average: 12.83",
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/309100/309102.png",
        name:"Harshal Patel rm",
        number:"6",
        inning:"Inning: 3 Average:14.16",
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/312100/312155.png",
        name:"Yuzvendra Chahal lbg",
        number:"4",
        inning:"Inning:3 Average:23.75",
    },
]
    
bowlerobj.forEach(function(elem){
    let playerdetails=document.createElement("div")
playerdetails.setAttribute("id","playerdetails")
// ***********player image part********
let playerimage=document.createElement("div")
playerimage.setAttribute("id","playerimage")
let image=document.createElement("img")
image.setAttribute("src",elem.image)
// // **********details**********
let details=document.createElement("div")
details.setAttribute("id","details")
let div1=document.createElement("div")
div1.innerText=elem.name;
let div2=document.createElement("div")
div2.innerText=elem.number
let div3=document.createElement("div")
div3.innerText=elem.inning


details.append(div1,div2,div3)
playerimage.append(image)
playerdetails.append(playerimage,details)
document.querySelector("#firstone").append(playerdetails)
})


let batmanobj=[
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/329300/329345.4.jpg",
        name:"Ishan Kishan lhb",
        number:"164",
        inning:"Innings: 3 Average: 54.66",
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/317900/317958.jpg",
        name:"Heinrich Klaasen rhb",
        number:"110",
        inning:"Inning: 3 Average:55.00",
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/309100/309198.1.jpg",
        name:"Shreyas Iyer rhb",
        number:"90",
        inning:"Inning:3 Average:30.00",
    },
]

    
batmanobj.forEach(function(elem){
    let playerdetails=document.createElement("div")
playerdetails.setAttribute("id","playerdetails")
// ***********player image part********
let playerimage=document.createElement("div")
playerimage.setAttribute("id","playerimage")
let image=document.createElement("img")
image.setAttribute("src",elem.image)
// // **********details**********
let details=document.createElement("div")
details.setAttribute("id","details")
let div1=document.createElement("div")
div1.innerText=elem.name;
let div2=document.createElement("div")
div2.innerText=elem.number
let div3=document.createElement("div")
div3.innerText=elem.inning


details.append(div1,div2,div3)
playerimage.append(image)
playerdetails.append(playerimage,details)
document.querySelector("#secondone").append(playerdetails)
})





















