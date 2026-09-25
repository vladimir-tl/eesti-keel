import { toEt, fromEt, typeEt, m, ty } from './helpers';
import type { Question } from './questions';

/** 1. Endast ja teistest rääkimine */
export const aboutMe: Question[] = [
  fromEt('sünniaeg', ['дата рождения', 'место рождения', 'возраст', 'гражданство'], ['date of birth', 'place of birth', 'age', 'citizenship'], 0),
  fromEt('sünnikoht', ['место рождения', 'дата рождения', 'адрес', 'страна'], ['place of birth', 'date of birth', 'address', 'country'], 0),
  fromEt('kodakondsus', ['гражданство', 'национальность', 'язык', 'адрес'], ['citizenship', 'nationality', 'language', 'address'], 0),
  fromEt('huvi', ['интерес, увлечение', 'хобби', 'работа', 'мнение'], ['interest', 'hobby', 'work', 'opinion'], 0),
  m('Ma olen ___ Tallinnas. (родился)', 'Ma olen ___ Tallinnas. (born)', ['sündinud', 'sünnib', 'sündima', 'sündis'], 0,
    'sündima → olen sündinud («я родился»).', 'sündima → olen sündinud (“I was born”).'),
  fromEt('Kus sa sündisid?', ['Где ты родился?', 'Когда ты родился?', 'Где ты живёшь?', 'Сколько тебе лет?'], ['Where were you born?', 'When were you born?', 'Where do you live?', 'How old are you?'], 0),
  m('Ma olen Ukraina ___. (гражданин)', 'Ma olen Ukraina ___. (citizen)', ['kodanik', 'kodakondsus', 'kodu', 'rahvus'], 0,
    'kodanik — гражданин.', 'kodanik — citizen.'),
  m('Ma huvitun ___. (музыкой)', 'Ma huvitun ___. (I am interested in music)', ['muusikast', 'muusikat', 'muusika', 'muusikas'], 0,
    'huvituma + -st: muusikast, spordist.', 'huvituma + -st: muusikast, spordist.'),
  fromEt('Mind huvitab sport', ['Меня интересует спорт', 'Я занимаюсь спортом', 'Я люблю смотреть спорт', 'Спорт — моя работа'], ['I am interested in sport', 'I do sport', 'I like watching sport', 'Sport is my job'], 0),
  m('Как сказать «Позвольте представиться»?', 'How do you say “Let me introduce myself”?', ['Ma tahaksin end tutvustada', 'Ma tutvun sind', 'Tutvusta mind', 'Ma olen tutvus'], 0,
    'end tutvustama — представляться.', 'end tutvustama — to introduce oneself.'),
  ty('Напишите: «Я родился в Тарту»', 'Write: “I was born in Tartu”', ['ma olen sündinud tartus', 'olen sündinud tartus', 'ma olen tartus sündinud', 'ma sündisin tartus', 'sündisin tartus'], 'Ma olen sündinud Tartus / Ma sündisin Tartus.', 'Ma olen sündinud Tartus / Ma sündisin Tartus.'),
  fromEt('Ta on sündinud 1990. aastal', ['Он родился в 1990 году', 'Он женился в 1990 году', 'Он переехал в 1990 году', 'Он закончил школу в 1990 году'], ['He was born in 1990', 'He got married in 1990', 'He moved in 1990', 'He finished school in 1990'], 0),
];

/** 2. Haridus */
export const education2: Question[] = [
  fromEt('matemaatika', ['математика', 'физика', 'химия', 'история'], ['mathematics', 'physics', 'chemistry', 'history'], 0),
  fromEt('ajalugu', ['история', 'география', 'литература', 'биология'], ['history', 'geography', 'literature', 'biology'], 0),
  fromEt('bioloogia', ['биология', 'химия', 'физика', 'география'], ['biology', 'chemistry', 'physics', 'geography'], 0),
  fromEt('keemia', ['химия', 'физика', 'биология', 'математика'], ['chemistry', 'physics', 'biology', 'mathematics'], 0),
  typeEt('география', 'geography', ['geograafia']),
  typeEt('физкультура', 'physical education', ['kehaline kasvatus']),
  fromEt('tunniplaan', ['расписание уроков', 'домашнее задание', 'экзамен', 'урок'], ['timetable (lessons)', 'homework', 'exam', 'lesson'], 0),
  fromEt('Mida sa õpid?', ['Что ты изучаешь?', 'Где ты учишься?', 'Когда ты учишься?', 'Кто твой учитель?'], ['What are you studying?', 'Where do you study?', 'When do you study?', 'Who is your teacher?'], 0),
  fromEt('Kus sa õppisid?', ['Где ты учился?', 'Что ты учил?', 'Когда ты учился?', 'С кем ты учился?'], ['Where did you study?', 'What did you study?', 'When did you study?', 'Who did you study with?'], 0),
  m('Ma õppisin kolm ___ ülikoolis. (года)', 'Ma õppisin kolm ___ ülikoolis. (years)', ['aastat', 'aasta', 'aastal', 'aastaid'], 0,
    'После числительных — партитив: kolm aastat.', 'After numerals — partitive: kolm aastat.'),
  m('Ma tahan ___ õppida. (дальше)', 'Ma tahan ___ õppida. (further)', ['edasi', 'tagasi', 'kohe', 'alati'], 0,
    'edasi õppima — «продолжить учёбу».', 'edasi õppima — “to continue studying”.'),
  fromEt('Ma sooritasin eksami', ['Я сдал(а) экзамен', 'Я провалил(а) экзамен', 'Я жду экзамен', 'Я готовлюсь к экзамену'], ['I took / passed the exam', 'I failed the exam', 'I am waiting for the exam', 'I am preparing for the exam'], 0),
];

