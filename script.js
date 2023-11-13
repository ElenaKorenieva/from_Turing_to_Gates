$("document").ready(function () {
  $(".img-toogle").click(function () {
    const currentAttr = $(this).attr("src");
    const altSrcAttr = $(this).attr("alt-src");

    $(this).attr("src", altSrcAttr);
    $(this).attr("alt-src", currentAttr);
  });
});
