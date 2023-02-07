$(document).ready(function () {
    $(".numbers-container").find(".numbers-button",).click(function () {
        let numbersVal = $(this).attr("value");
        $(".result").append(numbersVal);
    });

    $(".rigth").find(".bt",).click(function () {
        let operatorsVal = $(this).attr("value");
        $(".result").append(operatorsVal);
    });
});

$("#C").click(() => {
    $(".result").empty();
})

$("#delete").click(() => {
    var texto = $(".result").text();
    $(".result").text(texto.substring(0, texto.length - 1));
})

$("#resultado").click(() => {
    let opr = $(".result").text();
    let resultado = eval(opr.toString());
    $(".result").empty();
    $(".result").append(resultado);
})