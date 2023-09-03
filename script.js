'use strict';
/*
//phương thức querySelector - chọn phần tử cần thao tác
console.log(document.querySelector('.message').textContent);//.message - message là 1 class
//. textContent là thuộc tính của phần tử message5
document.querySelector('.message').textContent='Correct Number 🎉';//thay đổi nội dung văn bản

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23
*/

//addEventListener: cho phép DOM phản hổi thao tác

let secretNumber = Math.trunc(Math.random() * 20) + 1; // tạo số ngầu nhiên từ 1-20
let score = 20; // tạo điểm ban đầu
let highScore = 0;
//tiết lập hàm đại điện cho document.querySelector('.message).textContent
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//thiết lập hàm đại diện cho document.querySelector('.score').textContent
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //nhập số phỏng đoán
  // console.log(guess, typeof guess);

  //không có số
  if (!guess) {
    displayMessage('No number!! ❌❌❌'); //khi số phỏng đoán để trống

    //khi người chơi thắng
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🎉'); // khi 2 số bằng nhau
    document.querySelector('body').style.backgroundColor = '#60b347'; //đổi màu nền

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber; // hiện thị số bí mật

    //tính highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //làm gọn code
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!! 📈' : 'Too low!! 📉'); //khi số phỏng đoán > số bí mật
      score--; //score bị trừ đi 1 khi đoán sai
      displayScore(score); //in điểm mới lên giao diện
    } else {
      displayMessage('You loss!! 🔥');
      displayScore(0);
    }
  }

  //khi số quá cao

  // else if (guess !== secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =  'Too high!! 📈'; //khi số phỏng đoán > số bí mật
  //     score--; //score bị trừ đi 1 khi đoán sai
  //     document.querySelector('.score').textContent = score; //in điểm mới lên giao diện
  //   } else {
  //     document.querySelector('.message').textContent = 'You loss!! 🔥';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //khi số quá thấp
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!! 📉'; //khi số phỏng đoán < số bí mật
  //     score--; //score bị trừ đi 1 khi đoán sai
  //     document.querySelector('.score').textContent = score; //in điểm mới lên giao diện
  //   } else {
  //     document.querySelector('.message').textContent = 'You loss!! 🔥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// tạo event cho nut Again

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
