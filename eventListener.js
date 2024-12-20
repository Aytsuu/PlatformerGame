window.addEventListener('keydown', (event)=>{
    switch(event.key){
        case 'a': playerMovements.a.pressed = true
            break
        case 'd': playerMovements.d.pressed = true
            break
        case 'w': if(player.velocity.y === 0) player.velocity.y = -17
            break
    }
})

window.addEventListener('keyup', (event)=>{
    switch(event.key){
        case 'a': playerMovements.a.pressed = false
            break
        case 'd': playerMovements.d.pressed = false
            break
    }
})