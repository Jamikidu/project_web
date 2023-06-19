window.onload = function(){
// alert("testing");

/* 메인사진변경함수 */
let picture = ["./images/sokcho1.jpg", "./images/sokcho2.jpg", "./images/sokcho3.jpg",
                "./images/gangneung1.png", "./images/gangneung2.jpg", "./images/gangneung3.jpg" ]
let imgIdx = 0;
console.log(Math.round((Math.random()*picture.length)));
let first_pic = Math.round((Math.random()*picture.length));

changePicture();

function changePicture(){
    let img = document.getElementById("pic1")
    img.src = picture[first_pic];
    first_pic++;

    if(first_pic == picture.length){
        first_pic = 0;
    }

    setTimeout(changePicture, 4000); //콜백함수
} //
}