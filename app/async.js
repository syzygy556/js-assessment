exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function(value) {
        var dfd = $.Deferred();
        setTimeout(function() {
            dfd.resolve(value);
        }, 10);
        return dfd.promise();
    },

    manipulateRemoteData: function(url) {
        var request = new XMLHttpRequest();
        return {
            then: function(callback) {
                request.onreadystatechange = function() {
                    if (request.readyState == 4 && request.status >= 200 && request.status < 400) {
                        var result = JSON.parse(request.responseText);
                        var names = result["people"].map(function(item) {
                            return item["name"]
                        }).sort();
                        return callback(names);
                    }
                }
                request.open("GET", url, true);
                request.send();
            }
        }
    }
};


