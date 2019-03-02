//***********STICKY NAV********************* */
var stickyNav = new Waypoint({
    element: document.getElementById('nav'),
    handler: function (direction) {
        if (direction == 'down') {
            this.element.classList.add('sticky');
        } else {
            this.element.classList.remove('sticky');
        }
    }, offset: '-100%'
});

/*****************ANIMATE ON SCROLL************ */
var zoomIn = document.getElementsByClassName('js--wp5')
for (var i = 0; i < zoomIn.length; i++) {
    new Waypoint({
        element: zoomIn[i],
        handler: function (direction) {
            this.element.classList.add('animated', 'zoomIn');

        }, offset: '50%'
    })
}

var slideInLeft = document.getElementsByClassName('js--wp1')
for (var i = 0; i < slideInLeft.length; i++) {
    new Waypoint({
        element: slideInLeft[i],
        handler: function (direction) {
            this.element.classList.add('animated', 'slideInLeft');

        }, offset: '50%'
    })
}

var slideInRight = document.getElementsByClassName('js--wp2')
for (var i = 0; i < slideInRight.length; i++) {
    new Waypoint({
        element: slideInRight[i],
        handler: function (direction) {
            this.element.classList.add('animated', 'slideInRight');

        }, offset: '50%'
    })
}

var fadeIn = document.getElementsByClassName('js--wp3')
for (var i = 0; i < fadeIn.length; i++) {
    new Waypoint({
        element: fadeIn[i],
        handler: function (direction) {
            this.element.classList.add('animated', 'fadeIn');

        }, offset: '50%'
    })
}

var bounceIn = new Waypoint({
    element: document.getElementById('js--wp4'),
    handler: function (direction) {
        this.element.classList.add('animated', 'bounceIn');
    }, offset: '60%'
});

/*************MOBILE NAVIGATION***********/
var navButton = document.getElementById('js--mobile-nav-icon');
var nav = document.getElementById('nav-bar');

navButton.addEventListener('click', function () {
    nav.classList.toggle('invisible');
    nav.classList.toggle('animated');
    nav.classList.toggle('fadeIn');
});



