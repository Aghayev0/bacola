const selectBox = document.getElementById("location")
const selectBox2 = document.getElementById("location1")
selectBox.onclick = () =>{
    // modal.style.display = "block";
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
selectBox.onclick = function() {
  modal.style.display = "block";
}
selectBox2.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const hamburger = document.getElementById("hamburger")
var modal1 = document.getElementById("myModal1");
var span = document.getElementsByClassName("close")[1];
hamburger.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const modalCategories = document.getElementById("modalcategories")
const catBtn = document.getElementById("categoriesButton")
catBtn.onclick = () =>{
  if (modalCategories.style.display  === "none") {
    modalCategories.style.display  = "block";
  } else {
    modalCategories.style.display = "none";
  }
}
const lanText = document.getElementById("lantext")
const lanDrop = document.getElementById("lan")
lanDrop.onclick = () =>{
  const i = document.getElementById("cevron")
  if (lanText.style.display  === "none") {
    lanText.style.display  = "block";
    i.style.rotate = "180deg"
    i.style.marginBottom = "1.3rem"
  } else {
    lanText.style.display = "none";
    i.style.rotate = "0deg"
    i.style.marginBottom = "0"
  }
}
const lanText1 = document.getElementById("lantext1")
const lanDrop1 = document.getElementById("lan1")
lanDrop1.onclick = () =>{
  const i1 = document.getElementById("cevron1")
  if (lanText1.style.display  === "none") {
    lanText1.style.display  = "block";
    i1.style.rotate = "180deg"
    i1.style.marginBottom = "1.3rem"
  } else {
    lanText1.style.display = "none";
    i1.style.rotate = "0deg"
    i1.style.marginBottom = "0"
  }
}
const categBtn = document.getElementById("cbtn")
const cShow = document.getElementById("categshow")
categBtn.onclick = () =>{
  if (cShow.style.opacity  === "1") {
    cShow.style.opacity = "0";
  } else {
    cShow.style.opacity  = "1";
  }
}
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})



// Set the date we're counting down to
var countDownDate = new Date("Feb 13, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
  document.getElementById("timer1").innerHTML = days ;
  document.getElementById("timer2").innerHTML = hours;
  document.getElementById("timer3").innerHTML = minutes;
  document.getElementById("timer4").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
