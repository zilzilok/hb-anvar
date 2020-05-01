function populate() {
    while (true) {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
        document.body.insertAdjacentHTML("beforeend",
            `<div class="block" style="background-color:#${Math.floor(Math.random() * 16777215).toString(16)}">ТЫ ПИДОР!</div>`);
    }
}

setInterval(
    function() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = `#${randomColor}`;
    }, 1000);

window.addEventListener('scroll', populate);
populate(); // инициализация документа