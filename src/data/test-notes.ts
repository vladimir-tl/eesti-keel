import type { Lang } from '../i18n/ui';
import type { Level } from './questions';
import type { NoteSection } from './topic-notes';

/**
 * Text under a level test: what it covers, how it relates to the Harno exam and what to do with the result.
 * The page adds the list of the level's topics after these sections.
 */
export const testNotes: Record<Level, Record<Lang, { sections: NoteSection[]; topicsTitle: string }>> = {
  A1: {
    ru: {
      sections: [
        {
          h: 'Что проверяет тест A1',
          p: [
            'В тесте по одному вопросу из каждой из 49 тем уровня A1, и при каждом запуске подборка новая. Вопросы охватывают базовую грамматику — olla и спряжение глаголов, падежи места, множественное число, партитив, отрицание, простое прошедшее время — и слова для повседневных ситуаций: знакомство, семья, числа и время, покупки, кафе, врач, транспорт, погода.',
            'После каждого ответа показывается объяснение, а в конце — разбор ошибок. Тест бесплатный и не требует регистрации.',
          ],
        },
        {
          h: 'Есть ли экзамен A1',
          p: [
            'Государственного экзамена на уровень A1 в Эстонии нет: Harno проводит экзамены начиная с уровня A2. Но A1 — это фундамент: на этой грамматике и этих словах держится весь экзамен A2.',
            'Если тест A1 даётся уверенно, переходите к темам и тесту A2.',
          ],
          pages: [['Тест A2 по эстонскому языку', 'test-a2'], ['Как устроен экзамен A2: части, баллы, регистрация', 'exam-a2']],
        },
        {
          h: 'Как пользоваться результатом',
          p: [
            'Если в вопросе была ошибка, откройте его тему и пройдите все упражнения — в каждой теме A1 от 12 до 21 вопроса с объяснениями. Через неделю пройдите тест снова: вопросы будут другими.',
            'Не уверены, с какого уровня начать? Тест уровня подскажет ваш уровень и темы, которые стоит повторить.',
          ],
          pages: [['Определить свой уровень', 'level-test']],
        },
      ],
      topicsTitle: 'Все темы A1',
    },
    en: {
      sections: [
        {
          h: 'What the A1 test covers',
          p: [
            'The test asks one question from each of the 49 A1 topics, with a new selection every time. It covers the basic grammar — olla and verb endings, the place cases, the plural, the partitive, negation, the simple past — and the words for everyday situations: meeting people, family, numbers and time, shopping, the café, the doctor, transport, the weather.',
            'An explanation follows every answer, and you get a review of your mistakes at the end. The test is free and needs no sign-up.',
          ],
        },
        {
          h: 'Is there an A1 exam?',
          p: [
            'There is no state exam at A1 in Estonia: Harno’s exams start at A2. But A1 is the foundation — the whole A2 exam rests on this grammar and vocabulary.',
            'If the A1 test feels easy, move on to the A2 topics and test.',
          ],
          pages: [['Estonian A2 test', 'test-a2'], ['How the A2 exam works: parts, points, registration', 'exam-a2']],
        },
        {
          h: 'What to do with your result',
          p: [
            'If you got a question wrong, open its topic and do all the exercises — every A1 topic has 12 to 21 questions with explanations. Take the test again a week later: the questions will be different.',
            'Not sure which level to start from? The level test tells you your level and the topics to review.',
          ],
          pages: [['Find your level', 'level-test']],
        },
      ],
      topicsTitle: 'All A1 topics',
    },
    et: {
      sections: [
        {
          h: 'Mida A1 test kontrollib',
          p: [
            'Testis on üks küsimus igast 49 A1 teemast ja iga kord tuleb uus valik. Küsimused katavad põhigrammatikat — olla ja verbide pööramine, kohakäänded, mitmus, osastav, eitus, lihtminevik — ja igapäevaste olukordade sõnavara: tutvumine, pere, arvud ja kellaaeg, poes, kohvikus, arsti juures, transport, ilm.',
            'Iga vastuse järel on selgitus ja lõpus vigade ülevaade. Test on tasuta ja registreerimata.',
          ],
        },
        {
          h: 'Kas A1 eksam on olemas?',
          p: [
            'A1-taseme riiklikku eksamit Eestis ei ole: Harno eksamid algavad A2 tasemest. A1 on aga vundament — kogu A2 eksam toetub sellele grammatikale ja sõnavarale.',
            'Kui A1 test tundub kerge, mine edasi A2 teemade ja testi juurde.',
          ],
          pages: [['Eesti keele A2 test', 'test-a2'], ['Kuidas A2 eksam käib: osad, punktid, registreerimine', 'exam-a2']],
        },
        {
          h: 'Mida tulemusega teha',
          p: [
            'Kui mõnes küsimuses tuli viga, ava selle teema ja tee kõik harjutused läbi — igas A1 teemas on 12–21 küsimust selgitustega. Nädala pärast tee test uuesti: küsimused on siis teised.',
            'Ei tea, millisest tasemest alustada? Tasemetest näitab sinu taset ja teemasid, mida korrata.',
          ],
          pages: [['Leia oma tase', 'level-test']],
        },
      ],
      topicsTitle: 'Kõik A1 teemad',
    },
  },
  A2: {
    ru: {
      sections: [
        {
          h: 'Что проверяет тест A2',
          p: [
            'В тесте по одному вопросу из каждой из 52 тем уровня A2, и при каждом запуске подборка новая. Часть вопросов — грамматика A2: родительный падеж, местоимения, -ga и -ta, сравнение, повелительное и условное наклонение, прошедшее время и перфект, käima и minema, сложные предложения. Остальные — лексика 13 тематических блоков экзамена Harno: о себе и семье, учёба и работа, услуги, дом, здоровье, свободное время, покупки, еда, общение, город и природа, культура, поездки.',
            'После каждого ответа показывается объяснение, а в конце — разбор ошибок. Тест бесплатный и не требует регистрации.',
          ],
        },
        {
          h: 'Как тест связан с экзаменом Harno',
          p: [
            'Государственный экзамен A2 состоит из четырёх частей — письмо, аудирование, чтение и говорение, по 20 баллов каждая. Чтобы сдать, нужно набрать 48 баллов из 80 (60%), и ни одна часть не может быть на нуле.',
            'Этот тест тренирует то, на чём держатся все четыре части: слова по темам экзамена и грамматику. Письмо и говорение он не заменяет — их стоит тренировать отдельно: писать короткие записки и письма, отвечать вслух на вопросы о себе и о повседневной жизни.',
          ],
          pages: [['Как устроен экзамен A2: части, баллы, регистрация', 'exam-a2']],
        },
        {
          h: 'Как пользоваться результатом',
          p: [
            'Если в вопросе была ошибка, откройте его тему и пройдите все упражнения — в каждой теме A2 от 17 до 20 вопросов с объяснениями. Через неделю пройдите тест снова: вопросы будут другими.',
            'Если тест кажется трудным, повторите A1. Если даётся легко — переходите к B1.',
          ],
          pages: [['Тест A1 по эстонскому языку', 'test'], ['Тест B1 по эстонскому языку', 'test-b1'], ['Определить свой уровень', 'level-test']],
        },
      ],
      topicsTitle: 'Все темы A2',
    },
    en: {
      sections: [
        {
          h: 'What the A2 test covers',
          p: [
            'The test asks one question from each of the 52 A2 topics, with a new selection every time. Some questions are A2 grammar: the genitive, pronouns, -ga and -ta, comparison, the imperative and the conditional, the past and the perfect, käima and minema, complex sentences. The rest is vocabulary from the 13 topic areas of the Harno exam: yourself and your family, education and work, services, home, health, free time, shopping, food, relationships, town and nature, culture, travel.',
            'An explanation follows every answer, and you get a review of your mistakes at the end. The test is free and needs no sign-up.',
          ],
        },
        {
          h: 'How the test relates to the Harno exam',
          p: [
            'The state A2 exam has four parts — writing, listening, reading and speaking — worth 20 points each. To pass you need 48 points out of 80 (60%), with no part at zero.',
            'This test trains what all four parts rest on: exam-topic vocabulary and grammar. It does not replace writing and speaking practice: write short notes and letters, and answer questions about yourself and daily life out loud.',
          ],
          pages: [['How the A2 exam works: parts, points, registration', 'exam-a2']],
        },
        {
          h: 'What to do with your result',
          p: [
            'If you got a question wrong, open its topic and do all the exercises — every A2 topic has 17 to 20 questions with explanations. Take the test again a week later: the questions will be different.',
            'If the test feels hard, go back over A1. If it feels easy, move on to B1.',
          ],
          pages: [['Estonian A1 test', 'test'], ['Estonian B1 test', 'test-b1'], ['Find your level', 'level-test']],
        },
      ],
      topicsTitle: 'All A2 topics',
    },
    et: {
      sections: [
        {
          h: 'Mida A2 test kontrollib',
          p: [
            'Testis on üks küsimus igast 52 A2 teemast ja iga kord tuleb uus valik. Osa küsimusi on A2 grammatikast: omastav kääne, asesõnad, -ga ja -ta, võrdlemine, käskiv ja tingiv kõneviis, lihtminevik ja täisminevik, käima ja minema, liitlaused. Ülejäänud on Harno eksami 13 teemavaldkonna sõnavarast: endast ja perest, haridus ja töö, teenused, kodu, tervis, vaba aeg, ostlemine, toit, suhtlemine, linn ja loodus, kultuur, reisimine.',
            'Iga vastuse järel on selgitus ja lõpus vigade ülevaade. Test on tasuta ja registreerimata.',
          ],
        },
        {
          h: 'Kuidas test on seotud Harno eksamiga',
          p: [
            'A2-taseme eksamil on neli osa — kirjutamine, kuulamine, lugemine ja rääkimine, igaüks 20 punkti. Eksami sooritamiseks on vaja 48 punkti 80-st (60%) ja ükski osa ei tohi olla 0 punkti.',
            'See test harjutab seda, millele toetuvad kõik neli osa: eksamiteemade sõnavara ja grammatikat. Kirjutamist ja rääkimist see ei asenda — kirjuta lühikesi teateid ja kirju ning vasta valjusti küsimustele endast ja igapäevaelust.',
          ],
          pages: [['Kuidas A2 eksam käib: osad, punktid, registreerimine', 'exam-a2']],
        },
        {
          h: 'Mida tulemusega teha',
          p: [
            'Kui mõnes küsimuses tuli viga, ava selle teema ja tee kõik harjutused läbi — igas A2 teemas on 17–20 küsimust selgitustega. Nädala pärast tee test uuesti: küsimused on siis teised.',
            'Kui test tundub raske, korda A1 taset. Kui kerge — mine edasi B1 juurde.',
          ],
          pages: [['Eesti keele A1 test', 'test'], ['Eesti keele B1 test', 'test-b1'], ['Leia oma tase', 'level-test']],
        },
      ],
      topicsTitle: 'Kõik A2 teemad',
    },
  },
  B1: {
    ru: {
      sections: [
        {
          h: 'Что проверяет тест B1',
          p: [
            'В тесте по одному вопросу из каждой из 36 тем уровня B1, и при каждом запуске подборка новая. Часть вопросов — грамматика среднего уровня: безличная форма, косвенное наклонение, причастия, прошедшее условное, управление глаголов, придаточные предложения. Остальные — лексика 15 тематических блоков экзамена Harno: работа, здоровье, услуги, общество, политика, экономика, природа, культура, путешествия.',
            'После каждого ответа показывается объяснение, а в конце — разбор ошибок. Тест бесплатный и не требует регистрации.',
          ],
        },
        {
          h: 'Как тест связан с экзаменом Harno',
          p: [
            'Государственный экзамен B1 состоит из четырёх частей — письмо, аудирование, чтение и говорение, по 25 баллов каждая. Чтобы сдать, нужно набрать 60 баллов из 100, и ни одна часть не может быть на нуле.',
            'Этот тест тренирует то, на чём держатся все четыре части: слова по темам экзамена и грамматику. Письмо и говорение он не заменяет — их стоит тренировать отдельно: писать записки на 50 слов и письма на 100 слов, отвечать вслух на вопросы и высказывать мнение.',
          ],
          pages: [['Как устроен экзамен B1: части, баллы, регистрация', 'exam-b1']],
        },
        {
          h: 'Как пользоваться результатом',
          p: [
            'Если в вопросе была ошибка, откройте его тему и пройдите все упражнения — в каждой теме B1 от 9 до 16 вопросов с объяснениями. Через неделю пройдите тест снова: вопросы будут другими.',
            'Если тест кажется слишком трудным, начните с уровня A2: экзамен B1 опирается на всю грамматику A1 и A2.',
          ],
          pages: [['Тест A2 по эстонскому языку', 'test-a2'], ['Определить свой уровень', 'level-test']],
        },
      ],
      topicsTitle: 'Все темы B1',
    },
    en: {
      sections: [
        {
          h: 'What the B1 test covers',
          p: [
            'The test asks one question from each of the 36 B1 topics, with a new selection every time. Some questions are intermediate grammar: the impersonal, the quotative, participles, the past conditional, verb government, subordinate clauses. The rest is vocabulary from the 15 topic areas of the Harno exam: work, health, services, society, politics, the economy, nature, culture, travel.',
            'An explanation follows every answer, and you get a review of your mistakes at the end. The test is free and needs no sign-up.',
          ],
        },
        {
          h: 'How the test relates to the Harno exam',
          p: [
            'The state B1 exam has four parts — writing, listening, reading and speaking — worth 25 points each. To pass you need 60 points out of 100, with no part at zero.',
            'This test trains what all four parts rest on: exam-topic vocabulary and grammar. It does not replace writing and speaking practice: write 50-word notes and 100-word letters, answer questions out loud and practise giving your opinion.',
          ],
          pages: [['How the B1 exam works: parts, points, registration', 'exam-b1']],
        },
        {
          h: 'What to do with your result',
          p: [
            'If you got a question wrong, open its topic and do all the exercises — every B1 topic has 9 to 16 questions with explanations. Take the test again a week later: the questions will be different.',
            'If the test feels too hard, start with A2: the B1 exam builds on all of the A1 and A2 grammar.',
          ],
          pages: [['Estonian A2 test', 'test-a2'], ['Find your level', 'level-test']],
        },
      ],
      topicsTitle: 'All B1 topics',
    },
    et: {
      sections: [
        {
          h: 'Mida B1 test kontrollib',
          p: [
            'Testis on üks küsimus igast 36 B1 teemast ja iga kord tuleb uus valik. Osa küsimusi on kesktaseme grammatikast: umbisikuline tegumood, kaudne kõneviis, kesksõnad, tingiva kõneviisi minevik, verbide rektsioon, kõrvallaused. Ülejäänud on Harno eksami 15 teemavaldkonna sõnavarast: töö, tervis, teenused, ühiskond, poliitika, majandus, loodus, kultuur, reisimine.',
            'Iga vastuse järel on selgitus ja lõpus vigade ülevaade. Test on tasuta ja registreerimata.',
          ],
        },
        {
          h: 'Kuidas test on seotud Harno eksamiga',
          p: [
            'B1-taseme eksamil on neli osa — kirjutamine, kuulamine, lugemine ja rääkimine, igaüks 25 punkti. Eksami sooritamiseks on vaja 60 punkti 100-st ja ükski osa ei tohi olla 0 punkti.',
            'See test harjutab seda, millele toetuvad kõik neli osa: eksamiteemade sõnavara ja grammatikat. Kirjutamist ja rääkimist see ei asenda — neid tasub harjutada eraldi: kirjuta 50-sõnalisi teateid ja 100-sõnalisi kirju, vasta küsimustele valjusti ja põhjenda oma arvamust.',
          ],
          pages: [['Kuidas B1 eksam käib: osad, punktid, registreerimine', 'exam-b1']],
        },
        {
          h: 'Mida tulemusega teha',
          p: [
            'Kui mõnes küsimuses tuli viga, ava selle teema ja tee kõik harjutused läbi — igas B1 teemas on 9–16 küsimust selgitustega. Nädala pärast tee test uuesti: küsimused on siis teised.',
            'Kui test tundub liiga raske, alusta A2 tasemest: B1 eksam toetub kogu A1 ja A2 grammatikale.',
          ],
          pages: [['Eesti keele A2 test', 'test-a2'], ['Leia oma tase', 'level-test']],
        },
      ],
      topicsTitle: 'Kõik B1 teemad',
    },
  },
};

