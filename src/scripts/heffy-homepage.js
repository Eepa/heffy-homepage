$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['introduction', 'clanPage', 'wotLife', 'recruitment', 'forum', 'footer'],
        sectionsColor: ['#fefefe', '#f9f8f5', '#fefefe', '#f9f8f5', '#fefefe', '#fefefe'],
        menu: '#navbar-menu',
        verticalCentered: true,
        paddingTop: '70px',
        paddingBottom: '20px',
        responsiveWidth: 767,
        scrollBar: true
    });
});

