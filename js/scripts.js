// Business Logic


//pizza maker

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price;
}

Pizza.prototype.pizzaPrice = function() {
  this.price = 14;
    if (this.size === 'small') {
    this.price -= 4;
  } else if (this.size === 'large') {
    this.price += 4;
  }

  for (var i = 0; i < this.toppings.length; i++) {
    this.price += 3;
  }
}

Pizza.prototype.lineItem = function() {
  return "A " + this.size +  " pizza: $" + this.price;
}

// User Interface Logic

//delivery information popup

window.onload = function() {
  document.getElementById("LearnMoreBtn").onclick = function(){
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.style.display = "block";
    popup.style.display = "block";
  };

  document.getElementById("CloseBtn").onclick = function(){
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.style.display = "none";
    popup.style.display = "none";
  }
};

$(document).ready(function() {
  $('#order-form').submit(function(event) {
    event.preventDefault();

    var size = $('input[name=size]:checked').val();
    var toppings = $('input:checkbox[name=toppings]:checked').map(function() {
        return this.value;
      }).get();
    var newPizza = new Pizza(size, toppings);
    newPizza.pizzaPrice();
    $('#pizza-list').append('<li><span class="pizza">' + newPizza.lineItem() + '</span></li>');


    $(".pizza").last().click(function() {
      $('#orderConfirmation').show();
      $('#orderConfirmation h4').text(newPizza.lineItem());
      $('#toppings').text(newPizza.toppings.join(", "));
    });
  });


});
