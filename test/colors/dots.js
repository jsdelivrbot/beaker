$(document).ready(function() {
    $.getJSON('/test/colors/color.json', function(colors, textStatus) {
        var swatches = "";
        for (let prop in colors) {
            swatches += '<h1 class="enhanced header">' + prop + '</h1>' +
                        // '<hr />' +
                        '<div class"swatches">';
            for (let color in colors[prop]) {
                var hex = colors[prop][color];
                swatches += '<div class="'+ color + ' dot">' +
                                '<span>' + hex + '</span>' +
                                '<span>' + color + '</span>' +
                            '</div>';
            }
            swatches += '</div>';
        }
        $('body').append(swatches);

        // Small hack for displaying things nicely
        $('.off-white > span, .lightest-gray > span').addClass('inverted');


        // This gets the text I want
        $('.deep-blue span:first-child').text();

        // Refer here:
        //   https://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery

    });
});
