// Головний файл додатку
document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cards-container');
    const totalCardsElement = document.getElementById('total-cards');
    const learnedCardsElement = document.getElementById('learned-cards');
    const reviewCardsElement = document.getElementById('review-cards');
    const todayCardsElement = document.getElementById('today-cards');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const shuffleButton = document.getElementById('shuffle-btn');
    const resetButton = document.getElementById('reset-btn');
    const loadMoreButton = document.getElementById('load-more-btn');
    const loadMoreContainer = document.getElementById('load-more-container');
    const learnedCountElement = document.getElementById('learned-count');
    const totalCountElement = document.getElementById('total-count');
    
    // Налаштування
    const INITIAL_CARDS_COUNT = 20;
    const CARDS_PER_LOAD = 10;
    const TOTAL_CARDS = allCardData.length;
    
    // Завантаження прогресу з localStorage
    let progress = JSON.parse(localStorage.getItem('it-greek-progress')) || {};
    let todayReviewed = JSON.parse(localStorage.getItem('today-reviewed')) || { count: 0, date: new Date().toDateString() };
    let availableCards = JSON.parse(localStorage.getItem('available-cards')) || [];
    let displayedCardIds = JSON.parse(localStorage.getItem('displayed-card-ids')) || [];
    
    // Перевіряємо, чи не змінилася дата
    if (todayReviewed.date !== new Date().toDateString()) {
        todayReviewed = { count: 0, date: new Date().toDateString() };
        localStorage.setItem('today-reviewed', JSON.stringify(todayReviewed));
    }
    
    // Ініціалізація доступних карток
    if (availableCards.length === 0) {
        // Створюємо копію всіх ID карток
        availableCards = allCardData.map(card => card.id);
        // Перемішуємо
        availableCards.sort(() => Math.random() - 0.5);
        localStorage.setItem('available-cards', JSON.stringify(availableCards));
    }
    
    // Ініціалізація відображуваних карток
    if (displayedCardIds.length === 0) {
        // Беремо перші INITIAL_CARDS_COUNT карток з доступних
        displayedCardIds = availableCards.slice(0, INITIAL_CARDS_COUNT);
        // Видаляємо їх з доступних
        availableCards = availableCards.slice(INITIAL_CARDS_COUNT);
        localStorage.setItem('displayed-card-ids', JSON.stringify(displayedCardIds));
        localStorage.setItem('available-cards', JSON.stringify(availableCards));
    }
    
    // Отримання картки за ID
    function getCardById(id) {
        return allCardData.find(card => card.id === id);
    }
    
    // Відображення статистики
    function updateStats() {
        const totalCards = displayedCardIds.length;
        const learnedCards = Object.keys(progress).filter(id => progress[id] === 'learned').length;
        const reviewCards = Object.keys(progress).filter(id => progress[id] === 'need-review').length;
        
        totalCardsElement.textContent = totalCards;
        learnedCardsElement.textContent = learnedCards;
        reviewCardsElement.textContent = reviewCards;
        todayCardsElement.textContent = todayReviewed.count;
        learnedCountElement.textContent = learnedCards;
        totalCountElement.textContent = TOTAL_CARDS;
        
        // Показуємо/приховуємо кнопку "Показати ще"
        if (availableCards.length > 0 && displayedCardIds.length < 40) {
            loadMoreContainer.style.display = 'block';
        } else {
            loadMoreContainer.style.display = 'none';
        }
    }
    
    // Створення карток
    function createCards(filter = 'all') {
        cardsContainer.innerHTML = '';
        
        // Фільтрація карток
        let filteredCardIds = displayedCardIds;
        if (filter === 'learned') {
            filteredCardIds = displayedCardIds.filter(id => progress[id] === 'learned');
        } else if (filter === 'need-review') {
            filteredCardIds = displayedCardIds.filter(id => progress[id] === 'need-review');
        } else if (filter === 'general') {
            filteredCardIds = displayedCardIds.filter(id => {
                const card = getCardById(id);
                return card.category === 'general';
            });
        }
        
        // Створення DOM-елементів для кожної картки
        filteredCardIds.forEach(cardId => {
            const card = getCardById(cardId);
            if (!card) return;
            
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.dataset.id = card.id;
            if (progress[card.id]) {
                cardElement.classList.add(progress[card.id]);
            }
            
            cardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <div class="card-category">${getCategoryName(card.category)}</div>
                        <div class="term">${card.term}</div>
                        <div class="english-term">${card.english}</div>
                        <div class="card-actions">
                            <button class="card-btn know-btn" data-id="${card.id}">
                                <i class="fas fa-check"></i> Знаю
                            </button>
                            <button class="card-btn dont-know-btn" data-id="${card.id}">
                                <i class="fas fa-redo-alt"></i> Повторити
                            </button>
                        </div>
                    </div>
                    <div class="card-back">
                        <div class="card-category">${getCategoryName(card.category)}</div>
                        <div class="translation">${card.greek}</div>
                        <div class="transcription">${card.transcription}</div>
                        ${card.notes ? `<div class="notes">${card.notes}</div>` : ''}
                        <div class="card-actions">
                            <button class="card-btn know-btn" data-id="${card.id}">
                                <i class="fas fa-check"></i> Знаю
                            </button>
                            <button class="card-btn dont-know-btn" data-id="${card.id}">
                                <i class="fas fa-redo-alt"></i> Повторити
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            cardsContainer.appendChild(cardElement);
            
            // Обробник перевертання картки
            cardElement.addEventListener('click', function(e) {
                // Якщо клік був по кнопці, не перевертаємо картку
                if (e.target.closest('.card-btn')) return;
                this.classList.toggle('flipped');
            });
        });
        
        // Додавання обробників для кнопок карток
        document.querySelectorAll('.know-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const cardId = parseInt(this.getAttribute('data-id'));
                removeCard(cardId, 'learned');
            });
        });
        
        document.querySelectorAll('.dont-know-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const cardId = parseInt(this.getAttribute('data-id'));
                markCardAsNeedReview(cardId);
            });
        });
        
        updateStats();
    }
    
    // Отримання назви категорії
    function getCategoryName(category) {
        const categories = {
            'general': 'Загальні терміни',
            'frontend': 'Фронтенд',
            'javascript': 'JavaScript',
            'testing': 'Тестування'
        };
        return categories[category] || category;
    }
    
    // Видалення картки
    function removeCard(cardId, status) {
        // Знаходимо картку в DOM
        const cardElement = document.querySelector(`.card[data-id="${cardId}"]`);
        
        // Додаємо клас для анімації зникнення
        if (cardElement) {
            cardElement.classList.add('removing');
            
            // Чекаємо завершення анімації перед видаленням
            setTimeout(() => {
                // Позначаємо в прогресі
                progress[cardId] = status;
                localStorage.setItem('it-greek-progress', JSON.stringify(progress));
                
                // Збільшуємо лічильник повторень за сьогодні
                todayReviewed.count++;
                localStorage.setItem('today-reviewed', JSON.stringify(todayReviewed));
                
                // Видаляємо картку з displayedCardIds
                const index = displayedCardIds.indexOf(cardId);
                if (index > -1) {
                    displayedCardIds.splice(index, 1);
                }
                
                // Додаємо нову картку з доступних
                addNewCard();
                
                // Оновлюємо відображення
                const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
                createCards(activeFilter);
            }, 500);
        }
    }
    
    // Додавання нової картки
    function addNewCard() {
        if (availableCards.length > 0) {
            // Беремо наступну картку з доступних
            const newCardId = availableCards.shift();
            displayedCardIds.push(newCardId);
            
            // Зберігаємо зміни
            localStorage.setItem('displayed-card-ids', JSON.stringify(displayedCardIds));
            localStorage.setItem('available-cards', JSON.stringify(availableCards));
            
            // Показуємо сповіщення
            showNewCardNotification(newCardId);
            
            return true;
        }
        return false;
    }
    
    // Показати сповіщення про нову картку
    function showNewCardNotification(cardId) {
        const card = getCardById(cardId);
        if (!card) return;
        
        const notification = document.createElement('div');
        notification.className = 'new-card-notification';
        notification.innerHTML = `
            <i class="fas fa-plus-circle"></i>
            <div>
                <strong>Додано нову картку!</strong><br>
                <span>${card.term} → ${card.greek.split(' ')[0]}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Видаляємо сповіщення через 3 секунди
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }
    
    // Позначити картку як потребуючу повторення
    function markCardAsNeedReview(cardId) {
        progress[cardId] = 'need-review';
        localStorage.setItem('it-greek-progress', JSON.stringify(progress));
        
        // Збільшуємо лічильник повторень за сьогодні
        todayReviewed.count++;
        localStorage.setItem('today-reviewed', JSON.stringify(todayReviewed));
        
        // Оновлюємо відображення
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        createCards(activeFilter);
    }
    
    // Завантажити більше карток
    function loadMoreCards() {
        const cardsToAdd = Math.min(CARDS_PER_LOAD, availableCards.length);
        for (let i = 0; i < cardsToAdd; i++) {
            if (availableCards.length > 0) {
                const newCardId = availableCards.shift();
                displayedCardIds.push(newCardId);
                showNewCardNotification(newCardId);
            }
        }
        
        // Зберігаємо зміни
        localStorage.setItem('displayed-card-ids', JSON.stringify(displayedCardIds));
        localStorage.setItem('available-cards', JSON.stringify(availableCards));
        
        // Оновлюємо відображення
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        createCards(activeFilter);
        
        // Анімація
        cardsContainer.style.opacity = '0.7';
        setTimeout(() => {
            cardsContainer.style.opacity = '1';
        }, 300);
    }
    
    // Перемішування карток
    function shuffleCards() {
        // Перемішуємо відображувані картки
        displayedCardIds.sort(() => Math.random() - 0.5);
        localStorage.setItem('displayed-card-ids', JSON.stringify(displayedCardIds));
        
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        createCards(activeFilter);
        
        // Додаємо анімацію перемішування
        cardsContainer.style.opacity = '0.7';
        setTimeout(() => {
            cardsContainer.style.opacity = '1';
        }, 300);
    }
    
    // Скидання прогресу
    function resetProgress() {
        if (confirm('Ви впевнені, що хочете скинути весь прогрес? Усі вивчені слова буде видалено, і картки скинуться до початкового стану.')) {
            progress = {};
            todayReviewed = { count: 0, date: new Date().toDateString() };
            availableCards = allCardData.map(card => card.id);
            availableCards.sort(() => Math.random() - 0.5);
            displayedCardIds = availableCards.slice(0, INITIAL_CARDS_COUNT);
            availableCards = availableCards.slice(INITIAL_CARDS_COUNT);
            
            localStorage.setItem('it-greek-progress', JSON.stringify(progress));
            localStorage.setItem('today-reviewed', JSON.stringify(todayReviewed));
            localStorage.setItem('available-cards', JSON.stringify(availableCards));
            localStorage.setItem('displayed-card-ids', JSON.stringify(displayedCardIds));
            
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            createCards(activeFilter);
        }
    }
    
    // Обробники фільтрів
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            createCards(filter);
        });
    });
    
    // Обробники кнопок
    shuffleButton.addEventListener('click', shuffleCards);
    resetButton.addEventListener('click', resetProgress);
    loadMoreButton.addEventListener('click', loadMoreCards);
    
    // Ініціалізація - створюємо картки
    createCards('all');

});
