function ex4() {

    let f = document.getElementById("f").value;

    let l = document.getElementById("l4").value;

    f = f.split(/[,\s]+/).map(Number);
    l = l.split(/[,\s]+/).map(Number);
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < f.length; j++) {
            if (l[i] % f[j] === 0) {
                sum += l[i];
                break;
            }
        }
    }
    document.getElementById("ex4Result").innerHTML = sum;
}



// Find the sum of all the multiples of a or b in list l.
function ex5() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let l = document.getElementById("l5").value;
    l = l.split(/[,\s]+/).map(Number);
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        if (l[i] % a === 0 || l[i] % b === 0) {
            sum += l[i];
        }
    }
    document.getElementById("ex5Result").innerHTML = sum;
}
