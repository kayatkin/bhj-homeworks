// Получаем все элементы с классом "reveal"
const revealElements = document.querySelectorAll('.reveal');

// Функция для проверки, виден ли элемент в поле зрения
function isVisible(el) {
  const {top, bottom} = el.getBoundingClientRect();
  
  if (bottom < 0) {
    return false
  }
  
  if (top > window.innerHeight) {
    return false
  }
  return true
}

// Функция для добавления класса "reveal_active" к видимым элементам
function handleScroll() {
  revealElements.forEach((el) => {
    if (isVisible(el)) {
      el.classList.add('reveal_active');
    } else {
      el.classList.remove('reveal_active');
    }
  });
}

// Обрабатываем событие прокрутки страницы и вызываем функцию handleScroll
window.addEventListener('scroll', handleScroll);

// Вызываем handleScroll() сразу после загрузки страницы, чтобы показать видимые элементы при загрузке
window.addEventListener('load', handleScroll);