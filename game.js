// ==================== ДАННЫЕ ПО УМОЛЧАНИЮ ====================
const defaultGameData = [
    {
        question: "В каком году был основан Университет «Дубна»?",
        type: "single",
        answers: ["1965", "1941", "1944", "1998"],
        correct: 2
    },
    {
        question: "Какое прежнее название было у университета «Дубна»?",
        type: "single",
        answers: [
            "Международный университет природы, общества и человека",
            "Дубненский государственный университет",
            "Московский областной государственный университет «Дубна»"
        ],
        correct: 0
    },
    {
        question: "Что изображено на логотипе университета?",
        type: "single",
        answers: [
            "Глобус и перо",
            "Дуб и мальчик с книгой",
            "Конфедератка и книга",
            "Дуб и атом"
        ],
        correct: 1
    },
    {
        question: "Выберите институты и факультеты, которые существуют в университете «Дубна»",
        type: "multiple",
        answers: [
            "Инженерно-физический институт",
            "Факультет естественных и инженерных наук",
            "Факультет физической химии",
            "Институт системного анализа и управления",
            "Институт IT-Технологий",
            "Факультет социальных и гуманитарных наук",
            "Факультет социологии и педагогики",
            "Лингвистический институт"
        ],
        correctAnswers: [0, 1, 3, 5]
    },
    {
        question: "Расположите по возрастанию кода направления института системного анализа и управления",
        type: "order",
        items: [
            "Информатика и вычислительная техника",
            "Информационные системы и технологии",
            "Прикладная информатика",
            "Программная инженерия",
            "Автоматизация технологических процессов и производств",
            "Менеджмент"
        ],
        correctOrder: [0, 1, 2, 3, 4, 5]
    },
    {
        question: "Расположите по возрастанию кода направления инженерно-физического института",
        type: "order",
        items: [
            "Физика",
            "Конструирование и технология электронных средств",
            "Электроэнергетика и электротехника",
            "Ядерные физика и технологии",
            "Авиастроение"
        ],
        correctOrder: [0, 1, 2, 3, 4]
    },
    {
        question: "Расположите по возрастанию кода направления факультета естественных и инженерных наук",
        type: "order",
        items: [
            "Химия",
            "Химия, физика и механика материалов",
            "Экология и природопользование",
            "Ядерные физика и технологии",
            "Технология геологической разведки"
        ],
        correctOrder: [0, 1, 2, 3, 4]
    },
    {
        question: "Расположите по возрастанию кода направления факультета социальных и гуманитарных наук",
        type: "order",
        items: [
            "Психология",
            "Клиническая психология",
            "Социология",
            "Юриспруденция",
            "Лингвистика"
        ],
        correctOrder: [0, 1, 2, 3, 4]
    },
    {
        question: "Кто был первым ректором в университете «Дубна»?",
        type: "single",
        answers: [
            "Деникин А.С.",
            "Фурсаев Д.В.",
            "Кузнецов О.Л.",
            "Флёров Г.Н."
        ],
        correct: 2
    },
    {
        question: "Какое научное учреждение является ключевым партнером университета «Дубна»?",
        type: "single",
        answers: [
            "МГТУ имени Н. Э. Баумана",
            "Объединенный институт ядерных исследований",
            "Национальный исследовательский университет «Высшая школа экономики»",
            "МГУ имени М.В.Ломоносова"
        ],
        correct: 1
    }
];

