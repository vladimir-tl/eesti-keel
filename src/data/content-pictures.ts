import type { L, Question, Tr } from './questions';
import { tr } from './questions';
import { clock, emoji, price, swatch, sign, board, calendar, familyTree } from './pictures';

/** Picture above the prompt, text options: "what is in the picture?", or a question about a sign, menu or timetable. */
const look = (image: string, prompt: Tr, options: L[], answer: number, explain: Tr): Question => ({
  level: 'A1',
  prompt,
  image,
  options,
  answer,
  explain,
});

/** Picture above the prompt, typed answer: "what is in the picture?" — write the word. */
const lookType = (image: string, prompt: Tr, accept: string[], explain: Tr): Question => ({
  level: 'A1',
  prompt,
  image,
  options: [],
  answer: -1,
  accept,
  explain,
});

/** Text prompt, picture options: "choose the picture". Each picture comes with a caption shown after checking. */
const pick = (prompt: L, pics: [string, L][], answer: number, explain: Tr): Question => ({
  level: 'A1',
  prompt,
  options: pics.map(([, cap]) => cap),
  pics: pics.map(([pic]) => pic),
  answer,
  explain,
});

const whatTime = tr('Mis kell on? Посмотрите на часы.', 'Mis kell on? Look at the clock.', 'Mis kell on? Vaata kella.');
const choosePic = (et: string) => tr(`${et} Выберите картинку.`, `${et} Choose the picture.`, `${et} Vali pilt.`);
const whatIsIt = tr('Mis see on? Что на картинке?', 'Mis see on? What is in the picture?', 'Mis see on? Mis on pildil?');
const whatSign = tr('Что значит эта табличка?', 'What does this sign mean?', 'Mida see silt tähendab?');
const asked = (et: string) => tr(et, et, et);

const shopHours = sign(['AVATUD', 'E–R 9–18', 'L 10–15', 'P suletud']);
const busTimes = board('Buss nr 5 → Kesklinn', [['E–R', '6.30  7.15  8.00'], ['L–P', '8.00  10.00']]);
const cafeMenu = board('Kohvik «Päike»', [['kohv', '2,00 €'], ['tee', '1,50 €'], ['supp', '4,50 €'], ['kook', '3,00 €'], ['võileib', '2,50 €']]);
const friday = calendar('REEDE', 14, 'MÄRTS');
const family = familyTree([
  [['👴', 'Jaan'], ['👵', 'Liisa']],
  [['👨', 'Peeter'], ['👩', 'Kati']],
  [['👧', 'Mari'], ['👦', 'Tõnu']],
]);
const receipt = board('Kviitung', [['piim', '1,20 €'], ['leib', '1,80 €'], ['juust', '3,50 €'], ['KOKKU', '6,50 €']]);
const trains = board('Rong Tallinn → Tartu', [['7.00', '9.30'], ['12.15', '14.40'], ['18.30', '21.00']], ['väljub', 'saabub']);
const lunch = board('Päevapakkumine E–R 11–15', [['seljanka', '4,90 €'], ['kanapasta', '6,50 €'], ['köögiviljasupp', '4,20 €'], ['päevapraad + kohv', '7,50 €']]);
const library = board('Raamatukogu lahtiolekuajad', [['E–N', '10–19'], ['R', '10–17'], ['L', '11–16'], ['P', 'suletud']]);
const forecast = board('Ilmaprognoos', [['E', '☀️', '+18°'], ['T', '🌧️', '+12°'], ['K', '⛅', '+15°'], ['N', '☀️', '+21°']]);

