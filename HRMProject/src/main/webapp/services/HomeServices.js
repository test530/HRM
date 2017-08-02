/**
 * Created by maniteja on 17-07-2017.
 */
(function () {

    var rtsGalleryData = function ($http, APPVALUE) {



        function rtsMainURL(mobileNumber) {
            return {
                method: 'POST',
                url: APPVALUE.SERVER_ADDRESS + "/ShowDirectHomeScreenForRTSApp",
                contentType: "application/json",
                data: JSON.stringify({
                    "cellphone": mobileNumber,
                    "uniqueno": APPVALUE.uniqueNum,
                    "deviceos": "desktop",
                    "fcmno": "2"

                }),
                cache: true
            };

        };

        var getMainCategory = function (mobileNumber) {
            return $http(rtsMainURL(mobileNumber)).then(function (response) {

                return response.data;
            });
        };

        return {
            getMainCategory: getMainCategory,


        };
    };


    var mainModule = angular.module('StoreFront');
    mainModule.factory("RtsHomeData", rtsGalleryData);
}());
