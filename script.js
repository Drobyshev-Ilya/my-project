// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Массив с различными типами йоги и их описаниями
    const yogaTypes = [
        { name: "Хатха-йога", description: "название происходит от двух слов: «ха» («мужское начало, солнце, дух») и «тха» («женское начало, луна, душа») и т.д." },
        { name: "Йога кундалини", description: "это разновидность одного из древних индийских учений, направленная на пробуждение скрытой энергии." },
        { name: "Йога айенгара", description: "разновидность хатха-йоги и т.д." },
        { name: "Аштанга-виньяса йога", description: "одна из современных систем хатха-йоги и т.д." },
        { name: "Бикрам-йога", description: "комплекс упражнений, выполняемых в нагретом помещении и т.д." },
        { name: "Сукшма-вьяяма", description: "практика суставной гимнастики и т.д." }
    ];
    // Получаем все блоки с информацией о йоге
    const yogaInfoBlocks = document.querySelectorAll(".yoga-info");

    // Для каждого блока с информацией о йоге обновляем информацию через определенный интервал
    yogaInfoBlocks.forEach(function(block) {
        updateYogaInfo(block); // Первоначальное обновление информации
        setInterval(function() {
            block.classList.add("fade-out"); // Применяем анимацию и затем обновляем текст
            setTimeout(function() {
                updateYogaInfo(block);
                block.classList.remove("fade-out");
            }, 500); // Ждем 500 миллисекунд (время анимации) перед обновлением текста
        }, 5000); // Повторяем каждые 5 секунд
    });

    // Функция для обновления информации о йоге
    function updateYogaInfo(block) {
        let randomYogaType = getRandomYogaType();
        block.querySelector("h2").textContent = randomYogaType.name;
        block.querySelector("p").textContent = randomYogaType.description;
    }

    // Функция для получения случайного типа йоги из массива yogaTypes
    function getRandomYogaType() {
        return yogaTypes[Math.floor(Math.random() * yogaTypes.length)];
    }
});
