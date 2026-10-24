import { toEt, fromEt, typeEt, mc, typed } from './helpers';
import { tr } from './questions';
import type { Question } from './questions';

const m = (ru: string, en: string, options: string[], answer: number, eru: string, een: string): Question =>
  mc(tr(ru, en), options, answer, tr(eru, een));
const ty = (ru: string, en: string, accept: string[], eru: string, een: string): Question =>
  typed(tr(ru, en), accept, tr(eru, een));

export const personal: Question[] = [
  fromEt('Kui vana sa oled?', ['Сколько тебе лет?', 'Где ты живёшь?', 'Как тебя зовут?', 'Откуда ты?'], ['How old are you?', 'Where do you live?', 'What is your name?', 'Where are you from?'], 0),
  m('Как сказать «Мне 25 лет»?', 'How do you say “I am 25 years old”?', ['Ma olen 25-aastane', 'Ma elan 25', 'Mul on 25 nimi', 'Ma olen 25 aasta'], 0,
    'Ma olen 25-aastane (буквально «я 25-летний»).', 'Ma olen 25-aastane (literally “I am 25-year-old”).'),
  toEt('русский (человек)', 'Russian (person)', ['venelane', 'eestlane', 'soomlane', 'sakslane'], 0),
  typeEt('финн', 'Finn', ['soomlane']),
  typeEt('немец', 'German (person)', ['sakslane']),
  fromEt('Ukraina', ['Украина', 'Россия', 'Латвия', 'Литва'], ['Ukraine', 'Russia', 'Latvia', 'Lithuania'], 0),
  toEt('Россия', 'Russia', ['Venemaa', 'Soome', 'Läti', 'Rootsi'], 0),
  fromEt('Soome', ['Финляндия', 'Швеция', 'Германия', 'Латвия'], ['Finland', 'Sweden', 'Germany', 'Latvia'], 0),
  m('Ma räägin ___. (по-русски)', 'Ma räägin ___. (Russian)', ['vene keelt', 'vene keel', 'venelane', 'Venemaa'], 0,
    'Язык: vene keel (русский), inglise keel (английский), soome keel, eesti keel. Ma räägin vene keelt.', 'Language: vene keel (Russian), inglise keel (English), soome keel, eesti keel. Ma räägin vene keelt.'),
  typeEt('английский язык', 'English language', ['inglise keel']),
  fromEt('telefoninumber', ['номер телефона', 'адрес', 'фамилия', 'возраст'], ['phone number', 'address', 'surname', 'age'], 0),
  fromEt('aadress', ['адрес', 'имя', 'страна', 'профессия'], ['address', 'first name', 'country', 'profession'], 0),
  typeEt('фамилия', 'surname', ['perekonnanimi']),
  m('Какая буква есть в эстонском, но её нет в финском и шведском?', 'Which letter exists in Estonian but not in Finnish or Swedish?', ['õ', 'ä', 'ö', 'ü'], 0,
    'Õ — особая эстонская гласная. Ä, ö встречаются и в финском, ü — в немецком.', 'Õ is a distinctively Estonian vowel. Ä, ö also occur in Finnish, ü in German.'),
];

export const places: Question[] = [
  fromEt('apteek', ['аптека', 'больница', 'банк', 'магазин'], ['pharmacy', 'hospital', 'bank', 'shop'], 0),
  toEt('больница', 'hospital', ['haigla', 'apteek', 'kool', 'pank'], 0),
  typeEt('банк', 'bank', ['pank']),
  typeEt('почта', 'post office', ['postkontor', 'post']),
  fromEt('raamatukogu', ['библиотека', 'книжный магазин', 'школа', 'музей'], ['library', 'bookshop', 'school', 'museum'], 0),
  fromEt('kohvik', ['кафе', 'ресторан', 'магазин', 'парк'], ['café', 'restaurant', 'shop', 'park'], 0),
  toEt('вокзал, станция', 'station', ['jaam', 'turg', 'kino', 'park'], 0),
  typeEt('рынок', 'market', ['turg']),
  typeEt('кино', 'cinema', ['kino']),
  fromEt('lennujaam', ['аэропорт', 'вокзал', 'порт', 'остановка'], ['airport', 'railway station', 'port', 'bus stop'], 0),
  fromEt('muuseum', ['музей', 'театр', 'кино', 'библиотека'], ['museum', 'theatre', 'cinema', 'library'], 0),
  m('Где купить лекарство?', 'Where do you buy medicine?', ['apteegis', 'raamatukogus', 'kinos', 'pangas'], 0,
    'apteek → apteegis («в аптеке»).', 'apteek → apteegis (“at the pharmacy”).'),
  m('Ma lähen ___. (в банк)', 'Ma lähen ___. (to the bank)', ['panka', 'pangas', 'pangast', 'pank'], 0,
    'pank → panka («в банк»), pangas («в банке»).', 'pank → panka (“to the bank”), pangas (“in the bank”).'),
];

