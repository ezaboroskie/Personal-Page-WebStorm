const backgroundVid = document.getElementById('background-video')
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const topHidden = document.getElementById('top-hidden')
const servicesSection = document.getElementById('services-section')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const submitBtn = document.getElementById('message-submit')
const contactH2 = document.getElementById('contact-h2')
const logoImg = document.getElementById('logo-img')


backgroundVid.playbackRate = .5

submitBtn.addEventListener('click', function (e){
    e.preventDefault()
})

logoImg.addEventListener('click', function (){
    topHidden.scrollIntoView()
})
span1.addEventListener('click', function(event) {
    topHidden.scrollIntoView()
});
span2.addEventListener('click', function(event) {
    servicesSection.scrollIntoView()
});
span3.addEventListener('click', function(event) {
    contactH2.scrollIntoView()
});
p1.addEventListener('click', function(event) {
    topHidden.scrollIntoView()
});
p2.addEventListener('click', function(event) {
    servicesSection.scrollIntoView()
});
p3.addEventListener('click', function(event) {
    contactH2.scrollIntoView()
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
    $('#dropdown-menu').hide()
    $("#hamburger-icon").click(function(e){
        e.stopPropagation(); // Prevent the click event from propagating to the document
        $("#dropdown-menu").toggle();
    });

    // Close the dropdown menu when a click occurs outside the menu and the hamburger icon
    $(document).click(function(e) {
        if(!$(e.target).closest('#dropdown-menu').length && !$(e.target).is('#hamburger-icon')) {
            $('#dropdown-menu').hide();
        }
    });

})