// ==================== ПРЕСЕТЫ ДЛЯ АДМИНИСТРАТОРА ====================
const presets = {
    default: {
        name: "День открытых дверей",
        gameData: JSON.parse(JSON.stringify(defaultGameData)),
        mapBackground: "images/game-map-background.jpg"
    },
    newyear: {
        name: "Новый год",
        gameData: [
            {
                question: "Какая традиция существует в Университете «Дубна» в преддверии Нового года?",
                type: "single",
                answers: ["Ярмарка «Русская тройка»", "Костюмированный бал-маскарад", "Конкурс ледяных фигур", "Массовый флешмоб"],
                correct: 0
            },
            {
                question: "С выступления какого клуба ежегодно начинается новогодний бал в Университете «Дубна»?",
                type: "single",
                answers: ["Клуб исторического танца «Реверанс»", "Театральная студия «Арлекин»", "Вокальная студия «Гармония»", "КВН-команда «Дубна»"],
                correct: 0
            },
            {
                question: "Какой танец не входил в конкурсную программу новогоднего бала 2025 года?",
                type: "single",
                answers: ["Русская кадриль", "Контрданс «Зимний сон»", "Изящный вальс «Три орешка»", "Танец маленьких лебедей"],
                correct: 3
            },
            {
                question: "Кто из исторических личностей заглянул на новогодний бал в университете «Дубна»?",
                type: "single",
                answers: ["Пётр I", "Михаил Ломоносов", "Александр Пушкин", "Дмитрий Менделеев"],
                correct: 0
            },
            {
                question: "Как называется новогодний приз, который был учреждён в университете «Дубна» впервые в 2025 году?",
                type: "single",
                answers: ["Приз ректора", "Гран-при декана", "Хрустальная туфелька", "Золотая снежинка"],
                correct: 0
            },
            {
                question: "Сколько лет традиционная новогодняя ярмарка «Русская тройка» радует посетителей университета?",
                type: "single",
                answers: ["Около года", "Несколько лет", "Больше десяти лет", "С момента основания вуза"],
                correct: 1
            },
            {
                question: "Чем, помимо еды, славится новогодняя ярмарка «Русская тройка»?",
                type: "single",
                answers: ["Аттракционами", "Искусными произведениями ручной работы", "Лотереей", "Концертом звёзд"],
                correct: 1
            },
            {
                question: "Что было частью программы студенческой Масленицы в университете?",
                type: "multiple",
                answers: ["Перетягивание каната", "Конкурс блиноделов", "Сжигание чучела", "Бой подушками"],
                correctAnswers: [0, 1, 2]
            },
            {
                question: "Как называется традиционный осенний фестиваль, который студенты университета посвящают науке?",
                type: "single",
                answers: ["«Грани науки»", "«Мир знаний»", "«Техно-парк»", "«IQ-марафон»"],
                correct: 0
            },
            {
                question: "Расположите в правильном порядке этапы организации одного из главных новогодних мероприятий университета.",
                type: "order",
                items: [
                    "Подготовка клуба «Реверанс» и разучивание танцев",
                    "Вручение приза ректора",
                    "Проведение конкурсных выступлений (вальсы, кадриль)",
                    "Объявление короля и королевы бала"
                ],
                correctOrder: [0, 2, 3, 1]
            }
        ],
        mapBackground: "images/newyear-bg.jpg"
    },
    science: {
        name: "Неделя науки",
        gameData: [
            {
                question: "В честь какого события в университете проходит День науки? Выберите все верные варианты.",
                type: "multiple",
                answers: ["День российской науки", "Всемирный день науки", "Годовщина основания ОИЯИ", "Международный день образования"],
                correctAnswers: [0, 1]
            },
            {
                question: "В какие даты в 2025 году в университете «Дубна» прошли Дни науки?",
                type: "single",
                answers: ["10-14 ноября", "1-5 сентября", "20-25 декабря", "15-20 марта"],
                correct: 0
            },
            {
                question: "Какая викторина была организована в рамках Дней науки в университете?",
                type: "single",
                answers: ["«Наука. Атом. Победа»", "«Космос. Энергия. Прогресс»", "«Гений. Открытие. Будущее»", "«Интеллект. Технологии. Инновации»"],
                correct: 0
            },
            {
                question: "Какова тематика дизайнерской выставки, проходящей в рамках Дней науки?",
                type: "single",
                answers: ["«Наука в цифровых образах»", "«Искусство и технологии»", "«Будущее в деталях»", "«Цифровая вселенная»"],
                correct: 0
            },
            {
                question: "Разработки учёных университета «Дубна» в какой сфере были отмечены премией «Гравитация-2025»?",
                type: "single",
                answers: ["Квантовые информационные технологии", "Новая энергетика", "Медицинская диагностика", "Экология"],
                correct: 0
            },
            {
                question: "Какой химический элемент упоминается в названии передового направления исследований в области энергетики, которое развивается в вузе?",
                type: "single",
                answers: ["Литий", "Плутоний", "Уран", "Цезий"],
                correct: 0
            },
            {
                question: "Какую максимальную температуру (со знаком минус) выдерживают новые аккумуляторы, разрабатываемые в университете «Дубна»?",
                type: "single",
                answers: ["-20°C", "-40°C", "-60°C", "-80°C"],
                correct: 1
            },
            {
                question: "Какими оказались результаты исследований проточных батарей, созданных в университете «Дубна»? Какой у них коэффициент полезного действия (КПД)?",
                type: "single",
                answers: ["70%", "80%", "90%", "100%"],
                correct: 2
            },
            {
                question: "Какие фундаментальные научные идеи и понятия связаны с Дубной и Объединенным институтом ядерных исследований (ОИЯИ)?",
                type: "multiple",
                answers: [
                    "Нейтринные осцилляции",
                    "Цветные кварки",
                    "Теория струн",
                    "«Дубненский кварковый мешок»"
                ],
                correctAnswers: [0, 1, 3]
            },
            {
                question: "Расположите в хронологическом порядке события из истории науки в Университете «Дубна».",
                type: "order",
                items: [
                    "Разработка аккумуляторов для низких температур",
                    "Получение патента на метод ранней диагностики",
                    "Проведение Дней науки",
                    "Разработка квантовых информационных технологий"
                ],
                correctOrder: [2, 1, 3, 0]
            }
        ],
        mapBackground: "images/science-bg.jpg"
    }
};

