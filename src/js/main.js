"use strict"

const questions = [
  {
    question: "Что в библии не называлось белым?",
    answers: [
      "A. Мясо",
      "B. Волосы",
      "C. Берёза",
      "D. Одежда"
    ],
    correct: 2
  },
  {
    question: "За сколько монет братья продали Иосифа?",
    answers: [
      "A. 10",
      "B. 20",
      "C. 30",
      "D. 40"
    ],
    correct: 1
  },
  {
    question: "Сестру Моисея звали...",
    answers: [
      "A. Иохаведа",
      "B. Фуа",
      "C. Мариам",
      "D. Шифра"
    ],
    correct: 2
  },
  {
    question: "Ослица заговорила когда на ней ехал...",
    answers: [
      "A. Валак",
      "B. Валаам",
      "C. Ваал",
      "D. Валтасар"
    ],
    correct: 1
  },
  {
    question: "Иисус родился в городе:",
    answers: [
      "A. Вифсаида",
      "B. Капернаум",
      "C. Вифлием",
      "D. Назарет"
    ],
    correct: 2
  },
  {
    question: "что не лежало в ковчеге соглашения?",
    answers: [
      "A. Манна",
      "B. Посох",
      "C. Урим и Тумим",
      "D. Скрижали"
    ],
    correct: 2
  },
  {
    question: "Первый раз Бог разговаривал с Моисеем из:",
    answers: [
      "A. Облачного  столба",
      "B. Огненного столба",
      "C. Горы",
      "D. Горящего куста"
    ],
    correct: 3
  },
  {
    question: "Раав в Иерихоне привязала верёвку:",
    answers: [
      "A. Белую",
      "B. Алую",
      "C. Синюю",
      "D. Разноцветную"
    ],
    correct: 1
  },
  {
    question: "Что не длилось сорок дней?",
    answers: [
      "A. Моисей был на горе Синай",
      "B. Шёл дождь во время потопа",
      "C. Илья постился по дороге к горе Хорив",
      "D. Иезекииль лежал на левом боку"
    ],
    correct: 3
  },
  {
    question: "Из Содома ангелы вывели:",
    answers: [
      "A. Лота с женой и дочерьми",
      "B. Лота с дочерьми",
      "C. Лота с дочерьми и зятьями",
      "D. Лота с женой, дочерьми и зятьями"
    ],
    correct: 0
  },
  {
    question: "Какой змеи нет в Библии?",
    answers: [
      "A. Медная змея",
      "B. Огненная змея",
      "C. Стремительная змея",
      "D. Серебрянная змея"
    ],
    correct: 3
  },
  {
    question: "Среди мировых держав из 2 главы книги Даниила не было:",
    answers: [
      "A. Рима",
      "B. Сирии",
      "C. Вавилона",
      "D. Греции"
    ],
    correct: 1
  },
  {
    question: "На столе предложения в Святом Священного шатра находились:",
    answers: [
      "A. Херувимы",
      "B. Светильники",
      "C. Хлеба",
      "D. Скрижали"
    ],
    correct: 2
  },
  {
    question: "Кого не воскресил Иисус?",
    answers: [
      "A. Дочь Иаира",
      "B. Лазаря",
      "C. Сына вдовы из Сарепты",
      "D. Сына вдовы из Наина"
    ],
    correct: 2
  },
  {
    question: "Какого цвета нагрудников не было у коней и всадников?",
    answers: [
      "A. Жёлто-зелёного",
      "B. Лилово-синего",
      "C. Огненно-красного",
      "D. Красно-чёрного"
    ],
    correct: 3
  },
  {
    question: "Сколько этажей было в ковчеге Ноя?",
    answers: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    correct: 2
  },
  {
    question: "Кто не был сыном Ноя?",
    answers: [
      "A. Сим",
      "B. Иафет",
      "C. Ханаан",
      "D. Хам"
    ],
    correct: 2
  },
  {
    question: "Посох Аарона расцвёл:",
    answers: [
      "A. Яблоневым цветом",
      "B. Маслиновым цветом",
      "C. Миндалём",
      "D. Каперсом"
    ],
    correct: 2
  },
  {
    question: "Чтобы пал Иерихон, не нудно было:",
    answers: [
      "A. Трубить в рог",
      "B. Зажечь факел",
      "C. Семь раз обойти вокруг",
      "D. Издать боевой клич"
    ],
    correct: 1
  },
  {
    question: "Гаваонитяне не взяли с собой в дорогу:",
    answers: [
      "A. Заплесневелый сыр",
      "B. Сухой хлеб",
      "C. Зашитые бурдюки для вина",
      "D. Изношенную одежду и обувь"
    ],
    correct: 0
  },
  {
    question: "Какой стихии не было, когда Иегова показывал силу Илье?",
    answers: [
      "A. Ветер",
      "B. Землетрясение",
      "C. Огонь",
      "D. Гроза"
    ],
    correct: 1
  },
  {
    question: "На Иисусе Христе перед сметртью была накидка:",
    answers: [
      "A. Белая",
      "B. Изумрудная",
      "C. Багряная",
      "D. Коричневая"
    ],
    correct: 2
  },
  {
    question: "На еврейском языке числа писали:",
    answers: [
      "A. Прописью",
      "B. Римскими цифрами",
      "C. Древними иероглифами",
      "D. Арабскими цифрами"
    ],
    correct: 0
  },
  {
    question: "Повеление о восстановлении стен Иерусалима дал:",
    answers: [
      "A. Кир Персидский",
      "B. Дарий Мидянин",
      "C. Артаксеркс Персидский",
      "D. Навуходоносор"
    ],
    correct: 2
  },
  {
    question: "Кто не упоминается во время странствования по пустыне?",
    answers: [
      "A. Телёнок",
      "B. Змей",
      "C. Верблюд",
      "D. Перепел"
    ],
    correct: 2
  },
  {
    question: "Северное 10-коленное царство было заваёвано:",
    answers: [
      "A. Сирийцами",
      "B. Египтянами",
      "C. Ассирийцами",
      "D. Вавилонянами"
    ],
    correct: 2
  },
  {
    question: "Когда разделились воды Красного моря, дул ветер:",
    answers: [
      "A. Северный",
      "B. Восточный",
      "C. Южный",
      "D. Западный"
    ],
    correct: 1
  },
  {
    question: "Кто не воскрешал людей?",
    answers: [
      "A. Илья",
      "B. Павел",
      "C. Исаия",
      "D. Пётр"
    ],
    correct: 2
  },
  {
    question: "Что в Библии не называется огненно-красным?",
    answers: [
      "A. Небо",
      "B. Дракон, с семью горовами и десятью рогами",
      "C. Конь, всадник которого взял мир с земли",
      "D. Зверь, с семью головами и десятью рогами"
    ],
    correct: 3
  },
  {
    question: "Среди десяти казней не бвло:",
    answers: [
      "A. Града",
      "B. Землетрясения",
      "C. Тьмы",
      "D. Эпидемии"
    ],
    correct: 1
  },
  {
    question: "Кто видел первую радугу?",
    answers: [
      "A. Адам",
      "B. Енох",
      "C. Сим",
      "D. Сиф"
    ],
    correct: 2
  },
  {
    question: "Ктоо не сравнивается со львом?",
    answers: [
      "A. Иегова",
      "B. Иисус",
      "C. Давид",
      "D. Сатана"
    ],
    correct: 2
  },
  {
    question: "Как в Библии не называется Генисаретское озеро?",
    answers: [
      "A. Тивериадское море",
      "B. Галилиейское море",
      "C. Солёное море",
      "D. Кинерефское море"
    ],
    correct: 2
  },
  {
    question: "После исцеления сириец Нееман взял с собой:",
    answers: [
      "A. Израильскую одежду",
      "B. Серебро и золото",
      "C. Израильские сувениры",
      "D. Израильскую землю"
    ],
    correct: 3
  },
  {
    question: "Посох не использовался, чтобы:",
    answers: [
      "A. Ударить по скале, когда потекла вода",
      "B. Для появления манны",
      "C. Подтвердить власть Аарона",
      "D. Произвести чудеса в Египте"
    ],
    correct: 1
  },
  {
    question: "Что не былоа белым?",
    answers: [
      "A. Длинные одежды у великого множества",
      "B. Большой преестол в день суда",
      "C. Камешек с именем помазанника",
      "D. Стены в видении небесного Иерусалима"
    ],
    correct: 3
  },
  {
    question: "Иегова три раза не разговаривал:",
    answers: [
      "A. С Марией, матерью Иисуса",
      "B. С Самуилом в Силоме",
      "C. С Иисусом, когда он был на земле",
      "D. С Моисеем в Египте"
    ],
    correct: 0
  },
  {
    question: "Какая причёска была у судьи Самсона?",
    answers: [
      "A. Стрижка, как у всех мужчин",
      "B. Волосы, собранные в хвост",
      "C. Заплетённые в семь кос",
      "D. Обрит наголо"
    ],
    correct: 2
  },
  {
    question: "Что из растений упоминается в Библии раньше?",
    answers: [
      "A. Маслина",
      "B. Пальма",
      "C. Тамариск",
      "D. Бутылочная тыква"
    ],
    correct: 0
  },
  {
    question: "Какой город для Иисуса Христа был своим",
    answers: [
      "A. Капернаум",
      "B. Вифсаида",
      "C. Назарет",
      "D. Вифлием"
    ],
    correct: 0
  },
  {
    question: "Найди ошибку, В субботний год:",
    answers: [
      "A. Отдыхала земля",
      "B. Не собирали урожай",
      "C. Не требовали уплаты долгов с евреев",
      "D. Освобождали рабов евреев"
    ],
    correct: 3
  },
  {
    question: "Не описано, что исцелял людей",
    answers: [
      "A. Филип",
      "B. Иоанн",
      "C. Пётр",
      "D. Иаков"
    ],
    correct: 3
  },
  {
    question: "Какого цвета шнурок проходил по подолу одежды израильтян?",
    answers: [
      "A. Багряный",
      "B. Пёстрый",
      "C. Синий",
      "D. Золотой"
    ],
    correct: 2
  },
  {
    question: "Гедеону и 300 воинам не нужно было брать с собой:",
    answers: [
      "A. Лук и стрелы",
      "B. Факел",
      "C. Кувшин",
      "D. Рог"
    ],
    correct: 0
  },
  {
    question: "Кто было Каин по роду занятий?",
    answers: [
      "A. Земледелец",
      "B. Скотовод",
      "C. Винодел",
      "D. Музыкант"
    ],
    correct: 0
  },
  {
    question: "Змея не упоминается в связи с:",
    answers: [
      "A. Апостолом Павлом",
      "B. Пророком Ильёй",
      "C. Наказанием израильтян в пустыне",
      "D. Фараоном в Египте."
    ],
    correct: 1
  },
  {
    question: "Апостол Павел потерпел кораблекрушение возле острова:",
    answers: [
      "A. Патмос",
      "B. Мальта",
      "C. Крит",
      "D. Кипр"
    ],
    correct: 1
  },
  {
    question: "Когда заменяли хлеба предложения на свежие в Святом Священного шатра?",
    answers: [
      "A. По субботам",
      "B. Ежедневно",
      "C. На праздник пресных лепёшек",
      "D. Каждый день, кроме субботы"
    ],
    correct: 0
  },
  {
    question: "Какое чудо не описано в библии?",
    answers: [
      "A. Превращение воды в вино в Кане",
      "B. Исцеление у купальни Вифезда",
      "C. Oстановились воды реки Иордан",
      "D. Всплыл топор пророка Елисея"
    ],
    correct: 3
  }
];

const buttonsContainer = document.querySelector('.buttons');

for (let i = 1; i < questions.length + 1; i++) {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('button');
  button.textContent = i;
  buttonsContainer.insertAdjacentElement('beforeend', button);
}

const buttons = buttonsContainer.querySelectorAll('.button');
const questionElement = document.querySelector('.question');
const answers = document.querySelectorAll('.answer');
const clean = document.querySelector('.m-main__btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    questionElement.textContent = questions[i].question;
    buttons[i].classList.add('button__color');
    buttons[i].textContent = '';
    buttons[i].style.border = 'none';
    for (let j = 0; j < questions[i].answers.length; j++) {
      answers[j].textContent = questions[i].answers[j];
    }
    for (let k = 0; k < answers.length; k++) {
      answers[k].addEventListener('click', () => {
        if (k === questions[i].correct) {
          answers[k].style.backgroundColor = 'green';
        } else {
          answers[k].style.backgroundColor = 'red';
        }
      });
      clean.addEventListener('click', () => {
        questionElement.textContent = '';
        answers[k].textContent = '';
        answers[k].style.backgroundColor = '#2846ee';
      });
    }
  });
}


