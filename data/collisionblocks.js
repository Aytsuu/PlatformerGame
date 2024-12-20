(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("collisionblocks",
{ "compressionlevel":-1,
 "height":9,
 "infinite":false,
 "layers":[
        {
         "data":[2, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 2,
            1610612741, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2684354566,
            1610612742, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2684354566,
            1610612742, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2684354566,
            1610612742, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2684354566,
            1610612742, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2684354566,
            1610612742, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2684354566,
            1610612742, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2684354566,
            2, 8, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 2],
         "height":9,
         "id":1,
         "name":"background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":9,
         "id":3,
         "name":"door",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 2147483662, 9, 0, 0, 12, 0, 13, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":9,
         "id":2,
         "name":"object",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 17, 17, 0, 2147483663, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":9,
         "id":4,
         "name":"spear",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 0,
            19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19,
            19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19,
            19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19,
            19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19,
            19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19,
            19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19,
            19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19,
            0, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 0],
         "height":9,
         "id":6,
         "name":"collisions",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 2147483664, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":9,
         "id":5,
         "name":"axe",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.11.0",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/Tile\/Tilesets\/brick_1.tsx"
        }, 
        {
         "firstgid":2,
         "source":"..\/..\/Tile\/Tilesets\/blank.tsx"
        }, 
        {
         "firstgid":3,
         "source":"..\/..\/Tile\/Tilesets\/floor_tile_2.tsx"
        }, 
        {
         "firstgid":4,
         "source":"..\/..\/Tile\/Tilesets\/floor_tile_4.tsx"
        }, 
        {
         "firstgid":5,
         "source":"..\/..\/Tile\/Tilesets\/ceiling_4.tsx"
        }, 
        {
         "firstgid":6,
         "source":"..\/..\/Tile\/Tilesets\/ceiling_2.tsx"
        }, 
        {
         "firstgid":7,
         "source":"..\/..\/Tile\/Tilesets\/ceiling_1.tsx"
        }, 
        {
         "firstgid":8,
         "source":"..\/..\/Tile\/Tilesets\/floor_tile_1.tsx"
        }, 
        {
         "firstgid":9,
         "source":"..\/..\/Tile\/Tilesets\/bookshelf_1.tsx"
        }, 
        {
         "firstgid":10,
         "source":"..\/..\/Tile\/Tilesets\/door.tsx"
        }, 
        {
         "firstgid":11,
         "source":"..\/..\/Tile\/Tilesets\/flag_blue.tsx"
        }, 
        {
         "firstgid":12,
         "source":"..\/..\/Tile\/Tilesets\/table_shadow.tsx"
        }, 
        {
         "firstgid":13,
         "source":"..\/..\/Tile\/Tilesets\/chair_1.tsx"
        }, 
        {
         "firstgid":14,
         "source":"..\/..\/Tile\/Tilesets\/weapon_rack.tsx"
        }, 
        {
         "firstgid":15,
         "source":"..\/..\/Tile\/Tilesets\/langdebeve.tsx"
        }, 
        {
         "firstgid":16,
         "source":"..\/..\/Tile\/Tilesets\/pole_axe.tsx"
        },
    
        {
         "firstgid":17,
         "source":"..\/..\/Tile\/Tilesets\/crate_1.tsx"
        }, 
        {
         "firstgid":18,
         "source":"..\/..\/Tile\/Tilesets\/bag_2.tsx"
        }, 
        {
         "firstgid":19,
         "source":"..\/..\/Tile\/Tilesets\/collision.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.10",
 "width":16
});