function submit(){
    var score=0;

   var q1answer= document.querySelector('input[name="q1"]:checked');
   if(q1answer && q1answer.value==="paris")
   {
    score +=1;
   }

   var q2answer= document.querySelector('input[name="q2"]:checked');
   if(q2answer && q2answer.value==="mars")
   {
    score +=1;
   }
   var q3answer= document.querySelector('input[name="q3"]:checked');
   if(q3answer && q3answer.value=="bluewhale")
   {
    score +=1;
   }

   var result= document.getElementById("result");
   result.textContent="Your result is:" + score  + "/3"
}