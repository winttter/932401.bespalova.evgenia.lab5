const growthArray = [25, 1, 70, 55, 63, 12, 3];

function findMax(array)
{
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function filterMoreThan20(array)
{
    let result = [];
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] > 20)
        {
            result.push(array[i]);
        }
    }

    return result;
}

function findSumArray(array)
{
    let sum = 0;

    for (let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    return sum;
}

function amountElementsBelowX(array, x)
{
    let count = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] <= x)
        {
            count += 1;
        }
    }

    return count;
}

const userName = prompt('Как вас зовут?', 'Евгения');
if (userName) {
    alert(`Привет, ${userName}!`);
} else {
    alert(`Добро пожаловать, человек из прошлого!`)
}

console.log(growthArray);

let below5 = amountElementsBelowX(growthArray, 5);
console.log(`количество элементов <= 5: ${below5}`);

let maxGrowth = findMax(growthArray);
let mediumGrowth = (findSumArray(growthArray) / growthArray.length).toFixed(2);
let highGrowthCount = filterMoreThan20(growthArray).length;

alert(`Средний прогнозируемый рост – ${mediumGrowth} %, ${highGrowthCount} прогнозов – высокие`);

console.log(`доля элементов <= 5: ${(below5 / growthArray.length * 100).toFixed(2)} %`);

if (maxGrowth > 50)
{
    console.log('Некоторые прогнозы выглядят очень амбициозно!');
}