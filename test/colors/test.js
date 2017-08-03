$(document).ready(function() {
    $('.left.square').click(function(event) {
        var $label1 = $('.color.content > label:nth-child(1)');
        $('body').append($label1);
        $label1.val($());
    });
});
