$(document).ready(function() {
  getTables();
});


function viewTables() {
  getTables(function(res) {
    $("#viewTables").click(function(){
      for (var i = 0; i < res.length; i++) {
        $(“.reservations”).append(“<div class= \“reservationList\“>” + “<p>” + res[i].name + “</p>” + “</div>“);
    });
});
}

function makeReservation() {
  $("#subReservation".click(function(){
      var name = $("#name").val();
      var number = $("#number").val();
      var email = $("#email").val();
      var uniqueID = $("#uniqueID").val();
      postTables({"name":name, "number":number, "email":email, "uniqueID":uniqueID}, function(data){
        console.log("whats up");
    });
  });
}
