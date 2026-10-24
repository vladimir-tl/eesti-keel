import { toEt, fromEt, typeEt, mc, typed } from './helpers';
import { tr } from './questions';
import type { Question } from './questions';

const m = (ru: string, en: string, options: string[], answer: number, eru: string, een: string): Question =>
  mc(tr(ru, en), options, answer, tr(eru, een));
const ty = (ru: string, en: string, accept: string[], eru: string, een: string): Question =>
  typed(tr(ru, en), accept, tr(eru, een));

export const connectors: Question[] = [
  fromEt('ja', ['и', 'но', 'или', 'потому что'], ['and', 'but', 'or', 'because'], 0),
  fromEt('aga', ['но', 'и', 'или', 'тоже'], ['but', 'and', 'or', 'also'], 0),
  fromEt('või', ['или', 'и', 'но', 'если'], ['or', 'and', 'but', 'if'], 0),
  typeEt('только', 'only', ['ainult']),
  fromEt('väga', ['очень', 'слишком', 'тоже', 'уже'], ['very', 'too much', 'also', 'already'], 0),
  fromEt('liiga', ['слишком', 'очень', 'ещё', 'только'], ['too (much)', 'very', 'still', 'only'], 0),
  typeEt('тоже, также', 'also', ['ka']),
  fromEt('juba', ['уже', 'ещё', 'только', 'всегда'], ['already', 'still', 'only', 'always'], 0),
  fromEt('veel', ['ещё', 'уже', 'очень', 'тоже'], ['still / more', 'already', 'very', 'also'], 0),
  m('Ma tahan kohvi ___ teed. (кофе или чай)', 'Ma tahan kohvi ___ teed. (coffee or tea)', ['ja', 'või', 'aga', 'sest'], 1,
    'või — «или».', 'või — “or”.'),
  m('Ma ei tule, ___ ma olen haige. (потому что)', 'Ma ei tule, ___ ma olen haige. (because)', ['sest', 'aga', 'ja', 'või'], 0,
    'sest — «потому что» (ответ на Miks?).', 'sest — “because” (answers Miks?).'),
  m('Kohv on hea, ___ kallis. (но)', 'Kohv on hea, ___ kallis. (but)', ['aga', 'ja', 'või', 'sest'], 0,
    'aga — «но».', 'aga — “but”.'),
];

export const pointing: Question[] = [
  fromEt('see', ['это, этот', 'тот', 'эти', 'здесь'], ['this', 'that', 'these', 'here'], 0),
  fromEt('too', ['тот', 'этот', 'эти', 'там'], ['that', 'this', 'these', 'there'], 0),
  fromEt('need', ['эти, те', 'этот', 'тот', 'здесь'], ['these / those', 'this', 'that', 'here'], 0),
  m('___ on minu raamat. (Это моя книга.)', '___ on minu raamat. (This is my book.)', ['See', 'Need', 'Kes', 'Kus'], 0,
    'see — единственное число, need — множественное.', 'see — singular, need — plural.'),
  m('___ on minu sõbrad. (Это мои друзья.)', '___ on minu sõbrad. (These are my friends.)', ['See', 'Need', 'Too', 'Kes'], 1,
    'need — мн. число: need sõbrad.', 'need — plural: need sõbrad.'),
  fromEt('Mitu?', ['Сколько? (о числе)', 'Когда?', 'Где?', 'Как?'], ['How many?', 'When?', 'Where?', 'How?'], 0),
  fromEt('Milline?', ['Какой?', 'Который час?', 'Сколько?', 'Где?'], ['Which / what kind?', 'What time?', 'How much?', 'Where?'], 0),
  fromEt('Kelle raamat see on?', ['Чья это книга?', 'Где книга?', 'Какая книга?', 'Кто читает?'], ['Whose book is this?', 'Where is the book?', 'What kind of book?', 'Who reads?'], 0),
  typeEt('Как долго?', 'How long?', ['kui kaua', 'kaua']),
  m('Как спросить «Чья это сумка?»', 'How do you ask “Whose bag is this?”', ['Kelle kott see on?', 'Kes kott see on?', 'Kus kott see on?', 'Mis kott see on?'], 0,
    'Kelle? — «чей?»: Kelle kott see on? — «Чья это сумка?»', 'Kelle? — “whose?”: Kelle kott see on? — “Whose bag is this?”'),
  m('Как спросить «Сколько у тебя детей?»', 'How do you ask “How many children do you have?”', ['Mitu last sul on?', 'Kui palju last?', 'Kes sul on?', 'Kus sul on last?'], 0,
    'Mitu — для счётных вещей (сколько штук); Kui palju — для количества/цены.', 'Mitu — for countable things; Kui palju — for amount/price.'),
  m('Как спросить «Какой это цвет?»', 'How do you ask “What colour is this?”', ['Mis värvi see on?', 'Kes see on?', 'Kus see on?', 'Millal see on?'], 0,
    'Mis värvi …? — «Какого цвета …?»', 'Mis värvi …? — “What colour …?”'),
];