// ==================== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ====================
let gameData = [];
let currentLevel = 0;
let completedLevels = new Set();
let customMapBackground = null;

// Статистика и таймер
let gameStartTime = null;          // время старта сессии (Date.now())
let timerInterval = null;          // интервал обновления таймера
let currentSessionCompleted = false; // чтобы не записывать рекорд дважды
let mistakesCount = 0;             // счётчик ошибок за текущую сессию

const levelCoordinates = {
    desktop: [
        { x: 25, y: 84 }, { x: 22, y: 61 }, { x: 9, y: 42 }, { x: 39, y: 32 },
        { x: 61, y: 19 }, { x: 65, y: 40 }, { x: 42, y: 51 }, { x: 58, y: 67 },
        { x: 78, y: 51 }, { x: 79, y: 20 }
    ],
    mobile: [
        { x: 25, y: 84 }, { x: 22, y: 61 }, { x: 9, y: 42 }, { x: 37, y: 31 },
        { x: 59, y: 18 }, { x: 63, y: 40 }, { x: 38, y: 51 }, { x: 56, y: 65 },
        { x: 78, y: 50 }, { x: 77, y: 18 }
    ]
};

// ==================== АВТОРИЗАЦИЯ И ЗАГРУЗКА ДАННЫХ ====================
function checkAuth() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (!loggedIn) {
        window.location.href = 'login.html';
        return false;
    }
    const role = sessionStorage.getItem('role');
    const username = sessionStorage.getItem('username');
    document.getElementById('user-greeting').textContent = `Привет, ${username}!`;
    if (role === 'admin') {
        document.getElementById('edit-btn').style.display = 'inline-block';
        document.getElementById('edit-btn').onclick = openEditorModal;
    }
    return true;
}

function loadCustomData() {
    const savedData = localStorage.getItem('gameData');
    if (savedData) {
        try {
            gameData = JSON.parse(savedData);
        } catch(e) {
            console.error(e);
            gameData = [...defaultGameData];
        }
    } else {
        gameData = [...defaultGameData];
        saveGameData();
    }

    const savedBg = localStorage.getItem('mapBackground');
    if (savedBg) {
        customMapBackground = savedBg;
    } else {
        customMapBackground = 'images/game-map-background.jpg';
        localStorage.setItem('mapBackground', customMapBackground);
    }

    const user = sessionStorage.getItem('username');
    const savedProgress = localStorage.getItem(`progress_${user}`);
    if (savedProgress) {
        completedLevels = new Set(JSON.parse(savedProgress));
    } else {
        completedLevels.clear();
    }
}

function saveGameData() {
    localStorage.setItem('gameData', JSON.stringify(gameData));
}

function saveProgress() {
    const user = sessionStorage.getItem('username');
    if (user) {
        localStorage.setItem(`progress_${user}`, JSON.stringify([...completedLevels]));
    }
}

// ==================== ФУНКЦИИ ТАЙМЕРА И СТАТИСТИКИ ====================
function startGameTimer() {
    if (gameStartTime === null && !currentSessionCompleted) {
        gameStartTime = Date.now();
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(updateTimerDisplay, 1000);
    }
}

function stopGameTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    if (gameStartTime === null) {
        document.getElementById('timer-display').innerText = '0';
        return;
    }
    const elapsed = Math.floor((Date.now() - gameStartTime) / 1000);
    document.getElementById('timer-display').innerText = elapsed;
}

function getCurrentElapsedSeconds() {
    if (gameStartTime === null) return 0;
    return Math.floor((Date.now() - gameStartTime) / 1000);
}

function saveBestTimeIfNeeded() {
    const user = sessionStorage.getItem('username');
    if (!user) return false;
    const elapsed = getCurrentElapsedSeconds();
    if (elapsed === 0) return false;
    const key = `bestTime_${user}`;
    const currentBest = localStorage.getItem(key);
    if (!currentBest || elapsed < parseInt(currentBest)) {
        localStorage.setItem(key, elapsed);
        document.getElementById('best-time-display').innerText = elapsed;
        return true;
    }
    return false;
}

function incrementGamesPlayed() {
    const user = sessionStorage.getItem('username');
    if (!user) return;
    let count = localStorage.getItem(`gamesPlayed_${user}`);
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem(`gamesPlayed_${user}`, count);
    document.getElementById('games-played-display').innerText = count;
}

function updatePersonalStatsUI() {
    const user = sessionStorage.getItem('username');
    if (!user) return;
    const best = localStorage.getItem(`bestTime_${user}`);
    document.getElementById('best-time-display').innerText = best ? best : '—';
    const played = localStorage.getItem(`gamesPlayed_${user}`);
    document.getElementById('games-played-display').innerText = played ? played : '0';
}

