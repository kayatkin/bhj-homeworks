const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fileInput = document.getElementById('file');
  const file = fileInput.files[0];

  if (!file) {
    alert('Пожалуйста, выберите файл для загрузки.');
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

  xhr.upload.addEventListener('progress', (e) => {
    if (e.lengthComputable) {
      const percent = (e.loaded / e.total) * 100;
      progress.value = percent;
    }
  });

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert('Файл успешно загружен!');
      progress.value = 0;
      fileInput.value = ''; // Очистка выбора файла после загрузки
    }
  };

  xhr.send(formData);
});