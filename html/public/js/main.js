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

    $('#reset-wrappers').on('click', function() {
        location.reload();
    });

    //Banner ad logic With tiomeout function

    $('#launch-wrappers').on('click', function() {


        $('.bottom-wrapper').addClass('animated  slideOutLeft');
        unwrapBtm = true;
        setTimeout(function() {
            $('.top-wrapper').addClass('animated  slideOutRight');
            unwrapTop = true;
        }, 700);

        // Fires off snippet for second image
        setTimeout(function() {
            $('#btm-roller').hide();
            if (unwrapBtm && unwrapTop === true) {
                $('#bottom-media').addClass('animated slideOutLeft');
                $('#btm-roller').show().addClass('animated slideOutLeft');
                $('#btm-roller-img').addClass('slideLeft');

                // Fires bottom wrapper on second image
                setTimeout(function() {
                    $('#btm-roller').hide();

                    $('#top-media').addClass('animated slideOutRight');
                    $('#top-roller').show().addClass('animated slideOutRight');
                    $('#top-roller-img').addClass('slideRight');


                }, 700)
                $('#top-roller').hide();
            }
        }, 2000)

        // Fires off snippet for third image
        setTimeout(function() {
            $('#stetson-btm-wrapper').addClass('animated slideOutLeft');
            $('#btm-roller').show().addClass('animated slideOutLeft');
            $('#btm-roller-img').addClass('slideLeft');
            // Fires bottom wrapper on second image
            setTimeout(function() {
                $('#btm-roller').hide();

                $('#stetson-top-wrapper').addClass('animated slideOutRight');
                $('#top-roller').show().addClass('animated slideOutRight');
                $('#top-roller-img').addClass('slideRight');

            }, 700)
            $('#top-roller').hide();
        }, 4000)

        // Fires off snippet for fourth image
        setTimeout(function() {
            $('#addidas-btm-wrapper').addClass('animated slideOutLeft');
            $('#btm-roller').show().addClass('animated slideOutLeft');
            $('#btm-roller-img').addClass('slideLeft');
            // Fires bottom wrapper on second image
            setTimeout(function() {
                $('#btm-roller').hide();

                $('#addidas-top-wrapper').addClass('animated slideOutRight');
                $('#top-roller').show().addClass('animated slideOutRight');
                $('#top-roller-img').addClass('slideRight');

            }, 700)
            $('#top-roller').hide();
        }, 6000)

        // Fires off snippet for fifth image
        setTimeout(function() {
            $('#jovan-btm-wrapper').addClass('animated slideOutLeft');
            $('#btm-roller').show().addClass('animated slideOutLeft');
            $('#btm-roller-img').addClass('slideLeft');
            // Fires bottom wrapper on second image
            setTimeout(function() {
                $('#btm-roller').hide();

                $('#jovan-top-wrapper').addClass('animated slideOutRight');
                $('#top-roller').show().addClass('animated slideOutRight');
                $('#top-roller-img').addClass('slideRight');

            }, 700)
            $('#top-roller').hide();
        }, 8000)

        // Fires off snippet for fifth image
        setTimeout(function() {
            $('#final-wrapper').addClass('animateds slideOutLeft');
            // Fires bottom wrapper on second image
            setTimeout(function() {
                $('#tag-wrapper').addClass('animateds slideInRight');

            }, 0)
        }, 10000)



    });

    //Conditional to test when wrappers have excuted



});
