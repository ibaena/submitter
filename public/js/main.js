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
        console.log(unwrapBtm);
        setTimeout(function() {
            $('.top-wrapper').addClass('animated  slideOutRight');
            unwrapTop = true;
            console.log(unwrapTop);
        }, 1050)

        setTimeout(function(){
            if (unwrapBtm && unwrapTop === true){
                $('.unwrap-img-left').addClass('animated slideOutLeft soft-hide');
                $('#stetson-btm-wrapper').removeClass('hidden').addClass('btm-wrapper');

                setTimeout(function() {
                    $('.unwrap-img-right').addClass('animated slideOutRight soft-hide');
                    $('#stetson-top-wrapper').removeClass('hidden');
                }, 1000)
            }
        },2000)


    });

    //Conditional to test when wrappers have excuted



});
