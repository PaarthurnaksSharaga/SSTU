function application () {}

// функция для вывода на экран результаты задания
application.prototype.print = function (description, html)
{
    let desc = document.getElementById('result-description');
    let answer = document.getElementById('result-answer');

    let resultDiv = document.getElementById('result');

    desc.innerHTML = description;
    answer.innerHTML = html;
}

// практическая 1
// задание 0
application.prototype.work1task0 = function () {
    // создаем переменную
    let variable = 'Это строка';

    // тип переменный узнается через typeof. Условие если тип равен строке, то выводит надпись это строка
    if (typeof variable == "string")
        this.print('создать переменную, узнать ее тип, добавить вывод на экран текста, в зависимости от значения (if else)', "Это строка");
    else
        this.print('создать переменную, узнать ее тип, добавить вывод на экран текста, в зависимости от значения (if else)', "Тип переменной - " + typeof variable);
}

// задание 1
application.prototype.work1task1 = function ()
{
    let znak = prompt('Введите знак зодиака');
    alert('Приветствую ' + znak);

    this.print('запросить у пользователя знак зодиака, и в зависимости от ответа выдать всплывающее окно приветствия (вместо знака зодиака, можно запросить другие данные, предполагающие несколько вариантов ответа) (switch)', '');
}

// задание 2
application.prototype.work1task2 = function ()
{
    let str = '';

    str += 'Цикл for: ';
    for (let i = 0; i < 40; i++)
    {
        str += (i+1) + ',';
    }

    let i = 0;
    str += '<br>Цикл while: ';
    while (i<40)
    {
        str += (i+1) + ',';
        i++;
    }

    str += '<br>Цикл do while: ';
    i = 0;
    do {
        str += (i+1) + ',';
        i++;
    }
    while (i < 40);

    this.print('вывести все числа от 1 до 40, с использованием 3-х разных циклов', str);
}

// задание 3
application.prototype.work1task3 = function ()
{
    setInterval(
        function () {
            alert('Закрой меня');
        },
        1000
    );

    this.print('создайте вирусную страницу с постоянно повторяющемся сообщением', 'Ахтунг!');
}

// задание 4
application.prototype.work1task4 = function ()
{
    let variable = prompt('Введите любое число больше 5');

    if (variable.replace(/\s/g, '').length === 0 || isNaN(variable))
        alert('Нужно было вводить число');
    else {
        if (parseFloat(variable) > 5)
            alert('Поздравляю, Вы справились');
        else
            alert('Ваше число меньше чем требуется');
    }

    this.print('Запросить у пользователя любое число больше 5, в случае правильного ответа выдать окошко с поздравлением, в случае неправильного ответа вывести повторное окно с вопросом (помните, что пользователь может нажать "отмена", помните о типах данных)', 'Ахтунг!');
}

// задание 5
application.prototype.work1task5 = function () {
    let str = 'Все четные числа от 8 до 20: ';

    // ну вообще легче сделать в цикле i=i+2, но да ладно. Будем делать проверку
    for (let i = 8; i <= 20; i++)
    {
        if (i % 2 === 0)
            str += i + ',';
    }

    this.print('выведите четные числа от 8 до 20', str);
}

// задание 6
application.prototype.work1task6 = function () {
    let str = 'нечетные числа от 1 до 7, пропустив 5: ';
    for (let i = 1; i <= 7; i++)
    {
        if (i % 2 === 1 && i !== 5)
            str += i + ',';
    }
    this.print('выведите четные числа от 8 до 20', str);
}

// практическая 2
// задание 1
application.prototype.work2task1 = function () {
    let arr1 = [];
    let arr2 = Array();
    let arr3 = {}; // массив объектов это тоже массив

    this.print('создать массив 3 разными способами', 'Смотрите код');
}

// задание 2
application.prototype.work2task2 = function () {
    let arr = [1,2,3,4,5,6];

    this.print('выведите на экран 5 член вашего массива затем измените его значение', arr[4]);

    arr[4] = 4.1;
}

// задание 3
application.prototype.work2task3 = function () {
    let arr = [1,2,3,4,5,6];

    for (index in document.body.children )
    {
        document.body.children[index].title = arr.length;
    }

    this.print('узнайте длину вашего массива и выведите ее значение при наведении на любой элемент', 'Наведитесь на любой элемент');
}

