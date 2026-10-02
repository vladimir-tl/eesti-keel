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
    et: [
      '**olla** (“to be”) on ebareeglipärane verb: **mina olen · sina oled · tema on · meie oleme · teie olete · nemad on**.',
      'Kõnes kasutatakse sageli lühikesi asesõnu: **ma, sa, ta, me, te, nad**.',
      'Eitus: **ei ole** kõigis pööretes — ma ei ole, ta ei ole. Kõnekeeles ka **pole**.',
      'Artikleid ei ole: Ma olen arst = “I am a doctor”.',
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
    et: [
      'Tegevusnimi lõpeb **-ma**: elama, õppima, töötama. Oleviku lõpud: **-n, -d, -b, -me, -te, -vad**.',
      '**elama**: ma elan, sa elad, ta elab, me elame, te elate, nad elavad.',
      'Ebareeglipärased, mis tuleb meelde jätta: **juua** — joon, jood, joob; **sööma** — söön, sööd, sööb.',
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
    et: [
      'Kolm küsimust — kolm lõppu (sisekohakäänded): **-s** = kus?, **-st** = kust?, **-sse** = kuhu?',
      'Tartu → **Tartus**, **Tartust**, **Tartusse**.',
      '**kodu**: kodus, kodust, **koju**. Paljudel sõnadel on lühike kuhu-vorm: kool → kooli, linn → linna.',
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
    et: [
      '**Kuhu?** — “where to?”. Kaks vormi: pikk **-sse** (Tartusse, koolisse) ja lühike (kooli, linna, koju, poodi).',
      'Täishäälikuga lõppevatel sõnadel on lühike vorm sageli sama mis nimetav: **Soome, Narva**.',
      'Väliskohakääne: **-le** — turule, tööle.',
      'Süsteem: **Kus?** (-s) → **Kust?** (-st) → **Kuhu?** (-sse).',
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
    et: [
      '**kes** who · **mis** what · **kus** where · **kust** from where · **kuhu** where to · **millal** when · **miks** why · **kuidas** how · **kui palju** how much.',
      'Jah/ei-küsimus: **Kas** + tavaline sõnajärg: Kas sa oled eestlane?',
      '„Yes“ — **jah**, „no“ — **ei**. Verbi eitus: **ei** + verb.',
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
    et: [
      '1–10: **üks, kaks, kolm, neli, viis, kuus, seitse, kaheksa, üheksa, kümme**.',
      '11–19: arv + **-teist**: üksteist, kaksteist, kolmteist, viisteist.',
      'Kümned: arv + **-kümmend**: kakskümmend (20), kolmkümmend (30). Sajad: **kakssada** (200). 1000 — **tuhat**.',
      'Liitarvud: nelikümmend viis (45).',
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
    et: [
      '**Kell on kolm** = 3.00. **Mis kell on?** = “What time is it?”.',
      '**pool** tähendab poolt, aga loetakse JÄRGMISE tunni poole: pool kolm = 2.30.',
      '**veerand kolm** = 2.15, **kolmveerand kolm** = 2.45.',
      'Päeva osad: **hommikul · päeval · õhtul · öösel**.',
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
    et: [
      'Mitmuse nimetav: tüvi + **-d**: raamat → **raamatud**, auto → **autod**.',
      '**-ne**-lõpulistes sõnades muutub see **-sed**: õpilane → õpilased, eestlane → eestlased.',
      'Tüvi muutub sageli: laps → **lapsed**, mees → **mehed**, sõber → **sõbrad**.',
      'nad / nemad puhul lõpeb verb **-vad**: nad elavad. Ka omadussõna on mitmuses: suured majad.',
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
    et: [
      'Osastavat (osa, hulk) kasutatakse: pärast **arvsõna** (kaks õuna, kolm raamatut), loendamatute asjade puhul (Ma joon **kohvi**, **teed**, **piima**), pärast sõna **palju** (palju vett) ja **eituses** (ma ei joo teed).',
      'Igal sõnal on oma vorm: kohv → kohvi, leib → leiba, tee → teed, õun → õuna, raamat → raamatut. Õpi see koos sõnaga.',
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
    et: [
      'Väliskohakäänded: **-l** kus? (turul) · **-lt** kust? (turult) · **-le** kuhu? (turule).',
      'Samad lõpud: **-l** = „kellel“ (mul on — I have), **-le** = „kellele“ (mulle — to me).',
      'Millist rida sõna kasutab, tuleb õppida: turul, tööl, aga poes.',
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
    et: [
      '„I have“ — **mul on** + asi: Mul on auto.',
      '**mul · sul · tal · meil · teil · neil** — I / you / he, she / we / you (pl.) / they have.',
      'Kui ei ole: **ei ole** + osastav: Mul ei ole aega. Seisundid: Mul on külm / nälg / janu.',
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
    et: [
      '**tahan** want · **oskan** know how to · **saan** can · **võin** may · **pean** must.',
      'Pärast sõnu tahan, oskan, saan, võin — **da**-tegevusnimi: tahan **juua**, oskan **ujuda**.',
      'Pärast sõna **pean** — **ma**-tegevusnimi: pean **töötama**.',
      'Eitus: ma ei taha, ma ei saa, ma ei pea.',
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
    et: [
      'Oleviku eitus: **ei** + verbi tüvi, kõigis pööretes sama: ma / sa / ta / me / te / nad **ei tööta**.',
      'Tüvi on ma-vorm ilma **-n**-ita: ma joon → ma ei **joo**; ma söön → ma ei **söö**; ma loen → ma ei **loe**; ma lähen → ma ei **lähe**.',
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
    et: [
      'olla: **olin, olid, oli, olime, olite, olid**.',
      'Reeglipärased verbid: tüvi + **-sin, -sid, -s, -sime, -site, -sid**: elama → ma **elasin**, ta **elas**.',
      'Ebareeglipärased (jäta meelde): juua → **jõin**, sööma → **sõin**, minema → **läksin**, tulema → **tulin**.',
      'Eitus: **ei** + **nud**-vorm: ma ei **olnud**. Ajamäärus: **eile**.',
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
    et: [
      'Omadussõna ühildub nimisõnaga arvus ja käändes: suur maja → **suured majad**; **suures majas**.',
      'Mitmus: **-d**: uus → uued, hea → head, vana → vanad. Kääne: sama lõpp mis nimisõnal: linnas → suures linnas.',
      'Ühildub ka öeldistäide: majad on suured.',
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
    et: [
      'Tagasõnad tulevad PÄRAST omastavas nimisõna: **laua peal**, **laua all**.',
      '**peal** on · **all** under · **ees** in front of · **taga** behind · **kõrval** next to · **vahel** between · **sees** inside.',
      'Omastav on tavaliselt tüve lähedal: laud → laua, pank → panga, maja → maja.',
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
    et: [
      'Kuupäevad on järgarvudega: **esimene · teine · kolmas · neljas · viies · kuues · seitsmes · kaheksas · üheksas · kümnes**.',
      'Täna on **kolmas märts** — 3. märts.',
      'Minutid: **pärast** + osastav: viis minutit pärast kolme (3.05); **enne**: kümme minutit enne kaheksat (7.50).',
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
    et: [
      '**otse**. Kuhu? — **paremale**, **vasakule**. Kus? — **paremal**, **vasakul**.',
      'Käsud: **Mine otse**, **Keera paremale**.',
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
    et: [
      '**minema**: lähen, lähed, läheb, läheme, lähete, lähevad · **tulema**: tulen, tuled, tuleb… · **tegema**: teen, teed, teeb… · **nägema**: näen, näed, näeb… · **teadma**: tean, tead, teab…',
      '**käima** — regulaarselt kuskil käima: Ma käin iga päev tööl.',
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
    et: [
      'Omastav vastab küsimusele **Kelle?**. Omanik on ENNE asja: **Mari raamat**, **venna auto**, **linna keskus**.',
      'Vorm erineb sageli nimetavast: vend → **venna**, õde → **õe**, laps → **lapse**, linn → **linna**, kool → **kooli**, raamat → **raamatu**.',
      'Nimed ja täishäälikuga lõppevad sõnad jäävad sageli samaks: Mari raamat, isa auto, maja uks. Omastavat kasutatakse ka tagasõnadega: laua peal, Läänemere ääres.',
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
    et: [
      'Sihitisena (osastav): **mind · sind · teda · meid · teid · neid**. Ma näen **sind**.',
      '„Kellele?“ (-le): **mulle · sulle · talle · meile · teile · neile**. „Kelle?“: **minu · sinu · tema · meie · teie · nende**.',
      '„Kellega?“ (-ga): **minuga · sinuga · temaga · meiega · teiega · nendega**.',
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
    et: [
      '**-ga** liidetakse otse omastavale: sõber → sõbra → **sõbraga**, õde → õe → **õega**, piim → piima → **piimaga**.',
      '**-ta** (ilma): suhkur → suhkru → **suhkruta**, piim → **piimata**.',
      'Küsimused: **Kellega? · Millega?** Transport: bussiga, autoga, rongiga.',
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
    et: [
      '**-ks** (tulemus / ajavahemik / eesmärk): arstiks saama, **nädalaks**, **kingituseks**, **õhtuks**.',
      '**-na** (kellena, millena): õpetaja**na** töötama, lapse**na**.',
      'Mõlemad lõpud liituvad omastavale: kokk → koka → **kokaks / kokana**.',
      'Seisundi muutus on samuti -ks: Ilm läheb **külmemaks**, Ta jäi **haigeks**.',
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
    et: [
      'Keskvõrre: omastav + **-m**: odav → odava → **odavam**, suur → suure → **suurem**, ilus → ilusa → **ilusam**.',
      'Kahesilbilises tüves muutub lõpu -a / -i / -u **-e**-ks: pikk → pika → **pikem**, külm → külma → **külmem**, halb → halva → **halvem**, vana → **vanem**. Jäta meelde: hea → **parem**, väike → **väiksem**.',
      'Ülivõrre: **kõige** + keskvõrre: kõige suurem, kõige ilusam. Võrdluses **kui**: Tallinn on suurem kui Tartu. „Sama … kui“ — **sama … kui**.',
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
    et: [
      'Sina-käskiv on oleviku tüvi: ma tulen → **tule**, vaatan → **vaata**, räägin → **räägi**, annan → **anna**, võtan → **võta**, olen → **ole**.',
      'Keeld: **ära** + käskiv: **Ära mine!**, Ära helista!',
      'Viisakas / mitmuse vorm lõpeb **-ge / -ke** ja seda on kõige lihtsam teha da-tegevusnimest: tulla → **tulge**, minna → **minge**, istuda → **istuge**, rääkida → **rääkige**, täita → **täitke**, vaadata → **vaadake**. Keeld: **ärge** + -ge: **Ärge minge!**',
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
    et: [
      'Jäta meelde: minema → **läksin**, tulema → **tulin**, nägema → **nägin**, tegema → **tegin**, saama → **sain**. Reeglipärane: käima → **käisin**.',
      '**-sin**-lõpuga: võtma → **võtsin**, andma → **andsin**, ostma → **ostsin**, ütlema → **ütlesin**, kirjutama → **kirjutasin**.',
      'i-mineviku lõpud: **-in, -id, -i, -ime, -ite, -id** (tegin, tegid, tegi, tegime, tegite, tegid). Eitus on kõigis pööretes sama: **ei** + -nud: ma ei tulnud, nad ei tulnud.',
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
    et: [
      'Täisminevik: **olen / oled / on / oleme / olete / on** + **nud**-kesksõna: Ma olen käinud Soomes.',
      'Kesksõna: tüvi + -nud: käima → **käinud**, elama → **elanud**, õppima → **õppinud**, lugema → **lugenud**. Ebareeglipärased: minema → **läinud**, tulema → **tulnud**, nägema → **näinud**, tegema → **teinud**, sööma → **söönud**, olema → **olnud**.',
      'Eitus: **ei ole** + -nud: Ma ei ole kunagi olnud Itaalias. Tähendus: tulemus või kogemus, mis on praegu oluline.',
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
    et: [
      'Tingiv kõneviis: tüvi + **-ksin, -ksid, -ks, -ksime, -ksite, -ksid**: tahan → **tahaksin**, saan → **saaksin**, tulen → **tuleksin**, olen → ta **oleks**.',
      'Viisakad palved: **Kas ma saaksin …?**, **Ma tahaksin / sooviksin …**, Kas te aitaksite mind?',
      'Mõeldav olukord: **Kui** mul **oleks** aega, (siis) ma **tuleksin**. Eitus kõigis pööretes: **ei** + -ks: ma ei tahaks, nad ei tuleks.',
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
    et: [
      'Eraldi tulevikuvormi ei ole: **olevik + ajasõna**: Homme ma sõidan Tallinnasse.',
      'Plaanid: **kavatsen** + da-tegevusnimi (kavatsen minna), **hakkan** + ma-tegevusnimi (hakkan õppima).',
      'Sõnad: **homme, ülehomme, varsti, hiljem, järgmisel nädalal, tuleval aastal**. Minevik: **eile, üleeile, eelmisel nädalal**.',
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
    et: [
      '**võtma**: võtan, võtad, võtab · **andma**: annan, annad, annab · **panema**: panen, paned, paneb · **ütlema**: ütlen, ütled, ütleb · **leidma**: leian, leiad, leiab.',
      'Reeglipärased: **ootama** — ootan · **otsima** — otsin · **küsima** — küsin · **vastama** — vastan · **aitama** — aitan (+ osastav: aitan sind).',
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
    et: [
      '**ma**-tegevusnimi tuleb pärast liikumise, alustamise ja kohustuse verbe: **lähen** ujuma, **tulen** sööma, **hakkan** töötama, **pean** minema.',
      '**da**-tegevusnimi tuleb pärast tahtmist, oskamist, meeldimist: **tahan** juua, **oskan** ujuda, **meeldib** lugeda, **unustasin** helistada, **on aeg** minna.',
      '**-mas** — kus keegi on / mida teeb: käin **jooksmas**, ta on **ujumas**. **-mast** — tegevuselt tagasi: tulen **ujumast**.',
      'Jäta meelde da-vormid: sööma → **süüa**, jooma → **juua**, tegema → **teha**, nägema → **näha**, minema → **minna**, tulema → **tulla**.',
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
    et: [
      '**Täissihitis** — tegevus on lõpetatud ja hõlmab kogu objekti. Ainsuses = omastav: Ma ostsin **raamatu**. Sageli sõnadega **ära, läbi, valmis**: sõin koogi **ära**.',
      '**Osasihitis (osastav)** — protsess, osa, määramata hulk: Ma loen **raamatut**, joon **kohvi**. Pärast **eitust** — alati osastav: Ma ei ostnud **raamatut**.',
      'Alati osastavaga: **ootama, armastama, aitama, kuulama, otsima, vaatama** (ootan sõpra, kuulan raadiot).',
      'Käskivas kõneviisis on täissihitis nimetavas: **Võta vihmavari kaasa!** Osta **leib**!',
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
    et: [
      '**-ni** — „kuni“: kuni **foorini**, kuni **ristmikuni**, **järgmise** peatuseni.',
      'Tagasõnad omastavaga: foori **juures**, silla **all**, maja **taga**, panga **kõrval**. **üle** + omastav: üle **silla**, üle **tee**.',
      'Suunad: **otse** · **paremale / vasakule** · **keerake / pöörake** (viisakalt) · **mine / minge**.',
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
    et: [
      'Pärast mõõtu (kilo, liiter, pudel, tükk, pakk) — osastav: pudel **vett**, liiter **piima**, pakk **võid**.',
      'Loendatavad asjad pärast mõõtu — mitmuse osastav: kaks kilo **õunu**, kilo **kartuleid**, kilo **mune**. Aga pärast arvsõna — ainsus: kümme **muna**.',
      'Maksmine: **Kas saab kaardiga maksta?** · **sularahas** · **Palun tšekk.**',
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
    et: [
      'Temperatuur: viis kraadi **sooja** (+5), viis kraadi **külma** (−5). **Mitu kraadi on väljas?**',
      'Sademed: **sajab vihma / lund** — osastav. Homme **sajab** vihma — tulevikus kasutatakse olevikku.',
      'Muutus: Ilm läheb **soojemaks / külmemaks** (-ks). Seisund: **pilves**, **selge**, **tuuline**, **libe**.',
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
    et: [
      '**käima** — regulaarselt käima või kuskil käima ja tagasi tulema. Küsimus **kus?** (-s, -l): käin **tööl**, käin **koolis**, eile käisin **kinos**.',
      '**minema** — kuhugi minema, ühes suunas. Küsimus **kuhu?** (-sse, -le, -i): lähen **tööle**, lähen **kinno**, ta läks **koju**.',
      '**tulema** — siia, kõneleja poole: Tule siia! **sõitma** — sõidukiga: sõidan bussiga.',
      'Vormid: **käima** — käin, käisin, käinud · **minema** — lähen, läksin, läinud · **tulema** — tulen, tulin, tulnud.',
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
    et: [
      '**Mitmuse osastav** (palju midagi, protsessi objekt): raamat → **raamatuid**, tomat → **tomateid**, kass → **kasse**, õun → **õunu**, sõber → **sõpru**. Palju sõpru, loen raamatuid.',
      '**Mitmuse omastav** lõpuga **-de / -te**: linn → **linnade**, sõber → **sõprade**, laps → **laste**, suur → **suurte**.',
      'Teised mitmuse käänded = mitmuse omastav + lõpp: linnade**s**, laste**le**, sõprade**ga**. Omadussõna ühildub: **suurtes** linnades.',
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
    et: [
      'Tagasõnad tulevad **pärast omastavat**: arsti **juurde** · arsti **juures** · arsti **juurest**.',
      'Veel: **vastas · keskel · ümber · kaudu · kõrval**. **koos** + -ga: koos õega.',
      '**pärast** ja **enne** sõna ees nõuavad osastavat: **pärast tööd**, **enne sööki**. Aga kolme päeva **pärast** (sõna järel) — „three days from now“.',
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
    et: [
      '**et**: Ma arvan, et ta tuleb. **kas**: Ma ei tea, kas ta tuleb.',
      '**kui**: Kui sul on aega, tule. **kuigi** — vastandus. **sest** — põhjus. **seepärast** — tagajärg.',
      'Koma pannakse sidesõnade et, kuigi, sest ette ja kõrvallause ette.',
      'Sõnajärg: kõrvallauses on verb sageli lõpus — kui ma **koju tulen**. Kui kõrvallause on ees, alusta pealauset sõnaga **siis** või verbiga: Kui ma koju tulen, **siis ma söön** / **söön ma**.',
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
    et: [
      '**Millal?** — lõpp **-l**: esmaspäeval, laupäeval, hommikul, suvel, nädalavahetusel. Kuud on **-s**-lõpuga: jaanuaris, mais.',
      '**Mingi aja pärast** — **pärast** sõna järel (omastav): kolme päeva **pärast**. **Pärast midagi** — pärast sõna ees (osastav): **pärast** tööd, pärast sööki. **Enne** + osastav: enne sööki. **Tagasi**: kaks aastat tagasi.',
      '**Kui kaua** — osastav: kolm aastat, kaks tundi.',
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
    et: [
      'Sajad ja tuhanded: **kakssada** 200 · **viissada** 500 · **tuhat** 1000 · **kümme tuhat** 10 000 · **miljon** 1 000 000.',
      'Aastaarvud loetakse täielikult: 2025 — **kaks tuhat kakskümmend viis**; 1991 — **tuhat üheksasada üheksakümmend üks**.',
      'Pärast arvsõna (v.a üks) — ainsuse osastav: kakskümmend viis **eurot**, viiskümmend **protsenti**; aga **üks euro**.',
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
    et: [
      'Ametlik: **Lugupeetud härra / proua …** → lõpus **Lugupidamisega**. Sõbralik: **Kallis / Hea Mari** → **Kallistan! / Parimate soovidega**.',
      'Kasulik: **Ootan vastust** · **Tänan kutse eest** · **Lisan manusena** · **Vabandust hilinemise pärast**.',
    ],
  },
  impersonal: {
    ru: [
      'Безличная форма — действие без названного лица: «говорят», «продают», «построили». Настоящее: основа + **-takse / -dakse**: räägitakse, müüakse, süüakse, loetakse.',
      'Прошедшее: **-ti / -di**: ehitati, avati, tehti. Перфект: **on + -tud**: on ehitatud.',
      'Отрицание: **ei** + форма без -kse: ei räägita, ei lubata, ei suitsetata. Объект остаётся в партитиве: Poes müüakse leiba.',
    ],
    en: [
      'The impersonal names no doer: “people say”, “they sell”, “was built”. Present: stem + **-takse / -dakse**: räägitakse, müüakse, süüakse, loetakse.',
      'Past: **-ti / -di**: ehitati, avati, tehti. Perfect: **on + -tud**: on ehitatud.',
      'Negation: **ei** + the form without -kse: ei räägita, ei lubata, ei suitsetata. The object stays in the partitive: Poes müüakse leiba.',
    ],
    et: [
      'Umbisikuline tegumood ei nimeta tegijat. Olevik: tüvi + **-takse / -dakse**: räägitakse, müüakse, süüakse, loetakse.',
      'Minevik: **-ti / -di**: ehitati, avati, tehti. Täisminevik: **on + -tud**: on ehitatud.',
      'Eitus: **ei** + vorm ilma -kse-ta: ei räägita, ei lubata, ei suitsetata. Objekt jääb osastavasse: Poes müüakse leiba.',
    ],
  },
  quotative: {
    ru: [
      'Косвенное наклонение передаёт чужие слова, не ручаясь за них: «говорят», «как сообщают». Форма: основа ma-формы + **-vat**.',
      'olema → **olevat**, tulema → **tulevat**, minema → **minevat**, tegema → **tegevat**, hakkama → **hakkavat**. Прошедшее: **olevat + -nud**.',
      'Часто в новостях и прогнозах; рядом стоят слова **kuuldavasti**, **väidetavalt**, **ilmateate järgi**.',
    ],
    en: [
      'The quotative passes on someone else’s words without vouching for them: “reportedly”, “allegedly”. Form: the ma-infinitive stem + **-vat**.',
      'olema → **olevat**, tulema → **tulevat**, minema → **minevat**, tegema → **tegevat**, hakkama → **hakkavat**. Past: **olevat + -nud**.',
      'Common in news and forecasts, with words such as **kuuldavasti**, **väidetavalt**, **ilmateate järgi**.',
    ],
    et: [
      'Kaudne kõneviis edastab teise sõnu, ilma et nende eest vastutataks. Vorm: ma-tegevusnime tüvi + **-vat**.',
      'olema → **olevat**, tulema → **tulevat**, minema → **minevat**, tegema → **tegevat**, hakkama → **hakkavat**. Minevik: **olevat + -nud**.',
      'Tavaline uudistes ja ilmateates; kõrval on sõnad **kuuldavasti**, **väidetavalt**, **ilmateate järgi**.',
    ],
  },
  participles: {
    ru: [
      '**-des**: два действия одновременно, один подлежащий: õppides, tulles, naerdes («учась, возвращаясь, смеясь»).',
      '**-mata**: «не делая»: ütlemata, joomata, mõtlemata. **-mas**: «в процессе»: ta on tegemas. **-mast**: «из процесса»: tulen jooksmast.',
      'Причастия: **-tud** (страдательное) — praetud kala, ehitatud maja; **-v** (действующее) — elav inimene; **-nud** — läinud, tulnud.',
    ],
    en: [
      '**-des**: two actions at once with one subject: õppides, tulles, naerdes (“while studying, coming, laughing”).',
      '**-mata**: “without doing”: ütlemata, joomata, mõtlemata. **-mas**: “in the middle of”: ta on tegemas. **-mast**: “from an activity”: tulen jooksmast.',
      'Participles: **-tud** (passive) — praetud kala, ehitatud maja; **-v** (active) — elav inimene; **-nud** — läinud, tulnud.',
    ],
    et: [
      '**-des**: kaks tegevust korraga, tegija on sama: õppides, tulles, naerdes.',
      '**-mata**: „ilma tegemata“: ütlemata, joomata, mõtlemata. **-mas**: „tegevuse sees“: ta on tegemas. **-mast**: „tegevusest“: tulen jooksmast.',
      'Kesksõnad: **-tud** (kannatav) — praetud kala, ehitatud maja; **-v** (tegev) — elav inimene; **-nud** — läinud, tulnud.',
    ],
  },
  'cond-past': {
    ru: [
      'Нереальное условие в настоящем: **Kui** mul **oleks** raha, ma **ostaksin** maja. Реальное условие — обычный глагол: **Kui** sajab, **jään** koju.',
      'Прошедшее условное: **oleks / oleksin + -nud**: Kui sa oleksid helistanud, oleksin tulnud («я бы пришёл»).',
      'Совет и просьба: **Kui ma oleksin sina, …** («на твоём месте»), **Ma tahaksin, et sa tuleksid**.',
    ],
    en: [
      'An unreal condition in the present: **Kui** mul **oleks** raha, ma **ostaksin** maja. A real condition takes a plain verb: **Kui** sajab, **jään** koju.',
      'Past conditional: **oleks / oleksin + -nud**: Kui sa oleksid helistanud, oleksin tulnud (“I would have come”).',
      'Advice and wishes: **Kui ma oleksin sina, …** (“if I were you”), **Ma tahaksin, et sa tuleksid**.',
    ],
    et: [
      'Ebatõenäoline tingimus: **Kui** mul **oleks** raha, ma **ostaksin** maja. Tõenäoline tingimus — kindel kõneviis: **Kui** sajab, **jään** koju.',
      'Tingiva kõneviisi minevik: **oleks / oleksin + -nud**: Kui sa oleksid helistanud, oleksin tulnud.',
      'Nõu ja soov: **Kui ma oleksin sina, …**, **Ma tahaksin, et sa tuleksid**.',
    ],
  },
  government: {
    ru: [
      'Эстонские глаголы требуют определённого падежа, и он не всегда совпадает с русским. Выучите глагол вместе с падежом.',
      'Партитив: **kartma** (kardan koeri), **ootama** (ootan bussi), **lootma** (loodan parimat), **usaldama** (usaldan teda).',
      '**-st**: sõltuma (sõltun sinust), huvituma (huvitun spordist), rääkima («о чём»: räägin tööst). **-ga**: rahul olema (rahul tööga), abielluma (Mariga). **eest** + род. падеж: tänan abi eest.',
      'Инфинитив: **hakkama + -ma** (hakkan õppima), **püüdma + -da** (püüan tulla).',
    ],
    en: [
      'Estonian verbs take a fixed case, and it does not always match English or Russian. Learn each verb together with its case.',
      'Partitive: **kartma** (kardan koeri), **ootama** (ootan bussi), **lootma** (loodan parimat), **usaldama** (usaldan teda).',
      '**-st**: sõltuma (sõltun sinust), huvituma (huvitun spordist), rääkima (“about”: räägin tööst). **-ga**: rahul olema (rahul tööga), abielluma (Mariga). **eest** + genitive: tänan abi eest.',
      'Infinitive: **hakkama + -ma** (hakkan õppima), **püüdma + -da** (püüan tulla).',
    ],
    et: [
      'Eesti verbid nõuavad kindlat käänet. Õpi verb koos käändega.',
      'Osastav: **kartma** (kardan koeri), **ootama** (ootan bussi), **lootma** (loodan parimat), **usaldama** (usaldan teda).',
      '**-st**: sõltuma (sõltun sinust), huvituma (huvitun spordist), rääkima (räägin tööst). **-ga**: rahul olema (rahul tööga), abielluma (Mariga). **eest** + omastav: tänan abi eest.',
      'Tegevusnimi: **hakkama + -ma** (hakkan õppima), **püüdma + -da** (püüan tulla).',
    ],
  },
  relative: {
    ru: [
      'Относительные местоимения: **kes** (человек-подлежащее) — mees, kes elab siin; **mis** (предмет-подлежащее) — raamat, mis on laual; **mida / mille** — по падежу объекта; **kelle** — «чей».',
      'Падеж определяет глагол придаточного: loen raamatut → raamat, **mida** ma loen. Usaldan teda → inimene, **keda** ma usaldan.',
      'Союзы: **et** (что, чтобы), **sest** (потому что), **kuigi** (хотя), **kuni** (пока не), **kas** («ли»), **kui** («если», «когда»).',
    ],
    en: [
      'Relative pronouns: **kes** (a person as subject) — mees, kes elab siin; **mis** (a thing as subject) — raamat, mis on laual; **mida / mille** — by the object’s case; **kelle** — “whose”.',
      'The verb of the clause decides the case: loen raamatut → raamat, **mida** ma loen. Usaldan teda → inimene, **keda** ma usaldan.',
      'Conjunctions: **et** (that, in order to), **sest** (because), **kuigi** (although), **kuni** (until), **kas** (“whether”), **kui** (“if”, “when”).',
    ],
    et: [
      'Siduvad asesõnad: **kes** (inimene, alus) — mees, kes elab siin; **mis** (asi, alus) — raamat, mis on laual; **mida / mille** — sõltuvalt objekti käändest; **kelle** — omastav.',
      'Käände määrab alamlause tegusõna: loen raamatut → raamat, **mida** ma loen. Usaldan teda → inimene, **keda** ma usaldan.',
      'Sidesõnad: **et**, **sest**, **kuigi**, **kuni**, **kas**, **kui**.',
    ],
  },
  opinions: {
    ru: [
      'Высказать мнение: **minu arvates …**, **ma arvan, et …**, **mulle tundub, et …**. Согласие: **ma olen nõus**; несогласие: **ma ei ole nõus**, мягче — **ma ei ole päris nõus**.',
      'Сопоставить доводы: **ühelt poolt … teiselt poolt …**. Уступка: **kuigi …, siis …**; **tegelikult** («на самом деле»), **pigem** («скорее»), **kahjuks** («к сожалению»).',
      '**eelistama** + партитив + -le: eelistan teed kohvile.',
    ],
    en: [
      'Giving an opinion: **minu arvates …**, **ma arvan, et …**, **mulle tundub, et …**. Agreeing: **ma olen nõus**; disagreeing: **ma ei ole nõus**, softer — **ma ei ole päris nõus**.',
      'Weighing arguments: **ühelt poolt … teiselt poolt …**. Concession: **kuigi …**; **tegelikult** (“actually”), **pigem** (“rather”), **kahjuks** (“unfortunately”).',
      '**eelistama** + partitive + -le: eelistan teed kohvile.',
    ],
    et: [
      'Arvamuse avaldamine: **minu arvates …**, **ma arvan, et …**, **mulle tundub, et …**. Nõustumine: **ma olen nõus**; mittenõustumine: **ma ei ole nõus**, pehmemalt — **ma ei ole päris nõus**.',
      'Argumentide kõrvutamine: **ühelt poolt … teiselt poolt …**. Möönmine: **kuigi …**; **tegelikult**, **pigem**, **kahjuks**.',
      '**eelistama** + osastav + -le: eelistan teed kohvile.',
    ],
  },
  law: {
    ru: [
      'Полезные конструкции: **tuleb + da-инфинитив** («нужно»: leping tuleb allkirjastada), **saab + da-инфинитив** («можно»: kaupa saab tagastada), **jooksul** («в течение»: 14 päeva jooksul).',
      'Объект при безличной форме. Полный объект стоит в **именительном**: **määrati trahv**, **tehti otsus**. Частичный — в партитиве: tehti tööd.',
      'Документы: **leping**, **tööleping**, **üürileping**, **avaldus**, **kaebus**; **tähtaeg** — срок.',
    ],
    en: [
      'Useful patterns: **tuleb + da-infinitive** (“has to”: leping tuleb allkirjastada), **saab + da-infinitive** (“can”: kaupa saab tagastada), **jooksul** (“within”: 14 päeva jooksul).',
      'The object with the impersonal. A total object stays in the **nominative**: **määrati trahv**, **tehti otsus**. A partial object takes the partitive: tehti tööd.',
      'Documents: **leping**, **tööleping**, **üürileping**, **avaldus**, **kaebus**; **tähtaeg** — deadline.',
    ],
    et: [
      'Kasulikud mudelid: **tuleb + da-tegevusnimi** (leping tuleb allkirjastada), **saab + da-tegevusnimi** (kaupa saab tagastada), **jooksul** (14 päeva jooksul).',
      'Objekt umbisikulises tegumoes. Täisobjekt on **nimetavas**: **määrati trahv**, **tehti otsus**. Osaobjekt on osastavas: tehti tööd.',
      'Dokumendid: **leping**, **tööleping**, **üürileping**, **avaldus**, **kaebus**; **tähtaeg**.',
    ],
  },
  'self-intro': {
    ru: [
      'Рассказ о жизни — **простое прошедшее**: Ma sündisin Narvas, kasvasin üles Tartus, 2015 kolisime Tallinna. Факт о себе — перфект: **Ma olen sündinud** Narvas.',
      '**kui** + прошедшее — «когда»: Kui ma olin laps, elasime maal.',
      'Знакомство: **tutvuma** («знакомиться»: me tutvusime tööl) ≠ **tutvustama** («представлять»: tutvustan sind vanematele).',
    ],
    en: [
      'A life story takes the **simple past**: Ma sündisin Narvas, kasvasin üles Tartus, 2015 kolisime Tallinna. A fact about yourself — the perfect: **Ma olen sündinud** Narvas.',
      '**kui** + past — “when”: Kui ma olin laps, elasime maal.',
      'Meeting: **tutvuma** (“to get to know”: me tutvusime tööl) ≠ **tutvustama** (“to introduce”: tutvustan sind vanematele).',
    ],
    et: [
      'Elulugu jutustatakse **lihtminevikus**: Ma sündisin Narvas, kasvasin üles Tartus, 2015 kolisime Tallinna. Fakt enda kohta — täisminevik: **Ma olen sündinud** Narvas.',
      '**kui** + minevik: Kui ma olin laps, elasime maal.',
      'Tutvumine: **tutvuma** (me tutvusime tööl) ≠ **tutvustama** (tutvustan sind vanematele).',
    ],
  },
  studies: {
    ru: [
      'Учёба и падежи: **lõpetama** + родительный (lõpetasin ülikooli), **astuma** + «куда» (astus ülikooli), **saama** + родительный (sain kraadi).',
      '**tuleb + da-инфинитив** — «нужно»: eksam tuleb sooritada.',
      'Уровни: **põhiharidus** → **keskharidus** → **kõrgharidus** (bakalaureus, magister).',
    ],
    en: [
      'Studies and cases: **lõpetama** + genitive (lõpetasin ülikooli), **astuma** + “where to” (astus ülikooli), **saama** + genitive (sain kraadi).',
      '**tuleb + da-infinitive** — “has to”: eksam tuleb sooritada.',
      'Levels: **põhiharidus** → **keskharidus** → **kõrgharidus** (bakalaureus, magister).',
    ],
    et: [
      'Õpingud ja käänded: **lõpetama** + omastav (lõpetasin ülikooli), **astuma** + kuhu (astus ülikooli), **saama** + omastav (sain kraadi).',
      '**tuleb + da-tegevusnimi**: eksam tuleb sooritada.',
      'Tasemed: **põhiharidus** → **keskharidus** → **kõrgharidus** (bakalaureus, magister).',
    ],
  },
  workplace: {
    ru: [
      'Глаголы работы и их падежи: **vastutama** + **eest** (vastutan projekti eest), **tegelema** + **-ga** (tegelen klientidega), **osalema** + **-l** (osalen koosolekul), **hakkama saama** + **-ga** (saan ülesandega hakkama).',
      '«В команде» — **-s**: meeskonnas; «на больничном» — **-l**: haiguspuhkusel.',
    ],
    en: [
      'Work verbs and their cases: **vastutama** + **eest** (vastutan projekti eest), **tegelema** + **-ga** (tegelen klientidega), **osalema** + **-l** (osalen koosolekul), **hakkama saama** + **-ga** (saan ülesandega hakkama).',
      '“In a team” — **-s**: meeskonnas; “on sick leave” — **-l**: haiguspuhkusel.',
    ],
    et: [
      'Töö verbid ja nende käänded: **vastutama** + **eest** (vastutan projekti eest), **tegelema** + **-ga** (tegelen klientidega), **osalema** + **-l** (osalen koosolekul), **hakkama saama** + **-ga** (saan ülesandega hakkama).',
      '„Meeskonnas“ — **-s**; „haiguspuhkusel“ — **-l**.',
    ],
  },
  'service-talk': {
    ru: [
      'Вежливый звонок: **Helistan seoses …-ga** («в связи с …»), **Mul on küsimus … kohta** («о …»), **Tahaksin teada, kas …** («хотел бы узнать, …»).',
      'Просьбы: **Kas ma saaksin …?** + da-инфинитив (saaksin broneerida). Вежливо на «вы»: **tühistage**, **kinnitage**, **oodake** (основа + **-ge**).',
    ],
    en: [
      'A polite call: **Helistan seoses …-ga** (“regarding …”), **Mul on küsimus … kohta** (“a question about …”), **Tahaksin teada, kas …** (“I would like to know whether …”).',
      'Requests: **Kas ma saaksin …?** + da-infinitive (saaksin broneerida). Polite plural: **tühistage**, **kinnitage**, **oodake** (stem + **-ge**).',
    ],
    et: [
      'Viisakas kõne: **Helistan seoses …-ga**, **Mul on küsimus … kohta**, **Tahaksin teada, kas …**.',
      'Palved: **Kas ma saaksin …?** + da-tegevusnimi (saaksin broneerida). Viisakas käskiv: **tühistage**, **kinnitage**, **oodake** (tüvi + **-ge**).',
    ],
  },
  illness: {
    ru: [
      '**Mul valutab** + что болит (именительный): Mul valutab pea, kõht, kurk. **Ma tunnen end halvasti / hästi** («чувствую себя»).',
      'Болезнь: **külmetama** (простудиться), **paranema / toibuma** (поправляться), **palavik** (жар), **köha**, **iiveldus**, **pearinglus**.',
      'Просьба врача: **soovitama + da-инфинитив** (soovitas puhata); **kirjutama** + родительный (kirjutas retsepti).',
    ],
    en: [
      '**Mul valutab** + what hurts (nominative): Mul valutab pea, kõht, kurk. **Ma tunnen end halvasti / hästi** (“I feel unwell / well”).',
      'Illness: **külmetama** (to catch a cold), **paranema / toibuma** (to recover), **palavik** (fever), **köha**, **iiveldus**, **pearinglus**.',
      'The doctor’s advice: **soovitama + da-infinitive** (soovitas puhata); **kirjutama** + genitive (kirjutas retsepti).',
    ],
    et: [
      '**Mul valutab** + mis valutab (nimetav): Mul valutab pea, kõht, kurk. **Ma tunnen end halvasti / hästi**.',
      'Haigus: **külmetama**, **paranema / toibuma**, **palavik**, **köha**, **iiveldus**, **pearinglus**.',
      'Arsti nõu: **soovitama + da-tegevusnimi** (soovitas puhata); **kirjutama** + omastav (kirjutas retsepti).',
    ],
  },
  entertainment: {
    ru: [
      '**huvitama**: Mind huvitab ajalugu («меня интересует история») — то, что интересует, в именительном, человек — в партитиве (**mind**, **sind**, **teda**).',
      '**harrastama** + партитив: harrastan ujumist. **meeldima** + da-инфинитив: Mulle meeldib lugeda. **viitsima**: ma ei viitsi — «лень, не хочется».',
    ],
    en: [
      '**huvitama**: Mind huvitab ajalugu (“history interests me”) — the thing is the subject, the person takes the partitive (**mind**, **sind**, **teda**).',
      '**harrastama** + partitive: harrastan ujumist. **meeldima** + da-infinitive: Mulle meeldib lugeda. **viitsima**: ma ei viitsi — “I cannot be bothered”.',
    ],
    et: [
      '**huvitama**: Mind huvitab ajalugu — huvitav asi on alus, inimene on osastavas (**mind**, **sind**, **teda**).',
      '**harrastama** + osastav: harrastan ujumist. **meeldima** + da-tegevusnimi: Mulle meeldib lugeda. **viitsima**: ma ei viitsi.',
    ],
  },
  restaurant: {
    ru: [
      'Вежливо в кафе: **Tahaksin broneerida laua kolmele**, **Kas me võiksime saada arve?**, **Mida te soovitaksite?** (условное + da-инфинитив).',
      'Блюда: **eelroog** (закуска), **pearoog** (основное), **magustoit** (десерт); «в качестве чего» — **-ks**: pearoaks, magustoiduks.',
      'Счёт и чаевые: **Arve, palun.** · **jootraha**.',
    ],
    en: [
      'Polite requests in a café: **Tahaksin broneerida laua kolmele**, **Kas me võiksime saada arve?**, **Mida te soovitaksite?** (conditional + da-infinitive).',
      'Courses: **eelroog** (starter), **pearoog** (main), **magustoit** (dessert); “as a …” — **-ks**: pearoaks, magustoiduks.',
      'The bill and the tip: **Arve, palun.** · **jootraha**.',
    ],
    et: [
      'Viisakalt kohvikus: **Tahaksin broneerida laua kolmele**, **Kas me võiksime saada arve?**, **Mida te soovitaksite?** (tingiv + da-tegevusnimi).',
      'Käigud: **eelroog**, **pearoog**, **magustoit**; „millena“ — **-ks**: pearoaks, magustoiduks.',
      'Arve ja jootraha: **Arve, palun.** · **jootraha**.',
    ],
  },
  environment: {
    ru: [
      '**peama + ma-инфинитив**: peame kaitsma («мы должны защищать»). **tuleb / tasub / saab + da-инфинитив**: tuleb sorteerida, tasub võtta.',
      'Условное: **Kui me kasutaksime vähem plasti, oleks loodus puhtam.**',
      '**kaitse all** («под охраной»), **… tõttu** («из-за»): üleujutuse tõttu.',
    ],
    en: [
      '**peama + ma-infinitive**: peame kaitsma (“we must protect”). **tuleb / tasub / saab + da-infinitive**: tuleb sorteerida, tasub võtta.',
      'Conditional: **Kui me kasutaksime vähem plasti, oleks loodus puhtam.**',
      '**kaitse all** (“under protection”), **… tõttu** (“because of”): üleujutuse tõttu.',
    ],
    et: [
      '**peama + ma-tegevusnimi**: peame kaitsma. **tuleb / tasub / saab + da-tegevusnimi**: tuleb sorteerida, tasub võtta.',
      'Tingiv kõneviis: **Kui me kasutaksime vähem plasti, oleks loodus puhtam.**',
      '**kaitse all**, **… tõttu**: üleujutuse tõttu.',
    ],
  },
  'on-the-road': {
    ru: [
      'Проблемы в пути: **lend jäi ära** («рейс отменён»), **rong hilines** («поезд опоздал»), **ma eksisin ära** («я заблудился»), **kohver läks kaotsi** («чемодан потерялся»).',
      'Вежливый вопрос: **Kas te juhataksite mind …?** («не подскажете, как пройти…»). На границе — безличная форма: **Passi kontrollitakse.**',
    ],
    en: [
      'Problems on the way: **lend jäi ära** (“the flight was cancelled”), **rong hilines** (“the train was late”), **ma eksisin ära** (“I got lost”), **kohver läks kaotsi** (“the suitcase got lost”).',
      'A polite question: **Kas te juhataksite mind …?** (“could you direct me to …”). At the border — the impersonal: **Passi kontrollitakse.**',
    ],
    et: [
      'Probleemid teel: **lend jäi ära**, **rong hilines**, **ma eksisin ära**, **kohver läks kaotsi**.',
      'Viisakas küsimus: **Kas te juhataksite mind …?** Piiril — umbisikuline: **Passi kontrollitakse.**',
    ],
  },
};
