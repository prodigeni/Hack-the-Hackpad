$(function(){

    var hash = window.location.hash?window.location.hash:'dK2se3bCFHo';
    hash = hash.replace("#", "");
    var load_url = 'https://hackpad.com/ep/pad/static/' + hash;
    var hackpad_url = "https://hackpad.com/" + hash;
    $('.edit').attr('href', hackpad_url);
    $.ajax({
        url: load_url,
        type: 'GET',
        success: function(res) {
            var text = res.responseText;
            // then you can manipulate your text as you wish
            console.log(text);
            text = text.replace("<p><strong>", "<p class='heading2'><strong>");
            $('article').html(text);
            // $('p strong').parent('p').addClass('heading2');
        }
    }); 
})



$(window).on('scroll', function(event) {
 
    /*********** avoid fix above issue on chrome, only run when it is not firefox *****/
    if ($(window).scrollTop() > 0) {
        $('.logo').addClass('collapse');
    } else {
        $('.logo').removeClass('collapse');
    }           
    

    
});