"use strict"

function getTables(callBack) {

  $.ajax({
    method: "GET",
    url: "/api/tables",
    dataType: "json"
  })
  .done(function(data) {
    if(callBack) callBack(data);
  })
  .fail(function(error) {
    if(callBack) callBack(data);
  });
}

function postTables(postData,callBack) {

  $.ajax({
    method: "POST",
    url: "/api/tables",
    data: postData,
    dataType: "json"
  })
  .done(function(data){
    callBack(data);
  })
  .fail(function(error) {
    callBack(error);
  });
}

function getWaitlist(callBack) {

  $.ajax({
    method: "GET",
    url: "/api/waitlist",
    dataType: "html"
  })
  .done(function(data) {
    callBack(data);
  })
  .fail(function(error) {
    callBack(error);
  });
}
