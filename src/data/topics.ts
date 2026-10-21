import type { L, Level, Question } from './questions';
import { tr } from './questions';
import { greetings, family, professions } from './content-intro';
import { olla, verbs, cases, questions as questionWords } from './content-grammar';
import { numbers, days, time, colors, weather } from './content-core';
import { months, adjectives, body, clothes } from './content-world';
import { frequency, regularity } from './content-frequency';
import { food, shopping, home, transport, hobbies } from './content-daily';
import { plural, partitive, outer, have, modal, negation, past, adjAgree } from './content-grammar2';
import { personal, places, directions, prepos, cafe, doctor, phone, dates } from './content-practice';
import { connectors, pointing, verbs2, feelings, school, nature, holidays, furniture, food2 } from './content-vocab2';
import { kuhu } from './content-kuhu';
import { extra } from './content-extra';
import { context } from './content-a2-context';
import { pictures } from './content-pictures';
import { genitive, pronouns, comitative, translative, comparison, imperative, past2, perfect, conditional, future, verbs3, infinitive, object, kaima, plural2, postpos, complex, timeExpr, numbers2 } from './content-a2-grammar';
import { work, education, housing, bank, official, shopping2, health2, transport2 } from './content-a2-life';
import { aboutMe, education2, work2, services, dailyRoutine, body2, pharmacy, hobbies2, quantities, meals, social, city, route, languages, sightseeing } from './content-a2-harno';
import { entertainment, sportMedia, consumer, onlineShop, foodHabits, restaurant } from './content-b1-free';
import { environment, weatherPlaces, traditions, languageLearning, tripPlanning, onTheRoad } from './content-b1-world';
import { serviceTalk, complaints, homePlace, housekeeping, illness, healthcare } from './content-b1-daily';
import { selfIntro, character, studies, schoolLife, career, workplace } from './content-b1-life';
import { society, opinions, politics, news, economy, law } from './content-b1-society';
import { impersonal, quotative, participles, condPast, government, relative } from './content-b1-grammar';
import { travel, cooking, forecast, family2, describing, leisure, culture, tech, letters, phrases } from './content-a2-world';

export interface Topic {
  id: string;
  title: L;
  desc: L;
  questions: Question[];
}

export interface Group {
  id: string;
  level: Level;
  title: L;
  topics: Topic[];
}

const topic = (id: string, title: L, desc: string, questions: Question[]): Topic => ({
  id,
  title,
  desc,
  questions: [...questions, ...(extra[id] ?? []), ...(context[id] ?? []), ...(pictures[id] ?? [])],
});

