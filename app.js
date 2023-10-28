const container=document.querySelector('.container')
const text = document.querySelector('#text')
const totalTime =7500;
const breateTime = (totalTime/5)*2;
const holdTime = totalTime/5;

function breatheAnimation (){
    text.innerText='Breath In';
    container.className = 'container grows'
      setTimeout(()=>{
        text.innerText='Hold'
        setTimeout(()=>{
            text.innerText='Breath Out'
            container.className = 'container shrink'
        },holdTime)
    },breateTime)
}
breatheAnimation ()
setInterval(breatheAnimation,totalTime)