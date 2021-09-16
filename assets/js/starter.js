// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { CountUp } from '../../assets/js/countUp.min.js';
// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

// import "../../node_modules/bootstrap/js/dist/util.js";
// import "../../node_modules/bootstrap/js/dist/modal.js";


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
  })


  //countUp
  const options = {
    startVal: 2712413369.62,
    decimalPlaces: 2,
  };
  let demo = new CountUp('countElement', 2712913369.62, options);
  if (!demo.error) {
    demo.start();
  } else {
    console.error(demo.error);
  }


  //datatables

  // $('#example').DataTable( {
  //   "paging":   false,
  //   "info":     false,
  //   "dom": '<"toolbar">frtip'
  // } );

  // $("div.toolbar").html('<b>Custom tool bar! Text/images etc.</b>');


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

  // #myInput is a <input type="text"> element
  $('#myInput').on( 'keyup', function () {
    table.search( this.value ).draw();
  } );

  $(".column2_search").click(function () {
    table.column(5)
      .search($(this).val())
      .draw();
  });

  $(".usdt-filter").click(function () {
    table.column(4)
      .search($(this).val())
      .draw();
  });

  $('a.buttonChange').click(function () {
    $('button', this).toggle();
  });

  // $('table').dataTable({dom: 'lrt'});


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




});
