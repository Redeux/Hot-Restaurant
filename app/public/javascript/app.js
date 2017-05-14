$(document).ready(function() {
  $(".viewTablesHide").hide();
  makeReservation();
  viewTables();

});


function viewTables() {

  $("#viewTables").click(function(){
    $(".viewTablesHide").show();
    getTables(function(results) {
      for(result in results) {
        $("#reservation").append("<div class='well' id='tableWell-'"+ result +"><h2><span class='label label-primary'>"+result+"</span> | "+results[result].partyName+"</h2></div>")
      }
    });
  });
}

function makeReservation() {
  $("#subReservation").click(function(){
      var name = $("#name").val();
      var number = $("#number").val();
      var email = $("#email").val();
      var uniqueID = $("#uniqueID").val();
      postTables({"partyName":name, "number":number, "email":email, "id":uniqueID}, function(data){
        console.log("we hit this");
        var name = $("#name").val("");
        var number = $("#number").val("");
        var email = $("#email").val("");
        var uniqueID = $("#uniqueID").val("");
    });
  });
}
