exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
    argsAsArray: function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak: function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function(prefix) {
        return function(suffix) {
            return prefix + ', ' + suffix;
        }
    },

    makeClosures: function(arr, fn) {
        var squaredVals = [];
        var len = arr.length;

        function squared(val) {
            return function() {
                return fn(val);
            }
        }
        for (var i = 0; i < len; i++) {
            squaredVals.push(squared(arr[i]));
        }
        return squaredVals;
    },

    partial: function(fn, greeting, name) {
        var partFn = function(punctuation) {
            return fn(greeting, name, punctuation);
        };
        return partFn;
    },

    useArguments: function() {

        return Array.prototype.slice.call(arguments).reduce(function(a, b) {
            return a + b;
        });
    },

    callIt: function(fn) {
        //use arguments based on amount passed in 
        var arguments = Array.prototype.slice.call(arguments);
        var fn = arguments[0];
        arguments.shift();
        return fn.apply(this, arguments);
    },

    partialUsingArguments: function(fn) {
        var argsArr = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function() {
            var addArgs = argsArr.concat(Array.prototype.slice.call(arguments));
            return fn.apply(null, addArgs);
        };
    },

    curryIt: function(fn) {
        var args1 = Array.prototype.slice.call(arguments);
        var fn = args1[0];
        args1.shift();
        return function() {
            var args2 = Array.prototype.slice.call(arguments);
            return fn.apply(this, args1.concat(args2));
        };
    }
};