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
                $('#bottom-media').addClass('animated slideOutLeft soft-hide');

                // Fires bottom wrapper on second image
                setTimeout(function() {
                    $('#top-media').addClass('animated slideOutRight soft-hide');

                }, 700)
            }
        }, 2000)


    });

    //Conditional to test when wrappers have excuted



});
