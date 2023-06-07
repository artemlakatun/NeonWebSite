document.addEventListener("DOMContentLoaded", function() {
    let carousel = document.querySelector(".carousel");
    let slides = document.querySelectorAll(".slide");
    let indicatorsContainer = document.querySelector(".carousel-indicators");
    let prevButton = document.querySelector(".carousel-prev-button");
    let nextButton = document.querySelector(".carousel-next-button");
    let currentIndex = 0;
    let interval = 3000; // Интервал переключения слайдов (в миллисекундах)

    // Создание кружков-индикаторов для каждого слайда
    slides.forEach(function(_, index) {
        let indicator = document.createElement("div");
        indicator.classList.add("indicator");
        if (index === 0) {
            indicator.classList.add("active");
        }
        indicatorsContainer.appendChild(indicator);

        indicator.addEventListener("click", function() {
            showSlide(index);
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, interval);
        });
    });

    function showSlide(index) {
        slides.forEach(function(slide) {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });

        let indicators = document.querySelectorAll(".indicator");
        indicators.forEach(function(indicator) {
            indicator.classList.remove("active");
        });
        indicators[index].classList.add("active");

        currentIndex = index;
    }

    function nextSlide() {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }

    prevButton.addEventListener("click", function() {
        let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, interval);
    });

    nextButton.addEventListener("click", function() {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, interval);
    });

    let slideInterval = setInterval(nextSlide, interval);
});

document.addEventListener("DOMContentLoaded", function() {
    let cityDropdownBtn = document.querySelector(".city-dropdown-btn");
    let cityDropdownContent = document.querySelector(".city-dropdown-content");
    let cityList = document.querySelector(".city-list");
    let mapContainer = document.querySelector("#map");
    let map = null;
    let markers = []; // Массив для хранения маркеров

    cityDropdownBtn.addEventListener("click", function() {
        cityDropdownContent.classList.toggle("show");
    });

    cityList.addEventListener("click", function(e) {
        let selectedCity = e.target.textContent;
        cityDropdownBtn.textContent = selectedCity + " " + String.fromCharCode(9660);
        cityDropdownContent.classList.remove("show");

        // Удалить все предыдущие маркеры с карты
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        // Открыть карту выбранного города
        if (selectedCity === "Москва") {
            if (map === null) {
                map = new google.maps.Map(mapContainer, {
                    center: { lat: 55.7558, lng: 37.6176 },
                    zoom: 12
                });
            } else {
                // Обновить карту на выбранный город
                map.setCenter({ lat: 55.7558, lng: 37.6176 });
                map.setZoom(12);
            }

            // Добавить маркер на карту Москвы
            let marker = new google.maps.Marker({
                position: { lat: 55.7558, lng: 37.6176 },
                map: map,
                title: "Москва"
            });

            // Добавить маркер в массив для дальнейшего управления
            markers.push(marker);
        } else if (selectedCity === "Санкт-Петербург") {
            if (map === null) {
                map = new google.maps.Map(mapContainer, {
                    center: { lat: 59.9343, lng: 30.3351 },
                    zoom: 12
                });
            } else {
                // Обновить карту на выбранный город
                map.setCenter({ lat: 59.9343, lng: 30.3351 });
                map.setZoom(12);
            }

            // Добавить маркер на карту Санкт-Петербурга
            let marker = new google.maps.Marker({
                position: { lat: 59.9343, lng: 30.3351 },
                map: map,
                title: "Санкт-Петербург"
            });

            // Добавить маркер в массив для дальнейшего управления
            markers.push(marker);
        } else if (selectedCity === "Минск") {
            if (map === null) {
                map = new google.maps.Map(mapContainer, {
                    center: { lat: 53.9045, lng: 27.5615 },
                    zoom: 12
                });
            } else {
                // Обновить карту на выбранный город
                map.setCenter({ lat: 53.9045, lng: 27.5615 });
                map.setZoom(12);
            }

            // Добавить маркер на карту Минска
            let marker = new google.maps.Marker({
                position: { lat: 53.9045, lng: 27.5615 },
                map: map,
                title: "Минск"
            });

            // Добавить маркер в массив для дальнейшего управления
            markers.push(marker);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let cityDropdownBtn = document.querySelector(".city-dropdown-btn");
    let cityDropdownContent = document.querySelector(".city-dropdown-content");
    let cityList = document.querySelector(".city-list");

    let hideTimeout;

    cityDropdownBtn.addEventListener("mouseenter", function() {
        clearTimeout(hideTimeout);
        cityDropdownContent.style.display = "block";
    });

    cityDropdownBtn.addEventListener("mouseleave", function() {
        hideTimeout = setTimeout(function() {
            cityDropdownContent.style.display = "none";
        }, 100);
    });

    cityDropdownContent.addEventListener("mouseenter", function() {
        clearTimeout(hideTimeout);
    });

    cityDropdownContent.addEventListener("mouseleave", function() {
        hideTimeout = setTimeout(function() {
            cityDropdownContent.style.display = "none";
        }, 100);
    });

    cityList.addEventListener("click", function(e) {
        let selectedCity = e.target.textContent;
        cityDropdownBtn.textContent = selectedCity;
        cityDropdownContent.style.display = "none";
    });
});

