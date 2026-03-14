var themeToggle = document.querySelector("#theme-toggle");

    themeToggle.addEventListener("click", function() {
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList("bg-black")
    });