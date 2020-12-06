
function converter(){
     let birthYear=prompt("in which year have you were born ?");
     let ageInDays= (2020-birthYear)*365;
     let age=2020-birthYear;
     var h2=document.createElement('h2');
     if(birthYear<=2020 && birthYear){
         let answer=document.createTextNode('Your '+age+' years old in days is :'+ageInDays+' days old');
         h2.setAttribute('id','converter');
         h2.appendChild(answer);
         document.getElementById('flex-box-result').appendChild(h2);
     }else if(birthYear>2020){
         alert('The year you have put is greater than the current year which is illogic, Please enter a valid year.');
     }
    }

function reset(){
     let areYouSure=prompt("Are you sure you wanna reset the first item ? If you are sure please write \"yes\"");
     if(areYouSure=="yes"){
        document.getElementById('converter').remove();
     }
    }