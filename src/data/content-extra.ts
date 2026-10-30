import { toEt, fromEt, typeEt, typeEtPic, mc, typed } from './helpers';
import { emoji, swatch } from './pictures';
import { tr } from './questions';
import type { Question } from './questions';

const m = (ru: string, en: string, options: string[], answer: number, eru: string, een: string): Question =>
  mc(tr(ru, en), options, answer, tr(eru, een));
const ty = (ru: string, en: string, accept: string[], eru: string, een: string): Question =>
  typed(tr(ru, en), accept, tr(eru, een));

/** Extra questions appended to the original topics, keyed by topic id. */
export const extra: Record<string, Question[]> = {
  greetings: [
    fromEt('Meeldiv tutvuda', ['Приятно познакомиться', 'Добрый день', 'До встречи', 'Как дела?'], ['Nice to meet you', 'Good day', 'See you', 'How are you?'], 0),
    typeEt('До встречи! (неформально)', 'See you! (informal)', ['nägemist']),
    mc(tr('Tere päevast! Когда это говорят?', 'Tere päevast! When is it said?'),
      [tr('Днём', 'In the daytime', 'Päeval'), tr('Утром', 'In the morning', 'Hommikul'), tr('Вечером', 'In the evening', 'Õhtul'), tr('Ночью', 'At night', 'Öösel')], 0,
      tr('Tere hommikust — утром, Tere päevast — днём, Tere õhtust — вечером.', 'Tere hommikust — morning, Tere päevast — daytime, Tere õhtust — evening.')),
  ],
  family: [
    fromEt('mees', ['муж', 'сын', 'брат', 'папа'], ['husband', 'son', 'brother', 'dad'], 0),
    typeEt('сын', 'son', ['poeg']),
    fromEt('sõber', ['друг', 'брат', 'сосед', 'коллега'], ['friend', 'brother', 'neighbour', 'colleague'], 0),
  ],
  professions: [
    fromEt('tuletõrjuja', ['пожарный', 'полицейский', 'водитель', 'охранник'], ['firefighter', 'police officer', 'driver', 'security guard'], 0),
    typeEt('инженер', 'engineer', ['insener']),
    m('Ta ___ arstina. (Он работает врачом.)', 'Ta ___ arstina. (He works as a doctor.)', ['töötab', 'töötan', 'töötad', 'töötavad'], 0,
      'töötama + -na («в качестве»): arstina, õpetajana.', 'töötama + -na (“as”): arstina, õpetajana.'),
  ],
  olla: [
    m('Nemad ___ koolis. (Они в школе.)', 'Nemad ___ koolis. (They are at school.)', ['on', 'olen', 'olete', 'oleme'], 0,
      'nemad on.', 'nemad on.'),
    m('Me ei ___ kodus. (Нас нет дома.)', 'Me ei ___ kodus. (We are not at home.)', ['ole', 'oleme', 'olen', 'on'], 0,
      'После ei — ole: me ei ole.', 'After ei — ole: me ei ole.'),
    ty('Sina ___ õpilane. (Ты ученик.) Впишите глагол.', 'Sina ___ õpilane. (You are a pupil.) Type the verb.', ['oled'], 'sina oled.', 'sina oled.'),
  ],
  cases: [
    m('Ma töötan ___. (в Нарве)', 'Ma töötan ___. (in Narva)', ['Narva', 'Narvas', 'Narvast', 'Narvasse'], 1,
      'Narva → Narvas.', 'Narva → Narvas.'),
    m('Ma tulen ___. (из Тарту)', 'Ma tulen ___. (from Tartu)', ['Tartus', 'Tartust', 'Tartusse', 'Tartu'], 1,
      'Tartu → Tartust.', 'Tartu → Tartust.'),
    m('Ma lähen ___. (в Таллинн)', 'Ma lähen ___. (to Tallinn)', ['Tallinnas', 'Tallinnast', 'Tallinna', 'Tallinn'], 2,
      'Kuhu? Tallinn → Tallinna (или Tallinnasse).', 'Kuhu? Tallinn → Tallinna (or Tallinnasse).'),
    m('Ta tuleb ___. (из Риги)', 'Ta tuleb ___. (from Riga)', ['Riia', 'Riiast', 'Riias', 'Riiga'], 1,
      'Riia → Riiast.', 'Riia → Riiast.'),
    ty('Ma elan ___. (в Эстонии) Форма слова Eesti.', 'Ma elan ___. (in Estonia) Form of Eesti.', ['eestis'], 'Eesti → Eestis.', 'Eesti → Eestis.'),
    ty('Ma lähen ___. (в Тарту)', 'Ma lähen ___. (to Tartu)', ['tartusse'], 'Tartu → Tartusse (куда?).', 'Tartu → Tartusse (where to?).'),
  ],
  questions: [
    fromEt('Kui palju?', ['Сколько? (количество, цена)', 'Когда?', 'Где?', 'Кто?'], ['How much?', 'When?', 'Where?', 'Who?'], 0),
    m('___ sa lähed koju? (Когда ты идёшь домой?)', '___ sa lähed koju? (When are you going home?)', ['Millal', 'Kus', 'Kes', 'Mis'], 0,
      'Millal? — когда?', 'Millal? — when?'),
    typeEt('нет', 'no', ['ei']),
  ],
  verbs: [
    m('Me ___ eesti keelt. (Мы учим эстонский.)', 'Me ___ eesti keelt. (We learn Estonian.)', ['õpin', 'õpid', 'õpib', 'õpime'], 3,
      'õppima: ma õpin, sa õpid, ta õpib, me õpime, te õpite, nad õpivad.', 'õppima: ma õpin, sa õpid, ta õpib, me õpime, te õpite, nad õpivad.'),
    m('Te ___ Tartus. (Вы живёте в Тарту.)', 'Te ___ Tartus. (You live in Tartu.)', ['elan', 'elad', 'elate', 'elavad'], 2,
      'te elate.', 'te elate.'),
    m('Nad ___ liha. (Они едят мясо.)', 'Nad ___ liha. (They eat meat.)', ['söön', 'sööb', 'sööme', 'söövad'], 3,
      'nad söövad.', 'nad söövad.'),
    m('Ta ___ Tallinnas. (Она работает в Таллинне.)', 'Ta ___ Tallinnas. (She works in Tallinn.)', ['töötan', 'töötab', 'töötame', 'töötad'], 1,
      'ta töötab.', 'ta töötab.'),
    ty('Me ___ vett. (Мы пьём воду.) Форма juua.', 'Me ___ vett. (We drink water.) Form of juua.', ['joome'], 'me joome.', 'me joome.'),
    ty('Te ___ eesti keelt. (Вы говорите по-эстонски.) Форма rääkima.', 'Te ___ eesti keelt. (You speak Estonian.) Form of rääkima.', ['räägite'], 'te räägite.', 'te räägite.'),
  ],
  numbers: [
    fromEt('kuusteist', ['16', '6', '60', '26'], ['16', '6', '60', '26'], 0),
    typeEt('шестьдесят', 'sixty', ['kuuskümmend']),
    m('Как по-эстонски 45?', 'How do you say 45 in Estonian?', ['nelikümmend viis', 'neliteist viis', 'viiskümmend neli', 'nelisada viis'], 0,
      'Десятки + единицы: nelikümmend viis.', 'Tens + units: nelikümmend viis.'),
    m('Как по-эстонски 1 000 000?', 'How do you say 1,000,000 in Estonian?', ['miljon', 'tuhat', 'sada', 'miljard'], 0,
      'miljon — 1 000 000, tuhat — 1000, sada — 100.', 'miljon — 1,000,000, tuhat — 1000, sada — 100.'),
    m('Kolm eurot ja viiskümmend senti. Сколько это?', 'Kolm eurot ja viiskümmend senti. How much is it?', ['3,50 €', '35 €', '3,05 €', '53 €'], 0,
      'euro / sent: kolm eurot viiskümmend senti = 3,50.', 'euro / cent: kolm eurot viiskümmend senti = 3.50.'),
    ty('Напишите словом: 6 + 6 = ?', 'Write the answer as a word: 6 + 6 = ?', ['kaksteist'], 'kuus + kuus = kaksteist (12).', 'kuus + kuus = kaksteist (12).'),
  ],
  days: [
    typeEt('выходные (суббота и воскресенье)', 'weekend', ['nädalavahetus']),
    typeEt('завтра утром', 'tomorrow morning', ['homme hommikul']),
    m('Mis päev täna on? — Täna on ___. (суббота)', 'Mis päev täna on? — Täna on ___. (Saturday)', ['laupäev', 'pühapäev', 'reede', 'esmaspäev'], 0,
      'laupäev — суббота, pühapäev — воскресенье.', 'laupäev — Saturday, pühapäev — Sunday.'),
  ],
  time: [
    fromEt('kell', ['часы; время (на часах)', 'день', 'минута', 'утро'], ['clock; o’clock', 'day', 'minute', 'morning'], 0),
    m('Как сказать «10:00 утра»?', 'How do you say “10:00 a.m.”?', ['Kell on kümme hommikul', 'Kell on kümme õhtul', 'Kell on pool kümme', 'Kell on kümme minutit'], 0,
      'hommikul — утром; kümme — десять.', 'hommikul — in the morning; kümme — ten.'),
    typeEt('день (время суток)', 'daytime', ['päev']),
  ],
  months: [
    typeEt('январь', 'January', ['jaanuar']),
    typeEt('октябрь', 'October', ['oktoober']),
    fromEt('mai', ['май', 'март', 'июнь', 'август'], ['May', 'March', 'June', 'August'], 0),
  ],
  frequency: [
    fromEt('tihti', ['часто', 'редко', 'всегда', 'никогда'], ['often', 'rarely', 'always', 'never'], 0),
    fromEt('Ma ei käi kunagi kinos', ['Я никогда не хожу в кино', 'Я часто хожу в кино', 'Я редко хожу в кино', 'Я работаю в кино'], ['I never go to the cinema', 'I often go to the cinema', 'I rarely go to the cinema', 'I work at the cinema'], 0),
    fromEt('Ma käin tihti kinos', ['Я часто хожу в кино', 'Я никогда не хожу в кино', 'Я работаю в кино', 'Я иду в кино'], ['I often go to the cinema', 'I never go to the cinema', 'I work at the cinema', 'I am going to the cinema'], 0),
  ],
  regularity: [
    fromEt('igal pühapäeval', ['каждое воскресенье', 'в это воскресенье', 'в прошлое воскресенье', 'каждую субботу'], ['every Sunday', 'this Sunday', 'last Sunday', 'every Saturday'], 0),
    typeEt('раз в год', 'once a year', ['kord aastas', 'üks kord aastas']),
    fromEt('kord kuus', ['раз в месяц', 'раз в день', 'раз в год', 'раз в неделю'], ['once a month', 'once a day', 'once a year', 'once a week'], 0),
  ],
  colors: [
    typeEtPic(swatch('#f76707'), 'оранжевый', 'orange', ['oranž']),
    typeEtPic(swatch('#7048e8'), 'фиолетовый', 'purple', ['lilla']),
    m('Mis värvi on rohi? (Какого цвета трава?)', 'Mis värvi on rohi? (What colour is grass?)', ['roheline', 'must', 'punane', 'valge'], 0,
      'Mis värvi …? — «Какого цвета …?»', 'Mis värvi …? — “What colour …?”'),
  ],
  weather: [
    fromEt('jahe', ['прохладный', 'жаркий', 'мокрый', 'ветреный'], ['cool', 'hot', 'wet', 'windy'], 0),
    typeEt('мокрый', 'wet', ['märg']),
    m('Как сказать «Сегодня тепло»?', 'How do you say “It is warm today”?', ['Täna on soe', 'Täna on külm', 'Täna sajab lund', 'Täna on pilv'], 0,
      'soe — тёплый; külm — холодный.', 'soe — warm; külm — cold.'),
  ],
  adjectives: [
    typeEt('хороший', 'good', ['hea']),
    typeEt('широкий', 'wide', ['lai']),
    fromEt('kitsas', ['узкий', 'широкий', 'длинный', 'высокий'], ['narrow', 'wide', 'long', 'tall'], 0),
  ],
  body: [
    fromEt('hammas', ['зуб', 'язык', 'губа', 'ухо'], ['tooth', 'tongue', 'lip', 'ear'], 0),
    typeEt('спина', 'back', ['selg']),
    fromEt('süda', ['сердце', 'живот', 'рука', 'голова'], ['heart', 'stomach', 'hand', 'head'], 0),
  ],
  clothes: [
    typeEtPic(emoji('🥾'), 'сапоги', 'boots', ['saapad']),
    fromEt('king', ['ботинок, туфля', 'шапка', 'шарф', 'куртка'], ['shoe', 'hat', 'scarf', 'jacket'], 0),
    fromEt('T-särk', ['футболка', 'рубашка', 'платье', 'юбка'], ['T-shirt', 'shirt', 'dress', 'skirt'], 0),
  ],
  food: [
    typeEtPic(emoji('🧈'), 'масло (сливочное)', 'butter', ['või']),
    fromEt('kohv', ['кофе', 'чай', 'молоко', 'сок'], ['coffee', 'tea', 'milk', 'juice'], 0),
    m('Ma ___ leiba. (Я не ем хлеб.)', 'Ma ___ leiba. (I do not eat bread.)', ['ei söö', 'ei söön', 'ei sööd', 'ei sööb'], 0,
      'ma ei söö.', 'ma ei söö.'),
  ],
  shopping: [
    fromEt('rahakott', ['кошелёк', 'сумка', 'карман', 'чек'], ['wallet', 'bag', 'pocket', 'receipt'], 0),
    typeEtPic(emoji('💳'), 'карта (банковская)', 'card', ['kaart']),
    m('Как сказать «Вот, пожалуйста» (протягивая деньги/товар)?', 'How do you say “Here you are”?', ['Palun', 'Aitäh', 'Vabandust', 'Head aega'], 0,
      'Palun — «пожалуйста / вот, возьмите».', 'Palun — “please / here you are”.'),
  ],
  home: [
    fromEt('trepp', ['лестница', 'лифт', 'дверь', 'стена'], ['stairs', 'lift', 'door', 'wall'], 0),
    typeEt('крыша', 'roof', ['katus']),
    typeEt('стена', 'wall', ['sein']),
  ],
  transport: [
    fromEt('praam', ['паром', 'лодка', 'поезд', 'самолёт'], ['ferry', 'boat', 'train', 'plane'], 0),
    typeEtPic(emoji('🚕'), 'такси', 'taxi', ['takso']),
    m('Nad ___ trammiga tööle. (ездят)', 'Nad ___ trammiga tööle. (go)', ['sõidavad', 'sõidan', 'sõidab', 'sõidame'], 0,
      'sõitma: sõidan, sõidad, sõidab, sõidame, sõidate, sõidavad.', 'sõitma: sõidan, sõidad, sõidab, sõidame, sõidate, sõidavad.'),
  ],
  hobbies: [
    fromEt('kuulama', ['слушать', 'смотреть', 'читать', 'петь'], ['to listen', 'to watch', 'to read', 'to sing'], 0),
    typeEtPic(emoji('🎵'), 'музыка', 'music', ['muusika']),
    m('Mulle ___ muusika. (Мне нравится музыка.)', 'Mulle ___ muusika. (I like music.)', ['meeldib', 'meeldin', 'meeldid', 'meeldivad'], 0,
      'Mulle meeldib + что нравится: mulle meeldib muusika; mulle meeldivad raamatud.', 'Mulle meeldib + what I like: mulle meeldib muusika; mulle meeldivad raamatud.'),
  ],
};
