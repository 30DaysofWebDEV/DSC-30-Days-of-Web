$('#navigation a').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
  
  
  $('.toggler, .nav-content a:not(#dropdown-link)').on('click', function(){
    $('.toggler').toggleClass('change');
    $('.nav-content').slideToggle();
    $('#dropdown-menu').slideUp();
    $('.menu-overlay').toggle();
  });
  
  $('.nav-content .dropdown').on('click', function(){
    $('#dropdown-menu').slideToggle();
  });
  
  $('.menu-overlay').on('click', function(){
    $('.toggler').removeClass('change');
    $('.nav-content').slideUp();
    $('#dropdown-menu').slideUp();
    $('.menu-overlay').hide();
  });
  
  $("#contact input, #contact textarea").on('focusout', function(){
  
    var text_val = $(this).val();
    if (text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  
  });