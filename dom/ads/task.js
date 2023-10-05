function rotateText() {
    const rotator = document.querySelector('.rotator');
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    let currentIndex = 0;
  
    function rotate() {
      const currentCase = cases[currentIndex];
      const nextIndex = (currentIndex + 1) % cases.length;
      const nextCase = cases[nextIndex];
  
      currentCase.classList.remove('rotator__case_active');
      nextCase.classList.add('rotator__case_active');
  
      const speed = parseInt(nextCase.getAttribute('data-speed'));
      const color = nextCase.getAttribute('data-color');
      
      // Устанавливаем цвет текста
      rotator.style.color = color;
  
      currentIndex = nextIndex;
  
      setTimeout(rotate, speed);
    }
  
    setTimeout(rotate, 0); // Начать сразу после загрузки страницы
  }
  
  rotateText(); // Запускаем ротатор
  