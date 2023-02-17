const imgCon = document.getElementById('img-container');
const prev = document.getElementsByClassName('prev')[0];
const next = document.getElementsByClassName('next')[0];

const img = {
  url: [
    'https://vcdn1-vnexpress.vnecdn.net/2022/11/17/2-5139-1668656514.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=ExoX82YKxnWsS3dV4gW2DQ',
    'https://images2.thanhnien.vn/Uploaded/bahung/2022_12_16/lamborghini-thanhnien-2-1281.jpg',
    'https://image.vtc.vn/resize/th/upload/2022/01/11/xe1-22380625.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZegEHxTasiGE6SudG-0grb7KyUGwbuFx9w1MWmywjCw&s',
  ],
};

let counter = 0;
const length = img.url.length;
imgCon.style.backgroundImage = `url(${img.url[counter]})`;

function prevHandle(){
  counter--
  if(counter < 0){
    counter = length - 1;
  }
  imgCon.style.backgroundImage = `url(${img.url[counter]})`;
}

function nextHandle() {
  counter++;
  if (counter > length - 1){
    counter = 0;
  } 
  imgCon.style.backgroundImage = `url(${img.url[counter]})`;
}

prev.addEventListener('click', prevHandle);
next.addEventListener('click', nextHandle);