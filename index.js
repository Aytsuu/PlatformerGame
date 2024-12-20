const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720

const parsedCollisions = collisionsMap1.parse2D()
const collisionBlocks = parsedCollisions.createObjectsFrom2D()

const map1 = new Sprite({
    position:{
        x: 0,
        y: 0
    },
    imgSrc: './img/map_1.png'
})


const player = new Player({collisionBlocks, imgSrc: './img/playerIdleRight.png', frameRate: 10, animations: {
    playerIdleRight: {
        frameRate: 10,
        frameBuffer: 3,
        loop: true,
        imgSrc: './img/playerIdleRight.png',
    },
    playerIdleLeft: {
        frameRate: 10,
        frameBuffer: 3,
        loop: true,
        imgSrc: './img/playerIdleLeft.png',
    },
    playerRunRight: {
        frameRate: 10,
        frameBuffer: 3,
        loop: true,
        imgSrc: './img/playerRunRight.png',
        lastDirection: 'Right'
    },
    playerRunLeft: {
        frameRate: 10,
        frameBuffer: 3,
        loop: true,
        imgSrc: './img/playerRunLeft.png',
        lastDirection: 'Left'
    },
    // playerJumpRight: {
    //     frameRate: 10,
    //     frameBuffer: 3,
    //     loop: true,
    //     imgSrc: ,
    // },
    // playerJumpLeft: {
    //     frameRate: 10,
    //     frameBuffer: 3,
    //     loop: true,
    //     imgSrc: ,
    // },
}})

const playerMovements = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    }
}

function animate(){
    window.requestAnimationFrame(animate)
    map1.draw()
    player.draw()
    player.movementsUpdate()
    
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw()
    })

    player.velocity.x = 0
    if (playerMovements.d.pressed) {
        player.spriteAnimation('playerRunRight')
        player.velocity.x = 5
    }
    else if (playerMovements.a.pressed) {
        player.spriteAnimation('playerRunLeft')
        player.velocity.x = -5
    }
    else {
        if(player.lastDirection === 'Right') player.spriteAnimation('playerIdleRight')
        else if(player.lastDirection === 'Left') player.spriteAnimation('playerIdleLeft')
    }
}
animate()
