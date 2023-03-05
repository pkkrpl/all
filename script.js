$(document).ready(function () {
    const card = Array.from(document.querySelectorAll('.card-body .card-title'));

    $("#cariOrang").click(function (e) {
        e.preventDefault();
        let namaOrang = $("#namaOrang").val();



        card.filter(e => {
            if (e.textContent.toLocaleLowerCase().includes(namaOrang)) {
                $(e.parentElement.parentElement).show();
            } else {
                $(e.parentElement.parentElement).hide();
            }
        });

        $(".bukaini").addClass("show");
        $("#namaOrang").val("")
    });


    $("#resetOrang").click(function (e) {
        e.preventDefault();


        card.forEach(e => $(e.parentElement.parentElement).show());
        $(".bukaini").removeClass("show");
    });
});