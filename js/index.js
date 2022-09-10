$(document).ready(function () {
  generate();
  $(".number").click(function () {
    $(this).toggleClass("click");
  });
});

function generate() {
  let numbers = [];
  $("#numbers").html("");

  for (let i = 0; i < 6; i++) {
    number = Math.floor(Math.random() * 101);
    while (numbers.includes(number)) {
      number = Math.floor(Math.random() * 101);
    }

    numbers.push(number);

    $("#numbers").append(`<div class="number">${number}</div>`);
  }
}
