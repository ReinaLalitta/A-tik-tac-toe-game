let cells = document.querySelectorAll('.cell');
const btn = document.querySelector('.js-btn');
const restart = document.querySelector('.restart');
const winCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


let player1array = [];
let player2array = [];

let score= JSON.parse(localStorage.getItem('score')) || {
    player1Score:0,
    player2Score:0
}
let result = true;

for(let i=0; i< cells.length; i++){
    cells[i].addEventListener('click',() => {
        if(result===true){
            cells[i].innerHTML ='X';
            player1array.push(i);
            result= false;
            document.querySelector('.turn').innerHTML= 'O turn';
            document.querySelector('.results').innerHTML = '';
        }
        else if(result==false){
            cells[i].innerHTML ='O';
            player2array.push(i);
            result= true;
            document.querySelector('.turn').innerHTML= 'X turn';
        }
        Winner();

    })
};
Winner();
restart.addEventListener('click',()=>{

    score.player1Score = 0;
    score.player2Score = 0;
    
    document.querySelector('.player1Score').innerHTML="Player X:" + score.player1Score;
    
    document.querySelector('.player2Score').innerHTML="Player O:"+ score.player2Score;
    localStorage.setItem('score', JSON.stringify(score));
})


    function Winner(){
        winCondition.find((item)=>{
            if(item.filter((i)=> player1array.includes(i)).length === 3 ){ 
                document.querySelector('.results').innerHTML = 'Player X win';
                score.player1Score++;
                player();
                reset();
                result===true;
                return item;
            }
            else if(item.filter((i)=> player2array.includes(i)).length === 3){
                document.querySelector('.results').innerHTML = 'Player O win';
                score.player2Score++;
                player();
                reset();
                result===true 
            }
            

            else if(player1array.length === 5 || player2array.length === 5){
                document.querySelector('.results').innerHTML = 'Draw';
                reset();
            }
            return;
        })
        localStorage.setItem('score', JSON.stringify(score));
    }
function player(){
    document.querySelector('.player1Score').innerHTML="Player X:"+score.player1Score;
    document.querySelector('.player2Score').innerHTML="Player O:" + score.player2Score;
}

player();

function reset(){
    for(let i = 0; i<cells.length;i++){
    cells[i].innerHTML='';
    }
    player1array=[];
    player2array= [];
    result=true;
    document.querySelector('.turn').innerHTML= '';
    



}
btn.addEventListener('click',()=>{
    reset();
});

// function Winner(){
//     let roundWon = false;
//     for(let i = 0; i< winCondition.length;i++){
//         const condition = winCondition[i];
//         console.log(condition);
//         const Cell1 = options[condition[0]];
       
//         const Cell2 = options[condition[1]];
//         const Cell3 = options[condition[2]];
//          console.log(Cell2);
//         if(Cell1 === "" || Cell2 == "" || Cell3 ==""){
//             continue;

//         }
//         if(Cell1===Cell2 && Cell2===Cell3){
//             roundWon = true;
//             break;
//         }
        
//     }
//     if(roundWon){
//         document.querySelector('.result').innerHTML = 'player1 win';
//         result =false;
//     }
//     else if(!options.includes("")){
//          document.querySelector('.result').innerHTML = 'Draw';
//     }
//     else{
//         reset();
//     }

// }