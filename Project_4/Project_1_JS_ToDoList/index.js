let result = document.getElementById("result").innerText;

$("ul").on('click', "li", function () {
    //if li is grey turn it black on clicking//ul will be involved when new todos are added and then when li inside ul will be clicked then the change will take place
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        $(this).css("color", "rgba(0, 0, 0, 0.65)");
        $(this).css("text-decoration", "none");

    }//else turn it grey with linethrough
    else {
        $(this).css({
            "color": "grey",
            "textDecoration": "line-through",
        });
    }

    // //or we can use $("li"),toggleClass("completed"); and in css we use in css .completed{
    //     color:grey;
    //     text-decoration:line-through;
    // }
});
$("ul").on('click', "span", function (event)//same as we have done before in ul and li on clicking as on will have effect on all the potential future elements as well.
{
    $(this).parent().fadeOut(500, function () {
        $(this).remove();//this will remove the element after fading out and call back function and display(none) property will be removed.after fadeout entire element is removed 
    });//now parent element will be removed that is li
    //this will make li to trigger also after span
    event.stopPropagation();// will stop propagating the li triggering in it that is showing it's effects 
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todo + "</li>");//adding the new li's at the end of the list by taking the html as input
    }

});

$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle();
});
// $("span").mouseover(function(){
//     $(this).css("width","40px");
// });
// $("span").mouseleave(function(){
//     $(this).css("width","0px");
// });