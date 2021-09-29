import ColorContrastChecker from 'color-contrast-checker';

let ccc = new ColorContrastChecker();


let picker_1 = document.getElementById("picker-1");
let picker_2 = document.getElementById("picker-2");
let picker_3 = document.getElementById("picker-3");
let gradient = document.getElementById("gradient");
let split = document.getElementById("split");
let button = document.getElementById("sup-button");
let opacity = document.getElementById("opacity");



picker_1.addEventListener('input',gradientsEdit);
picker_2.addEventListener('input', gradientsEdit);
picker_3.addEventListener('input', gradientsEdit);
split.addEventListener('input', gradientsEdit);
opacity.addEventListener('input', gradientsEdit);
button.addEventListener('click', randomColor);



function gradientsEdit(){
    const color1 = picker_1.value;
    const color2 = picker_2.value;
    const color3 = picker_3.value;
    const opacityScale = opacity.value/100;
    const splitViewer = split.value;
    
    //Coverting hex to rgba 
    const RGBA_color1='('+parseInt(color1.substring(1,3),16)+','+parseInt(color1.substring(3,5),16)+','+parseInt(color1.substring(5,7),16)+','+opacityScale+')';
    const RGBA_color2='('+parseInt(color2.substring(1,3),16)+','+parseInt(color2.substring(3,5),16)+','+parseInt(color2.substring(5,7),16)+','+opacityScale+')';
    const RGBA_color3='('+parseInt(color3.substring(1,3),16)+','+parseInt(color3.substring(3,5),16)+','+parseInt(color3.substring(5,7),16)+','+opacityScale+')';
    
    textColorAdjust(color1, color2, color3);
    
    gradient.style.backgroundImage = 
    `linear-gradient(${splitViewer}deg, rgba${RGBA_color1}, rgba${RGBA_color3}, rgba${RGBA_color2})`

}

function randomColor(){
    picker_1.value = '#' + Math.floor(Math.random()*16777215).toString(16);
    picker_2.value = '#' + Math.floor(Math.random()*16777215).toString(16);
    picker_3.value = '#' + Math.floor(Math.random()*16777215).toString(16);
    split.value = Math.floor(Math.random() * 361);
    opacity.value= Math.floor(Math.random() * 100);
    
    gradientsEdit();
}

function textColorAdjust (col1, col2, col3){
    if (!ccc.isLevelAA(col1, '#000', 5) && !ccc.isLevelAA(col2, '#000', 5)
    || !ccc.isLevelAA(col3, '#000', 5) ) {
       gradient.style.color = '#fff';
    }else{
        gradient.style.color = '#000';
    }
    
}



gradientsEdit();

