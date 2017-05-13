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

function getWaitList() {

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

function postTables(postData) {

  $.ajax({
    method: "POST",
    url: "/api/waitlist",
    data: postData,
    dataType: "json"
  })
  .fail(function(error) {
    throw error;
  });
}

function getTables() {

  $.ajax({
    method: "GET",
    url: "/",
    dataType: "html"
  })
  .done(function(data) {

  })
  .fail(function(error) {

  });
}
