import type { Lang } from '../i18n/ui';
import type { NoteSection } from './topic-notes';
import { topicsOf } from './topics';

/** Text under the list of all topics: how the topics work, what each level covers and how to study with them. */
const a1 = topicsOf('A1').length;
const a2 = topicsOf('A2').length;
const b1 = topicsOf('B1').length;

export const topicsPageNotes: Record<Lang, NoteSection[]> = {
  ru: [
    {
      h: 'Как устроены упражнения в темах?',
      p: [
        'Каждая тема — это короткая серия упражнений по одной грамматической теме или одной жизненной ситуации. Есть вопросы с выбором ответа и вопросы, где слово нужно написать самому. После каждого ответа сразу показывается объяснение: почему верно именно так и какое правило здесь работает.',
        'Вопросы перемешиваются при каждом запуске, поэтому тему можно проходить несколько раз. Всё бесплатно и без регистрации.',
      ],
    },
    {
      h: 'Какой уровень выбрать?',
      p: [
        'Если вы только начинаете учить эстонский, идите по темам A1 по порядку. Если основы уже есть, но вы не уверены в своём уровне, пройдите тест уровня: он покажет уровень и темы, которые стоит повторить.',
      ],
      pages: [['Тест уровня эстонского языка', 'level-test']],
    },
    {
      h: 'Что входит в уровень A1?',
      p: [
        `${a1} тем начального уровня. Грамматика: глагол olla, спряжение глаголов, падежи «где, откуда, куда», множественное число, партитив, отрицание, прошедшее время. Слова и фразы для знакомства, чисел и времени, семьи, покупок, кафе, врача и дороги по городу.`,
        'Экзамена A1 в Эстонии нет, но на этой базе держится весь экзамен A2. Проверить себя можно тестом A1.',
      ],
      pages: [['Тест A1 по эстонскому языку', 'test']],
    },
    {
      h: 'Что входит в уровень A2?',
      p: [
        `${a2} тем базового уровня. Сначала грамматика A2: родительный падеж, местоимения, -ga и -ta, сравнение, повелительное наклонение, перфект, условное наклонение. Затем темы разговора в том же порядке, что и в программе экзамена A2 Harno: о себе, образование, работа, услуги, дом, здоровье, свободное время, покупки, еда, отношения, природа и погода, культура, путешествия.`,
      ],
      pages: [['Тест A2 по эстонскому языку', 'test-a2'], ['Как устроен экзамен A2', 'exam-a2']],
    },
    {
      h: 'Что входит в уровень B1?',
      p: [
        `${b1} тем среднего уровня. Грамматика B1 и пятнадцать тем экзамена B1 Harno — от рассказа о себе и работы до политики, экономики и права, окружающей среды и изучения языков. Здесь больше слов для того, чтобы высказать мнение, сравнить и объяснить причину.`,
      ],
      pages: [['Тест B1 по эстонскому языку', 'test-b1'], ['Как устроен экзамен B1', 'exam-b1']],
    },
    {
      h: 'Как заниматься по темам?',
      list: [
        'Проходите одну-две темы за раз и возвращайтесь к ним через несколько дней — вопросы будут в другом порядке.',
        'Читайте объяснение даже после верного ответа: в нём часто есть форма или пример, которые пригодятся дальше.',
        'Перед экзаменом пройдите тест своего уровня и повторите темы, где были ошибки.',
      ],
    },
  ],
  en: [
    {
      h: 'How do the topic exercises work?',
      p: [
        'Each topic is a short set of exercises on one grammar point or one everyday situation. Some questions are multiple choice; in others you type the word yourself. Every answer is followed by an explanation: why this form is right and which rule is at work.',
        'The questions are shuffled each time, so you can do a topic more than once. Everything is free and needs no sign-up.',
      ],
    },
    {
      h: 'Which level should I choose?',
      p: [
        'If you are just starting Estonian, go through the A1 topics in order. If you know the basics but are unsure of your level, take the level test: it shows your level and the topics worth reviewing.',
      ],
      pages: [['Estonian level test', 'level-test']],
    },
    {
      h: 'What does A1 cover?',
      p: [
        `${a1} beginner topics. Grammar: the verb olla, verb endings, the cases for “where, from where, where to”, the plural, the partitive, negation, the past tense. Words and phrases for meeting people, numbers and time, family, shopping, the café, the doctor and finding your way around town.`,
        'There is no A1 exam in Estonia, but the whole A2 exam rests on this base. You can check yourself with the A1 test.',
      ],
      pages: [['Estonian A1 test', 'test']],
    },
    {
      h: 'What does A2 cover?',
      p: [
        `${a2} elementary topics. First A2 grammar: the genitive, pronouns, -ga and -ta, comparison, the imperative, the perfect, the conditional. Then the speaking topics in the same order as in Harno’s A2 exam programme: about yourself, education, work, services, home, health, free time, shopping, food, relationships, nature and weather, culture, travel.`,
      ],
      pages: [['Estonian A2 test', 'test-a2'], ['How the A2 exam works', 'exam-a2']],
    },
    {
      h: 'What does B1 cover?',
      p: [
        `${b1} intermediate topics. B1 grammar and the fifteen topics of Harno’s B1 exam — from talking about yourself and work to politics, the economy and law, the environment and learning languages. There are more words for giving an opinion, comparing and explaining a reason.`,
      ],
      pages: [['Estonian B1 test', 'test-b1'], ['How the B1 exam works', 'exam-b1']],
    },
    {
      h: 'How should I study with the topics?',
      list: [
        'Do one or two topics at a time and come back to them a few days later — the questions will be in a different order.',
        'Read the explanation even when you were right: it often has a form or example you will need later.',
        'Before the exam, take the test for your level and review the topics where you made mistakes.',
      ],
    },
  ],
  et: [
    {
      h: 'Kuidas teemade harjutused käivad?',
      p: [
        'Iga teema on lühike harjutuste sari ühe grammatikateema või ühe igapäevase olukorra kohta. On valikvastustega küsimusi ja küsimusi, kus sõna tuleb ise kirjutada. Iga vastuse järel on kohe selgitus: miks on õige just nii ja milline reegel siin kehtib.',
        'Küsimused segatakse iga kord, nii et teemat saab läbida mitu korda. Kõik on tasuta ja registreerimata.',
      ],
    },
    {
      h: 'Millise taseme valida?',
      p: [
        'Kui alles alustad eesti keele õppimist, läbi A1 teemad järjest. Kui põhitõed on olemas, aga oma tasemes pole kindel, tee tasemetest: see näitab taset ja teemasid, mida tasub korrata.',
      ],
      pages: [['Eesti keele tasemetest', 'level-test']],
    },
    {
      h: 'Mis kuulub A1 tasemele?',
      p: [
        `${a1} algtaseme teemat. Grammatika: verb olla, verbide pööramine, kohakäänded „kus, kust, kuhu“, mitmus, osastav, eitus, minevik. Sõnad ja väljendid tutvumiseks, arvude ja aja, pere, ostlemise, kohviku, arsti ja linnas liikumise kohta.`,
        'A1 eksamit Eestis ei ole, aga kogu A2 eksam toetub sellele alusele. Ennast saab kontrollida A1 testiga.',
      ],
      pages: [['Eesti keele A1 test', 'test']],
    },
    {
      h: 'Mis kuulub A2 tasemele?',
      p: [
        `${a2} põhitaseme teemat. Kõigepealt A2 grammatika: omastav, asesõnad, -ga ja -ta, võrdlemine, käskiv kõneviis, täisminevik, tingiv kõneviis. Seejärel suhtlusteemad samas järjekorras nagu Harno A2 eksami kavas: endast, haridus, töö, teenused, kodu, tervis, vaba aeg, ostlemine, toit, suhted, loodus ja ilm, kultuur, reisimine.`,
      ],
      pages: [['Eesti keele A2 test', 'test-a2'], ['Kuidas A2 eksam käib', 'exam-a2']],
    },
    {
      h: 'Mis kuulub B1 tasemele?',
      p: [
        `${b1} kesktaseme teemat. B1 grammatika ja Harno B1 eksami viisteist teemat — endast ja tööst rääkimisest poliitika, majanduse ja õiguse, keskkonna ning keelte õppimiseni. Siin on rohkem sõnu arvamuse avaldamiseks, võrdlemiseks ja põhjuse selgitamiseks.`,
      ],
      pages: [['Eesti keele B1 test', 'test-b1'], ['Kuidas B1 eksam käib', 'exam-b1']],
    },
    {
      h: 'Kuidas teemadega õppida?',
      list: [
        'Läbi korraga üks-kaks teemat ja tule nende juurde mõne päeva pärast tagasi — küsimused on siis teises järjekorras.',
        'Loe selgitust ka siis, kui vastasid õigesti: seal on sageli vorm või näide, mis läheb hiljem vaja.',
        'Enne eksamit tee oma taseme test ja korda teemasid, kus tegid vigu.',
      ],
    },
  ],
};
