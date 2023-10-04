const backgroundVid = document.getElementById('background-video')
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const contactSection = document.getElementById('contact-section')
const topHidden = document.getElementById('top-hidden')
const servicesSection = document.getElementById('services-section')
backgroundVid.playbackRate = .5

span1.addEventListener('click', function(event) {
    topHidden.scrollIntoView()
});
span2.addEventListener('click', function(event) {
    servicesSection.scrollIntoView()
});
span3.addEventListener('click', function(event) {
    contactSection.scrollIntoView()
});



$(document).ready(function(){
    $('#header-span-container span').on({
        mouseenter: function () {
            $(this).addClass('active')
        },
        mouseleave: function () {
            $(this).removeClass('active')
        }
    })

})

