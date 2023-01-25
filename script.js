
//Random Picture
let dogImageAll = [
    "Dog20.jpg", "Dog19.jpg", "Dog18.jpg",
    "Dog17.jpg", "Dog16.jpg", "Dog15.jpg",
    "Dog14.jpg", "Dog13.jpg", "Dog12.jpg",
    "Dog11.jpg", "Dog10.jpg", "Dog9.jpg",
    "Dog8.jpg", "Dog7.jpg", "Dog6.jpg",
    "Dog5.jpg", "Dog4.jpg", "Dog3.jpg",
    "Dog2.jpg", "Dog1.jpg", "home13.jpg",
    "home12.jpg", "home11.jpg", "home10.jpg",
    "home9.jpg", "home8.jpg", "home7.jpg",
    "home6.jpg", "home5.jpg", "home4.jpg",
    "home3.jpg","home2.jpg","home1.jpg",
]

let RandomBtn = document.getElementById('random');
let StopBtn = document.getElementById('stop');

let timeOutId = 0;


RandomBtn.addEventListener('click', () => {
    /*ทำการ set setInterval เมื่อกด random Now! ไว้ที่ 3000 = 3 วินาที*/
    timeOutId = setInterval(() => {
        let n = dogImageAll.length;
        let index = Math.floor(Math.random() * n);
        let selectImg = dogImageAll[index];
        document.getElementById('img_shower').src = " " + selectImg ;   
    }, 3000)

});

StopBtn.addEventListener('click', () => {
    clearInterval(timeOutId);
    /*ทำการ set clearInterval เมื่อกดปุ่ม Stop Random*/
});



