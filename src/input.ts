type Key = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'space';
export class Input{
    keys={
        ArrowUp:false,
        ArrowDown:false,
        ArrowLeft:false,
        ArrowRight:false,
        space:false
    }
    constructor(){
        window.addEventListener("keydown", (e) => {
            if (this.keys[e.key as Key] != null) {
                this.keys[e.key as Key] = true;
            }
            console.log(this.keys)
        });

        window.addEventListener("keyup", (e) => {
            if (this.keys[e.key as Key] != null) {
                this.keys[e.key as Key] = false;
            }
            console.log(this.keys)
        });
    }
}