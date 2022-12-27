export class Player{
    constructor(playerNum, fields, knights){
        this.playerNum = playerNum;
        if(playerNum == 0){
            this.field = fields[0][0];
            this.startField = fields[0][0];
        } else if (playerNum == 1){
            this.field = fields[0][6];
            this.startField = fields[0][6];
        } else if (playerNum == 2){
            this.field = fields[6][0];
            this.startField = fields[6][0];
        } else {
            this.field = fields[6][6];
            this.startField = fields[6][6];
        }
        this.field.playersOnField = 1;
        this.cards = [];
        this.image = knights[playerNum];
    }

    setField(field){
        this.field.playersOnField--;
        this.field = field;
        this.field.playersOnField++;
    }

    drawPlayer(context){
        if(this.field.playersOnField == 1){
            context.drawImage(this.image, this.field.x+45-12, this.field.y+45-12)
        } else {
            switch(this.playerNum){
                case 0:
                    context.drawImage(this.image, this.field.x+22.5-12, this.field.y+22.5-12);
                    break;
                case 1:
                    context.drawImage(this.image, this.field.x+67.5-12, this.field.y+22.5-12);
                    break;
                case 2:
                    context.drawImage(this.image, this.field.x+22.5-12, this.field.y+67.5-12);
                    break;
                case 3:
                    context.drawImage(this.image, this.field.x+67.5-12, this.field.y+67.5-12);
                    break;
            }
       }        
    }

    showAvailableFields(fields, availableFields){
        let x = this.field.x/90;
        let y = this.field.y/90;
        this.canGoSomewhere(x, y, fields, availableFields);
    }

    canGoSomewhere(x, y, fields, availableFields){
        if(!availableFields.includes(fields[y][x])){
            availableFields.push(fields[y][x]);
        }        
        let okay = false;
        for(let i = 0; i<fields[y][x].exits.length; ++i){
            if(fields[y][x].exits[i] == 1){
                if(y>0){
                    if(fields[y-1][x].exits.includes(3)){
                        if(!availableFields.includes(fields[y-1][x])){
                            availableFields.push(fields[y-1][x]);
                            this.canGoSomewhere(x,y-1,fields,availableFields);
                        }                        
                        okay = true;
                    }
                }
            } else if (fields[y][x].exits[i] == 2){
                if(x<6){
                    if(fields[y][x+1].exits.includes(4)){
                        if(!availableFields.includes(fields[y][x+1])){
                            availableFields.push(fields[y][x+1]);
                            this.canGoSomewhere(x+1,y,fields,availableFields);
                        }
                        okay = true;
                    }
                }
            } else if (fields[y][x].exits[i] == 3){
                if(y<6){
                    if(fields[y+1][x].exits.includes(1)){
                        if(!availableFields.includes(fields[y+1][x])){
                            availableFields.push(fields[y+1][x]);
                            this.canGoSomewhere(x,y+1,fields,availableFields);
                        }
                        okay = true;
                    }
                }
            } else if (fields[y][x].exits[i] == 4){
                if(x>0){
                    if(fields[y][x-1].exits.includes(2)){
                        if(!availableFields.includes(fields[y][x-1])){
                            availableFields.push(fields[y][x-1]);
                            this.canGoSomewhere(x-1,y,fields,availableFields);
                        }                        
                        okay = true;
                    }
                }
            }
        }
        return okay;
    }
}