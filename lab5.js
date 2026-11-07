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