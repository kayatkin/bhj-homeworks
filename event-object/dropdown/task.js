  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function (dropdown) {
    
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    valueElement.addEventListener('click', function () {
      
      listElement.classList.toggle('dropdown__list_active');
    });

    listElement.addEventListener('click', function (event) {
      event.preventDefault();
      if (event.target.classList.contains('dropdown__link')) {
        
        listElement.classList.remove('dropdown__list_active');
        
        valueElement.textContent = event.target.textContent;
      }
    });

    document.addEventListener('click', function (event) {
      if (
        !dropdown.contains(event.target) &&
        listElement.classList.contains('dropdown__list_active')
      ) {
        listElement.classList.remove('dropdown__list_active');
      }
    });
  });