(function($){
  $(function(){

    $('.sidenav').sidenav();
    //$('.parallax').parallax();
    $('.tabs').tabs({"swipeable": true});
    

  }); // end of document ready
})(jQuery); // end of jQuery name space
document.addEventListener('deviceready', onDeviceReady, false);

function loadArticle(data,item) {
  //Buidem el contingut dins de la pestanya 2
  $("#test-swipe-2").empty();
  //Definim els atributs
  let newh1 = $('<h1>'+data[item]["title"]+'</h1>');
  let newsumary = $('<p>'+data[item]["summary"]+'</p>');
  let newimage = $('<img src="'+data[item]["imageUrl"]+'"></img>');
  //Afegim els objectes dins la pestanya 2
  $("#test-swipe-2").append(newh1);
  $("#test-swipe-2").append(newsumary);
  $("#test-swipe-2").append(newimage);
  //Cambiem de pagina
  $('.tabs').tabs('select', "test-swipe-2");
}
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //Funcionalidad login
    let userList = {"user":"test123","user2":"test"};
    $("#loginButton").click(function(){
      inputUser=$("#user").val();
      inputPass=$("#password").val();
      if(inputUser in userList){
        if(userList[inputUser]==inputPass){
          alert("Dades correctes!!");
        }else{
          alert("Error: Les dades introduides no son correctes");
        }
      }else{
        alert("Error: Les dades introduides no son correctes");
      }
      });
}
