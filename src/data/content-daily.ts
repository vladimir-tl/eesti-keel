import { toEt, fromEt, typeEt, typeEtPic, mc, typed } from './helpers';
import { emoji, swatch } from './pictures';
import { tr } from './questions';
import type { Question } from './questions';

export const food: Question[] = [
  fromEt('leib', ['хлеб', 'молоко', 'вода', 'сыр'], ['bread', 'milk', 'water', 'cheese'], 0),
  toEt('молоко', 'milk', ['piim', 'vesi', 'tee', 'kohv'], 0),
  typeEtPic(emoji('💧'), 'вода', 'water', ['vesi']),
  typeEtPic(emoji('🍵'), 'чай', 'tea', ['tee']),
  fromEt('liha', ['мясо', 'рыба', 'яйцо', 'сыр'], ['meat', 'fish', 'egg', 'cheese'], 0),
  toEt('рыба', 'fish', ['liha', 'kala', 'muna', 'juust'], 1),
  typeEtPic(emoji('🧀'), 'сыр', 'cheese', ['juust']),
  fromEt('muna', ['яйцо', 'мясо', 'суп', 'масло'], ['egg', 'meat', 'soup', 'butter'], 0),
  typeEtPic(emoji('🍎'), 'яблоко', 'apple', ['õun']),
  fromEt('supp', ['суп', 'сахар', 'соль', 'картофель'], ['soup', 'sugar', 'salt', 'potato'], 0),
  fromEt('Maitsev!', ['Вкусно!', 'Дорого!', 'Горячо!', 'Спасибо!'], ['Tasty!', 'Expensive!', 'Hot!', 'Thanks!'], 0),
  mc(tr('Что значит «Ma tahan kohvi»?', 'What does “Ma tahan kohvi” mean?'), [tr('Я хочу кофе', 'I want coffee', 'I want coffee'), tr('Я пью кофе', 'I am drinking coffee', 'I am drinking coffee'), tr('У меня нет кофе', 'I have no coffee', 'I have no coffee'), tr('Кофе дорогой', 'Coffee is expensive', 'Coffee is expensive')], 0,
    tr('Ma tahan … — «Я хочу …». После tahan слово стоит в особой форме: kohvi, teed, leiba, piima.', 'Ma tahan … — “I want …”. After tahan the noun takes a special form: kohvi, teed, leiba, piima.')),
];

export const shopping: Question[] = [
  fromEt('kauplus', ['магазин', 'касса', 'деньги', 'цена'], ['shop', 'till', 'money', 'price'], 0),
  typeEtPic(emoji('💶'), 'деньги', 'money', ['raha']),
  toEt('цена', 'price', ['raha', 'hind', 'pood', 'kassa'], 1),
  fromEt('Kui palju see maksab?', ['Сколько это стоит?', 'Где это?', 'Что это?', 'Кто это?'], ['How much does it cost?', 'Where is it?', 'What is it?', 'Who is it?'], 0),
  fromEt('kassa', ['касса', 'магазин', 'цена', 'чек'], ['till', 'shop', 'price', 'receipt'], 0),
  mc(tr('Leib maksab kaks eurot. Сколько стоит хлеб?', 'Leib maksab kaks eurot. How much is the bread?'), [tr('2 евро', '€2', '2 €'), tr('20 евро', '€20', '20 €'), tr('12 евро', '€12', '12 €'), tr('200 евро', '€200', '200 €')], 0,
    tr('kaks = 2. Kaks eurot — два евро.', 'kaks = 2. Kaks eurot — two euros.')),
  typeEt('платить', 'to pay', ['maksma']),
  typeEt('покупать', 'to buy', ['ostma']),
  fromEt('sularaha', ['наличные', 'карта', 'чек', 'сдача'], ['cash', 'card', 'receipt', 'change'], 0),
  typeEtPic(emoji('🧾'), 'чек', 'receipt', ['tšekk']),
  fromEt('Ma ei taha seda', ['Я этого не хочу', 'Я хочу это', 'Я не знаю', 'Это дорого'], ['I do not want this', 'I want this', 'I do not know', 'This is expensive'], 0),
  mc(tr('Как спросить «Сколько это стоит?»', 'How do you ask “How much does this cost?”'), ['Kui palju see maksab?', 'Kus see on?', 'Mis see on?', 'Kes see on?'], 0,
    tr('Kui palju — «сколько», maksab — «стоит».', 'Kui palju — “how much”, maksab — “costs”.')),
];

