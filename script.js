// Navbar background change on scroll
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.95)";
    } else {
        nav.style.background = "rgba(0,0,0,0.8)";
    }
});

// Simple fade-in animation on scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});
const modal = document.getElementById("loginModal");
const openBtn = document.getElementById("openLogin");
const closeBtn = document.querySelector(".close");

// открыть окно
openBtn.onclick = () => {
    modal.style.display = "block";
};

// закрыть
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// закрытие при клике вне окна
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

// обработка входа
document.getElementById("loginForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    const login = document.getElementById("login").value;
    const pass = document.getElementById("password").value;

    // тестовый аккаунт
    if (login === "admin" && pass === "1234") {
        alert("Вход выполнен!");
        modal.style.display = "none";
    } else {
        alert("Неверный логин или пароль");
    }

});
