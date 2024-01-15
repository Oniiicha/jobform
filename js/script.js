// const phone = document.getElementById('phone');

// phone.addEventListener('keydown', function (event) {
//     // Выводит в консоль нажатый на клавиатуре символ
//     console.log(event.key);

//     // Обьявление переменных (флагов)
//     let isDigit = false;
//     let isDash = false;
//     let isControl = false;

//     // Проверка ввода цифр
//     if (event.key >= 0 && event.key <= 9) {
//         isDigit = true;
//     }

//     // Проверка ввода "-"
//     if (event.key == "-") {
//         isDash = true;
//     }

//     // Проверка нажатия на клавиши управления курсором или Backspace
//     if (event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace") {
//         isControl = true;
//     }

//     // Все остальное отрицается отменяется ввод
//     if (!isDigit && !isDash && !isControl) {
//         event.preventDefault();
//     }
// })
const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton')

sendButton.addEventListener('click', function(event) {
    
})