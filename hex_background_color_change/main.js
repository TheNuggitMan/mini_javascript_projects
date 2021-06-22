const hexColors = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

document.getElementById('hex-color-change').addEventListener('click', randomHex);

function randomHex() {
    let color = `#`

    for (i=0; i<6; i++) {
        let index = Math.floor(Math.random() * hexColors.length);
        color += hexColors[index]
    };
    document.body.style.backgroundColor = color;
    document.getElementById('hexOutput').innerHTML = `THE HEX COLOUR IS ${color}`;
}
