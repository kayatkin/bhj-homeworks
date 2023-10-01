    const tabElements = document.querySelectorAll('.tab');
  
    const tabContentElements = document.querySelectorAll('.tab__content');
  
    document.querySelector('.tab__navigation').addEventListener('click', (event) => {
      
      if (event.target.classList.contains('tab')) {
        
        tabElements.forEach((tab) => {
          tab.classList.remove('tab_active');
        });
  
        tabContentElements.forEach((content) => {
          content.classList.remove('tab__content_active');
        });
  
        event.target.classList.add('tab_active');
  
        const tabIndex = Array.from(tabElements).indexOf(event.target);
  
        tabContentElements[tabIndex].classList.add('tab__content_active');
      }
    });

  