$(document).ready(function() {
    $.getJSON('/test/colors/color.json', function(colors, textStatus) {
        var swatches = "";
        for (let prop in colors) {
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
    });
});
