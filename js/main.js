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
        	deps: ['jQuery'],
          exports: "kendo"
        }
    },
    exclude: ['kendo'],
});

require(["jQuery", "app"], function($, application) {
    $(function() {
        app = application
        application.init(); 
    });
});