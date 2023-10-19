// Получаем элемент textarea
const editor = document.getElementById('editor');

// Проверяем, есть ли сохраненное значение в локальном хранилище
if (localStorage.getItem('editorText')) {
  // Если есть, загружаем сохраненное значение
  editor.value = localStorage.getItem('editorText');
}

// Слушаем событие ввода текста и сохраняем его в локальное хранилище
editor.addEventListener('input', () => {
  const text = editor.value;
  localStorage.setItem('editorText', text);
});