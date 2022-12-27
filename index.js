import { Field, FieldRotation, FieldType } from "./field.js";
import { Player } from "./player.js";
import { Treasure } from "./treasure.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const extra = document.querySelector('canvas#extra');
const extraCtx = extra.getContext('2d');

const buttonCanvas = document.querySelector('canvas#buttonCanvas');
const buttonCtx = buttonCanvas.getContext('2d');

const table = document.querySelector('table');

const startButton = document.querySelector('button#start');
const descButton = document.querySelector('button#desc');
const playersNum = document.querySelector('input#playersNum');
const cardsPerPlayer = document.querySelector('input#cardsPerPlayer');
const errorSpan   = document.querySelector('span#error');
/*
const startSaveButton = document.querySelector('button#startSave');
if(localStorage.length !=0){
    startSaveButton.style.display = 'inline';
}
*/

const settings = document.querySelector('div#settings');
const gameDesc = document.querySelector('div#gameDesc');
gameDesc.style.display = "none";

const gem1 = new Image(30,30);
gem1.src = 'player1_gem.png';
const gem2 = new Image(30,30);
gem2.src = 'player2_gem.png';
const gem3 = new Image(30,30);
gem3.src = 'player3_gem.png';
const gem4 = new Image(30,30);
gem4.src = 'player4_gem.png';

const knight1 = new Image(24,24);
knight1.src = 'player1.png';
const knight2 = new Image(24,24);
knight2.src = 'player2.png';
const knight3 = new Image(24,24);
knight3.src = 'player3.png';
const knight4 = new Image(24,24);
knight4.src = 'player4.png';

let fixed = [];
let fields = [];
let buttons = [];
let players = [];
let playersPoints = [];
let treasures = [];
let gems=[gem1, gem2, gem3, gem4];
let knights=[knight1, knight2, knight3, knight4];
let out;
let currentPlayer = 0;
let hasMoved = false;
let hasStepped = false;
let availableFields = [];
let hasWinner = false;
let info;
//let save;
//let game;

function generateMatrix(){
    for(let i = 0; i < 7; ++i){
        fixed[i] = [];
        for(let j = 0; j<7; ++j){
            if(i % 2 == 0 && j % 2 == 0){
                fixed[i][j] = true;
            } else {
                fixed[i][j] = false;
            }
        }
    }
    
    let nonFixed = [];
    for(let i = 0; i<13;++i){
        nonFixed.push(new Field(0,0, FieldType.STRAIGHT, random(1,4)))
    }
    
    for (let i = 0; i<15;++i){
        nonFixed.push(new Field(0,0, FieldType.BEND, random(1,4)));
    }
    
    for (let i = 0; i<6;++i){
        nonFixed.push(new Field(0,0, FieldType.TEE, random(1,4)));
    }

    for(let i = 0; i < 7; ++i){
        fields[i] = [];
        for(let j = 0; j<7; ++j){
            if(!fixed[i][j]){
                let num = random(0,nonFixed.length-1);
                nonFixed[num].setField(j,i);
                fields[i][j] = nonFixed[num];
                nonFixed.splice(num,1);
            }
        }
    }
    out = nonFixed[0];
}

function addFixed(){
    fields[0][0] = new Field(0,0, FieldType.BEND, FieldRotation.EAST);
    fields[0][2] = new Field(2,0, FieldType.TEE, FieldRotation.EAST);
    fields[0][4] = new Field(4,0, FieldType.TEE, FieldRotation.EAST);
    fields[0][6] = new Field(6,0, FieldType.BEND, FieldRotation.SOUTH);
    fields[2][0] = new Field(0,2, FieldType.TEE, FieldRotation.NORTH);
    fields[2][2] = new Field(2,2, FieldType.TEE, FieldRotation.NORTH);
    fields[2][4] = new Field(4,2, FieldType.TEE, FieldRotation.EAST);
    fields[2][6] = new Field(6,2, FieldType.TEE, FieldRotation.SOUTH);
    fields[4][0] = new Field(0,4, FieldType.TEE, FieldRotation.NORTH);
    fields[4][2] = new Field(2,4, FieldType.TEE, FieldRotation.WEST);
    fields[4][4] = new Field(4,4, FieldType.TEE, FieldRotation.SOUTH);
    fields[4][6] = new Field(6,4, FieldType.TEE, FieldRotation.SOUTH);
    fields[6][0] = new Field(0,6, FieldType.BEND, FieldRotation.NORTH);
    fields[6][2] = new Field(2,6, FieldType.TEE, FieldRotation.WEST);
    fields[6][4] = new Field(4,6, FieldType.TEE, FieldRotation.WEST);
    fields[6][6] = new Field(6,6, FieldType.BEND, FieldRotation.WEST);
}

