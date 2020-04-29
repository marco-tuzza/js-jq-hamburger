// $('.fa-bars').click(
//     function () {
//         $('.hamburger-menu').show();
//     }
// );
//
// $('.fa-times').click(
//     function () {
//         $('.hamburger-menu').hide();
//     }
// )

 // Alternativa

 // $('.fa-bars').click(
 //     function () {
 //         $('.hamburger-menu').addClass('block');
 //     }
 // );
 //
 // $('.fa-times').click(
 //     function () {
 //         $('.hamburger-menu').removeClass('block');
 //     }
 // )

// Altra alternativa

$('.fa-bars, .close').click(
    function () {
        $('.hamburger-menu').toggle();
    }
);
