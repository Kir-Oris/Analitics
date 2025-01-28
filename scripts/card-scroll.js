document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector(".price-cards");
    const cards = document.querySelectorAll(".price-card");

    // Найти центральную карточку
    const middleIndex = Math.floor(cards.length / 2);
    const middleCard = cards[middleIndex];

    // Прокрутить к центральной карточке
    if (middleCard) {
        const scrollOffset = middleCard.offsetLeft - (cardsContainer.clientWidth - middleCard.clientWidth) / 2;
        cardsContainer.scrollTo({
            left: scrollOffset,
            behavior: "smooth",
        });
    }
});


// let hideScrollbarTimeout;

// // Функция для скрытия полосы прокрутки
// function hideScrollbar() {
//   document.documentElement.style.scrollbarWidth = "none"; // Скрываем прокрутку (Firefox)
//   document.documentElement.style.overflow = "hidden"; // Отключаем стандартную прокрутку
//   document.documentElement.style.overflowY = "scroll"; // Включаем "виртуальную" прокрутку
// }

// // Функция для показа полосы прокрутки
// function showScrollbar() {
//   document.documentElement.style.scrollbarWidth = "auto"; // Восстанавливаем стандартную полосу прокрутки
//   document.documentElement.style.overflowY = "scroll"; // Снова включаем прокрутку
// }

// // Добавляем событие прокрутки на `window`
// window.addEventListener("scroll", () => {
//   showScrollbar(); // Показываем полосу прокрутки при прокрутке

//   // Сбрасываем предыдущий таймер
//   clearTimeout(hideScrollbarTimeout);

//   // Запускаем таймер, чтобы скрыть полосу через 2 секунды после окончания прокрутки
//   hideScrollbarTimeout = setTimeout(() => {
//     hideScrollbar();
//   }, 2000);
// });
