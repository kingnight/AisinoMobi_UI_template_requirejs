var app;

require.config({
    paths: {
        jQuery: "../libs/jquery.min",
        kendo: "../libs/kendo.mobile.min"
    },
    shim: {
        jQuery: {
            exports: "jQuery"
        },
        kendo: {
            exports: "kendo"
        }
    }
});

require(["jQuery", "app"], function($, application) {
    $(function() {
        app = application
        application.init(); 
    });
});