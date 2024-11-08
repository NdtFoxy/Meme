function spin() {
    const roulette = document.getElementById('roulette');
    const items = document.querySelectorAll('.item');
    const itemWidth = items[0].offsetWidth;
    const totalItems = items.length;

    // Удваиваем содержимое рулетки для бесконечной анимации
    const originalContent = roulette.innerHTML;
    roulette.innerHTML += originalContent;

    // Генерируем случайный индекс для выпадения выигрыша
    const randomIndex = Math.floor(Math.random() * totalItems);

    // Рассчитываем отступ для выбранного элемента
    const offset = randomIndex * itemWidth;

    // Делаем большое смещение влево для эффекта вращения
    const spinTimes = 10 * itemWidth * totalItems;
    const finalPosition = -(spinTimes + offset);

    // Запускаем анимацию вращения
    roulette.style.transition = "transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)";
    roulette.style.transform = `translateX(${finalPosition}px)`;

    // Останавливаем вращение, оставляя рулетку на выигранном элементе
    setTimeout(() => {
        // Убираем плавное вращение и фиксируем на выбранном элементе
        roulette.style.transition = "none";
        roulette.style.transform = `translateX(${-offset}px)`;

        // Восстанавливаем изначальное содержимое без лишних копий
        roulette.innerHTML = originalContent;

        alert("Поздравляем! Вы выиграли: " + items[randomIndex].textContent);
    }, 5000); // Таймер совпадает с длительностью анимации
}