const a1Groups: Omit<Group, 'level'>[] = [
  {
    id: 'intro',
    title: tr('Знакомство', 'Getting to know people'),
    topics: [
      topic('greetings', tr('Приветствия и знакомство', 'Greetings and introductions'), 'tere, aitäh, palun, Mis su nimi on?', greetings),
      topic('family', tr('Семья', 'Family'), 'ema, isa, õde, vend, minu, sinu', family),
      topic('professions', tr('Профессии', 'Professions'), 'õpetaja, arst, töötama, õppima', professions),
    ],
  },
  {
    id: 'grammar',
    title: tr('Грамматика', 'Grammar'),
    topics: [
      topic('olla', tr('Глагол olla и местоимения', 'The verb olla and pronouns'), 'mina olen, sina oled, ta ei ole', olla),
      topic('verbs', tr('Базовые глаголы', 'Basic verbs'), 'elama, sööma, jooma, õppima, rääkima', verbs),
      topic('cases', tr('Падежи: где, откуда, куда', 'Cases: where, from where, where to'), 'Tartus, Eestist, koju', cases),
      topic('kuhu', tr('Куда? Kuhu: в, на, домой', 'Where to? Kuhu: into, to, home'), 'Tallinna, Tartusse, kooli, koju', kuhu),
      topic('questions', tr('Вопросы и отрицание', 'Questions and negation'), 'kes, mis, kus, millal, kas, ei', questionWords),
    ],
  },
  {
    id: 'numbers-time',
    title: tr('Числа и время', 'Numbers and time'),
    topics: [
      topic('numbers', tr('Числа: до 10, десятки, сотни', 'Numbers: to 10, tens, hundreds'), 'üks, kümme, kakskümmend, sada', numbers),
      topic('days', tr('Дни недели', 'Days of the week'), 'esmaspäev, teisipäev, täna, homme', days),
      topic('time', tr('Время', 'Time'), 'Mis kell on? pool, veerand, hommik', time),
      topic('months', tr('Месяцы и времена года', 'Months and seasons'), 'jaanuar, kevad, suvi, sügis, talv', months),
    ],
  },
  {
    id: 'frequency',
    title: tr('Как часто', 'How often'),
    topics: [
      topic('frequency', tr('Часто, иногда, редко', 'Often, sometimes, rarely'), 'alati, sageli, mõnikord, harva', frequency),
      topic('regularity', tr('Каждый день, раз в неделю', 'Every day, once a week'), 'iga päev, igal hommikul, kord nädalas', regularity),
    ],
  },
  {
    id: 'around',
    title: tr('Мир вокруг', 'The world around you'),
    topics: [
      topic('colors', tr('Цвета', 'Colours'), 'punane, sinine, roheline, valge', colors),
      topic('weather', tr('Погода', 'Weather'), 'ilm, päike, vihm, lumi, tuul', weather),
      topic('adjectives', tr('Прилагательные', 'Adjectives'), 'suur/väike, uus/vana, hea/halb', adjectives),
      topic('body', tr('Тело и здоровье', 'Body and health'), 'pea, käsi, jalg, haige, valutab', body),
      topic('clothes', tr('Одежда', 'Clothes'), 'särk, püksid, kleit, mantel, müts', clothes),
    ],
  },
  {
    id: 'daily',
    title: tr('Повседневная жизнь', 'Daily life'),
    topics: [
      topic('food', tr('Еда и напитки', 'Food and drink'), 'leib, piim, kohv, Ma tahan…', food),
      topic('shopping', tr('Покупки и цены', 'Shopping and prices'), 'pood, raha, Kui palju see maksab?', shopping),
      topic('home', tr('Дом и город', 'Home and city'), 'korter, tuba, tänav, Kus on…?', home),
      topic('transport', tr('Транспорт', 'Transport'), 'buss, rong, pilet, sõitma', transport),
      topic('hobbies', tr('Хобби', 'Hobbies'), 'lugema, mängima, Mulle meeldib…', hobbies),
    ],
  },
  {
    id: 'grammar2',
    title: tr('Грамматика 2', 'Grammar 2'),
    topics: [
      topic('plural', tr('Множественное число', 'Plural'), 'raamat → raamatud, laps → lapsed', plural),
      topic('partitive', tr('Партитив: кофе, два яблока', 'Partitive: coffee, two apples'), 'kohvi, leiba, kaks õuna', partitive),
      topic('outer', tr('Падежи -l / -lt / -le', 'Cases -l / -lt / -le'), 'turul, turult, turule, mulle', outer),
      topic('have', tr('У меня есть: Mul on…', 'Having: Mul on…'), 'mul on, sul on, tal ei ole', have),
      topic('modal', tr('Хочу, могу, должен', 'Want, can, must'), 'tahan, oskan, saan, pean', modal),
      topic('negation', tr('Отрицание глаголов', 'Negating verbs'), 'ma ei tööta, ta ei ela', negation),
      topic('past', tr('Прошедшее время', 'Past tense'), 'olin, elasin, töötasin', past),
      topic('adj-agree', tr('Согласование прилагательных', 'Adjective agreement'), 'suured majad, suures linnas', adjAgree),
    ],
  },
  {
    id: 'practice',
    title: tr('Жизненные ситуации', 'Real-life situations'),
    topics: [
      topic('personal', tr('О себе: возраст, страна, язык', 'About you: age, country, language'), 'Kui vana sa oled? venelane, vene keel', personal),
      topic('places', tr('Места в городе', 'Places in town'), 'apteek, pank, haigla, jaam', places),
      topic('directions', tr('Как пройти', 'Asking the way'), 'otse, paremale, vasakule', directions),
      topic('prepos', tr('Где находится: peal, all, ees, taga', 'Where is it: peal, all, ees, taga'), 'laua peal, maja taga', prepos),
      topic('cafe', tr('В кафе', 'At a café'), 'Palun üks kohv, Arve, palun', cafe),
      topic('doctor', tr('У врача', 'At the doctor'), 'Mul valutab pea, palavik', doctor),
      topic('phone', tr('Телефон, приглашения, извинения', 'Phone, invitations, apologies'), 'Halloo, Kas tuled kinno?', phone),
      topic('dates', tr('Даты и минуты', 'Dates and minutes'), 'kolmas märts, viis minutit pärast kolme', dates),
    ],
  },
  {
    id: 'vocab',
    title: tr('Ещё слова и фразы', 'More words and phrases'),
    topics: [
      topic('connectors', tr('Союзы и наречия', 'Conjunctions and adverbs'), 'ja, aga, või, sest, väga, ka', connectors),
      topic('pointing', tr('Это, то, вопросы', 'This, that, questions'), 'see, too, need, mitu, milline', pointing),
      topic('verbs2', tr('Глаголы: идти, делать, знать', 'Verbs: go, do, know'), 'lähen, tulen, teen, tean', verbs2),
      topic('feelings', tr('Чувства и состояния', 'Feelings and states'), 'väsinud, mul on nälg', feelings),
      topic('school', tr('Школа и технологии', 'School and technology'), 'õpik, pastakas, arvuti', school),
      topic('nature', tr('Природа и животные', 'Nature and animals'), 'koer, kass, mets, meri', nature),
      topic('holidays', tr('Праздники и спорт', 'Holidays and sport'), 'jõulud, Palju õnne!, jalgpall', holidays),
      topic('furniture', tr('Мебель и комнаты', 'Furniture and rooms'), 'laud, voodi, magamistuba', furniture),
      topic('food2', tr('Продукты и напитки 2', 'Food and drink 2'), 'kartul, porgand, mahl, õlu', food2),
    ],
  },
];


