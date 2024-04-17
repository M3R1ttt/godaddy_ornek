$(document).ready(function() {
$("#first").removeClass("deactive").addClass("active")
$(".yüksek").hide();
$(".cevap1").hide();
$(".cevap2").hide();
$(".cevap3").hide();
$(".cevap4").hide();
$(".cevap5").hide();
$(".cevap6").hide();
$(".cevap7").hide();
$(".cevap8").hide();
$(".fixedques").hide();
$("#ustegit").hide();
$(".d").hide();
y_koordinat = $("#ques").attr("height");
console.log(y_koordinat);
});

$(".deactive").click(function () {
    $(".active").removeClass("active").addClass("deactive");
    $(this).removeClass("deactive").addClass("active");
});

$("#buton").hover(function () {
        $(".d").show(200);
        
    }, function () {
        $(".d").hide(200);
    }
);

$("#list input[type='radio']").change(function () {
secilen = $("#list  input[type='radio']:checked").val(); 
console.log(secilen);
if (secilen == "standart") {
    $(".yüksek").hide();
    $(".standart").show();
}
else if (secilen == "yüksek") {
    $(".yüksek").show();
    $(".standart").hide();
}

});

$(".s1").click(function () {
    $(".cevap1").toggle();
})

$(".s2").click(function () {
    $(".cevap2").toggle();
})

$(".s3").click(function () {
    $(".cevap3").toggle();
})

$(".s4").click(function () {
    $(".cevap4").toggle();
})

$(".s5").click(function () {
    $(".cevap5").toggle();
})

$(".s6").click(function () {
    $(".cevap6").toggle();
})

$(".s7").click(function () {
    $(".cevap7").toggle();
})

$(".s8").click(function () {
    $(".cevap8").toggle();
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