// задание 4
application.prototype.work2task4 = function () {
    let arr = [1,2,3,4,5,6];

    let str = 'Все элементы массива: ';

    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + ',';
    }

    this.print('выведите все элементы массива, используя цикл for', str);
}

// задание 5
application.prototype.work2task5 = function () {
    let arr1 = [1,2,3,4,5,6];
    let arr2 = [7,8,9,10,11,12];
    let arr3 = Array();
    str = 'Массив 1: [';

    for (let i = 0; i < arr1.length; i++) {
        str += arr1[i] + ',';
        arr3.push(arr1[i]);
    }

    str += ']<br>Массив 2:[';

    for (let i = 0; i < arr2.length; i++) {
        str += arr2[i] + ',';
        arr3.push(arr2[i]);
    }

    str += ']<br>Объединенный массив:[';

    for (let i = 0; i < arr3.length; i++) {
        str += arr3[i] + ',';
    }

    str += ']';

    this.print('создайте 2 массива. Объедините их в один и выведите на экран полученный массив', str);

    return arr3;
}

// задание 6
application.prototype.work2task6 = function () {
    let arr = this.work2task5();

    let lastElement = arr[arr.length-1];

    arr.pop();

    this.print('Удалите последний член получившегося массива и выведите это значение на экран', 'Последний удаленный элемент массива: ' + lastElement);
    return arr;
}

// задание 7
application.prototype.work2task7 = function () {
    let arr = this.work2task6();

    let lastElement = arr[arr.length-1];

    arr.pop();

    this.print('Удалите последний член получившегося массива и выведите это значение на экран', 'Последний удаленный элемент массива: ' + lastElement);
    return arr;
}

// задание 8
application.prototype.work2task8 = function () {
    let arr = this.work2task7();

    arr.unshift('1');
    this.print('Добавьте новый элемент в начало вашего объединенного массива', 'Добавил элемент 1 вначало массива ');
}

// задание 9
application.prototype.work2task9 = function () {
    let today = new Date();

    let month = today.getMonth() + 1;

    if (month < 10)
    {
        month = '0' + month;
    }
    this.print('Получите сегодняшнюю дату и выведите ее на экран', today.getDate() + '.' + month + '.' + today.getFullYear());
}

// задание 10
application.prototype.work2task10 = function () {
    let today = new Date();

    let monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ];

    let str = today.getDate() + ' ' + monthNames[today.getMonth()]+ ' ' + today.getFullYear() + ' года';

    this.print('Выведите сегодняшнюю дату в формате 11 ноября 2020 года', str);
}

// задание 11
application.prototype.work2task11 = function () {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let num1 = getRandomInt(50);
    let num2 = getRandomInt(50);
    let num3 = num1 * num2;

    let str = 'Беру два случайных числа ' + num1 + ' и ' + num2 + '<br>Результат произведения = ' + num3;

    this.print('напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50', str);
}

// основной код
let app = new application();

function getDecision ()
{
    let section = document.getElementById("section").value;
    let task = document.getElementById("task").value;

    let resultDOM = document.getElementById('result');

    if (parseInt(section) > 0 && parseInt(task) >= 0)
        app["work"+section+"task"+task]();
    else
        app.print('Отсутствует', 'Номер задачи или практической отсутствует');

    resultDOM.classList.remove('hidden');

    let code = document.getElementById('code');

    code.innerHTML = app["work"+section+"task"+task].toString();
}

function setCookie ()
{
    let name = document.getElementById('popup-input-name').value;
    let email = document.getElementById('popup-input-email').value;
    let phone = document.getElementById('popup-input-phone').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    let modal = document.getElementById('modal');
    let popup = document.getElementById('popup');

    modal.classList.add('hidden');
    popup.classList.add('hidden');
}

window.onload = function () {
    setTimeout(
      function () {
          let modal = document.getElementById('modal');
          let popup = document.getElementById('popup');

          modal.classList.remove('hidden');
          popup.classList.remove('hidden');
      } ,
      5000
    );

    let popup = document.getElementById('popup');
    popup.onclick = function () {
        let modal = document.getElementById('modal');

        modal.classList.add('hidden');
        this.classList.add('hidden');
    }
}