function checkAndUnlockAchievements() {
    const user = sessionStorage.getItem('username');
    if (!user) return;
    let achievements = JSON.parse(localStorage.getItem(`achievements_${user}`) || '[]');
    const prevLength = achievements.length;
    
    const bestTime = localStorage.getItem(`bestTime_${user}`);
    const gamesPlayed = parseInt(localStorage.getItem(`gamesPlayed_${user}`) || '0');
    
    // 1. Первый шаг (пройден хотя бы один уровень)
    if (completedLevels.size >= 1 && !achievements.includes('first_step')) {
        achievements.push('first_step');
        alert('🎉 Достижение "Первые шаги"! (Пройден первый уровень)');
    }
    // 2. Скороход (лучшее время <= 120 секунд)
    if (bestTime && bestTime <= 120 && !achievements.includes('speedy')) {
        achievements.push('speedy');
        alert('⚡ Достижение "Скороход"! (Прошёл игру быстрее 2 минут)');
    }
    // 3. Без ошибок (вся игра без ошибок)
    if (completedLevels.size === gameData.length && mistakesCount === 0 && !achievements.includes('no_mistakes')) {
        achievements.push('no_mistakes');
        alert('🎯 Достижение "Без ошибок"! (Пройдена вся игра без единой ошибки)');
    }
    // 4. Марафонец (5 полных прохождений)
    if (gamesPlayed >= 5 && !achievements.includes('marathon')) {
        achievements.push('marathon');
        alert('🏅 Достижение "Марафонец"! (Пройдено 5 раз)');
    }
    
    if (achievements.length > prevLength) {
        localStorage.setItem(`achievements_${user}`, JSON.stringify(achievements));
        renderAchievementsList();
    }
}

function renderAchievementsList() {
    const user = sessionStorage.getItem('username');
    if (!user) return;
    const achievements = JSON.parse(localStorage.getItem(`achievements_${user}`) || '[]');
    const achievementNames = {
        first_step: '👣 Первые шаги',
        speedy: '⚡ Скороход',
        no_mistakes: '🎯 Без ошибок',
        marathon: '🏅 Марафонец'
    };
    const listUl = document.getElementById('achievements-list-modal');
    if (listUl) {
        listUl.innerHTML = achievements.map(a => `<li>${achievementNames[a] || a}</li>`).join('');
        if (achievements.length === 0) listUl.innerHTML = '<li>Пока нет достижений. Проходите игру!</li>';
    }
}

function showAchievementsModal() {
    renderAchievementsList();
    document.getElementById('achievements-modal').style.display = 'flex';
}

function closeAchievementsModal() {
    document.getElementById('achievements-modal').style.display = 'none';
}

function onGameFullyCompleted() {
    if (currentSessionCompleted) return;
    currentSessionCompleted = true;
    stopGameTimer();
    const isNewRecord = saveBestTimeIfNeeded();
    incrementGamesPlayed();
    checkAndUnlockAchievements();
    if (isNewRecord) {
        alert(`🏆 Новый рекорд! ${getCurrentElapsedSeconds()} секунд!`);
    }
}

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================
function getCurrentCoordinates() {
    return window.innerWidth <= 768 ? levelCoordinates.mobile : levelCoordinates.desktop;
}

function getDubnyashaOffset() {
    return window.innerWidth <= 768 ? { x: 30, y: -55 } : { x: 50, y: -55 };
}

function getCurrentLevelIndex() {
    for (let i = 0; i < gameData.length; i++) {
        if (!completedLevels.has(i)) return i;
    }
    return gameData.length - 1;
}

