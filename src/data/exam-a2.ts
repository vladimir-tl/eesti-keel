import type { Lang } from '../i18n/ui';

/**
 * Facts about the official A2 exam, taken from Harno: the A2 consultation booklet (2026),
 * the candidate information sheet and the proficiency-exam page. Checked in September 2026.
 */
export const harnoLinks = {
  exams: 'https://harno.ee/en/examinations-tests-and-studies/examinations-tests-and-certificates/estonian-language-proficiency',
  booklet: 'https://harno.ee/sites/default/files/documents/2026-01/A2_konsultatsioonivihik.pdf',
  eis: 'https://eis.harno.ee/',
};

interface Part {
  name: string;
  time: string;
  points: string;
  tasks: string[];
}

interface ExamPage {
  title: string;
  description: string;
  h1: string;
  lead: string;
  checked: string;
  factsTitle: string;
  facts: [string, string][];
  partsTitle: string;
  partsNote: string;
  colTime: string;
  colPoints: string;
  parts: Part[];
  passTitle: string;
  pass: string[];
  regTitle: string;
  reg: string[];
  dayTitle: string;
  day: string[];
  topicsTitle: string;
  topicsText: string;
  prepTitle: string;
  prep: string[];
  ctaTopics: string;
  ctaTest: string;
  faqTitle: string;
  faq: [string, string][];
  sourcesTitle: string;
  sources: [string, string][];
}

