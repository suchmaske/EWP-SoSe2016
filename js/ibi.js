var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });
}

$(function () {


    $(".Code--html").each(function() {
        var innerHtml = $(this).html();

        $(this).html(escapeHtml(innerHtml));
    });



});