export const directions: Question[] = [
  fromEt('otse', ['прямо', 'налево', 'направо', 'назад'], ['straight', 'left', 'right', 'back'], 0),
  toEt('направо', 'to the right', ['paremale', 'vasakule', 'otse', 'tagasi'], 0),
  typeEt('налево', 'to the left', ['vasakule']),
  fromEt('paremal', ['справа', 'слева', 'прямо', 'близко'], ['on the right', 'on the left', 'straight', 'near'], 0),
  fromEt('vasakul', ['слева', 'справа', 'прямо', 'далеко'], ['on the left', 'on the right', 'straight', 'far'], 0),
  fromEt('lähedal', ['близко', 'далеко', 'здесь', 'там'], ['near', 'far', 'here', 'there'], 0),
  typeEt('далеко', 'far', ['kaugel']),
  m('Как спросить «Извините, где аптека?»', 'How do you ask “Excuse me, where is the pharmacy?”', ['Vabandust, kus on apteek?', 'Vabandust, kes on apteek?', 'Vabandust, mis on apteek?', 'Vabandust, kui palju apteek?'], 0,
    'Kus on …? — «Где …?»', 'Kus on …? — “Where is …?”'),
  fromEt('Mine otse', ['Идите прямо', 'Поверните направо', 'Стойте здесь', 'Идите домой'], ['Go straight', 'Turn right', 'Stand here', 'Go home'], 0),
  fromEt('Keera paremale', ['Поверните направо', 'Поверните налево', 'Идите прямо', 'Идите назад'], ['Turn right', 'Turn left', 'Go straight', 'Go back'], 0),
  m('Ты спрашиваешь дорогу. Ответ «Она слева» —', 'You ask the way. The answer “It is on the left” is', ['See on vasakul', 'See on paremal', 'See on otse', 'See on kaugel'], 0,
    'vasakul — «слева», paremal — «справа».', 'vasakul — “on the left”, paremal — “on the right”.'),
  fromEt('Kuidas ma jõuan jaama?', ['Как мне добраться до вокзала?', 'Где вокзал?', 'Когда поезд?', 'Сколько стоит билет?'], ['How do I get to the station?', 'Where is the station?', 'When is the train?', 'How much is the ticket?'], 0),
];