/** Picture questions appended to the topics, keyed by topic id. */
export const pictures: Record<string, Question[]> = {
  // ---------- A1 ----------
  time: [
    look(clock(8, 30), whatTime, ['Kell on pool üheksa', 'Kell on pool kaheksa', 'Kell on kaheksa', 'Kell on veerand üheksa'], 0,
      tr('8:30 — pool üheksa, «половина девятого»: pool считается до следующего часа.', '8:30 — pool üheksa, “half to nine”: pool counts towards the next hour.', '8:30 — pool üheksa: pool loetakse järgmise tunni poole.')),
    look(clock(7, 15), whatTime, ['Kell on veerand kaheksa', 'Kell on veerand seitse', 'Kell on kolmveerand kaheksa', 'Kell on pool kaheksa'], 0,
      tr('7:15 — veerand kaheksa, «четверть восьмого».', '7:15 — veerand kaheksa, “a quarter into eight”.', '7:15 — veerand kaheksa.')),
    look(clock(10, 45), whatTime, ['Kell on kolmveerand üksteist', 'Kell on kolmveerand kümme', 'Kell on veerand üksteist', 'Kell on pool üksteist'], 0,
      tr('10:45 — kolmveerand üksteist, «без четверти одиннадцать».', '10:45 — kolmveerand üksteist, “three quarters into eleven”.', '10:45 — kolmveerand üksteist.')),
    pick(choosePic('Kell on pool kolm.'), [[clock(2, 30), '2:30'], [clock(3, 30), '3:30'], [clock(2, 0), '2:00'], [clock(3, 15), '3:15']], 0,
      tr('pool kolm = 2:30, «половина третьего». 3:30 — pool neli.', 'pool kolm = 2:30, “half to three”. 3:30 is pool neli.', 'pool kolm = 2:30. 3:30 on pool neli.')),
    pick(choosePic('Kell on veerand kuus.'), [[clock(5, 15), '5:15'], [clock(6, 15), '6:15'], [clock(5, 45), '5:45'], [clock(6, 45), '6:45']], 0,
      tr('veerand kuus = 5:15. kolmveerand kuus = 5:45, veerand seitse = 6:15.', 'veerand kuus = 5:15. kolmveerand kuus = 5:45, veerand seitse = 6:15.', 'veerand kuus = 5:15. kolmveerand kuus = 5:45, veerand seitse = 6:15.')),
  ],
  numbers: [
    look(emoji('🍎🍎🍎🍎🍎🍎🍎'), asked('Mitu õuna on pildil?'), ['seitse', 'kuus', 'kaheksa', 'viis'], 0,
      tr('Семь яблок: seitse õuna. После числа — партитив: õun → õuna.', 'Seven apples: seitse õuna. After a number comes the partitive: õun → õuna.', 'Seitse õuna: arvsõna järel on osastav, õun → õuna.')),
    look(emoji('🐈🐈🐈🐈'), asked('Mitu kassi on pildil?'), ['neli', 'viis', 'kolm', 'kuus'], 0,
      tr('Четыре кошки: neli kassi (kass → kassi).', 'Four cats: neli kassi (kass → kassi).', 'Neli kassi (kass → kassi).')),
    pick(choosePic('Maja number on kaksteist.'), [[sign(['12'], 'blue'), '12'], [sign(['20'], 'blue'), '20'], [sign(['2'], 'blue'), '2'], [sign(['21'], 'blue'), '21']], 0,
      tr('kaksteist = 12 (2 + -teist). kakskümmend = 20, kaks = 2, kakskümmend üks = 21.', 'kaksteist = 12 (2 + -teist). kakskümmend = 20, kaks = 2, kakskümmend üks = 21.', 'kaksteist = 12. kakskümmend = 20, kaks = 2, kakskümmend üks = 21.')),
  ],
  colors: [
    pick(choosePic('roheline'), [[swatch('#0ecb5a'), 'roheline'], [swatch('#e03131'), 'punane'], [swatch('#0000b4'), 'sinine'], [swatch('#fcc419'), 'kollane']], 0,
      tr('roheline — зелёный; punane — красный, sinine — синий, kollane — жёлтый.', 'roheline — green; punane — red, sinine — blue, kollane — yellow.', 'roheline; punane, sinine, kollane.')),
    look(swatch('#f783ac'), tr('Mis värv see on? Какой это цвет?', 'Mis värv see on? What colour is it?', 'Mis värv see on?'), ['roosa', 'punane', 'pruun', 'lilla'], 0,
      tr('roosa — розовый; pruun — коричневый, lilla — фиолетовый.', 'roosa — pink; pruun — brown, lilla — purple.', 'roosa; pruun, lilla.')),
    lookType(swatch('#111111'), tr('Mis värv see on? Какой это цвет? Впишите слово.', 'Mis värv see on? What colour is it? Type the word.', 'Mis värv see on? Kirjuta sõna.'), ['must'],
      tr('must — чёрный.', 'must — black.', 'must.')),
  ],
  weather: [
    look(emoji('🌧️'), asked('Mis ilm täna on?'), ['Sajab vihma', 'Sajab lund', 'Päike paistab', 'Tuul puhub'], 0,
      tr('Sajab vihma — идёт дождь.', 'Sajab vihma — it is raining.', 'Sajab vihma.')),
    look(emoji('❄️☃️'), asked('Mis ilm täna on?'), ['Sajab lund', 'Sajab vihma', 'On soe', 'Päike paistab'], 0,
      tr('Sajab lund — идёт снег (lumi → lund в партитиве).', 'Sajab lund — it is snowing (lumi → lund, partitive).', 'Sajab lund (lumi → lund).')),
    pick(choosePic('Päike paistab.'), [[emoji('☀️'), 'Päike paistab'], [emoji('🌧️'), 'Sajab vihma'], [emoji('❄️'), 'Sajab lund'], [emoji('💨'), 'Tuul puhub']], 0,
      tr('päike — солнце, paistma — светить.', 'päike — sun, paistma — to shine.', 'päike, paistma.')),
    pick(choosePic('Täna on pilves.'), [[emoji('☁️'), 'pilves'], [emoji('☀️'), 'päikeseline'], [emoji('🌧️'), 'vihmane'], [emoji('❄️'), 'lumine']], 0,
      tr('pilv — облако; pilves — пасмурно, небо в облаках.', 'pilv — cloud; pilves — cloudy, overcast.', 'pilv; pilves — taevas on pilvedes.')),
    look(emoji('🌡️ −15 °C'), asked('Milline ilm on?'), ['Väga külm', 'Väga soe', 'Kuum', 'Soe'], 0,
      tr('−15 °C — väga külm, «очень холодно». soe — тепло, kuum — жарко.', '−15 °C — väga külm, “very cold”. soe — warm, kuum — hot.', '−15 °C — väga külm. soe, kuum.')),
  ],
  food: [
    look(emoji('🍞'), whatIsIt, ['leib', 'piim', 'juust', 'või'], 0,
      tr('leib — хлеб; piim — молоко, juust — сыр, või — масло.', 'leib — bread; piim — milk, juust — cheese, või — butter.', 'leib; piim, juust, või.')),
    pick(choosePic('Ma joon piima.'), [[emoji('🥛'), 'piim'], [emoji('☕'), 'kohv'], [emoji('🧃'), 'mahl'], [emoji('🍵'), 'tee']], 0,
      tr('jooma + партитив: piim → piima. kohv — кофе, mahl — сок, tee — чай.', 'jooma + partitive: piim → piima. kohv — coffee, mahl — juice, tee — tea.', 'jooma + osastav: piim → piima. kohv, mahl, tee.')),
  ],
  shopping: [
    look(price('3,50 €'), asked('Kui palju see maksab?'), ['kolm eurot viiskümmend senti', 'viis eurot kolmkümmend senti', 'kolm eurot viisteist senti', 'kolmteist eurot viiskümmend senti'], 0,
      tr('3,50 € — kolm eurot viiskümmend senti. После числа — партитив: eurot, senti.', '3,50 € — kolm eurot viiskümmend senti. After a number: partitive eurot, senti.', '3,50 € — kolm eurot viiskümmend senti. Arvsõna järel osastav: eurot, senti.')),
    look(price('0,99 €'), asked('Kui palju see maksab?'), ['üheksakümmend üheksa senti', 'üheksateist senti', 'üheksa senti', 'üheksasada üheksa senti'], 0,
      tr('99 — üheksakümmend üheksa. 19 — üheksateist, 9 — üheksa.', '99 — üheksakümmend üheksa. 19 — üheksateist, 9 — üheksa.', '99 — üheksakümmend üheksa. 19 — üheksateist, 9 — üheksa.')),
    pick(choosePic('See maksab kaksteist eurot.'), [[price('12 €'), '12 €'], [price('20 €'), '20 €'], [price('2 €'), '2 €'], [price('22 €'), '22 €']], 0,
      tr('kaksteist = 12; kakskümmend = 20; kakskümmend kaks = 22.', 'kaksteist = 12; kakskümmend = 20; kakskümmend kaks = 22.', 'kaksteist = 12; kakskümmend = 20; kakskümmend kaks = 22.')),
    look(sign(['ALLAHINDLUS', '−50%'], 'red'), whatSign,
      [tr('Скидка 50%', '50% off', 'Hind on 50% madalam'), tr('Магазин закрыт', 'The shop is closed', 'Pood on suletud'), tr('Цена выросла на 50%', 'The price is 50% higher', 'Hind on 50% kõrgem'), tr('Касса не работает', 'The till is closed', 'Kassa ei tööta')], 0,
      tr('allahindlus — скидка, распродажа.', 'allahindlus — a discount, a sale.', 'allahindlus — hind on madalam.')),
    look(shopHours, asked('Kas pood on pühapäeval avatud?'), ['Ei, pühapäeval on pood suletud', 'Jah, kell 9–18', 'Jah, kell 10–15', 'Jah, ainult hommikul'], 0,
      tr('E–R — с понедельника по пятницу, L — суббота, P — воскресенье. suletud — закрыто.', 'E–R — Monday to Friday, L — Saturday, P — Sunday. suletud — closed.', 'E–R — esmaspäevast reedeni, L — laupäev, P — pühapäev. suletud.')),
    look(shopHours, asked('Millal on pood laupäeval avatud?'), ['kell 10–15', 'kell 9–18', 'kell 9–15', 'kell 10–18'], 0,
      tr('L = laupäev (суббота): 10–15.', 'L = laupäev (Saturday): 10–15.', 'L = laupäev: 10–15.')),
  ],
  transport: [
    look(emoji('🚋'), whatIsIt, ['tramm', 'buss', 'rong', 'takso'], 0,
      tr('tramm — трамвай; buss — автобус, rong — поезд.', 'tramm — tram; buss — bus, rong — train.', 'tramm; buss, rong, takso.')),
    pick(choosePic('Ma sõidan rongiga.'), [[emoji('🚆'), 'rong'], [emoji('🚌'), 'buss'], [emoji('🚲'), 'jalgratas'], [emoji('🚗'), 'auto']], 0,
      tr('rongiga — на поезде (-ga = «с, при помощи»).', 'rongiga — by train (-ga = “with, by”).', 'rongiga (-ga).')),
    pick(choosePic('Ta sõidab jalgrattaga tööle.'), [[emoji('🚲'), 'jalgratas'], [emoji('🚌'), 'buss'], [emoji('🚕'), 'takso'], [emoji('🚢'), 'laev']], 0,
      tr('jalgratas — велосипед, jalgrattaga — на велосипеде.', 'jalgratas — bicycle, jalgrattaga — by bike.', 'jalgratas → jalgrattaga.')),
    look(busTimes, asked('Mis kell läheb esimene buss laupäeval?'), ['kell kaheksa', 'kell pool seitse', 'kell kümme', 'kell veerand kaheksa'], 0,
      tr('L–P (суббота–воскресенье): первый автобус в 8.00 — kell kaheksa.', 'L–P (Saturday–Sunday): the first bus is at 8.00 — kell kaheksa.', 'L–P: esimene buss on kell 8.00.')),
    look(busTimes, asked('Mitu bussi läheb pühapäeval?'), ['kaks', 'kolm', 'üks', 'neli'], 0,
      tr('В выходные (L–P) два автобуса: 8.00 и 10.00.', 'At the weekend (L–P) there are two buses: 8.00 and 10.00.', 'L–P: kaks bussi, 8.00 ja 10.00.')),
  ],
  places: [
    look(emoji('🏥'), whatIsIt, ['haigla', 'pank', 'kool', 'jaam'], 0,
      tr('haigla — больница; pank — банк, kool — школа, jaam — вокзал.', 'haigla — hospital; pank — bank, kool — school, jaam — station.', 'haigla; pank, kool, jaam.')),
    pick(choosePic('pank'), [[emoji('🏦'), 'pank'], [emoji('🏥'), 'haigla'], [emoji('🏫'), 'kool'], [emoji('⛪'), 'kirik']], 0,
      tr('pank — банк; kirik — церковь.', 'pank — bank; kirik — church.', 'pank; kirik.')),
    look(sign(['TÕMBA']), tr('Uksel on silt. Что нужно сделать?', 'There is a sign on the door. What should you do?', 'Uksel on silt. Mida tuleb teha?'),
      [tr('Потянуть дверь на себя', 'Pull the door', 'Uks tuleb enda poole tõmmata'), tr('Толкнуть дверь', 'Push the door', 'Ust tuleb lükata'), tr('Позвонить', 'Ring the bell', 'Tuleb helistada'), tr('Подождать', 'Wait', 'Tuleb oodata')], 0,
      tr('tõmba — «тяни», lükka — «толкай».', 'tõmba — “pull”, lükka — “push”.', 'tõmba — enda poole; lükka — endast eemale.')),
    look(sign(['LÜKKA']), tr('Uksel on silt. Что нужно сделать?', 'There is a sign on the door. What should you do?', 'Uksel on silt. Mida tuleb teha?'),
      [tr('Толкнуть дверь', 'Push the door', 'Ust tuleb lükata'), tr('Потянуть дверь на себя', 'Pull the door', 'Uks tuleb enda poole tõmmata'), tr('Постучать', 'Knock', 'Tuleb koputada'), tr('Закрыть дверь', 'Close the door', 'Uks tuleb sulgeda')], 0,
      tr('lükka — «толкай», tõmba — «тяни».', 'lükka — “push”, tõmba — “pull”.', 'lükka — endast eemale; tõmba — enda poole.')),
    look(sign(['VÄLJAPÄÄS'], 'green'), whatSign,
      [tr('Выход', 'Exit', 'Siit saab välja'), tr('Вход', 'Entrance', 'Siit saab sisse'), tr('Касса', 'Till', 'Kassa'), tr('Туалет', 'Toilet', 'Tualett')], 0,
      tr('väljapääs — выход, sissepääs — вход (välja — наружу, sisse — внутрь).', 'väljapääs — exit, sissepääs — entrance (välja — out, sisse — in).', 'väljapääs — välja; sissepääs — sisse.')),
    look(sign(['SULETUD'], 'red'), whatSign,
      [tr('Закрыто', 'Closed', 'Ei ole avatud'), tr('Открыто', 'Open', 'On avatud'), tr('Перерыв на обед', 'Lunch break', 'Lõunapaus'), tr('Скидки', 'Sale', 'Allahindlus')], 0,
      tr('suletud — закрыто, avatud — открыто.', 'suletud — closed, avatud — open.', 'suletud ↔ avatud.')),
    look(sign(['SUITSETAMINE', 'KEELATUD'], 'red'), whatSign,
      [tr('Курить нельзя', 'No smoking', 'Siin ei tohi suitsetada'), tr('Место для курения', 'Smoking area', 'Siin võib suitsetada'), tr('Здесь продают сигареты', 'Cigarettes sold here', 'Siin müüakse sigarette'), tr('Не шуметь', 'Keep quiet', 'Ära lärma')], 0,
      tr('keelatud — запрещено; suitsetama — курить.', 'keelatud — forbidden; suitsetama — to smoke.', 'keelatud — ei tohi.')),
  ],
  directions: [
    pick(choosePic('Mine vasakule.'), [[emoji('⬅️'), 'vasakule'], [emoji('➡️'), 'paremale'], [emoji('⬆️'), 'otse']], 0,
      tr('vasakule — налево, paremale — направо, otse — прямо.', 'vasakule — left, paremale — right, otse — straight on.', 'vasakule, paremale, otse.')),
    pick(choosePic('Mine otse.'), [[emoji('⬆️'), 'otse'], [emoji('⬅️'), 'vasakule'], [emoji('➡️'), 'paremale']], 0,
      tr('otse — прямо.', 'otse — straight on.', 'otse.')),
  ],
  cafe: [
    look(cafeMenu, asked('Kui palju maksab supp?'), ['4,50 €', '1,50 €', '2,50 €', '3,00 €'], 0,
      tr('В меню: supp — 4,50 €.', 'On the menu: supp — 4,50 €.', 'Menüüs: supp — 4,50 €.')),
    look(cafeMenu, asked('Ma tahan kohvi ja kooki. Kui palju see kokku maksab?'), ['5,00 €', '4,50 €', '3,50 €', '6,00 €'], 0,
      tr('kohv 2,00 € + kook 3,00 € = 5,00 €. kokku — всего, вместе.', 'kohv 2,00 € + kook 3,00 € = 5,00 €. kokku — in total.', 'kohv 2,00 € + kook 3,00 € = 5,00 € kokku.')),
  ],
  days: [
    look(friday, asked('Mis päev on täna?'), ['reede', 'neljapäev', 'laupäev', 'kolmapäev'], 0,
      tr('REEDE — пятница.', 'REEDE — Friday.', 'REEDE.')),
  ],
  dates: [
    look(friday, asked('Mis kuupäev on täna?'), ['neljateistkümnes märts', 'neljas märts', 'neljakümnes märts', 'neljateistkümnes mai'], 0,
      tr('14 — neljateist, 14-е — neljateistkümnes.', '14 — neljateist, the 14th — neljateistkümnes.', '14 — neljateist, 14. — neljateistkümnes.')),
  ],
  months: [
    look(calendar('ESMASPÄEV', 1, 'JUUNI'), asked('Mis kuu see on?'), ['juuni', 'juuli', 'jaanuar', 'mai'], 0,
      tr('juuni — июнь, juuli — июль.', 'juuni — June, juuli — July.', 'juuni ja juuli on suvekuud.')),
  ],
  family: [
    look(family, asked('Mari on Peetri ___.'), ['tütar', 'poeg', 'õde', 'ema'], 0,
      tr('Мари — дочь Пеэтера: tütar. poeg — сын.', 'Mari is Peeter’s daughter: tütar. poeg — son.', 'Mari on Peetri tütar. poeg.')),
    look(family, asked('Tõnu on Mari ___.'), ['vend', 'isa', 'poeg', 'õde'], 0,
      tr('Тыну и Мари — дети одних родителей: vend — брат, õde — сестра.', 'Tõnu and Mari have the same parents: vend — brother, õde — sister.', 'vend ja õde.')),
    look(family, asked('Liisa on Tõnu ___.'), ['vanaema', 'ema', 'tädi', 'õde'], 0,
      tr('Мама папы или мамы — vanaema, бабушка.', 'A parent’s mother is vanaema, grandmother.', 'Isa või ema ema on vanaema.')),
    look(family, asked('Kati on Mari ___.'), ['ema', 'õde', 'vanaema', 'tütar'], 0,
      tr('Кати — мама Мари и Тыну: ema.', 'Kati is Mari and Tõnu’s mum: ema.', 'Kati on Mari ja Tõnu ema.')),
  ],

  // ---------- A2 ----------
  'time-expr': [
    look(clock(3, 5), whatTime, ['viis minutit pärast kolme', 'viis minutit enne kolme', 'kolm minutit pärast viit', 'viisteist minutit pärast kolme'], 0,
      tr('3:05 — viis minutit pärast kolme. pärast и enne — с партитивом: kolm → kolme.', '3:05 — viis minutit pärast kolme. pärast and enne take the partitive: kolm → kolme.', '3:05 — viis minutit pärast kolme. pärast ja enne + osastav.')),
    look(clock(7, 50), whatTime, ['kümme minutit enne kaheksat', 'kümme minutit pärast kaheksat', 'kümme minutit pärast seitset', 'kakskümmend minutit enne kaheksat'], 0,
      tr('7:50 — десять минут до восьми: kümme minutit enne kaheksat.', '7:50 — ten to eight: kümme minutit enne kaheksat.', '7:50 — kümme minutit enne kaheksat.')),
    pick(choosePic('Kell on kakskümmend minutit pärast üheksat.'), [[clock(9, 20), '9:20'], [clock(8, 40), '8:40'], [clock(9, 40), '9:40'], [clock(8, 20), '8:20']], 0,
      tr('pärast üheksat — после девяти: 9:20. 8:40 — kakskümmend minutit enne üheksat.', 'pärast üheksat — after nine: 9:20. 8:40 is kakskümmend minutit enne üheksat.', 'pärast üheksat: 9:20. 8:40 — kakskümmend minutit enne üheksat.')),
  ],
  numbers2: [
    look(price('149 €'), asked('Kui palju see maksab?'), ['sada nelikümmend üheksa eurot', 'sada üheksakümmend neli eurot', 'nelisada üheksateist eurot', 'tuhat nelikümmend üheksa eurot'], 0,
      tr('149 — sada nelikümmend üheksa.', '149 — sada nelikümmend üheksa.', '149 — sada nelikümmend üheksa.')),
    pick(choosePic('Telefon maksab kakssada kolmkümmend eurot.'), [[price('230 €'), '230 €'], [price('320 €'), '320 €'], [price('203 €'), '203 €'], [price('213 €'), '213 €']], 0,
      tr('kakssada = 200, kolmkümmend = 30 → 230. 203 — kakssada kolm, 213 — kakssada kolmteist.', 'kakssada = 200, kolmkümmend = 30 → 230. 203 — kakssada kolm, 213 — kakssada kolmteist.', 'kakssada + kolmkümmend = 230.')),
  ],
  family2: [
    look(family, asked('Jaan on Tõnu ___.'), ['vanaisa', 'isa', 'onu', 'vend'], 0,
      tr('Отец папы или мамы — vanaisa, дедушка. onu — дядя.', 'A parent’s father is vanaisa, grandfather. onu — uncle.', 'Isa või ema isa on vanaisa. onu.')),
    look(family, asked('Peeter ja Kati on Mari ___.'), ['vanemad', 'lapsed', 'vanavanemad', 'õed-vennad'], 0,
      tr('vanemad — родители, vanavanemad — бабушка и дедушка, lapsed — дети.', 'vanemad — parents, vanavanemad — grandparents, lapsed — children.', 'vanemad, vanavanemad, lapsed.')),
    look(family, asked('Mitu lapselast on Jaanil ja Liisal?'), ['kaks', 'üks', 'neli', 'kuus'], 0,
      tr('lapselaps — внук или внучка. У Яана и Лийзы два внука: Мари и Тыну.', 'lapselaps — grandchild. Jaan and Liisa have two: Mari and Tõnu.', 'lapselapsed on Mari ja Tõnu.')),
  ],
  quantities: [
    look(emoji('🍎🍎🍎🍎🍎🍐🍐🍐'), asked('Mitu puuvilja on laual kokku?'), ['kaheksa', 'viis', 'kolm', 'seitse'], 0,
      tr('5 яблок + 3 груши = 8 фруктов: kaheksa puuvilja.', '5 apples + 3 pears = 8 pieces of fruit: kaheksa puuvilja.', '5 õuna + 3 pirni = kaheksa puuvilja.')),
    look(emoji('🍎🍎🍎🍎🍎🍐🍐🍐'), asked('Mida on laual rohkem?'), ['Õunu on rohkem', 'Pirne on rohkem', 'Neid on sama palju', 'Pirne ei ole'], 0,
      tr('rohkem + партитив множественного числа: õunad → õunu, pirnid → pirne.', 'rohkem + plural partitive: õunad → õunu, pirnid → pirne.', 'rohkem + mitmuse osastav: õunu, pirne.')),
  ],
  shopping2: [
    look(sign(['REMONDI TÕTTU', 'SULETUD', '3.–5. MAINI'], 'red'), whatSign,
      [tr('Магазин закрыт на ремонт с 3 по 5 мая', 'The shop is closed for repairs from 3 to 5 May', 'Pood on 3.–5. maini remondi tõttu suletud'),
        tr('После ремонта магазин открыт 3–5 мая', 'After the repairs the shop is open on 3–5 May', 'Pärast remonti on pood 3.–5. mail avatud'),
        tr('Скидки с 3 по 5 мая', 'Sale from 3 to 5 May', 'Allahindlus 3.–5. maini'),
        tr('Магазин работает с 3 до 5 часов', 'The shop is open from 3 to 5 o’clock', 'Pood on avatud kella kolmest viieni')], 0,
      tr('remondi tõttu — из-за ремонта; 3.–5. maini — с 3 по 5 мая.', 'remondi tõttu — because of repairs; 3.–5. maini — from 3 to 5 May.', 'remondi tõttu; 3.–5. maini.')),
    look(receipt, asked('Mis oli kõige kallim?'), ['juust', 'leib', 'piim', 'Kõik maksid sama palju'], 0,
      tr('kõige kallim — самый дорогой: сыр, 3,50 €.', 'kõige kallim — the most expensive: cheese, 3,50 €.', 'kõige kallim: juust, 3,50 €.')),
    look(receipt, asked('Kui palju kõik kokku maksis?'), ['kuus eurot viiskümmend senti', 'viis eurot kuuskümmend senti', 'kolm eurot viiskümmend senti', 'kuusteist eurot viiskümmend senti'], 0,
      tr('KOKKU — итого: 6,50 € = kuus eurot viiskümmend senti.', 'KOKKU — total: 6,50 € = kuus eurot viiskümmend senti.', 'KOKKU: 6,50 € = kuus eurot viiskümmend senti.')),
  ],
  city: [
    look(sign(['PARKIMINE', 'AINULT KLIENTIDELE'], 'blue'), whatSign,
      [tr('Парковаться могут только клиенты', 'Parking for customers only', 'Parkida võivad ainult kliendid'), tr('Парковка бесплатная для всех', 'Free parking for everyone', 'Kõik võivad tasuta parkida'), tr('Клиентам парковаться нельзя', 'Customers may not park here', 'Kliendid ei tohi parkida'), tr('Платная парковка', 'Paid parking', 'Tasuline parkla')], 0,
      tr('ainult — только; klientidele — для клиентов (-le).', 'ainult — only; klientidele — for customers (-le).', 'ainult klientidele.')),
    look(sign(['ETTEVAATUST!', 'MÄRG PÕRAND']), whatSign,
      [tr('Осторожно, мокрый пол', 'Caution, wet floor', 'Põrand on märg, ole ettevaatlik'), tr('Пол моют вечером', 'The floor is cleaned in the evening', 'Põrandat pestakse õhtul'), tr('Не входить', 'No entry', 'Sisse ei tohi minna'), tr('Осторожно, ступенька', 'Mind the step', 'Ettevaatust, trepiaste')], 0,
      tr('ettevaatust — осторожно; märg — мокрый; põrand — пол.', 'ettevaatust — caution; märg — wet; põrand — floor.', 'ettevaatust; märg põrand.')),
  ],
  transport2: [
    look(trains, asked('Kui kaua sõidab rong, mis väljub kell 12.15?'), ['kaks tundi ja kakskümmend viis minutit', 'kaks ja pool tundi', 'kaks tundi ja viisteist minutit', 'kolm tundi'], 0,
      tr('12.15 → 14.40: 2 часа 25 минут. väljub — отправляется, saabub — прибывает.', '12.15 → 14.40: 2 hours 25 minutes. väljub — departs, saabub — arrives.', '12.15 → 14.40: kaks tundi ja kakskümmend viis minutit.')),
    look(trains, asked('Mis kell jõuab viimane rong Tartusse?'), ['kell üheksa õhtul', 'kell pool seitse õhtul', 'kell üheksa hommikul', 'kell kolmveerand kolm päeval'], 0,
      tr('Последний поезд прибывает в 21.00 — kell üheksa õhtul. 18.30 — время отправления.', 'The last train arrives at 21.00 — kell üheksa õhtul. 18.30 is when it leaves.', 'Viimane rong saabub kell 21.00. 18.30 väljub.')),
    look(sign(['Buss nr 5 ei sõida', '1.–10. juulini', 'teetööde tõttu'], 'red'), whatSign,
      [tr('С 1 по 10 июля автобус №5 не ходит', 'Bus 5 does not run from 1 to 10 July', 'Buss nr 5 ei sõida 1.–10. juulini'), tr('Автобус №5 ходит только в июле', 'Bus 5 runs only in July', 'Buss nr 5 sõidab ainult juulis'), tr('Автобус №5 опаздывает на 10 минут', 'Bus 5 is 10 minutes late', 'Buss nr 5 hilineb kümme minutit'), tr('Автобус №5 едет новым маршрутом с 10 июля', 'Bus 5 takes a new route from 10 July', 'Buss nr 5 sõidab alates 10. juulist uut teed')], 0,
      tr('ei sõida — не ходит; teetööde tõttu — из-за дорожных работ.', 'ei sõida — does not run; teetööde tõttu — because of roadworks.', 'ei sõida; teetööde tõttu.')),
  ],
  meals: [
    look(lunch, asked('Millal saab päevapakkumist tellida?'), ['Esmaspäevast reedeni kell 11–15', 'Iga päev kell 11–15', 'Esmaspäevast reedeni kell 15–23', 'Ainult nädalavahetusel'], 0,
      tr('E–R — с понедельника по пятницу, 11–15 — с 11 до 15. päevapakkumine — бизнес-ланч, предложение дня.', 'E–R — Monday to Friday, 11–15 — from 11 to 3 pm. päevapakkumine — lunch special.', 'E–R kell 11–15.')),
    look(lunch, asked('Mis on päevapraega kaasas?'), ['kohv', 'supp', 'magustoit', 'mahl'], 0,
      tr('päevapraad + kohv: к блюду дня входит кофе. kaasas — «в комплекте, с собой».', 'päevapraad + kohv: the dish of the day comes with coffee. kaasas — “included, with it”.', 'päevapraad + kohv.')),
  ],
  services: [
    look(library, asked('Millal on raamatukogu kõige kauem avatud?'), ['esmaspäevast neljapäevani', 'reedel', 'laupäeval', 'pühapäeval'], 0,
      tr('E–N (понедельник–четверг) — 10–19, это 9 часов. kõige kauem — дольше всего.', 'E–N (Monday–Thursday) — 10–19, nine hours. kõige kauem — the longest.', 'E–N kell 10–19 — kõige kauem.')),
    look(library, asked('Kas raamatukogu on laupäeval kell viis avatud?'), ['Ei, laupäeval on see avatud kella neljani', 'Jah, kuni kella seitsmeni', 'Jah, kuni kella viieni', 'Ei, laupäeval on raamatukogu suletud'], 0,
      tr('L (суббота) — 11–16: в 17 часов уже закрыто.', 'L (Saturday) — 11–16: at 5 pm it is already closed.', 'L — 11–16: kell 17 on juba suletud.')),
  ],
  forecast: [
    look(forecast, asked('Mis päeval on kõige soojem?'), ['neljapäeval', 'esmaspäeval', 'kolmapäeval', 'teisipäeval'], 0,
      tr('N (четверг) — +21°, самый тёплый день. kõige soojem — теплее всего.', 'N (Thursday) — +21°, the warmest day. kõige soojem — the warmest.', 'N — +21°, kõige soojem.')),
    look(forecast, asked('Mis päeval sajab vihma?'), ['teisipäeval', 'esmaspäeval', 'kolmapäeval', 'neljapäeval'], 0,
      tr('T (вторник) — 🌧️, дождь.', 'T (Tuesday) — 🌧️, rain.', 'T — teisipäeval sajab vihma.')),
  ],
};
