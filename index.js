var numberofDurmButtons=document.querySelectorAll(".drum").length;
// var voice=["tom-1","tom-2","tom-3","tom-4","crash","kick-bass","snare"];

for( var i=0;i<numberofDurmButtons;i++)
{


  document.querySelectorAll('.drum')[i].addEventListener('click',function()
  {
    // this.style.color="white";
    var button=this.innerHTML;

    makesound(button);
    buttonAnimation(button);



  });

//detecting keyboard press
  document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
  });

function makesound(key){
  switch (key) {
    case "w":
    var tom1 = new Audio("C:/Users/DARSHAN PRAJAPATI/Documents/drum pro/sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
    var tom2 = new Audio("C:/Users/DARSHAN PRAJAPATI/Documents/drum pro/sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
    var tom3 = new Audio("C:/Users/DARSHAN PRAJAPATI/Documents/drum pro/sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
    var tom4 = new Audio("C:/Users/DARSHAN PRAJAPATI/Documents/drum pro/sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
    var crash = new Audio("C:/Users/DARSHAN PRAJAPATI/Documents/drum pro/sounds/crash.mp3");
        crash.play();
        break;
    case "k":
    var kickbass = new Audio("C:/Users/DARSHAN PRAJAPATI/Documents/drum pro/sounds/kick-bass.mp3");
        kickbass.play();
        break;
    case "l":
    var snare = new Audio("C:/Users/DARSHAN PRAJAPATI/Documents/drum pro/sounds/snare.mp3");
        snare.play();
        break;

    default:
    console.log(button);
    break;

  }
}

  function buttonAnimation(key){
    var activeButton=document.querySelector("." + key);

        activeButton.classList.add("pressed");

        setTimeout(function() {
          activeButton.classList.remove("pressed");
        },100);
  }








}
