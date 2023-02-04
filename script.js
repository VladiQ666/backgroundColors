window.onload = function() {
    const button = document.getElementById('button');
    const body = document.getElementsByTagName('body')[0];
    const colors = ['blue', 'grey', 'black', 'white', 'red', 'green', '#aaa', '#FFAACC', 'rgb(122,111,110)'];
    button.onclick = function() {
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };
};