let counter = 0;

function increase() {
    counter++;
    document.getElementById("counter").value = counter;
}


function decrease() {
    if(counter > 0) { 
        counter--;
        document.getElementById("counter").value = counter;
    }
}

function changeImage(element) {
    
    let mainImage = document.getElementById('mainImage');
    
   
    mainImage.src = element.src;

   
    mainImage.style.width = '500px';
    mainImage.style.height = '500px';
}



function nohidden() {
    var content = document.querySelector('.materials-content');
    if (content.style.display === "none" ) {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}


function nonhide(){
    var content = document.querySelector('.careInstructionsContent')
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

