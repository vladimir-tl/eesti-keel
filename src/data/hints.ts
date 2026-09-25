import type { Lang } from '../i18n/ui';

/**
 * Short grammar hints for the harder topics, shown collapsed above the quiz.
 * `**bold**` marks Estonian forms; each string is one paragraph.
 */
export const hints: Record<string, Record<Lang, string[]>> = {
  olla: {
    ru: [
      '**olla** («быть») — неправильный глагол: **mina olen · sina oled · tema on · meie oleme · teie olete · nemad on**.',
      'В разговоре обычно короткие местоимения: **ma, sa, ta, me, te, nad**.',
      'Отрицание: **ei ole** для всех лиц — ma ei ole, ta ei ole. В речи также **pole**.',
      'Артикля нет: Ma olen arst = «Я (есть) врач».',
    ],
    en: [
      '**olla** (“to be”) is irregular: **mina olen · sina oled · tema on · meie oleme · teie olete · nemad on**.',
      'In speech the short pronouns are common: **ma, sa, ta, me, te, nad**.',
      'Negation: **ei ole** for every person — ma ei ole, ta ei ole. Also **pole** in speech.',
      'There are no articles: Ma olen arst = “I am a doctor”.',
    ],
  },
  verbs: {
    ru: [
      'Инфинитив оканчивается на **-ma**: elama, õppima, töötama. Окончания настоящего времени: **-n, -d, -b, -me, -te, -vad**.',
      '**elama**: ma elan, sa elad, ta elab, me elame, te elate, nad elavad.',
      'Неправильные, которые надо запомнить: **juua** — joon, jood, joob; **sööma** — söön, sööd, sööb.',
    ],
    en: [
      'The infinitive ends in **-ma**: elama, õppima, töötama. Present endings: **-n, -d, -b, -me, -te, -vad**.',
      '**elama**: ma elan, sa elad, ta elab, me elame, te elate, nad elavad.',
      'Irregular ones to memorise: **juua** — joon, jood, joob; **sööma** — söön, sööd, sööb.',
    ],
  },
  cases: {
    ru: [
      'Три вопроса — три окончания (внутренние падежи, «в»): **-s** = kus? (где), **-st** = kust? (откуда), **-sse** = kuhu? (куда).',
      'Tartu → **Tartus** (в Тарту), **Tartust** (из Тарту), **Tartusse** (в Тарту, куда-то).',
      '**kodu**: kodus (дома), kodust (из дома), **koju** (домой). У многих слов есть краткая форма «куда?»: kool → kooli, linn → linna.',
    ],
    en: [
      'Three questions — three endings (inner cases, “in”): **-s** = kus? (where), **-st** = kust? (from where), **-sse** = kuhu? (where to).',
      'Tartu → **Tartus** (in Tartu), **Tartust** (from Tartu), **Tartusse** (to Tartu).',
      '**kodu**: kodus (at home), kodust (from home), **koju** (home, going to). Many words have a short “where to?” form: kool → kooli, linn → linna.',
    ],
  },
  kuhu: {
    ru: [
      '**Kuhu?** — «куда?». Две формы: полная **-sse** (Tartusse, koolisse) и краткая (kooli, linna, koju, poodi).',
      'У слов на гласную краткая форма часто совпадает с именительным: **Soome, Narva**.',
      '«На» (наружный падеж): **-le** — turule (на рынок), tööle (на работу).',
      'Порядок: **Kus?** где (-s) → **Kust?** откуда (-st) → **Kuhu?** куда (-sse).',
    ],
    en: [
      '**Kuhu?** — “where to?”. Two forms: the long **-sse** (Tartusse, koolisse) and a short one (kooli, linna, koju, poodi).',
      'For words ending in a vowel the short form is often the same as the nominative: **Soome, Narva**.',
      '“Onto” (outer case): **-le** — turule (to the market), tööle (to work).',
      'The set: **Kus?** where (-s) → **Kust?** from where (-st) → **Kuhu?** where to (-sse).',
    ],
  },
  questions: {
    ru: [
      '**kes** кто · **mis** что · **kus** где · **kust** откуда · **kuhu** куда · **millal** когда · **miks** почему · **kuidas** как · **kui palju** сколько.',
      'Вопрос «да / нет»: **Kas** + обычный порядок слов: Kas sa oled eestlane?',
      '«Да» — **jah**, «нет» — **ei**. Отрицание глагола: **ei** + глагол.',
    ],
    en: [
      '**kes** who · **mis** what · **kus** where · **kust** from where · **kuhu** where to · **millal** when · **miks** why · **kuidas** how · **kui palju** how much.',
      'Yes/no question: **Kas** + normal word order: Kas sa oled eestlane?',
      '“Yes” — **jah**, “no” — **ei**. Negating a verb: **ei** + verb.',
    ],
  },
  numbers: {
    ru: [
      '1–10: **üks, kaks, kolm, neli, viis, kuus, seitse, kaheksa, üheksa, kümme**.',
      '11–19: число + **-teist**: üksteist, kaksteist, kolmteist, viisteist.',
      'Десятки: число + **-kümmend**: kakskümmend (20), kolmkümmend (30). Сотни: **kakssada** (200). 1000 — **tuhat**.',
      'Составные числа: nelikümmend viis (45).',
    ],
    en: [
      '1–10: **üks, kaks, kolm, neli, viis, kuus, seitse, kaheksa, üheksa, kümme**.',
      '11–19: number + **-teist**: üksteist, kaksteist, kolmteist, viisteist.',
      'Tens: number + **-kümmend**: kakskümmend (20), kolmkümmend (30). Hundreds: **kakssada** (200). 1000 — **tuhat**.',
      'Compound numbers: nelikümmend viis (45).',
    ],
  },
  time: {
    ru: [
      '**Kell on kolm** = 3:00. **Mis kell on?** = «который час?».',
      '**pool** — половина, но отсчёт идёт к СЛЕДУЮЩЕМУ часу: pool kolm = 2:30.',
      '**veerand kolm** = 2:15 (четверть третьего), **kolmveerand kolm** = 2:45.',
      'Время суток: **hommikul** утром · **päeval** днём · **õhtul** вечером · **öösel** ночью.',
    ],
    en: [
      '**Kell on kolm** = 3:00. **Mis kell on?** = “What time is it?”.',
      '**pool** means half, but it counts towards the NEXT hour: pool kolm = 2:30.',
      '**veerand kolm** = 2:15 (quarter past two), **kolmveerand kolm** = 2:45.',
      'Parts of the day: **hommikul** morning · **päeval** daytime · **õhtul** evening · **öösel** night.',
    ],
  },
  plural: {
    ru: [
      'Именительный мн. числа: основа + **-d**: raamat → **raamatud**, auto → **autod**.',
      'Слова на **-ne** меняют его на **-sed**: õpilane → õpilased, eestlane → eestlased.',
      'Основа часто меняется: laps → **lapsed**, mees → **mehed**, sõber → **sõbrad**.',
      'С nad / nemad глагол на **-vad**: nad elavad. Прилагательное тоже во мн. числе: suured majad.',
    ],
    en: [
      'Nominative plural: stem + **-d**: raamat → **raamatud**, auto → **autod**.',
      'Words in **-ne** change it to **-sed**: õpilane → õpilased, eestlane → eestlased.',
      'The stem often changes: laps → **lapsed**, mees → **mehed**, sõber → **sõbrad**.',
      'With nad / nemad the verb ends in **-vad**: nad elavad. Adjectives are plural too: suured majad.',
    ],
  },
  partitive: {
    ru: [
      'Партитив («часть, количество») нужен: после **чисел** (kaks õuna, kolm raamatut), для неисчислимого (Ma joon **kohvi**, **teed**, **piima**), после **palju** (palju vett) и в **отрицании** (ma ei joo teed).',
      'Форма у каждого слова своя: kohv → kohvi, leib → leiba, tee → teed, õun → õuna, raamat → raamatut. Учите её вместе со словом.',
    ],
    en: [
      'The partitive (“part, amount”) is used: after **numbers** (kaks õuna, kolm raamatut), for uncountable things (Ma joon **kohvi**, **teed**, **piima**), after **palju** (palju vett) and in **negation** (ma ei joo teed).',
      'Each word has its own form: kohv → kohvi, leib → leiba, tee → teed, õun → õuna, raamat → raamatut. Learn it together with the word.',
    ],
  },
  outer: {
    ru: [
      'Наружные падежи («на, с, на»): **-l** kus? (turul — на рынке) · **-lt** kust? (turult — с рынка) · **-le** kuhu? (turule — на рынок).',
      'Те же окончания: **-l** = «у кого» (mul on — у меня есть), **-le** = «кому» (mulle — мне).',
      'Какая пара у слова — запоминают: turul (на рынке), tööl (на работе), но poes (в магазине).',
    ],
    en: [
      'Outer cases (“on, from, onto”): **-l** kus? (turul — at the market) · **-lt** kust? (turult — from the market) · **-le** kuhu? (turule — to the market).',
      'The same endings: **-l** = “at whom” (mul on — I have), **-le** = “to whom” (mulle — to me).',
      'Which set a word takes must be learned: turul (at the market), tööl (at work), but poes (in the shop).',
    ],
  },
  have: {
    ru: [
      '«У меня есть» — **mul on** + предмет: Mul on auto.',
      '**mul** у меня · **sul** у тебя · **tal** у него/неё · **meil** у нас · **teil** у вас · **neil** у них.',
      'Нет: **ei ole** + партитив: Mul ei ole aega. Состояния: Mul on külm / nälg / janu.',
    ],
    en: [
      '“I have” — **mul on** + thing: Mul on auto.',
      '**mul** I have · **sul** you have · **tal** he/she has · **meil** we have · **teil** you (pl.) have · **neil** they have.',
      'Not having: **ei ole** + partitive: Mul ei ole aega. States: Mul on külm / nälg / janu.',
    ],
  },
  modal: {
    ru: [
      '**tahan** хочу · **oskan** умею · **saan** могу (есть возможность) · **võin** можно · **pean** должен.',
      'После tahan, oskan, saan, võin — инфинитив на **-da**: tahan **juua**, oskan **ujuda**.',
      'После **pean** — инфинитив на **-ma**: pean **töötama**.',
      'Отрицание: ma ei taha, ma ei saa, ma ei pea.',
    ],
    en: [
      '**tahan** want · **oskan** know how to · **saan** can (am able) · **võin** may · **pean** must.',
      'After tahan, oskan, saan, võin — the **-da** infinitive: tahan **juua**, oskan **ujuda**.',
      'After **pean** — the **-ma** infinitive: pean **töötama**.',
      'Negation: ma ei taha, ma ei saa, ma ei pea.',
    ],
  },
  negation: {
    ru: [
      'Отрицание настоящего: **ei** + основа глагола, одинаково для всех лиц: ma / sa / ta / me / te / nad **ei tööta**.',
      'Основа — это форма «ma» без **-n**: ma joon → ma ei **joo**; ma söön → ma ei **söö**; ma loen → ma ei **loe**; ma lähen → ma ei **lähe**.',
      'olla: ma **ei ole**.',
    ],
    en: [
      'Present negation: **ei** + verb stem, the same for every person: ma / sa / ta / me / te / nad **ei tööta**.',
      'The stem is the “ma” form without **-n**: ma joon → ma ei **joo**; ma söön → ma ei **söö**; ma loen → ma ei **loe**; ma lähen → ma ei **lähe**.',
      'olla: ma **ei ole**.',
    ],
  },
  past: {
    ru: [
      'olla: **olin, olid, oli, olime, olite, olid**.',
      'Регулярные глаголы: основа + **-sin, -sid, -s, -sime, -site, -sid**: elama → ma **elasin**, ta **elas**.',
      'Неправильные (запомнить): juua → **jõin**, sööma → **sõin**, minema → **läksin**, tulema → **tulin**.',
      'Отрицание: **ei** + форма на **-nud**: ma ei **olnud**. Маркеры: **eile** (вчера).',
    ],
    en: [
      'olla: **olin, olid, oli, olime, olite, olid**.',
      'Regular verbs: stem + **-sin, -sid, -s, -sime, -site, -sid**: elama → ma **elasin**, ta **elas**.',
      'Irregular (memorise): juua → **jõin**, sööma → **sõin**, minema → **läksin**, tulema → **tulin**.',
      'Negation: **ei** + the **-nud** form: ma ei **olnud**. Marker: **eile** (yesterday).',
    ],
  },
  'adj-agree': {
    ru: [
      'Прилагательное согласуется с существительным по числу и падежу: suur maja → **suured majad**; в большом доме — **suures majas**.',
      'Мн. число: **-d**: uus → uued, hea → head, vana → vanad. Падеж — то же окончание, что у существительного: linnas → suures linnas.',
      'Сказуемое тоже согласуется: majad on suured.',
    ],
    en: [
      'The adjective agrees with the noun in number and case: suur maja → **suured majad**; in a big house — **suures majas**.',
      'Plural: **-d**: uus → uued, hea → head, vana → vanad. Case: the same ending as the noun: linnas → suures linnas.',
      'A predicate adjective agrees too: majad on suured.',
    ],
  },
  prepos: {
    ru: [
      'Послелоги стоят ПОСЛЕ слова в родительном падеже: **laua peal** (на столе), **laua all** (под столом).',
      '**peal** на · **all** под · **ees** перед · **taga** за · **kõrval** рядом · **vahel** между · **sees** внутри.',
      'Родительный падеж обычно близок к основе: laud → laua, pank → panga, maja → maja.',
    ],
    en: [
      'Postpositions come AFTER a noun in the genitive: **laua peal** (on the table), **laua all** (under the table).',
      '**peal** on · **all** under · **ees** in front of · **taga** behind · **kõrval** next to · **vahel** between · **sees** inside.',
      'The genitive is usually close to the stem: laud → laua, pank → panga, maja → maja.',
    ],
  },
  dates: {
    ru: [
      'Даты — порядковые числительные: **esimene** 1 · **teine** 2 · **kolmas** 3 · **neljas** 4 · **viies** 5 · **kuues** 6 · **seitsmes** 7 · **kaheksas** 8 · **üheksas** 9 · **kümnes** 10.',
      'Täna on **kolmas märts** — «сегодня 3 марта».',
      'Минуты: **pärast** + партитив = «после»: viis minutit pärast kolme (3:05); **enne** = «до»: kümme minutit enne kaheksat (7:50).',
    ],
    en: [
      'Dates use ordinals: **esimene** 1st · **teine** 2nd · **kolmas** 3rd · **neljas** 4th · **viies** 5th · **kuues** 6th · **seitsmes** 7th · **kaheksas** 8th · **üheksas** 9th · **kümnes** 10th.',
      'Täna on **kolmas märts** — “today is 3 March”.',
      'Minutes: **pärast** + partitive = “after”: viis minutit pärast kolme (3:05); **enne** = “before”: kümme minutit enne kaheksat (7:50).',
    ],
  },
  directions: {
    ru: [
      '**otse** прямо. Куда? — **paremale** (направо), **vasakule** (налево). Где? — **paremal** (справа), **vasakul** (слева).',
      'Команды: **Mine otse** (идите прямо), **Keera paremale** (поверните направо).',
    ],
    en: [
      '**otse** straight. Where to? — **paremale** (to the right), **vasakule** (to the left). Where? — **paremal** (on the right), **vasakul** (on the left).',
      'Commands: **Mine otse** (go straight), **Keera paremale** (turn right).',
    ],
  },
  verbs2: {
    ru: [
      '**minema**: lähen, lähed, läheb, läheme, lähete, lähevad · **tulema**: tulen, tuled, tuleb… · **tegema**: teen, teed, teeb… · **nägema**: näen, näed, näeb… · **teadma**: tean, tead, teab…',
      '**käima** — ходить регулярно: Ma käin iga päev tööl.',
    ],
    en: [
      '**minema**: lähen, lähed, läheb, läheme, lähete, lähevad · **tulema**: tulen, tuled, tuleb… · **tegema**: teen, teed, teeb… · **nägema**: näen, näed, näeb… · **teadma**: tean, tead, teab…',
      '**käima** — to go regularly: Ma käin iga päev tööl.',
    ],
  },
  genitive: {
    ru: [
      'Родительный падеж отвечает на **Kelle?** («чей?»). Владелец стоит ПЕРЕД предметом: **Mari raamat**, **venna auto**, **linna keskus**.',
      'Форма часто отличается от именительного: vend → **venna**, õde → **õe**, laps → **lapse**, linn → **linna**, kool → **kooli**, raamat → **raamatu**.',
      'Имена и слова на гласную часто не меняются: Mari raamat, isa auto, maja uks. Родительный нужен также для послелогов: laua peal, Läänemere ääres.',
    ],
    en: [
      'The genitive answers **Kelle?** (“whose?”). The owner comes BEFORE the thing: **Mari raamat**, **venna auto**, **linna keskus**.',
      'The form often differs from the nominative: vend → **venna**, õde → **õe**, laps → **lapse**, linn → **linna**, kool → **kooli**, raamat → **raamatu**.',
      'Names and vowel-ending words often stay the same: Mari raamat, isa auto, maja uks. The genitive is also used with postpositions: laua peal, Läänemere ääres.',
    ],
  },
  pronouns: {
    ru: [
      'Как объект (партитив): **mind** меня · **sind** тебя · **teda** его/её · **meid** нас · **teid** вас · **neid** их. Ma näen **sind**.',
      '«Кому?» (-le): **mulle · sulle · talle · meile · teile · neile**. «Чей?»: **minu · sinu · tema · meie · teie · nende**.',
      '«С кем?» (-ga): **minuga · sinuga · temaga · meiega · teiega · nendega**.',
    ],
    en: [
      'As an object (partitive): **mind** me · **sind** you · **teda** him/her · **meid** us · **teid** you (pl.) · **neid** them. Ma näen **sind**.',
      '“To whom?” (-le): **mulle · sulle · talle · meile · teile · neile**. “Whose?”: **minu · sinu · tema · meie · teie · nende**.',
      '“With whom?” (-ga): **minuga · sinuga · temaga · meiega · teiega · nendega**.',
    ],
  },
  comitative: {
    ru: [
      '**-ga** («с») присоединяется слитно к родительному падежу: sõber → sõbra → **sõbraga**, õde → õe → **õega**, piim → piima → **piimaga**.',
      '**-ta** («без»): suhkur → suhkru → **suhkruta**, piim → **piimata**.',
      'Вопросы: **Kellega?** с кем · **Millega?** чем / на чём. Транспорт: bussiga, autoga, rongiga.',
    ],
    en: [
      '**-ga** (“with”) is attached directly to the genitive: sõber → sõbra → **sõbraga**, õde → õe → **õega**, piim → piima → **piimaga**.',
      '**-ta** (“without”): suhkur → suhkru → **suhkruta**, piim → **piimata**.',
      'Questions: **Kellega?** with whom · **Millega?** with what / by what. Transport: bussiga, autoga, rongiga.',
    ],
  },
  translative: {
    ru: [
      '**-ks** (результат / срок / цель): arstiks saama (стать врачом), **nädalaks** (на неделю), **kingituseks** (в подарок), **õhtuks** (к вечеру).',
      '**-na** (в роли, как): õpetaja**na** töötama (работать учителем), lapse**na** (в детстве).',
      'Оба окончания присоединяются к родительному падежу: kokk → koka → **kokaks / kokana**.',
      'Изменение состояния — тоже -ks: Ilm läheb **külmemaks** (становится холоднее), Ta jäi **haigeks** (он заболел).',
    ],
    en: [
      '**-ks** (result / period / purpose): arstiks saama (to become a doctor), **nädalaks** (for a week), **kingituseks** (as a gift), **õhtuks** (by evening).',
      '**-na** (in the role of, as): õpetaja**na** töötama (to work as a teacher), lapse**na** (as a child).',
      'Both endings attach to the genitive: kokk → koka → **kokaks / kokana**.',
      'A change of state also takes -ks: Ilm läheb **külmemaks** (it is getting colder), Ta jäi **haigeks** (he fell ill).',
    ],
  },
  comparison: {
    ru: [
      'Сравнительная степень: родительный падеж + **-m**: odav → odava → **odavam**, suur → suure → **suurem**, ilus → ilusa → **ilusam**.',
      'В двусложной основе конечные -a / -i / -u меняются на **-e**: pikk → pika → **pikem**, külm → külma → **külmem**, halb → halva → **halvem**, vana → **vanem**. Запомнить: hea → **parem**, väike → **väiksem**.',
      'Превосходная: **kõige** + сравнительная: kõige suurem, kõige ilusam. «Чем» — **kui**: Tallinn on suurem kui Tartu. «Такой же … как» — **sama … kui**.',
    ],
    en: [
      'Comparative: genitive + **-m**: odav → odava → **odavam**, suur → suure → **suurem**, ilus → ilusa → **ilusam**.',
      'In a two-syllable stem a final -a / -i / -u becomes **-e**: pikk → pika → **pikem**, külm → külma → **külmem**, halb → halva → **halvem**, vana → **vanem**. Memorise: hea → **parem**, väike → **väiksem**.',
      'Superlative: **kõige** + comparative: kõige suurem, kõige ilusam. “Than” — **kui**: Tallinn on suurem kui Tartu. “As … as” — **sama … kui**.',
    ],
  },
  imperative: {
    ru: [
      'Повелительное «на ты» — основа настоящего времени: ma tulen → **tule**, vaatan → **vaata**, räägin → **räägi**, annan → **anna**, võtan → **võta**, olen → **ole**.',
      'Запрет: **ära** + повелительное: **Ära mine!**, Ära helista!',
      'Вежливая / множественная форма — **-ge / -ke**, её удобно строить от инфинитива на -da: tulla → **tulge**, minna → **minge**, istuda → **istuge**, rääkida → **rääkige**, täita → **täitke**, vaadata → **vaadake**. Запрет: **ärge** + -ge: **Ärge minge!**',
    ],
    en: [
      'The “you” imperative is the present stem: ma tulen → **tule**, vaatan → **vaata**, räägin → **räägi**, annan → **anna**, võtan → **võta**, olen → **ole**.',
      'Prohibition: **ära** + imperative: **Ära mine!**, Ära helista!',
      'The polite / plural form ends in **-ge / -ke** and is easiest to build from the -da infinitive: tulla → **tulge**, minna → **minge**, istuda → **istuge**, rääkida → **rääkige**, täita → **täitke**, vaadata → **vaadake**. Prohibition: **ärge** + -ge: **Ärge minge!**',
    ],
  },
  past2: {
    ru: [
      'Формы, которые надо запомнить: minema → **läksin**, tulema → **tulin**, nägema → **nägin**, tegema → **tegin**, saama → **sain**. Регулярно: käima → **käisin**.',
      'С **-sin**: võtma → **võtsin**, andma → **andsin**, ostma → **ostsin**, ütlema → **ütlesin**, kirjutama → **kirjutasin**.',
      'Окончания «i-прошедшего»: **-in, -id, -i, -ime, -ite, -id** (tegin, tegid, tegi, tegime, tegite, tegid). Отрицание одно для всех лиц: **ei** + -nud: ma ei tulnud, nad ei tulnud.',
    ],
    en: [
      'Forms to memorise: minema → **läksin**, tulema → **tulin**, nägema → **nägin**, tegema → **tegin**, saama → **sain**. Regular: käima → **käisin**.',
      'With **-sin**: võtma → **võtsin**, andma → **andsin**, ostma → **ostsin**, ütlema → **ütlesin**, kirjutama → **kirjutasin**.',
      'Endings of the “i-past”: **-in, -id, -i, -ime, -ite, -id** (tegin, tegid, tegi, tegime, tegite, tegid). Negation is the same for every person: **ei** + -nud: ma ei tulnud, nad ei tulnud.',
    ],
  },
  perfect: {
    ru: [
      'Перфект: **olen / oled / on / oleme / olete / on** + причастие на **-nud**: Ma olen käinud Soomes («я бывал»).',
      'Причастие: основа + -nud: käima → **käinud**, elama → **elanud**, õppima → **õppinud**, lugema → **lugenud**. Нерегулярные: minema → **läinud**, tulema → **tulnud**, nägema → **näinud**, tegema → **teinud**, sööma → **söönud**, olema → **olnud**.',
      'Отрицание: **ei ole** + -nud: Ma ei ole kunagi olnud Itaalias. Смысл: результат / опыт, важный сейчас.',
    ],
    en: [
      'Perfect: **olen / oled / on / oleme / olete / on** + the **-nud** participle: Ma olen käinud Soomes (“I have been to Finland”).',
      'Participle: stem + -nud: käima → **käinud**, elama → **elanud**, õppima → **õppinud**, lugema → **lugenud**. Irregular: minema → **läinud**, tulema → **tulnud**, nägema → **näinud**, tegema → **teinud**, sööma → **söönud**, olema → **olnud**.',
      'Negation: **ei ole** + -nud: Ma ei ole kunagi olnud Itaalias. Meaning: a result / experience that matters now.',
    ],
  },
  conditional: {
    ru: [
      'Условное наклонение: основа + **-ksin, -ksid, -ks, -ksime, -ksite, -ksid**: tahan → **tahaksin**, saan → **saaksin**, tulen → **tuleksin**, olen → ta **oleks**.',
      'Вежливая просьба: **Kas ma saaksin …?**, **Ma tahaksin / sooviksin …**, Kas te aitaksite mind?',
      'Гипотеза: **Kui** mul **oleks** aega, (siis) ma **tuleksin**. («Если бы у меня было время, я бы пришёл».) Отрицание для всех лиц: **ei** + -ks: ma ei tahaks, nad ei tuleks.',
    ],
    en: [
      'Conditional: stem + **-ksin, -ksid, -ks, -ksime, -ksite, -ksid**: tahan → **tahaksin**, saan → **saaksin**, tulen → **tuleksin**, olen → ta **oleks**.',
      'Polite requests: **Kas ma saaksin …?**, **Ma tahaksin / sooviksin …**, Kas te aitaksite mind?',
      'Hypothetical: **Kui** mul **oleks** aega, (siis) ma **tuleksin**. (“If I had time, I would come.”) Negation for every person: **ei** + -ks: ma ei tahaks, nad ei tuleks.',
    ],
  },
  future: {
    ru: [
      'Отдельного будущего времени нет: **настоящее + слово времени**: Homme ma sõidan Tallinnasse.',
      'Планы: **kavatsen** + инфинитив на -da (kavatsen minna), **hakkan** + инфинитив на -ma (hakkan õppima — «начну учиться»).',
      'Слова: **homme, ülehomme, varsti, hiljem, järgmisel nädalal, tuleval aastal**. Прошлое: **eile, üleeile, eelmisel nädalal**.',
    ],
    en: [
      'There is no separate future tense: **present + a time word**: Homme ma sõidan Tallinnasse.',
      'Plans: **kavatsen** + the -da infinitive (kavatsen minna), **hakkan** + the -ma infinitive (hakkan õppima — “I will start learning”).',
      'Words: **homme, ülehomme, varsti, hiljem, järgmisel nädalal, tuleval aastal**. Past: **eile, üleeile, eelmisel nädalal**.',
    ],
  },
  verbs3: {
    ru: [
      '**võtma**: võtan, võtad, võtab · **andma**: annan, annad, annab · **panema**: panen, paned, paneb · **ütlema**: ütlen, ütled, ütleb · **leidma**: leian, leiad, leiab.',
      'Регулярные: **ootama** — ootan · **otsima** — otsin · **küsima** — küsin · **vastama** — vastan · **aitama** — aitan (+ партитив: aitan sind).',
    ],
    en: [
      '**võtma**: võtan, võtad, võtab · **andma**: annan, annad, annab · **panema**: panen, paned, paneb · **ütlema**: ütlen, ütled, ütleb · **leidma**: leian, leiad, leiab.',
      'Regular: **ootama** — ootan · **otsima** — otsin · **küsima** — küsin · **vastama** — vastan · **aitama** — aitan (+ partitive: aitan sind).',
    ],
  },
  infinitive: {
    ru: [
      'Инфинитив на **-ma** — после глаголов движения и начала / долга: **lähen** ujuma, **tulen** sööma, **hakkan** töötama, **pean** minema.',
      'Инфинитив на **-da** — после желания, умения, чувства: **tahan** juua, **oskan** ujuda, **meeldib** lugeda, **unustasin** helistada, **on aeg** minna.',
      '**-mas** — где человек / чем занят: käin **jooksmas**, ta on **ujumas**. **-mast** — откуда вернулся: tulen **ujumast**.',
      'Запомнить -da: sööma → **süüa**, jooma → **juua**, tegema → **teha**, nägema → **näha**, minema → **minna**, tulema → **tulla**.',
    ],
    en: [
      'The **-ma** infinitive follows verbs of motion, starting and obligation: **lähen** ujuma, **tulen** sööma, **hakkan** töötama, **pean** minema.',
      'The **-da** infinitive follows wanting, knowing how, liking: **tahan** juua, **oskan** ujuda, **meeldib** lugeda, **unustasin** helistada, **on aeg** minna.',
      '**-mas** — where someone is / what they are busy doing: käin **jooksmas**, ta on **ujumas**. **-mast** — back from doing: tulen **ujumast**.',
      'Memorise these -da forms: sööma → **süüa**, jooma → **juua**, tegema → **teha**, nägema → **näha**, minema → **minna**, tulema → **tulla**.',
    ],
  },
  object: {
    ru: [
      '**Полное дополнение** — действие завершено и охватывает весь объект. Ед. число = родительный: Ma ostsin **raamatu**. Часто со словами **ära, läbi, valmis**: sõin koogi **ära**.',
      '**Частичное (партитив)** — процесс, часть, неопределённое количество: Ma loen **raamatut**, joon **kohvi**. После **отрицания** — всегда партитив: Ma ei ostnud **raamatut**.',
      'Всегда партитив: **ootama, armastama, aitama, kuulama, otsima, vaatama** (ootan sõpra, kuulan raadiot).',
      'В повелительном полное дополнение — в именительном: **Võta vihmavari kaasa!** Osta **leib**!',
    ],
    en: [
      '**Total object** — the action is complete and covers the whole object. Singular = genitive: Ma ostsin **raamatu**. Often with **ära, läbi, valmis**: sõin koogi **ära**.',
      '**Partial object (partitive)** — a process, a part, an unspecified amount: Ma loen **raamatut**, joon **kohvi**. After a **negation** — always partitive: Ma ei ostnud **raamatut**.',
      'Always partitive: **ootama, armastama, aitama, kuulama, otsima, vaatama** (ootan sõpra, kuulan raadiot).',
      'In the imperative the total object is nominative: **Võta vihmavari kaasa!** Osta **leib**!',
    ],
  },
  route: {
    ru: [
      '**-ni** — «до»: kuni **foorini**, kuni **ristmikuni**, **järgmise** peatuseni.',
      'Послелоги с родительным: foori **juures** (у светофора), silla **all** (под мостом), maja **taga**, panga **kõrval**. **üle** + родительный: üle **silla**, üle **tee**.',
      'Направления: **otse** прямо · **paremale / vasakule** направо / налево · **keerake / pöörake** поверните (вежливо) · **mine / minge** иди / идите.',
    ],
    en: [
      '**-ni** — “as far as”: kuni **foorini**, kuni **ristmikuni**, **järgmise** peatuseni.',
      'Postpositions with the genitive: foori **juures** (by the traffic light), silla **all** (under the bridge), maja **taga**, panga **kõrval**. **üle** + genitive: üle **silla**, üle **tee**.',
      'Directions: **otse** straight on · **paremale / vasakule** right / left · **keerake / pöörake** turn (polite) · **mine / minge** go.',
    ],
  },
  quantities: {
    ru: [
      'После меры (kilo, liiter, pudel, tükk, pakk) — партитив: pudel **vett**, liiter **piima**, pakk **võid**.',
      'Исчисляемое после меры — партитив мн. числа: kaks kilo **õunu**, kilo **kartuleid**, kilo **mune**. Но после числительного — ед. число: kümme **muna**.',
      'Оплата: **Kas saab kaardiga maksta?** · **sularahas** — наличными · **Palun tšekk.**',
    ],
    en: [
      'After a measure (kilo, liiter, pudel, tükk, pakk) — partitive: pudel **vett**, liiter **piima**, pakk **võid**.',
      'Countable things after a measure — plural partitive: kaks kilo **õunu**, kilo **kartuleid**, kilo **mune**. But after a numeral — the singular: kümme **muna**.',
      'Paying: **Kas saab kaardiga maksta?** · **sularahas** — in cash · **Palun tšekk.**',
    ],
  },
  forecast: {
    ru: [
      'Температура: viis kraadi **sooja** (+5), viis kraadi **külma** (−5). **Mitu kraadi on väljas?**',
      'Осадки: **sajab vihma / lund** (идёт дождь / снег) — партитив. Homme **sajab** vihma — будущее выражается настоящим.',
      'Изменение: Ilm läheb **soojemaks / külmemaks** (-ks). Состояние: **pilves** облачно, **selge** ясно, **tuuline** ветрено, **libe** скользко.',
    ],
    en: [
      'Temperature: viis kraadi **sooja** (+5), viis kraadi **külma** (−5). **Mitu kraadi on väljas?**',
      'Precipitation: **sajab vihma / lund** (it is raining / snowing) — partitive. Homme **sajab** vihma — the future uses the present.',
      'Change: Ilm läheb **soojemaks / külmemaks** (-ks). State: **pilves** cloudy, **selge** clear, **tuuline** windy, **libe** slippery.',
    ],
  },
  kaima: {
    ru: [
      '**käima** — ходить регулярно или сходить туда и обратно. Отвечает на **где?** (-s, -l): käin **tööl**, käin **koolis**, eile käisin **kinos**.',
      '**minema** — идти / уходить куда-то, в одну сторону. Отвечает на **куда?** (-sse, -le, -i): lähen **tööle**, lähen **kinno**, ta läks **koju**.',
      '**tulema** — приходить сюда, к говорящему: Tule siia! **sõitma** — ехать на транспорте: sõidan bussiga.',
      'Формы: **käima** — käin, käisin, käinud · **minema** — lähen, läksin, läinud · **tulema** — tulen, tulin, tulnud.',
    ],
    en: [
      '**käima** — to go regularly, or to go somewhere and come back. It takes **where?** (-s, -l): käin **tööl**, käin **koolis**, eile käisin **kinos**.',
      '**minema** — to go / leave for somewhere, one way. It takes **where to?** (-sse, -le, -i): lähen **tööle**, lähen **kinno**, ta läks **koju**.',
      '**tulema** — to come here, towards the speaker: Tule siia! **sõitma** — to travel by vehicle: sõidan bussiga.',
      'Forms: **käima** — käin, käisin, käinud · **minema** — lähen, läksin, läinud · **tulema** — tulen, tulin, tulnud.',
    ],
  },
  plural2: {
    ru: [
      '**Партитив мн. числа** (много чего-то, объект-процесс): raamat → **raamatuid**, tomat → **tomateid**, kass → **kasse**, õun → **õunu**, sõber → **sõpru**. Palju sõpru, loen raamatuid.',
      '**Родительный мн. числа** на **-de / -te**: linn → **linnade**, sõber → **sõprade**, laps → **laste**, suur → **suurte**.',
      'Остальные падежи мн. числа = родительный мн. + окончание: linnade**s**, laste**le**, sõprade**ga**. Прилагательное согласуется: **suurtes** linnades.',
    ],
    en: [
      '**Plural partitive** (lots of something, a process object): raamat → **raamatuid**, tomat → **tomateid**, kass → **kasse**, õun → **õunu**, sõber → **sõpru**. Palju sõpru, loen raamatuid.',
      '**Genitive plural** in **-de / -te**: linn → **linnade**, sõber → **sõprade**, laps → **laste**, suur → **suurte**.',
      'The other plural cases = genitive plural + ending: linnade**s**, laste**le**, sõprade**ga**. The adjective agrees: **suurtes** linnades.',
    ],
  },
  postpos: {
    ru: [
      'Послелоги стоят **после** слова в **родительном**: arsti **juurde** (к врачу) · arsti **juures** (у врача) · arsti **juurest** (от врача).',
      'Ещё: **vastas** напротив · **keskel** посередине · **ümber** вокруг · **kaudu** через · **kõrval** рядом. **koos** + -ga: koos õega (вместе с сестрой).',
      '**pärast** и **enne** перед словом — с партитивом: **pärast tööd**, **enne sööki**. Но kolme päeva **pärast** (после слова) — «через три дня».',
    ],
    en: [
      'Postpositions come **after** a **genitive** noun: arsti **juurde** (to the doctor’s) · arsti **juures** (at the doctor’s) · arsti **juurest** (from the doctor’s).',
      'Also: **vastas** opposite · **keskel** in the middle · **ümber** around · **kaudu** via · **kõrval** next to. **koos** + -ga: koos õega (together with my sister).',
      '**pärast** and **enne** before the word take the partitive: **pärast tööd**, **enne sööki**. But kolme päeva **pärast** (after the word) — “in three days”.',
    ],
  },
  complex: {
    ru: [
      '**et** — «что»: Ma arvan, et ta tuleb. **kas** — «ли»: Ma ei tea, kas ta tuleb.',
      '**kui** — «если / когда»: Kui sul on aega, tule. **kuigi** — «хотя». **sest** — «потому что». **seepärast** — «поэтому».',
      'Перед союзами et, kuigi, sest и перед придаточным ставится запятая.',
      'Порядок слов: в придаточном глагол часто уходит в конец — kui ma **koju tulen**. Если придаточное стоит первым, главное начинают с **siis** или с глагола: Kui ma koju tulen, **siis ma söön** / **söön ma**.',
    ],
    en: [
      '**et** — “that”: Ma arvan, et ta tuleb. **kas** — “whether”: Ma ei tea, kas ta tuleb.',
      '**kui** — “if / when”: Kui sul on aega, tule. **kuigi** — “although”. **sest** — “because”. **seepärast** — “therefore”.',
      'A comma goes before the conjunctions et, kuigi, sest and before a subordinate clause.',
      'Word order: in the subordinate clause the verb often goes last — kui ma **koju tulen**. If the subordinate clause comes first, start the main clause with **siis** or with the verb: Kui ma koju tulen, **siis ma söön** / **söön ma**.',
    ],
  },
  'time-expr': {
    ru: [
      '**Когда?** — окончание **-l**: esmaspäeval (в понедельник), laupäeval, hommikul, suvel, nädalavahetusel. Месяцы — **-s**: jaanuaris, mais.',
      '**Через** — **pärast** после слова (родительный): kolme päeva **pärast**. **После** — pärast перед словом (партитив): **pärast** tööd, pärast sööki. **До** — **enne** + партитив: enne sööki. **Назад** — **tagasi**: kaks aastat tagasi.',
      '**Сколько времени** — партитив: kolm aastat, kaks tundi.',
    ],
    en: [
      '**When?** — the ending **-l**: esmaspäeval (on Monday), laupäeval, hommikul, suvel, nädalavahetusel. Months take **-s**: jaanuaris, mais.',
      '**In (time)** — **pärast** after the word (genitive): kolme päeva **pärast**. **After** — pärast before the word (partitive): **pärast** tööd, pärast sööki. **Before** — **enne** + partitive: enne sööki. **Ago** — **tagasi**: kaks aastat tagasi.',
      '**For how long** — partitive: kolm aastat, kaks tundi.',
    ],
  },
  numbers2: {
    ru: [
      'Сотни и тысячи: **kakssada** 200 · **viissada** 500 · **tuhat** 1000 · **kümme tuhat** 10 000 · **miljon** 1 000 000.',
      'Годы читаются целиком: 2025 — **kaks tuhat kakskümmend viis**; 1991 — **tuhat üheksasada üheksakümmend üks**.',
      'После числительных (кроме üks) — партитив ед. числа: kakskümmend viis **eurot**, viiskümmend **protsenti**; но **üks euro**.',
    ],
    en: [
      'Hundreds and thousands: **kakssada** 200 · **viissada** 500 · **tuhat** 1000 · **kümme tuhat** 10,000 · **miljon** 1,000,000.',
      'Years are read in full: 2025 — **kaks tuhat kakskümmend viis**; 1991 — **tuhat üheksasada üheksakümmend üks**.',
      'After numerals (except üks) — singular partitive: kakskümmend viis **eurot**, viiskümmend **protsenti**; but **üks euro**.',
    ],
  },
  letters: {
    ru: [
      'Официально: **Lugupeetud härra / proua …** → в конце **Lugupidamisega**. Дружески: **Kallis / Hea Mari** → **Kallistan! / Parimate soovidega**.',
      'Полезно: **Ootan vastust** (жду ответа) · **Tänan kutse eest** (благодарю за приглашение) · **Lisan manusena** (прикладываю) · **Vabandust hilinemise pärast**.',
    ],
    en: [
      'Formal: **Lugupeetud härra / proua …** → close with **Lugupidamisega**. Friendly: **Kallis / Hea Mari** → **Kallistan! / Parimate soovidega**.',
      'Useful: **Ootan vastust** (I look forward to your reply) · **Tänan kutse eest** (thanks for the invitation) · **Lisan manusena** (I attach) · **Vabandust hilinemise pärast**.',
    ],
  },
};