export const examA2: Record<Lang, ExamPage> = {
  ru: {
    title: 'Экзамен A2 по эстонскому языку: формат, баллы, регистрация и подготовка',
    description: 'Как устроен экзамен A2 по эстонскому языку в Harno: письмо, аудирование, чтение и говорение, время и баллы, проходной балл 48 из 80, регистрация в EIS и как готовиться бесплатно.',
    h1: 'Экзамен A2 по эстонскому языку',
    lead: 'Государственный экзамен на уровень A2 (tasemeeksam) проводит Haridus- ja Noorteamet (Harno). Здесь коротко: из чего он состоит, сколько баллов нужно и как подготовиться.',
    checked: 'Сведения проверены по материалам Harno в сентябре 2026 года. Правила могут меняться — перед регистрацией сверьтесь с сайтом Harno.',
    factsTitle: 'Коротко',
    facts: [
      ['Части', 'письмо, аудирование, чтение, говорение'],
      ['Баллы', 'по 20 за каждую часть, всего 80'],
      ['Проходной балл', '48 из 80 (60%), ни одна часть не может быть на 0'],
      ['Письменная часть', '1 ч 50 мин'],
      ['Устная часть', 'в паре с другим сдающим, около 12 минут'],
      ['Стоимость', 'бесплатно'],
    ],
    partsTitle: 'Из чего состоит экзамен',
    partsNote: 'Экзамен начинается с письма, затем аудирование и чтение. Устная часть — в тот же день, через 15–20 минут после письменной.',
    colTime: 'Время',
    colPoints: 'Баллы',
    parts: [
      {
        name: 'Письмо (kirjutamine)',
        time: '30 мин',
        points: '20',
        tasks: [
          'Задание 1: по визитке человека или учреждения написать, кто это, где находится, когда работает и как связаться — не меньше 25 слов.',
          'Задание 2: короткое сообщение, приглашение или описание на заданную тему (например, «Мои выходные») — не меньше 30 слов.',
        ],
      },
      {
        name: 'Аудирование (kuulamine)',
        time: '30 мин',
        points: '20',
        tasks: [
          'Выбрать картинку, число или слово, которые подходят к услышанному.',
          'Отметить, верно или неверно утверждение.',
          'Вписать короткий ответ — слово или число.',
          'Сопоставить услышанное с вариантами ответа.',
        ],
      },
      {
        name: 'Чтение (lugemine)',
        time: '50 мин',
        points: '20',
        tasks: [
          'Выбрать правильный ответ (A, B или C) к коротким предложениям.',
          'Найти, к какому из трёх текстов относится утверждение.',
          'Сопоставить объявления с их объяснениями.',
          'Ответить на вопросы по тексту (A, B или C).',
          'Вставить в пропуски текста подходящие слова.',
        ],
      },
      {
        name: 'Говорение (rääkimine)',
        time: '≈ 12 мин',
        points: '20',
        tasks: [
          'Задание 1 (≈ 6–7 мин): тема, например «Семья и родственники» — рассказ по картинке и ответы на вопросы экзаменатора.',
          'Задание 2 (≈ 5–6 мин): разговор с партнёром по карточке с идеями — расспросить его, например, о еде или повседневных делах.',
          'Ответы записываются, вторую оценку ставят по записи.',
        ],
      },
    ],
    passTitle: 'Сколько баллов нужно',
    pass: [
      'Каждая часть оценивается из 20 баллов, всего 80.',
      'Экзамен сдан, если набрано не меньше 60% — то есть 48 баллов.',
      'Ни одна из четырёх частей не может быть оценена в 0 баллов: 48 баллов с нулём за одну часть — это несдача.',
    ],
    regTitle: 'Регистрация, сроки и результаты',
    reg: [
      'Регистрация — в информационной системе экзаменов EIS (eis.harno.ee). Нужен действующий адрес электронной почты.',
      'Регистрация заканчивается 1-го числа месяца, предшествующего экзамену.',
      'Экзамен бесплатный.',
      'Экзамены проходят раз в квартал в Таллинне, Тарту, Нарве и Йыхви; в Пярну — дважды в год, если набирается группа.',
      'Результаты — не позже чем через 40 дней, в EIS и на eesti.ee. Свидетельство выдаётся только электронное.',
    ],
    dayTitle: 'В день экзамена',
    day: [
      'Экзамен начинается ровно в 10:00, опоздавших не пускают. Лучше прийти за 15–20 минут.',
      'Возьмите действующий документ: ID-карту, паспорт или вид на жительство. Водительские права не подходят.',
      'Нельзя пользоваться словарями, учебниками, телефоном, смарт-часами и наушниками.',
      'Пишите чёрной или синей ручкой, разборчиво; ответы в заданиях с выбором — печатными заглавными буквами (A, B, C).',
    ],
    topicsTitle: 'Темы экзамена',
    topicsText: 'Задания экзамена построены на темах повседневной жизни уровня A2: о себе и семье, учёба и работа, услуги, дом и быт, здоровье, свободное время, покупки, еда, общение, город и природа, культура, поездки. По этим же 13 блокам справочника Harno построены темы A2 на этом сайте.',
    prepTitle: 'Как готовиться',
    prep: [
      'Разберите грамматику A2: падежи, прошедшее время, условное наклонение, käima и minema, дополнение raamatu / raamatut.',
      'Учите слова по темам экзамена и сразу проверяйте себя упражнениями.',
      'Пишите короткие тексты на 25–30 слов: объявление, приглашение, рассказ о выходных.',
      'Слушайте эстонскую речь каждый день: радио, подкасты, объявления в транспорте.',
      'Тренируйте разговор вслух: рассказ о семье, работе и выходных, вопросы собеседнику.',
      'Посмотрите официальный буклет Harno с примерами заданий и ответами.',
    ],
    ctaTopics: 'Темы A2',
    ctaTest: 'Пройти тест A2',
    faqTitle: 'Частые вопросы',
    faq: [
      ['Сколько баллов нужно, чтобы сдать экзамен A2 по эстонскому?', 'Нужно 48 баллов из 80, то есть 60%. Каждая из четырёх частей — письмо, аудирование, чтение и говорение — оценивается из 20 баллов, и ни одна часть не может быть на нуле.'],
      ['Сколько стоит экзамен A2?', 'Экзамен бесплатный.'],
      ['Как записаться на экзамен A2?', 'Через информационную систему экзаменов EIS (eis.harno.ee). Регистрация заканчивается 1-го числа месяца перед экзаменом, нужен действующий адрес электронной почты.'],
      ['Сколько длится экзамен A2?', 'Письменная часть — 1 час 50 минут: письмо 30 минут, аудирование 30 минут, чтение 50 минут. Устная часть — около 12 минут в паре с другим сдающим, в тот же день.'],
      ['Можно ли пользоваться словарём на экзамене?', 'Нет. Словари, учебники, телефон, смарт-часы и наушники запрещены.'],
      ['Когда и где будут результаты?', 'Не позже чем через 40 дней после экзамена — в EIS и на eesti.ee. Свидетельство выдаётся только в электронном виде.'],
      ['Где и как часто проходит экзамен?', 'Раз в квартал в Таллинне, Тарту, Нарве и Йыхви; в Пярну — дважды в год, если набирается группа.'],
      ['Как бесплатно подготовиться к экзамену A2?', 'Разберите темы A2 на этом сайте, пройдите итоговый тест A2 и посмотрите официальный буклет Harno с примерами заданий.'],
    ],
    sourcesTitle: 'Источники',
    sources: [
      ['Harno: экзамены на уровень владения эстонским языком', harnoLinks.exams],
      ['Harno: буклет с примерами заданий A2 (PDF)', harnoLinks.booklet],
      ['EIS — регистрация на экзамен', harnoLinks.eis],
    ],
  },
  en: {
    title: 'Estonian A2 exam: format, points, registration and preparation',
    description: 'How the Harno A2 Estonian exam works: writing, listening, reading and speaking, timing and points, the 48/80 pass mark, registering in EIS and how to prepare for free.',
    h1: 'The Estonian A2 exam',
    lead: 'The state A2 proficiency exam (tasemeeksam) is run by Haridus- ja Noorteamet (Harno). In short: what it consists of, how many points you need and how to prepare.',
    checked: 'Checked against Harno materials in September 2026. Rules can change — check the Harno website before you register.',
    factsTitle: 'At a glance',
    facts: [
      ['Parts', 'writing, listening, reading, speaking'],
      ['Points', '20 per part, 80 in total'],
      ['Pass mark', '48 of 80 (60%), and no part may score 0'],
      ['Written part', '1 h 50 min'],
      ['Speaking', 'in a pair with another candidate, about 12 minutes'],
      ['Cost', 'free'],
    ],
    partsTitle: 'What the exam consists of',
    partsNote: 'The exam starts with writing, then listening and reading. The speaking part is on the same day, 15–20 minutes after the written part.',
    colTime: 'Time',
    colPoints: 'Points',
    parts: [
      {
        name: 'Writing (kirjutamine)',
        time: '30 min',
        points: '20',
        tasks: [
          'Task 1: from a business card of a person or an institution, write who it is, where it is, when it is open and how to get in touch — at least 25 words.',
          'Task 2: a short message, invitation or description on a given topic (e.g. “My weekend”) — at least 30 words.',
        ],
      },
      {
        name: 'Listening (kuulamine)',
        time: '30 min',
        points: '20',
        tasks: [
          'Choose the picture, number or word that matches what you hear.',
          'Mark whether a statement is true or false.',
          'Write a short answer — a word or a number.',
          'Match what you hear with the answer options.',
        ],
      },
      {
        name: 'Reading (lugemine)',
        time: '50 min',
        points: '20',
        tasks: [
          'Choose the right answer (A, B or C) for short sentences.',
          'Find which of three texts a statement belongs to.',
          'Match notices with their explanations.',
          'Answer questions on a text (A, B or C).',
          'Fill the gaps in a text with suitable words.',
        ],
      },
      {
        name: 'Speaking (rääkimine)',
        time: '≈ 12 min',
        points: '20',
        tasks: [
          'Task 1 (≈ 6–7 min): a topic such as “Family and relatives” — talk about a picture and answer the examiner’s questions.',
          'Task 2 (≈ 5–6 min): a conversation with your partner using an idea card — ask them, for example, about food or daily life.',
          'Answers are recorded; the second marking is done from the recording.',
        ],
      },
    ],
    passTitle: 'How many points you need',
    pass: [
      'Each part is marked out of 20 points, 80 in total.',
      'You pass with at least 60% — that is 48 points.',
      'None of the four parts may score 0: 48 points with a zero in one part is a fail.',
    ],
    regTitle: 'Registration, dates and results',
    reg: [
      'Register in the examination information system EIS (eis.harno.ee). A valid e-mail address is required.',
      'Registration closes on the 1st of the month before the exam.',
      'The exam is free.',
      'Exams are held once a quarter in Tallinn, Tartu, Narva and Jõhvi; in Pärnu twice a year if enough people register.',
      'Results come within 40 days, in EIS and on eesti.ee. The certificate is electronic only.',
    ],
    dayTitle: 'On the day',
    day: [
      'The exam starts at exactly 10:00 and latecomers are not admitted. Arrive 15–20 minutes early.',
      'Bring a valid document: ID card, passport or residence permit. A driving licence is not accepted.',
      'Dictionaries, textbooks, phones, smartwatches and headphones are not allowed.',
      'Write legibly in black or blue pen; in multiple-choice tasks use capital letters (A, B, C).',
    ],
    topicsTitle: 'Exam topics',
    topicsText: 'The exam tasks are built on everyday A2 topics: yourself and your family, education and work, services, home and daily life, health, free time, shopping, food, relationships, town and nature, culture, travel. The A2 topics on this site follow the same 13 blocks of the Harno handbook.',
    prepTitle: 'How to prepare',
    prep: [
      'Work through A2 grammar: cases, the past tense, the conditional, käima vs minema, the object raamatu / raamatut.',
      'Learn vocabulary by exam topic and test yourself with exercises right away.',
      'Write short texts of 25–30 words: a notice, an invitation, your weekend.',
      'Listen to Estonian every day: radio, podcasts, announcements on public transport.',
      'Practise speaking out loud: your family, work and weekend, questions to a partner.',
      'Look through the official Harno booklet with sample tasks and answers.',
    ],
    ctaTopics: 'A2 topics',
    ctaTest: 'Take the A2 test',
    faqTitle: 'Frequently asked questions',
    faq: [
      ['How many points do you need to pass the Estonian A2 exam?', '48 points out of 80, that is 60%. Each of the four parts — writing, listening, reading and speaking — is marked out of 20, and no part may score zero.'],
      ['How much does the A2 exam cost?', 'The exam is free.'],
      ['How do you register for the A2 exam?', 'Through the examination information system EIS (eis.harno.ee). Registration closes on the 1st of the month before the exam, and you need a valid e-mail address.'],
      ['How long is the A2 exam?', 'The written part takes 1 hour 50 minutes: writing 30 minutes, listening 30 minutes, reading 50 minutes. The speaking part takes about 12 minutes in a pair with another candidate, on the same day.'],
      ['Can you use a dictionary in the exam?', 'No. Dictionaries, textbooks, phones, smartwatches and headphones are not allowed.'],
      ['When and where do the results come?', 'Within 40 days of the exam, in EIS and on eesti.ee. The certificate is electronic only.'],
      ['Where and how often is the exam held?', 'Once a quarter in Tallinn, Tartu, Narva and Jõhvi; in Pärnu twice a year if enough people register.'],
      ['How can you prepare for the A2 exam for free?', 'Work through the A2 topics on this site, take the final A2 test and look through the official Harno booklet with sample tasks.'],
    ],
    sourcesTitle: 'Sources',
    sources: [
      ['Harno: Estonian language proficiency examinations', harnoLinks.exams],
      ['Harno: A2 sample task booklet (PDF)', harnoLinks.booklet],
      ['EIS — exam registration', harnoLinks.eis],
    ],
  },
  et: {
    title: 'Eesti keele A2 tasemeeksam: osad, punktid, registreerimine ja ettevalmistus',
    description: 'Kuidas käib Harno eesti keele A2 tasemeeksam: kirjutamine, kuulamine, lugemine ja rääkimine, aeg ja punktid, läbimise piir 48/80, registreerimine EIS-is ja tasuta ettevalmistus.',
    h1: 'Eesti keele A2 tasemeeksam',
    lead: 'Riiklikku A2-taseme eesti keele eksamit korraldab Haridus- ja Noorteamet (Harno). Lühidalt: millest eksam koosneb, mitu punkti on vaja ja kuidas valmistuda.',
    checked: 'Kontrollitud Harno materjalide järgi 2026. aasta septembris. Reeglid võivad muutuda — kontrolli enne registreerimist Harno kodulehte.',
    factsTitle: 'Lühidalt',
    facts: [
      ['Osad', 'kirjutamine, kuulamine, lugemine, rääkimine'],
      ['Punktid', 'igas osas 20, kokku 80'],
      ['Läbimise piir', '48 punkti 80-st (60%) ja ükski osa ei tohi olla 0 punkti'],
      ['Kirjalik osa', '1 h 50 min'],
      ['Rääkimine', 'paaris teise eksaminandiga, umbes 12 minutit'],
      ['Hind', 'tasuta'],
    ],
    partsTitle: 'Millest eksam koosneb',
    partsNote: 'Eksam algab kirjutamisega, seejärel tulevad kuulamine ja lugemine. Rääkimisosa on samal päeval, 15–20 minutit pärast kirjalikku osa.',
    colTime: 'Aeg',
    colPoints: 'Punktid',
    parts: [
      {
        name: 'Kirjutamine',
        time: '30 min',
        points: '20',
        tasks: [
          '1. ülesanne: inimese või asutuse visiitkaardi põhjal kirjuta, kes see on, kus see asub, millal on avatud ja kuidas ühendust võtta — vähemalt 25 sõna.',
          '2. ülesanne: lühike teade, kutse või kirjeldus etteantud teemal (nt „Minu nädalavahetus“) — vähemalt 30 sõna.',
        ],
      },
      {
        name: 'Kuulamine',
        time: '30 min',
        points: '20',
        tasks: [
          'Vali pilt, number või sõna, mis vastab kuuldule.',
          'Märgi, kas väide on õige või vale.',
          'Kirjuta lühike vastus — sõna või number.',
          'Seosta kuuldu vastusevariantidega.',
        ],
      },
      {
        name: 'Lugemine',
        time: '50 min',
        points: '20',
        tasks: [
          'Vali lühikestele lausetele õige vastus (A, B või C).',
          'Leia, millise kolmest tekstist juurde väide kuulub.',
          'Seosta teated nende selgitustega.',
          'Vasta küsimustele teksti kohta (A, B või C).',
          'Täida tekstis lüngad sobivate sõnadega.',
        ],
      },
      {
        name: 'Rääkimine',
        time: '≈ 12 min',
        points: '20',
        tasks: [
          '1. ülesanne (≈ 6–7 min): teema, näiteks „Perekond ja sugulased“ — räägi pildist ja vasta eksamineerija küsimustele.',
          '2. ülesanne (≈ 5–6 min): vestlus paarilisega ideekaardi abil — küsi temalt näiteks toidu või igapäevaelu kohta.',
          'Vastused salvestatakse; teine hindamine tehakse salvestuse järgi.',
        ],
      },
    ],
    passTitle: 'Mitu punkti on vaja',
    pass: [
      'Iga osa hinnatakse 20 punktiga, kokku 80.',
      'Eksam on sooritatud, kui saad vähemalt 60% — see on 48 punkti.',
      'Ükski neljast osast ei tohi olla 0 punkti: 48 punkti, aga ühes osas null, ei ole sooritatud.',
    ],
    regTitle: 'Registreerimine, ajad ja tulemused',
    reg: [
      'Registreeru eksamite infosüsteemis EIS (eis.harno.ee). Vaja on kehtivat e-posti aadressi.',
      'Registreerimine lõpeb eksamile eelneva kuu 1. kuupäeval.',
      'Eksam on tasuta.',
      'Eksamid toimuvad kord kvartalis Tallinnas, Tartus, Narvas ja Jõhvis; Pärnus kaks korda aastas, kui soovijaid on piisavalt.',
      'Tulemused tulevad 40 päeva jooksul EIS-i ja eesti.ee portaali. Tunnistus on ainult elektrooniline.',
    ],
    dayTitle: 'Eksamipäeval',
    day: [
      'Eksam algab täpselt kell 10.00 ja hilinejaid sisse ei lasta. Tule kohale 15–20 minutit varem.',
      'Võta kaasa kehtiv dokument: ID-kaart, pass või elamisloakaart. Juhiluba ei sobi.',
      'Sõnaraamatud, õpikud, telefonid, nutikellad ja kõrvaklapid ei ole lubatud.',
      'Kirjuta loetavalt musta või sinise pastakaga; valikvastustega ülesannetes kasuta suuri tähti (A, B, C).',
    ],
    topicsTitle: 'Eksami teemad',
    topicsText: 'Eksamiülesanded põhinevad igapäevastel A2 teemadel: mina ja perekond, haridus ja töö, teenused, kodu ja igapäevaelu, tervis, vaba aeg, ostlemine, toit, suhted, linn ja loodus, kultuur, reisimine. Selle saidi A2 teemad järgivad samu Harno käsiraamatu 13 plokki.',
    prepTitle: 'Kuidas valmistuda',
    prep: [
      'Harjuta A2 grammatikat: käänded, minevik, tingiv kõneviis, käima ja minema, sihitis raamatu / raamatut.',
      'Õpi sõnavara eksami teemade kaupa ja kontrolli end kohe harjutustega.',
      'Kirjuta lühikesi 25–30-sõnalisi tekste: teade, kutse, sinu nädalavahetus.',
      'Kuula eesti keelt iga päev: raadio, taskuhäälingud, teadaanded ühistranspordis.',
      'Harjuta valjusti rääkimist: perekond, töö ja nädalavahetus, küsimused paarilisele.',
      'Tutvu Harno ametliku vihikuga, kus on näidisülesanded ja vastused.',
    ],
    ctaTopics: 'A2 teemad',
    ctaTest: 'Tee A2 test',
    faqTitle: 'Korduma kippuvad küsimused',
    faq: [
      ['Mitu punkti on vaja eesti keele A2 eksami sooritamiseks?', '48 punkti 80-st ehk 60%. Igat neljast osast — kirjutamine, kuulamine, lugemine ja rääkimine — hinnatakse 20 punktiga ja ükski osa ei tohi olla null punkti.'],
      ['Kui palju A2 eksam maksab?', 'Eksam on tasuta.'],
      ['Kuidas A2 eksamile registreeruda?', 'Eksamite infosüsteemis EIS (eis.harno.ee). Registreerimine lõpeb eksamile eelneva kuu 1. kuupäeval ja vaja on kehtivat e-posti aadressi.'],
      ['Kui kaua A2 eksam kestab?', 'Kirjalik osa kestab 1 tund 50 minutit: kirjutamine 30 minutit, kuulamine 30 minutit, lugemine 50 minutit. Rääkimisosa kestab umbes 12 minutit paaris teise eksaminandiga, samal päeval.'],
      ['Kas eksamil võib kasutada sõnaraamatut?', 'Ei. Sõnaraamatud, õpikud, telefonid, nutikellad ja kõrvaklapid ei ole lubatud.'],
      ['Millal ja kuhu tulemused tulevad?', '40 päeva jooksul pärast eksamit EIS-i ja eesti.ee portaali. Tunnistus on ainult elektrooniline.'],
      ['Kus ja kui tihti eksam toimub?', 'Kord kvartalis Tallinnas, Tartus, Narvas ja Jõhvis; Pärnus kaks korda aastas, kui soovijaid on piisavalt.'],
      ['Kuidas valmistuda A2 eksamiks tasuta?', 'Läbi selle saidi A2 teemad, tee A2 lõputest ja tutvu Harno ametliku näidisülesannete vihikuga.'],
    ],
    sourcesTitle: 'Allikad',
    sources: [
      ['Harno: eesti keele tasemeeksamid (inglise keeles)', harnoLinks.exams],
      ['Harno: A2 konsultatsioonivihik (PDF)', harnoLinks.booklet],
      ['EIS — eksamile registreerimine', harnoLinks.eis],
    ],
  },
};