/** 3. Elukutse, amet ja töö */
export const work2: Question[] = [
  fromEt('programmeerija', ['программист', 'инженер', 'строитель', 'врач'], ['programmer', 'engineer', 'builder', 'doctor'], 0),
  fromEt('ehitaja', ['строитель', 'инженер', 'повар', 'водитель'], ['builder', 'engineer', 'cook', 'driver'], 0),
  fromEt('medõde', ['медсестра', 'врач', 'аптекарь', 'учитель'], ['nurse', 'doctor', 'pharmacist', 'teacher'], 0),
  fromEt('politseinik', ['полицейский', 'пожарный', 'охранник', 'судья'], ['police officer', 'firefighter', 'guard', 'judge'], 0),
  fromEt('ametnik', ['чиновник', 'рабочий', 'директор', 'клиент'], ['official, clerk', 'worker', 'director', 'customer'], 0),
  fromEt('tööaeg', ['рабочее время', 'выходной', 'зарплата', 'отпуск'], ['working hours', 'day off', 'salary', 'holiday'], 0),
  fromEt('vahetus', ['смена', 'перерыв', 'встреча', 'отпуск'], ['shift', 'break', 'meeting', 'holiday'], 0),
  fromEt('töökogemus', ['опыт работы', 'место работы', 'должность', 'зарплата'], ['work experience', 'workplace', 'position', 'salary'], 0),
  fromEt('ülesanne', ['задача, обязанность', 'вопрос', 'решение', 'ответ'], ['task, duty', 'question', 'solution', 'answer'], 0),
  m('Ma ___ tööd kell kaheksa. (начинаю)', 'Ma ___ tööd kell kaheksa. (I start)', ['alustan', 'alustab', 'alustama', 'alustasid'], 0,
    'alustama: alustan, alustad, alustab.', 'alustama: alustan, alustad, alustab.'),
  m('Mul on kolm aastat ___. (опыт работы)', 'Mul on kolm aastat ___. (work experience)', ['töökogemust', 'töökogemus', 'töökogemuses', 'töökogemusega'], 0,
    'Партитив после числа: kolm aastat töökogemust.', 'Partitive after a number: kolm aastat töökogemust.'),
  fromEt('Ma töötasin varem müüjana', ['Раньше я работал(а) продавцом', 'Сейчас я работаю продавцом', 'Я буду работать продавцом', 'Я ищу работу продавца'], ['I used to work as a shop assistant', 'I now work as a shop assistant', 'I will work as a shop assistant', 'I am looking for a job as a shop assistant'], 0),
];

/** 4. Teenindus */
export const services: Question[] = [
  fromEt('juuksur', ['парикмахер', 'мастер', 'портной', 'продавец'], ['hairdresser', 'craftsman', 'tailor', 'shop assistant'], 0),
  fromEt('Ma tahaksin juukseid lõigata', ['Я хотел(а) бы подстричься', 'Я хочу покрасить волосы', 'Я иду к врачу', 'Я хочу купить расчёску'], ['I would like a haircut', 'I want to dye my hair', 'I am going to the doctor', 'I want to buy a comb'], 0),
  fromEt('järjekord', ['очередь', 'запись', 'касса', 'время'], ['queue', 'booking', 'till', 'time'], 0),
  fromEt('lahtiolekuajad', ['часы работы', 'выходные', 'расписание', 'график отпусков'], ['opening hours', 'days off', 'timetable', 'holiday schedule'], 0),
  fromEt('avatud', ['открыто', 'закрыто', 'свободно', 'занято'], ['open', 'closed', 'free', 'busy'], 0),
  toEt('закрыто', 'closed', ['suletud', 'avatud', 'vaba', 'tühi'], 0),
  fromEt('katki', ['сломан', 'закрыт', 'новый', 'потерян'], ['broken', 'closed', 'new', 'lost'], 0),
  m('Mu telefon on ___. (сломан)', 'Mu telefon on ___. (broken)', ['katki', 'avatud', 'uus', 'tühi'], 0,
    'katki — сломан.', 'katki — broken.'),
  fromEt('Kas te saate seda parandada?', ['Вы можете это починить?', 'Вы можете это купить?', 'Вы можете это вернуть?', 'Вы можете это упаковать?'], ['Can you repair this?', 'Can you buy this?', 'Can you return this?', 'Can you pack this?'], 0),
  fromEt('Millal te avatud olete?', ['Когда вы открыты?', 'Где вы находитесь?', 'Сколько это стоит?', 'Кто вы?'], ['When are you open?', 'Where are you?', 'How much is it?', 'Who are you?'], 0),
  fromEt('meister', ['мастер', 'клиент', 'начальник', 'продавец'], ['craftsman, repairman', 'customer', 'boss', 'shop assistant'], 0),
  m('Ma seisan ___. (в очереди)', 'Ma seisan ___. (in the queue)', ['järjekorras', 'järjekord', 'järjekorda', 'järjekorrast'], 0,
    'järjekord → järjekorras.', 'järjekord → järjekorras.'),
];