export const prepos: Question[] = [
  m('Raamat on laua ___. (на столе)', 'Raamat on laua ___. (on the table)', ['peal', 'all', 'ees', 'taga'], 0,
    'Послелоги ставятся после слова в родительном падеже: laua peal — «на столе».', 'Postpositions follow a genitive noun: laua peal — “on the table”.'),
  m('Kass on laua ___. (под столом)', 'Kass on laua ___. (under the table)', ['peal', 'all', 'ees', 'kõrval'], 1,
    'laua all — «под столом».', 'laua all — “under the table”.'),
  m('Auto on maja ___. (перед домом)', 'Auto on maja ___. (in front of the house)', ['ees', 'taga', 'all', 'sees'], 0,
    'maja ees — «перед домом».', 'maja ees — “in front of the house”.'),
  m('Park on maja ___. (позади дома)', 'Park on maja ___. (behind the house)', ['ees', 'taga', 'peal', 'vahel'], 1,
    'maja taga — «за домом».', 'maja taga — “behind the house”.'),
  m('Pood on panga ___. (рядом с банком)', 'Pood on panga ___. (next to the bank)', ['all', 'peal', 'kõrval', 'taga'], 2,
    'panga kõrval — «рядом с банком».', 'panga kõrval — “next to the bank”.'),
  m('Kool on poe ja panga ___. (между)', 'Kool on poe ja panga ___. (between)', ['vahel', 'peal', 'ees', 'all'], 0,
    'X ja Y vahel — «между X и Y».', 'X ja Y vahel — “between X and Y”.'),
  fromEt('sees', ['внутри', 'снаружи', 'над', 'под'], ['inside', 'outside', 'above', 'under'], 0),
  fromEt('ees', ['перед', 'за', 'на', 'между'], ['in front of', 'behind', 'on', 'between'], 0),
  typeEt('под', 'under', ['all']),
  typeEt('на (поверх)', 'on (top of)', ['peal']),
  ty('Напишите: «на столе» (2 слова, послелог)', 'Write: “on the table” (2 words, postposition)', ['laua peal', 'laual'], 'laua peal (или laual).', 'laua peal (or laual).'),
  m('Raamat on ___. (в сумке)', 'The book is ___. (in the bag)', ['koti sees', 'koti peal', 'koti taga', 'kott sees'], 0,
    'koti sees — «в сумке» (kott → koti).', 'koti sees — “in the bag” (kott → koti).'),
];

export const cafe: Question[] = [
  m('Как заказать чашку кофе?', 'How do you order a coffee?', ['Palun üks kohv', 'Kus on kohv', 'Ma olen kohv', 'Kohv on kallis'], 0,
    'Palun + что хотите: Palun üks kohv.', 'Palun + what you want: Palun üks kohv.'),
  fromEt('Mida te soovite?', ['Что вы желаете?', 'Где вы живёте?', 'Как вас зовут?', 'Сколько это стоит?'], ['What would you like?', 'Where do you live?', 'What is your name?', 'How much is it?'], 0),
  fromEt('Ma soovin teed', ['Я хочу чаю', 'Я пью чай', 'Я не люблю чай', 'У меня нет чая'], ['I would like some tea', 'I drink tea', 'I do not like tea', 'I have no tea'], 0),
  typeEt('счёт (в кафе)', 'the bill', ['arve']),
  fromEt('menüü', ['меню', 'счёт', 'стол', 'официант'], ['menu', 'bill', 'table', 'waiter'], 0),
  fromEt('kelner', ['официант', 'повар', 'продавец', 'водитель'], ['waiter', 'cook', 'shop assistant', 'driver'], 0),
  m('Как попросить счёт?', 'How do you ask for the bill?', ['Arve, palun', 'Menüü, palun', 'Vett, palun', 'Aitäh, arve'], 0,
    'Arve, palun — «Счёт, пожалуйста».', 'Arve, palun — “The bill, please”.'),
  fromEt('Kas ma saan maksta kaardiga?', ['Можно заплатить картой?', 'Где касса?', 'Сколько это стоит?', 'Есть ли сдача?'], ['Can I pay by card?', 'Where is the till?', 'How much is it?', 'Is there change?'], 0),
  m('Что говорят перед едой?', 'What do people say before a meal?', ['Head isu!', 'Head aega!', 'Head ööd!', 'Palju õnne!'], 0,
    'Head isu! — «Приятного аппетита!»', 'Head isu! — “Enjoy your meal!”'),
  typeEt('Ваше здоровье! (тост)', 'Cheers!', ['terviseks']),
  fromEt('Kas siin on vaba laud?', ['Здесь есть свободный стол?', 'Где стол?', 'Это ваш стол?', 'Стол дорогой?'], ['Is there a free table here?', 'Where is the table?', 'Is this your table?', 'Is the table expensive?'], 0),
  m('Ma võtan ___. (Я возьму суп.)', 'Ma võtan ___. (I will take the soup.)', ['supi', 'suppi', 'supp', 'suppa'], 1,
    'võtma + партитив: ma võtan suppi.', 'võtma + partitive: ma võtan suppi.'),
];

