$(document).ready(function() {
  $("form#petform").submit(function(event) {
    var pettype = $("input#pettype").val();
    var petname = $("input#petname").val();
    var toys = $("select#toys").val();
    var food = $("select#food").val();
    var name = $("input#name").val();
    var address = $("input#address").val();


    $(".toys").text(toys);
    $(".food").text(food);
    $(".pettype").text(pettype);
    $(".petname").text(petname);
    $(".name").text(name);

    $("#receipt").show();

    event.preventDefault();
  });
});