/** Text under the level test: how the test works, how the level is scored, what the levels mean and where to go next. */
export const levelTestNotes: Record<Lang, NoteSection[]> = {
  ru: [
    {
      h: 'Как устроен тест на уровень эстонского языка',
      p: [
        'Тест состоит из 30 вопросов: 10 на уровень A1, 10 на A2 и 10 на B1. Вопросы идут от простого к сложному, и каждый взят из отдельной темы: на A1 — из 49 тем, на A2 — из 52, на B1 — из 36. При каждом запуске темы и вопросы подбираются заново, поэтому тест можно проходить много раз.',
        'В вопросах есть и грамматика — спряжение глаголов, падежи, прошедшее время, условное наклонение, безличные формы, — и лексика повседневных тем: семья, работа, покупки, здоровье, поездки, общество. Если ответ неизвестен, нажмите «Не знаю»: случайная догадка завышает результат, и тест посоветует не те темы.',
        'Тест бесплатный, без регистрации и занимает около 10–15 минут.',
      ],
    },
    {
      h: 'Как определяется уровень',
      p: [
        'Уровень засчитывается, если правильно отвечено хотя бы на 7 вопросов из 10 (70%). Уровни идут по порядку: A2 засчитывается, только если засчитан A1, а B1 — только если засчитаны A1 и A2. Так случайные верные ответы на сложные вопросы не поднимают результат выше реального.',
      ],
      table: {
        head: ['Результат', 'Что это значит', 'Что делать дальше'],
        rows: [
          ['Начало A1', 'Меньше 7 из 10 на A1', 'Темы A1 по порядку и тест A1'],
          ['A1', 'A1 засчитан, A2 — нет', 'Темы A2 и тест A2'],
          ['A2', 'A1 и A2 засчитаны, B1 — нет', 'Экзамен A2 и темы B1'],
          ['B1', 'Засчитаны все три уровня', 'Тест B1 и экзамен B1'],
        ],
      },
    },
    {
      h: 'Что означают уровни A1, A2 и B1',
      p: [
        'Уровни взяты из общеевропейской шкалы CEFR, по которой в Эстонии проводятся государственные экзамены по эстонскому языку.',
      ],
      list: [
        'A1 — начальный уровень: вы представляетесь, рассказываете о себе и семье, понимаете простые вопросы, числа, время и цены, справляетесь в магазине и кафе.',
        'A2 — базовый уровень: вы общаетесь в привычных ситуациях — на работе, у врача, в банке, в транспорте, рассказываете о прошлом и планах, пишете короткие записки и письма. A2 нужен для статуса долгосрочного резидента и для некоторых должностей.',
        'B1 — средний уровень: вы понимаете главное в разговорах и текстах на знакомые темы, высказываете и обосновываете мнение, пишете связный текст. B1 нужен для гражданства Эстонии и для многих работ в сфере обслуживания и в государственных учреждениях.',
      ],
    },
    {
      h: 'Тест уровня и экзамен Harno',
      p: [
        'Результат теста — это ориентир, а не официальный сертификат. Государственные экзамены на уровни A2, B1, B2 и C1 проводит Harno, и в каждом из них четыре части: письмо, аудирование, чтение и говорение. Этот тест проверяет грамматику и словарный запас, на которых держатся все части экзамена, но письмо и говорение нужно тренировать отдельно.',
        'Если тест показал A2 или B1, посмотрите, как устроен соответствующий экзамен: сколько баллов нужно набрать, как проходит каждая часть и как зарегистрироваться.',
      ],
      pages: [['Как устроен экзамен A2: части, баллы, регистрация', 'exam-a2'], ['Как устроен экзамен B1: части, баллы, регистрация', 'exam-b1']],
    },
    {
      h: 'Что делать после теста',
      p: [
        'В конце теста вы увидите результат по каждому уровню и список тем, в которых были ошибки. Откройте эти темы: в каждой есть упражнения с объяснениями и правило. Когда темы повторены, пройдите полный тест своего уровня — в нём по одному вопросу из каждой темы — и через пару недель снова пройдите тест уровня.',
      ],
      pages: [['Тест A1 по эстонскому языку', 'test'], ['Тест A2 по эстонскому языку', 'test-a2'], ['Тест B1 по эстонскому языку', 'test-b1'], ['Все темы A1, A2 и B1', 'topics']],
    },
  ],
  en: [
    {
      h: 'How the Estonian level test works',
      p: [
        'The test has 30 questions: 10 at A1, 10 at A2 and 10 at B1. They go from easy to hard, and each comes from a different topic: 49 topics at A1, 52 at A2 and 36 at B1. Topics and questions are drawn afresh every time, so you can take the test again and again.',
        'The questions cover grammar — verb endings, cases, the past tense, the conditional, impersonal forms — and the vocabulary of everyday topics: family, work, shopping, health, travel, society. If you don’t know an answer, press “I don’t know”: a lucky guess inflates the result and the test then suggests the wrong topics.',
        'The test is free, needs no sign-up and takes about 10–15 minutes.',
      ],
    },
    {
      h: 'How your level is scored',
      p: [
        'A level counts as passed when you get at least 7 of its 10 questions right (70%). Levels count in order: A2 counts only if A1 is passed, and B1 only if A1 and A2 are. That way lucky answers on hard questions don’t push your result above your real level.',
      ],
      table: {
        head: ['Result', 'What it means', 'What to do next'],
        rows: [
          ['Early A1', 'Fewer than 7 of 10 at A1', 'The A1 topics in order and the A1 test'],
          ['A1', 'A1 passed, A2 not', 'The A2 topics and the A2 test'],
          ['A2', 'A1 and A2 passed, B1 not', 'The A2 exam and the B1 topics'],
          ['B1', 'All three levels passed', 'The B1 test and the B1 exam'],
        ],
      },
    },
    {
      h: 'What A1, A2 and B1 mean',
      p: [
        'The levels come from the Common European Framework of Reference (CEFR), the scale Estonia’s state language exams use.',
      ],
      list: [
        'A1 — beginner: you can introduce yourself, talk about yourself and your family, understand simple questions, numbers, times and prices, and get by in a shop or café.',
        'A2 — elementary: you can handle familiar situations — at work, at the doctor’s, at the bank, on public transport — talk about the past and your plans, and write short notes and letters. A2 is required for long-term resident status and for some jobs.',
        'B1 — intermediate: you understand the main points of conversations and texts on familiar topics, can give and justify an opinion, and write connected text. B1 is required for Estonian citizenship and for many jobs in services and the public sector.',
      ],
    },
    {
      h: 'The level test and the Harno exam',
      p: [
        'The result is a guide, not an official certificate. The state exams at A2, B1, B2 and C1 are run by Harno, and each has four parts: writing, listening, reading and speaking. This test checks the grammar and vocabulary all the parts rest on, but writing and speaking need practice of their own.',
        'If the test puts you at A2 or B1, see how that exam works: the points you need, what happens in each part and how to register.',
      ],
      pages: [['How the A2 exam works: parts, points, registration', 'exam-a2'], ['How the B1 exam works: parts, points, registration', 'exam-b1']],
    },
    {
      h: 'What to do after the test',
      p: [
        'At the end you will see your score at each level and a list of the topics where you made mistakes. Open those topics: each has exercises with explanations and a written-out rule. Once you have gone over them, take the full test for your level — it asks one question from every topic — and take the level test again in a couple of weeks.',
      ],
      pages: [['Estonian A1 test', 'test'], ['Estonian A2 test', 'test-a2'], ['Estonian B1 test', 'test-b1'], ['All A1, A2 and B1 topics', 'topics']],
    },
  ],
  et: [
    {
      h: 'Kuidas eesti keele tasemetest käib',
      p: [
        'Testis on 30 küsimust: 10 A1, 10 A2 ja 10 B1 tasemel. Need lähevad kergemast raskemani ja iga küsimus on eri teemast: A1 tasemel 49 teema, A2 tasemel 52 ja B1 tasemel 36 teema seast. Teemad ja küsimused valitakse iga kord uuesti, nii et testi saab teha mitu korda.',
        'Küsimustes on grammatikat — verbide pööramine, käänded, minevik, tingiv kõneviis, umbisikuline tegumood — ja igapäevaste teemade sõnavara: pere, töö, poes käimine, tervis, reisimine, ühiskond. Kui sa vastust ei tea, vajuta „Ei tea“: juhuslik arvamine tõstab tulemust ja test soovitab siis valesid teemasid.',
        'Test on tasuta, registreerimata ja võtab umbes 10–15 minutit.',
      ],
    },
    {
      h: 'Kuidas tase määratakse',
      p: [
        'Tase loetakse sooritatuks, kui vähemalt 7 küsimust 10-st on õiged (70%). Tasemed lähevad järjest: A2 loetakse ainult siis, kui A1 on sooritatud, ja B1 ainult siis, kui A1 ja A2 on sooritatud. Nii ei tõsta juhuslikud õiged vastused rasketele küsimustele tulemust tegelikust kõrgemale.',
      ],
      table: {
        head: ['Tulemus', 'Mida see tähendab', 'Mida edasi teha'],
        rows: [
          ['A1 algus', 'A1 tasemel alla 7 õige 10-st', 'A1 teemad järjest ja A1 test'],
          ['A1', 'A1 sooritatud, A2 mitte', 'A2 teemad ja A2 test'],
          ['A2', 'A1 ja A2 sooritatud, B1 mitte', 'A2 eksam ja B1 teemad'],
          ['B1', 'Kõik kolm taset sooritatud', 'B1 test ja B1 eksam'],
        ],
      },
    },
    {
      h: 'Mida tähendavad A1, A2 ja B1',
      p: [
        'Tasemed tulevad Euroopa keeleõppe raamdokumendist (CEFR), mille järgi on üles ehitatud ka Eesti riiklikud keeleeksamid.',
      ],
      list: [
        'A1 — algtase: saad end tutvustada, rääkida endast ja perest, mõistad lihtsaid küsimusi, arve, kellaaegu ja hindu ning saad hakkama poes ja kohvikus.',
        'A2 — põhitase: saad hakkama tuttavates olukordades — tööl, arsti juures, pangas, ühistranspordis —, räägid minevikust ja plaanidest ning kirjutad lühikesi teateid ja kirju. A2 on vajalik pikaajalise elaniku staatuse ja mõne ametikoha jaoks.',
        'B1 — kesktase: mõistad tuttavatel teemadel vestluste ja tekstide põhisisu, avaldad ja põhjendad arvamust ning kirjutad seotud teksti. B1 on vajalik Eesti kodakondsuse ja paljude teenindus- ja avaliku sektori ametikohtade jaoks.',
      ],
    },
    {
      h: 'Tasemetest ja Harno eksam',
      p: [
        'Testi tulemus on suunanäitaja, mitte ametlik tunnistus. Riiklikke A2, B1, B2 ja C1 taseme eksameid korraldab Harno ja igas on neli osa: kirjutamine, kuulamine, lugemine ja rääkimine. See test kontrollib grammatikat ja sõnavara, millele kõik eksami osad toetuvad, kuid kirjutamist ja rääkimist tuleb harjutada eraldi.',
        'Kui test näitas A2 või B1 taset, vaata, kuidas see eksam käib: mitu punkti on vaja, mis igas osas toimub ja kuidas registreerida.',
      ],
      pages: [['Kuidas A2 eksam käib: osad, punktid, registreerimine', 'exam-a2'], ['Kuidas B1 eksam käib: osad, punktid, registreerimine', 'exam-b1']],
    },
    {
      h: 'Mida pärast testi teha',
      p: [
        'Lõpus näed tulemust iga taseme kohta ja teemasid, kus tuli vigu. Ava need teemad: igas on harjutused selgitustega ja reegel. Kui teemad on korratud, tee oma taseme täielik test — selles on üks küsimus igast teemast — ja paari nädala pärast tee tasemetest uuesti.',
      ],
      pages: [['Eesti keele A1 test', 'test'], ['Eesti keele A2 test', 'test-a2'], ['Eesti keele B1 test', 'test-b1'], ['Kõik A1, A2 ja B1 teemad', 'topics']],
    },
  ],
};