export const verbs2: Question[] = [
  m('Me ___ õhtul telerit. (Вечером мы смотрим телевизор.)', 'Me ___ õhtul telerit. (In the evening we watch TV.)', ['vaatame', 'vaatan', 'vaatab', 'vaatavad'], 0,
    'vaatama: vaatan, vaatad, vaatab, vaatame, vaatate, vaatavad.', 'vaatama: vaatan, vaatad, vaatab, vaatame, vaatate, vaatavad.'),
  m('Ta ___ homme. (Он придёт завтра.)', 'Ta ___ homme. (He will come tomorrow.)', ['tuleb', 'tulen', 'tuled', 'tuleme'], 0,
    'tulema: tulen, tuled, tuleb, tuleme, tulete, tulevad.', 'tulema: tulen, tuled, tuleb, tuleme, tulete, tulevad.'),
  m('Mida sa ___? (Что ты делаешь?)', 'Mida sa ___? (What are you doing?)', ['teed', 'teen', 'teeb', 'teeme'], 0,
    'tegema: teen, teed, teeb, teeme, teete, teevad.', 'tegema: teen, teed, teeb, teeme, teete, teevad.'),
  m('Ma ___ sind. (Я вижу тебя.)', 'Ma ___ sind. (I see you.)', ['näen', 'näed', 'näeb', 'näeme'], 0,
    'nägema: näen, näed, näeb, näeme, näete, näevad.', 'nägema: näen, näed, näeb, näeme, näete, näevad.'),
  m('Ma ___ seda. (Я знаю это.)', 'Ma ___ seda. (I know this.)', ['tean', 'tead', 'teab', 'teame'], 0,
    'teadma: tean, tead, teab, teame, teate, teavad.', 'teadma: tean, tead, teab, teame, teate, teavad.'),
  m('Ta ___ kaheksa tundi. (Он спит восемь часов.)', 'Ta ___ kaheksa tundi. (He sleeps eight hours.)', ['magab', 'magan', 'magad', 'magavad'], 0,
    'magama: magan, magad, magab.', 'magama: magan, magad, magab.'),
  fromEt('ärkama', ['просыпаться', 'засыпать', 'вставать', 'мыться'], ['to wake up', 'to fall asleep', 'to get up', 'to wash'], 0),
  fromEt('tõusma', ['вставать', 'ложиться', 'мыться', 'идти'], ['to get up', 'to lie down', 'to wash', 'to go'], 0),
  typeEt('мыться', 'to wash oneself', ['pesema', 'end pesema']),
  fromEt('Ma lähen magama', ['Я иду спать', 'Я сплю', 'Я просыпаюсь', 'Я иду домой'], ['I am going to bed', 'I am sleeping', 'I am waking up', 'I am going home'], 0),
  fromEt('Me sööme koos', ['Мы едим вместе', 'Мы готовим вместе', 'Мы едим одни', 'Мы идём в кафе'], ['We eat together', 'We cook together', 'We eat alone', 'We are going to a café'], 0),
  typeEt('я пишу', 'I am writing', ['ma kirjutan']),
];

