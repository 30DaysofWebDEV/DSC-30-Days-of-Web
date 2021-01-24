window.onload = (event) => {
    console.log('page is fully loaded');
  };
(function ($) {
    $.fn.script = function (order, fn) {
        const sv = "script-";
        if (order == "load") {
            $(this).each(function () {
                if ($(this).is(":radio")) {
                    if (localStorage.getItem(sv + $(this).attr("name"))) {
                        if (localStorage.getItem(sv + $(this).attr("name")) == this.id) {
                            this.checked = true;
                        } else {
                            this.checked = false
                        }
                    }
                    $(this).change(function () {
                        localStorage.setItem(sv + $(this).attr("name"), this.id);
                    });
                } else if ($(this).is(":checkbox")) {
                    if (localStorage.getItem(sv + this.id)) {
                        this.checked = (localStorage.getItem(sv + this.id) == "1" ? true : false);
                    }
                    $(this).change(function () {
                        localStorage.setItem(sv + this.id, (this.checked ? "1" : "0"));
                    });
                } else if ($(this).is("input") || $(this).is("textarea")) {
                    if (localStorage.getItem(sv + this.id)) {
                        this.value = localStorage.getItem(sv + this.id);
                    }
                    $(this).on('focus', function () {
                        var intervalDuration = 500,
                            interval = setInterval(() => {
                                localStorage.setItem(sv + this.id, this.value);
                                if (!$(this).is(":focus")) clearInterval(interval);
                            }, intervalDuration);
                    });
                } else if ($(this).is("select")) {
                    if ($(this).is("[multiple]")) {
                        if (localStorage.getItem(sv + this.id)) {
                            $(this).val(localStorage.getItem(sv + this.id).split(","));
                        } else {
                            localStorage.setItem(sv + this.id, $(this).val());
                        }
                        $(this).change(function () {
                            localStorage.setItem(sv + this.id, $(this).val());
                        });
                    } else {
                        if (localStorage.getItem(sv + this.id)) {
                            $(this).val(localStorage.getItem("script-" + this.id));
                        } else {
                            localStorage.setItem(sv + this.id, $(this).val());
                        }
                        $(this).change(function () {
                            localStorage.setItem(sv + this.id, $(this).val());
                        });
                    }
                }
            });
            if ($.isFunction(fn)) { fn(); }
        } else if (order == "destroy") {
            $(this).each(function () {
                if (localStorage.getItem(sv + this.id)) {
                    localStorage.removeItem(sv + this.id)
                }
            });
            if ($.isFunction(fn)) { fn(); }
        } else {
            console.error("script action not defined please use $('.classname').script('load') to trigger script to save all inputs")
        }
    };
})(jQuery); 