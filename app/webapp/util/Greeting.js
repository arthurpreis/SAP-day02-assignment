sap.ui.define([], function () {
    "use strict";
    return {
        buildGreeting: function (sName) {
            sName = sName.trim();
            if (sName == ""){sName = "Developer"}
            return "Hello, " + sName + "!";
        }
    };
});