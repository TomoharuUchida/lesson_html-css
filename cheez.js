$(function () {
    $(".js-sub-img img").on("click", function () {
        img = $(this).attr("src");
        $(".js-main-img img").fadeOut(200, function () {
            $(".js-main-img img")
                .attr("src", img)
                .on("load", function () {
                    $(this).fadeIn(200);
                });
        });
    });
});