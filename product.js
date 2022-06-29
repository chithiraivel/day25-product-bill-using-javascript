
let total = document.getElementById('total');
let tax = document.getElementById('tax');
let grand = document.getElementById('grand');

let data2 = document.getElementById('data2');
let data3 = document.getElementById('data3');

let data1 = document.getElementById('data1');

var bat = 1000;
var ball = 20;
var stump = 500;
var one = 0, two = 0, three = 0;


function myFirst() {

    let select1 = document.getElementById('select1').value;

    var result = select1 * bat;
    one = parseInt(data1.innerHTML = result);
    total.innerHTML = one + two + three;
    gst = (8 / 100) * one;
    tax.innerHTML = gst;
    grand.innerHTML = one + gst;
}



function mySecond() {

    let select2 = document.getElementById('select2').value;

    var result = select2 * ball;
    two = parseInt(data2.innerHTML = result);
    var a = total.innerHTML = one + two + three;
    gst = (8 / 100) * a;
    tax.innerHTML = gst;
    grand.innerHTML = a + gst;
}


function myThird() {

    let select3 = document.getElementById('select3').value;

    var result = select3 * stump;
    three = parseInt(data3.innerHTML = result);
    var b = total.innerHTML = one + two + three;
    gst = (8 / 100) * b;
    tax.innerHTML = gst;
    grand.innerHTML = b + gst;
}

