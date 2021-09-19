const images =[
    'images/img1.jpeg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpeg',
    'images/img5.jpg',
    'images/img6.jpeg',
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if(imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    console.log(imgUrl);
    imgIndex++;
}, 1000)