export const doctor: Question[] = [
  fromEt('haav', ['рана', 'боль', 'кашель', 'жар'], ['wound', 'pain', 'cough', 'fever'], 0),
  fromEt('ravim', ['лекарство', 'врач', 'болезнь', 'температура'], ['medicine', 'doctor', 'illness', 'temperature'], 0),
  fromEt('palavik', ['жар, температура', 'кашель', 'насморк', 'боль'], ['fever', 'cough', 'runny nose', 'pain'], 0),
  fromEt('köha', ['кашель', 'температура', 'боль', 'аллергия'], ['cough', 'fever', 'pain', 'allergy'], 0),
  m('Как сказать «У меня болит живот»?', 'How do you say “I have a stomach ache”?', ['Mul valutab kõht', 'Mul on kõht', 'Ma olen kõht', 'Ma valutan kõht'], 0,
    'Mul valutab + часть тела: pea (голова), kõht (живот), hammas (зуб), selg (спина).', 'Mul valutab + body part: pea (head), kõht (stomach), hammas (tooth), selg (back).'),
  fromEt('Mul on kurk haige', ['У меня болит горло', 'У меня болит живот', 'У меня температура', 'Я здоров'], ['I have a sore throat', 'I have a stomach ache', 'I have a fever', 'I am healthy'], 0),
  typeEt('У меня болит зуб', 'I have a toothache', ['mul valutab hammas']),
  m('Ma vajan ___. (Мне нужен врач.)', 'Ma vajan ___. (I need a doctor.)', ['arsti', 'arst', 'arstis', 'arstil'], 0,
    'vajama + партитив: ma vajan arsti.', 'vajama + partitive: ma vajan arsti.'),
  fromEt('Kuidas sa ennast tunned?', ['Как ты себя чувствуешь?', 'Как тебя зовут?', 'Где болит?', 'Сколько тебе лет?'], ['How do you feel?', 'What is your name?', 'Where does it hurt?', 'How old are you?'], 0),
  mc(tr('Mul on halb olla. Что это значит?', 'Mul on halb olla. What does it mean?'),
    [tr('Мне плохо', 'I feel unwell', 'I feel unwell'), tr('Мне хорошо', 'I feel good', 'I feel good'), tr('Мне холодно', 'I am cold', 'I am cold'), tr('Я голоден', 'I am hungry', 'I am hungry')], 0,
    tr('halb — плохой; Mul on halb olla — «мне плохо».', 'halb — bad; Mul on halb olla — “I feel bad”.')),
  m('Где болит? — Mul valutab ___. (нога)', 'Where does it hurt? — Mul valutab ___. (leg)', ['jalg', 'jala', 'jalga', 'jalad'], 0,
    'Часть тела после valutab — в именительном: mul valutab jalg.', 'The body part stays nominative after valutab: mul valutab jalg.'),
  typeEt('рецепт (врача)', 'prescription', ['retsept']),
];

