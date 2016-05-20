exports = typeof window === 'undefined' ? global : window;


exports.modulesAnswers = {
    createModule: function(greeting, name) {
        return {
            name: name,
            greeting: greeting,
            sayIt: function() {
                return this.greeting + ', ' + this.name;
            }
        };
    }
};