/** 5. Igapäevaelu, kodu ja kodukoht */
export const dailyRoutine: Question[] = [
  fromEt('koristama', ['убирать', 'готовить', 'стирать', 'ремонтировать'], ['to clean, to tidy', 'to cook', 'to wash clothes', 'to repair'], 0),
  fromEt('nõusid pesema', ['мыть посуду', 'стирать бельё', 'убирать дом', 'готовить'], ['to wash dishes', 'to do laundry', 'to clean the house', 'to cook'], 0),
  fromEt('pesu pesema', ['стирать бельё', 'мыть посуду', 'мыть пол', 'гладить'], ['to do laundry', 'to wash dishes', 'to mop the floor', 'to iron'], 0),
  fromEt('süüa tegema', ['готовить еду', 'есть', 'покупать еду', 'мыть посуду'], ['to cook (make food)', 'to eat', 'to buy food', 'to wash dishes'], 0),
  fromEt('külaline', ['гость', 'сосед', 'хозяин', 'родственник'], ['guest', 'neighbour', 'host', 'relative'], 0),
  fromEt('linnaosa', ['район города', 'центр города', 'улица', 'деревня'], ['city district', 'city centre', 'street', 'village'], 0),
  fromEt('Ma tõusen kell seitse', ['Я встаю в семь', 'Я просыпаюсь в семь', 'Я ложусь в семь', 'Я завтракаю в семь'], ['I get up at seven', 'I wake up at seven', 'I go to bed at seven', 'I have breakfast at seven'], 0),
  m('Ma lähen ___ kell kümme. (спать)', 'Ma lähen ___ kell kümme. (to bed)', ['magama', 'magada', 'magan', 'magab'], 0,
    'magama minema — «ложиться спать».', 'magama minema — “to go to bed”.'),
  m('Ma ___ koju kell kuus. (добираюсь)', 'Ma ___ koju kell kuus. (I get home)', ['jõuan', 'jõuab', 'jõudma', 'jõuame'], 0,
    'jõudma: jõuan, jõuad, jõuab.', 'jõudma: jõuan, jõuad, jõuab.'),
  m('Ma lähen sõbrale ___. (в гости)', 'Ma lähen sõbrale ___. (to visit)', ['külla', 'külas', 'külast', 'küla'], 0,
    'külla minema — «идти в гости»; külas olema — «быть в гостях».', 'külla minema — “to go visiting”; külas olema — “to be visiting”.'),
  fromEt('pesu', ['бельё, стирка', 'посуда', 'мебель', 'одежда'], ['laundry', 'dishes', 'furniture', 'clothes'], 0),
  fromEt('Ma koristan korterit igal laupäeval', ['Я убираю квартиру каждую субботу', 'Я сегодня убираю квартиру', 'Я убирал квартиру вчера', 'Я не убираю квартиру'], ['I clean the flat every Saturday', 'I am cleaning the flat today', 'I cleaned the flat yesterday', 'I do not clean the flat'], 0),
];

/** 6. Enesetunne, tervis ja heaolu */
export const body2: Question[] = [
  fromEt('kael', ['шея', 'плечо', 'колено', 'палец'], ['neck', 'shoulder', 'knee', 'finger'], 0),
  fromEt('õlg', ['плечо', 'шея', 'локоть', 'колено'], ['shoulder', 'neck', 'elbow', 'knee'], 0),
  fromEt('põlv', ['колено', 'локоть', 'плечо', 'стопа'], ['knee', 'elbow', 'shoulder', 'foot'], 0),
  fromEt('sõrm', ['палец', 'ладонь', 'ноготь', 'рука'], ['finger', 'palm', 'nail', 'hand'], 0),
  fromEt('nägu', ['лицо', 'голова', 'волосы', 'рот'], ['face', 'head', 'hair', 'mouth'], 0),
  fromEt('Kus valutab?', ['Где болит?', 'Что болит?', 'Как болит?', 'Когда болит?'], ['Where does it hurt?', 'What hurts?', 'How does it hurt?', 'When does it hurt?'], 0),
  m('Mul ___ jalad. (болят ноги)', 'Mul ___ jalad. (my legs hurt)', ['valutavad', 'valutab', 'valutan', 'valutama'], 0,
    'Если болит несколько частей (мн. число) — valutavad.', 'When several parts hurt (plural) — valutavad.'),
  fromEt('Mul on kõrge palavik', ['У меня высокая температура', 'У меня кашель', 'У меня насморк', 'У меня болит горло'], ['I have a high fever', 'I have a cough', 'I have a runny nose', 'I have a sore throat'], 0),
  fromEt('Ma köhin', ['Я кашляю', 'Я чихаю', 'Я болею', 'Я сплю'], ['I am coughing', 'I am sneezing', 'I am ill', 'I am sleeping'], 0),
  fromEt('Mul on pearinglus', ['У меня кружится голова', 'У меня болит голова', 'У меня жар', 'У меня насморк'], ['I feel dizzy', 'I have a headache', 'I have a fever', 'I have a runny nose'], 0),
  fromEt('allergia', ['аллергия', 'простуда', 'кашель', 'боль'], ['allergy', 'a cold', 'cough', 'pain'], 0),
  fromEt('Mul on kurk valus', ['У меня болит горло', 'У меня болит живот', 'У меня болит голова', 'У меня простуда'], ['I have a sore throat', 'I have a stomach ache', 'I have a headache', 'I have a cold'], 0),
];

