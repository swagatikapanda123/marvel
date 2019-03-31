
var questinsArray = ['Which place is Asgard?', 'which is the reality stone?', 
'who is Ronan the accuser?', 'who is the king of Asgard?',
'Who directed THE AVENGERS?', '"Nothing goes over my head my reflexes are too fast I would catch it" who said that?'
'"sometimes you gotta run before you can walk" who said that?','In which picture Steve looks hot?', 
'who is the cutest?', '"I am with you till the end of the line " who said that?'];
var asgard='asgard.jpeg';
var knowhere='knowhere.jfif';
var xandar='xandar.jfif';
var thanos='thanos.jfif';
var thor='thor.jfif';
var odin='odin.jfif';
var ronan='ronan.jfif';
var hela='hela.jfif';
var lee='lee.jfif';
var joss='joss.jfif';
var jon='jon.jpg';
var tony='tony.jfif';
var drax='drax.jfif';
var mantis='mantis.jfif';
var blackwidow='blackwidow.jfif';
var steve1='steve1.jfif';
var steve2='steve2.jfif';
var steve3='steve3.jfif';
var groot='groot.jfif';
var starlord='starlord.jfif';
var realitstone='realitystone.jfif';
var timestone='timestone.jfif';
var powerstone='poowerstone.jfif';

var responses =[
[knowhere, xandar,  asgard],
[realitysone, powerstone, timestone],
[hela, thanos, ronan],
[thor, odin, thanos],
[joss, jon, lee],
[blackwidow, mantis, drax],
[tony,thor,steve3],
[steve1,steve2,steve3],
[thanos,drax,groot],
[tony,steve1,thor]
];

var userResponse=[];
var correctResponse=[3,1,3,2,1,3,1,1,3,2];


var qNum=1, chA,chB,chC,strImage1,strImage2,strImage3, numberOfCorrect=0,numberOfFalse=0, resultQuestion=false;

function showFinalResult(){
  var r="";
  if(numberOfCorrect==10)
    {
      r="Bravo! Your score is: "
    }
  else if(numberOfCorrect>=7 && numberOfCorrect <10)
    {
      r="Very good! Your score is: "
    }
  else if(numberOfCorrect>=5 && numberOfCorrect <7)
    {
      r="good! Your score is: "
    }
  else
    {
      r="Not bad! Your score is: "
    }
  document.getElementById('result').innerHTML = r+ numberOfCorrect + "/10.";
  setResultTable();
}

function checkResult(num){
  resultQuestion=false;
  qNum= document.getElementById('questionNumber').innerHTML;
      if(qNum==1)
        {
            if(num==correctResponse[qNum-1])
              {
                numberOfCorrect++;
                resultQuestion=true;
              }
            else{
               numberOfFalse++; 
            } 
        }
       else if(qNum==2)
         {
            if(num==correctResponse[qNum-1])
              {
                numberOfCorrect++;
                resultQuestion=true;
              }
            else{
               numberOfFalse++; 
             }
         }
       else if(qNum==3){
            if(num==correctResponse[qNum-1])
              {
                numberOfCorrect++;
                resultQuestion=true;
              }
             else{
               numberOfFalse++; 
             }
       }
        else if(qNum==4){
            if(num==correctResponse[qNum-1])
              {
                numberOfCorrect++;
                resultQuestion=true;
              }
             else{
               numberOfFalse++; 
             }
        }
        else if(qNum==5){
            if(num==correctResponse[qNum-1])
              {
                numberOfCorrect++;
                resultQuestion=true;
              }
            else{
               numberOfFalse++; 
            } 
        }
      else if(qNum==6){
            if(num==correctResponse[qNum-1])
              {
                numberOfCorrect++;
                resultQuestion=true;
              }
            else{
               numberOfFalse++; 
             }
      }
        else if(qNum==7){
            if(num==correctResponse[qNum-1])
              {
                numberOfCorrect++;
                resultQuestion=true;
              }
             else{
               numberOfFalse++; 
             }
        }
        else if(qNum==8){
            if(num==correctResponse[qNum-1])
              {
                numberOfCorrect++;
                resultQuestion=true;
              }
             else{
               numberOfFalse++; 
             }
        } 
         else if(qNum==9){
            if(num==correctResponse[qNum-1])
              {
                numberOfCorrect++;
                resultQuestion=true;
              }
             else{
               numberOfFalse++; 
             }
         }
        else if(qNum==10){
            if(num==correctResponse[qNum-1])
              {
                numberOfCorrect++;
                resultQuestion=true;
              }
             else{
               numberOfFalse++; 
             }
        }
       else{
        }
  //Save user responses in arrray
  userResponse[qNum-1]= num;
  if(resultQuestion==true)
    {
      document.getElementById('result').innerHTML = " Your response is correct!";
    }
  else
    {
      document.getElementById('result').innerHTML = " Your response is wrong!";
    }
}
function setNextQuestion(){
  document.getElementById('result').innerHTML ="";
  if(qNum==10){
    document.getElementById('result').innerHTML="YOU HAVE REACHED AT THE END";
  }
  else{
    qNum++;
  }
  document.getElementById('questionNumber').innerHTML= qNum;
  setQustionAndResponse();
}
function setPreviousQuestion(){
  document.getElementById('result').innerHTML ="";
  if(qNum==1){
    qNum=1;
  }
  else{
     qNum--;
  }
  document.getElementById('questionNumber').innerHTML= qNum;
  setQustionAndResponse()
}

function setQustionAndResponse(){
  qNum= document.getElementById('questionNumber').innerHTML;
  document.getElementById('question').innerHTML = qustionsArray[qNum-1];
  
  chA =document.querySelector("#choiceA"); 
 // strImage1= "url('" + response1[0] + ");'";
  strImage1= "url('" + responses[qNum-1][0] + ");'";
  chA.style.width= "200px";
  chA.style.height = "200px";
  chA.style.backgroundImage = strImage1;
  
  chB =document.querySelector("#choiceB"); 
  strImage2= "url('" + responses[qNum-1][1] + ");'";
  chB.style.width= "200px";
  chB.style.height = "200px";
  chB.style.backgroundImage = strImage2;
  
  chC =document.querySelector("#choiceC"); 
   strImage3= "url('" + responses[qNum-1][2] + ");'";
  chC.style.width= "200px";
  chC.style.height = "200px";
  chC.style.backgroundImage = strImage3;
}

function setResultTable(){
   var table = document.getElementById("tblResult");
  // Create an empty <tr> element for header
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
  cell1.innerHTML = "Q#"
  cell2.innerHTML = "Question";
  cell3.innerHTML = "Your response";
  cell4.innerHTML = "Correct response";
  
  //create other rows
  for(var i=1;i<=10;i++){
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    //cell1.innerHTML = document.getElementById('questionNumber').innerHTML;
    cell1.innerHTML = i;
    cell2.innerHTML = qustionsArray[i-1];
    cell3.innerHTML = userResponse[i-1];
    cell4.innerHTML = correctResponse[i-1];
  }


