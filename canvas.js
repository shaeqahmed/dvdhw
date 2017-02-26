var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var wid = canvas.width;
var hgt = canvas.height;
var clrBtn = document.getElementById("clear");
var circBtn = document.getElementById("circle");
var dvdBtn = document.getElementById("dvd");
var stopBtn = document.getElementById("stop");
var frm;
var img = new Image();
img.src = "dvd.png";
var imageObj = new Image();
imageObj.src = "lel.png";
ctx.drawImage(imageObj, 0, 0);

var clear = function() {
    window.cancelAnimationFrame(frm);
    ctx.clearRect(0, 0, wid, hgt);
    ctx.drawImage(imageObj, 0, 0);
};

clrBtn.addEventListener("click", clear);

var stopit = function() {
    window.cancelAnimationFrame(frm);
};

stopBtn.addEventListener("click", stopit);


var animateSphere = function() {
    window.cancelAnimationFrame(frm)
    var x = ((wid - 150) / 2) + 30;
    var y = ((hgt - 107) / 2) + 34;
    var angle = 0;
    var r = 172 * Math.abs(Math.cos(angle));

    var animate = function() {
        clear();
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "lightsteelblue";
        ctx.fill();
        frm = window.requestAnimationFrame(animate);
        r = 172 * Math.abs(Math.cos(angle));
        angle += Math.PI / 128;
    }
    animate();
};

circBtn.addEventListener("click", animateSphere);

var randnum = function(a, b) {
    return (b - a) * Math.random() + a;
}

//dvd animation
var animateDvd = function() {
    window.cancelAnimationFrame(frm);


    var v_x = 1;
    var v_y = 1;

    var width = 60;
    var height = 35;

    var maxX = wid - width - 120;
    var maxY = hgt - height - 74;
    var x = randnum(30, maxX);
    var y = randnum(34, maxY);

    var animate = function() {
        clear();
        ctx.drawImage(img, x, y);
        frm = window.requestAnimationFrame(animate);
        if (x > maxX || x < 30) {
            v_x *= -1;
            (v_x < 0) ? v_x -=.33 : v_x+=.33
        }
        if (y > maxY || y < 34) {
            v_y *= -1;
            (v_y < 0) ? v_y -=.33 : v_y+=.33
        }
        x += v_x;
        y += v_y;
    }
    animate();
}

dvdBtn.addEventListener("click", animateDvd);