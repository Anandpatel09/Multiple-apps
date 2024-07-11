//generate table.
const referesh=document.querySelector("#referesh")
const inPut=document.getElementById("inputName");
const btn =document.getElementById("btn");

//referseh button
referesh.addEventListener("click",()=>{
    document.querySelector("#tabl1 #result1").innerHTML="";
    inWeight.value="";
    inHeight.value="";
    //table referesh

    document.querySelector("#tabl #result").innerHTML="";
    inPut.value="";
    //age referesh

    document.getElementById("result2").innerHTML="";
    // speech referesh

    document.getElementById("text").value="";
    speechSynthesis.cancel();//to stop the speech
    

})

btn.addEventListener("click", ()=>{
    
    for(var i=1;i<=20;i++)
    {
      var tabl= inPut.value*i;
     document.querySelector("#tabl #result").innerHTML+=`<h5>${tabl}</h5>`;
    }
})

// Genrate Body Mass Index

const inWeight=document.getElementById("inputWeight");
const inHeight=document.getElementById("inputHeight");
const btn1=document.getElementById("btn1");
btn1.addEventListener("click",()=>{
    // var height=(inHeight.value * inHeight.value)
    var height=(inHeight.value **2)
    alert(height)
    const BodyMassIndex=(inWeight.value/height)
    // alert(BodyMassIndex)
    document.querySelector("#tabl1 #result1").innerHTML=`<h5>Body Mass Index = ${BodyMassIndex}</h5>`
})

//Age calculator

const birthDate=document.getElementById("birthDate");
var currentDay= new Date();

    const current=document.getElementById("cur").innerHTML=`<input type="" value="${currentDay.getDate()} / ${currentDay.getMonth()} / ${currentDay.getFullYear()}" disabled />`;
    
btn2.addEventListener('click', ()=> {
    var birthData= new Date(birthDate.value);
    var year = currentDay.getFullYear() - birthData.getFullYear();
    var months = currentDay.getMonth() - birthData.getMonth();
    var day= currentDay.getDate() - birthData.getDate()
    if (months < 0 || (months === 0 && currentDay.getDate() < birthData.getDate())) 
        year--;
        var month=Math.abs(months)
        var days=Math.abs(day)
        document.getElementById("result2").innerHTML=`<h5>You are ${year} years ${month} months ${days} days Old </h5>`;
    

    }
)



// text to Speech
btn3.addEventListener("click", ()=>{
    const text=document.getElementById("text").value;
    const speech= new SpeechSynthesisUtterance();
    speech.text=text;
    speech.pitch=1;
    speech.rate=1;
    speech.volume=1;
    window.speechSynthesis.speak(speech);



})

//stop Watch
let watch=document.getElementById("watch");
let enter=document.getElementById("enter");
let time;
let second=0;
let minutes=0;
let hours=0;

function start(){
   
    time=setInterval(()=>{
        second++;
      if(second>=60){
        second=0;
        minutes++;
        if(minutes>=60){
            hours++;
        }
      }
      display()
    },1000)
}

function restart(){
    clearInterval(time)
    second=0;
    minutes=0;
    hours=0;
    start();
}

function stop(){
    clearInterval(time)
    
}

function display(){
watch.value=`${second} : ${minutes} : ${hours}`;
}

//convert to upper case

const texty =document.getElementById("texty");
const btn5=document.getElementById("btn5");
btn5.addEventListener("click",()=>{
 texty.value=texty.value.toUpperCase();
 navigator.clipboard.writeText(text2.value);
})


//convert to lower case

const text2 =document.getElementById("text2");
const btn6=document.getElementById("btn6");
btn6.addEventListener("click",()=>{
 text2.value=text2.value.toLowerCase();
 navigator.clipboard.writeText(text2.value);
})



// navigator.clipboard.writeText(copyText)
//copyText.select();
//document.execCommand("copy");


//