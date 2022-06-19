document.querySelector("#button1").addEventListener("click", fun1);
function fun1() {
  let x = document.querySelector("#button1");
  // console.log("hi1")
  x.style.backgroundColor = "#03A9F4";
  x.style.color = "white";
  let y = document.querySelector("#button2");
  y.style.backgroundColor = "white";
  y.style.color = "#03A9F4";
}
document.querySelector("#button2").addEventListener("click", fun2);
function fun2() {
  let a = document.querySelector("#button2");
  // console.log("hi2")
  a.style.backgroundColor = "#03A9F4";
  a.style.color = "white";
  let b = document.querySelector("#button1");
  b.style.backgroundColor = "white";
  b.style.color = "#03A9F4";
}

// ****************players details**********

let bowlerobj = [
  {
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304100/304194.png",
    name: "Bhuvneshwar Kuma rm",
    number: "6",
    inning: "Innings: 3 Average: 12.83",
  },
  {
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/309100/309102.png",
    name: "Harshal Patel rm",
    number: "6",
    inning: "Inning: 3 Average:14.16",
  },
  {
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/312100/312155.png",
    name: "Yuzvendra Chahal lbg",
    number: "4",
    inning: "Inning:3 Average:23.75",
  },
];

bowlerobj.forEach(function (elem) {
  let playerdetails = document.createElement("div");
  playerdetails.setAttribute("id", "playerdetails");
  // ***********player image part********
  let playerimage = document.createElement("div");
  playerimage.setAttribute("id", "playerimage");
  let image = document.createElement("img");
  image.setAttribute("src", elem.image);
  // // **********details**********
  let details = document.createElement("div");
  details.setAttribute("id", "details");
  let div1 = document.createElement("div");
  div1.innerText = elem.name;
  let div2 = document.createElement("div");
  div2.innerText = elem.number;
  let div3 = document.createElement("div");
  div3.innerText = elem.inning;

  details.append(div1, div2, div3);
  playerimage.append(image);
  playerdetails.append(playerimage, details);
  document.querySelector("#firstone").append(playerdetails);
});

let batmanobj = [
  {
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/329300/329345.4.jpg",
    name: "Ishan Kishan lhb",
    number: "164",
    inning: "Innings: 3 Average: 54.66",
  },
  {
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/317900/317958.jpg",
    name: "Heinrich Klaasen rhb",
    number: "110",
    inning: "Inning: 3 Average:55.00",
  },
  {
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/309100/309198.1.jpg",
    name: "Shreyas Iyer rhb",
    number: "90",
    inning: "Inning:3 Average:30.00",
  },
];

batmanobj.forEach(function (elem) {
  let playerdetails = document.createElement("div");
  playerdetails.setAttribute("id", "playerdetails");
  // ***********player image part********
  let playerimage = document.createElement("div");
  playerimage.setAttribute("id", "playerimage");
  let image = document.createElement("img");
  image.setAttribute("src", elem.image);
  // // **********details**********
  let details = document.createElement("div");
  details.setAttribute("id", "details");
  let div1 = document.createElement("div");
  div1.innerText = elem.name;
  let div2 = document.createElement("div");
  div2.innerText = elem.number;
  let div3 = document.createElement("div");
  div3.innerText = elem.inning;

  details.append(div1, div2, div3);
  playerimage.append(image);
  playerdetails.append(playerimage, details);
  document.querySelector("#secondone").append(playerdetails);
});
