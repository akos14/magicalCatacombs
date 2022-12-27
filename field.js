export const FieldRotation = {
    NORTH: 1,
    EAST: 2,
    SOUTH: 3,
    WEST: 4,
}

export const FieldType = {
    BEND: 1,
    TEE: 2,
    STRAIGHT: 3,
}

export class Field{
    constructor(x, y, type, rotation){
        this.x = (x) * 90;
        this.y = (y) * 90;
        this.type = type;
        this.rotation = rotation;
        this.width = 90;
        this.height = 90;
        this.treasure = undefined;
        this.hasTreasure = false;
        this.exits = [];
        this.updateExits();
        this.playersOnField = 0;
    }

    updateExits(){
        switch(this.type){
            case FieldType.BEND:
                switch(this.rotation){
                    case FieldRotation.NORTH:
                        this.exits = [1,2];
                        break;
                    case FieldRotation.EAST:
                        this.exits = [2,3];
                        break;
                    case FieldRotation.SOUTH:
                        this.exits = [3,4];
                        break;
                    case FieldRotation.WEST:
                        this.exits = [4,1];
                        break;
                }
                break;
            case FieldType.STRAIGHT:
                switch(this.rotation){
                    case FieldRotation.NORTH:
                        this.exits = [1,3];
                        break;
                    case FieldRotation.EAST:
                        this.exits = [2,4];
                        break;
                    case FieldRotation.SOUTH:
                        this.exits = [3,1];
                        break;
                    case FieldRotation.WEST:
                        this.exits = [4,2];
                        break;
                }
                break;
            case FieldType.TEE:
                switch(this.rotation){
                    case FieldRotation.NORTH:
                        this.exits = [1,2,3];
                        break;
                    case FieldRotation.EAST:
                        this.exits = [2,3,4];
                        break;
                    case FieldRotation.SOUTH:
                        this.exits = [3,4,1];
                        break;
                    case FieldRotation.WEST:
                        this.exits = [4,1,2];
                        break;
                }
                break;
        }
    }

    setTreasure(treasure){
        this.hasTreasure = true;
        this.treasure = treasure;
    }

    setField(x, y){
        this.x = x * 90;
        this.y = y * 90;
    }

    nextFieldRotation(){
        if(this.rotation == FieldRotation.NORTH){
            this.rotation = FieldRotation.EAST;
            this.updateExits();
        } else if (this.rotation == FieldRotation.EAST){
            this.rotation = FieldRotation.SOUTH;
            this.updateExits();
        } else if (this.rotation == FieldRotation.SOUTH){
            this.rotation = FieldRotation.WEST;
            this.updateExits();
        } else if (this.rotation == FieldRotation.WEST){
            this.rotation = FieldRotation.NORTH;
            this.updateExits();
        }
    }

    draw(context){
        this.updateExits();
        switch(this.type) {
            case FieldType.BEND:
                this.drawBend(context);
                break;
            case FieldType.TEE:
                this.drawTee(context);
                break;
            case FieldType.STRAIGHT:
                this.drawStraight(context);
                break;
        }
    }

    drawBend(context){
        context.fillStyle = 'saddlebrown';
        context.fillRect(this.x,this.y,this.width,this.height);
        context.fillStyle = 'orange';
        if(this.rotation == FieldRotation.NORTH){
            context.fillRect(this.x+50,this.y+30,40,30);
            context.fillRect(this.x+30,this.y,30,40);
        } else if (this.rotation == FieldRotation.EAST){
            context.fillRect(this.x+50,this.y+30,40,30);
            context.fillRect(this.x+30,this.y+50,30,40);
        } else if (this.rotation == FieldRotation.SOUTH){
            context.fillRect(this.x,this.y+30,40,30);
            context.fillRect(this.x+30,this.y+50,30,40);
        } else {
            context.fillRect(this.x,this.y+30,40,30);
            context.fillRect(this.x+30,this.y,30,40);
        }        
        context.strokeStyle ='orange';
        context.beginPath();
        context.arc(this.x+45,this.y+45, 15, 0, 2*Math.PI);
        context.stroke();
        context.fill();
        context.fillRect(this.x, this.y, this.width, 1);
        context.fillRect(this.x, this.y+this.height-1, this.width, 1);
        context.fillRect(this.x, this.y, 1, this.height);
        context.fillRect(this.x+this.width-1, this.y, 1, this.height);
    }

    drawStraight(context){
        context.fillStyle = 'saddlebrown';
        context.fillRect(this.x,this.y,this.width,this.height);
        context.fillStyle = 'orange';
        if(this.rotation == FieldRotation.NORTH || this.rotation == FieldRotation.SOUTH){
            context.fillRect(this.x+30,this.y,30,this.height);
        } else {
            context.fillRect(this.x,this.y+30,this.width,30);
        }        
        context.fillRect(this.x, this.y, this.width, 1);
        context.fillRect(this.x, this.y+this.height-1, this.width, 1);
        context.fillRect(this.x, this.y, 1, this.height);
        context.fillRect(this.x+this.width-1, this.y, 1, this.height);
    }

    drawTee(context){
        context.fillStyle = 'saddlebrown';
        context.fillRect(this.x,this.y,this.width,this.height);
        context.fillStyle = 'orange';
        if(this.rotation == FieldRotation.NORTH){
            context.fillRect(this.x+30,this.y,30,this.height);
            context.fillRect(this.x+50,this.y+30,40,30);
        } else if (this.rotation == FieldRotation.EAST){
            context.fillRect(this.x,this.y+30,this.width,30);
            context.fillRect(this.x+30,this.y+50,30,40);
        } else if (this.rotation == FieldRotation.SOUTH){
            context.fillRect(this.x,this.y+30,40,30);
            context.fillRect(this.x+30,this.y,30,this.height);
            
        } else {
            context.fillRect(this.x,this.y+30,this.width,30);
            context.fillRect(this.x+30,this.y,30,40);
        }        
        context.fillRect(this.x, this.y, this.width, 1);
        context.fillRect(this.x, this.y+this.height-1, this.width, 1);
        context.fillRect(this.x, this.y, 1, this.height);
        context.fillRect(this.x+this.width-1, this.y, 1, this.height);
    }

    update(dt, horizontal, vertical){
        this.x += horizontal*dt;
        this.y += vertical*dt;
    }
}