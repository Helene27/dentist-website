// pictures taken from pexels.com and valentinlysttannlegekontor.no
// function inspiration: https://stackoverflow.com/questions/61957530/how-to-change-an-image-every-5-seconds-for-example

let images = ["./images/valentinlystsenteret.jpeg", "./images/slider2.jpg", "./images/slider3.jpg", "./images/slider4.jpg"]
let index = 0

function switchPic() {
    document.getElementById("mainPic").src = images[index];
    if (index == 3) {
      index = 0;
    } else {
      index++;
    }
  
    setTimeout(switchPic, 3000);
}
  
window.onload = switchPic();