document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById("signin__form");
    const welcomeBlock = document.getElementById("welcome");
    const userIdSpan = document.getElementById("user_id");
    const signInContainer = document.getElementById("signin");

    // При загрузке страницы, проверка наличия id пользователя в локальном хранилище.
    const userId = localStorage.getItem("user_id");
    if (userId) {
        userIdSpan.textContent = userId;
        welcomeBlock.classList.add("welcome_active");
        signInContainer.style.display = "none"; // Скрываем форму авторизации
    }

    // Обработчик отправки формы
    signInForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(signInForm);

        // Отправка данных на сервер через AJAX
        fetch("https://students.netoservices.ru/nestjs-backend/auth", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Если авторизация успешна, сохраняем id пользователя в локальное хранилище
                localStorage.setItem("user_id", data.user_id);
                userIdSpan.textContent = data.user_id;
                welcomeBlock.classList.add("welcome_active");
                signInContainer.style.display = "none"; // Скрываем форму авторизации
            } else {
                alert("Неверный логин/пароль");
            }
        })
        .catch(error => {
            console.error("Произошла ошибка:", error);
        });
    });
});