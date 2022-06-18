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