export const pharmacy: Question[] = [
  fromEt('valuvaigisti', ['обезболивающее', 'антибиотик', 'витамин', 'сироп'], ['painkiller', 'antibiotic', 'vitamin', 'syrup'], 0),
  fromEt('salv', ['мазь', 'таблетка', 'капли', 'сироп'], ['ointment', 'tablet', 'drops', 'syrup'], 0),
  fromEt('tilgad', ['капли', 'мазь', 'таблетки', 'сироп'], ['drops', 'ointment', 'tablets', 'syrup'], 0),
  fromEt('apteeker', ['аптекарь', 'врач', 'медсестра', 'продавец'], ['pharmacist', 'doctor', 'nurse', 'shop assistant'], 0),
  fromEt('kolm korda päevas', ['три раза в день', 'три дня подряд', 'через три дня', 'раз в три дня'], ['three times a day', 'three days in a row', 'in three days', 'once every three days'], 0),
  fromEt('enne sööki', ['до еды', 'после еды', 'во время еды', 'без еды'], ['before a meal', 'after a meal', 'during a meal', 'without food'], 0),
  fromEt('pärast sööki', ['после еды', 'до еды', 'во время еды', 'вместо еды'], ['after a meal', 'before a meal', 'during a meal', 'instead of food'], 0),
  fromEt('Mul on peavalu', ['У меня болит голова', 'У меня болит живот', 'У меня насморк', 'У меня жар'], ['I have a headache', 'I have a stomach ache', 'I have a runny nose', 'I have a fever'], 0),
  fromEt('Mida te soovitate?', ['Что вы посоветуете?', 'Что вы хотите?', 'Что вы делаете?', 'Что у вас болит?'], ['What do you recommend?', 'What would you like?', 'What are you doing?', 'What hurts?'], 0),
  fromEt('vastuvõtt', ['приём (у врача)', 'рецепт', 'лечение', 'лекарство'], ['appointment, reception hours', 'prescription', 'treatment', 'medicine'], 0),
  fromEt('Kas te müüte seda ilma retseptita?', ['Вы продаёте это без рецепта?', 'Вы можете выписать рецепт?', 'У вас есть этот рецепт?', 'Сколько стоит рецепт?'], ['Do you sell this without a prescription?', 'Can you write a prescription?', 'Do you have this recipe?', 'How much is the prescription?'], 0),
  m('Võtke üks tablett ___. (после еды)', 'Võtke üks tablett ___. (after meals)', ['pärast sööki', 'enne sööki', 'söögita', 'söögi ajal'], 0,
    'pärast sööki — «после еды».', 'pärast sööki — “after a meal”.'),
];

/** 7. Vaba aeg, harrastused ja meelelahutus */
export const hobbies2: Question[] = [
  fromEt('harrastus', ['увлечение, хобби', 'работа', 'отпуск', 'спорт'], ['hobby', 'work', 'holiday', 'sport'], 0),
  fromEt('telesaade', ['телепередача', 'фильм', 'сериал', 'новости'], ['TV programme', 'film', 'series', 'news'], 0),
  fromEt('sari', ['сериал', 'фильм', 'передача', 'книга'], ['series', 'film', 'programme', 'book'], 0),
  fromEt('jõusaal', ['тренажёрный зал', 'бассейн', 'стадион', 'спортплощадка'], ['gym', 'swimming pool', 'stadium', 'sports ground'], 0),
  fromEt('lemmikfilm', ['любимый фильм', 'новый фильм', 'старый фильм', 'плохой фильм'], ['favourite film', 'new film', 'old film', 'bad film'], 0),
  m('Ma mängin ___. (на гитаре)', 'Ma mängin ___. (the guitar)', ['kitarri', 'kitarr', 'kitarris', 'kitarriga'], 0,
    'mängima + партитив: kitarri, klaverit.', 'mängima + partitive: kitarri, klaverit.'),
  m('Ma kuulan ___. (музыку)', 'Ma kuulan ___. (music)', ['muusikat', 'muusika', 'muusikas', 'muusikaga'], 0,
    'kuulama + партитив: muusikat.', 'kuulama + partitive: muusikat.'),
  m('Ma vaatan ___. (телевизор)', 'Ma vaatan ___. (TV)', ['telekat', 'telekas', 'teleka', 'telekaga'], 0,
    'vaatama + партитив: telekat.', 'vaatama + partitive: telekat.'),
  fromEt('Ma käin kolm korda nädalas jooksmas', ['Я бегаю три раза в неделю', 'Я бегал три недели', 'Я бегу три часа', 'Я бегаю каждый день'], ['I go running three times a week', 'I ran for three weeks', 'I run for three hours', 'I run every day'], 0),
  fromEt('Mulle ei meeldi õudusfilmid', ['Мне не нравятся фильмы ужасов', 'Я не смотрю фильмы', 'Я люблю фильмы ужасов', 'Мне нравятся комедии'], ['I do not like horror films', 'I do not watch films', 'I like horror films', 'I like comedies'], 0),
  fromEt('kohtuma', ['встречаться', 'знакомиться', 'звонить', 'ждать'], ['to meet', 'to get acquainted', 'to call', 'to wait'], 0),
  fromEt('Ma kohtun sõpradega', ['Я встречаюсь с друзьями', 'Я звоню друзьям', 'Я жду друзей', 'Я иду к друзьям'], ['I am meeting friends', 'I am calling friends', 'I am waiting for friends', 'I am going to friends'], 0),
];