function random(a,b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function setCardsNum(){
    cardsPerPlayer.setAttribute("max", 24/playersNum.value);
    cardsPerPlayer.value = 2;
}
playersNum.addEventListener('input', setCardsNum);

function showDesc(){
    if(gameDesc.style.display == "none"){
        gameDesc.style.display = "block";
    } else {
       gameDesc.style.display = "none";
    }    
}

playersNum.addEventListener('input', function(){
    playersNum.style.border = "";
    playersNum.style.color = "black";
});

function run(){
    if(playersNum.value > 4 || playersNum.value < 1){
        playersNum.style.color = "red";
        playersNum.style.border = "1px solid red";
        errorSpan.innerText = "A játékosok száma 1 és 4 között lehet!"; 
        errorSpan.style.visibility = 'visible';
    }
    else if((cardsPerPlayer.value > (24/playersNum.value)) || cardsPerPlayer.value < 1){
        cardsPerPlayer.style.color = "red";
        cardsPerPlayer.style.border = "1px solid red";
        errorSpan.innerText = `A kártyák száma ennyi játékosnál 1 és ${24/playersNum.value} között lehet!`; 
        errorSpan.style.visibility = 'visible';
    } else {
        //localStorage.clear();
        startButton.disabled = true;
        settings.style.display = "none";
        generateMatrix();
        addFixed();
        generatePlayersAndTreasures();
        start();
        draw();
        info.innerHTML = `<br>${currentPlayer+1}. játékos mezőt helyez`;
    }
}
startButton.addEventListener('click', run);
descButton.addEventListener('click', showDesc);

/*
function startSavedGame(){
    console.log(asd);
    fields = JSON.parse(localStorage.getItem('fields'));
    console.log(fields);
    fields = JSON.parse(localStorage.getItem('allFields'));
    players = localStorage.getItem('allPlayers');
    playersPoints = localStorage.getItem('allPlayersPoints');
    out = localStorage.getItem('outField');
    currentPlayer = localStorage.getItem('currentPlayerPlaying');
    hasMoved = localStorage.getItem('hasCurrentMoved');
    hasStepped = localStorage.getItem('hasCurrentStepped');
    start();
    draw();
}
startSaveButton.addEventListener('click', startSavedGame);
*/

function generatePlayersAndTreasures(){
    for(let i = 0; i<playersNum.value*cardsPerPlayer.value; ++i){
        let okay = false;
        do{
            let x = random(0,6);
            let y = random(0,6);
            if(!fields[x][y].hasTreasure && ((x != 0 || y != 0) && (x != 6 || y != 0) && (x != 0 || y != 6) && (x != 6 || y != 6))){
                treasures[i] = new Treasure(fields[x][y]);
                fields[x][y].setTreasure(treasures[i]);
                okay = true;
            }
        }while(!okay);
    }
    for(let i = 0; i<playersNum.value; ++i){
        players[i] = new Player(i, fields, knights);
        playersPoints[i] = 0;        
        for(let j = 0; j<cardsPerPlayer.value;++j){
            let index = random(0,treasures.length-1);
            treasures[index].setPlayer(players[i], gems[i]);
            treasures[index].setPosition(j);
            players[i].cards[j] = treasures[index];
            treasures.splice(index,1);
        }
    }
}

function draw(){
    table.parentElement.style.display = 'block';
    table.style.display = 'block';
    fields.map(row => row.map(field => field.draw(ctx)));
    fields.map(row => row.map(field => field.updateExits()));
    out.draw(extraCtx);
    if(out.hasTreasure && out.treasure.position == 0){
        out.treasure.drawTreasure(extraCtx);
    }
    for(let i = 0; i< playersNum.value; ++i){
        if(players[i].cards.length != 0){
            players[i].cards[0].drawTreasure(ctx);
        }
    }
    for(let i = 0; i< playersNum.value; ++i){
        players[i].drawPlayer(ctx);
    }
}

function start(){
    for(let i = 0; i<9; ++i){
        buttons[i] = [];
    }
    for(let i = 0; i<9; ++i){
        let tr = document.createElement('tr');
        for(let j = 0; j<9; ++j){
            let td = document.createElement('td');
            if((i == 0 || j == 0 || i == 8 || j==8) && i != j && i % 2 == 0 && j % 2 == 0 && (i != 0 || j !=8) && (i != 8 || j !=0)){
                if(i == 0){
                    td.style.backgroundImage="url('downArrow.png')";
                } else if(i == 8){
                    td.style.backgroundImage="url('upArrow.png')";
                } else if(j == 0){
                    td.style.backgroundImage="url('rightArrow.png')";
                } else if(j == 8){
                    td.style.backgroundImage="url('leftArrow.png')";
                }
                
                let button = document.createElement('button');
                button.setAttribute("id", "arrowButton");
                td.append(button);
                buttons[i][j] = button;
            }
            tr.append(td);
        }
        table.append(tr);
    }
    info = table.firstChild.firstChild;
    info.style.fontWeight = "900";
    /*
    save = table.lastChild.lastChild;
    let saveButton = document.createElement('button');
    saveButton.innerHTML = "Játék mentése";
    saveButton.addEventListener('click', function(){
        game = {
            fields,
            players,
            playersPoints,
            out,
            currentPlayer,
            hasMoved,
            hasStepped
        };
        localStorage.setItem('game', JSON.stringify(game));
        //localStorage.setItem('fields', JSON.stringify(fields));
        //sessionStorage.setItem('fields', JSON.stringify(fields));
        //localStorage.setItem('allPlayers', JSON.stringify(players));
        //localStorage.setItem('allPlayersPoints', JSON.stringify(playersPoints));
        //localStorage.setItem('outField', JSON.stringify(out));
        //localStorage.setItem('currentPlayerPlaying', JSON.stringify(currentPlayer));
        //localStorage.setItem('hasCurrentMoved', JSON.stringify(hasMoved));
        //localStorage.setItem('hasCurrentStepped', JSON.stringify(hasStepped));
        console.log(localStorage);
    });
    saveButton.style.border = "2px solid orange";
    saveButton.style.padding = "10px 10px";
    saveButton.style.backgroundColor = "saddlebrown";
    saveButton.style.fontWeight = "900";
    save.append(saveButton);
    */
    for(let i = 1; i<=4; ++i){
        if(i <= playersNum.value){
            let p = document.querySelector(`p#player${i}`);
            p.innerHTML = `${i}. játékos: ${playersPoints[i-1]}/${cardsPerPlayer.value}`;
        }
        else{
            let p = document.querySelector(`p#player${i}`);
            p.style.visibility = "hidden";
        }
    }
    let p = document.querySelector(`p#player${1}`);
    p.innerHTML = "";
    p.innerHTML = `${1}. játékos: ${playersPoints[0]}/${cardsPerPlayer.value}`;
    p.style.border = "solid 5px orange";
}

delegate(table, 'click', '#arrowButton', function(e){
    if(!hasMoved && !hasWinner){
        for(let i = 0; i<buttons.length;++i){
            for(let j = 0; j<buttons.length;++j){
                if(buttons[i][j] !== undefined){
                    buttons[i][j].disabled = false;
                    buttons[i][j].parentElement.style.opacity = 1;
                }
            }
        }
        let x = this.parentElement.parentElement.rowIndex;
        let y = this.parentElement.cellIndex;
        if(x == 0){
            buttons[8][y].disabled = true;
            buttons[8][y].parentElement.style.opacity = 0.5;
            y = y-1;
        } else if(x == 8){
            buttons[0][y].disabled = true;
            buttons[0][y].parentElement.style.opacity = 0.5;
            x = x-2;
            y = y-1;
        } else if(y == 0){
            buttons[x][8].disabled = true;
            buttons[x][8].parentElement.style.opacity = 0.5;
            x = x-1;
        } else if(y == 8){
            buttons[x][0].disabled = true;
            buttons[x][0].parentElement.style.opacity = 0.5;
            x = x-1;
            y = y-2;
        }
        let goingIn = out;
        if(y == 0){
            out = fields[x][6];
            for(let i = 6; i>0;--i){
                fields[x][i] = fields[x][i-1];
            }
            fields[x][0] = goingIn;
            for(let i = 0; i<7;++i){
                fields[x][i].setField(i,x); 
            }
        } else if (y==6){
            out = fields[x][0];
            for(let i = 0; i<6;++i){
                fields[x][i]=fields[x][i+1];
            }
            fields[x][6]=goingIn;
            for(let i = 0; i<7;++i){
                fields[x][i].setField(i,x); 
            }
        } else if(x == 0){
            out = fields[6][y];
            for(let i = 6; i>0;--i){
                fields[i][y] = fields[i-1][y];
            }
            fields[0][y] = goingIn;
            for(let i = 0; i<7;++i){
                fields[i][y].setField(y,i); 
            }
        } else if(x==6){
            out = fields[0][y];
            for(let i = 0; i<6;++i){
                fields[i][y] = fields[i+1][y];
            }
            fields[6][y] = goingIn;
            for(let i = 0; i<7;++i){
                fields[i][y].setField(y,i); 
            }
        }
        out.setField(0,0);
        out.draw(buttonCtx);
        if(out.hasTreasure  && out.treasure.position == 0){
            out.treasure.drawTreasure(buttonCtx);
        }
        for(let i = 0; i<players.length;++i){
            if(players[i].field == out){
                players[i].setField(goingIn);
            }
        }
        draw();
        hasMoved = true;
        info.innerHTML = `<br>${currentPlayer+1}. játékos<br>lép`;
    }
});

delegate(table, 'contextmenu', '#arrowButton', function(e){
    e.preventDefault();
    if(!hasMoved && !hasWinner){
        out.nextFieldRotation();
        out.draw(buttonCtx);
        out.draw(extraCtx);
        if(out.hasTreasure  && out.treasure.position == 0){
            out.treasure.drawTreasure(buttonCtx);
            out.treasure.drawTreasure(extraCtx);
        }
    }    
});

extra.addEventListener('contextmenu', function(e){
    e.preventDefault();
    if(!hasMoved && !hasWinner){
        out.nextFieldRotation();
        out.draw(buttonCtx);
        out.draw(extraCtx);
        if(out.hasTreasure  && out.treasure.position == 0){
            out.treasure.drawTreasure(buttonCtx);
            out.treasure.drawTreasure(extraCtx);
        }
    }    
});

canvas.addEventListener('mouseover', function(e){
    if(!hasStepped && hasMoved && !hasWinner){
        players[currentPlayer].showAvailableFields(fields, availableFields);
        for(let i = 0; i<availableFields.length;++i){
            ctx.fillStyle = 'rgba(0,200,0,0.5)';
            ctx.fillRect(availableFields[i].x+1, availableFields[i].y+1, 88, 88);
        }
    }    
});

canvas.addEventListener('mouseout', function(e){
    availableFields=[];
    draw();
});

canvas.addEventListener('click', function(e){
    if(!hasStepped && hasMoved && !hasWinner){
        let canv = canvas.getBoundingClientRect();
        let x = Math.floor((e.x-canv.left)/90);
        let y = Math.floor((e.y-canv.top)/90);  
        if(availableFields.includes(fields[y][x])){
            if(players[currentPlayer].field != fields[y][x]){
                players[currentPlayer].field.playersNum--;
                players[currentPlayer].setField(fields[y][x]);
            }
            players[currentPlayer].drawPlayer(ctx);
            hasStepped = true;
            if(players[currentPlayer].cards.length != 0 && players[currentPlayer].cards[0].field == players[currentPlayer].field){
                players[currentPlayer].cards.splice(0,1);
                playersPoints[currentPlayer]++;
                players[currentPlayer].field.hasTreasure = false;
                if(players[currentPlayer].cards.length != 0){
                    players[currentPlayer].cards[0].setPosition(0);
                }
            }
            if(playersPoints[currentPlayer] == cardsPerPlayer.value && players[currentPlayer].field == players[currentPlayer].startField){
                hasWinner = true;
            }
            draw();
            if(hasWinner){
                //save.innerHTML = "";
                canvas.style.filter = "blur(20px)";
                info.innerHTML = `<br>${currentPlayer+1}. játékos<br>nyert!`;
                let press = document.createElement('button');
                press.innerHTML = "Új játék";
                press.addEventListener('click', function(){
                    location.reload();
                });
                press.style.border = "2px solid orange";
                press.style.padding = "10px 10px";
                press.style.backgroundColor = "saddlebrown";
                press.style.fontWeight = "900";
                table.firstChild.lastChild.style.marginTop="25px";
                table.firstChild.lastChild.append(press);
            } else {
                nextRound();
            }        
        }
    }
});

delegate(table, 'mouseover', '#arrowButton', function(e){
    if(!hasMoved && !hasWinner){
        buttonCanvas.style.display="inline";
        out.draw(buttonCtx);
        if(out.hasTreasure  && out.treasure.position == 0){
            out.treasure.drawTreasure(buttonCtx);
        }
        let x = this.parentElement.parentElement.rowIndex*90+120;
        let y = this.parentElement.cellIndex*90;
        buttonCanvas.style.left= `${y}px`;
        buttonCanvas.style.top= `${x}px`;
    }
});

delegate(table, 'mouseout', '#arrowButton', function(e){
    buttonCanvas.style.display="none";
});

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector)
        if (this.contains(targetElement)) handler.call(targetElement, event)
    })
}

function nextRound(){
    if(hasMoved && hasStepped){
        let p = document.querySelector(`p#player${currentPlayer+1}`);
        p.innerHTML = "";
        p.innerHTML = `${currentPlayer+1}. játékos: ${playersPoints[currentPlayer]}/${cardsPerPlayer.value}`;
        p.style.border = "";
        hasMoved = false;
        hasStepped = false;
        currentPlayer = (currentPlayer + 1) % playersNum.value;
        p = document.querySelector(`p#player${currentPlayer+1}`);
        p.style.border = "solid 5px orange";
        info.innerHTML = `<br>${currentPlayer+1}. játékos mezőt helyez`;
    }
}
