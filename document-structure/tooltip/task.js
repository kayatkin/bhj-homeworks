document.addEventListener("DOMContentLoaded", () => {
  // Находим все элементы с классом has-tooltip
  const clickTooltips = document.querySelectorAll(".has-tooltip");

  // Создаем функцию для отображения подсказки
  function showTooltip(event) {
    event.preventDefault();

    // Если подсказка имеет класс "tooltip_active", скрываем её и завершаем функцию
    const existingTooltip = document.querySelector(".tooltip_active");
    if (existingTooltip) {
      existingTooltip.remove();
      return;
    }

    // Получаем текст подсказки из атрибута "title"
    const tooltipText = event.target.getAttribute("title");

    // Создаем элемент подсказки
    const tooltipElement = document.createElement("div");
    tooltipElement.classList.add("tooltip");
    tooltipElement.textContent = tooltipText;

    // Добавляем подсказку на страницу
    document.body.appendChild(tooltipElement);

    // Устанавливаем позицию подсказки
    const rect = event.target.getBoundingClientRect();
    tooltipElement.style.left = rect.left + "px";
    tooltipElement.style.top = rect.bottom + "px";

    // Добавляем класс "tooltip_active", чтобы отобразить подсказку
    tooltipElement.classList.add("tooltip_active");
  }

  // Добавляем обработчик клика на все элементы с классом "has-tooltip"
  clickTooltips.forEach(function (element) {
    element.addEventListener("click", showTooltip);
  });
});