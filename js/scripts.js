var factoral = function(userNumber) {
  var counter = 1;
  var start = 1;
  while (counter <= userNumber) {
    start = start * counter;
    counter = counter + 1;
  }

  // a second solution://///////////////////////////
  // var list = [];
  // for (var i = 1; i <= userNumber; i++) {
  //   list.push(i);
  // }
  // list.forEach(function(number) {
  //   start = start * number;
  // });

  return start;
}

$(document).ready(function() {
  $("form#factoral").submit(function(event) {
    var user_number_form = $("input#user_number").val();
    var result = factoral(user_number_form);
    $(".result").append("<li>" + String(result) + "</li>");

    event.preventDefault();
  });
});
