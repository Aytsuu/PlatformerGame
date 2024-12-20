Array.prototype.parse2D = function(){
    const rows = []
    for (let i = 0; i < this.length; i+=16) rows.push(this.slice(i, i+ 16))
    return rows
}

Array.prototype.createObjectsFrom2D = function(){
    const objects = []
    this.forEach((row, y) =>{
        row.forEach((symbol, x) => {
            if (symbol === 19){
                objects.push(new CollisionBlock({
                    position: {
                        x: x * 80,
                        y: y * 80
                    }
                })) 
            }
        })
    })
    return objects
}
