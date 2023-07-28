let secretNumber, maxGuesses, remainingGuesses, levelsCompleted, currentLevel;

function startGame(maxNumber) {
  secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  maxGuesses = getMaxGuesses(maxNumber);
  remainingGuesses = maxGuesses;
  currentLevel = maxNumber;
  
  document.querySelector('.level-selection').style.display = 'none';
  document.querySelector('.game').style.display = 'block';
  document.getElementById('guessInput').value = '';
  document.getElementById('result').textContent = '';
  document.getElementById('currentLevel').textContent = maxNumber === 20 ? 'Dễ' : maxNumber === 50 ? 'Trung bình' : 'Khó';
}

function getMaxGuesses(maxNumber) {
  if (maxNumber <= 20) {
    return 10;
  } else if (maxNumber <= 50) {
    return 15;
  } else {
    return 20;
  }
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  remainingGuesses--;
  
  if (guess === secretNumber) {
    document.getElementById('result').textContent = 'Chúc mừng! Bạn đã đoán đúng số.';
    document.querySelector('button').style.display = 'block';
    levelsCompleted++;
    if (currentLevel === 100) {
      document.getElementById('password').textContent = 'Mật khẩu là: imissu';
      document.querySelector('.password').style.display = 'block';
    } else if (guess === 160202) {
      document.getElementById('password').textContent = 'Mật khẩu là: imissu';
      document.querySelector('.password').style.display = 'block';
      document.querySelector('button').style.display = 'block';
    }
  } else if (guess > secretNumber) {
    document.getElementById('result').textContent = `Số cần đoán nhỏ hơn ${guess}. Còn ${remainingGuesses} lượt đoán.`;
  } else {
    document.getElementById('result').textContent = `Số cần đoán lớn hơn ${guess}. Còn ${remainingGuesses} lượt đoán.`;
  }

  if (remainingGuesses === 0) {
    document.getElementById('result').textContent = `Bạn đã hết lượt đoán. Số cần đoán là ${secretNumber}.`;
    document.querySelector('button').style.display = 'block';
  }
}

function playAgain() {
  document.querySelector('.level-selection').style.display = 'flex';
  document.querySelector('.game').style.display = 'none';
  document.querySelector('.password').style.display = 'none';
  document.querySelector('button').style.display = 'none';
  levelsCompleted = 0;
}

function selectLevel() {
  document.querySelector('.level-selection').style.display = 'flex';
  document.querySelector('.game').style.display = 'none';
  document.querySelector('.password').style.display = 'none';
  document.querySelector('button').style.display = 'none';
  levelsCompleted = 0;
}
