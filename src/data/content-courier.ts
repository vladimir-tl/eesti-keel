import { tr } from './questions';
import type { DialogTurn, Question } from './questions';

/**
 * Talking to a courier: one dialogue on one card, a gap in most lines.
 * A turn is [speaker, text, translation ru, translation en, right word, ...wrong words]; a text without "___" is shown as it is.
 */
type Turn = [who: string, text: string, ru: string, en: string, ...words: string[]];

const turn = ([who, text, ru, en, ...words]: Turn): DialogTurn => ({ who, text, options: words, answer: 0, tr: tr(ru, en, en) });

const dialogue = (ru: string, en: string, et: string, turns: Turn[]): Question => {
  const done = turns.map(([who, text, , , right]) => `${who}: ${right ? text.replace('___', right) : text}`).join('\n');
  return {
    level: 'A1',
    prompt: tr(ru, en, et),
    options: [],
    answer: -1,
    explain: tr(done, done),
    dialog: turns.map(turn),
  };
};

/** A2: arranging a delivery. */
export const courierA2: Question[] = [
  dialogue('Диалог: курьер у двери. Вставьте слова', 'Dialogue: the courier at the door. Fill in the words', 'Dialoog: kuller ukse taga. Täida lüngad', [
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
  dialogue('Диалог: звонок курьера. Вставьте слова', 'Dialogue: the courier calls. Fill in the words', 'Dialoog: kuller helistab. Täida lüngad', [
    ['Kuller', 'Tere! Helistan kullerist. Kus te ___ praegu?', 'Здравствуйте! Звоню из курьерской службы. Где вы сейчас?', 'Hello! I am calling from the courier service. Where are you now?', 'olete', 'oled', 'on', 'olen'],
    ['Mina', 'Ma olen tööl, aga tulen ___ poole tunni pärast.', 'Я на работе, но приду домой через полчаса.', 'I am at work, but I will be home in half an hour.', 'koju', 'kodus', 'kodust', 'kodu'],
    ['Kuller', 'Mis ___ te elate?', 'По какому адресу вы живёте?', 'What address do you live at?', 'aadressil', 'aadress', 'aadressile', 'aadressist'],
    ['Mina', 'Ma elan Pargi ___, korter 12.', 'Я живу на улице Парги, квартира 12.', 'I live on Pargi street, flat 12.', 'tänaval', 'tänav', 'tänavale', 'tänavalt'],
    ['Kuller', 'Hea küll. Ma ootan teid maja ___.', 'Хорошо. Я жду вас у дома.', 'All right. I will wait for you in front of the house.', 'ees', 'eest', 'ette', 'taha'],
    ['Mina', 'Hästi, ma jõuan ___ kümne minuti pärast.', 'Хорошо, я буду на месте через десять минут.', 'Fine, I will be there in ten minutes.', 'kohale', 'kohal', 'kohalt', 'koha'],
    ['Kuller', 'Mul on kollane ___, te tunnete mind ära.', 'На мне жёлтая куртка, вы меня узнаете.', 'I am wearing a yellow jacket, you will recognise me.', 'jope', 'jopet', 'jopega', 'jopes'],
    ['Mina', 'Selge. Kuni siis!', 'Понятно. До встречи!', 'Got it. See you!'],
  ]),
  dialogue('Диалог: посылка у соседа. Вставьте слова', 'Dialogue: the parcel is at the neighbour’s. Fill in the words', 'Dialoog: pakk on naabri juures. Täida lüngad', [
    ['Kuller', 'Tere! Ma tõin teile pakki, aga te ei ___ kodus.', 'Здравствуйте! Я привёз вам посылку, но вас не было дома.', 'Hello! I brought you a parcel, but you were not at home.', 'olnud', 'oli', 'olla', 'olen'],
    ['Mina', 'Vabandust! Kus pakk nüüd ___?', 'Извините! Где теперь посылка?', 'Sorry! Where is the parcel now?', 'on', 'olen', 'oled', 'oleme'],
    ['Kuller', 'Jätsin selle teie ___ juurde.', 'Я оставил её у вашего соседа.', 'I left it with your neighbour.', 'naabri', 'naaber', 'naabrile', 'naabrit'],
    ['Mina', 'Kes see on? Kus ta elab?', 'Кто это? Где он живёт?', 'Who is that? Where does he live?'],
    ['Kuller', 'See on proua Tamm, ta elab teie ___.', 'Это госпожа Тамм, она живёт рядом с вами.', 'It is Mrs Tamm, she lives next to you.', 'kõrval', 'kõrvale', 'kõrvalt', 'kõrva'],
    ['Mina', 'Millal ma ___ pakki kätte?', 'Когда я смогу забрать посылку?', 'When can I pick up the parcel?', 'saan', 'saad', 'saab', 'saame'],
    ['Kuller', 'Proua Tamm on kodus ___ kuueni.', 'Госпожа Тамм дома до шести.', 'Mrs Tamm is at home until six.', 'kella', 'kell', 'kellaga', 'kellale'],
    ['Mina', 'Siis lähen pärast tööd tema ___.', 'Тогда я зайду к ней после работы.', 'Then I will go to her after work.', 'juurde', 'juures', 'juurest', 'juur'],
    ['Kuller', 'Hea küll. Ilusat päeva!', 'Хорошо. Хорошего дня!', 'All right. Have a nice day!'],
    ['Mina', 'Aitäh, head ___!', 'Спасибо, всего доброго!', 'Thank you, goodbye!', 'aega', 'aeg', 'aja', 'aegu'],
  ]),
  dialogue('Диалог: перенос доставки. Вставьте слова', 'Dialogue: moving the delivery. Fill in the words', 'Dialoog: tarne edasilükkamine. Täida lüngad', [
    ['Kuller', 'Tere! Kuidas ma saan teid aidata?', 'Здравствуйте! Чем могу помочь?', 'Hello! How can I help you?'],
    ['Mina', 'Tere! Mul on pakk, aga täna ma ei ___ kodus.', 'Здравствуйте! У меня посылка, но сегодня меня не будет дома.', 'Hello! I have a parcel, but I will not be at home today.', 'ole', 'olen', 'oled', 'olla'],
    ['Kuller', 'Kas te olete ___ kodus?', 'А завтра вы будете дома?', 'Will you be at home tomorrow?', 'homme', 'eile', 'täna', 'mullu'],
    ['Mina', 'Jah, homme olen kodus terve ___.', 'Да, завтра я дома весь день.', 'Yes, tomorrow I am at home all day.', 'päeva', 'päev', 'päeval', 'päevas'],
    ['Kuller', 'Hea küll. Kas kell kümme ___ teile?', 'Хорошо. Вам подходит десять часов?', 'All right. Does ten o’clock suit you?', 'sobib', 'sobin', 'sobid', 'sobime'],
    ['Mina', 'Jah, see sobib. Minu number on 5551234, helistage ___.', 'Да, подходит. Мой номер 5551234, позвоните мне.', 'Yes, that suits me. My number is 5551234, call me.', 'mulle', 'mind', 'mina', 'minu'],
    ['Kuller', 'Selge. Homme kell kümme. Nägemist!', 'Понятно. Завтра в десять. До свидания!', 'Understood. Tomorrow at ten. Goodbye!'],
  ]),
  dialogue('Диалог: повреждённая посылка. Вставьте слова', 'Dialogue: a damaged parcel. Fill in the words', 'Dialoog: kahjustatud pakk. Täida lüngad', [
    ['Kuller', 'Tere! Siin on teie pakk.', 'Здравствуйте! Вот ваша посылка.', 'Hello! Here is your parcel.'],
    ['Mina', 'Oi, karp on ___!', 'Ой, коробка повреждена!', 'Oh, the box is broken!', 'katki', 'katkine', 'katkist', 'katkises'],
    ['Kuller', 'Jah, näen. Kas te tahate selle ___ võtta?', 'Да, вижу. Вы хотите её принять?', 'Yes, I see. Do you want to accept it?', 'vastu', 'peale', 'ära', 'välja'],
    ['Mina', 'Ei, ma ei ___ pakki vastu võtta.', 'Нет, я не хочу принимать посылку.', 'No, I do not want to accept the parcel.', 'taha', 'tahan', 'tahab', 'tahtma'],
    ['Kuller', 'Selge. Siis ma ___ pakki tagasi.', 'Понятно. Тогда я отвезу посылку обратно.', 'Understood. Then I will take the parcel back.', 'viin', 'viid', 'viib', 'viime'],
    ['Mina', 'Kuidas ma uue paki ___?', 'Как я получу новую посылку?', 'How do I get a new parcel?', 'saan', 'saad', 'saab', 'saame'],
    ['Kuller', 'Helistage ___.', 'Позвоните в службу поддержки.', 'Call customer service.', 'klienditeenindusse', 'klienditeeninduses', 'klienditeenindusest', 'klienditeenindus'],
    ['Mina', 'Aitäh, siis ma ___ homme.', 'Спасибо, тогда я позвоню завтра.', 'Thank you, then I will call tomorrow.', 'helistan', 'helistad', 'helistab', 'helistame'],
    ['Kuller', 'Head aega!', 'До свидания!', 'Goodbye!'],
  ]),
];

/** B1: the recipient is away, the delivery is moved. */
export const courierB1: Question[] = [
  dialogue('Диалог: вас нет дома, доставку переносят. Вставьте слова', 'Dialogue: you are away and the delivery is moved. Fill in the words', 'Dialoog: te ei ole kodus ja tarne lükatakse edasi. Täida lüngad', [
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
  dialogue('Диалог: звонок курьера. Вставьте слова', 'Dialogue: the courier calls. Fill in the words', 'Dialoog: kuller helistab. Täida lüngad', [
    ['Kuller', 'Tere! Helistan kullerfirmast, mul on teile pakk. Kas te olete praegu kodus?', 'Здравствуйте! Звоню из курьерской фирмы, у меня для вас посылка. Вы сейчас дома?', 'Hello! I am calling from the courier company, I have a parcel for you. Are you at home now?'],
    ['Mina', 'Hetkel mitte, aga ma ___ koju umbes poole tunni pärast.', 'Сейчас нет, но я буду дома примерно через полчаса.', 'Not at the moment, but I will get home in about half an hour.', 'jõuan', 'jõua', 'jõudma', 'jõudnud'],
    ['Kuller', 'Kahjuks ei saa ma nii kaua ___, mul on veel palju pakke.', 'К сожалению, я не могу так долго ждать, у меня ещё много посылок.', 'Unfortunately I cannot wait that long, I still have many parcels.', 'oodata', 'ootama', 'ootab', 'ootan'],
    ['Mina', 'Kas te saaksite paki naabrile ___?', 'Не могли бы вы оставить посылку соседу?', 'Could you leave the parcel with the neighbour?', 'jätta', 'jätma', 'jätab', 'jättes'],
    ['Kuller', 'Võin küll, kui naaber on ___.', 'Могу, если сосед дома.', 'I can, if the neighbour is at home.', 'kodus', 'kodu', 'koju', 'kodust'],
    ['Mina', 'Ta on ___ kodus, ma just rääkisin temaga.', 'Он наверняка дома, я только что с ним говорил(а).', 'He is definitely at home, I just spoke to him.', 'kindlasti', 'kindel', 'kindlus', 'kindlam'],
    ['Kuller', 'Hea küll. Jätan paki tema ___ ja saadan teile sõnumi.', 'Хорошо. Передам посылку ему в руки и отправлю вам сообщение.', 'All right. I will hand the parcel to him and send you a message.', 'kätte', 'käes', 'käest', 'käsi'],
    ['Mina', 'Suurepärane! ___ ma pakki kätte ei saa, siis helistan teile.', 'Отлично! Если я не получу посылку, я вам позвоню.', 'Great! If I do not get the parcel, I will call you.', 'Kui', 'Et', 'Kas', 'Mis'],
    ['Kuller', 'Kõik selge. Ilusat õhtut!', 'Всё понятно. Хорошего вечера!', 'Everything is clear. Have a nice evening!'],
  ]),
  dialogue('Диалог: посылка у соседа. Вставьте слова', 'Dialogue: the parcel is at the neighbour’s. Fill in the words', 'Dialoog: pakk on naabri juures. Täida lüngad', [
    ['Kuller', 'Tere, ma olen kuller. Teid ei ole kodus. Kas ma võin paki mõnele naabrile jätta?', 'Здравствуйте, я курьер. Вас нет дома. Могу я оставить посылку какому-нибудь соседу?', 'Hello, I am the courier. You are not at home. May I leave the parcel with a neighbour?'],
    ['Mina', 'Jah, palun jätke see naabrile, ___ elab korteris kaheksa.', 'Да, пожалуйста, оставьте её соседу, который живёт в квартире восемь.', 'Yes, please leave it with the neighbour who lives in flat eight.', 'kes', 'mis', 'kus', 'kelle'],
    ['Kuller', 'Kas ta teab, et te pakki ___?', 'Он знает, что вы ждёте посылку?', 'Does he know that you are expecting a parcel?', 'ootate', 'ootab', 'ootama', 'ootasite'],
    ['Mina', 'Jah, ma rääkisin temaga ___ ja ta lubas pakki vastu võtta.', 'Да, я говорил(а) с ним вчера, и он обещал принять посылку.', 'Yes, I spoke to him yesterday and he promised to accept the parcel.', 'eile', 'homme', 'praegu', 'alati'],
    ['Kuller', 'Hea küll. Kirjutan paki peale teie nime, et naaber ___, kellele see kuulub.', 'Хорошо. Напишу на посылке ваше имя, чтобы сосед знал, чья она.', 'All right. I will write your name on the parcel so that the neighbour knows whose it is.', 'teaks', 'teab', 'teada', 'teadis'],
    ['Mina', 'Palun lisage ka minu number, ___ ta mind vajadusel kätte saaks.', 'Пожалуйста, добавьте и мой номер, чтобы он мог при необходимости мне дозвониться.', 'Please add my number too, so that he can reach me if needed.', 'et', 'kui', 'sest', 'kuigi'],
    ['Kuller', 'Tehtud. Ma saadan teile ___, kui pakk on kohale toimetatud.', 'Готово. Я отправлю вам сообщение, когда посылка будет доставлена.', 'Done. I will send you a message when the parcel has been delivered.', 'sõnumi', 'sõnum', 'sõnumit', 'sõnumile'],
    ['Mina', 'Aitäh! Kui ma koju tulen, ___ ma kohe naabri juurde.', 'Спасибо! Когда я приду домой, сразу зайду к соседу.', 'Thank you! When I get home I will go straight to the neighbour.', 'lähen', 'läheb', 'minema', 'läinud'],
    ['Kuller', 'Ilusat õhtut!', 'Хорошего вечера!', 'Have a nice evening!'],
  ]),
  dialogue('Диалог: перенос доставки. Вставьте слова', 'Dialogue: moving the delivery. Fill in the words', 'Dialoog: tarne edasilükkamine. Täida lüngad', [
    ['Kuller', 'Tere, kullerteenindus. Kuidas ma saan teid aidata?', 'Здравствуйте, курьерская служба. Чем могу помочь?', 'Hello, courier service. How can I help you?'],
    ['Mina', 'Tere! Mul on täna pakk tulemas, aga ma ei jõua õigeks ajaks ___.', 'Здравствуйте! Сегодня должна прийти посылка, но я не успею домой вовремя.', 'Hello! I have a parcel coming today, but I will not get home in time.', 'koju', 'kodus', 'kodust', 'kodu'],
    ['Kuller', 'Kas te sooviksite tarneaega ___?', 'Хотите изменить время доставки?', 'Would you like to change the delivery time?', 'muuta', 'muutma', 'muudab', 'muutnud'],
    ['Mina', 'Jah, palun tooge pakk homme pärast ___.', 'Да, пожалуйста, привезите посылку завтра после работы.', 'Yes, please bring the parcel tomorrow after work.', 'tööd', 'töö', 'tööl', 'tööle'],
    ['Kuller', 'Pärast tööd tähendab kella kuue ja kaheksa ___?', '«После работы» — это между шестью и восемью?', '“After work” means between six and eight?', 'vahel', 'vahelt', 'vahele', 'vaheline'],
    ['Mina', 'Jah, see sobib. Palun ___ see mulle sõnumiga.', 'Да, подходит. Пожалуйста, подтвердите это мне сообщением.', 'Yes, that suits me. Please confirm it to me by message.', 'kinnitage', 'kinnitama', 'kinnitada', 'kinnitades'],
    ['Kuller', 'Kindlasti. Teie pakk on nüüd homseks ___.', 'Конечно. Ваша посылка теперь назначена на завтра.', 'Certainly. Your parcel is now booked for tomorrow.', 'broneeritud', 'broneerida', 'broneerib', 'broneeritakse'],
    ['Mina', 'Suur tänu!', 'Большое спасибо!', 'Many thanks!'],
    ['Kuller', 'Pole probleemi. Kena päeva!', 'Не за что. Хорошего дня!', 'No problem. Have a nice day!'],
  ]),
  dialogue('Диалог: повреждённая посылка. Вставьте слова', 'Dialogue: a damaged parcel. Fill in the words', 'Dialoog: kahjustatud pakk. Täida lüngad', [
    ['Kuller', 'Tere! Siin on teie pakk. Palun kontrollige, kas karp on terve.', 'Здравствуйте! Вот ваша посылка. Проверьте, пожалуйста, цела ли коробка.', 'Hello! Here is your parcel. Please check whether the box is intact.'],
    ['Mina', 'Kahjuks on karp viga ___ ja sisu on märg.', 'К сожалению, коробка повреждена, и содержимое мокрое.', 'Unfortunately the box is damaged and the contents are wet.', 'saanud', 'saama', 'saada', 'saades'],
    ['Kuller', 'Kas te soovite pakki ikkagi vastu ___?', 'Вы всё равно хотите принять посылку?', 'Do you still want to accept the parcel?', 'võtta', 'võtma', 'võtab', 'võtnud'],
    ['Mina', 'Ei, sest toode võib olla ___.', 'Нет, потому что товар может быть неисправен.', 'No, because the product may be defective.', 'vigane', 'viga', 'vigase', 'vigaselt'],
    ['Kuller', 'Hea küll. Teen kohe pakist ___ ja saadan selle klienditoele.', 'Хорошо. Сейчас сфотографирую посылку и отправлю в службу поддержки.', 'All right. I will take a picture of the parcel right away and send it to customer support.', 'pildi', 'pilt', 'pilti', 'pildist'],
    ['Mina', 'Ma esitan ___ ja nõuan raha tagasi.', 'Я подам жалобу и потребую вернуть деньги.', 'I will make a complaint and demand a refund.', 'kaebuse', 'kaebus', 'kaebusele', 'kaebusest'],
    ['Kuller', 'Saan aru. Vabandame ebamugavuse pärast.', 'Понимаю. Приносим извинения за неудобства.', 'I understand. We apologise for the inconvenience.'],
    ['Mina', 'Palun ___ mulle kinnitus e-postiga.', 'Пожалуйста, пришлите мне подтверждение по электронной почте.', 'Please send me a confirmation by e-mail.', 'saatke', 'saatma', 'saata', 'saates'],
    ['Kuller', 'Teen seda kohe. Head päeva!', 'Сделаю сразу. Хорошего дня!', 'I will do it right away. Have a nice day!'],
  ]),
];
