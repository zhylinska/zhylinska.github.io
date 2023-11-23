
window.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = (e) => document.querySelector('body').className = e.target.dataset.langClass;
    const enableLangSwitcher = (elementId) => document
        .getElementById(elementId)
        .addEventListener('click', langSwitcher);

    enableLangSwitcher('enLangSwitcher');
    enableLangSwitcher('deLangSwitcher');
    $(".slider-container").slick({
        autoplay: true,
    });

    $(".slick-prev").text("❮");
    $(".slick-next").text("❯");
});
