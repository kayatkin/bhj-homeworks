// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById('subscribe-modal');
    modal.classList.remove('modal_active');
  }
  
  // Проверяем, есть ли запись в cookie о закрытии окна
  if (document.cookie.indexOf('modalClosed=true') === -1) {
    // Если записи нет, показываем модальное окно
    const modal = document.getElementById('subscribe-modal');
    modal.classList.add('modal_active');
  
    // Находим элемент с классом modal__close и добавляем обработчик события для закрытия окна
    const closeButton = modal.querySelector('.modal__close');
    closeButton.addEventListener('click', function() {
      // Закрываем окно
      closeModal();
      // Записываем информацию в cookie о закрытии окна
      document.cookie = 'modalClosed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    });
  }  