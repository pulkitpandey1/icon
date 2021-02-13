$(".icon-image").each(function (idx, itm) {
  var categoryID = $(this).parent().parent().parent().attr("data-title");
  var href = $(this).attr("src");
  if (href !== "") {
    $(itm).attr("src", categoryIcons[categoryID]);
    $(itm).parent().removeClass("hide");
    $(itm).next().addClass("hide");
  }
});