/** 8. Sisseostud, hinnad */
export const quantities: Question[] = [
  fromEt('pudel', ['бутылка', 'банка', 'пачка', 'кусок'], ['bottle', 'jar', 'packet', 'piece'], 0),
  fromEt('purk', ['банка', 'бутылка', 'пачка', 'коробка'], ['jar, tin', 'bottle', 'packet', 'box'], 0),
  fromEt('kilo', ['килограмм', 'литр', 'штука', 'грамм'], ['kilogram', 'litre', 'piece', 'gram'], 0),
  fromEt('tükk', ['штука, кусок', 'пачка', 'пара', 'вес'], ['piece', 'packet', 'pair', 'weight'], 0),
  fromEt('liiter', ['литр', 'килограмм', 'грамм', 'метр'], ['litre', 'kilogram', 'gram', 'metre'], 0),
  fromEt('pool kilo', ['полкило', 'килограмм', 'сто граммов', 'литр'], ['half a kilo', 'a kilo', 'a hundred grams', 'a litre'], 0),
  fromEt('sada grammi', ['сто граммов', 'сто килограммов', 'сто литров', 'сто штук'], ['a hundred grams', 'a hundred kilos', 'a hundred litres', 'a hundred pieces'], 0),
  m('Palun kaks kilo ___. (яблок)', 'Palun kaks kilo ___. (apples)', ['õunu', 'õun', 'õunad', 'õuna'], 0,
    'После меры — партитив мн. числа: kaks kilo õunu.', 'After a measure — plural partitive: kaks kilo õunu.'),
  m('Üks pudel ___. (воды)', 'Üks pudel ___. (of water)', ['vett', 'vesi', 'vees', 'veega'], 0,
    'vesi → vett.', 'vesi → vett.'),
  m('Üks liiter ___. (молока)', 'Üks liiter ___. (of milk)', ['piima', 'piim', 'piimas', 'piimaga'], 0,
    'piim → piima.', 'piim → piima.'),
  fromEt('Kas saab kaardiga maksta?', ['Можно заплатить картой?', 'Где касса?', 'Сколько стоит?', 'Дайте чек'], ['Can I pay by card?', 'Where is the till?', 'How much is it?', 'Give me a receipt'], 0),
  fromEt('kaal', ['вес; весы', 'цена', 'размер', 'количество'], ['weight; scales', 'price', 'size', 'quantity'], 0),
];

/** 9. Söök ja jook */
export const meals: Question[] = [
  fromEt('lõunasöök', ['обед', 'завтрак', 'ужин', 'перекус'], ['lunch', 'breakfast', 'dinner', 'snack'], 0),
  fromEt('õhtusöök', ['ужин', 'обед', 'завтрак', 'десерт'], ['dinner, supper', 'lunch', 'breakfast', 'dessert'], 0),
  fromEt('kana', ['курица', 'свинина', 'говядина', 'рыба'], ['chicken', 'pork', 'beef', 'fish'], 0),
  fromEt('sealiha', ['свинина', 'говядина', 'курица', 'баранина'], ['pork', 'beef', 'chicken', 'lamb'], 0),
  fromEt('veiseliha', ['говядина', 'свинина', 'курица', 'рыба'], ['beef', 'pork', 'chicken', 'fish'], 0),
  fromEt('pirn', ['груша', 'яблоко', 'слива', 'банан'], ['pear', 'apple', 'plum', 'banana'], 0),
  fromEt('maasikas', ['клубника', 'малина', 'черника', 'вишня'], ['strawberry', 'raspberry', 'blueberry', 'cherry'], 0),
  fromEt('lemmiktoit', ['любимая еда', 'новое блюдо', 'вкусный суп', 'горячее блюдо'], ['favourite food', 'a new dish', 'tasty soup', 'a hot dish'], 0),
  m('Mulle ___ see supp. (нравится на вкус)', 'Mulle ___ see supp. (I like the taste of this soup)', ['maitseb', 'maitsen', 'maitsevad', 'maitsma'], 0,
    'Mulle maitseb … — «мне нравится на вкус».', 'Mulle maitseb … — “I like the taste of …”.'),
  m('Me sööme ___ kell kaks. (обед)', 'Me sööme ___ kell kaks. (lunch)', ['lõunat', 'lõuna', 'lõunas', 'lõunast'], 0,
    'sööma + партитив: lõunat.', 'sööma + partitive: lõunat.'),
  fromEt('Ma tahaksin laua kahele broneerida', ['Я хотел(а) бы забронировать столик на двоих', 'Я хочу заказать две порции', 'Я ищу свободный стол', 'Я хочу оплатить счёт'], ['I would like to book a table for two', 'I want to order two portions', 'I am looking for a free table', 'I want to pay the bill'], 0),
  fromEt('Mulle ei maitse kala', ['Мне не нравится рыба на вкус', 'Я не ем рыбу', 'У меня нет рыбы', 'Рыба дорогая'], ['I do not like the taste of fish', 'I do not eat fish', 'I have no fish', 'Fish is expensive'], 0),
];

