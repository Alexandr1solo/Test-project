var arrLang = {
    'en' : {
        'products': 'Products',
    },

    'ru' : {
        'products': 'Продукция',
    },
}

$(function() {
    $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});