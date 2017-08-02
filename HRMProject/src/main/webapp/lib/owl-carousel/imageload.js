/**
 * Created by manitejap on 7/3/2015.
 */


var testloader
    {

        var url = 'http://192.9.200.120/retailrestfulservices/LoginService.svc/GetMatImages_test';
        $.ajax({
            type: 'POST',
            url: url,
            datatype: 'json',

            success: function (response) {

                console.log(response);
                customDataSuccess(response);


            }
        });


        function customDataSuccess(response) {
            var content = "";
            console.log(response);
            var m = 1;
            for (var i in response.GetMatImages_testResult.TestImagesLst) {
                /*    for(var i in data["items"]){*/

                var img = response.GetMatImages_testResult.TestImagesLst[i].urls + 'fullimage' + m + '.jpg';
                console.log(img);

                var alt = response.GetMatImages_testResult.TestImagesLst[i].mat_name;


                content += "<div class=item>" + "<img src=\"" + img + "\" alt=\"" + alt + "\">" + "</div>";
                m++;

            }
            $("#owl-demo").html(content);
        }
    };
