let cartItems = 0;
const cartCountElement = document.getElementById('cartCount');
const toastElement = document.getElementById('toast');
let toastTimeout;

// Функция добавления товара в корзину
function addToCart(gameName) {
    // Увеличиваем счетчик
    cartItems++;
    
    // Анимация увеличения числа в корзине
    cartCountElement.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);
    
    cartCountElement.textContent = cartItems;

    // Показываем уведомление (Toast)
    showToast(`«${gameName}» добавлена в корзину!`);
}

// Функция для отображения всплывающего уведомления
function showToast(message) {
    toastElement.textContent = message;
    toastElement.classList.add('show');
    
    // Сбрасываем таймер, если быстро нажали несколько раз
    clearTimeout(toastTimeout);
    
    // Скрываем уведомление через 3 секунды
    toastTimeout = setTimeout(() => {
        toastElement.classList.remove('show');
    }, 3000);
}