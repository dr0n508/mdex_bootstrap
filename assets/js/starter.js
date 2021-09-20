// Importing JavaScript
//

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

$(document).ready(function() {

  //countdown
  function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    var endTime = new Date("29 October 2021 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);

  }

  setInterval(function() { makeTimer(); }, 1000);

  //tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  // animation changing numbers
  var options = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: "."
  };

  var countNumber = $(".count-number");

// For each countNumber we find, animate it
  countNumber.each(function(index) {
    // Find the value we want to animate (what lives inside the p tags)
    var value = $(countNumber[index]).html();
    // Start animating
    var countNumberAnimation = new CountUp(countNumber[index], 0, value, 2, 2, options);
    countNumberAnimation.start();
  });

  //dropdown
  $(".bet-info").on("click", function(e) {

    $(this).find(".dropdown-menu").toggleClass("show");

  });

  //close modal after clicked token
  $(".list-dropdown").on("click", function() {

    $("#assetModal").modal('hide');

  });

  //click transaction history
  $("#transaction_history").on("click", function(e) {

    e.preventDefault();

    $('#main_bridge_window').css({'display' : 'none'});
    $('#transaction_history_window').css({'display' : 'block'});

  });

  $("#back_bridge_window").on("click", function(e) {

    e.preventDefault();

    $('#main_bridge_window').css({'display' : 'block'});
    $('#transaction_history_window').css({'display' : 'none'});

  });

  //active for filter table
  $('.sele-item .se-item-name').click(function() {
    $(this).siblings('.se-item-name').removeClass('active');
    $(this).addClass('active');
  });

  //filtration-sorting table
  var table = $('#example').DataTable(
    {
      "paging":   false,
      "info":     false,
      responsive: true,
      columnDefs: [
        { orderable: false, targets: 0 },
        { orderable: true, targets: 1 },
        { orderable: true, targets: 2 },
        { orderable: true, targets: 3 },
        { orderable: true, targets: 4 },
        { orderable: true, targets: 5 },
        { orderable: false, targets: 6 }
      ]
    }
  );

  $('#searchTable').on( 'keyup', function () {
    table.search( this.value ).draw();
  } );

  $(".all-filter").click(function () {
    table.column(0)
      .search("")
      .draw();
  });

  $(".usdt-filter").click(function () {
    table.column(0)
      .search($(this).val())
      .draw();
  });

  $(".eth-filter").click(function () {
    table.column(0)
      .search($(this).val())
      .draw();
  });

  $(".mdx-filter").click(function () {
    table.column(0)
      .search($(this).val())
      .draw();
  });

  $(".ht-filter").click(function () {
    table.column(0)
      .search($(this).val())
      .draw();
  });

  $(".husd-filter").click(function () {
    table.column(0)
      .search($(this).val())
      .draw();
  });

  $("#customCheck1").click(function () {

    if ( $(this).is(":checked") ) {

      table.column(4)
        .search($(this).val())
        .draw();

    }
    else {
      table.column(4)
        .search("")
        .draw();
    }

  });

  $("#customSwitch1").click(function () {

    $("#customSwitch1 ~ .custom-control-label").text(function(i, text){
        return text === "Processing" ? "Over" : "Processing";
      });

    if ( $(this).is(":checked") ) {

      table.column(4)
        .search($(this).val())
        .draw();

    }
    else {
      table.column(4)
        .search("")
        .draw();
    }

  });

});