export const home: Question[] = [
  fromEt('korter', ['квартира', 'дом', 'комната', 'кухня'], ['flat', 'house', 'room', 'kitchen'], 0),
  toEt('комната', 'room', ['köök', 'tuba', 'uks', 'aken'], 1),
  typeEt('кухня', 'kitchen', ['köök']),
  typeEtPic(emoji('🚪'), 'дверь', 'door', ['uks']),
  fromEt('aken', ['окно', 'дверь', 'стена', 'пол'], ['window', 'door', 'wall', 'floor'], 0),
  toEt('улица', 'street', ['linn', 'tänav', 'maja', 'kool'], 1),
  typeEtPic(emoji('🏙️'), 'город', 'city', ['linn']),
  fromEt('siin', ['здесь', 'там', 'где', 'туда'], ['here', 'there', 'where', 'to there'], 0),
  typeEt('там', 'there', ['seal']),
  mc(tr('Как спросить «Где магазин?»', 'How do you ask “Where is the shop?”'), ['Kus on pood?', 'Kes on pood?', 'Mis on pood?', 'Millal on pood?'], 0,
    tr('Kus on …? — «Где …?»', 'Kus on …? — “Where is …?”')),
  fromEt('maja', ['дом', 'квартира', 'школа', 'город'], ['house', 'flat', 'school', 'city'], 0),
  fromEt('Ma elan korteris', ['Я живу в квартире', 'Я снимаю дом', 'Я иду в квартиру', 'Я из квартиры'], ['I live in a flat', 'I rent a house', 'I am going to the flat', 'I am from the flat'], 0),
];

export const transport: Question[] = [
  fromEt('rong', ['поезд', 'автобус', 'самолёт', 'машина'], ['train', 'bus', 'plane', 'car'], 0),
  toEt('самолёт', 'plane', ['rong', 'lennuk', 'buss', 'auto'], 1),
  typeEtPic(emoji('🎫'), 'билет', 'ticket', ['pilet']),
  typeEt('остановка', 'stop', ['peatus']),
  fromEt('auto', ['машина', 'велосипед', 'автобус', 'поезд'], ['car', 'bicycle', 'bus', 'train'], 0),
  toEt('велосипед', 'bicycle', ['auto', 'jalgratas', 'rong', 'tramm'], 1),
  typeEt('ехать', 'to go (by vehicle)', ['sõitma']),
  fromEt('Kuhu sa lähed?', ['Куда ты идёшь?', 'Где ты живёшь?', 'Откуда ты?', 'Как тебя зовут?'], ['Where are you going?', 'Where do you live?', 'Where are you from?', 'What is your name?'], 0),
  fromEt('Ma sõidan bussiga', ['Я еду на автобусе', 'Я жду автобус', 'Я купил автобус', 'Автобус едет'], ['I go by bus', 'I am waiting for the bus', 'I bought a bus', 'The bus is coming'], 0),
  mc(tr('Ma lähen ___. (пешком)', 'Ma lähen ___. (on foot)'), ['jalgsi', 'jalg', 'jala', 'jalga'], 0,
    tr('jalgsi — пешком.', 'jalgsi — on foot.')),
  typed(tr('Ma sõidan ___. (на поезде) Форма слова rong с -ga.', 'Ma sõidan ___. (by train) The word “rong” with -ga.'), ['rongiga'], 'rong → rongiga.'),
  fromEt('tramm', ['трамвай', 'троллейбус', 'поезд', 'метро'], ['tram', 'trolleybus', 'train', 'metro'], 0),
];

export const hobbies: Question[] = [
  fromEt('lugema', ['читать', 'писать', 'играть', 'петь'], ['to read', 'to write', 'to play', 'to sing'], 0),
  toEt('писать', 'to write', ['lugema', 'kirjutama', 'mängima', 'laulma'], 1),
  typeEt('играть', 'to play', ['mängima']),
  typeEt('петь', 'to sing', ['laulma']),
  fromEt('ujuma', ['плавать', 'гулять', 'танцевать', 'бегать'], ['to swim', 'to walk', 'to dance', 'to run'], 0),
  toEt('гулять', 'to walk', ['jalutama', 'tantsima', 'ujuma', 'laulma'], 0),
  typeEt('танцевать', 'to dance', ['tantsima']),
  fromEt('raamat', ['книга', 'фильм', 'музыка', 'спорт'], ['book', 'film', 'music', 'sport'], 0),
  fromEt('vaatama', ['смотреть', 'слушать', 'читать', 'играть'], ['to watch', 'to listen', 'to read', 'to play'], 0),
  fromEt('Mulle meeldib lugeda', ['Мне нравится читать', 'Я умею читать', 'Я не читаю', 'Я читаю книгу'], ['I like reading', 'I can read', 'I do not read', 'I am reading a book'], 0),
  mc(tr('Ma ___ raamatut. (Я читаю книгу.)', 'Ma ___ raamatut. (I am reading a book.)'), ['loen', 'loed', 'loeb', 'loeme'], 0,
    tr('lugema: ma loen, sa loed, ta loeb, me loeme.', 'lugema: ma loen, sa loed, ta loeb, me loeme.')),
  typed(tr('Напишите по-эстонски: «Мне нравится плавать»', 'Write in Estonian: “I like swimming”'), ['mulle meeldib ujuda'], 'Mulle meeldib ujuda.'),
];
