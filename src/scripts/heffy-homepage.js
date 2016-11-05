var isEven = function(number) {
    return number % 2 == 0;
};


$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['introduction', 'clanPage', 'wotLife', 'recruitment', 'forum', 'footer'],
        sectionsColor: ['#fefefe', '#f9f8f5', '#fefefe', '#f9f8f5', '#fefefe', '#fefefe'],
        menu: '#menu',
        verticalCentered: true,
        paddingTop: '70px',
        paddingBottom: '70px',
        responsiveWidth: 767,
        scrollBar: true
    });
});

