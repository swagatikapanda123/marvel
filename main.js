var questinsArray = ['Which place is Asgard?', 'which is the reality stone?', 
'who is Ronan the accuser?', 'who is the king of Asgard?',
'Who directed THE AVENGERS?', '"Nothing goes over my head my reflexes are too fast I would catch it" who said that?'
'"sometimes you gotta run before you can walk" who said that?','In which picture Steve looks hot?', 
'who is the cutest?', '"I am with you till the end of the line " who said that?'];
var asgard='marvel.png'
var knowhere='https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiDxdz2pqrhAhU_73MBHW02CR0QjRx6BAgBEAU&url=https%3A%2F%2Fmarvelcinematicuniverse.fandom.com%2Fwiki%2FKnowhere&psig=AOvVaw09LQJPVZJQ080Bwavv-NnN&ust=1554050372567815';
var xandar='https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi6qIOGp6rhAhXxV3wKHb0YBiUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.ign.com%2Fwikis%2Fmarvel-studios-cinematic-universe%2FXandar&psig=AOvVaw0Qa7yjDbErln-YhjM2UKD8&ust=1554050403738864';
var thanos='https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj0xLyVp6rhAhV773MBHbeUDpYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.thewrap.com%2Finfinity-war-thanos-snap-animals-kevin-feige%2F&psig=AOvVaw38Q0O-vT9DoYTOAjVGo9cG&ust=1554050435268450';
var thor='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.superbbtoys.com%2Fpic%2F2009%2520New%2520Figure%2FHot%2520Toys%2F12%2FMarvel%2520Avengers%2520Infinity%2520War%2520MMS474%2520Thor%2F05.jpg&imgrefurl=https%3A%2F%2Fwww.ebay.com%2Fitm%2FHOT-TOYS-1-6-MARVEL-AVENGERS-INFINITY-WAR-MMS474-THOR-ODINSON-ACTION-FIGURE-%2F283259952259&docid=9jTyw2Au5cKAGM&tbnid=7mX7TO4POETCYM%3A&vet=10ahUKEwjwkovTp6rhAhU973MBHThVBhMQMwikASgtMC0..i&w=894&h=1311&bih=608&biw=1366&q=thor&ved=0ahUKEwjwkovTp6rhAhU973MBHThVBhMQMwikASgtMC0&iact=mrc&uact=8';
var odin='https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.imgur.com%2FbtDs6LQ.jpg&imgrefurl=https%3A%2F%2Fimgur.com%2Fgallery%2F2JOlh&docid=D3ANVXQjSxk8HM&tbnid=rj0Va7jxLNQucM%3A&vet=10ahUKEwiPjfnnp6rhAhWZ8HMBHUF5DxIQMwirASg5MDk..i&w=736&h=736&bih=608&biw=1366&q=odin&ved=0ahUKEwiPjfnnp6rhAhWZ8HMBHUF5DxIQMwirASg5MDk&iact=mrc&uact=8';
var ronan='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.cinemablend.com%2Ffilter%3Ascale%2Fquill%2F1%2F1%2F2%2F6%2F6%2Fb%2F11266b523c052e0d47613344412f3c89652dbafc.jpg%3Fmw%3D600&imgrefurl=https%3A%2F%2Fwww.cinemablend.com%2Fnews%2F2466834%2Fwhat-ronan-the-accusers-role-will-be-in-captain-marvel&docid=SRGisvI_KIAwHM&tbnid=nGbP1hNDEVVQpM%3A&vet=10ahUKEwjh3dT5p6rhAhXb73MBHVM4DQwQMwhtKAIwAg..i&w=600&h=300&bih=608&biw=1366&q=ronan%20the%20accuser&ved=0ahUKEwjh3dT5p6rhAhXb73MBHVM4DQwQMwhtKAIwAg&iact=mrc&uact=8';
var hela='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sideshow.com%2Fproduct-asset%2F903107%2Ffeature&imgrefurl=https%3A%2F%2Fwww.sideshow.com%2Fcollectibles%2Fmarvel-hela-hot-toys-903107&docid=BeO6oS1JP3iscM&tbnid=FnDmzE4oBzW4oM%3A&vet=10ahUKEwje9bSIqKrhAhW56nMBHau8C8cQMwg-KAAwAA..i&w=990&h=600&bih=608&biw=1366&q=hela&ved=0ahUKEwje9bSIqKrhAhW56nMBHau8C8cQMwg-KAAwAA&iact=mrc&uact=8';
var lee='https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2018%2F11%2F13%2F00%2Fstan-lee-0.jpg%3Fw968h681&imgrefurl=https%3A%2F%2Fwww.independent.co.uk%2Farts-entertainment%2Ffilms%2Fnews%2Fstan-lee-dead-avengers-4-cameo-captain-marvel-a8631646.html&docid=XB-kdahmQjATPM&tbnid=mtPRWV3mMBwncM%3A&vet=10ahUKEwjc-JmWqKrhAhUEjuYKHZARDOQQMwhFKAUwBQ..i&w=968&h=681&bih=608&biw=1366&q=director%20of%20the%20avengers&ved=0ahUKEwjc-JmWqKrhAhUEjuYKHZARDOQQMwhFKAUwBQ&iact=mrc&uact=8';
var joss='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.thedailybeast.com%2Fimage%2Fupload%2Fc_crop%2Cd_placeholder_euli9k%2Ch_1439%2Cw_2560%2Cx_0%2Cy_0%2Fdpr_1.5%2Fc_limit%2Cw_1044%2Ffl_lossy%2Cq_auto%2Fv1492182154%2Farticles%2F2015%2F04%2F14%2Favengers-director-joss-whedon-and-james-gunn-on-female-superheroes-and-hillary-2016%2F150414-stern-whedon-tease_mccnws&imgrefurl=https%3A%2F%2Fwww.thedailybeast.com%2Favengers-director-joss-whedon-and-james-gunn-on-female-superheroes-and-hillary-2016&docid=NF-xo86dYoYo5M&tbnid=dT_uRnwNaBuObM%3A&vet=10ahUKEwjc-JmWqKrhAhUEjuYKHZARDOQQMwhAKAAwAA..i&w=1566&h=880&bih=608&biw=1366&q=director%20of%20the%20avengers&ved=0ahUKEwjc-JmWqKrhAhUEjuYKHZARDOQQMwhAKAAwAA&iact=mrc&uact=8';
var jon='https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FuEIMBhCKlPhtTB1BwVJZlrhLVDU%3D%2F0x0%3A3000x2056%2F1200x800%2Ffilters%3Afocal(1253x510%3A1733x990)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F51315817%2F522604192.0.jpg&imgrefurl=https%3A%2F%2Fwww.recode.net%2F2016%2F10%2F12%2F13252440%2Fjon-favreau-iron-man-jungle-book-virtual-reality-vr-goblins-gnomes-recode-podcast&docid=ZRggnYwe6fEhaM&tbnid=fGiwXR-2NNXmVM%3A&vet=10ahUKEwij6NG0qKrhAhXL6XMBHTgoBSEQMwg-KAAwAA..i&w=1200&h=800&bih=608&biw=1366&q=director%20of%20iron%20man&ved=0ahUKEwij6NG0qKrhAhXL6XMBHTgoBSEQMwg-KAAwAA&iact=mrc&uact=8';
var tony='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thewrap.com%2Fwp-content%2Fuploads%2F2017%2F07%2FRobert-Downey-Jr-Iron-Man-Pepper-Potts-Tony-Stark.jpg&imgrefurl=https%3A%2F%2Fwww.thewrap.com%2Fspider-man-homecoming-cameo-gwyneth-paltrow-pepper-potts-tony-stark%2F&docid=gNBWrd3nOaQzPM&tbnid=qZCXPxtD8ePVDM%3A&vet=10ahUKEwiKyIvGqKrhAhV98XMBHcluBnMQMwhrKAIwAg..i&w=618&h=412&bih=608&biw=1366&q=tony%20stark&ved=0ahUKEwiKyIvGqKrhAhV98XMBHcluBnMQMwhrKAIwAg&iact=mrc&uact=8';
var drax='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sideshow.com%2Fproduct-asset%2F902669%2Ffeature&imgrefurl=https%3A%2F%2Fwww.sideshow.com%2Fcollectibles%2Fmarvel-drax-the-destroyer-hot-toys-902669&docid=KnbAy4oDHJN9LM&tbnid=RNzav9XrMvt4cM%3A&vet=10ahUKEwiu783SqKrhAhWg_XMBHe8jDuYQMwhrKAAwAA..i&w=990&h=600&bih=608&biw=1366&q=drax&ved=0ahUKEwiu783SqKrhAhWg_XMBHe8jDuYQMwhrKAAwAA&iact=mrc&uact=8';
var mantis='https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.comicvine.com%2Fuploads%2Foriginal%2F11%2F113509%2F6585442-mantis%2Bmcu.jpg&imgrefurl=https%3A%2F%2Fcomicvine.gamespot.com%2Fmantis%2F4005-3324%2F&docid=bnwJfYB3uYVf8M&tbnid=n3Rd75rjZU48NM%3A&vet=10ahUKEwifkde8qarhAhXw73MBHbN-ASwQMwhuKAUwBQ..i&w=1688&h=2500&bih=608&biw=1366&q=mantis%20marvel&ved=0ahUKEwifkde8qarhAhXw73MBHbN-ASwQMwhuKAUwBQ&iact=mrc&uact=8';
var blackwidow='https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiP7NTVqarhAhX16XMBHRUtDiAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.screengeek.net%2F2018%2F04%2F05%2Fwhen-we-could-see-a-black-widow-solo-movie%2F&psig=AOvVaw3yG_vBXPkVqvZ1ouYhbApD&ust=1554051098323096';
var steve1='https://www.google.com/imgres?imgurl=http%3A%2F%2F24.media.tumblr.com%2F8f779e9b6df5c2e9a67de17fec9ee6dd%2Ftumblr_n1b26gwtSK1r00f26o1_500.jpg&imgrefurl=http%3A%2F%2Frebloggy.com%2Fpost%2Fsexy-hot-the-avengers-captain-america-chris-evans-steve-rogers-marvel-hotness-ca%2F77289725010&docid=leH2ZvRqChCc_M&tbnid=M1XxfqkBQEMqaM%3A&vet=10ahUKEwi6946GqqrhAhVY7nMBHU_fCWoQMwgzKAowCg..i&w=500&h=743&bih=608&biw=1366&q=steve%20rogers%20hot&ved=0ahUKEwi6946GqqrhAhVY7nMBHU_fCWoQMwgzKAowCg&iact=mrc&uact=8';
var steve2='https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0882%2F5118%2Fproducts%2FFunko-Pop-Marvel-Civil-War-Captain-America-2166606_1024x1024.jpeg%3Fv%3D1460142590&imgrefurl=https%3A%2F%2Fwww.newburycomics.com%2Fproducts%2Fcivil_war-funko_pop-_marvel-_civil_war-captain_america&docid=vvD73bf6NmjFvM&tbnid=v1xQDelWnKCbpM%3A&vet=12ahUKEwjzvsO9qqrhAhX8_XMBHQYCCnA4ZBAzKAcwB3oECAEQCA..i&w=700&h=1000&bih=608&biw=1366&q=captain%20america&ved=2ahUKEwjzvsO9qqrhAhX8_XMBHQYCCnA4ZBAzKAcwB3oECAEQCA&iact=mrc&uact=8';
var steve3='https://www.google.com/imgres?imgurl=https%3A%2F%2Ffsmedia.imgix.net%2Fb3%2Fe5%2F3a%2F14%2Fc929%2F47c0%2F8a47%2F75604e47b3bf%2Favengers-age-of-ultron-2015.jpeg%3Fauto%3Dformat%252Ccompress%26h%3D1200%26w%3D1200%26crop%3Dedges%26fit%3Dcrop&imgrefurl=https%3A%2F%2Fwww.inverse.com%2Farticle%2F31580-captain-america-death-avengers-infinity-war-mcu-bucky&docid=DIQcn_goXEu1eM&tbnid=2ULWLBcltDWtfM%3A&vet=10ahUKEwiT7eW3qqrhAhVq7XMBHSLvAkEQMwhqKAIwAg..i&w=1200&h=1200&bih=608&biw=1366&q=captain%20america&ved=0ahUKEwiT7eW3qqrhAhVq7XMBHSLvAkEQMwhqKAIwAg&iact=mrc&uact=8';
var groot='https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1305%2F2183%2Fproducts%2FBaby_Groot_Holder1_1024x1024.jpg%3Fv%3D1551255527&imgrefurl=https%3A%2F%2Fwww.bigsmall.in%2Fproducts%2Fbaby-groot-flower-pot&docid=kdKhERKu4_HAnM&tbnid=pum9_dBIpNNujM%3A&vet=10ahUKEwiJhZDxqqrhAhVD6nMBHS4pBJ8QMwg8KAMwAw..i&w=850&h=850&bih=608&biw=1366&q=groot&ved=0ahUKEwiJhZDxqqrhAhVD6nMBHS4pBJ8QMwg8KAMwAw&iact=mrc&uact=8';
var starlord='https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiYlPuMq6rhAhX0jOYKHTOuDdoQjRx6BAgBEAU&url=https%3A%2F%2Fmarvel-movies.fandom.com%2Fwiki%2FPeter_Quill&psig=AOvVaw1161mmaZG2rNihAUXAO-CI&ust=1554051474139697';
var realitysone='https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.redd.it%2Fv4fxjb7kqry11.jpg&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2Fthanosdidnothingwrong%2Fcomments%2F9xqvxz%2Fall_reality_stone_keepers_comment_here_if_you%2F&docid=MDRDUKh-j5lVgM&tbnid=Qm2hiMvjFNs93M%3A&vet=10ahUKEwjuk5CZv6rhAhXzV3wKHT9zBVAQMwh7KBYwFg..i&w=281&h=179&bih=608&biw=1366&q=reality%20stones&ved=0ahUKEwjuk5CZv6rhAhXzV3wKHT9zBVAQMwh7KBYwFg&iact=mrc&uact=8';
var timestone ='https://www.google.com/imgres?imgurl=https%3A%2F%2Fpixel.nymag.com%2Fimgs%2Fdaily%2Fvulture%2F2016%2F11%2F02%2Fmarvel-stones%2F02-time-stone.nocrop.w710.h2147483647.2x.jpg&imgrefurl=https%3A%2F%2Fwww.vulture.com%2F2016%2F11%2Fwhat-and-where-are-marvel-infinity-stones-doctor-strange-infinity-war.html&docid=ZjfbZDxxunM6UM&tbnid=YDemmGdK_kReoM%3A&vet=10ahUKEwjM7_Gyv6rhAhVimuYKHdjzAakQMwiFASgiMCI..i&w=918&h=788&bih=608&biw=1366&q=time%20stones&ved=0ahUKEwjM7_Gyv6rhAhVimuYKHdjzAakQMwiFASgiMCI&iact=mrc&uact=8';
var powerstone='https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.etsystatic.com%2F14495179%2Fr%2Fil%2F8f80db%2F1690726221%2Fil_794xN.1690726221_gyi7.jpg&imgrefurl=https%3A%2F%2Fwww.etsy.com%2Fau%2Flisting%2F633698308%2Fpurple-power-stone-raw-infinity-stones&docid=fqLKaVAvSAut7M&tbnid=mDq9EWR1I6Fj_M%3A&vet=10ahUKEwjtr6bQv6rhAhXo8XMBHU2CAcYQMwilASg6MDo..i&w=794&h=794&bih=608&biw=1366&q=power%20stones&ved=0ahUKEwjtr6bQv6rhAhXo8XMBHU2CAcYQMwilASg6MDo&iact=mrc&uact=8';

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

}