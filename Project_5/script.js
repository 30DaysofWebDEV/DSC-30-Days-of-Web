setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 1500);
window.addEventListener("load", () => {
  const params = new URL(document.location).searchParams;
  const name = params.get("Name");
  const email = params.get("Email");
  const project = params.get("Project-desc");

  document.getElementById("result-name").innerHTML = name;
  document.getElementById("result-email").innerHTML = email;
  document.getElementById("result-proj").innerHTML = project;
});
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 50) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 200) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  //slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //toggle menu/navbar scripts

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //typed script
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Gamer", "Designer"],
    typeSpeed: 50,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Gamer", "Designer"],
    typeSpeed: 50,
    backSpeed: 60,
    loop: true,
  });
});
