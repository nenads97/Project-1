function imgTitleDissapear() {
    var $cardTitle = $('.card-type2-img-title');
    var hide = 'img-title-hide';
    var $cardImg = $('.card-type2-img');
    $($cardImg).on('mouseover', function () {
        $(this).find($cardTitle).addClass(hide);
    })

    $($cardImg).on('mouseleave', function () {
        var $pom = $(this).find($cardTitle);
        $pom.removeClass(hide);
        $pom.addClass('.img-title-show');
    })
}

function nav() {
    var $toggle = $('.js-toggle');
    var open = 'toggle-open';
    var $nav = $('.js-nav');

    $toggle.on('click', function () {
        if ($toggle.hasClass(open)) {  //hasClass - metoda za proveru postojanja klase
            $toggle.removeClass(open);
            $nav.stop().slideUp(function () {   //ovako pozivamo callback funkciju koja se izvrsava nakon sto prva zavrsi (u ovom slucaju nakon sto se uvuce navigacija).
                $nav.removeAttr('style');
            });  //metoda stop() nam omogućava da se klikne samo jednom a ne vise puta (sprecava yoyo efekat ponovnog zatvaranja i otvaranja)
        } else {
            $toggle.addClass(open);
            $nav.stop().slideDown();
        }
    });

    // $(window).on('resize', function () {
    //     var showNav = 'show-nav';
    //     if ($(window).width() > 1242) {
    //         $nav.addClass(showNav);
    //     } else {
    //         $nav.removeClass(showNav);
    //     }
    // })
}


function slider() {     //ne zaboravi da mozes i argumente da prosledjujes i koristis
    var $slider = $('.js-slider');
    $($slider).slick({ //ubacili smo slick plugin za slajdovanje
        infinite: true, //beskonacno moze da vrti kartice
        slidesToShow: 1,    //prikazuje jednu karticu u momentu
        slidesToScroll: 1,   //pomera za po jednu karticu
        prevArrow: '.slide-left',
        nextArrow: '.slide-right'
    });
}


slider();


imgTitleDissapear();
nav();