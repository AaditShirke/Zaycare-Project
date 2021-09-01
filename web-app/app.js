
function maxBatsmen(j) {
    var total=0;
    var elem = document.getElementsByName('batsman');
    for(var i=0; i < elem.length; i++){
        if(elem[i].checked==true){
            total =total +1;
    }
    if(total > 3){
        alert("You can only select up to 3 Batsmen") 
        elem[j].checked = false ;
        return false;
    }
    }

}


function maxBowlers(j) {
    var total=0;
    var elem = document.getElementsByName('bowler');
    for(var i=0; i < elem.length; i++){
        if(elem[i].checked==true){
            total =total +1;
    }
    if(total > 3){
        alert("You can only select up to 3 Bowlers") 
        elem[j].checked = false ;
        return false;
    }
    }

}


function maxWicketKeepers(j) {
    var total=0;
    var elem = document.getElementsByName('wicketKeeper');
    for(var i=0; i < elem.length; i++){
        if(elem[i].checked==true){
            total =total +1;
    }
    if(total > 1){
        alert("You cannot select more than 1 Wicket-Keeper") 
        elem[j].checked = false ;
        return false;
    }
    }

}


function maxAllRounders(j) {
    var total=0;
    var elem = document.getElementsByName('allRounder');
    for(var i=0; i < elem.length; i++){
        if(elem[i].checked==true){
            total =total +1;
    }
    if(total > 2){
        alert("You can only select up to 2 All-Rounders") 
        elem[j].checked = false ;
        return false;
    }
    }

}

document.getElementById('submit').onclick = function() {
    var markedCheckbox = document.getElementsByClassName('players');
    for (var checkbox of markedCheckbox) {
      if (checkbox.checked)
        document.getElementById('finalTeam').append(checkbox.parentElement.textContent + ' ');
        
    }
  }
