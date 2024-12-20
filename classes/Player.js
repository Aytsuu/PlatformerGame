class Player extends Sprite{
    constructor({collisionBlocks = [], imgSrc, frameRate, animations}){
        super({imgSrc, frameRate, animations})
        
        this.position = {
            x: 300,
            y: 200
        }

        this.velocity = {
            x: 0,
            y: 0
        }
        
        this.collisionBlocks = collisionBlocks
        this.gravity = 1
        this.lastDirection = 'Right'

    }


    movementsUpdate(){
        // c.fillStyle = 'rgba(0,0,255,0.5)'
        // c.fillRect(this.position.x, this.position.y, this.sizes.width, this.sizes.height)
        this.position.x += this.velocity.x
        this.updateHitbox()
        this.checkHorizontalCollisions()
        this.applyGravity()
        this.updateHitbox()
        // c.fillStyle = 'rgba(0,0,255,0.7)'
        // c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.sizes.width, this.hitbox.sizes.height)
        this.checkVerticalCollisions()
    }

    spriteAnimation(name){
            
        this.currentFrame = 0
        this.img = this.animations[name].img
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
        this.lastDirection = this.animations[name].lastDirection
    }

    updateHitbox(){
        this.hitbox = {
            position: {
                x: this.position.x + 100,
                y: this.position.y + 90
            },
            
            sizes: {
                width: 45,
                height: 89
            }
        }
    }

    checkHorizontalCollisions(){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]
            if(this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.sizes.width &&
                this.hitbox.position.x + this.hitbox.sizes.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.sizes.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.sizes.height
            ){

                if (this.velocity.x < 0){
                    const offset = this.hitbox.position.x - this.position.x
                    this.position.x = collisionBlock.position.x + collisionBlock.sizes.width - offset + 0.01
                    break
                }

                if(this.velocity.x > 0){
                    const offset = this.hitbox.position.x - this.position.x
                    this.position.x = collisionBlock.position.x - this.hitbox.sizes.width - offset - 0.01
                    break
                }

            }
        }
    }

    applyGravity(){
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }

    checkVerticalCollisions(){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]
            if(this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.sizes.width &&
                this.hitbox.position.x + this.hitbox.sizes.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.sizes.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.sizes.height
            ){

                if (this.velocity.y < 0){
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y + collisionBlock.sizes.height + 0.01
                    break
                }

                if(this.velocity.y > 0){
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y - collisionBlock.sizes.height - 100
                    break
                }
            }
        }
    }
}