export const feelings: Question[] = [
  fromEt('väsinud', ['уставший', 'голодный', 'весёлый', 'больной'], ['tired', 'hungry', 'cheerful', 'ill'], 0),
  fromEt('näljane', ['голодный', 'жаждущий', 'уставший', 'сытый'], ['hungry', 'thirsty', 'tired', 'full'], 0),
  fromEt('rõõmus', ['радостный', 'грустный', 'злой', 'усталый'], ['happy', 'sad', 'angry', 'tired'], 0),
  toEt('грустный', 'sad', ['kurb', 'rõõmus', 'vihane', 'väsinud'], 0),
  typeEt('злой', 'angry', ['vihane']),
  m('Как сказать «Я хочу есть»?', 'How do you say “I am hungry”?', ['Mul on nälg', 'Ma olen nälg', 'Mul on janu', 'Ma söön nälg'], 0,
    'Mul on nälg — «голод у меня». Mul on janu — «я хочу пить».', 'Mul on nälg — “hunger is on me”. Mul on janu — “I am thirsty”.'),
  typeEt('Я хочу пить', 'I am thirsty', ['mul on janu']),
  fromEt('Mul on kiire', ['Я спешу', 'Мне скучно', 'Мне жарко', 'Мне холодно'], ['I am in a hurry', 'I am bored', 'I am hot', 'I am cold'], 0),
  fromEt('Mul on igav', ['Мне скучно', 'Мне грустно', 'Мне холодно', 'Я спешу'], ['I am bored', 'I am sad', 'I am cold', 'I am in a hurry'], 0),
  fromEt('Mul on hea meel', ['Я рад', 'Мне жаль', 'Мне плохо', 'Я устал'], ['I am glad', 'I am sorry', 'I feel bad', 'I am tired'], 0),
  fromEt('Mul on kahju', ['Мне жаль', 'Я рад', 'Мне холодно', 'Я голоден'], ['I am sorry', 'I am glad', 'I am cold', 'I am hungry'], 0),
  m('Kuidas sul läheb? — ___. (Хорошо.)', 'Kuidas sul läheb? — ___. (Fine.)', ['Mul läheb hästi', 'Mul on hästi', 'Ma olen hästi', 'Mina hästi'], 0,
    'Mul läheb hästi / halvasti — «у меня дела идут хорошо / плохо».', 'Mul läheb hästi / halvasti — “I am doing well / badly”.'),
];

export const school: Question[] = [
  fromEt('õpik', ['учебник', 'тетрадь', 'ручка', 'доска'], ['textbook', 'notebook', 'pen', 'board'], 0),
  fromEt('vihik', ['тетрадь', 'учебник', 'книга', 'письмо'], ['notebook', 'textbook', 'book', 'letter'], 0),
  toEt('ручка', 'pen', ['pastakas', 'pliiats', 'vihik', 'raamat'], 0),
  typeEt('карандаш', 'pencil', ['pliiats']),
  fromEt('kodutöö', ['домашнее задание', 'экзамен', 'урок', 'класс'], ['homework', 'exam', 'lesson', 'class'], 0),
  fromEt('eksam', ['экзамен', 'урок', 'вопрос', 'ответ'], ['exam', 'lesson', 'question', 'answer'], 0),
  typeEt('слово', 'word', ['sõna']),
  typeEt('вопрос', 'question', ['küsimus']),
  typeEt('ответ', 'answer', ['vastus']),
  fromEt('arvuti', ['компьютер', 'телефон', 'интернет', 'экран'], ['computer', 'phone', 'internet', 'screen'], 0),
  fromEt('e-kiri', ['электронное письмо', 'сообщение', 'звонок', 'адрес'], ['e-mail', 'message', 'call', 'address'], 0),
  m('Kus on minu ___? (телефон)', 'Kus on minu ___? (phone)', ['telefon', 'telefoni', 'telefonis', 'telefonid'], 0,
    'telefon — телефон.', 'telefon — phone.'),
];

export const nature: Question[] = [
  fromEt('koer', ['собака', 'кошка', 'лошадь', 'птица'], ['dog', 'cat', 'horse', 'bird'], 0),
  toEt('кошка', 'cat', ['kass', 'koer', 'lind', 'hobune'], 0),
  typeEt('птица', 'bird', ['lind']),
  typeEt('лошадь', 'horse', ['hobune']),
  fromEt('lehm', ['корова', 'лошадь', 'свинья', 'овца'], ['cow', 'horse', 'pig', 'sheep'], 0),
  fromEt('puu', ['дерево', 'цветок', 'лес', 'трава'], ['tree', 'flower', 'forest', 'grass'], 0),
  typeEt('цветок', 'flower', ['lill']),
  fromEt('mets', ['лес', 'море', 'озеро', 'река'], ['forest', 'sea', 'lake', 'river'], 0),
  toEt('море', 'sea', ['meri', 'järv', 'jõgi', 'mets'], 0),
  typeEt('озеро', 'lake', ['järv']),
  fromEt('rand', ['пляж', 'берег реки', 'лес', 'остров'], ['beach', 'river bank', 'forest', 'island'], 0),
  fromEt('loodus', ['природа', 'погода', 'лес', 'животное'], ['nature', 'weather', 'forest', 'animal'], 0),
];

