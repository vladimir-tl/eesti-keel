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
