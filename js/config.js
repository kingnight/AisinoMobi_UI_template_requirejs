/* define configuration in here */

define([], function () {
    var appId = "2281792";
    var domain = "192.168.44.56:8080/MServer/",
        serverUrl = "http://" + domain

    return {
        contactsInfoURL:serverUrl + "searchContactsInfoServlet.search"  //contact server url
    };
});