export const phone: Question[] = [
  fromEt('Halloo', ['Алло', 'Пока', 'Спасибо', 'Извините'], ['Hello (phone)', 'Bye', 'Thanks', 'Sorry'], 0),
  fromEt('Kes räägib?', ['Кто говорит?', 'Что вы говорите?', 'Где вы?', 'Кто это?'], ['Who is speaking?', 'What are you saying?', 'Where are you?', 'Who is that?'], 0),
  fromEt('Vale number', ['Неправильный номер', 'Новый номер', 'Мой номер', 'Нет связи'], ['Wrong number', 'New number', 'My number', 'No signal'], 0),
  fromEt('Ma ei kuule', ['Я не слышу', 'Я не вижу', 'Я не знаю', 'Я не могу'], ['I cannot hear', 'I cannot see', 'I do not know', 'I cannot'], 0),
  typeEt('Минуточку, пожалуйста', 'One moment, please', ['hetk, palun', 'üks hetk, palun']),
  m('Как попросить позвать Анну?', 'How do you ask to speak to Anna?', ['Kas ma saan rääkida Annaga?', 'Kas ma saan rääkida Anna?', 'Kes on Anna?', 'Kus on Anna?'], 0,
    'rääkida + -ga («с кем?»): Annaga.', 'rääkida + -ga (“with whom?”): Annaga.'),
  m('Приглашение: Kas tuled kinno? Согласие —', 'Invitation: Kas tuled kinno? Accepting —', ['Jah, hea meelega', 'Ei, aitäh', 'Head aega', 'Ma ei tea'], 0,
    'Kas tuled kinno? — «Пойдёшь в кино?»; hea meelega — «с удовольствием».', 'Kas tuled kinno? — “Are you coming to the cinema?”; hea meelega — “gladly”.'),
  m('Отказ: «К сожалению, не могу»', 'Declining: “Unfortunately, I cannot”', ['Kahjuks ma ei saa', 'Hea meelega', 'Palun väga', 'Head aega'], 0,
    'kahjuks — «к сожалению».', 'kahjuks — “unfortunately”.'),
  fromEt('Vabandust, ma hilinen', ['Извините, я опаздываю', 'Извините, я ухожу', 'Извините, я не знаю', 'Извините, я болею'], ['Sorry, I am late', 'Sorry, I am leaving', 'Sorry, I do not know', 'Sorry, I am ill'], 0),
  fromEt('Mitte midagi', ['Ничего страшного', 'Ничего нет', 'Никогда', 'Не за что'], ['Never mind', 'There is nothing', 'Never', 'Not at all'], 0),
  typeEt('звонок (по телефону)', 'phone call', ['kõne', 'telefonikõne']),
  fromEt('sõnum', ['сообщение', 'звонок', 'письмо', 'номер'], ['message', 'call', 'letter', 'number'], 0),
];

export const dates: Question[] = [
  fromEt('esimene', ['первый', 'второй', 'третий', 'десятый'], ['first', 'second', 'third', 'tenth'], 0),
  toEt('второй', 'second', ['teine', 'kolmas', 'esimene', 'neljas'], 0),
  fromEt('kolmas', ['третий', 'четвёртый', 'пятый', 'шестой'], ['third', 'fourth', 'fifth', 'sixth'], 0),
  typeEt('пятый', 'fifth', ['viies']),
  typeEt('десятый', 'tenth', ['kümnes']),
  m('Täna on ___ märts. (3 марта)', 'Täna on ___ märts. (3 March)', ['kolm', 'kolmas', 'kolmes', 'kolme'], 1,
    'Даты — порядковые числительные: kolmas märts, viies mai, kümnes juuni.', 'Dates use ordinals: kolmas märts, viies mai, kümnes juuni.'),
  fromEt('Mis kuupäev täna on?', ['Какое сегодня число?', 'Который час?', 'Какой сегодня день?', 'Какая погода?'], ['What is the date today?', 'What time is it?', 'What day is it?', 'What is the weather?'], 0),
  fromEt('sünnipäev', ['день рождения', 'праздник', 'выходной', 'год'], ['birthday', 'holiday', 'day off', 'year'], 0),
  m('Что говорят на день рождения?', 'What do you say on a birthday?', ['Palju õnne sünnipäevaks!', 'Head aega!', 'Head isu!', 'Head ööd!'], 0,
    'Palju õnne! — «Поздравляю!»', 'Palju õnne! — “Congratulations!”'),
  m('Kell on viis minutit pärast kolme. Сколько времени?', 'Kell on viis minutit pärast kolme. What time is it?', ['3:05', '2:55', '3:50', '5:03'], 0,
    'pärast — «после»: 3:05. enne — «до»: viis minutit enne kolme = 2:55.', 'pärast — “after”: 3:05. enne — “before”: viis minutit enne kolme = 2:55.'),
  m('Kell on kümme minutit enne kaheksat. Сколько времени?', 'Kell on kümme minutit enne kaheksat. What time is it?', ['7:50', '8:10', '8:50', '10:08'], 0,
    'enne kaheksat — «до восьми»: 7:50.', 'enne kaheksat — “before eight”: 7:50.'),
  ty('Напишите: «Сегодня первое мая»', 'Write: “Today is the first of May”', ['täna on esimene mai'], 'Täna on esimene mai.', 'Täna on esimene mai.'),
];
