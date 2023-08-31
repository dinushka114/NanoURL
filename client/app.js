let btn = document.querySelector(".searchButton");
let urlBar = document.querySelector(".searchTerm");
let result = document.querySelector(".result");

btn.addEventListener('click', function () {

    $(".result").hide();

    let url = urlBar.value;

    $.post("http://localhost:3000/short-url",
        {
            url: url,
        },
        function (data) {
            $(".result").show();
            $(".result").html(data.url)
        });


})