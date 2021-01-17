(function($) {
  $.fn.savy = function(order,fn) {
    const sv = "savy-";
  if (order == "load") 
  (this).each(function() {
     if ($(this).is(":radio")) {
     if(localStorage.getItem(sv+$(this).attr("name")))
    if (localStorage.getItem(sv+$(this).attr("name")) == this.id) {
      this.checked = true
      }else{
            this.checked = false
            }
          }
          $(this).change(function() {
            localStorage.setItem(sv+$(this).attr("name"), this.id);
          });
        }else if($(this).is(":checkbox")){
          if(localStorage.getItem(sv+this.id)){
            this.checked = (localStorage.getItem(sv+this.id) == "1" ? true : false);
          }
          $(this).change(function() {
            localStorage.setItem(sv+this.id, (this.checked ? "1" : "0"));
          });
        }else if($(this).is("input") || $(this).is("textarea")) {
          if(localStorage.getItem(sv+this.id)){
            this.value = localStorage.getItem(sv+this.id);
          }
          $(this).on( 'focus', function(){
            var intervalDuration = 500,
                interval = setInterval( () => {
                  localStorage.setItem(sv+this.id, this.value);
                  if(!$(this).is(":focus")) clearInterval(interval);  
                }, intervalDuration );
          } );
        }
      if ($.isFunction(fn)){fn();}
    }else if (order == "destroy") {
      $(this).each(function() {
        if(localStorage.getItem(sv+this.id)){
          localStorage.removeItem(sv+this.id)
        }
      });
      if ($.isFunction(fn)){fn();}
    }else{
      console.error("savy action not defined please use $('.classname').savy('load') to trigger savy to save all inputs")
    }
  };
})(jQuery);
