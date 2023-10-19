document.addEventListener("DOMContentLoaded", () => {
    const items = document.getElementById("items");
    const loader = document.getElementById("loader");
  
    // Функция для отображения данных о курсе валют
    function displayCurrencyRates(data) {
      loader.style.display = "none"; // Скрываем анимацию загрузки
  
      for (const key in data.Valute) {
        const valute = data.Valute[key];
  
        const item = document.createElement("div");
        item.classList.add("item");
  
        const itemCode = document.createElement("div");
        itemCode.classList.add("item__code");
        itemCode.textContent = valute.CharCode;
  
        const itemValue = document.createElement("div");
        itemValue.classList.add("item__value");
        itemValue.textContent = valute.Value;
  
        const itemCurrency = document.createElement("div");
        itemCurrency.classList.add("item__currency");
        itemCurrency.textContent = "руб.";
  
        item.appendChild(itemCode);
        item.appendChild(itemValue);
        item.appendChild(itemCurrency);
  
        items.appendChild(item);
      }
    }
  
    // Отправляем GET-запрос для загрузки данных
    fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
      .then((response) => response.json())
      .then((data) => {
        displayCurrencyRates(data.response);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных: ", error);
      });
  });  