function getRandomSuccessMessage() {
    const messages = [
        "Отлично! Дубняша доволен твоими знаниями!",
        "Верно! Ты становишься настоящим знатоком университета!",
        "Правильно! Ещё один шаг к знакомству с «Дубной»!",
        "Супер! Ты на верном пути к поступлению!",
        "Молодец! Дубняша гордится тобой!",
        "Браво! Университет «Дубна» ждёт тебя!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ==================== ФУНКЦИИ КАРТЫ ====================
function initGame() {
    updatePersonalStatsUI();
    renderAchievementsList();
    
    // Если нет ни одного пройденного уровня и игра не завершена — сбрасываем таймер и счётчики сессии
    if (completedLevels.size === 0 && gameData.length > 0) {
        if (timerInterval) clearInterval(timerInterval);
        gameStartTime = null;
        currentSessionCompleted = false;
        mistakesCount = 0;
        document.getElementById('timer-display').innerText = '0';
    }
    
    if (completedLevels.size === gameData.length) {
        showFinalCongratulations();
        return;
    }
    createGameMap();
}

function createGameMap() {
    const mapContainer = document.getElementById('game-map-container');
    mapContainer.innerHTML = '';

    const mapElement = document.createElement('div');
    mapElement.className = 'game-map';

    addMapBackground(mapElement);
    createMapPaths(mapElement);
    createDubnyashaCharacter(mapElement);
    createLevelNodes(mapElement);

    mapContainer.appendChild(mapElement);
}

function addMapBackground(mapElement) {
    const mapBackground = document.createElement('img');
    mapBackground.className = 'map-background';
    mapBackground.src = customMapBackground;
    mapBackground.alt = 'Карта игры';
    mapBackground.onerror = function() {
        this.style.display = 'none';
        mapElement.style.background = 'linear-gradient(135deg, rgba(61, 61, 142, 0.7), rgba(98, 102, 181, 0.7))';
    };
    mapElement.appendChild(mapBackground);
}

function createMapPaths(mapElement) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.zIndex = '1';
    // Пути закомментированы
    mapElement.appendChild(svg);
}

function createDubnyashaCharacter(mapElement) {
    const dubnyasha = document.createElement('div');
    dubnyasha.className = 'dubnyasha-character';
    dubnyasha.innerHTML = '<img src="images/dubnyasha-icon.png" class="dubnyasha-mascot-img" alt="Дубняша">';

    const currentLevelIndex = getCurrentLevelIndex();
    const currentCoords = getCurrentCoordinates();
    const offset = getDubnyashaOffset();
    const pos = currentCoords[currentLevelIndex];

    dubnyasha.style.left = `calc(${pos.x}% + ${offset.x}px)`;
    dubnyasha.style.top = `calc(${pos.y}% + ${offset.y}px)`;

    mapElement.appendChild(dubnyasha);
}

function createLevelNodes(mapElement) {
    const currentCoords = getCurrentCoordinates();
    const currentLevelIndex = getCurrentLevelIndex();

    gameData.forEach((level, index) => {
        const levelNode = document.createElement('div');
        levelNode.className = 'level-node';
        if (completedLevels.has(index)) levelNode.classList.add('completed');
        if (index === currentLevelIndex) levelNode.classList.add('current');

        const pos = currentCoords[index];
        levelNode.style.left = `${pos.x}%`;
        levelNode.style.top = `${pos.y}%`;

        levelNode.innerHTML = `
            <div class="level-number">${index + 1}</div>
            ${completedLevels.has(index) ? '<div class="level-check">✓</div>' : ''}
        `;

        levelNode.onclick = () => startLevel(index);
        mapElement.appendChild(levelNode);
    });
}

// ==================== ЛОГИКА УРОВНЕЙ ====================
function startLevel(levelIndex) {
    const currentIndex = getCurrentLevelIndex();
    if (levelIndex > currentIndex && !completedLevels.has(levelIndex)) {
        alert('Сначала пройди предыдущие уровни!');
        return;
    }
    // Запускаем таймер при первом клике на уровень (если ещё не запущен и игра не завершена)
    if (!currentSessionCompleted) {
        startGameTimer();
    }
    currentLevel = levelIndex;
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('level-page').style.display = 'block';
    loadLevelContent();
}

function loadLevelContent() {
    const levelData = gameData[currentLevel];
    document.getElementById('question-text').textContent = levelData.question;
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    answersContainer.dataset.questionType = levelData.type;

    switch (levelData.type) {
        case 'single':
            levelData.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.className = 'answer-btn';
                button.innerHTML = `${index + 1}. ${answer}`;
                button.onclick = () => checkAnswer(index);
                answersContainer.appendChild(button);
            });
            break;

        case 'multiple':
            levelData.answers.forEach((answer, index) => {
                const label = document.createElement('label');
                label.className = 'answer-checkbox';
                label.innerHTML = `<input type="checkbox" value="${index}"> ${index + 1}. ${answer}`;
                answersContainer.appendChild(label);
            });
            const submitMultipleBtn = document.createElement('button');
            submitMultipleBtn.className = 'answer-btn submit-multiple';
            submitMultipleBtn.textContent = 'Проверить выбранные ответы';
            submitMultipleBtn.onclick = checkMultipleAnswer;
            answersContainer.appendChild(submitMultipleBtn);
            break;

        case 'order':
            const indices = [...Array(levelData.items.length).keys()];
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }
            answersContainer.dataset.currentOrder = JSON.stringify(indices);

            const orderList = document.createElement('div');
            orderList.className = 'order-list';
            indices.forEach((itemIndex, pos) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'order-item';
                itemDiv.dataset.index = itemIndex;
                itemDiv.innerHTML = `<span class="order-position">${pos+1}.</span> <span class="order-text">${levelData.items[itemIndex]}</span>`;
                orderList.appendChild(itemDiv);
            });
            answersContainer.appendChild(orderList);

            new Sortable(orderList, {
                animation: 150,
                ghostClass: 'dragging',
                onEnd: function() {
                    const newOrder = [];
                    orderList.querySelectorAll('.order-item').forEach(item => {
                        newOrder.push(parseInt(item.dataset.index));
                    });
                    answersContainer.dataset.currentOrder = JSON.stringify(newOrder);
                    updateOrderPositions(orderList);
                }
            });

            const checkOrderBtn = document.createElement('button');
            checkOrderBtn.className = 'answer-btn';
            checkOrderBtn.textContent = 'Проверить порядок';
            checkOrderBtn.onclick = checkOrderAnswer;
            answersContainer.appendChild(checkOrderBtn);
            break;
    }
}

