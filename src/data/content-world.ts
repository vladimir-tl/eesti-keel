import { toEt, fromEt, typeEt, typeEtPic, mc, typed } from './helpers';
import { emoji, swatch } from './pictures';
import { tr } from './questions';
import type { Question } from './questions';

export const months: Question[] = [
  fromEt('märts', ['февраль', 'март', 'май', 'август'], ['February', 'March', 'May', 'August'], 1),
  toEt('апрель', 'April', ['mai', 'aprill', 'august', 'märts'], 1),
  typeEt('декабрь', 'December', ['detsember']),
  typeEt('июнь', 'June', ['juuni']),
  fromEt('juuli', ['июнь', 'июль', 'январь', 'март'], ['June', 'July', 'January', 'March'], 1),
  toEt('весна', 'spring', ['kevad', 'suvi', 'sügis', 'talv'], 0),
  typeEt('лето', 'summer', ['suvi']),
  fromEt('sügis', ['весна', 'лето', 'осень', 'зима'], ['spring', 'summer', 'autumn', 'winter'], 2),
  typeEt('зима', 'winter', ['talv']),
  fromEt('aasta', ['год', 'месяц', 'неделя', 'день'], ['year', 'month', 'week', 'day'], 0),
  fromEt('kuu', ['год', 'месяц', 'неделя', 'день'], ['year', 'month', 'week', 'day'], 1),
  mc(tr('Лето: juuni, juuli, ___.', 'Summer: juuni, juuli, ___.'), ['august', 'märts', 'mai', 'oktoober'], 0,
    tr('Летние месяцы: juuni, juuli, august.', 'Summer months: juuni, juuli, august.')),
];

export const adjectives: Question[] = [
  fromEt('suur', ['большой', 'маленький', 'новый', 'старый'], ['big', 'small', 'new', 'old'], 0),
  toEt('маленький', 'small', ['suur', 'väike', 'uus', 'vana'], 1),
  typeEt('новый', 'new', ['uus']),
  typeEt('старый', 'old', ['vana']),
  fromEt('hea', ['хороший', 'плохой', 'дорогой', 'красивый'], ['good', 'bad', 'expensive', 'beautiful'], 0),
  toEt('плохой', 'bad', ['hea', 'halb', 'ilus', 'suur'], 1),
  typeEt('красивый', 'beautiful', ['ilus']),
  fromEt('kallis', ['дорогой', 'дешёвый', 'красивый', 'новый'], ['expensive', 'cheap', 'beautiful', 'new'], 0),
  typeEt('дешёвый', 'cheap', ['odav']),
  fromEt('pikk', ['длинный, высокий', 'короткий', 'тяжёлый', 'узкий'], ['long, tall', 'short', 'heavy', 'narrow'], 0),
  typeEt('тяжёлый', 'heavy', ['raske']),
  mc(tr('Противоположность слова «suur»?', 'Opposite of “suur”?'), ['väike', 'hea', 'vana', 'kallis'], 0,
    tr('suur — väike (большой — маленький), uus — vana, hea — halb, kallis — odav.', 'suur — väike (big — small), uus — vana, hea — halb, kallis — odav.')),
];

export const body: Question[] = [
  fromEt('pea', ['голова', 'рука', 'нога', 'глаз'], ['head', 'hand', 'leg', 'eye'], 0),
  toEt('рука', 'hand', ['jalg', 'käsi', 'pea', 'nina'], 1),
  typeEtPic(emoji('🦵'), 'нога', 'leg', ['jalg']),
  typeEtPic(emoji('👁️'), 'глаз', 'eye', ['silm']),
  fromEt('kõrv', ['ухо', 'нос', 'рот', 'зуб'], ['ear', 'nose', 'mouth', 'tooth'], 0),
  toEt('нос', 'nose', ['suu', 'silm', 'nina', 'kõrv'], 2),
  typeEtPic(emoji('👄'), 'рот', 'mouth', ['suu']),
  fromEt('kõht', ['живот', 'спина', 'сердце', 'рука'], ['stomach', 'back', 'heart', 'hand'], 0),
  fromEt('haige', ['больной', 'здоровый', 'усталый', 'голодный'], ['ill', 'healthy', 'tired', 'hungry'], 0),
  typeEt('здоровый', 'healthy', ['terve']),
  fromEt('Mul valutab pea', ['У меня болит голова', 'У меня болит рука', 'Я здоров', 'Мне холодно'], ['My head hurts', 'My hand hurts', 'I am healthy', 'I am cold'], 0),
  typed(tr('Напишите по-эстонски: «Мне жарко»', 'Write in Estonian: “I am hot”', 'Kirjuta eesti keeles: “I am hot”'), ['mul on palav', 'mul on kuum'], 'Mul on palav.'),
];

export const clothes: Question[] = [
  fromEt('särk', ['рубашка', 'платье', 'юбка', 'шапка'], ['shirt', 'dress', 'skirt', 'hat'], 0),
  toEt('платье', 'dress', ['särk', 'kleit', 'seelik', 'mantel'], 1),
  typeEtPic(emoji('👖'), 'брюки', 'trousers', ['püksid']),
  typeEtPic(emoji('👞'), 'туфли', 'shoes', ['kingad', 'king']),
  fromEt('müts', ['шапка', 'шарф', 'перчатки', 'куртка'], ['hat', 'scarf', 'gloves', 'jacket'], 0),
  toEt('пальто', 'coat', ['jope', 'mantel', 'kleit', 'sall'], 1),
  typeEtPic(emoji('🧥'), 'куртка', 'jacket', ['jope']),
  fromEt('sokid', ['носки', 'брюки', 'туфли', 'юбка'], ['socks', 'trousers', 'shoes', 'skirt'], 0),
  fromEt('kindad', ['перчатки', 'шарф', 'носки', 'шапка'], ['gloves', 'scarf', 'socks', 'hat'], 0),
  toEt('юбка', 'skirt', ['seelik', 'kleit', 'püksid', 'särk'], 0),
  fromEt('kott', ['сумка', 'шапка', 'пальто', 'ботинок'], ['bag', 'hat', 'coat', 'shoe'], 0),
  typeEtPic(emoji('🧣'), 'шарф', 'scarf', ['sall']),
];