const a2Groups: Omit<Group, 'level'>[] = [
  {
    id: 'a2-grammar',
    title: tr('Грамматика A2', 'A2 grammar'),
    topics: [
      topic('genitive', tr('Родительный падеж: чей?', 'Genitive: whose?'), 'Mari raamat, venna auto, linna keskus', genitive),
      topic('pronouns', tr('Местоимения: mind, sind, teda', 'Pronouns: mind, sind, teda'), 'mind, sind, teda, mulle, nende', pronouns),
      topic('comitative', tr('С кем, без чего: -ga, -ta', 'With, without: -ga, -ta'), 'sõbraga, piimaga, suhkruta', comitative),
      topic('translative', tr('Стать кем-то: -ks, -na', 'Becoming: -ks, -na'), 'arstiks, õpetajana, nädalaks', translative),
      topic('comparison', tr('Сравнение: больше, самый', 'Comparison: bigger, biggest'), 'suurem, parem, kõige ilusam', comparison),
      topic('imperative', tr('Повелительное: tule, ära mine', 'Imperative: tule, ära mine'), 'tule, vaata, ära tee, istuge', imperative),
      topic('past2', tr('Прошедшее время: ещё глаголы', 'Past tense: more verbs'), 'läksin, nägin, tegin, võtsin', past2),
      topic('perfect', tr('Перфект: olen käinud', 'Perfect: olen käinud'), 'olen käinud, on elanud, ei ole näinud', perfect),
      topic('conditional', tr('Вежливо: tahaksin, saaksin', 'Politely: tahaksin, saaksin'), 'tahaksin, saaksin, oleks', conditional),
      topic('future', tr('Будущее и планы', 'Future and plans'), 'homme, hakkan, kavatsen, varsti', future),
      topic('verbs3', tr('Глаголы: võtma, andma, panema', 'Verbs: võtma, andma, panema'), 'võtan, annan, panen, ütlen', verbs3),
      topic('infinitive', tr('Инфинитивы: -ma, -da, -mas, -mast', 'Infinitives: -ma, -da, -mas, -mast'), 'lähen ujuma, meeldib lugeda, käin jooksmas', infinitive),
      topic('object', tr('Дополнение: raamatu или raamatut?', 'The object: raamatu or raamatut?'), 'ostsin raamatu, loen raamatut, ei ostnud raamatut', object),
      topic('kaima', tr('käima, minema, tulema, sõitma', 'käima, minema, tulema, sõitma'), 'käin tööl, lähen tööle, käisin kinos, tule siia', kaima),
      topic('plural2', tr('Множественное число в падежах', 'Plural in the cases'), 'raamatuid, kasse, laste, sõpradega, suurtes linnades', plural2),
      topic('postpos', tr('Послелоги: juurde, juures, vastas', 'Postpositions: juurde, juures, vastas'), 'arsti juurde, koos õega, pärast tööd, kiriku vastas', postpos),
      topic('complex', tr('Сложные предложения: et, kui, kuigi', 'Complex sentences: et, kui, kuigi'), 'et, kas, kui, kuigi, sest', complex),
      topic('time-expr', tr('Когда, через, назад', 'When, in, ago'), 'esmaspäeval, kolme päeva pärast, tagasi', timeExpr),
      topic('numbers2', tr('Годы и большие числа', 'Years and big numbers'), 'kaks tuhat kakskümmend viis, viissada', numbers2),
    ],
  },
  {
    id: 'a2-people',
    title: tr('1. О себе и других', '1. About yourself and others'),
    topics: [
      topic('about-me', tr('Рассказ о себе', 'Talking about yourself'), 'sünnikoht, kodakondsus, huvitun, ma olen sündinud', aboutMe),
      topic('family2', tr('Семья и отношения', 'Family and relationships'), 'tädi, onu, abielus, pulm', family2),
      topic('describing', tr('Внешность и характер', 'Looks and personality'), 'lahke, tark, sale, juuksed', describing),
    ],
  },
  {
    id: 'a2-education',
    title: tr('2. Образование', '2. Education'),
    topics: [
      topic('education', tr('Школа, университет, курсы', 'School, university, courses'), 'ülikool, loeng, õppejõud, hinne', education),
      topic('education2', tr('Предметы, учёба, планы', 'Subjects, studies, plans'), 'matemaatika, tunniplaan, Kus sa õppisid?', education2),
    ],
  },
  {
    id: 'a2-work',
    title: tr('3. Профессия и работа', '3. Profession and work'),
    topics: [
      topic('work', tr('Работа', 'Work'), 'ülemus, kolleeg, palk, koosolek', work),
      topic('work2', tr('Профессии, график, опыт', 'Jobs, hours, experience'), 'programmeerija, tööaeg, töökogemus', work2),
    ],
  },
  {
    id: 'a2-services',
    title: tr('4. Услуги и обслуживание', '4. Services'),
    topics: [
      topic('bank', tr('Банк и почта', 'Bank and post'), 'konto, ülekanne, pakk, saatma', bank),
      topic('official', tr('Документы и учреждения', 'Documents and offices'), 'avaldus, allkiri, isikukood', official),
      topic('services', tr('Парикмахерская, ремонт, очередь', 'Hairdresser, repairs, queue'), 'juuksur, järjekord, katki, avatud', services),
    ],
  },
  {
    id: 'a2-home',
    title: tr('5. Повседневная жизнь и дом', '5. Daily life and home'),
    topics: [
      topic('housing', tr('Жильё и аренда', 'Housing and renting'), 'üürima, korrus, naaber, kolima', housing),
      topic('daily-routine', tr('Мой день и домашние дела', 'My day and housework'), 'koristama, tõusen, jõuan koju', dailyRoutine),
    ],
  },
  {
    id: 'a2-health',
    title: tr('6. Самочувствие и здоровье', '6. Health and wellbeing'),
    topics: [
      topic('health2', tr('Здоровье и болезни', 'Health and illness'), 'nohu, külmetus, tablett, gripp', health2),
      topic('body2', tr('Части тела и симптомы', 'Body parts and symptoms'), 'kael, põlv, Kus valutab?', body2),
      topic('pharmacy', tr('В аптеке', 'At the pharmacy'), 'valuvaigisti, salv, pärast sööki', pharmacy),
    ],
  },
  {
    id: 'a2-leisure',
    title: tr('7. Свободное время и увлечения', '7. Free time and hobbies'),
    topics: [
      topic('leisure', tr('Досуг и культура', 'Leisure and culture'), 'teater, näitus, matk, kutse', leisure),
      topic('hobbies2', tr('Хобби, кино, музыка, спорт', 'Hobbies, films, music, sport'), 'harrastus, sari, jõusaal, kitarr', hobbies2),
      topic('tech', tr('Технологии и медиа', 'Technology and media'), 'nutitelefon, parool, uudised', tech),
    ],
  },
  {
    id: 'a2-shopping',
    title: tr('8. Покупки и цены', '8. Shopping and prices'),
    topics: [
      topic('shopping2', tr('Магазин: размер, скидка', 'Shopping: size, discount'), 'suurus, proovima, allahindlus', shopping2),
      topic('quantities', tr('Количество, вес, оплата', 'Quantities, weight, paying'), 'pudel, liiter, kaks kilo õunu', quantities),
    ],
  },
  {
    id: 'a2-food',
    title: tr('9. Еда и напитки', '9. Food and drink'),
    topics: [
      topic('cooking', tr('Готовим и вкусы', 'Cooking and tastes'), 'keetma, praadima, küpsetama, magus', cooking),
      topic('meals', tr('Приёмы пищи, мясо, фрукты', 'Meals, meat, fruit'), 'lõunasöök, kana, maasikas, maitseb', meals),
    ],
  },
  {
    id: 'a2-relations',
    title: tr('10. Отношения между людьми', '10. Relations between people'),
    topics: [
      topic('social', tr('Договориться о встрече, вежливость', 'Arranging to meet, politeness'), 'Kohtume! Mulle sobib, Kokku lepitud', social),
      topic('letters', tr('Письма и сообщения', 'Letters and messages'), 'Lugupeetud, Lugupidamisega', letters),
      topic('phrases', tr('Мнение, просьбы, согласие', 'Opinions, requests, agreeing'), 'minu arvates, muidugi, võib-olla', phrases),
    ],
  },
  {
    id: 'a2-environment',
    title: tr('11. Место, природа и погода', '11. Places, nature and weather'),
    topics: [
      topic('city', tr('Город и деревня', 'Town and village'), 'küla, ristmik, sild, foor, väljak', city),
      topic('route', tr('Как пройти: маршрут', 'Directions: the route'), 'kuni foorini, üle silla, jalgsi', route),
      topic('forecast', tr('Прогноз погоды', 'Weather forecast'), 'ilmateade, kraadi sooja, pilves', forecast),
    ],
  },
  {
    id: 'a2-culture',
    title: tr('12. Культура и языки', '12. Culture and languages'),
    topics: [
      topic('culture', tr('Эстония: страна и праздники', 'Estonia: country and holidays'), 'pealinn, saar, laulupidu, saun', culture),
      topic('languages', tr('Языки и изучение языка', 'Languages and learning them'), 'emakeel, sõnaraamat, hääldus', languages),
    ],
  },
  {
    id: 'a2-travel',
    title: tr('13. Путешествия и транспорт', '13. Travel and transport'),
    topics: [
      topic('travel', tr('Путешествия и отель', 'Travel and hotel'), 'reis, pagas, broneerima, hotell', travel),
      topic('transport2', tr('Транспорт: расписание', 'Transport: timetable'), 'sõiduplaan, väljub, ümberistumine', transport2),
      topic('sightseeing', tr('Достопримечательности и билеты', 'Sights and tickets'), 'loss, giid, ekskursioon, piletit', sightseeing),
    ],
  },
];

