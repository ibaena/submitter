$(document).ready(function() {

    let unwrapBtm = false;
    let unwrapTop = false;

    let removeClass = function() {
        $('#test-form').removeClass('animated flip');
    }

    $('#submit-form').on('click', function() {
        $('#test-form').addClass('animated flip');
        setTimeout(removeClass, 1000);
    })

    //Banner ad logic With tiomeout function

    $('#launch-wrappers').on('click', function() {

        $('.bottom-wrapper').addClass('animated  slideOutLeft');
        unwrapBtm = true;
        setTimeout(function() {
            $('.top-wrapper').addClass('animated  slideOutRight');
            unwrapTop = true;
        }, 400);

        // Fires off snippet for second image
        setTimeout(function(){
            if (unwrapBtm && unwrapTop === true){
                $('#bottom-media').addClass('animated slideOutLeft');


                // Fires bottom wrapper on second image
                setTimeout(function() {
                    $('#top-media').addClass('animated slideOutRight').animate({ width: '0', right: '-25%' }, 1500, 'swing');;


                }, 700)
            }
        }, 2000)

        // Fires off snippet for third image
        setTimeout(function(){
                $('#stetson-btm-wrapper').addClass('animated slideOutLeft');
                // Fires bottom wrapper on second image
                setTimeout(function() {
                    $('#stetson-top-wrapper').addClass('animated slideOutRight');

                }, 700)
        }, 4000)

        // Fires off snippet for fourth image
        setTimeout(function(){
                $('#addidas-btm-wrapper').addClass('animated slideOutLeft');
                // Fires bottom wrapper on second image
                setTimeout(function() {
                    $('#addidas-top-wrapper').addClass('animated slideOutRight');

                }, 700)
        }, 6000)

        // Fires off snippet for fifth image
        setTimeout(function(){
                $('#jovan-btm-wrapper').addClass('animated slideOutLeft');
                // Fires bottom wrapper on second image
                setTimeout(function() {
                    $('#jovan-top-wrapper').addClass('animated slideOutRight');

                }, 700)
        }, 8000)



    });

    //Conditional to test when wrappers have excuted



});
