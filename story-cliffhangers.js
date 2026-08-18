/* ALHERO — cliffhanger pass for chapters 3–16. */
(() => {
    const chapters = window.ALHERO_CHAPTERS;
    if (!Array.isArray(chapters)) return;

    const arHooks = [
        "لكن قبل أن يملك ألهيرو فرصة لفهم ما يحدث، وصلته رسالة قصيرة تحمل تحذيرًا واحدًا: لا تثق بمن تعرفه.",
        "وعندما ظن أن الحقيقة بدأت تظهر، اكتشف أن السؤال الحقيقي لم يكن: من هم؟ بل: لماذا عادوا الآن؟",
        "وفي اللحظة التي بدأ فيها ألهيرو يصدق أن الماضي انتهى، ظهر أمامه دليل واحد يثبت العكس.",
        "لم يكن رجوعه إلى بالدونز هو النهاية التي توقعها... كان مجرد الباب الذي سيقوده إلى الحقيقة.",
        "لكن اللقاء الذي انتظره ألهيرو طويلًا لم يأتِ بالراحة التي تخيلها؛ جاء ومعه سؤال أخطر من كل ما سبق.",
        "ظل ألهيرو يحدق في المكان، وهو يدرك أن ما حدث اليوم لم يكن صدفة... وأن هناك من كان يراقبه منذ البداية.",
        "وفي تلك اللحظة فهم ألهيرو شيئًا واحدًا: كل إجابة حصل عليها حتى الآن كانت تخفي وراءها سؤالًا أكبر.",
        "لم يكد يلتقط أنفاسه حتى وصل الخبر الذي جعل الجميع يصمت... شخص من الماضي ظهر من جديد.",
        "كان يستطيع أن يهرب مرة أخرى، لكنه هذه المرة اختار البقاء. ولم يكن يعرف أن هذا القرار سيغير كل شيء.",
        "قبل أن يغادروا، وجد ألهيرو شيئًا لم يكن من المفترض أن يراه... شيئًا يحمل اسمه.",
        "رفع ألهيرو عينيه، وعرف من نظرة رايفن أن الحقيقة التي يبحث عنها كانت أقرب مما ينبغي.",
        "انتهى اللقاء، لكن أثره لم ينتهِ. ففي مكان آخر، كان شخص ما قد عرف أن ألهيرو عاد.",
        "ولأول مرة منذ عودته، لم يشعر ألهيرو أنه يطارد ماضيه... بل شعر أن الماضي هو الذي يطارده.",
        "كانت الليلة هادئة أكثر من اللازم. ثم سمع ألهيرو الصوت الذي كان يأمل ألا يسمعه مرة أخرى.",
        "نظر ألهيرو إلى الطريق أمامه. هذه المرة لم يكن هناك مجال للعودة... لأن الحقيقة كانت تنتظره في النهاية.",
        "وقبل أن ينتهي كل شيء، وصلته الإجابة التي كان يبحث عنها منذ البداية... لكنها فتحت بابًا لم يكن مستعدًا لدخوله."
    ];

    const enHooks = [
        "But before Alhero could understand what was happening, a short message arrived with one warning: trust no one you know.",
        "And just when he thought the truth was beginning to surface, he realized the real question was not who they were, but why they had returned now.",
        "The moment Alhero began to believe the past was over, one piece of evidence proved the opposite.",
        "His return to Baldons was never the ending he imagined... it was only the door leading him toward the truth.",
        "The meeting Alhero had waited for brought no comfort. It brought a question more dangerous than anything before it.",
        "Alhero stared at the place, realizing one thing: what happened today was no accident... someone had been watching him from the beginning.",
        "For the first time, Alhero understood that every answer he had found was hiding a larger question.",
        "Before he could catch his breath, the news arrived and silenced everyone... someone from the past had returned.",
        "He could have run again, but this time he chose to stay. He did not know that choice would change everything.",
        "Before they left, Alhero found something he was never meant to see... something carrying his name.",
        "Alhero looked up and knew from Raven's expression that the truth he was searching for was closer than it should have been.",
        "The meeting ended, but its consequences did not. Somewhere else, someone had already learned that Alhero had returned.",
        "For the first time since his return, Alhero no longer felt like he was chasing his past... he felt the past chasing him.",
        "The night was too quiet. Then Alhero heard the sound he had hoped never to hear again.",
        "Alhero looked at the road ahead. This time there was no turning back... because the truth was waiting at the end.",
        "And before everything ended, he finally received the answer he had been searching for... only to open a door he was not ready to enter."
    ];

    for (let i = 2; i <= 15; i++) {
        const chapter = chapters[i];
        if (!chapter) continue;
        if (chapter.ar && Array.isArray(chapter.ar.paragraphs)) {
            const hook = arHooks[i - 2];
            const last = chapter.ar.paragraphs[chapter.ar.paragraphs.length - 1] || "";
            if (hook && !last.includes(hook)) chapter.ar.paragraphs.push("---", hook);
        }
        if (chapter.en && Array.isArray(chapter.en.paragraphs)) {
            const hook = enHooks[i - 2];
            const last = chapter.en.paragraphs[chapter.en.paragraphs.length - 1] || "";
            if (hook && !last.includes(hook)) chapter.en.paragraphs.push("---", hook);
        }
    }
})();
