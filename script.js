
$(document).ready(function () {
    const rangeInput = $("#customRange2");
    const voltsLabel = $("#voltsPercentage");
    const iconoLuz = $("#icono-luz");

    //funcion dek foco
    rangeInput.on("input", e => {
        e.preventDefault();
        const pocentaje = rangeInput.val();
        voltsLabel.text(`${pocentaje}%`);
        iconoLuz.css("text-shadow", `0 0 10px rgba(249, 249, 249, ${pocentaje / 100})`);
    });

    const toggleButton = $("#toggleFan");
    const fanStatus = $("#fanStatus");

    toggleButton.click(function (e) {
        e.preventDefault();
        $(".fa-fan").toggleClass('fa-spin');
        const fanIsOn = $(".fa-fan").hasClass('fa-spin');
        fanStatus.text(fanIsOn ? 'Off' : 'On');
    });

    setInterval(() => {
        var porcent = Math.floor(Math.random() * 100);
        $('#temp').text(porcent + '°');
    }, 5000);

    setInterval(() => {
        var porcent = Math.floor(Math.random() * 100);
        $('#humid').text(porcent + '%');
    }, 4000);
})
