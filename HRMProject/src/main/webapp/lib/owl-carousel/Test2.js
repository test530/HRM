/**
 * Created by manitejap on 7/6/2015.
 */
$(document).ready(function() {

    var owl = $("#owl-demo");



    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        singleItem : true,

    });

    $('.link').on('click', function(event){

            $this.css('background','#7fc242').addClass('clicked');

    });


    owl.owlCarousel();

    $.ajax({
        type: 'POST',
        url: 'http://192.9.200.120/retailrestfulservices/LoginService.svc/GetMatImages_test',

        datatype: 'json',

        success: function(response) {
            var content = '';
            var m = 1;
            for (var i in response.GetMatImages_testResult.TestImagesLst) {
                /*    for(var i in data["items"]){*/

                var img = response.GetMatImages_testResult.TestImagesLst[i].urls + 'fullimage' + m + '.jpg';
                console.log(img);

                var alt = response.GetMatImages_testResult.TestImagesLst[i].mat_name;


                content += "<div class=\"item dodgerBlue\">" + "<img class=lazyOwl src=\"" + img + "\" alt=\"" + alt + "\">" + "</div>";


                m++;




            }

            owl.data('owlCarousel').addItem(content);

            /*$("#owl-demo").data('owlCarousel').addItem(content);*/
            /*  $("#owl-demoq").html(content);*/

            /* owl.trigger('insertContent.owl',content);*/
        }
    });


});