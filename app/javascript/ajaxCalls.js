"use strict"

function getTables(callback) {

  $.ajax({
    method: "GET",
    url: "/api/tables",
    dataType: "json"
  })
  .done(function(data) {
    callback(data)
  })
  .fail(function(error) {
    callback(data)
  });
}

function postTables(postData,callback) {

  $.ajax({
    method: "POST",
    url: "/api/tables",
    data: postData,
    dataType: "json"
  })
  .done(function(data){
    callback(data)
  })
  .fail(function(error) {
    callback(error);
  });
}

function getWaitlist(callback) {

  $.ajax({
    method: "GET",
    url: "/api/waitlist",
    dataType: "html"
  })
  .done(function(data) {
    callback();
  })
  .fail(function(error) {
    callback();
  });
}
