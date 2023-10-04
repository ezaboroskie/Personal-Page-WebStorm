const backgroundVid = document.getElementById('background-video')

backgroundVid.playbackRate = .5

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