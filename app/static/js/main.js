$(document).ready(function () {
  $("#txt").css("color","red")
  /*
  $("#but").on("click",function () {
  alert("hello ")
})
*/
$("#but").click(function () {
  $("#txt").text("hai")
  //css("background","blue")
})
$("#img").click(function (){
  /*
  $(this).css({
    "border-radius": "50px",
  })
  */
  $(this).animate({
    "border-radius": "50px",
  })
})

})