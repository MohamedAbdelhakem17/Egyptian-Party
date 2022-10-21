// ================= Navbar
$(".toggel").click(function () {
  if ($(".links").css("width") === "0px") {
    $(".links").animate({ width: "250px" });
    $(".toggel").html(`<i class="fa-regular fa-circle-xmark"></i>`);
  } else {
    $(".links").animate({ width: "0px" });
    $(".toggel").html(`<i class="fa-solid fa-bars"></i>`);
  }
});

$(".navbar .links li a").click(function () {
  $(".links").animate({ width: "0px" }, 500);
  $(".toggel").html(`<i class="fa-solid fa-bars"></i>`);
});

// ================= Details
$(document).ready(function () {
  $(".details .body:first").css({ display: "block" });
  $(".details .head").click(function () {
    $(this).next().slideToggle(500);
    $(".details .body").not($(this).next()).slideUp();
    500;
  });
});

// ================= countdown
let evevtDate = new Date("Dec 31, .2022 23:59:59").getTime();
let counter = setInterval(function () {
  let todayDate = new Date().getTime();
  let diff = evevtDate - todayDate;
  let day = Math.floor(diff / 1000 / 60 / 60 / 24);
  let hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  $("#day").html(day < 10 ? `0${day}` : day);
  $("#hour").html(hour < 10 ? `0${hour}` : hour);
  $("#minutes").html(minutes < 10 ? `0${minutes}` : minutes);
  $("#seconds").html(seconds < 10 ? `0${seconds}` : seconds);
  if (diff <= 0) {
    clearInterval(counter);
  }
}, 1000);
// ================= Contact
let count = 100;
$(".form textarea").keyup(function () {
  count--;
  $("#num").html(count);
  if (count === 0) {
    $(".form p").html("your available character finished");
    $(".form p").css({ color: "red" });
  }
});

// ================= Contact
$(".links a").click((e) => {
  let href = $(e.target).attr("href");
  let goToSection = $(href).offset().top;
  $("html,body").animate({ scrollTop: goToSection }, 1500);
});
