let i = 0;
$(".add").click(function () {
  i++;
  $("nav span").text(`${i}`);
  $("nav span").css("background-color", "#b61b1b");
});
