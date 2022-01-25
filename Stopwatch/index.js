function Stopwatch() {
    let duration = 0;
    let pause = true;

    this.reset = function() {
        duration = 0;
    };

    this.start = function() {
        if(!pause)
            throw new Error ('Stopwatch has already started.');
        
        pause = false;
        duration -= Date.now();
    };

    this.stop = function() {
        if(pause)
            throw new Error ('Stopwatch is not started.');

        pause = true;
        duration += Date.now();
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return (duration/1000);
        }
    });
}