/** 10. Inimeste suhted ühiskonnas */
export const social: Question[] = [
  fromEt('Kohtume!', ['Давай встретимся!', 'Пока!', 'Знакомься!', 'Подожди!'], ['Let’s meet!', 'Bye!', 'Get to know!', 'Wait!'], 0),
  fromEt('Kas kohtume kell viis?', ['Встретимся в пять?', 'Ты придёшь в пять?', 'Сколько сейчас времени?', 'Где мы встретимся?'], ['Shall we meet at five?', 'Will you come at five?', 'What time is it?', 'Where shall we meet?'], 0),
  fromEt('Mulle sobib', ['Мне подходит', 'Мне нравится', 'Мне нужно', 'Я согласен на всё'], ['That suits me', 'I like it', 'I need it', 'I agree to everything'], 0),
  fromEt('Mulle ei sobi', ['Мне не подходит', 'Мне не нравится', 'Я не знаю', 'Я не хочу'], ['That does not suit me', 'I do not like it', 'I do not know', 'I do not want to'], 0),
  fromEt('Ma jään hiljaks', ['Я опоздаю', 'Я остаюсь дома', 'Я тихий', 'Я молчу'], ['I will be late', 'I am staying at home', 'I am quiet', 'I am silent'], 0),
  fromEt('Ma olen teel', ['Я уже в пути', 'Я стою в пробке', 'Я пью чай', 'Я дома'], ['I am on my way', 'I am stuck in traffic', 'I am drinking tea', 'I am at home'], 0),
  fromEt('Näeme homme!', ['До завтра!', 'Увидимся вчера!', 'Смотри завтра!', 'Спокойной ночи!'], ['See you tomorrow!', 'See you yesterday!', 'Look tomorrow!', 'Good night!'], 0),
  fromEt('Kokku lepitud', ['Договорились', 'Собрались', 'Встретились', 'Разошлись'], ['Agreed, it’s a deal', 'We gathered', 'We met', 'We parted'], 0),
  fromEt('Tere tulemast!', ['Добро пожаловать!', 'До свидания!', 'Здравствуйте!', 'Заходите!'], ['Welcome!', 'Goodbye!', 'Hello!', 'Come in!'], 0),
  fromEt('Vabandage', ['Извините (вежливо)', 'Спасибо', 'Пожалуйста', 'Пока'], ['Excuse me (polite)', 'Thanks', 'Please', 'Bye'], 0),
  fromEt('Head päeva!', ['Хорошего дня!', 'Доброе утро!', 'Спокойной ночи!', 'С днём рождения!'], ['Have a nice day!', 'Good morning!', 'Good night!', 'Happy birthday!'], 0),
  m('Как согласиться на встречу?', 'How do you accept a suggestion to meet?', ['Mulle sobib', 'Mulle ei sobi', 'Ma ei tea', 'Kahjuks ei'], 0,
    'sobima — «подходить»: Mulle sobib.', 'sobima — “to suit”: Mulle sobib.'),
];

