//Keep all your variable within the scope they will only be used in. Less Scope Pollution!
//I broke apart the input and the input value so that when I reset the input.value to "", I don't repeat the code of fetching the document element.
function sayThanks() {
    const input = document.getElementById('name');
    const inputValue = input.value;
    let name = `${inputValue}.`;
    const msg = `Thank you for your visit today ${name}`;
    document.getElementById('para').innerHTML = msg;
    input.value = "";
}
