// type Key = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'space';
export class Input{
    keys:any={
        // ArrowUp:false,
        // ArrowDown:false,
        // ArrowLeft:false,
        // ArrowRight:false,
        // space:false
    }
    constructor(){
        window.addEventListener("keydown", (e) => {
            // if (this.keys[e.key as Key] != null) {
            //     this.keys[e.key as Key] = true;
            // }
            this.keys[e.key] = true
            console.log(this.keys)
        });

        window.addEventListener("keyup", (e) => {
            // if (this.keys[e.key as Key] != null) {
            //     this.keys[e.key as Key] = false;
            // }
            // console.log(this.keys)
            if(this.keys[e.key]){
                this.keys[e.key]=false
            }
            console.log(this.keys)
        });
    }
}