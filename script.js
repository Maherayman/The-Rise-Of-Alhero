/* =========================================================
   ALHERO — BEYOND THE BROKEN KNIGHT
   SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SETTINGS
    ====================================================== */

    let currentChapter = 0;
    let currentLanguage = localStorage.getItem("alhero-language") || "ar";


    /* =====================================================
       CHAPTERS
    ====================================================== */

    let chapters = window.ALHERO_CHAPTERS || [

        {
            ar: {
                title: "الفارس الذي لم يمت",
                paragraphs: [
                    "استيقظ ألهيرو بعد سنوات من اختفائه. كان الجميع يعتقد أنه مات في الحرب، لكنه نجا. لم يعد الشخص الذي عرفه الجميع، ولم يعد يريد أن يعيش حياته بالطريقة القديمة.",
                    "فتح عينيه وسط مكان مجهول، وبجواره سيف قديم لم يكن يتذكر كيف وصل إليه. حاول الوقوف، لكنه شعر أن جسده لم يعد كما كان.",
                    "ظهر أمامه رجل غامض يدعى رايفن.",
                    "قال رايفن: «لو كنت مكانك، مكنتش هرجع للدنيا القديمة تاني».",
                    "نظر ألهيرو إليه للحظات، ثم قال: «أنا مش راجع عشان أعيش زي زمان... أنا راجع عشان أعرف مين أنا دلوقتي».",
                    "ومن هنا بدأت رحلة جديدة تمامًا."
                ]
            }
        },

        {
            ar: {
                title: "من الصفر",
                paragraphs: [
                    "قرر ألهيرو أن يبدأ من الصفر. لم يعد يريد أن يكون فارسًا فقط لأن الآخرين ينتظرون منه ذلك.",
                    "بدأ التدريب مع رايفن. كان التدريب قاسيًا، لكنه مختلف عن كل ما مر به من قبل.",
                    "قال رايفن: «القوة مش إنك تضرب أقوى من خصمك. القوة إنك تعرف إمتى تضرب وإمتى توقف».",
                    "مرت أسابيع طويلة، وبدأ ألهيرو يكتشف قدرات لم يكن يعرف أنها موجودة بداخله.",
                    "لكن القوة الجديدة كان لها ثمن. كلما زادت قوته، زادت الأسئلة التي لم يجد لها إجابة."
                ]
            }
        },

        {
            ar: {
                title: "الماضي يعود",
                paragraphs: [
                    "بعد فترة من التدريب، وصل فارس من بالدونز يحمل رسالة إلى رايفن.",
                    "كانت الرسالة بسيطة: «نحن نعرف أنه حي».",
                    "عرف ألهيرو أن الماضي بدأ يبحث عنه.",
                    "عاد اسم آيا إلى ذهنه، لكنه لم يشعر بنفس الشيء الذي كان يشعر به قديمًا.",
                    "لقد تغير شيء بداخله. لم يعد يريد أن يعيش منتظرًا أن يختاره شخص آخر.",
                    "قال رايفن: «لو عايز تعرف الحقيقة، لازم ترجع بالدونز».",
                    "وافق ألهيرو."
                ]
            }
        },

        {
            ar: {
                title: "الطريق إلى الشمال",
                paragraphs: [
                    "في طريقهما إلى بالدونز، مر ألهيرو ورايفن عبر مناطق لم تطأها قدمه من قبل.",
                    "توقفا عند قلعة مهجورة، ووجدا داخلها سجلات قديمة تتحدث عن الحرب.",
                    "وجد ألهيرو اسمًا يعرفه جيدًا: جوزيف.",
                    "لكن رايفن منعه من التسرع.",
                    "قال له: «الاسم لوحده مش دليل».",
                    "قبل أن يغادرا القلعة، ظهر عدد من الرجال المسلحين.",
                    "كانت المواجهة الأولى التي يختبر فيها ألهيرو قوته الجديدة."
                ]
            }
        },

        {
            ar: {
                title: "رايفن",
                paragraphs: [
                    "بعد انتهاء المواجهة، كشف رايفن جزءًا من ماضيه.",
                    "قال إنه كان في الماضي عضوًا في جماعة تسمى الظل، لكنه تركها عندما اكتشف حقيقتها.",
                    "سأل ألهيرو: «وليه ساعدتني؟».",
                    "أجاب رايفن: «لأنك لسه عندك فرصة تختار طريقك».",
                    "بدأ ألهيرو يفهم أن رايفن لم يكن مجرد مدرب.",
                    "كان الرجل يعرف أكثر بكثير مما يقول."
                ]
            }
        },

        {
            ar: {
                title: "العودة",
                paragraphs: [
                    "وصل ألهيرو أخيرًا إلى بالدونز.",
                    "كل شارع كان يحمل ذكرى قديمة.",
                    "قابل ميمو، وكان اللقاء مختلفًا عن كل ما تخيله.",
                    "ظل ميمو ينظر إليه للحظات قبل أن يقول: «كنت عارف إنك مش هتموت بسهولة».",
                    "ابتسم ألهيرو وقال: «أنا نفسي مكنتش عارف».",
                    "لكن بعد لحظات الفرح، وصل استدعاء من القصر.",
                    "كان واضحًا أن عودة ألهيرو لم تعد سرًا."
                ]
            }
        },

        {
            ar: {
                title: "اجتماع القصر",
                paragraphs: [
                    "دخل ألهيرو قاعة القصر.",
                    "وهناك كانت آيا.",
                    "توقفت للحظات عندما رأته حيًا أمامها.",
                    "لكن ألهيرو لم يتحرك. لم يعد ذلك الشخص الذي كان يركض خلف مشاعر الماضي.",
                    "بدأ الملك الحديث عن عودة جماعة الظل، لكن الاجتماع لم يستمر طويلًا.",
                    "حدث هجوم داخل القصر.",
                    "خرج ألهيرو وميمو لمواجهة المهاجمين."
                ]
            }
        },

        {
            ar: {
                title: "الهجوم",
                paragraphs: [
                    "انتشر رجال الظل داخل المدينة.",
                    "تحرك ألهيرو بسرعة، وبدأت قوته الجديدة تظهر أمام الجميع.",
                    "لم يعد يقاتل بعشوائية. كل حركة كانت محسوبة.",
                    "بعد انتهاء الهجوم، وجدوا رسالة تركها أحد المهاجمين.",
                    "كان عليها اسم واحد فقط: جوزيف.",
                    "عرف ألهيرو أن شخصًا ما يحاول دفعه نحو الماضي."
                ]
            }
        },

        {
            ar: {
                title: "الملك المفقود",
                paragraphs: [
                    "اختفى الملك بعد الهجوم بفترة قصيرة.",
                    "بدأت الشكوك تنتشر داخل القصر.",
                    "خرج ألهيرو وميمو وآيا للبحث عنه.",
                    "قادهم أثر قديم إلى مكان مهجور خارج المدينة.",
                    "هناك وجدوا سجلات تتحدث عن الحرب القديمة.",
                    "لكن الحقيقة كانت أكبر من مجرد اختفاء ملك."
                ]
            }
        },

        {
            ar: {
                title: "الحقيقة",
                paragraphs: [
                    "بدأ ألهيرو يربط الأحداث ببعضها.",
                    "جوزيف لم يكن العقل المدبر.",
                    "جماعة الظل كانت تعمل منذ سنوات، وكان هناك أشخاص داخل المملكة يساعدونها.",
                    "قال ميمو: «يعني كل اللي حصل زمان كان كذبة؟».",
                    "أجاب ألهيرو: «مش كله... بس أكيد في حاجات اتخبّت علينا».",
                    "قرر ألهيرو الوصول إلى الحقيقة مهما كان الثمن."
                ]
            }
        },

        {
            ar: {
                title: "المرحلة الثانية",
                paragraphs: [
                    "بدأت المرحلة الثانية من خطة الظل.",
                    "انتشرت الفوضى في بالدونز، وانقسم الفرسان لحماية المدينة.",
                    "واجه ألهيرو قائدًا يدعى كايدن.",
                    "قال كايدن: «أنت فاكر إنك رجعت عشان تنتقم؟ أنت رجعت عشان تكمل حاجة بدأت من زمان».",
                    "لم يرد ألهيرو.",
                    "أنهى المواجهة، لكنه خرج منها بأسئلة أكثر من الإجابات."
                ]
            }
        },

        {
            ar: {
                title: "الحقيقة المدفونة",
                paragraphs: [
                    "قاد أحد الأدلة ألهيرو إلى القرية التي عاش فيها طفولته.",
                    "وجد منزل عائلته كما تركه الزمن.",
                    "خلف جدار قديم، اكتشف ممرًا سريًا.",
                    "في نهاية الممر كان هناك رجل ينتظره.",
                    "توقف ألهيرو تمامًا.",
                    "كان والده.",
                    "قال والده: «كنت عارف إنك هترجع يومًا ما».",
                    "لم يعرف ألهيرو هل يشعر بالغضب أم الفرح."
                ]
            }
        },

        {
            ar: {
                title: "القرية القديمة",
                paragraphs: [
                    "لم يستمر اللقاء طويلًا.",
                    "وصل رجال الظل إلى القرية، وكان جوزيف يقودهم.",
                    "وقف ألهيرو بجوار والده وميمو ورايفن.",
                    "هذه المرة لم يكن ألهيرو يقاتل وحده.",
                    "قال جوزيف: «أنت لسه مش فاهم الحقيقة كاملة».",
                    "أجاب ألهيرو: «مش مهم أعرفها كلها دلوقتي... المهم إني مش هسمحلك تحدد أنا هبقى مين».",
                    "بدأت المعركة."
                ]
            }
        },

        {
            ar: {
                title: "المواجهة",
                paragraphs: [
                    "كانت المعركة الأخيرة تقترب.",
                    "عاد الجميع إلى القصر، حيث تجمع رجال الظل.",
                    "واجه رايفن ماضيه، وواجهت آيا الحقيقة التي كانت عائلتها تخفيها.",
                    "أما ألهيرو، فكان لديه هدف واحد.",
                    "إنهاء كل شيء.",
                    "واجه قائد الظل.",
                    "كانت المعركة طويلة، لكن ألهيرو لم يعد الفارس المكسور.",
                    "لقد أصبح شخصًا يعرف قوته ويعرف سبب استخدامه لها."
                ]
            }
        },

        {
            ar: {
                title: "المعركة الأخيرة",
                paragraphs: [
                    "انفجرت المعركة داخل القصر.",
                    "سقطت رايات الظل واحدة تلو الأخرى.",
                    "واجه ألهيرو قائدهم في آخر مواجهة.",
                    "قال القائد: «أنت شبه والدك أكتر مما تتخيل».",
                    "رد ألهيرو: «أنا مش شبه حد... أنا أنا».",
                    "استمرت المواجهة حتى تمكن ألهيرو من إسقاط قائد الظل.",
                    "انتهت الحرب.",
                    "ساد الصمت في القصر.",
                    "ولأول مرة منذ سنوات، شعر ألهيرو أن كل شيء انتهى فعلًا."
                ]
            }
        },

        {
            ar: {
                title: "حين اخترت نفسي",
                paragraphs: [
                    "بعد انتهاء المعركة، وقف ألهيرو وحده في ساحة القصر.",
                    "كان متعبًا، لكنه لم يشعر بالانكسار.",
                    "اقتربت آيا منه.",
                    "قالت: «ألهيرو... ممكن نتكلم؟».",
                    "نظر إليها بهدوء: «اتكلمي».",
                    "قالت آيا: «أنا كنت غلطانة. غلطت لما مخترتكش. وندمت على ده كتير».",
                    "سكت ألهيرو.",
                    "أكملت: «لو الزمن رجع، كنت هختارك أنت».",
                    "ظل ألهيرو ينظر إليها للحظات.",
                    "ثم قال: «زمان... كنت مستني أسمع الكلام ده».",
                    "خفضت آيا عينيها.",
                    "أكمل ألهيرو: «بس دلوقتي أنا مش محتاج أسمعه».",
                    "قالت آيا: «يعني إيه؟».",
                    "أجاب: «يعني إني مبقتش شايفك زي زمان».",
                    "ثم قال بهدوء: «أنا مش بكرهك، ومش شايل منك... بس أنا مبقتش بحبك زي الأول».",
                    "كانت الكلمات صعبة، لكنها كانت صادقة.",
                    "قالت آيا: «أنا خسرتك».",
                    "ابتسم ألهيرو ابتسامة صغيرة وقال: «يمكن... بس أنا كسبت نفسي».",
                    "اتجه ألهيرو نحو بوابة القصر.",
                    "قال ميمو من بعيد: «رايح فين؟».",
                    "توقف ألهيرو للحظة.",
                    "قال: «مش عارف».",
                    "ضحك ميمو: «وبعدين؟».",
                    "أجاب ألهيرو: «ولأول مرة... أنا مبسوط إني مش عارف».",
                    "ترك سيفه القديم خلفه، وخرج من القصر.",
                    "لم يلتفت إلى الخلف.",
                    "لم يعد يهرب من الماضي.",
                    "كان فقط يتركه خلفه.",
                    "لم يعد الفارس المكسور.",
                    "ولم يعد الرجل الذي ينتظر أن يختاره أحد.",
                    "كان ألهيرو.",
                    "وهذه المرة... اختار نفسه."
                ]
            }
        }

    ];


    /* =====================================================
       ENGLISH TITLES
    ====================================================== */

    let englishTitles = window.ALHERO_ENGLISH_TITLES || [

        "The Knight Who Didn't Die",
        "From the Beginning",
        "The Past Returns",
        "The Road North",
        "Raven",
        "The Return",
        "The Palace Meeting",
        "The Attack",
        "The Missing King",
        "The Truth",
        "Phase Two",
        "The Buried Truth",
        "The Old Village",
        "My Father",
        "The Confrontation",
        "The Knight Who Returned",
        "The End"

    ];


    /* =====================================================
       ENGLISH CONTENT
    ====================================================== */

    let englishChapters = window.ALHERO_ENGLISH_CHAPTERS || [

        {
            title: "The Knight Who Didn't Die",
            paragraphs: [
                "The night was still.",
                "So quiet that the wind between the trees was the only sound.",
                "Far from Baldons, a man lay on the ground, motionless.",
                "Beside him was his sword.",
                "The sword of the knight everyone believed dead.",
                "Alhero opened his eyes slowly.",
                "He did not know how much time had passed.",
                "He tried to move, but the pain stopped him.",
                "Then memories began to return to him.",
                "The feast...",
                "Aya...",
                "Her wedding...",
                "The moment he felt everything had ended.",
                "He closed his eyes.",
                "He did not cry this time.",
                "He remained silent.",
                "After a while, he tried to stand.",
                "He fell.",
                "He tried again.",
                "And fell again.",
                "On the third attempt, he managed to stand with difficulty.",
                "He looked toward the horizon.",
                "Baldons was far away, but the lights of the palace were still visible.",
                "He stared at it for a long time.",
                "He could return.",
                "He could look for Memo.",
                "He could ask about Aya.",
                "But he realized one thing.",
                "There was nothing waiting for him there anymore.",
                "He picked up his sword, turned around, and walked away.",
                "Days passed.",
                "Alhero wandered with no purpose until he reached a small village he had never seen before.",
                "He entered a shop and asked for some food.",
                "When he put his hand in his pocket, he realized he did not have enough money.",
                "\"Leave the food.\"",
                "He put the food back.",
                "\"Sorry.\"",
                "Before he left, a voice came from a corner of the shop.",
                "\"Wait.\"",
                "He turned.",
                "An old man sat alone.",
                "The old man looked at Alhero, then at the sword at his waist, and said, \"You are a knight.\"",
                "Alhero was silent for a moment, then said, \"I was a knight.\"",
                "The old man smiled. \"A knight does not stop being a knight just because he has left his army.\"",
                "Alhero did not answer.",
                "The old man came closer and asked, \"What is your name?\"",
                "Alhero hesitated, then answered, \"Alhero.\"",
                "The old man's expression changed for a moment, but Alhero did not notice.",
                "The old man said, \"I am Raven.\"",
                "Then he pointed to the food. \"Take it.\"",
                "Alhero said, \"I will pay you back.\"",
                "Raven laughed. \"If you wanted money, I would not have given you the food.\"",
                "Alhero looked at him in confusion.",
                "Raven said, \"I want something else.\"",
                "\"What?\"",
                "Raven looked directly into his eyes. \"I want to know why a man like you decided to leave everything behind.\"",
                "Alhero fell silent.",
                "He found no answer.",
                "So Raven said, \"Then stay here.\"",
                "Alhero was surprised. \"Why?\"",
                "The old man answered, \"Because you will need a new reason to continue your life.\"",
                "The next morning, Alhero found a wooden sword in front of the hut door.",
                "He picked it up.",
                "Then he heard Raven say, \"Fight me.\"",
                "Alhero looked at him. \"Now?\"",
                "\"Now.\"",
                "For the first time in days, Alhero smiled.",
                "He took the sword and stood in front of him.",
                "Then he lunged.",
                "Only a few seconds passed before Alhero was on the ground.",
                "He stared at Raven in astonishment.",
                "Raven said, \"Your strength is good.\"",
                "Then he added, \"But your mind is not with you.\"",
                "Alhero stood up. \"Again.\"",
                "The fight began again.",
                "Alhero fell again.",
                "Then a third time.",
                "And each time he said, \"Again.\"",
                "Until sunset.",
                "By the end of the day, Alhero was lying on the ground, unable to move his arms.",
                "Raven stood in front of him and said, \"Tomorrow we begin from the beginning.\"",
                "Alhero looked at him. \"I already started from zero.\"",
                "Raven smiled. \"No.\"",
                "Then he turned and said, \"You started below zero.\"",
                "Alhero looked at the sky.",
                "For the first time since the war ended, he felt that something was waiting for him.",
                "Something with no connection to Aya, Baldons, or the past.",
                "Something that belonged to him alone.",
                "And the next morning, Alhero's new journey began."
            ]
        },

        {
            title: "From the Beginning",
            paragraphs: [
                "Alhero woke before sunrise.",
                "He was not used to silence.",
                "In Baldons there was always the sound of knights, training, or commands from leaders.",
                "Here, there was only the wind.",
                "He left the hut and found Raven waiting for him.",
                "Beside him were two wooden swords.",
                "Raven said, \"Take one.\"",
                "Alhero took a sword. \"What are we training today?\"",
                "Raven replied, \"Nothing.\"",
                "Alhero was confused. \"What?\"",
                "Raven smiled. \"Today you will not learn how to strike.\"",
                "Then he pointed to the forest. \"You will learn how to see.\"",
                "Alhero entered the forest alone, not understanding what Raven wanted.",
                "He walked among the trees until he heard a sound behind him.",
                "He turned quickly. No one was there.",
                "He continued walking.",
                "Then he heard another sound from the other side.",
                "He placed his hand on his sword.",
                "But Raven suddenly appeared in front of him. \"What are you doing?\"",
                "Alhero drew his sword. \"I heard a sound.\"",
                "Raven said, \"A sound does not always mean danger.\"",
                "Then he disappeared among the trees.",
                "Alhero stopped in place and began to understand.",
                "Raven did not only want him to become stronger.",
                "He wanted him to learn when to use his strength.",
                "Weeks passed.",
                "Alhero became faster, more precise, and calmer.",
                "But every time he thought he had improved, Raven found a new weakness.",
                "One day Raven said, \"Tomorrow is the first real test.\"",
                "Alhero asked, \"Against you?\"",
                "Raven shook his head. \"No.\"",
                "Then he placed a map on the table.",
                "There was a small village in the north of the region.",
                "He said, \"Three armed men seized it.\"",
                "Alhero looked at the map. \"And where are the guards?\"",
                "\"There are none.\"",
                "Alhero raised his head. \"And what do you want me to do?\"",
                "Raven said, \"Return the village without killing anyone.\"",
                "Alhero was silent, then smiled. \"I think I can.\"",
                "But Raven did not smile. \"Do not say 'I think'. Prove it.\"",
                "The next day, Alhero arrived at the village.",
                "It was unusually quiet. No one in the streets. Doors closed.",
                "In the center of the village stood three armed men.",
                "One of them noticed Alhero. \"Who are you?\"",
                "Alhero placed his hand on his sword. \"Someone who wants you to leave.\"",
                "The man laughed. \"And you are alone?\"",
                "Alhero smiled. \"Enough.\"",
                "The man drew his sword and rushed toward him.",
                "But Alhero did not move. He waited until the man got close, then dodged and disarmed him.",
                "The second man attacked.",
                "Alhero moved quickly and struck his hand, causing his weapon to fall.",
                "The third man stepped back, looking at Alhero with fear.",
                "Alhero said, \"It is over.\"",
                "The man raised his sword again.",
                "But Alhero did not attack.",
                "He said, \"If I wanted to kill you, I would have done so.\"",
                "The man stopped. \"Then why do you not?\"",
                "Alhero answered, \"Because I no longer need to prove that I am stronger than you.\"",
                "Silence fell.",
                "Then the man threw his sword away.",
                "Alhero returned to Raven in the evening.",
                "He was tired, but not injured.",
                "Raven looked at him and said, \"What did you learn?\"",
                "Alhero thought for a moment and said, \"I can win without killing.\"",
                "Raven shook his head. \"Good.\"",
                "Then he added, \"But there is something more important.\"",
                "Alhero looked at him. \"What is it?\"",
                "Raven said, \"You have begun to know who you are.\"",
                "Alhero was silent, then smiled faintly.",
                "But Raven's expression changed suddenly.",
                "He looked down the road behind Alhero.",
                "A knight was approaching from the distance.",
                "The banner of Baldons appeared above his horse.",
                "Alhero froze.",
                "Raven said quietly, \"It seems the past has finally found you.\""
            ]
        },

        {
            title: "The Past Returns",
            paragraphs: [
                "The knight approached slowly. The Baldons banner was clear above his horse.",
                "Alhero stood still. He did not touch his sword, but his eyes never left the rider.",
                "The horse stopped in front of the hut and a man in royal armor dismounted.",
                "He looked first at Raven, then at Alhero, and said, \"Alhero?\"",
                "Alhero did not answer.",
                "The man took out a sealed letter bearing the king's seal. \"I was ordered to bring you back to Baldons.\"",
                "Alhero laughed quietly. \"Who said I wanted to return?\"",
                "The knight said, \"The king wants to see you.\"",
                "Alhero looked at Raven.",
                "Raven said nothing.",
                "So Alhero said, \"Tell the king I am no longer a knight.\"",
                "The knight stepped closer. \"The king does not ask.\"",
                "Alhero's expression changed.",
                "In an instant, he placed his hand on his sword.",
                "But Raven caught his arm. \"Not now.\"",
                "Alhero looked at him, then let go of his sword.",
                "The knight took a deep breath and said, \"There is one more matter.\"",
                "He paused. \"Memo asked me to find you.\"",
                "Alhero froze. Everything around him vanished for a moment.",
                "Memo. His friend. The only person who stayed with him through the hardest days of his life.",
                "Alhero said in a low voice, \"How is he?\"",
                "The knight smiled. \"As he always is... but he has never stopped searching for you.\"",
                "Alhero lowered his head, then said, \"Tell him I am fine.\"",
                "The knight turned to leave, but before mounting his horse, he said, \"It will not be easy to hide your existence anymore.\"",
                "Then he left.",
                "Alhero entered the hut and sat by the fire without speaking.",
                "Raven said, \"You will return.\"",
                "Alhero shook his head. \"No.\"",
                "\"Why?\"",
                "He looked into the fire. \"Because I know what will happen.\"",
                "He paused. \"I will see her.\"",
                "Raven understood without Alhero needing to say the name.",
                "\"Aya.\"",
                "Alhero closed his eyes. \"I do not want to return to the past.\"",
                "Raven said, \"Running from it will not make it disappear.\"",
                "Alhero lifted his head and stood, taking his sword. \"I am not running.\"",
                "He looked at Raven. \"I am only choosing my path.\"",
                "Raven smiled. \"Then choose.\"",
                "Alhero left the hut and paused for a moment at the road leading to Baldons.",
                "Then he went in the opposite direction.",
                "But before he walked away, Raven said, \"Alhero.\"",
                "He turned back. Raven said, \"Two days from now, we go north.\"",
                "Alhero was surprised. \"Why?\"",
                "Raven looked at the sky. \"Because there is something you need to know about the old war.\"",
                "Alhero was silent, then asked, \"And what does it have to do with me?\"",
                "Raven answered, \"More than you can imagine.\""
            ]
        },

        {
            title: "The Road North",
            paragraphs: [
                "The next morning, Alhero and Raven left the village.",
                "They did not speak much.",
                "The road was long, and the farther north they went, the harsher the land became and the taller the mountains grew.",
                "After hours of travel, Alhero asked, \"What do you know about the war?\"",
                "Raven remained silent for a while, then said, \"The war you fought was not what you thought it was.\"",
                "Alhero looked at him. \"What do you mean?\"",
                "Raven took out an old map from his bag. It had marks Alhero had never seen before.",
                "\"The army you fought was receiving orders from someone else.\"",
                "Alhero stopped. \"Who?\"",
                "Raven shook his head. \"I do not know his name.\"",
                "Then he pointed to the mountains. \"But I know where his center was.\"",
                "Before sunset, they reached the ruins of an old fortress.",
                "Alhero dismounted and looked at it.",
                "The walls were broken, but the traces of an ancient battle were still visible.",
                "He said, \"Why did you bring me here?\"",
                "Raven stepped toward one of the walls and moved a small stone.",
                "Behind it was an old metal box.",
                "He opened it. Inside were several papers and a sealed letter.",
                "Alhero took the letter and looked at the seal, and his expression changed. \"This is the seal of Baldons.\"",
                "Raven said, \"Exactly.\"",
                "Alhero opened the letter and began to read.",
                "It spoke of army movements before the war and the positions of Baldons troops and the number of knights.",
                "But one thing was clear: someone inside the kingdom had been sending information to the enemy.",
                "Alhero raised his head. \"The traitor was from Baldons.\"",
                "Raven nodded. \"And that is not all.\"",
                "He pulled out another paper.",
                "Alhero looked at it. There was a single name on it: Joseph.",
                "Alhero froze. \"Commander Joseph?\"",
                "Raven said, \"I do not know if he was the traitor.\"",
                "Then he added, \"But his name appeared in the wrong place.\"",
                "Alhero stared at the paper.",
                "Joseph... the man who led them into war. The man they trusted. The man who returned with them injured.",
                "Alhero said, \"Why did you not report this to the kingdom?\"",
                "Raven answered, \"Because everyone who tried to investigate the truth before disappeared.\"",
                "Silence fell. Then they heard a sound outside the fortress.",
                "Alhero drew his sword. \"We are not alone.\"",
                "Raven looked toward the entrance. Three shadows appeared among the ruins.",
                "Then a man in black armor stepped out.",
                "He looked directly at Alhero and said, \"At last, we found you.\"",
                "Alhero tightened his grip on the sword. \"Who are you?\"",
                "The man smiled. \"Ask Raven.\"",
                "Alhero looked at his teacher and saw fear in his eyes for the first time."
            ]
        },

        {
            title: "Raven",
            paragraphs: [
                "Alhero froze for a moment.",
                "He looked at the black-armored man, then back at Raven.",
                "\"Who are they?\"",
                "Raven did not answer.",
                "The man smiled. \"It seems you did not tell him everything.\"",
                "Alhero tightened his grip on the sword. \"Raven.\"",
                "Raven raised his hand. \"Stay behind me.\"",
                "The man laughed. \"He is still the same... protecting others instead of himself.\"",
                "One of the three men rushed forward.",
                "Alhero raised his sword, but Raven moved first.",
                "A single strike. The man fell to the ground.",
                "Alhero stared at Raven in astonishment. \"You said you did not want to fight.\"",
                "Raven said, \"I changed my mind.\"",
                "The second man charged at Alhero.",
                "This time he did not retreat.",
                "He blocked the strike, then moved around him and dropped him without killing him.",
                "The third man looked at the two of them and then stepped back.",
                "Their leader said, \"This is not the right time.\"",
                "Then he pointed to his men. \"We will meet again.\"",
                "They left among the ruins.",
                "After they were gone, Alhero stood still and turned to Raven. \"Now you will tell me the truth.\"",
                "Raven did not answer. \"Who are you?\"",
                "He remained silent.",
                "Alhero stepped closer. \"And why do they know you?\"",
                "At last Raven said, \"Because I used to be one of them.\"",
                "Alhero's face changed. \"What?\"",
                "Raven took out his old sword and placed it on the ground. \"Before I was your teacher, I was a commander in the same organization.\"",
                "Alhero was silent for a moment, then asked, \"What organization?\"",
                "Raven lifted his eyes. \"The Shadow.\"",
                "Alhero looked toward the place where the men had disappeared. \"And what do they want from me?\"",
                "Raven said, \"I do not know.\"",
                "Then he added, \"But I know one thing. Your return is not a coincidence.\"",
                "At that moment, Alhero heard the sound of a horse in the distance.",
                "He turned to the road and saw a rider approaching quickly.",
                "This time it was not a Baldons banner.",
                "It was black.",
                "Raven looked at him and said, \"They found us.\"",
                "Alhero gripped his sword, but Raven stopped him. \"No.\"",
                "\"Why?\"",
                "Raven looked toward the mountains. \"Because we are leaving now.\"",
                "Then he took the papers from the box and said, \"There is something else you must see.\"",
                "Alhero looked at him. \"Where?\"",
                "Raven answered, \"Baldons.\"",
                "Alhero froze. After years of running, he had to return to the place where he left everything behind."
            ]
        },

        {
            title: "The Return",
            paragraphs: [
                "The journey to Baldons took several days.",
                "The closer Alhero came to the kingdom, the more memories returned: the village where he grew up, the training grounds, the palace, and even the road he used to walk with Memo after training.",
                "Everything looked as he had left it, but Alhero was not the same man.",
                "Raven asked, \"Ready?\"",
                "Alhero answered, \"No.\"",
                "Raven smiled. \"Honest answer.\"",
                "They reached the gates of Baldons at sunset.",
                "Alhero stopped in front of them.",
                "The guards did not recognize him, and that was better for him.",
                "He entered quietly, but one thing caught his attention.",
                "In the middle of the city stood a new statue.",
                "He walked toward it and froze.",
                "The statue was of a knight carrying a sword.",
                "Beneath it was written: \"To the heroes of the War of Hanas Valley.\"",
                "Alhero stared at it.",
                "Raven said, \"You are now part of their history.\"",
                "Alhero replied, \"But they think I am dead.\"",
                "At that moment, a voice came from behind him. \"Alhero?\"",
                "He froze.",
                "The voice was familiar.",
                "He turned slowly and saw Memo standing there.",
                "He had not changed much, but his features had become more serious.",
                "He stared at Alhero without speaking, then took a step forward. \"You...\"",
                "He could not finish the sentence.",
                "Alhero smiled. \"I missed you, Memo.\"",
                "Memo did not move at first. Then suddenly he grabbed Alhero's shoulder. \"You are alive...\"",
                "Alhero lowered his eyes.",
                "Memo said, \"I searched for you for five years.\"",
                "Alhero looked up. \"I am sorry.\"",
                "Memo grew angry. \"Sorry?! Five years, Alhero!\"",
                "Silence fell.",
                "Memo stepped closer again, but this time he was not angry.",
                "He embraced Alhero tightly. \"I thought I had lost you.\"",
                "Alhero said nothing. He simply placed his hand on his friend's shoulder.",
                "After a while, Memo stepped back and looked him up and down, then smiled. \"So what happened to you?\"",
                "Alhero looked at his sword. \"I changed.\"",
                "Memo laughed. \"Clearly.\"",
                "Then he looked at Raven, and his expression changed. \"And who is this?\"",
                "Raven answered, \"An old friend.\"",
                "Before Memo could ask more, the palace bell rang once, then twice, then three times.",
                "Memo looked toward the palace. \"This is not an ordinary bell.\"",
                "Alhero said, \"What happened?\"",
                "Memo replied, \"The king has called an urgent meeting.\"",
                "Then he looked at Alhero. \"And the strange part is... your name was first on the list.\"",
                "Alhero looked at Raven. Raven did not seem surprised.",
                "He said quietly, \"I told you... your return was not a coincidence.\""
            ]
        },

        {
            title: "The Palace Meeting",
            paragraphs: [
                "Alhero and Memo entered the palace while Raven followed in silence.",
                "Alhero had not entered this place in years.",
                "The same corridors. The same walls. Yet everything felt smaller than he remembered.",
                "They reached the hall of the king.",
                "The king sat in front, beside Aya.",
                "Alhero stopped at the door.",
                "Aya lifted her eyes and saw him. She could not speak.",
                "Long moments passed without anyone moving.",
                "Then the king said, \"Alhero.\"",
                "Alhero took a step forward. \"My lord.\"",
                "The king looked at him for a long time. \"I believed you were dead.\"",
                "Alhero answered calmly, \"I believed that too.\"",
                "Silence filled the hall.",
                "Aya still did not look away from him.",
                "But Alhero did not look at her.",
                "Memo noticed.",
                "Then the king said, \"We received reports of a group called the Shadow.\"",
                "Raven's face changed.",
                "The king continued, \"We also found evidence linking them to the old war.\"",
                "He took out a paper and placed it before him. \"And the most alarming part...\"",
                "He looked at Alhero. \"Your name appears in one of their messages.\"",
                "Alhero was startled. \"My name?\"",
                "The king said, \"Yes.\"",
                "Alhero took the paper and read a short sentence: \"If the Broken Knight returns, the second phase will begin.\"",
                "He looked at Raven, then at the king.",
                "Memo said, \"So they were waiting for him to return?\"",
                "The king answered, \"It seems so.\"",
                "Suddenly, the door burst open.",
                "One of the guards entered, breathing hard. \"My lord!\"",
                "The king stood up. \"What happened?\"",
                "The guard said, \"One of the Shadow was found inside the city walls.\"",
                "Memo drew his sword. Alhero looked at Raven.",
                "Raven said in a low voice, \"They have begun.\"",
                "Then they heard an explosion from outside the palace.",
                "The windows shook, and one of the guards shouted, \"Attack!\"",
                "Memo drew his sword and looked at Alhero.",
                "He smiled. \"It is clear your return caused problems.\"",
                "Alhero drew his sword. \"Do you still think I was the cause of all the problems?\"",
                "Memo laughed. \"You are the cause of most of them.\"",
                "They ran toward the palace gate.",
                "Aya remained standing, staring at Alhero.",
                "This time there was no sadness in his eyes as she remembered.",
                "There was something else: confidence.",
                "Then she whispered to herself, \"You really changed...\"",
                "Outside the palace, the battle began."
            ]
        },

        {
            title: "The Attack",
            paragraphs: [
                "One of the palace doors burst open and a group of masked men rushed into the courtyard.",
                "One of the guards shouted, \"Protect the king!\"",
                "But Alhero and Memo were already in the square.",
                "Memo said, \"There are many of them.\"",
                "Alhero looked around calmly. \"That does not matter.\"",
                "Memo smiled. \"You are back to your old self.\"",
                "Alhero replied, \"No... better.\"",
                "Then they rushed forward.",
                "Memo fought three men at once while Alhero moved through the attackers with a speed Memo had never seen before.",
                "Strike. Dodge. Then drop one attacker.",
                "One of the Shadow tried to attack Alhero from behind.",
                "But Alhero stopped suddenly, turned, and blocked the strike before it reached him.",
                "The man stared at him in disbelief. \"Impossible...\"",
                "Alhero said, \"What?\"",
                "The man stepped back. \"You were never this strong.\"",
                "Alhero answered, \"I was busy with other things.\"",
                "Then he knocked him down.",
                "From the upper part of the palace, Raven watched the battle.",
                "He noticed something strange: one of the Shadow fighters was not fighting.",
                "He was moving directly toward the palace.",
                "Raven said, \"They are not here for the king.\"",
                "He ran after him, but the man disappeared into one of the corridors.",
                "At the same moment, he reached the king's chamber.",
                "The king and Aya were inside.",
                "The door opened, and the man raised his weapon.",
                "But before he could attack, a sword appeared at his throat.",
                "It was Alhero. \"Too late.\"",
                "The man smiled. \"I knew you would come.\"",
                "Then he threw a smoke bomb to the ground.",
                "The room filled with smoke.",
                "When it cleared, the man was gone.",
                "But something remained on the ground: a letter.",
                "Alhero picked it up, opened it, and read it.",
                "His expression changed.",
                "Memo said, \"What does it say?\"",
                "Alhero handed him the letter. Memo read: \"To Alhero... if you are reading this, the lost knight has returned to his rightful place.\"",
                "Alhero looked at Raven. Raven said, \"They wanted you to return.\"",
                "Then he continued, \"Now we know why.\"",
                "Alhero read the letter again and saw a single name at the bottom: Joseph.",
                "Silence fell.",
                "Memo said, \"Joseph?\"",
                "Alhero did not answer.",
                "Because the man they trusted in the war, the commander they thought had sacrificed himself for them, may not have been what they believed.",
                "Outside, the kingdom's bells began to ring.",
                "But this time they were not announcing an attack.",
                "They were announcing something worse: the king's disappearance."
            ]
        },

        {
            title: "The Missing King",
            paragraphs: [
                "Silence filled the chamber.",
                "Alhero looked at the open window and then at the floor.",
                "There was no trace of the king.",
                "Memo said, \"We need to move.\"",
                "But Alhero did not move.",
                "He was staring at the letter bearing Joseph's name.",
                "Raven said, \"The king was not kidnapped from here.\"",
                "Memo looked at him. \"How?\"",
                "Raven pointed at the floor. There was a small trace of dirt at the edge of the window. \"Someone was waiting outside.\"",
                "Alhero said, \"So the king left willingly?\"",
                "Raven shook his head. \"Either willingly... or under threat.\"",
                "Alhero and Memo left the palace.",
                "The city was in chaos. Guards were searching everywhere while people tried to understand what was happening.",
                "Memo said, \"If Joseph is behind all this, we need to know where he is.\"",
                "Alhero pulled out the letter and noticed a small symbol at the bottom: a black crow.",
                "He stopped. \"Raven said the Shadow has hidden places.\"",
                "Memo said, \"What do you mean?\"",
                "Alhero looked toward the north of the city. \"This symbol is not a message.\"",
                "He pointed to it. \"It is a map.\"",
                "An hour later, they reached an old area outside the city walls.",
                "There was an abandoned building.",
                "Alhero entered first, but there was no one inside.",
                "Then he heard a voice from the darkness: \"I knew you would come.\"",
                "A masked man appeared. Alhero drew his sword.",
                "But the man raised his hand. \"If I wanted to kill you, I would not have let you reach here.\"",
                "Memo said, \"Where is the king?\"",
                "The man laughed. \"Good question.\"",
                "Then he looked at Alhero. \"But the better question is... why did he disappear?\"",
                "Alhero stepped forward. \"Speak.\"",
                "The man said, \"Because the king discovered the truth.\"",
                "Everyone went silent. \"What truth?\"",
                "He answered, \"That the old war never truly ended.\"",
                "Then he threw a paper on the ground.",
                "Alhero picked it up. It contained a list of names. At the end of the list was Joseph's name, but beside it another name: the king of Baldons.",
                "Memo froze. Alhero stared at the paper.",
                "The man said, \"The king was not a victim of the war.\"",
                "Then he smiled. \"He was part of it.\"",
                "Suddenly they heard the sound of horses approaching from outside.",
                "The man said, \"I do not have time.\"",
                "Then he slipped back into the darkness.",
                "Memo shouted, \"Wait!\"",
                "But the man was gone.",
                "Alhero looked at the paper again and said, \"If this is true...\"",
                "Memo finished the sentence: \"Then everything that happened from the beginning was built on a lie.\"",
                "Outside, the horses stopped.",
                "Then they heard a familiar voice: \"Alhero!\"",
                "It was Aya.",
                "The two of them ran out.",
                "Aya was standing in front of the building with several riders.",
                "Her face was pale. \"I found my father.\"",
                "Alhero stepped closer. \"Where?\"",
                "She looked at him and said, \"He went himself to a place belonging to the Shadow.\"",
                "She paused. \"And he took Raven with him.\"",
                "Alhero's face changed."
            ]
        },

        {
            title: "The Truth",
            paragraphs: [
                "Alhero stopped in place. \"Raven was taken?\"",
                "Aya nodded. \"Before our soldiers could reach him.\"",
                "Memo looked at Alhero. \"We must go after him.\"",
                "But Alhero did not move.",
                "He was thinking of one thing: Raven was not merely a teacher. He knew secrets about the war and about Alhero's father.",
                "Now he was with the king inside a place belonging to the Shadow.",
                "Alhero said, \"Where is the place?\"",
                "Aya pulled out a map. \"An old fortress in the north.\"",
                "Alhero looked at it. It was the same fortress he had gone to with Raven.",
                "\"There...\"",
                "Then he understood something. \"Raven knew we would come back here.\"",
                "Memo said, \"So he was leading us to this place from the beginning?\"",
                "Alhero did not answer. But something inside him began to doubt everything."
            ]
        },

        {
            title: "Phase Two",
            paragraphs: [
                "The second phase of the Shadow's plan began.",
                "Chaos spread through Baldons as the knights split up to defend the city.",
                "Alhero faced Kaiden, a leader of the enemy force.",
                "Kaiden said, \"You think you came back for revenge? You came back to finish something that began long ago.\"",
                "Alhero did not answer.",
                "He defeated Kaiden, but left with more questions than before."
            ]
        },

        {
            title: "The Buried Truth",
            paragraphs: [
                "A clue led Alhero to the village where he had grown up, the same place where his childhood had once felt safe and simple.",
                "He found his family's old house swallowed by dust and time, but the memories inside it were still alive in his mind.",
                "Behind a cracked wall, he discovered a hidden passage he had never seen before.",
                "At the end of the passage, a man was waiting in the dark.",
                "Alhero stopped completely, unable to breathe for a moment.",
                "It was his father.",
                "\"I knew you would come back one day,\" his father said, his voice hoarse but steady.",
                "Alhero did not know whether the feeling in him was anger, grief, or relief.",
                "Only one truth mattered now: the life he had believed was over had never really ended."
            ]
        },

        {
            title: "The Old Village",
            paragraphs: [
                "The reunion did not last long, because the Shadow arrived before the sun had fully risen.",
                "Joseph led them into the village with armed men at his back, and the air changed in a single moment.",
                "Alhero stood beside his father, Memo, and Raven, and for the first time in a long while he did not feel alone.",
                "This time, he was not fighting for himself only; he was fighting to protect the truth and to reclaim what had been stolen from him.",
                "Joseph raised his voice and said, \"You still do not understand the whole truth.\"",
                "Alhero answered, \"Maybe not all of it yet. But I will not let you decide who I am or what I become.\"",
                "The battle began at once, and the old village became a battlefield once more."
            ]
        },

        {
            title: "My Father",
            paragraphs: [
                "Alhero stood before the bars and could not speak when he saw his father alive.",
                "The man before him was older and worn by time, but there was no doubt in Alhero's heart: it was his father.",
                "His father explained that he had hidden evidence and endured imprisonment to protect his son from the empire's growing watch.",
                "In a small chest behind him, Alhero found a ledger of secret orders, names, and movements tied to the Shadow, with Joseph's name appearing prominently.",
                "But the ledger also showed something more important: Joseph was not the true mastermind, and the conspiracy reached far beyond the battlefield.",
                "The hidden truth was bigger than one war and older than one kingdom."
            ]
        },

        {
            title: "The Confrontation",
            paragraphs: [
                "The final battle approached with the weight of everything that had happened before it.",
                "Everyone returned to the palace, where the Shadow had gathered in force and the truth had become a weapon in itself.",
                "Raven faced the memory of his own past, Aya confronted what her family had concealed, and Alhero had one purpose: to put an end to it all.",
                "He faced the leader of the Shadow directly, with a calm that had not existed when he was first broken and lost.",
                "The fight was long and brutal, but Alhero was no longer the desperate knight who had once fallen to despair.",
                "He knew his strength, and more importantly, he knew why he was using it.",
                "When the leader finally fell, the air around the palace seemed to change. The war had ended, but the scars remained."
            ]
        },

        {
            title: "The Knight Who Returned",
            paragraphs: [
                "Night fell over the village and the sounds of battle slowly faded, but everyone knew something larger was still coming.",
                "Alhero, his father, Memo, Aya, and Raven went back toward the palace with the truth in their hands and fear in their hearts.",
                "There they found the gates open and the king waiting alone, as though the city itself had been preparing for this moment.",
                "The true mastermind behind the Shadow revealed himself, and the man Alhero had been fighting to understand was not the one pulling the strings.",
                "The final confrontation became a struggle of will, not simply steel, and Alhero refused to become what his enemy had been.",
                "For the first time in years, he fought not for revenge alone, but to end the cycle that had wounded his family and his kingdom."
            ]
        },

        {
            title: "The End",
            paragraphs: [
                "The battle ended at last. The leader of the Shadow fell, and the shadow that had haunted Alhero for years was finally broken.",
                "Alhero stood in the palace courtyard, his sword in hand, exhausted but no longer shattered.",
                "Memo approached him and said quietly, \"It is over.\"",
                "Alhero looked around at the palace, the soldiers, and the place that had once been his entire world.",
                "Then he answered, \"Yes... it is over.\"",
                "Aya came closer, and after a long silence she said, \"Alhero...\"",
                "He turned to her. \"Yes?\"",
                "She lowered her head. \"Can we talk, alone?\"",
                "Alhero nodded and walked with her away from the others.",
                "They stood where their story had started, and the silence between them was heavier than any battle.",
                "Aya admitted she had been wrong, that she had chosen someone else and regretted it, and that if life could be rewound she would have chosen him.",
                "Alhero listened without rage, without bitterness, only with the calm he had finally learned to carry.",
                "He told her he did not hate her, that his feelings had changed, and that he no longer needed the version of love he used to carry for her.",
                "She cried, and he did not turn away from her pain, but he did not let it drag him back into the old wound either.",
                "When the conversation ended, he walked toward the gate of the palace with his sword strapped to his back.",
                "Memo called after him, \"Where are you going?\"",
                "Alhero stopped for a moment and said, \"I don't know.\"",
                "Memo laughed softly. \"Then for the first time, you're finally free.\"",
                "Alhero smiled and kept walking.",
                "He did not look back this time.",
                "He was no longer running from the past or waiting for someone to choose him.",
                "For the first time, he was simply Alhero, and he chose himself."
            ]
        }

    ];


    /* =====================================================
       DOM ELEMENTS
    ====================================================== */

    const storyElement =
        document.getElementById("story");

    const chapterListElement =
        document.getElementById("chapterList");

    const chapterToggle =
        document.getElementById("chapterToggle");

    const welcomeModal =
        document.getElementById("welcomeModal");

    const oldChapterBtn =
        document.getElementById("oldChapterBtn");

    const continueBtn =
        document.getElementById("continueBtn");

    const chapterCounter =
        document.getElementById("chapterCounter");

    const chapterNumber =
        document.getElementById("chapterNumber");

    const previousBtn =
        document.getElementById("previousBtn");

    const nextBtn =
        document.getElementById("nextBtn");

    const arabicBtn =
        document.getElementById("arabicBtn");

    const englishBtn =
        document.getElementById("englishBtn");

    const lightThemeBtn =
        document.getElementById("lightThemeBtn");

    const darkThemeBtn =
        document.getElementById("darkThemeBtn");

    const subtitle =
        document.getElementById("subtitle");

    const storyInfo =
        document.getElementById("storyInfo");

    const chaptersTitle =
        document.getElementById("chaptersTitle");

    const endingTitle =
        document.getElementById("endingTitle");

    const endingText =
        document.getElementById("endingText");

    const previousText =
        document.getElementById("previousText");

    const nextText =
        document.getElementById("nextText");

    const backToTop =
        document.getElementById("backToTop");


    // Critical DOM checks — stop early if core containers are missing
    if (!storyElement || !chapterListElement) {
        console.error("ALHERO: Required DOM elements missing (#story or #chapterList). Initialization aborted.");
        return;
    }

    // Wire chapter toggle (mobile)
    if (chapterToggle) {
        chapterToggle.addEventListener("click", () => {
            const menu = chapterListElement.closest('.chapters-menu');
            if (!menu) return;
            const collapsed = menu.classList.toggle('collapsed');
            chapterToggle.setAttribute('aria-expanded', String(!collapsed));
            chapterToggle.textContent = collapsed ? '☰' : '✕';
        });
    }


    function applyTheme(themeName) {
        const isLight = themeName === 'light';
        document.body.classList.toggle('light-mode', isLight);
        localStorage.setItem('alhero-theme', themeName);

        if (lightThemeBtn) {
            lightThemeBtn.classList.toggle('active', isLight);
        }

        if (darkThemeBtn) {
            darkThemeBtn.classList.toggle('active', !isLight);
        }
    }

    // Welcome modal behavior for new users
    function hideWelcome() {
        if (welcomeModal) welcomeModal.classList.add('hidden');
        try { localStorage.setItem('alhero-welcome-seen', '1'); } catch (e) {}
    }

    function showWelcome() {
        if (!welcomeModal) return;
        try {
            if (localStorage.getItem('alhero-welcome-seen')) return;
        } catch (e) {}
        welcomeModal.classList.remove('hidden');
    }

    if (oldChapterBtn) {
        oldChapterBtn.addEventListener('click', () => {
            const liveUrl = 'https://maherayman.github.io/alhero-the-broken-knight/';
            window.location.href = liveUrl;
        });
    }

    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            hideWelcome();
            renderChapter();
        });
    }

    if (lightThemeBtn) {
        lightThemeBtn.addEventListener('click', () => applyTheme('light'));
    }

    if (darkThemeBtn) {
        darkThemeBtn.addEventListener('click', () => applyTheme('dark'));
    }


    /* =====================================================
       TRANSLATIONS
    ====================================================== */

    const translations = {

        ar: {

            subtitle:
                "هذه المرة... لم ينتظر أن يختاره أحد، بل اختار نفسه.",

            storyInfo:
                "الجزء الثاني من رحلة ألهيرو. بعد سنوات من الغياب، يعود إلى بالدونز ويكتشف أن الماضي لم ينتهِ بعد.",

            chapters:
                "فصول الرواية",

            chapter:
                "الفصل",

            previous:
                "السابق",

            next:
                "التالي",

            ending:
                "النهاية",

            endingText:
                "لم يعد الفارس المكسور... لقد اختار نفسه."

        },


        en: {

            subtitle:
                "This time... he did not wait to be chosen. He chose himself.",

            storyInfo:
                "The second part of Alhero's journey. After years away, he returns to Baldons and discovers that the past is not finished.",

            chapters:
                "Story Chapters",

            chapter:
                "Chapter",

            previous:
                "Previous",

            next:
                "Next",

            ending:
                "The End",

            endingText:
                "He was no longer the broken knight... he chose himself."

        }

    };


    /* =====================================================
       GET CHAPTER DATA
    ====================================================== */

    function getChapter(chapterIndex) {

        if (currentLanguage === "ar") {

            return chapters[chapterIndex].ar;

        }

        return englishChapters[chapterIndex];

    }


    /* =====================================================
       CREATE CHAPTER LIST
    ====================================================== */

    function createChapterList() {

        chapterListElement.innerHTML = "";

        for (
            let i = 0;
            i < chapters.length;
            i++
        ) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "chapter-item";

            if (i === currentChapter) {

                button.classList.add("active");

            }


            let title;

            if (currentLanguage === "ar") {
                title = chapters[i].ar.title;
            } else {
                title = englishTitles[i] || (englishChapters[i] && englishChapters[i].title) || chapters[i].ar.title;
            }


            button.textContent =
                `${String(i + 1).padStart(2, "0")} — ${title}`;


            button.addEventListener(
                "click",
                () => {

                    currentChapter = i;

                    saveProgress();

                    renderChapter();

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }
            );


            chapterListElement.appendChild(button);

        }

    }


    /* =====================================================
       RENDER CHAPTER
    ====================================================== */

    function renderChapter() {

        const chapter =
            getChapter(currentChapter);


        storyElement.innerHTML = "";


        /*
         * Chapter title
         */

        const title =
            document.createElement("h2");

        title.className =
            "chapter-title";


        const number =
            document.createElement("span");

        number.className =
            "chapter-number";

        number.textContent =
            currentChapter + 1;


        const titleText =
            document.createElement("span");

        titleText.textContent =
            chapter.title;


        title.appendChild(number);

        title.appendChild(titleText);

        storyElement.appendChild(title);


        /*
         * Chapter paragraphs
         */

        chapter.paragraphs.forEach(
            paragraph => {

                const p =
                    document.createElement("p");

                p.className =
                    "chapter-text";


                /*
                 * Detect dialogue
                 */

                const isDialogue =
                    paragraph.includes("«") ||
                    paragraph.includes("\"");


                if (isDialogue) {

                    p.classList.add("dialogue");

                }


                p.textContent =
                    paragraph;


                storyElement.appendChild(p);

            }
        );


        /*
         * Counter
         */

        chapterCounter.textContent =
            `${translations[currentLanguage].chapter} ${currentChapter + 1}`;


        chapterNumber.textContent =
            `${currentChapter + 1} / ${chapters.length}`;


        /*
         * Navigation state
         */

        previousBtn.disabled =
            currentChapter === 0;


        nextBtn.disabled =
            currentChapter === chapters.length - 1;


        /*
         * Update active chapter
         */

        createChapterList();


        /*
         * Update document title
         */

        if (currentLanguage === "ar") {
            document.title = `الفصل ${currentChapter + 1} — ${chapter.title} | ألهيرو`;
        } else {
            const chapWord = translations[currentLanguage] && translations[currentLanguage].chapter ? translations[currentLanguage].chapter : "Chapter";
            document.title = `${chapWord} ${currentChapter + 1} — ${chapter.title} | Alhero`;
        }


        /*
         * Scroll chapter menu to active button
         */

        setTimeout(() => {

            const active =
                chapterListElement.querySelector(
                    ".chapter-item.active"
                );

            if (active) {

                active.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });

            }

        }, 100);

    }


    /* =====================================================
       CHANGE LANGUAGE
    ====================================================== */

    function setLanguage(language) {

        if (
            language !== "ar" &&
            language !== "en"
        ) {

            return;

        }


        currentLanguage =
            language;


        localStorage.setItem(
            "alhero-language",
            currentLanguage
        );


        if (currentLanguage === "ar") {

            document.documentElement.lang =
                "ar";

            document.documentElement.dir =
                "rtl";

            document.body.classList.remove(
                "english"
            );


            arabicBtn.classList.add(
                "active"
            );

            englishBtn.classList.remove(
                "active"
            );

        } else {

            document.documentElement.lang =
                "en";

            document.documentElement.dir =
                "ltr";

            document.body.classList.add(
                "english"
            );


            englishBtn.classList.add(
                "active"
            );

            arabicBtn.classList.remove(
                "active"
            );

        }


        updateInterface();

        renderChapter();

    }


    /* =====================================================
       UPDATE INTERFACE
    ====================================================== */

    function updateInterface() {

        const text =
            translations[currentLanguage];


        if (subtitle) subtitle.textContent = text.subtitle;

        if (storyInfo) {
            const p = storyInfo.querySelector("p");
            if (p) p.textContent = text.storyInfo;
        }

        if (chaptersTitle) chaptersTitle.textContent = text.chapters;

        if (previousText) previousText.textContent = text.previous;

        if (nextText) nextText.textContent = text.next;

        if (endingTitle) endingTitle.textContent = text.ending;

        if (endingText) endingText.textContent = text.endingText;

    }


    /* =====================================================
       NEXT CHAPTER
    ====================================================== */

    function nextChapter() {

        if (
            currentChapter >=
            chapters.length - 1
        ) {

            return;

        }


        currentChapter++;

        saveProgress();

        renderChapter();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
       PREVIOUS CHAPTER
    ====================================================== */

    function previousChapter() {

        if (
            currentChapter <= 0
        ) {

            return;

        }


        currentChapter--;

        saveProgress();

        renderChapter();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
       SAVE PROGRESS
    ====================================================== */

    function saveProgress() {

        localStorage.setItem(
            "alhero-current-chapter",
            currentChapter
        );

    }


    /* =====================================================
       LOAD PROGRESS
    ====================================================== */

    function loadProgress() {

        const saved =
            localStorage.getItem(
                "alhero-current-chapter"
            );


        if (saved === null) {

            currentChapter = 0;

            return;

        }


        const number =
            parseInt(saved, 10);


        if (
            !Number.isNaN(number) &&
            number >= 0 &&
            number < chapters.length
        ) {

            currentChapter =
                number;

        } else {

            currentChapter = 0;

        }

    }


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }


    /* =====================================================
       BUTTON EVENTS
    ====================================================== */

    if (nextBtn) nextBtn.addEventListener("click", nextChapter);
    if (previousBtn) previousBtn.addEventListener("click", previousChapter);
    if (arabicBtn) arabicBtn.addEventListener("click", () => { setLanguage("ar"); });
    if (englishBtn) englishBtn.addEventListener("click", () => { setLanguage("en"); });


    /* =====================================================
       KEYBOARD NAVIGATION
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            /*
             * Don't trigger when typing
             */

            const tag =
                document.activeElement.tagName;


            if (
                tag === "INPUT" ||
                tag === "TEXTAREA"
            ) {

                return;

            }


            if (
                event.key === "ArrowRight"
            ) {

                if (
                    currentLanguage === "ar"
                ) {

                    previousChapter();

                } else {

                    nextChapter();

                }

            }


            if (
                event.key === "ArrowLeft"
            ) {

                if (
                    currentLanguage === "ar"
                ) {

                    nextChapter();

                } else {

                    previousChapter();

                }

            }

        }
    );


    /* =====================================================
       INITIALIZE
    ====================================================== */

    const savedTheme = localStorage.getItem('alhero-theme') || 'dark';
    applyTheme(savedTheme);

    loadProgress();

    // show welcome modal for new users (before initial render)
    showWelcome();

    setLanguage(
        currentLanguage
    );

});
