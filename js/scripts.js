// function Pizza(size, toppings) {
//   this.pizzaSize = size;
//   this.pizzaToppings = toppings;
// }
//
// Pizza.prototype.pizzaReady = function() {
//   return this.pizzaSize + " " + this.pizzaToppings;
// }
//
// Pizza.prototype.pizzaCost = function() {
//   return this.pizzaCost;
// }
//
// window.onload = function() {
//   document.getElementById("LearnMoreBtn").onclick = function(){
//         var overlay = document.getElementById("overlay");
//         var popup = document.getElementById("popup");
//         overlay.style.display = "block";
//         popup.style.display = "block";
//     };
//
//   document.getElementById("CloseBtn").onclick = function(){
//         var overlay = document.getElementById("overlay");
//         var popup = document.getElementById("popup");
//         overlay.style.display = "none";
//         popup.style.display = "none";
//   }
// };

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    


    $("#receipt").show();

    event.preventDefault();
  });
});