const b1Groups: Omit<Group, 'level'>[] = [
  {
    id: 'b1-grammar',
    title: tr('Грамматика B1', 'B1 grammar', 'B1 grammatika'),
    topics: [
      topic('impersonal', tr('Безличная форма: räägitakse, ehitati', 'Impersonal: räägitakse, ehitati', 'Umbisikuline tegumood: räägitakse, ehitati'), 'räägitakse, müüakse, avati, ei lubata', impersonal),
      topic('quotative', tr('Косвенное наклонение: -vat', 'Quotative: -vat', 'Kaudne kõneviis: -vat'), 'olevat, tulevat, hakkavat, kuuldavasti', quotative),
      topic('participles', tr('Формы -des, -mata, -mast, -tud', 'Forms -des, -mata, -mast, -tud', 'Vormid -des, -mata, -mast, -tud'), 'õppides, ütlemata, jooksmast, praetud', participles),
      topic('cond-past', tr('Условное: kui oleks, oleksin tulnud', 'Conditional: kui oleks, oleksin tulnud', 'Tingiv kõneviis: kui oleks, oleksin tulnud'), 'läheksime, oleks jäänud, kui ma oleksin sina', condPast),
      topic('government', tr('Управление глаголов: kartma, sõltuma', 'Verb government: kartma, sõltuma', 'Verbide rektsioon: kartma, sõltuma'), 'kardan koeri, sõltun sinust, rahul tööga', government),
      topic('relative', tr('Придаточные: kes, mida, kuigi, kuni', 'Subordinate clauses: kes, mida, kuigi, kuni', 'Rindlause ja alamlause: kes, mida, kuigi, kuni'), 'mees, kes · raamat, mida · kuigi, kuni, sest', relative),
    ],
  },
  // The 15 thematic blocks of the Harno B1 handbook (Iseseisev keelekasutaja, ch. 4.2). Blocks without topics stay hidden until they are filled.
  {
    id: 'b1-people',
    title: tr('1. О себе и других', '1. About yourself and others', '1. Endast ja teistest rääkimine'),
    topics: [
      topic('self-intro', tr('Рассказ о себе и семье', 'Telling about yourself and your family', 'Endast ja perest rääkimine'), 'sündinud, kasvasin üles, kolis, elukaaslane, sugulane', selfIntro),
      topic('character', tr('Характер и отношения', 'Personality and relationships', 'Iseloom ja suhted'), 'kannatlik, jonnakas, saan läbi, sarnaneb isale', character),
    ],
  },
  {
    id: 'b1-education',
    title: tr('2. Образование', '2. Education', '2. Haridus'),
    topics: [
      topic('studies', tr('Образование и учёба', 'Education and studies', 'Haridus ja õpingud'), 'eriala, kõrgharidus, lõpetasin ülikooli, stipendium', studies),
      topic('school-life', tr('Школа, курсы, планы', 'School, courses, plans', 'Kool, kursused, plaanid'), 'tunnistus, täiendkoolitus, kursustel, õpetab lastele', schoolLife),
    ],
  },
  {
    id: 'b1-work',
    title: tr('3. Профессия и работа', '3. Profession and work', '3. Elukutse, amet ja töö'),
    topics: [
      topic('career', tr('Карьера и поиск работы', 'Career and job hunting', 'Karjäär ja töö otsimine'), 'töövestlus, motivatsioonikiri, kandideerin, võeti tööle', career),
      topic('workplace', tr('На работе: задачи и проблемы', 'At work: tasks and problems', 'Tööl: ülesanded ja probleemid'), 'ületunnitöö, vastutan, tegelen, osalen, saan hakkama', workplace),
    ],
  },
  {
    id: 'b1-services',
    title: tr('4. Услуги и обслуживание', '4. Services', '4. Teenindus'),
    topics: [
      topic('service-talk', tr('Услуги: звонок, запись, вопросы', 'Services: calls, bookings, questions', 'Teenused: kõned, broneeringud, küsimused'), 'seoses, kohta, saaksin broneerida, tühistage', serviceTalk),
      topic('complaints', tr('Жалоба и решение проблемы', 'Complaints and solving problems', 'Kaebus ja probleemi lahendamine'), 'vigane, vahetage, hüvitis, garantii, rahul', complaints),
    ],
  },
  {
    id: 'b1-home',
    title: tr('5. Повседневная жизнь, дом и родные места', '5. Daily life, home and hometown', '5. Igapäevaelu, kodu ja kodukoht'),
    topics: [
      topic('home-place', tr('Дом, район, родные места', 'Home, neighbourhood, hometown', 'Kodu, naabruskond, kodukoht'), 'eeslinn, eramaja, asub, plussid ja miinused', homePlace),
      topic('housekeeping', tr('Быт и гости', 'Housework and guests', 'Majapidamine ja külalised'), 'tolmuimeja, külla kutsuma, külas käima, remont pooleli', housekeeping),
    ],
  },
  {
    id: 'b1-health',
    title: tr('6. Самочувствие и здоровье', '6. Health and wellbeing', '6. Enesetunne ja tervis'),
    topics: [
      topic('illness', tr('Самочувствие и симптомы', 'Feeling ill and symptoms', 'Enesetunne ja sümptomid'), 'palavik, pearinglus, mul valutab, tunnen end halvasti', illness),
      topic('healthcare', tr('Врач, больница, здоровый образ жизни', 'Doctor, hospital, healthy living', 'Arst, haigla, tervislik eluviis'), 'perearst, saatekiri, haigekassa, kiirabi, loobuma', healthcare),
    ],
  },
  {
    id: 'b1-leisure',
    title: tr('7. Свободное время и развлечения', '7. Free time and entertainment', '7. Vaba aeg ja meelelahutus'),
    topics: [
      topic('entertainment', tr('Развлечения и увлечения', 'Entertainment and interests', 'Meelelahutus ja huvid'), 'etendus, huvitab, harrastan, viitsima, aega veeta', entertainment),
      topic('sport-media', tr('Спорт, медиа, интернет', 'Sport, media, the internet', 'Sport, meedia, internet'), 'võistkond, võitis, viik, jälgima, alla laadima', sportMedia),
    ],
  },
  {
    id: 'b1-shopping',
    title: tr('8. Покупки и цены', '8. Shopping and prices', '8. Sisseostud, hinnad'),
    topics: [
      topic('consumer', tr('Выбор товара и сравнение', 'Choosing and comparing goods', 'Valik ja võrdlemine'), 'soodne, mida kallim seda parem, enne ostmist, tšekk', consumer),
      topic('online-shop', tr('Интернет-магазин и доставка', 'Online shopping and delivery', 'Veebipood ja tarne'), 'ostukorv, pakiautomaat, kuller, järelmaks, tagastada', onlineShop),
    ],
  },
  {
    id: 'b1-food',
    title: tr('9. Еда и напитки', '9. Food and drink', '9. Söök ja jook'),
    topics: [
      topic('food-habits', tr('Питание и вкус', 'Eating habits and taste', 'Toitumine ja maitse'), 'toitev, maitseb, taimetoitlane, kõht tühi', foodHabits),
      topic('restaurant', tr('Кафе и ресторан', 'Café and restaurant', 'Kohvik ja restoran'), 'eelroog, pearoog, soovitaksite, jootraha, arve', restaurant),
    ],
  },
  {
    id: 'b1-society',
    title: tr('10. Отношения людей в обществе', '10. Relations between people in society', '10. Inimeste suhted ühiskonnas'),
    topics: [
      topic('society', tr('Общество и люди', 'Society and people', 'Ühiskond ja inimesed'), 'ühiskond, kogukond, vabatahtlik, sallivus, vähemus', society),
      topic('opinions', tr('Мнение и спор', 'Opinions and arguing', 'Arvamus ja vaidlus'), 'minu arvates, ühelt poolt, ma olen nõus, kahjuks', opinions),
    ],
  },
  {
    id: 'b1-politics',
    title: tr('11. Политика и текущие события', '11. Politics and current events', '11. Poliitika, aktuaalsed sündmused'),
    topics: [
      topic('politics', tr('Политика и выборы', 'Politics and elections', 'Poliitika ja valimised'), 'valimised, valitsus, riigikogu, erakond, hääletama', politics),
      topic('news', tr('Новости и события', 'News and events', 'Uudised ja sündmused'), 'uudised, ajakirjanik, avarii, teatati, kuuldavasti', news),
    ],
  },
  {
    id: 'b1-economy',
    title: tr('12. Экономика и право', '12. Economy and law', '12. Majandus- ja õigussuhted'),
    topics: [
      topic('economy', tr('Деньги и экономика', 'Money and the economy', 'Raha ja majandus'), 'maks, laen, tõusma, säästma, eelarve', economy),
      topic('law', tr('Договоры, права, штрафы', 'Contracts, rights, fines', 'Lepingud, õigused, trahvid'), 'leping, kohustus, trahv, kohus, tagastama', law),
    ],
  },
  {
    id: 'b1-environment',
    title: tr('13. Окружающая среда, места, природа, погода', '13. Environment, places, nature and weather', '13. Keskkond, kohad, loodus, ilm'),
    topics: [
      topic('environment', tr('Окружающая среда', 'The environment', 'Keskkond'), 'saaste, jäätmed, sorteerima, kliimamuutus, taastuvenergia', environment),
      topic('weather-places', tr('Погода и природные явления', 'Weather and natural events', 'Ilm ja loodusnähtused'), 'äike, udu, üleujutus, oodatakse, kohati', weatherPlaces),
    ],
  },
  {
    id: 'b1-culture',
    title: tr('14. Культура и языки, изучение языков', '14. Culture and languages, learning languages', '14. Kultuur ja keeled, keelte õppimine'),
    topics: [
      topic('traditions', tr('Традиции и культура', 'Traditions and culture', 'Kombed ja kultuur'), 'komme, rahvariided, on kombeks, tuntud poolest', traditions),
      topic('language-learning', tr('Изучение языков', 'Learning languages', 'Keelte õppimine'), 'võõrkeel, sõnavara, valdama, sujuvalt, tõlkima', languageLearning),
    ],
  },
  {
    id: 'b1-travel',
    title: tr('15. Путешествия, транспорт, достопримечательности', '15. Travel, transport, sights', '15. Reisimine, transport, vaatamisväärsused'),
    topics: [
      topic('trip-planning', tr('Планирование поездки', 'Planning a trip', 'Reisi planeerimine'), 'marsruut, majutus, viisa, ööbima, edasi-tagasi', tripPlanning),
      topic('on-the-road', tr('В пути: проблемы и достопримечательности', 'On the road: problems and sights', 'Teel: probleemid ja vaatamisväärsused'), 'hilinema, ära jääma, eksima, kaotsi minema, juhatama', onTheRoad),
    ],
  },
];

const withLevel = (level: Level, list: Omit<Group, 'level'>[]): Group[] =>
  list.filter((g) => g.topics.length > 0).map((g) => ({
    ...g,
    level,
    topics: g.topics.map((tp) => ({ ...tp, questions: tp.questions.map((q) => ({ ...q, level })) })),
  }));

/** Course structure: groups in study order (A1, A2, then B1), topics inside each group. */
export const groups: Group[] = [...withLevel('A1', a1Groups), ...withLevel('A2', a2Groups), ...withLevel('B1', b1Groups)];

/** Groups and topics of one level. */
export const groupsOf = (level: Level): Group[] => groups.filter((g) => g.level === level);
export const topicsOf = (level: Level): Topic[] => groupsOf(level).flatMap((g) => g.topics);

/** Flat list in study order — used for numbering and previous/next links. */
export const topics: Topic[] = groups.flatMap((g) => g.topics);
