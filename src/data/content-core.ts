import { toEt, fromEt, typeEt, mc, typed } from './helpers';
import { tr } from './questions';
import type { Question } from './questions';

export const numbers: Question[] = [
  toEt('пять', 'five', ['kuus', 'viis', 'neli', 'seitse'], 1),
  fromEt('üheksa', ['7', '8', '9', '10'], ['7', '8', '9', '10'], 2),
  typeEt('десять', 'ten', ['kümme']),
  typeEt('двадцать', 'twenty', ['kakskümmend']),
  fromEt('sada', ['10', '100', '1000', '20'], ['10', '100', '1000', '20'], 1),
  mc(tr('Как по-эстонски 15?', 'How do you say 15 in Estonian?'), ['viisteist', 'viiskümmend', 'kuusteist', 'neliteist'], 0,
    tr('11–19: число + «-teist»: üksteist, kaksteist, kolmteist… viisteist = 15. viiskümmend = 50.', '11–19: number + “-teist”: üksteist, kaksteist, kolmteist… viisteist = 15. viiskümmend = 50.')),
  typeEt('тысяча', 'thousand', ['tuhat']),
  fromEt('kolmkümmend', ['13', '30', '33', '300'], ['13', '30', '33', '300'], 1),
  typed(tr('Напишите словом: 4 + 4 = ?', 'Write the answer as a word: 4 + 4 = ?'), ['kaheksa'], 'neli + neli = kaheksa.'),
  typed(tr('Напишите словом: 100 − 50 = ?', 'Write the answer as a word: 100 − 50 = ?'), ['viiskümmend'], 'sada − viiskümmend = viiskümmend (50).'),
  mc(tr('Как по-эстонски 200?', 'How do you say 200 in Estonian?'), ['kakssada', 'kakskümmend', 'kaksteist', 'kaks tuhat'], 0,
    tr('Сотни: kakssada (200), kolmsada (300)… kakskümmend = 20, kaksteist = 12, kaks tuhat = 2000.', 'Hundreds: kakssada (200), kolmsada (300)… kakskümmend = 20, kaksteist = 12, kaks tuhat = 2000.')),
  fromEt('seitseteist', ['7', '17', '70', '27'], ['7', '17', '70', '27'], 1),
];

export const days: Question[] = [
  fromEt('teisipäev', ['понедельник', 'вторник', 'среда', 'четверг'], ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], 1),
  toEt('среда', 'Wednesday', ['reede', 'kolmapäev', 'neljapäev', 'laupäev'], 1),
  typeEt('пятница', 'Friday', ['reede']),
  fromEt('laupäev', ['пятница', 'суббота', 'воскресенье', 'вторник'], ['Friday', 'Saturday', 'Sunday', 'Tuesday'], 1),
  typeEt('воскресенье', 'Sunday', ['pühapäev']),
  toEt('понедельник', 'Monday', ['esmaspäev', 'teisipäev', 'pühapäev', 'kolmapäev'], 0),
  fromEt('neljapäev', ['среда', 'четверг', 'пятница', 'вторник'], ['Wednesday', 'Thursday', 'Friday', 'Tuesday'], 1),
  fromEt('täna', ['сегодня', 'завтра', 'вчера', 'сейчас'], ['today', 'tomorrow', 'yesterday', 'now'], 0),
  fromEt('homme', ['вчера', 'сегодня', 'завтра', 'утром'], ['yesterday', 'today', 'tomorrow', 'in the morning'], 2),
  typeEt('вчера', 'yesterday', ['eile']),
  mc(tr('Täna on esmaspäev. Homme on ___.', 'Täna on esmaspäev. Homme on ___.'), ['teisipäev', 'kolmapäev', 'pühapäev', 'reede'], 0,
    tr('Завтра после понедельника — вторник: teisipäev.', 'The day after Monday is Tuesday: teisipäev.')),
  typeEt('неделя', 'week', ['nädal']),
];

export const time: Question[] = [
  fromEt('Mis kell on?', ['Который час?', 'Какой сегодня день?', 'Как дела?', 'Как тебя зовут?'], ['What time is it?', 'What day is it today?', 'How are you?', 'What is your name?'], 0),
  fromEt('tund', ['час', 'минута', 'день', 'неделя'], ['hour', 'minute', 'day', 'week'], 0),
  typeEt('минута', 'minute', ['minut']),
  toEt('утро', 'morning', ['õhtu', 'hommik', 'öö', 'päev'], 1),
  typeEt('вечер', 'evening', ['õhtu']),
  typeEt('ночь', 'night', ['öö']),
  mc(tr('Как сказать «3:00»?', 'How do you say “3:00”?'), ['Kell on kolm', 'Kell on pool kolm', 'Kell on veerand kolm', 'Kell on kolmkümmend'], 0,
    tr('Kell on kolm — «сейчас три часа». Pool kolm = 2:30, veerand kolm = 2:15.', 'Kell on kolm — “it is three o’clock”. Pool kolm = 2:30, veerand kolm = 2:15.')),
  mc(tr('Как сказать «6:30» (половина седьмого)?', 'How do you say “6:30” (half past six)?'), ['Kell on pool seitse', 'Kell on pool kuus', 'Kell on veerand seitse', 'Kell on seitse'], 0,
    tr('По-эстонски «половина» считается до следующего часа: pool seitse = «половина седьмого» = 6:30.', 'In Estonian “half” counts towards the next hour: pool seitse = “half to seven” = 6:30.')),
  mc(tr('Как сказать «4:15» (четверть пятого)?', 'How do you say “4:15” (quarter past four)?'), ['veerand viis', 'veerand neli', 'kolmveerand viis', 'pool viis'], 0,
    tr('veerand viis = «четверть пятого» = 4:15; kolmveerand viis = 4:45; pool viis = 4:30.', 'veerand viis = “quarter past four” = 4:15; kolmveerand viis = 4:45; pool viis = 4:30.')),
  typed(tr('Напишите по-эстонски: «Сейчас 8 часов»', 'Write in Estonian: “It is 8 o’clock”'), ['kell on kaheksa'], 'Kell on kaheksa.'),
  fromEt('kell pool kaks', ['1:30', '2:30', '2:00', '2:15'], ['1:30', '2:30', '2:00', '2:15'], 0),
  mc(tr('Ma ärkan ___ kell seitse. (Я просыпаюсь утром в семь.)', 'Ma ärkan ___ kell seitse. (I wake up in the morning at seven.)'), ['hommikul', 'õhtul', 'öösel', 'nädalal'], 0,
    tr('hommikul — утром, õhtul — вечером, öösel — ночью.', 'hommikul — in the morning, õhtul — in the evening, öösel — at night.')),
];

