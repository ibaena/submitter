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

        // Fires off snippet for second image (Nautica)
        setTimeout(function() {
            $('#btm-roller').hide();
            if (unwrapBtm && unwrapTop === true) {
                $('#bottom-media').animate({width:'0%'},750);
                $('#nautica-img-btm').fadeOut('700').attr('src', '../public/assets/4way/banner-bg-bottom.png');
                // $('.unwrap-img-left').attr('src', '../public/assets/4way/banner-bg-bottom.png');


                $('#btm-roller').show().addClass('animated slideOutLeft');
                $('#btm-roller-img').addClass('slideLeft');

                // Fires bottom wrapper on second image
                setTimeout(function() {
                    $('#btm-roller').hide();

                    $('#top-media').addClass('animated slideOutRight');
                    // $('.unwrap-img-right').attr('src', '../public/assets/4way/banner-bg-top.png');
                    $('#nautica-img-top').fadeOut('700').attr('src', '../public/assets/4way/banner-bg-top.png');
                    $('#top-roller').show().addClass('animated slideOutRight');
                    $('#top-roller-img').addClass('slideRight');


                }, 700)
                $('#top-roller').hide();
            }
        }, 2000)

        // Fires off snippet for third image (Stetson)
        setTimeout(function() {
            $('#stetson-btm-wrapper').animate({width:'0%'},750);
            $('.stetson-unwrap-img-left').attr('src', '../public/assets/4way/banner-bg-bottom.png');
            $('#stetson-img-btm').fadeOut('700');
            $('#btm-roller').show().addClass('animated slideOutLeft');
            $('#btm-roller-img').addClass('slideLeft');
            
            // Fires bottom wrapper on second image
            setTimeout(function() {
                $('#btm-roller').hide();

                $('#stetson-top-wrapper').addClass('animated slideOutRight');
                $('.stetson-unwrap-img-right').attr('src', '../public/assets/4way/banner-bg-top.png');
                $('#stetson-img-top').fadeOut('700');
                $('#top-roller').show().addClass('animated slideOutRight');
                $('#top-roller-img').addClass('slideRight');

            }, 700)
            $('#top-roller').hide();
        }, 4000)

        // Fires off snippet for fourth image (Adidas)
        setTimeout(function() {
            $('#addidas-btm-wrapper').animate({width:'0%'},500);
            $('#addidas-img-btm').fadeOut('1000');
            $('#btm-roller').show().addClass('animated slideOutLeft');
            $('#btm-roller-img').addClass('slideLeft');
            // Fires bottom wrapper on second image
            setTimeout(function() {
                $('#btm-roller').hide();

                $('#addidas-top-wrapper').addClass('animated slideOutRight');
                $('#addidas-img-top').fadeOut('1000');
                $('#top-roller').show().addClass('animated slideOutRight');
                $('#top-roller-img').addClass('slideRight');

            }, 700)
            $('#top-roller').hide();
        }, 6000)

        // Fires off snippet for fifth image (Jovan)
        setTimeout(function() {
            $('#jovan-btm-wrapper').animate({width:'0%'},500);
            $('#jovan-img-btm').fadeOut('1000');
            $('#btm-roller').show().addClass('animated slideOutLeft');
            $('#btm-roller-img').addClass('slideLeft');
            // Fires bottom wrapper on second image
            setTimeout(function() {
                $('#btm-roller').hide();

                $('#jovan-top-wrapper').addClass('animated slideOutRight');
                $('#jovan-img-top').fadeOut('1000');
                $('#top-roller').show().addClass('animated slideOutRight');
                $('#top-roller-img').addClass('slideRight');

            }, 700)
            $('#top-roller').hide();
        }, 8000)

        // Fires off snippet for fifth image (3 Gift Sets)
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
