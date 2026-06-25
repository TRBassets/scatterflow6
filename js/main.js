const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "gif", "svg", "avif"];
const VIDEO_EXTENSIONS = ["mp4", "webm", "ogv", "ogg", "mov"];
const PLACEHOLDER_IMAGE = "assets/_placeholder.svg";
const DEFAULT_MEDIA_BASE = "assets/";

function getExtension(path = "") {
    const cleanPath = String(path).split("?")[0].split("#")[0];
    return cleanPath.includes(".") ? cleanPath.split(".").pop().toLowerCase() : "";
}

function isExternalOrAbsolute(path = "") {
    return /^(https?:)?\/\//i.test(path) || path.startsWith("/") || path.startsWith("data:") || path.startsWith("blob:");
}

function resolveMediaPath(fileOrPath = "") {
    if (!fileOrPath) return "";
    if (isExternalOrAbsolute(fileOrPath) || fileOrPath.startsWith("assets/")) return fileOrPath;

    const base = window.SCATTERFLOW_MEDIA_BASE || DEFAULT_MEDIA_BASE;
    return `${base}${fileOrPath}`;
}

function getMediaConfig(key) {
    const library = window.SCATTERFLOW_MEDIA || {};
    const raw = library[key];

    if (!raw) return null;
    if (typeof raw === "string") return { file: raw };

    return raw;
}

function shouldRenderAsVideo(config) {
    const file = config.file || config.src || "";
    const extension = getExtension(file);
    return config.type === "video" || VIDEO_EXTENSIONS.includes(extension);
}

function copyDisplayAttributes(sourceElement, targetElement) {
    const preservedAttributes = ["class", "alt", "title", "aria-label"];

    preservedAttributes.forEach((attribute) => {
        if (sourceElement.hasAttribute(attribute)) {
            targetElement.setAttribute(attribute, sourceElement.getAttribute(attribute));
        }
    });

    const key = sourceElement.dataset.mediaKey;
    if (key) targetElement.dataset.mediaKey = key;
}

function createImageElement(sourceElement, config, key) {
    const img = document.createElement("img");
    copyDisplayAttributes(sourceElement, img);

    img.alt = sourceElement.getAttribute("alt") || sourceElement.dataset.mediaAlt || config.label || key;
    img.loading = "lazy";
    img.decoding = "async";
    img.src = resolveMediaPath(config.file || config.src);

    img.onerror = () => {
        img.onerror = null;
        img.src = PLACEHOLDER_IMAGE;
        img.classList.add("missing-local-media");
        img.title = `Missing media file. Drop it in /assets or edit js/media-paths.js: ${config.file || config.src}`;
    };

    return img;
}

function createVideoElement(sourceElement, config, key) {
    const video = document.createElement("video");
    copyDisplayAttributes(sourceElement, video);

    video.muted = config.muted !== false;
    video.loop = config.loop !== false;
    video.autoplay = config.autoplay !== false;
    video.playsInline = true;
    video.preload = config.preload || "metadata";
    video.controls = Boolean(config.controls);
    video.setAttribute("aria-label", sourceElement.getAttribute("alt") || sourceElement.dataset.mediaAlt || config.label || key);

    const poster = config.poster ? resolveMediaPath(config.poster) : "";
    if (poster) video.poster = poster;

    const source = document.createElement("source");
    source.src = resolveMediaPath(config.file || config.src);

    const extension = getExtension(config.file || config.src);
    if (extension) {
        source.type = extension === "mov" ? "video/mp4" : `video/${extension === "ogv" ? "ogg" : extension}`;
    }

    video.appendChild(source);

    video.onerror = () => renderFallback(sourceElement, config, key);
    source.onerror = () => renderFallback(sourceElement, config, key);

    return video;
}

function createEmbedElement(config, key) {
    const iframe = document.createElement("iframe");
    iframe.src = config.embedUrl || config.fallbackEmbed;
    iframe.title = config.label || key;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.className = "media-embed";
    return iframe;
}

function renderFallback(sourceElement, config = {}, key = "") {
    if (config.fallbackEmbed) {
        const iframe = createEmbedElement(config, key);
        sourceElement.replaceWith(iframe);
        return;
    }

    if (sourceElement.tagName && sourceElement.tagName.toLowerCase() === "img") {
        sourceElement.src = PLACEHOLDER_IMAGE;
        sourceElement.classList.add("missing-local-media");
        return;
    }

    const fallback = document.createElement("div");
    fallback.className = "media-fallback missing-local-media";
    fallback.textContent = `Missing media: ${config.file || config.src || key}`;
    sourceElement.replaceWith(fallback);
}

function loadMediaElement(element) {
    if (element.dataset.mediaLoaded === "true") return;
    element.dataset.mediaLoaded = "true";

    const key = element.dataset.mediaKey;
    const config = getMediaConfig(key);

    if (!config) {
        renderFallback(element, {}, key);
        return;
    }

    const target = config.embedUrl
        ? createEmbedElement(config, key)
        : shouldRenderAsVideo(config)
            ? createVideoElement(element, config, key)
            : createImageElement(element, config, key);

    element.replaceWith(target);
}

function setupLazyMediaLoading() {
    const mediaElements = document.querySelectorAll("[data-media-key]");

    if (!("IntersectionObserver" in window)) {
        mediaElements.forEach(loadMediaElement);
        return;
    }

    const observer = new IntersectionObserver((entries, activeObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                loadMediaElement(entry.target);
                activeObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "450px 0px",
        threshold: 0.01
    });

    mediaElements.forEach((element) => observer.observe(element));
}

// 1. Scroll Reveal Animation
function setupRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// 2. Slider Logic
function setupSlider(sliderId, btnLeftId, btnRightId) {
    const slider = document.getElementById(sliderId);
    const btnLeft = document.getElementById(btnLeftId);
    const btnRight = document.getElementById(btnRightId);
    const scrollAmount = 295;

    if (btnRight && btnLeft && slider) {
        btnRight.addEventListener("click", () => {
            slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

        btnLeft.addEventListener("click", () => {
            slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
    }
}

// 3. Tabbed Asset Library Logic
function setupAssetTabs() {
    const tabCards = document.querySelectorAll(".cat-card");
    const assetGroups = document.querySelectorAll(".asset-grid-group");

    tabCards.forEach((card) => {
        card.addEventListener("click", () => {
            tabCards.forEach((tab) => tab.classList.remove("active"));
            card.classList.add("active");

            assetGroups.forEach((group) => group.classList.remove("active"));

            const targetId = card.getAttribute("data-target");
            const targetGroup = document.getElementById(targetId);

            if (targetGroup) {
                targetGroup.classList.add("active");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupLazyMediaLoading();
    setupRevealAnimations();
    setupSlider("biomeSlider", "biomeLeft", "biomeRight");
    setupAssetTabs();
});
