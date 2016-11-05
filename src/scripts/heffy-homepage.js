$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['introduction', 'clanPage', 'wotLife', 'recruitment', 'forum'],
        // sectionsColor: ['#fefefe', '#f9f8f5', '#fefefe', '#f9f8f5', '#fefefe'],
        sectionsColor: ['#fefefe', '#fefefe', '#fefefe', '#fefefe', '#fefefe'],
        menu: '#menu',
        verticalCentered: true,
        paddingTop: '70px',
        responsiveWidth: 767,
        scrollBar: true
    });
});