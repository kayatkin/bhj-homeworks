document.addEventListener("DOMContentLoaded", () => {
    const pollTitle = document.getElementById("poll__title");
    const pollAnswers = document.getElementById("poll__answers");
  
    // Функция для отображения опроса
    function displayPoll(pollData) {
      pollTitle.textContent = pollData.title;
  
      for (const answer of pollData.answers) {
        const answerButton = document.createElement("button");
        answerButton.classList.add("poll__answer");
        answerButton.textContent = answer;
  
        answerButton.addEventListener("click", () => {
          alert("Спасибо, ваш голос засчитан!");
        });
  
        pollAnswers.appendChild(answerButton);
      }
    }
  
    // Отправляем GET-запрос для получения опроса
    fetch("https://students.netoservices.ru/nestjs-backend/poll")
      .then((response) => response.json())
      .then((data) => {
        displayPoll(data.data);
      })
      .catch((error) => {
        console.error("Ошибка загрузки опроса: ", error);
      });
  });  