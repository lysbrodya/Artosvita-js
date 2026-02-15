// Определяем BASE_PATH для текущей страницы
const BASE_PATH = location.hostname.includes("github.io") ? "/Artosvita-js" : "";

// Функция для исправления путей в HTML
function fixPaths() {
  // Исправляем CSS ссылки
  document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    if (link.href.startsWith("/src/")) {
      link.href = BASE_PATH + link.href;
    }
  });

  // Исправляем изображения
  document.querySelectorAll("img").forEach((img) => {
    if (img.src.startsWith("/")) {
      img.src = BASE_PATH + img.src;
    }
  });

  // Исправляем ссылки
  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("/src/")) {
      link.href = BASE_PATH + href;
    }
  });

  // Исправляем SVG use href
  document.querySelectorAll("use").forEach((use) => {
    const href = use.getAttribute("href");
    if (href && !href.startsWith("http")) {
      // Если путь относительный, не трогаем
      if (!href.includes("#")) {
        use.href.baseVal = BASE_PATH + "/" + href;
      }
    }
  });

  // Исправляем script src (для модульных скриптов)
  document.querySelectorAll("script[type='module']").forEach((script) => {
    if (script.src && script.src.startsWith("/src/")) {
      script.src = BASE_PATH + script.src;
    }
  });
}

// Запускаем при загрузке DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", fixPaths);
} else {
  fixPaths();
}

export { BASE_PATH };
