let start=document.querySelector("#start");
let stop=document.querySelector("#stop");

let randomNumber=function(){
    const HEX="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)
    {
        color+=HEX[Math.floor(Math.random()*16)];
    }
   // console.log({color});
   return color;
}
let changeColor=null;
let count=0;

let changeBgColor=function(){
    function perform() 
    {
        document.body.style.backgroundColor=randomNumber();
    }
     if(changeColor==null)
     {
       changeColor=setInterval(perform,1000);
       ////textplay(0);
     }
}
start.addEventListener("click",()=>{
    changeBgColor();
   // console.log(changeColor);
})
let stopChanging=function(){
    clearInterval(changeColor)
  //  textplay(1);
}
stop.addEventListener("click",()=>{
    stopChanging();
    // console.log("hi");
    changeColor=null;
})

// console.log({element});
// console.log(element.children);