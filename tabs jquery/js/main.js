'use strick';


// Табы с помощью нативного JS
// let wrapper = document.getElementById('tabs_title_wrapper'),
//     tabTitle = document.querySelectorAll('.tab_title'),
//     tab = document.querySelectorAll('.tab');

// for (let i = 0; i < tab.length; i++) {
//     if (tab[i].classList.contains('active')) {

//     } else {
//         tab[i].classList.add('block');
//     }
// }

// wrapper.addEventListener('click', function(event) {
//     let target = event.target;
//     if (target && target.classList.contains('tab_title')) {
//         for (let i = 0; i < tabTitle.length; i++) {
//             if (target == tabTitle[i]) {
//                 for (let i = 0; i < tab.length; i++) {
//                     tab[i].classList.remove('active');
//                     tab[i].classList.add('block')
//                 };
//                 tab[i].classList.remove('block');
//                 tab[i].classList.add('active');
//             }
//         }
//     }
// });

$(document).ready(function() {
    var $tab = $('.tab');

    var $index;
    $('li').on('click', function () {
        var $current = $(this);
        $index = parseInt($current.index());
        if ($current.not('active')) {
            $('.active').removeClass('active');
            $current.addClass('active');
            $('.tab .active').removeClass('active');
            $('.tab:eq(' + $index + ')').addClass('active');
            
        }
    });
});