export const colors: Question[] = [
  fromEt('roheline', ['красный', 'зелёный', 'синий', 'жёлтый'], ['red', 'green', 'blue', 'yellow'], 1),
  toEt('жёлтый', 'yellow', ['kollane', 'punane', 'roheline', 'sinine'], 0),
  typeEt('белый', 'white', ['valge']),
  typeEt('чёрный', 'black', ['must']),
  fromEt('sinine', ['синий', 'серый', 'зелёный', 'красный'], ['blue', 'grey', 'green', 'red'], 0),
  toEt('серый', 'grey', ['hall', 'pruun', 'roosa', 'must'], 0),
  fromEt('pruun', ['розовый', 'коричневый', 'оранжевый', 'фиолетовый'], ['pink', 'brown', 'orange', 'purple'], 1),
  typeEt('красный', 'red', ['punane']),
  fromEt('roosa', ['розовый', 'коричневый', 'серый', 'белый'], ['pink', 'brown', 'grey', 'white'], 0),
  mc(tr('Taevas on ___. (Небо синее.)', 'Taevas on ___. (The sky is blue.)'), ['sinine', 'punane', 'roheline', 'must'], 0, tr('taevas — небо; sinine — синий.', 'taevas — sky; sinine — blue.')),
  typed(tr('Lumi on ___. (Снег белый.) Впишите слово.', 'Lumi on ___. (Snow is white.) Type the word.'), ['valge'], tr('lumi — снег; valge — белый.', 'lumi — snow; valge — white.')),
  fromEt('värv', ['цвет', 'день', 'время', 'число'], ['colour', 'day', 'time', 'number'], 0),
];

export const weather: Question[] = [
  fromEt('ilm', ['погода', 'время', 'день', 'цвет'], ['weather', 'time', 'day', 'colour'], 0),
  toEt('дождь', 'rain', ['lumi', 'vihm', 'tuul', 'päike'], 1),
  typeEt('снег', 'snow', ['lumi']),
  typeEt('солнце', 'sun', ['päike']),
  fromEt('tuul', ['дождь', 'снег', 'ветер', 'облако'], ['rain', 'snow', 'wind', 'cloud'], 2),
  fromEt('külm', ['холодный', 'тёплый', 'жаркий', 'красивый'], ['cold', 'warm', 'hot', 'beautiful'], 0),
  toEt('тёплый', 'warm', ['külm', 'kuum', 'soe', 'ilus'], 2),
  typeEt('жаркий', 'hot', ['kuum']),
  mc(tr('Mis ___ täna on? (Какая сегодня погода?)', 'Mis ___ täna on? (What is the weather today?)'), ['ilm', 'aeg', 'kell', 'nimi'], 0,
    tr('Mis ilm täna on? — «Какая сегодня погода?». Ответ: Täna on ilus ilm / külm / soe.', 'Mis ilm täna on? — “What is the weather today?”. Answer: Täna on ilus ilm / külm / soe.')),
  mc(tr('Как сказать «Идёт дождь»?', 'How do you say “It is raining”?'), ['Sajab vihma', 'Sajab lund', 'Päike paistab', 'Tuul puhub'], 0,
    tr('Sajab vihma — идёт дождь; Sajab lund — идёт снег; Päike paistab — светит солнце; Tuul puhub — дует ветер.', 'Sajab vihma — it is raining; Sajab lund — it is snowing; Päike paistab — the sun is shining; Tuul puhub — the wind blows.')),
  typed(tr('Напишите по-эстонски: «Идёт снег» (sadama + lumi в партитиве)', 'Write in Estonian: “It is snowing” (sadama + lumi in the partitive)'), ['sajab lund', 'lund sajab'],
    tr('Sajab lund. После sadama осадки стоят в партитиве: lumi → lund, vihm → vihma (sajab vihma).', 'Sajab lund. After sadama the precipitation is partitive: lumi → lund, vihm → vihma (sajab vihma).')),
  fromEt('pilv', ['облако', 'дождь', 'ветер', 'солнце'], ['cloud', 'rain', 'wind', 'sun'], 0),
];

