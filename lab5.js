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

const addBtn = document.getElementById('add-forecast-btn');
const grid = document.getElementById('forecast-grid');

addBtn.addEventListener('click', () => {
    const title = prompt('Название сферы:', 'Биотехнологии');
    if (!title) return;

    const description = prompt('Описание прогноза:', 'Выращивание органов.');
    if (!description) return;

    const probability = prompt('Вероятность (0–100):', '80');
    if (!probability) return;

    const card = createForecastItem(title, description, probability);
    grid.appendChild(card);
});

grid.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.closest('.forecast-item').remove();
    }
});