/** 11. Keskkond, kohad, loodus, ilm */
export const city: Question[] = [
  fromEt('küla', ['деревня', 'город', 'улица', 'район'], ['village', 'town', 'street', 'district'], 0),
  fromEt('maantee', ['шоссе', 'улица', 'тротуар', 'переулок'], ['highway, main road', 'street', 'pavement', 'lane'], 0),
  fromEt('ristmik', ['перекрёсток', 'мост', 'светофор', 'площадь'], ['crossroads', 'bridge', 'traffic light', 'square'], 0),
  fromEt('sild', ['мост', 'дорога', 'перекрёсток', 'улица'], ['bridge', 'road', 'crossroads', 'street'], 0),
  fromEt('foor', ['светофор', 'знак', 'остановка', 'мост'], ['traffic light', 'sign', 'stop', 'bridge'], 0),
  fromEt('väljak', ['площадь', 'парк', 'рынок', 'двор'], ['square', 'park', 'market', 'yard'], 0),
  fromEt('kõnnitee', ['тротуар', 'дорога', 'мост', 'лестница'], ['pavement, sidewalk', 'road', 'bridge', 'stairs'], 0),
  fromEt('ülekäigurada', ['пешеходный переход', 'перекрёсток', 'светофор', 'тротуар'], ['pedestrian crossing', 'crossroads', 'traffic light', 'pavement'], 0),
  fromEt('ümbruskond', ['окрестности', 'центр', 'район', 'улица'], ['surroundings, neighbourhood', 'centre', 'district', 'street'], 0),
  m('Ma elan ___. (в деревне)', 'Ma elan ___. (in a village)', ['külas', 'küla', 'külast', 'külla'], 0,
    'küla → külas.', 'küla → külas.'),
  m('Ta elab ___. (за городом, на селе)', 'Ta elab ___. (in the countryside)', ['maal', 'maale', 'maalt', 'maa'], 0,
    'maal — «на селе, за городом».', 'maal — “in the countryside”.'),
  m('Ma elan ___. (в центре города)', 'Ma elan ___. (in the city centre)', ['kesklinnas', 'kesklinn', 'kesklinnast', 'kesklinna'], 0,
    'kesklinn → kesklinnas.', 'kesklinn → kesklinnas.'),
];

export const route: Question[] = [
  fromEt('Mine otse kuni foorini', ['Иди прямо до светофора', 'Поверни у светофора', 'Стой у светофора', 'Светофор слева'], ['Go straight to the traffic light', 'Turn at the traffic light', 'Stand at the traffic light', 'The traffic light is on the left'], 0),
  fromEt('Keera esimesest ristmikust paremale', ['На первом перекрёстке поверните направо', 'На первом перекрёстке идите прямо', 'Перекрёсток справа', 'Поверните налево после моста'], ['Turn right at the first crossroads', 'Go straight at the first crossroads', 'The crossroads is on the right', 'Turn left after the bridge'], 0),
  fromEt('Mine üle silla', ['Перейди через мост', 'Иди под мостом', 'Мост слева', 'Остановись у моста'], ['Go across the bridge', 'Go under the bridge', 'The bridge is on the left', 'Stop at the bridge'], 0),
  fromEt('tänava teisel pool', ['на другой стороне улицы', 'на этой стороне улицы', 'вдоль улицы', 'в конце улицы'], ['on the other side of the street', 'on this side of the street', 'along the street', 'at the end of the street'], 0),
  fromEt('Kas see on siit kaugel?', ['Это далеко отсюда?', 'Это здесь?', 'Где это?', 'Сколько идти?'], ['Is it far from here?', 'Is it here?', 'Where is it?', 'How long to walk?'], 0),
  fromEt('Kui kaua sinna jalgsi minna?', ['Сколько времени идти туда пешком?', 'Как туда доехать?', 'Где это?', 'Сколько это стоит?'], ['How long does it take to walk there?', 'How do I get there by transport?', 'Where is it?', 'How much is it?'], 0),
  fromEt('viis minutit jalgsi', ['пять минут пешком', 'пять минут на автобусе', 'через пять минут', 'пять минут назад'], ['five minutes on foot', 'five minutes by bus', 'in five minutes', 'five minutes ago'], 0),
  fromEt('Kuidas ma jõuan muuseumi?', ['Как мне добраться до музея?', 'Где музей?', 'Когда открыт музей?', 'Сколько стоит билет в музей?'], ['How do I get to the museum?', 'Where is the museum?', 'When is the museum open?', 'How much is a museum ticket?'], 0),
  m('Buss peatub ___ juures. (у светофора)', 'Buss peatub ___ juures. (by the traffic light)', ['foori', 'foor', 'foorile', 'foorist'], 0,
    'juures + родительный: foori juures.', 'juures + genitive: foori juures.'),
  fromEt('Vabandust, kus on lähim bussipeatus?', ['Извините, где ближайшая автобусная остановка?', 'Извините, когда придёт автобус?', 'Извините, куда идёт этот автобус?', 'Извините, сколько стоит билет?'], ['Excuse me, where is the nearest bus stop?', 'Excuse me, when does the bus come?', 'Excuse me, where does this bus go?', 'Excuse me, how much is a ticket?'], 0),
  fromEt('üle tee', ['через дорогу', 'по дороге', 'вдоль дороги', 'у дороги'], ['across the road', 'along the road', 'beside the road', 'by the road'], 0),
  fromEt('Ristmikul pöörake vasakule', ['На перекрёстке поверните налево', 'На перекрёстке идите прямо', 'Перекрёсток слева', 'После перекрёстка направо'], ['Turn left at the crossroads', 'Go straight at the crossroads', 'The crossroads is on the left', 'Turn right after the crossroads'], 0),
];

