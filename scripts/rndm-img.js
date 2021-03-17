
// const N = 1839;
const N = 1839;
const arr = Array.from({length: N}, (_, index) => index + 1);

function* shuffle(array) {
    var i = array.length;    
    while (i--) {
        yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
    }    
}    
var ranNums = shuffle(arr);

function generator() {
    
    var x = ranNums.next().value;
    //var x = undefined;
    console.log(x);
    if (x != undefined) {
        document.getElementById('divImage').innerHTML=`
        <img src="media/imgs/momos-webp/momo${x}.webp" id="divImage">
    `;
        
    } else {
        document.getElementById('divImage').innerHTML=`
        <h1>teacabaste los memes, refresca la página y empieza de nuevo</h1>
    `;
    
    }
}