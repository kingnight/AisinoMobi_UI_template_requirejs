define([], function () {
    var _kendoApp;

    return {
        init: function (kendoApp) {
            _kendoApp = kendoApp;
        },
        kendoApp: function () {
            return _kendoApp;
        },
        parseQueryStringToObject: function () {
            var argsParsed = {},
                arg,
                kvp,
                hash = document.location.hash;

            if(!hash || hash.length == 0) {
                return argsParsed;
            }
            var args = document.location.hash.split('?');
            if(args.length < 2) {
                return argsParsed;
            }
            args = args[1].split('&');
            
            for (i=0; i < args.length; i++)
            {
                arg = decodeURIComponent(args[i]);
            
                if (arg.indexOf('=') == -1)
                {
                    argsParsed[arg.trim()] = true;
                }
                else
                {
                    kvp = arg.split('=');
                    var val = kvp[1].trim();
                    argsParsed[kvp[0].trim()] = isNaN(val) ? val : parseFloat(val);
                }
            }
            return argsParsed;
        },
        showLoading: function (message) {
            _kendoApp.showLoading(message);
        },
        hideLoading: function () {
            _kendoApp.hideLoading();
        },
        replace:function(location){
            _kendoApp.replace(location);
        },
        scrollViewToTop: function () {
            _kendoApp.scroller().reset();
        },
        destroyListView: function(listviewId){
            var listViewElement = $(listviewId);
            var existingListView = listViewElement.data().kendoMobileListView;
            if(existingListView) {
                existingListView.destroy();
                listViewElement.html(""); //force to refresh.
            }
        },
        showError: function (message, error) {
            var errorMessage = message + (error === undefined ? "" : "\n" + error.status + ": " + error.statusText);
            $("#error-view .message").text(errorMessage);
            $("#error-view").show().data().kendoMobileModalView.open();
        },

        closeError: function () {
            $("#error-view").data().kendoMobileModalView.close();
        }
    };
});