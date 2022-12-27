export class Treasure{
    constructor(field){
        this.field = field;
        this.player = undefined;
        this.position = undefined;
        this.image = undefined;
    }

    setPlayer(player, image){
        this.player = player;
        this.image = image;
    }

    setPosition(position){
        this.position = position;
    }

    drawTreasure(context){
        if((this.field.x !=0 || this.field.y != 0) || (context.canvas.clientWidth < 630 && this.field.hasTreasure)){
            context.drawImage(this.image,this.field.x+45-15, this.field.y+45-15);
        }
    }
}