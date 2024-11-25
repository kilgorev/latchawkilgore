function serviceButton() {
    window.location.href = "services.html";
}

function aboutButton() {
    window.location.href="about_us.html";
}

function partnerButton() {
    window.location.href="partners.html";
}

function contactButton() {
    window.location.href = "contact_us.html";
}

function homeButton() {
    window.location.href="index.html";
}

function scrollingEffect() {
    onscroll
}

const optionMenu = document.querySelector(".select-menu"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
    adjustDropdownPosition();
});

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});

function adjustDropdownPosition() {
    const optionsList = optionMenu.querySelector(".options");
    const rect = optionMenu.getBoundingClientRect();
    const optionsWidth = optionsList.offsetWidth;
    const optionsHeight = optionsList.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (rect.left + optionsWidth > viewportWidth) {
        const overflowRight = rect.left + optionsWidth - viewportWidth;
        optionsList.style.left = `-${overflowRight + 10}px`; 
    } else {
        optionsList.style.left = '0'; 
    }

    if (rect.top + optionsHeight > viewportHeight) {
        const overflowBottom = rect.top + optionsHeight - viewportHeight;
        optionsList.style.top = `-${overflowBottom + 10}px`; 
    } else {
        optionsList.style.top = '100%';
    }
}

