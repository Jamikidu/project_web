window.onload = function(){
    // 디지털 시계
    let watch = setInterval(mywatch, 1000); //함수 호출
    
    function mywatch(){
        const date = new Date()
        let now = date.toLocaleTimeString();
        document.getElementById("now").innerHTML = now;
    }

let picture = ["./images/header1.jpg", "./images/header2.jpg",
                "./images/header3.jpg", "./images/header5.jpg"]
let imgIdx = 0;

showPicture();

function showPicture(){
    let img = document.getElementById("main1")
    img.src = picture[imgIdx];
    imgIdx++;

    if(imgIdx == picture.length){
        imgIdx = 0;
    }

    setTimeout(showPicture, 2000); //콜백함수
}
}