/** 12. Kultuur ja keeled */
export const languages: Question[] = [
  fromEt('emakeel', ['родной язык', 'иностранный язык', 'диалект', 'акцент'], ['mother tongue', 'foreign language', 'dialect', 'accent'], 0),
  fromEt('võõrkeel', ['иностранный язык', 'родной язык', 'язык жестов', 'диалект'], ['foreign language', 'mother tongue', 'sign language', 'dialect'], 0),
  fromEt('sõnaraamat', ['словарь', 'учебник', 'грамматика', 'тетрадь'], ['dictionary', 'textbook', 'grammar', 'notebook'], 0),
  fromEt('tõlkima', ['переводить', 'читать', 'писать', 'говорить'], ['to translate', 'to read', 'to write', 'to speak'], 0),
  fromEt('hääldus', ['произношение', 'написание', 'перевод', 'грамматика'], ['pronunciation', 'spelling', 'translation', 'grammar'], 0),
  fromEt('keelekursus', ['языковой курс', 'урок', 'экзамен', 'словарь'], ['language course', 'lesson', 'exam', 'dictionary'], 0),
  fromEt('Minu emakeel on vene keel', ['Мой родной язык — русский', 'Я говорю по-русски', 'Я изучаю русский', 'Я знаю русский плохо'], ['My mother tongue is Russian', 'I speak Russian', 'I am learning Russian', 'I know Russian badly'], 0),
  fromEt('Ma saan aru, aga räägin vähe', ['Я понимаю, но говорю мало', 'Я не понимаю', 'Я говорю много', 'Я понимаю только по-эстонски'], ['I understand but speak little', 'I do not understand', 'I speak a lot', 'I understand only Estonian'], 0),
  fromEt('Ma loen hästi, aga kirjutan halvasti', ['Я хорошо читаю, но плохо пишу', 'Я плохо читаю, но хорошо пишу', 'Я хорошо говорю', 'Я читаю и пишу хорошо'], ['I read well but write badly', 'I read badly but write well', 'I speak well', 'I read and write well'], 0),
  fromEt('Kuidas see eesti keeles on?', ['Как это по-эстонски?', 'Что это значит?', 'Как это пишется?', 'Кто это сказал?'], ['How do you say this in Estonian?', 'What does this mean?', 'How is this written?', 'Who said this?'], 0),
  m('Ma õpin eesti keelt kaks ___. (года)', 'Ma õpin eesti keelt kaks ___. (years)', ['aastat', 'aasta', 'aastal', 'aastas'], 0,
    'kaks aastat.', 'kaks aastat.'),
  fromEt('Kas te räägite inglise keelt?', ['Вы говорите по-английски?', 'Вы понимаете по-английски?', 'Вы из Англии?', 'Вы учите английский?'], ['Do you speak English?', 'Do you understand English?', 'Are you from England?', 'Are you learning English?'], 0),
];

/** 13. Reisimine, transport, vaatamisväärsused */
export const sightseeing: Question[] = [
  fromEt('vaatamisväärsus', ['достопримечательность', 'путешествие', 'экскурсия', 'музей'], ['sight, attraction', 'journey', 'excursion', 'museum'], 0),
  fromEt('giid', ['гид', 'турист', 'водитель', 'билет'], ['guide', 'tourist', 'driver', 'ticket'], 0),
  fromEt('ekskursioon', ['экскурсия', 'поход', 'поездка', 'прогулка'], ['excursion, tour', 'hike', 'trip', 'walk'], 0),
  fromEt('loss', ['замок, дворец', 'церковь', 'башня', 'мост'], ['castle, palace', 'church', 'tower', 'bridge'], 0),
  fromEt('kirik', ['церковь', 'замок', 'музей', 'башня'], ['church', 'castle', 'museum', 'tower'], 0),
  fromEt('torn', ['башня', 'замок', 'церковь', 'мост'], ['tower', 'castle', 'church', 'bridge'], 0),
  fromEt('täiskasvanu', ['взрослый', 'ребёнок', 'студент', 'пенсионер'], ['adult', 'child', 'student', 'pensioner'], 0),
  m('Kaks ___ Tartusse, palun. (билета)', 'Kaks ___ Tartusse, palun. (tickets)', ['piletit', 'pilet', 'piletid', 'pileti'], 0,
    'kaks + партитив: kaks piletit.', 'kaks + partitive: kaks piletit.'),
  fromEt('Kui kaua ekskursioon kestab?', ['Сколько длится экскурсия?', 'Когда начинается экскурсия?', 'Сколько стоит экскурсия?', 'Где экскурсия?'], ['How long does the tour last?', 'When does the tour start?', 'How much is the tour?', 'Where is the tour?'], 0),
  m('Ma käisin ___ Saaremaal. (в отпуске)', 'Ma käisin ___ Saaremaal. (on holiday)', ['puhkusel', 'puhkus', 'puhkuselt', 'puhkusele'], 0,
    'puhkusel olema / käima — «быть в отпуске».', 'puhkusel olema / käima — “to be on holiday”.'),
  fromEt('Mulle meeldis seal väga', ['Мне там очень понравилось', 'Мне там очень нравится', 'Я там был(а)', 'Я туда поеду'], ['I liked it there very much', 'I like it there very much', 'I was there', 'I will go there'], 0),
  fromEt('turismiinfo', ['туристическая информация', 'билетная касса', 'гостиница', 'карта города'], ['tourist information', 'ticket office', 'hotel', 'city map'], 0),
];
