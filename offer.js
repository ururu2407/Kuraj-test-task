const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

// Функция для отображения соответствующей секции контента
function showContent() {
  if (tab1.checked) {
    content1.style.display = "block";
    content2.style.display = "none";
  } else if (tab2.checked) {
    content1.style.display = "none";
    content2.style.display = "block";
  }
}

// Назначаем обработчики событий для изменения состояния вкладок
tab1.addEventListener("change", showContent);
tab2.addEventListener("change", showContent);

// Инициализация отображения при загрузке страницы
window.addEventListener("DOMContentLoaded", showContent);

$(function () {
  const offerSlider = $("#offer-slider");
  offerSlider.owlCarousel({
    loop: true,
    dots: false,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      1200: {
        items: 2,
      },
      1650: {
        items: 3,
      },
    },
  });
  $("#offer-sliderRight").click(function () {
    console.log("Right");
    offerSlider.trigger("next.owl.carousel");
  });
  $("#offer-sliderLeft").click(function () {
    console.log("left");
    offerSlider.trigger("prev.owl.carousel");
  });
});

$(function () {
  const offerSlider2 = $("#offer-slider2");
  offerSlider2.owlCarousel({
    loop: true,
    dots: false,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      1200: {
        items: 2,
      },
      1650: {
        items: 3,
      },
    },
  });
  $("#offer-sliderRight2").click(function () {
    console.log("Right");
    offerSlider2.trigger("next.owl.carousel");
  });
  $("#offer-sliderLeft2").click(function () {
    console.log("left");
    offerSlider2.trigger("prev.owl.carousel");
  });
});
