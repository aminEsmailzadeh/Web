


const startButton = document.getElementById("start-btn");
const nextButton  = document.getElementById("next-btn");
const quistionContiner = document.getElementById("quistion-container");
const quistionElement  = document.getElementById('quistion');
const answerButton     = document.getElementById('answer-buttons');

const posX = document.getElementById('PosX');
const PosY = document.getElementById('PosY');

const mousePosition= (event)=>{
    posX.innerText = event.pageX;
    PosY.innerText = event.pageY;
};
window.addEventListener("mousemove",mousePosition);


class classAns {
  constructor(text, correct) {
      this.text = text;
      this.correct = correct;
  }
}

class classQuise {
  constructor(quistion, ...ans) {
      this.quistion = quistion;
      this.ans = ans;
  }

  *getAnswers() {
      for (const answer of this.ans) {
          yield answer;
      }
  }
}



// const quistions= [
//     {
//         quistion: 'what is 2+2?',
//         answers:[
//             {text:'22', correct:false},
//             {text:'4', correct:true},
//             {text:'44', correct:false},
//             {text:'2', correct:false}
//         ]
//     },
//     {
//         quistion: 'what is 2*4?',
//         answers:[
//             {text:'8', correct:true},
//             {text:'4', correct:false},
//             {text:'44', correct:false},
//             {text:'2', correct:false}
//         ]
//     }
// ]


let quistions = []; 

var jqxhr = $.getJSON( "quistion.json", function(json) {
    console.log( "success load " );
  })
    .done(function(json) {
      console.log( "second success" );
    })
    .fail(function(json) {
      console.log( "error" );
    })
    .always(function(json) {
      console.log( "complete" );
    });
   
  // Perform other work here ...
   
  // Set another completion function for the request above
  jqxhr.always(function(json) {
    console.log( "second complete" );
    
       $.each(json, function(i, value){
        console.log( i,value.quistion);
        let answerArray = [];
        for(let i=0; i<value.answers.length;i++)
        {
            answerArray.push(new classAns(value.answers[i].text,value.answers[i].correct))
        }
      let quis= new classQuise(value.quistion,...answerArray);
      quistions.push(quis);
   
        });
      
  console.log(quistions);
  });

let shuffledQuistion = [] , currentQuistionIndex;


nextButton.addEventListener('click',()=>{

    currentQuistionIndex++;
    setnextQuistion();
});


startButton.addEventListener('click',()=>{
console.log('Click On Start Button');
console.log(quistions[0].quistion);
startButton.classList.add('hide');
shuffledQuistion =  shuffledQuistion = quistions.sort(() => { Math.random -0.5});
currentQuistionIndex = 0;
quistionContiner.classList.remove('hide');

setnextQuistion();

} );


function setnextQuistion(){

    resetState();
    showQuistion(shuffledQuistion[currentQuistionIndex]);
}

function showQuistion(quistion){

    quistionElement.innerText= quistion.quistion;


    for(const answer of  quistion.getAnswers())
    {
        const button= document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
        answerButton.appendChild(button);
        
    }

  }

function selectAnswer(ans){

    const selectedAns= ans.target;
    const correct = selectedAns.dataset.correct;
    setStatusClass(document.body,correct);
    const arr = Array.from(answerButton.children);
  
    arr.forEach(button => {
        setStatusClass(button,button.dataset.correct);
    });

    if(shuffledQuistion.length > currentQuistionIndex+1){
         nextButton.classList.remove('hide');
    }
    else{
             startButton.innerText='Restart';
             startButton.classList.remove('hide');
    }
 }

function resetState(){

    cleartStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild);
    }

    
}

function setStatusClass(element,correct){
    cleartStatusClass(element);

    if(correct)
    {
        element.classList.add('correct');
    }
    else
    {
        element.classList.add('wrong');
    }
}

function cleartStatusClass(element)
{
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
