const yearElement = document.querySelector("#year");
const languageToggle = document.querySelector(".language-toggle");
const translatableElements = document.querySelectorAll("[data-en][data-zh]");
const storageKey = "preferred-language";

function setLanguage(language) {
  const nextLanguage = language === "zh" ? "zh" : "en";

  document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.lang = nextLanguage;

  translatableElements.forEach((element) => {
    element.textContent = element.dataset[nextLanguage];
  });

  if (languageToggle) {
    languageToggle.textContent = nextLanguage === "zh" ? "English" : "中文";
    languageToggle.setAttribute("aria-pressed", String(nextLanguage === "zh"));
  }

  localStorage.setItem(storageKey, nextLanguage);
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentLanguage = document.documentElement.dataset.lang;
    setLanguage(currentLanguage === "zh" ? "en" : "zh");
  });
}

setLanguage(localStorage.getItem(storageKey) || "en");
