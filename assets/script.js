var dateValue2 = "2021-08-03";



function func() {
    var dateValue = "2021-08-03";

    var currentDate = Math.abs((new Date().getTime() / 1000).toFixed(0));
    var futureDate = Math.abs((new Date(dateValue).getTime() / 1000).toFixed(0));
    var diff = currentDate - futureDate;

    var days = Math.floor(diff / 86400);
    var hours = Math.floor(diff / 3600) % 24;
    var minutes = Math.floor(diff / 60) % 60;
    var seconds = diff % 60;

    if (days < 10) {
        days = "0" + days;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // document.getElementById("data").innerHTML = days + " days, " + hours + ":" + minutes + ":" + seconds;
    document.getElementById("days").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + days +" days ";

    document.getElementById("hours").innerHTML ="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +  hours +" Hours ";
    document.getElementById("minutes").innerHTML ="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +   minutes +" Minutes ";
    document.getElementById("seconds").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + seconds +" Seconds" ;


    

     
    


}
func();
setInterval(func,1000); 


const diffInMonths = (end, start) => {
    var timeDiff = Math.abs(end.getTime() - start.getTime());
    
    return Math.round(timeDiff / (2e3 * 3600 * 365.25));

 }
 
 const result = diffInMonths(new Date(dateValue2), new Date());
 document.getElementById("nth-time").innerHTML =  result + "th &nbsp;";
 document.getElementById("nth-time2").innerHTML =  result + "th &nbsp;";




//  ---------------------------------------------
const anni_animator= document.querySelector(".nth-container");




 

// setInterval(()=>{
//     let counter=document.getElementById('length').offsetWidth;
//     if(anni_animator.classList.contains("rotating")){
//  const transition = document.querySelector('.rotating');

//   transition.addEventListener('transitionend', () => {
//     anni_animator.style=`transition:none;right:-230px;`;
//     anni_animator.classList.remove("rotating");

// });

        
// }else{
//     anni_animator.classList.add("rotating");
//     anni_animator.style=`right:${counter}px; transition:all  15s ease-in-out;`;
       
// };

// },1000)




// -----------------------------------------------------------
let user1="2004-5-25";
let user2="2007-5-18";

document.getElementById("age-date").innerHTML= user1;
document.getElementById("age-date2").innerHTML= user2;

    var dob = new Date(user1);  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
document.getElementById("age1").innerHTML=age;

var dob2 = new Date(user2);  
//calculate month difference from current date in time  
var month_diff2 = Date.now() - dob2.getTime();  
  
//convert the calculated difference in date format  
var age_dt2 = new Date(month_diff2);   
  
//extract year from date      
var year2 = age_dt2.getUTCFullYear();  
  
//now calculate the age of the user  
var age2 = Math.abs(year2 - 1970);  
document.getElementById("age2").innerHTML=age2;

// ------------------------------------------------------------------



 


// console.log(math.floor(predict/3600)-math.floor());



setInterval(() => {


let start2=new Date();
let currentdateyear=new Date().getUTCFullYear();
let currentdateMonth= new Date().getMonth();
let currentday= new Date().getDate();

if(currentdateMonth==12){
currentdateMonth=-1;
currentdateyear+=1;
};
let futuremonth=currentdateMonth+1;

if(currentday<4){
    var futuredate=new Date(currentdateyear,currentdateMonth,3);
}else{
    var futuredate=new Date(currentdateyear,futuremonth);
};

let predict=futuredate.getTime() - start2.getTime() ;
let days=Math.floor(predict / (1000 * 3600 * 24));
let hours= Math.floor(((predict/1000) - ((Math.floor(predict / (1000 * 3600 * 24))) * 86400)) / (3600));
let minutes= Math.floor((((predict/1000)-(days*86400))-(hours*3600))/60);
let seconds2=Math.floor(((((predict/1000)-(days*86400))-(hours*3600))-(minutes*60)));

if(days==0 && hours==0 && minutes==0 && seconds2==0){
    document.getElementById("row-xx").style="display:none";
    document.getElementById("gg").innerHTML=`<div style="line-height:1.5em">
 <div> Dear My Love,</div>
<p> I Love you so much. Although I told that many times to you , I can swear these words come from my deepest part of my heart.
I wanna stay and grow with you till I die.You're an angel for my life. I got everything from you what I expected,Love,attention,jealous everythig.
I believed I did unbreakable relationship with you.Let me say again , I love you girl.
 Be my girl till you become my wife <3.  </p>

<div style="margin-left:auto">Your lovingly Nyi Linn Kha.</div>

      </div>`;
}


document.getElementById("day-counter").innerHTML=  days+ " Days ";
document.getElementById("hours-counter").innerHTML= hours+" Hours ";
document.getElementById("min-counter").innerHTML= minutes+ " Minutes ";
document.getElementById("sec-counter").innerHTML= seconds2 + " Second Left.";



}, 1000);
// ------------------------------------------------------------------------

let images=
[
    {"name":"image1","type":"received_278704961096878.jpeg"},
    {"name":"image2","type":"received_662052311678386.jpeg"},
    {"name":"image3","type":"received_1890709544650553.gif"},
    {"name":"image4","type":"received_2629034400572074.jpeg"},
    {"name":"image5","type":"received_3114334582155822.jpeg"},
    {"name":"image6","type":"received_3213615718872116.jpeg"},
    {"name":"image7","type":"received_3364763293753009.jpeg"}
    

    
];
for(let i=0;i<images.length;i++){
let name=images[i].name;
let type=images[i].type;

document.getElementById("gallery").innerHTML+=`<div class="responsive">
<div class="gallery">
  <a target="_blank" href="assets/images/`+type+`">
    <img src="assets/images/`+type+`" alt="`+name+`" width="600" height="400">
  </a>
 
</div>
</div>
`;


}

// -------------------------------------------------------

let counter=false;

let btn=document.getElementById("button");

btn.addEventListener("click",()=>{
    
    if(counter==true){
        let container=document.querySelector(".row6");
        container.classList.remove("open");
        btn.classList.remove("fa-angles-up");
        btn.classList.add("fa-angles-down");
        counter=false;
    }else{
       
        let container=document.querySelector(".row6");
        container.classList.add("open");
        btn.classList.remove("fa-angles-down");
        btn.classList.add("fa-angles-up");
        counter=true;
    }
   
});
