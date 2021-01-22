
function megaFriend(friendName){
    var myFriend = friendName[0];
    for(var i = 0; i < friendName.length; i++){
    var element = friendName[i];
     if( element > myFriend){
        myFriend = element;
    }

    } return myFriend;
}
   
var friendName =["zuckerberg", "sumon","tasmia"];
var result = megaFriend(friendName)
console.log(result) ;

