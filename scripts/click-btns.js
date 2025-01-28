document.querySelectorAll('.card-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Отменяем переход по умолчанию на момент анимации

        // Добавляем класс 'clicked', чтобы изменить стиль
        button.classList.add('clicked');

        // Даем время для анимации (например, 0.3 сек)
        setTimeout(() => {
            window.location.href = button.href; // Перехожу по адресу после клика
        }, 300); // Время задержки, должно совпадать с продолжительностью анимации
    });
});
