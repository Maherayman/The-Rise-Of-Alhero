/* =========================================================
   ALHERO — READING EXPERIENCE ENHANCEMENTS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const STORAGE_KEY = "alhero-last-chapter";
    const FONT_KEY = "alhero-font-size";

    const story = document.getElementById("story");
    const chapterNumber = document.getElementById("chapterNumber");
    const chapterCounter = document.getElementById("chapterCounter");
    const previousBtn = document.getElementById("previousBtn");
    const nextBtn = document.getElementById("nextBtn");
    const storySection = document.querySelector(".story-section");

    if (!story || !storySection) return;

    /* ---------- Reading toolbar ---------- */
    const toolbar = document.createElement("div");
    toolbar.className = "reading-toolbar";
    toolbar.innerHTML = `
        <div class="reading-progress-wrap">
            <div class="reading-progress-meta">
                <span>تقدم القراءة</span>
                <strong id="readingProgressText">1%</strong>
            </div>
            <div class="reading-progress-track" aria-label="Reading progress">
                <div id="readingProgressBar" class="reading-progress-bar"></div>
            </div>
        </div>
        <div class="reading-tools" aria-label="Reading controls">
            <button type="button" id="fontDown" title="تصغير الخط">A−</button>
            <button type="button" id="fontReset" title="الحجم الافتراضي">A</button>
            <button type="button" id="fontUp" title="تكبير الخط">A+</button>
        </div>
    `;

    const storyInfo = document.getElementById("storyInfo");
    if (storyInfo) storyInfo.insertAdjacentElement("afterend", toolbar);
    else storySection.prepend(toolbar);

    const progressBar = document.getElementById("readingProgressBar");
    const progressText = document.getElementById("readingProgressText");

    /* ---------- Font size ---------- */
    const DEFAULT_FONT = 17;
    const MIN_FONT = 15;
    const MAX_FONT = 22;
    let fontSize = Number(localStorage.getItem(FONT_KEY)) || DEFAULT_FONT;

    function applyFontSize() {
        story.style.setProperty("--story-font-size", `${fontSize}px`);
        localStorage.setItem(FONT_KEY, String(fontSize));
    }

    document.getElementById("fontDown")?.addEventListener("click", () => {
        fontSize = Math.max(MIN_FONT, fontSize - 1);
        applyFontSize();
    });

    document.getElementById("fontUp")?.addEventListener("click", () => {
        fontSize = Math.min(MAX_FONT, fontSize + 1);
        applyFontSize();
    });

    document.getElementById("fontReset")?.addEventListener("click", () => {
        fontSize = DEFAULT_FONT;
        applyFontSize();
    });

    applyFontSize();

    /* ---------- Chapter persistence ---------- */
    function getChapterNumber() {
        const source = chapterNumber?.textContent || chapterCounter?.textContent || "1 / 1";
        const match = source.match(/(\d+)\s*(?:\/|$)/);
        if (match) return Number(match[1]);
        const counterMatch = source.match(/(\d+)/);
        return counterMatch ? Number(counterMatch[1]) : 1;
    }

    function getTotalChapters() {
        const source = chapterNumber?.textContent || "1 / 1";
        const match = source.match(/\/\s*(\d+)/);
        return match ? Number(match[1]) : (window.ALHERO_CHAPTERS?.length || 16);
    }

    function updateProgress() {
        const current = getChapterNumber();
        const total = Math.max(1, getTotalChapters());
        const percent = Math.min(100, Math.max(1, Math.round((current / total) * 100)));

        if (progressBar) progressBar.style.width = `${percent}%`;
        if (progressText) progressText.textContent = `${percent}%`;

        localStorage.setItem(STORAGE_KEY, String(current));
    }

    const observer = new MutationObserver(() => {
        updateProgress();
    });

    if (chapterNumber) observer.observe(chapterNumber, { childList: true, subtree: true, characterData: true });
    if (chapterCounter) observer.observe(chapterCounter, { childList: true, subtree: true, characterData: true });

    [previousBtn, nextBtn].forEach((button) => {
        button?.addEventListener("click", () => {
            window.setTimeout(updateProgress, 80);
            window.setTimeout(() => window.scrollTo({ top: storySection.offsetTop - 25, behavior: "smooth" }), 120);
        });
    });

    document.querySelectorAll(".chapter-item").forEach((button) => {
        button.addEventListener("click", () => window.setTimeout(updateProgress, 80));
    });

    /* ---------- Back-to-top polish ---------- */
    const backToTop = document.getElementById("backToTop");
    function toggleBackToTop() {
        if (!backToTop) return;
        backToTop.classList.toggle("visible", window.scrollY > 450);
    }

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    updateProgress();
});
