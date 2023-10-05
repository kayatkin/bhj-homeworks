// Получаем ссылки на все элементы с классом font-size
const fontSizes = document.querySelectorAll('.font-size');

// Получаем ссылку на элемент с классом book
const book = document.querySelector('.book');

// Добавляем обработчик события click на каждый элемент с классом font-size
fontSizes.forEach(fontSize => {
  fontSize.addEventListener('click', function (event) {
    event.preventDefault();

    // Удаляем класс font-size_active у всех элементов
    fontSizes.forEach(item => item.classList.remove('font-size_active'));

    // Добавляем класс font-size_active только к текущему элементу
    this.classList.add('font-size_active');

    // Получаем значение атрибута data-size текущего элемента
    const size = this.getAttribute('data-size');

    // Удаляем все классы связанные с размером шрифта из элемента book
    book.classList.remove('book_fs-small', 'book_fs-big');

    // Добавляем соответствующий класс в зависимости от выбранного размера
    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});