$(function(){
    $(".on").on("click", function() {
        $(".bulb-yellow").toggleClass("yellow");
        $(".bulb-blue").toggleClass("blue");
        $(".bulb-red").toggleClass("red");
        $(".bulb-green").toggleClass("green");
        $(".bulb-purple").toggleClass("purple");
        $(".neon").toggleClass("glow");
        $(".on").toggleClass("off");
        $(".overlay").toggleClass("overlay-open");
    });
}); 