function updateOrderPositions(orderList) {
    const items = orderList.querySelectorAll('.order-item');
    items.forEach((item, index) => {
        const posSpan = item.querySelector('.order-position');
        if (posSpan) posSpan.textContent = (index + 1) + '.';
    });
}

function checkMultipleAnswer() {
    const container = document.getElementById('answers-container');
    const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
    const selectedIndices = Array.from(checkboxes).map(cb => parseInt(cb.value));
    const levelData = gameData[currentLevel];
    const correctSet = new Set(levelData.correctAnswers);
    const selectedSet = new Set(selectedIndices);
    const isCorrect = setsAreEqual(correctSet, selectedSet);
    showResultModal(isCorrect);
}

function checkOrderAnswer() {
    const container = document.getElementById('answers-container');
    const currentOrder = JSON.parse(container.dataset.currentOrder);
    const levelData = gameData[currentLevel];
    const isCorrect = arraysEqual(currentOrder, levelData.correctOrder);
    showResultModal(isCorrect);
}

function setsAreEqual(a, b) {
    return a.size === b.size && [...a].every(value => b.has(value));
}

function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, idx) => val === b[idx]);
}

function showResultModal(isCorrect) {
    const modal = document.getElementById('result-modal');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');

    if (isCorrect) {
        handleCorrectAnswer(resultTitle, resultMessage);
    } else {
        handleWrongAnswer(resultTitle, resultMessage);
    }
    modal.style.display = 'flex';
}

function checkAnswer(selectedIndex) {
    const levelData = gameData[currentLevel];
    const isCorrect = selectedIndex === levelData.correct;
    showResultModal(isCorrect);
}

function handleCorrectAnswer(resultTitle, resultMessage) {
    resultTitle.textContent = '🎉 Правильно!';
    resultMessage.textContent = getRandomSuccessMessage();
    resultTitle.classList.add('celebrate');

    completedLevels.add(currentLevel);
    saveProgress();

    // Проверка достижения "Первые шаги" при первом пройденном уровне
    if (completedLevels.size === 1) {
        checkAndUnlockAchievements();
    }

    if (completedLevels.size === gameData.length) {
        resultMessage.textContent += "\n\n🎊 Ты прошел все уровни! 🎊";
        // Игра завершена, фиксируем рекорд и достижения
        onGameFullyCompleted();
    }
}

function handleWrongAnswer(resultTitle, resultMessage) {
    resultTitle.textContent = '❌ Попробуй еще раз';
    resultMessage.textContent = 'Неверный ответ. Подумай еще!';
    resultTitle.classList.remove('celebrate');
    // Увеличиваем счётчик ошибок
    mistakesCount++;
}

function closeModal() {
    const modal = document.getElementById('result-modal');
    modal.style.display = 'none';
    if (document.getElementById('result-title').textContent === '🎉 Правильно!') {
        goToMainPage();
    }
}

