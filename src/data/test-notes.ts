import type { Lang } from '../i18n/ui';
import type { Level } from './questions';
import type { NoteSection } from './topic-notes';

/**
 * Text under a level test: what it covers, how it relates to the Harno exam and what to do with the result.
 * The page adds the list of the level's topics after these sections.
 */
export const testNotes: Partial<Record<Level, Record<Lang, { sections: NoteSection[]; topicsTitle: string }>>> = {
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
