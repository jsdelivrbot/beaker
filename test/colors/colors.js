$(document).ready(function() {
    $.getJSON('/test/colors/color.json', function(colors, textStatus) {
        var swatches = "";
        for (let prop in colors) {
            swatches += '<h1>' + prop + '</h1>'
            swatches += '<div class"swatches">';
            for (let color in colors[prop]) {
                var hex = colors[prop][color];
                swatches += '<div class="'+ color + ' swatch">' +
                                '<span>' + hex + '</span>' +
                                '<span>' + color + '</span>' +
                            '</div>';
            }
            swatches += '</div>';
        }
        $('body').append(swatches);

        // Small hack for displaying things nicely
        $('.off-white > span').addClass('inverted');


        // This gets the text I want
        $('.deep-blue span:first-child').text();

        // Refer here:
        //   https://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery
    });
});
