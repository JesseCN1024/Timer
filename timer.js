// Create class
class Timer{
    constructor(duraInput, startBtn, pauseBtn, callbacks){
        this.duraInput = duraInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;   
        // this here ~ to startBtn, take callback functions as its
        if (callbacks){
            this.onStart = callbacks.onStart; 
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
        this.isStarted = false;
    }
    // Getter and Setter 
    get timeRemaining(){
        return parseFloat(this.duraInput.value);
    }
    set timeRemaining(time){
        // Round the input displayed value to 2 decimals
        this.duraInput.value = time.toFixed(2);
    }
    
    start = () => { // funciton triggered by button
        // Event onStart()
        if(this.onStart){
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 100); // declare var interval as an id 
        this.startBtn.disabled = true;
        this.pauseBtn.disabled = false;
        this.duraInput.disabled = true;
    }
    tick = () => {
        // Calling set and get doesnt have () and with format `this.(getfunc or setfunc)`
        if (this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();  
            }
        }     
        else{
            this.timeRemaining = this.timeRemaining - .1; // use .1 for running smoothly
            // Event onTick
            if (this.onTick){
                this.onTick();
            }
        }
    }
    pause = () => {
        clearInterval(this.interval);  
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true; 
        this.duraInput.disabled = false;
    }
}