function goToMainPage() {
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('level-page').style.display = 'none';
    initGame();

    setTimeout(() => {
        const mapContainer = document.getElementById('game-map-container');
        if (mapContainer) {
            mapContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            const mainPage = document.getElementById('main-page');
            if (mainPage) mainPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

function showFinalCongratulations() {
    const mainPage = document.getElementById('main-page');
    mainPage.innerHTML = `
        <div class="final-congratulations">
            <div class="congrats-title">🎉 ПОЗДРАВЛЯЕМ! 🎉</div>
            <div class="congrats-subtitle">Ты прошёл все испытания!</div>
            <div class="final-content">
                <img src="images/dubnyasha-full.png" class="dubnyasha-final-img" alt="Дубняша">
                <p>Дубняша благодарит тебя за участие и ждёт в стенах Университета Дубна!</p>
                <div class="achievements">
                    <h3>📜 Твои достижения:</h3>
                    <ul>
                        <li>✨ Прошёл все испытания до конца</li>
                        <li>📚 Узнал много нового об Университете «Дубна»</li>
                        <li>🧠 Проявил смекалку и эрудицию</li>
                        <li>🏆 Получил почётное звание «Знаток университета» от Дубняши</li>
                    </ul>
                </div>
                <div class="final-stats">
                    🎯 Пройдено уровней: <strong>${completedLevels.size}/${gameData.length}</strong>
                </div>
                <button class="restart-btn" onclick="restartGame()">🔄 Пройти заново</button>
            </div>
        </div>
    `;

    const finalDiv = document.querySelector('.final-congratulations');
    if (finalDiv) finalDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartGame() {
    if (confirm('Начать игру заново? Все достижения и рекорды останутся, но текущий прогресс сбросится.')) {
        // Сброс сессии
        if (timerInterval) clearInterval(timerInterval);
        gameStartTime = null;
        currentSessionCompleted = false;
        mistakesCount = 0;
        document.getElementById('timer-display').innerText = '0';
        
        const user = sessionStorage.getItem('username');
        localStorage.removeItem(`progress_${user}`);
        location.reload();
    }
}

function showDubnyashaInfo() {
    alert("🐾 Дубняша — официальный символ Университета «Дубна»!\n\nЭтот любознательный персонаж поможет тебе познакомиться с университетом, его историей и направлениями подготовки. Следуй за Дубняшей — и узнаешь всё о «Дубне»!");
}

// ==================== РЕДАКТОР (ТОЛЬКО ДЛЯ АДМИНИСТРАТОРА) ====================
function renderEditorForm(container) {
    container.innerHTML = '';
    gameData.forEach((level, idx) => {
        const levelDiv = document.createElement('div');
        levelDiv.className = 'level-editor';
        levelDiv.dataset.levelIndex = idx;
        levelDiv.innerHTML = `
            <h3>Уровень ${idx+1}</h3>
            <label>Тип вопроса:</label>
            <select class="edit-type" data-index="${idx}">
                <option value="single" ${level.type === 'single' ? 'selected' : ''}>Один ответ</option>
                <option value="multiple" ${level.type === 'multiple' ? 'selected' : ''}>Несколько ответов</option>
                <option value="order" ${level.type === 'order' ? 'selected' : ''}>Упорядочивание</option>
            </select>
            <div class="type-specific-fields"></div>
        `;

        const fieldsContainer = levelDiv.querySelector('.type-specific-fields');
        const typeSelect = levelDiv.querySelector('.edit-type');

        function renderFields(type) {
            fieldsContainer.innerHTML = '';
            fieldsContainer.innerHTML += `<label>Вопрос:</label>
                <input type="text" class="edit-question" value="${escapeHtml(level.question)}">`;

            if (type === 'single' || type === 'multiple') {
                const answers = level.answers || [];
                fieldsContainer.innerHTML += `<div class="answers-group">`;
                answers.forEach((ans, aIdx) => {
                    fieldsContainer.innerHTML += `
                        <div>
                            <label>Ответ ${aIdx+1}:</label>
                            <input type="text" class="edit-answer" data-answer-idx="${aIdx}" value="${escapeHtml(ans)}">
                        </div>
                    `;
                });
                fieldsContainer.innerHTML += `</div>`;

                if (type === 'single') {
                    fieldsContainer.innerHTML += `<label>Правильный ответ (номер 0-${answers.length-1}):</label>
                        <select class="edit-correct">
                            ${answers.map((_, i) => `<option value="${i}" ${level.correct === i ? 'selected' : ''}>${i+1}</option>`).join('')}
                        </select>`;
                } else {
                    const correctSet = new Set(level.correctAnswers || []);
                    fieldsContainer.innerHTML += `<label>Правильные ответы (отметьте):</label>`;
                    answers.forEach((_, i) => {
                        fieldsContainer.innerHTML += `
                            <label style="display:block;">
                                <input type="checkbox" class="edit-correct-multiple" value="${i}" ${correctSet.has(i) ? 'checked' : ''}>
                                Ответ ${i+1}
                            </label>`;
                    });
                }
            } else if (type === 'order') {
                const items = level.items || [];
                fieldsContainer.innerHTML += `<label>Элементы (по одному на строку, порядок — правильный):</label>
                    <textarea class="edit-order-items" rows="6">${items.join('\n')}</textarea>`;
            }
        }

        renderFields(level.type);
        typeSelect.addEventListener('change', (e) => renderFields(e.target.value));
        container.appendChild(levelDiv);
    });
}

function openEditorModal() {
    const modal = document.getElementById('editor-modal');
    const formContainer = document.getElementById('editor-form');
    renderEditorForm(formContainer);
    initEditorTabs();
    updateMapPreview();
    modal.style.display = 'flex';
}

function closeEditorModal() {
    document.getElementById('editor-modal').style.display = 'none';
}

function saveEditorChanges() {
    const newGameData = [];
    const levelDivs = document.querySelectorAll('#editor-form .level-editor');
    levelDivs.forEach((div) => {
        const type = div.querySelector('.edit-type').value;
        const question = div.querySelector('.edit-question').value;

        if (type === 'single') {
            const answers = [];
            div.querySelectorAll('.edit-answer').forEach(inp => answers.push(inp.value));
            const correct = parseInt(div.querySelector('.edit-correct').value, 10);
            newGameData.push({ question, type, answers, correct });
        } else if (type === 'multiple') {
            const answers = [];
            div.querySelectorAll('.edit-answer').forEach(inp => answers.push(inp.value));
            const correctAnswers = [];
            div.querySelectorAll('.edit-correct-multiple:checked').forEach(cb => correctAnswers.push(parseInt(cb.value, 10)));
            newGameData.push({ question, type, answers, correctAnswers });
        } else if (type === 'order') {
            const itemsText = div.querySelector('.edit-order-items').value;
            const items = itemsText.split('\n').map(s => s.trim()).filter(s => s !== '');
            const correctOrder = items.map((_, i) => i);
            newGameData.push({ question, type, items, correctOrder });
        }
    });

    gameData = newGameData;
    saveGameData();

    // Сброс прогресса всех пользователей
    resetAllPlayersProgress();

    closeEditorModal();
    initGame();
    alert('Данные игры обновлены! Прогресс всех игроков сброшен.');
}

function resetToDefault() {
    if (confirm('Сбросить все вопросы и фон к исходным? Прогресс всех пользователей будет удалён!')) {
        gameData = JSON.parse(JSON.stringify(defaultGameData));
        saveGameData();
        customMapBackground = 'images/game-map-background.jpg';
        localStorage.setItem('mapBackground', customMapBackground);
        resetAllPlayersProgress();
        closeEditorModal();
        initGame();
        alert('Игра сброшена к исходному состоянию.');
    }
}

// ==================== ФУНКЦИИ ДЛЯ РАБОТЫ С ПРЕСЕТАМИ И ПРОГРЕССОМ ====================
function resetAllPlayersProgress() {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
        if (key.startsWith('progress_')) localStorage.removeItem(key);
    });
    completedLevels.clear();
    const user = sessionStorage.getItem('username');
    if (user) saveProgress(); // сохраняем пустой прогресс для текущего пользователя
}

function applyPreset(presetId) {
    const preset = presets[presetId];
    if (!preset) return;

    // 1. Меняем вопросы
    gameData = JSON.parse(JSON.stringify(preset.gameData));
    saveGameData();

    // 2. Меняем фон карты
    customMapBackground = preset.mapBackground;
    localStorage.setItem('mapBackground', customMapBackground);

    // 3. Сбрасываем прогресс всех игроков
    resetAllPlayersProgress();

    // 4. Перезапускаем игру (обновляем карту)
    initGame();

    // 5. Если редактор открыт — обновляем его содержимое
    const editorModal = document.getElementById('editor-modal');
    if (editorModal && editorModal.style.display === 'flex') {
        const formContainer = document.getElementById('editor-form');
        if (formContainer) renderEditorForm(formContainer);
        updateMapPreview();
    }

    alert(`Пресет «${preset.name}» применён. Прогресс всех игроков сброшен.`);
}

// ==================== ФУНКЦИИ ДЛЯ РЕДАКТОРА КАРТЫ ====================
function changeMapBackground() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(ev) {
                customMapBackground = ev.target.result;
                localStorage.setItem('mapBackground', customMapBackground);
                updateMapPreview();
                initGame();
                alert('Фон карты обновлён!');
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function resetMapBackground() {
    if (confirm('Сбросить фон карты к исходному? Прогресс игроков останется неизменным.')) {
        customMapBackground = 'images/game-map-background.jpg';
        localStorage.setItem('mapBackground', customMapBackground);
        updateMapPreview();
        initGame();
        alert('Фон карты сброшен к исходному.');
    }
}

function updateMapPreview() {
    const previewImg = document.getElementById('current-map-preview');
    if (previewImg) {
        previewImg.src = customMapBackground || 'images/game-map-background.jpg';
    }
}

function initEditorTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.removeEventListener('click', initEditorTabs.handler);
        const handler = () => {
            const tabId = tab.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            tab.classList.add('active');
        };
        tab.addEventListener('click', handler);
        initEditorTabs.handler = handler;
    });
}

// ==================== ВЫХОД ====================
function logout() {
    sessionStorage.clear();
    window.location.href = 'login.html';
}

// ==================== ОБРАБОТЧИКИ СОБЫТИЙ ====================
window.addEventListener('resize', function() {
    if (document.getElementById('main-page').style.display !== 'none') {
        initGame();
    }
});

document.getElementById('logout-btn').onclick = logout;
document.getElementById('reset-editor-btn').onclick = resetToDefault;
document.getElementById('save-editor-btn').onclick = saveEditorChanges;

const uploadBgBtn = document.getElementById('upload-bg-btn');
const resetBgBtn = document.getElementById('reset-bg-btn');
if (uploadBgBtn) uploadBgBtn.onclick = changeMapBackground;
if (resetBgBtn) resetBgBtn.onclick = resetMapBackground;

// Обработчик кликов по кнопкам пресетов (делегирование)
document.addEventListener('click', function(e) {
    if (e.target.classList && e.target.classList.contains('preset-btn')) {
        const presetId = e.target.getAttribute('data-preset');
        if (presetId) applyPreset(presetId);
    }
});

// Кнопка достижений
document.getElementById('achievements-badge').onclick = showAchievementsModal;

// ==================== ЗАПУСК ====================
window.onload = function() {
    if (!checkAuth()) return;
    loadCustomData();
    initGame();
};
