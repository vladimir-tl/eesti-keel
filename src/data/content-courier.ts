import { tr } from './questions';
import type { DialogTurn, Question } from './questions';

/**
 * Talking to a courier: one dialogue on one card, a gap in most lines.
 * A turn is [speaker, text, translation ru, translation en, right word, ...wrong words]; a text without "___" is shown as it is.
 */
type Turn = [who: string, text: string, ru: string, en: string, ...words: string[]];

const turn = ([who, text, ru, en, ...words]: Turn): DialogTurn => ({ who, text, options: words, answer: 0, tr: tr(ru, en, en) });

const dialogue = (ru: string, en: string, turns: Turn[]): Question => {
  const done = turns.map(([who, text, , , right]) => `${who}: ${right ? text.replace('___', right) : text}`).join('\n');
  return {
    level: 'A1',
    prompt: tr(ru, en, 'Täida dialoogi lüngad kulleriga'),
    options: [],
    answer: -1,
    explain: tr(done, done),
    dialog: turns.map(turn),
  };
};

/** A2: arranging a delivery. */
export const courierA2: Question[] = [
  dialogue('Вставьте слова в диалог с курьером', 'Fill in the words in the dialogue with the courier', [
    ['Kuller', 'Tere! Mul on teile pakk. Kas te ___ praegu kodus?', 'Здравствуйте! У меня для вас посылка. Вы сейчас дома?', 'Hello! I have a parcel for you. Are you at home now?', 'olete', 'oled', 'on', 'olen'],
    ['Mina', 'Jah, ma olen ___.', 'Да, я дома.', 'Yes, I am at home.', 'kodus', 'kodu', 'koju', 'kodust'],
    ['Kuller', 'Hea küll. Ma olen teie juures 15 minuti ___.', 'Хорошо. Я буду у вас через 15 минут.', 'All right. I will be with you in 15 minutes.', 'pärast', 'jooksul', 'eest', 'kohta'],
    ['Mina', 'Väga hea, ma ___ teid.', 'Отлично, я вас жду.', 'Very good, I am waiting for you.', 'ootan', 'ootad', 'ootab', 'ootame'],
    ['Kuller', 'Mis korrusel te elate?', 'На каком этаже вы живёте?', 'Which floor do you live on?'],
    ['Mina', 'Ma elan kolmandal ___.', 'Я живу на третьем этаже.', 'I live on the third floor.', 'korrusel', 'korrus', 'korrusele', 'korrusest'],
    ['Kuller', 'Ma seisan trepikojas ja keegi ei ava.', 'Я стою на лестнице, и никто не открывает.', 'I am standing in the stairwell and nobody opens.'],
    ['Mina', 'Üks hetk, ma tulen kohe ___.', 'Минутку, я сейчас спущусь.', 'One moment, I am coming down right away.', 'alla', 'all', 'alt', 'ala'],
    ['Kuller', 'Kas see pakk on teie nimel?', 'Эта посылка на ваше имя?', 'Is this parcel in your name?'],
    ['Mina', 'Jah, see on ___ pakk.', 'Да, это моя посылка.', 'Yes, it is my parcel.', 'minu', 'mind', 'mulle', 'mina'],
    ['Kuller', 'Palun, siin see on. Ilusat päeva!', 'Пожалуйста, вот она. Хорошего дня!', 'Here you are. Have a nice day!'],
    ['Mina', 'Aitäh, ___ samuti!', 'Спасибо, вам тоже!', 'Thank you, you too!', 'teile', 'teie', 'teid', 'teil'],
  ]),
];

/** B1: the recipient is away, the delivery is moved. */
export const courierB1: Question[] = [
  dialogue('Вставьте слова в диалог с курьером', 'Fill in the words in the dialogue with the courier', [
    ['Kuller', 'Tere, helistan kullerfirmast. Mul on teile pakk. Kas te olete praegu kodus?', 'Здравствуйте, звоню из курьерской службы. У меня для вас посылка. Вы сейчас дома?', 'Hello, I am calling from the courier company. I have a parcel for you. Are you at home now?'],
    ['Mina', 'Paraku mitte, aga mu naaber võtab paki minu ___ vastu.', 'К сожалению, нет, но мой сосед примет посылку вместо меня.', 'Unfortunately not, but my neighbour will accept the parcel in my place.', 'asemel', 'kõrval', 'vastu', 'järel'],
    ['Kuller', 'Kas ma võin paki otse tema korterisse viia?', 'Могу я отнести посылку прямо в его квартиру?', 'May I take the parcel straight to his flat?'],
    ['Mina', 'Jah, aga kontrollige enne, ___ ta kodus on.', 'Да, но сначала проверьте, дома ли он.', 'Yes, but first check whether he is at home.', 'kas', 'et', 'kui', 'mis'],
    ['Kuller', 'Naaber ei ava. Mul on kahjuks probleem, ma ei jõua täna enam teie ___.', 'Сосед не открывает. К сожалению, у меня проблема, я сегодня уже не успею к вам.', 'The neighbour does not open. Unfortunately I have a problem, I cannot get to you today any more.', 'juurde', 'juures', 'juurest', 'juur'],
    ['Mina', 'Kas te ___ pakki homme tuua?', 'Вы не могли бы привезти посылку завтра?', 'Could you bring the parcel tomorrow?', 'saaksite', 'saate', 'saama', 'saanud'],
    ['Kuller', 'Kas homme hommikul kell 10–12 sobiks?', 'Подойдёт ли завтра утром с 10 до 12?', 'Would tomorrow morning between 10 and 12 suit you?'],
    ['Mina', 'Jah, see ___ mulle väga hästi.', 'Да, мне это очень подходит.', 'Yes, that suits me very well.', 'sobib', 'sobivad', 'sobida', 'sobinud'],
    ['Kuller', 'Hea küll. Kuidas ma trepikotta saan?', 'Хорошо. Как мне попасть в подъезд?', 'All right. How do I get into the stairwell?'],
    ['Mina', 'Uks on vahel ___, sisestage kood 4521.', 'Дверь иногда закрыта, введите код 4521.', 'The door is sometimes shut, enter the code 4521.', 'kinni', 'kinnine', 'kinnise', 'kinnist'],
    ['Kuller', 'Suurepärane. Aitäh ja ilusat päeva!', 'Отлично. Спасибо и хорошего дня!', 'Great. Thank you and have a nice day!'],
    ['Mina', 'Teile samuti! Palun ___ mulle, kui te olete ukse ees.', 'И вам! Пожалуйста, позвоните мне, когда будете у двери.', 'You too! Please call me when you are at the door.', 'helistage', 'helistama', 'helistada', 'helistades'],
  ]),
];
