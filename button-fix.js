/* ALHERO - BUTTON SAFETY LAYER */
(function () {
    function start() {
        const $ = (id) => document.getElementById(id);
        const chapters = Array.isArray(window.ALHERO_CHAPTERS) ? window.ALHERO_CHAPTERS : [];
        const english = Array.isArray(window.ALHERO_ENGLISH_CHAPTERS) ? window.ALHERO_ENGLISH_CHAPTERS : [];
        const story = $("story");
        const list = $("chapterList");
        const counter = $("chapterCounter");
        const number = $("chapterNumber");
        const previous = $("previousBtn");
        const next = $("nextBtn");
        const modal = $("welcomeModal");
        const toggle = $("chapterToggle");
        const menu = document.querySelector(".chapters-menu");

        if (!story || !list || !previous || !next) return;

        let index = Math.max(0, Math.min(chapters.length - 1, Number(localStorage.getItem("alhero-current-chapter") || 0)));
        let lang = localStorage.getItem("alhero-language") || "ar";

        function chapterData(i) {
            if (lang === "en" && english[i]) return english[i];
            return chapters[i] && chapters[i].ar ? chapters[i].ar : null;
        }

        function render() {
            const ch = chapterData(index);
            if (!ch) return;
            story.innerHTML = "";
            const h = document.createElement("h2");
            h.className = "chapter-title";
            h.textContent = ch.title || "";
            story.appendChild(h);

            (ch.paragraphs || []).forEach(text => {
                const p = document.createElement("p");
                p.className = "chapter-text";
                if (String(text).includes("\"") || String(text).includes("«")) p.classList.add("dialogue");
                p.textContent = text;
                story.appendChild(p);
            });

            const word = lang === "en" ? "Chapter" : "الفصل";
            counter.textContent = `${word} ${index + 1}`;
            number.textContent = `${index + 1} / ${chapters.length}`;
            previous.disabled = index === 0;
            next.disabled = index >= chapters.length - 1;
            localStorage.setItem("alhero-current-chapter", String(index));
            buildList();
        }

        function buildList() {
            list.innerHTML = "";
            chapters.forEach((item, i) => {
                const b = document.createElement("button");
                b.type = "button";
                b.className = "chapter-item" + (i === index ? " active" : "");
                const ch = chapterData(i);
                b.textContent = `${String(i + 1).padStart(2, "0")} — ${ch ? ch.title : ""}`;
                b.addEventListener("click", function () {
                    index = i;
                    render();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                });
                list.appendChild(b);
            });
        }

        previous.addEventListener("click", function (e) {
            e.preventDefault();
            if (index > 0) { index--; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
        });

        next.addEventListener("click", function (e) {
            e.preventDefault();
            if (index < chapters.length - 1) { index++; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
        });

        $("arabicBtn")?.addEventListener("click", function () {
            lang = "ar";
            localStorage.setItem("alhero-language", lang);
            document.documentElement.lang = "ar";
            document.documentElement.dir = "rtl";
            document.body.classList.remove("english");
            $("arabicBtn").classList.add("active");
            $("englishBtn")?.classList.remove("active");
            render();
        });

        $("englishBtn")?.addEventListener("click", function () {
            lang = "en";
            localStorage.setItem("alhero-language", lang);
            document.documentElement.lang = "en";
            document.documentElement.dir = "ltr";
            document.body.classList.add("english");
            $("englishBtn").classList.add("active");
            $("arabicBtn")?.classList.remove("active");
            render();
        });

        function theme(mode) {
            document.body.classList.toggle("light-mode", mode === "light");
            localStorage.setItem("alhero-theme", mode);
            $("lightThemeBtn")?.classList.toggle("active", mode === "light");
            $("darkThemeBtn")?.classList.toggle("active", mode !== "light");
        }
        $("lightThemeBtn")?.addEventListener("click", () => theme("light"));
        $("darkThemeBtn")?.addEventListener("click", () => theme("dark"));

        toggle?.addEventListener("click", function () {
            if (!menu) return;
            const collapsed = menu.classList.toggle("collapsed");
            toggle.setAttribute("aria-expanded", String(!collapsed));
        });

        $("backToTop")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

        $("continueBtn")?.addEventListener("click", function () {
            modal?.classList.add("hidden");
            render();
        });

        $("oldChapterBtn")?.addEventListener("click", function () {
            index = 0;
            modal?.classList.add("hidden");
            localStorage.setItem("alhero-current-chapter", "0");
            render();
        });

        theme(localStorage.getItem("alhero-theme") || "dark");
        if (lang === "en") $("englishBtn")?.click(); else render();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
    else start();
})();
