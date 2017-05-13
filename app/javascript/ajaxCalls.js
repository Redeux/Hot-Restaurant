"use strict"
function getTables() {

  $.ajax({
    method: "GET",
    url: "/api/tables",
    dataType: "json"
  })
  .done(function(data) {

  })
  .fail(function(error) {

  });
}

function getTables() {

  $.ajax({
    method: "GET",
    url: "/api/waitlist",
    dataType: "json"
  })
  .done(function(data) {

  })
  .fail(function(error) {

  });
}

function getTables(postData) {

  $.ajax({
    method: "POST",
    url: "/api/waitlist",
    data: postData
    dataType: "json"
  })
  .fail(function(error) {
    throw error;
  });
}
