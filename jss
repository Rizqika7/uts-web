const left1 = document.getElementsByClassName('left1');
const right1 = document.getElementsByClassName('right1');
const center1 = document.getElementsByClassName('center1');

for (let index = 0; index < left1.length; index++) {
    const element = left1[index];
    element.addEventListener('mouseenter', function () {
        element.style.backgroundColor='pink';
        
    })
    element.addEventListener('mouseleave', function () {
        element.style.backgroundColor='blue';
        element.innerHTML="Left";
    })
}


for (let index = 0; index < right1.length; index++) {
    const x = right1[index];
    x.addEventListener('mouseenter', function () {
        x.style.backgroundColor='pink';

    })
    x.addEventListener('mouseleave', function () {
        x.style.backgroundColor='rgb(0, 110, 255)';
        x.innerHTML="Right";
    })
}


for (let index = 0; index < center1.length; index++) {
    const y = center1[index];
    y.addEventListener('mouseenter', function () {
        y.style.backgroundColor='salmon';
        
    })
    y.addEventListener('mouseleave', function () {
        y.style.backgroundColor=' rgb(81, 81, 184)';
        y.innerHTML="Center"
    })
}
