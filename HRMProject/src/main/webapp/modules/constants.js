/**
 * Created by ManiTeja on 06/28/2017.
 */
(function () {
    'use strict';
    var mainModule = angular.module('StoreFront');

    mainModule.value('APPVALUE', (function () {
        // Define your variable
        var user_id = 'VIRINCHI';
        var ip = "182.76.20.131/";
        var port = "RTSApp/CharakService.svc/";
        var version = "1.0";
        var build = "RM." + version + "." + user_id;
        var appname = 'RTSAPP';
        var uniquenum = 'TR3342';

        return {
            SERVER_ADDRESS: "http://" + ip  + port,
            USER_ID: user_id,
            VERSION: version,
            BUILD: build,
            APPNAME: appname,
            uniqueNum:uniquenum,
        };
    })
    ());

}());
