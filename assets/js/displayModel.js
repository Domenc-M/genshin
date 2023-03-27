
//////////////////////////////////PULL ONE
function displaySingleCharacter(characterPulled)
{
    // ///////////////////////////DISPLAY BOX
    var displayBox = document.createElement("div");
    displayBox.id = "singleCharacterDisplayBox"

    // //////////////////////////VIDEO
    var pullVideo = document.createElement('video');
    pullVideo.id = "pullVideo"
    pullVideo.src = "../assets/img/ui/5starwish-single.mp4";
    pullVideo.autoplay = true;
    pullVideo.onclick = function() {removeSelfVideo(this);}
    pullVideo.onended = function() {removeSelfVideo(this);}
    displayBox.appendChild(pullVideo);
    

    // ///////////////////////////////CHARACTER IMG MASK
    var whiteMask = document.createElement("div");
    whiteMask.id = "characterMask";
    whiteMask.onclick = function() {removeSelfAndDisplayBox(this);}
    displayBox.appendChild(whiteMask);
    

    // //////////////////////////CHARACTER IMG

    // IMG
    var display = document.createElement("img");
    display.setAttribute('src', '../assets/img/characters/'+characterPulled.devName+'.png');
    display.onclick = function() {removeSelfAndDisplayBox(this);}
    displayBox.appendChild(display);

    document.body.appendChild(displayBox);
}

// //////////////////////////////PULL TEN
function displayTenCharacters(resultArray)
{
    // ////////////////////////////////DISPLAY BOX
    var displayTenBox = document.createElement("div");
    displayTenBox.id = "tenCharactersDisplayBox"


    // ////////////////////////////////VIDEO
    var pullVideo = document.createElement('video');
    pullVideo.id = "pullVideo"
    pullVideo.src = "../assets/img/ui/5starwish.mp4";
    pullVideo.autoplay = true;
    pullVideo.onclick = function() {removeSelfVideo(this);}
    pullVideo.onended = function() {removeSelfVideo(this);}
    displayTenBox.appendChild(pullVideo);
    

    // /////////////////////////////////////////MASK
    var whiteMask = document.createElement("div");
    whiteMask.id = "characterMask";
    whiteMask.onclick = function() {removeSelfAndDisplayTenBox(this);}
    displayTenBox.appendChild(whiteMask);

    // ////////////////////////////////////LOOP FOR CHARACTERS
    for (let i = 0; i < resultArray.length; i++) {
        createDisplayContainer(resultArray[i], displayTenBox);
      }
      document.body.appendChild(displayTenBox);
}

// ///////////////////////////////////////UNIT OF CHARACTER IN TEN DISPLAY
function createDisplayContainer(displayedCharacter, parentElement) {
    var container = document.createElement("div");
    container.className = "frameContainer";

    var frame = document.createElement("img");
    frame.src = "../assets/img/rarity/" + displayedCharacter.rarity + ".png";
    frame.className = "tenFrame";
    container.appendChild(frame);

    // var characterPortrait = document.createElement("img");
    // characterPortrait.src = "../assets/img/characters/" + displayedCharacter.devName + ".png";
    // characterPortrait.className = "tenPortrait";

    var portraitContainer = document.createElement("div");
    portraitContainer.className = "portraitContainer";
    portraitContainer.style.backgroundImage = "url(../assets/img/characters/"+ displayedCharacter.devName + ".png";
    // portraitContainer.appendChild(characterPortrait);

    container.appendChild(portraitContainer);

    parentElement.appendChild(container);
}

function removeSelf(el) {
    var element = el;
    element.remove();
}

function removeSelfAndDisplayBox(el) {
    var element = el;
    element.remove();
    var displayParent = document.getElementById("singleCharacterDisplayBox");
    displayParent.remove();
}

function removeSelfAndDisplayTenBox(el) {
    var element = el;
    element.remove();
    var displayParent = document.getElementById("tenCharactersDisplayBox");
    displayParent.remove();
}

function removeSelfVideo(el) {
    el.remove();
    mask = document.getElementById("characterMask");

    mask.style.opacity = 0;
}