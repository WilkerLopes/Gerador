$(document).ready(function () {
  generate();
  $(".number").click(function () {
    $(this).toggleClass("click");
  });
});

function generate() {
  $("#numbers").html("");
  for (let i = 0; i < 10; i++) {
    $("#numbers").append(`<div class="number">${Math.floor(Math.random() * 101)}</div>`);
  }
}
