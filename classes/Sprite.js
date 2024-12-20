class Sprite{
    constructor({position, imgSrc, frameRate = 1, animations}){
        this.position = position
        this.img = new Image()
        this.img.onload = () =>{
            this.loaded = true
            this.sizes = {
                width: this.img.width / this.frameRate,
                height: this.img.height
            }
        }
        this.img.src = imgSrc
        this.loaded = false
        this.frameRate = frameRate
        this.currentFrame = 0
        this.elapsedFrame = 0
        this.frameBuffer = 3
        this.animations = animations

        if (this.animations){
            for (let key in this.animations){
                const img = new Image()
                img.src = this.animations[key].imgSrc
                this.animations[key].img = img  
            }   
        }
    }

    draw(){
        if(!this.loaded) return;
        const cropbox = {
            position: {
                x: this.sizes.width * this.currentFrame,
                y: 0
            },
            sizes: {
                width: this.sizes.width,
                height: this.sizes.height
            }
        }
        c.drawImage(this.img, cropbox.position.x, cropbox.position.y, cropbox.sizes.width, cropbox.sizes.height, this.position.x, this.position.y, this.sizes.width, this.sizes.height)
        this.updateFrame()
    }

    updateFrame(){
        this.elapsedFrame++
        if(this.elapsedFrame % this.frameBuffer === 0){
            if(this.currentFrame < this.frameRate - 1) this.currentFrame++
            else this.currentFrame = 0
        }
    }
}