

class CollisionBlock{
    constructor({position}){
        this.position = position
        this.sizes = {
            width: 80,
            height: 80
        }
    }

    draw(){
        c.fillStyle = 'rgba(255, 0, 0, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.sizes.width, this.sizes.height)
    }
}