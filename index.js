var len = document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        var buttonInfo=this.innerHTML;
        makeSound(buttonInfo); 
        buttonAnimation(buttonInfo);
       
    });
}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch(key){
        case "w":
        var audio=new Audio("sound/piano-mp3_A1.mp3");
        audio.play();
        break;
        case "a":
            var audio=new Audio("sound/piano-mp3_B0.mp3");
            audio.play();
            break;
            case "s":
                var audio=new Audio("sound/piano-mp3_c4.mp3");
                audio.play();
                break;
                case "d":
                    var audio=new Audio("sound/piano-mp3_D5.mp3");
                    audio.play();
                    break;
                    case "j":
                        var audio=new Audio("sound/piano-mp3_E5.mp3");
                        audio.play();
                        break;

                        case "k":
                            var audio=new Audio("sound/piano-mp3_Gb1.mp3");
                            audio.play();
                            break;
                            case "l":
                                var audio=new Audio("sound/piano-mp3_Gb7.mp3");
                                audio.play();
                                break;
                                default :alert("press correct key");
}
}

function buttonAnimation(currentKey) {
    var activeButtons = document.querySelectorAll("." + currentKey);

    activeButtons.forEach(function(activeButton) {  
        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    });
}