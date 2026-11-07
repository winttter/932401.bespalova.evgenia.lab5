function createForecastItem(title, description, probability) {
    const card = document.createElement('div');
    card.classList.add('forecast-item');

    card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Вероятность: <mark>${probability}%</mark></p>
        <button class="delete-btn" type="button">Удалить</button>
    `;

    return card;
}

function getForecastsFromDOM() {
    const cards = document.querySelectorAll('#forecast-grid .forecast-item');
    const result = [];
    cards.forEach(c => {
        const title = c.querySelector('h3').textContent;
        const description = c.querySelector('p').textContent;
        const probability = c.querySelector('mark').textContent.replace('%', '');
        result.push({ title, description, probability });
    });
    return result;
}

function setForecastsToDOM(forecasts) {
    const grid = document.getElementById('forecast-grid');
    grid.innerHTML = '';

    forecasts.forEach(f => {
        const card = createForecastItem(f.title, f.description, f.probability);
        grid.appendChild(card);
    });
}

function saveForecasts() {
    const forecasts = getForecastsFromDOM();
    localStorage.setItem('forecasts', JSON.stringify(forecasts));
}

const addBtn = document.getElementById('add-forecast-btn');
if (!addBtn) {
    console.error('Button with id "add-forecast-btn" not found.');
}

const grid = document.getElementById('forecast-grid');
if (!grid) {
    console.error('Element with id "forecast-grid" not found.');
}

addBtn.addEventListener('click', () => {
    const title = prompt('Название сферы:', 'Биотехнологии');
    if (!title) return;

    const description = prompt('Описание прогноза:', 'Выращивание органов.');
    if (!description) return;

    const probability = prompt('Вероятность (0–100):', '80');
    if (!probability) return;

    const card = createForecastItem(title, description, probability);
    grid.appendChild(card);
    saveForecasts();
});

grid.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.closest('.forecast-item').remove();
        saveForecasts();
    }
});

const themeBtn = document.getElementById('change-theme-btn');
if (!themeBtn) {
    console.error('Button with id "change-theme-btn" not found.');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}

const saved = localStorage.getItem('forecasts');

if (saved) {
    setForecastsToDOM(JSON.parse(saved));
} else {
    saveForecasts();
}

const hideBtn = document.getElementById('hide-forecasts-btn');
if (!hideBtn) {
    console.error('Button with id "hide-forecasts-btn" not found.');
}

hideBtn.addEventListener('click', () => {
    grid.classList.toggle('hidden');
    
    if (grid.classList.contains('hidden')) {
        hideBtn.textContent = 'Показать прогнозы';
    } else {
        hideBtn.textContent = 'Скрыть прогнозы';
    }
});