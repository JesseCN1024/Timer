
// select and call all elements
const duraInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');
const circle =  document.querySelector('circle');
// Chu vi
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
// Set the full start border for the timer
circle.setAttribute('stroke-dasharray', perimeter); 
let currentOffset = 0;


const newTimer = new Timer(duraInput, startBtn, pauseBtn, {
    // Add callback methods to emit EVENTS SIGNALS
    onStart(){
        // Update the starting value
        if (!this.isStarted){ //this.isStarted doesnt exist
            this.maxTime = this.timeRemaining;
            this.isStarted = true;
        }
    },
    onTick(){   
        // Update the border along time
        currentOffset = ((this.timeRemaining - this.maxTime) / this.maxTime) * perimeter;
        circle.setAttribute('stroke-dashoffset', currentOffset);
    },
    onComplete(){
        console.log('oncomplete');

    }
});

function test(){
    newTimer.isStarted = false;
    newTimer.onStart();
    newTimer.onTick();
}