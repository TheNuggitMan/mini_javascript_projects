const colors = ["rgb(249, 16, 79)","rgb(114, 164, 13)","rgb(235, 255, 0)","rgb(101, 82, 254)"];

document.getElementById('color-change').addEventListener('click', switchColor);

let i = 0;
function switchColor() {
    document.body.style.backgroundColor = colors[i];
    i++;
    if (i > 3){
        i = 0
    };
};