export const holidays: Question[] = [
  fromEt('jõulud', ['Рождество', 'Новый год', 'Иванов день', 'день рождения'], ['Christmas', 'New Year', 'Midsummer', 'birthday'], 0),
  fromEt('jaanipäev', ['Иванов день (Jaanipäev)', 'Рождество', 'Пасха', 'Новый год'], ['Midsummer Day', 'Christmas', 'Easter', 'New Year'], 0),
  m('Как поздравить с Рождеством?', 'How do you wish Merry Christmas?', ['Häid jõule!', 'Head isu!', 'Head aega!', 'Head ööd!'], 0,
    'Häid jõule! — «С Рождеством!»', 'Häid jõule! — “Merry Christmas!”'),
  m('Как поздравить с Новым годом?', 'How do you wish Happy New Year?', ['Head uut aastat!', 'Palju õnne!', 'Head isu!', 'Head päeva!'], 0,
    'Head uut aastat! — «С Новым годом!»', 'Head uut aastat! — “Happy New Year!”'),
  fromEt('pidu', ['вечеринка', 'подарок', 'отпуск', 'гость'], ['party', 'gift', 'holiday', 'guest'], 0),
  fromEt('kingitus', ['подарок', 'вечеринка', 'открытка', 'цветок'], ['gift', 'party', 'card', 'flower'], 0),
  typeEt('отпуск', 'holiday, vacation', ['puhkus']),
  fromEt('jalgpall', ['футбол', 'баскетбол', 'плавание', 'лыжи'], ['football', 'basketball', 'swimming', 'skiing'], 0),
  fromEt('korvpall', ['баскетбол', 'футбол', 'теннис', 'хоккей'], ['basketball', 'football', 'tennis', 'hockey'], 0),
  fromEt('suusatama', ['ходить на лыжах', 'плавать', 'бегать', 'кататься на коньках'], ['to ski', 'to swim', 'to run', 'to skate'], 0),
  typeEt('бегать', 'to run', ['jooksma']),
  fromEt('trenn', ['тренировка', 'соревнование', 'спорт', 'игра'], ['workout, training', 'competition', 'sport', 'game'], 0),
];

export const furniture: Question[] = [
  fromEt('laud', ['стол', 'стул', 'кровать', 'шкаф'], ['table', 'chair', 'bed', 'cupboard'], 0),
  toEt('стул', 'chair', ['tool', 'laud', 'voodi', 'kapp'], 0),
  typeEt('кровать', 'bed', ['voodi']),
  typeEt('шкаф', 'cupboard, wardrobe', ['kapp']),
  fromEt('diivan', ['диван', 'кресло', 'стол', 'полка'], ['sofa', 'armchair', 'table', 'shelf'], 0),
  fromEt('lamp', ['лампа', 'окно', 'дверь', 'картина'], ['lamp', 'window', 'door', 'picture'], 0),
  fromEt('vannituba', ['ванная', 'спальня', 'кухня', 'гостиная'], ['bathroom', 'bedroom', 'kitchen', 'living room'], 0),
  fromEt('magamistuba', ['спальня', 'ванная', 'гостиная', 'кухня'], ['bedroom', 'bathroom', 'living room', 'kitchen'], 0),
  toEt('гостиная', 'living room', ['elutuba', 'köök', 'tuba', 'vannituba'], 0),
  typeEt('полка', 'shelf', ['riiul']),
  typeEt('картина', 'picture', ['pilt']),
  m('Ma magan ___. (Я сплю в спальне.)', 'Ma magan ___. (I sleep in the bedroom.)', ['magamistoas', 'magamistuba', 'magamistoast', 'magamistuppa'], 0,
    'tuba → toas: magamistoas («в спальне»).', 'tuba → toas: magamistoas (“in the bedroom”).'),
];

export const food2: Question[] = [
  fromEt('kartul', ['картофель', 'морковь', 'помидор', 'огурец'], ['potato', 'carrot', 'tomato', 'cucumber'], 0),
  toEt('морковь', 'carrot', ['porgand', 'kartul', 'tomat', 'kurk'], 0),
  typeEt('огурец', 'cucumber', ['kurk']),
  typeEt('помидор', 'tomato', ['tomat']),
  fromEt('banaan', ['банан', 'яблоко', 'апельсин', 'груша'], ['banana', 'apple', 'orange', 'pear'], 0),
  fromEt('mahl', ['сок', 'молоко', 'пиво', 'вино'], ['juice', 'milk', 'beer', 'wine'], 0),
  fromEt('õlu', ['пиво', 'вино', 'сок', 'вода'], ['beer', 'wine', 'juice', 'water'], 0),
  typeEt('вино', 'wine', ['vein']),
  fromEt('suhkur', ['сахар', 'соль', 'масло', 'мёд'], ['sugar', 'salt', 'butter', 'honey'], 0),
  toEt('соль', 'salt', ['sool', 'suhkur', 'või', 'riis'], 0),
  typeEt('рис', 'rice', ['riis']),
  fromEt('jäätis', ['мороженое', 'торт', 'шоколад', 'печенье'], ['ice cream', 'cake', 'chocolate', 'biscuit'], 0),
];
