import type { Lang } from '../i18n/ui';

/**
 * The rule behind a topic, written out under the quiz so readers and search engines get more
 * than the short hint. `**bold**` marks Estonian forms. `links` are topic ids, `pages` other site pages.
 * Topics not listed here show only the quiz.
 */
export interface NoteSection {
  h: string;
  p?: string[];
  table?: { head: string[]; rows: string[][] };
  examples?: [string, string][]; // Estonian sentence, translation or note
  list?: string[];
  links?: string[];
  pages?: [string, string][]; // label, path after the language, e.g. exam-b1
}

export const topicNotes: Record<string, Record<Lang, NoteSection[]>> = {
  past: {
    ru: [
      {
        h: 'Как образуется прошедшее время',
        p: [
          'Простое прошедшее время (**lihtminevik**) говорит о действии, которое произошло и закончилось в прошлом: **Eile olin ma kodus.** — «Вчера я был дома».',
          'У большинства глаголов к основе инфинитива на -ma добавляется **-s-** и личное окончание: elama → ma **elasin**, ta **elas**; töötama → **töötasin**; õppima → **õppisin**. В 3-м лице единственного числа личного окончания нет: ta elas, ta töötas.',
          'У части частых глаголов прошедшее время на **-i-**: tulema → ma **tulin**, ta **tuli**; tegema → **tegin**; nägema → **nägin**. Некоторые формы просто запоминают: minema → **läksin**, sööma → **sõin**, jooma → **jõin**.',
        ],
        table: {
          head: ['Лицо', 'olla', 'elama (-s-)', 'tulema (-i-)'],
          rows: [
            ['ma', 'olin', 'elasin', 'tulin'],
            ['sa', 'olid', 'elasid', 'tulid'],
            ['ta', 'oli', 'elas', 'tuli'],
            ['me', 'olime', 'elasime', 'tulime'],
            ['te', 'olite', 'elasite', 'tulite'],
            ['nad', 'olid', 'elasid', 'tulid'],
          ],
        },
      },
      {
        h: 'Отрицание и вопрос',
        p: [
          'Отрицание одинаковое для всех лиц: **ei** + форма на **-nud**: ma **ei olnud**, nad **ei elanud**, ta **ei tulnud**.',
          'Вопрос начинается с **kas**: Kas sa olid eile tööl? — Jah, olin. / Ei, ei olnud.',
          'Слова-подсказки: **eile** — вчера, **eelmisel nädalal** — на прошлой неделе, **eelmisel aastal** — в прошлом году, **kaks päeva tagasi** — два дня назад.',
        ],
      },
      {
        h: 'Примеры',
        examples: [
          ['Eile olin ma kodus.', 'Вчера я был дома.'],
          ['Me elasime kaks aastat Tartus.', 'Мы два года жили в Тарту.'],
          ['Eelmisel aastal töötas ta poes.', 'В прошлом году он работал в магазине.'],
          ['Nad tulid koju hilja.', 'Они пришли домой поздно.'],
          ['Ma ei olnud eile tööl.', 'Вчера меня не было на работе.'],
        ],
      },
      {
        h: 'Частые ошибки',
        list: [
          '**ma ei elanud**, а не «ma ei elasin»: после ei всегда форма на -nud, без личного окончания.',
          'В 3-м лице единственного числа окончания нет: **ta elas**, **ta oli** (не «ta olis»).',
          'Если важен опыт, а не момент в прошлом, нужно перфектное время: **Ma olen Tartus elanud.** — «Я (когда-то) жил в Тарту».',
        ],
      },
      { h: 'Что учить дальше', links: ['past2', 'perfect'] },
    ],
    en: [
      {
        h: 'How the past tense is formed',
        p: [
          'The simple past (**lihtminevik**) is for an action that happened and finished in the past: **Eile olin ma kodus.** — “Yesterday I was at home.”',
          'Most verbs add **-s-** and a personal ending to the stem of the -ma infinitive: elama → ma **elasin**, ta **elas**; töötama → **töötasin**; õppima → **õppisin**. The third person singular has no personal ending: ta elas, ta töötas.',
          'Some common verbs take an **-i-** past instead: tulema → ma **tulin**, ta **tuli**; tegema → **tegin**; nägema → **nägin**. A few forms are simply learned by heart: minema → **läksin**, sööma → **sõin**, jooma → **jõin**.',
        ],
        table: {
          head: ['Person', 'olla', 'elama (-s-)', 'tulema (-i-)'],
          rows: [
            ['ma', 'olin', 'elasin', 'tulin'],
            ['sa', 'olid', 'elasid', 'tulid'],
            ['ta', 'oli', 'elas', 'tuli'],
            ['me', 'olime', 'elasime', 'tulime'],
            ['te', 'olite', 'elasite', 'tulite'],
            ['nad', 'olid', 'elasid', 'tulid'],
          ],
        },
      },
      {
        h: 'Negation and questions',
        p: [
          'Negation is the same for every person: **ei** + the **-nud** form: ma **ei olnud**, nad **ei elanud**, ta **ei tulnud**.',
          'A question starts with **kas**: Kas sa olid eile tööl? — Jah, olin. / Ei, ei olnud.',
          'Time words that signal the past: **eile** — yesterday, **eelmisel nädalal** — last week, **eelmisel aastal** — last year, **kaks päeva tagasi** — two days ago.',
        ],
      },
      {
        h: 'Examples',
        examples: [
          ['Eile olin ma kodus.', 'Yesterday I was at home.'],
          ['Me elasime kaks aastat Tartus.', 'We lived in Tartu for two years.'],
          ['Eelmisel aastal töötas ta poes.', 'Last year she worked in a shop.'],
          ['Nad tulid koju hilja.', 'They came home late.'],
          ['Ma ei olnud eile tööl.', 'I wasn’t at work yesterday.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          '**ma ei elanud**, not “ma ei elasin”: after ei the verb is always the -nud form, with no personal ending.',
          'The third person singular has no ending: **ta elas**, **ta oli** (not “ta olis”).',
          'For experience rather than a moment in the past, use the perfect: **Ma olen Tartus elanud.** — “I have lived in Tartu.”',
        ],
      },
      { h: 'What to learn next', links: ['past2', 'perfect'] },
    ],
    et: [
      {
        h: 'Kuidas lihtminevik moodustub',
        p: [
          '**Lihtminevik** näitab tegevust, mis toimus ja lõppes minevikus: **Eile olin ma kodus.**',
          'Enamikul verbidel lisatakse ma-tegevusnime tüvele **-s-** ja pöördelõpp: elama → ma **elasin**, ta **elas**; töötama → **töötasin**; õppima → **õppisin**. Ainsuse 3. pöördes pöördelõppu ei ole: ta elas, ta töötas.',
          'Osal sagedastel verbidel on **i-minevik**: tulema → ma **tulin**, ta **tuli**; tegema → **tegin**; nägema → **nägin**. Mõned vormid tuleb lihtsalt meelde jätta: minema → **läksin**, sööma → **sõin**, jooma → **jõin**.',
        ],
        table: {
          head: ['Pööre', 'olla', 'elama (s-minevik)', 'tulema (i-minevik)'],
          rows: [
            ['ma', 'olin', 'elasin', 'tulin'],
            ['sa', 'olid', 'elasid', 'tulid'],
            ['ta', 'oli', 'elas', 'tuli'],
            ['me', 'olime', 'elasime', 'tulime'],
            ['te', 'olite', 'elasite', 'tulite'],
            ['nad', 'olid', 'elasid', 'tulid'],
          ],
        },
      },
      {
        h: 'Eitus ja küsimus',
        p: [
          'Eitus on kõigis pööretes ühesugune: **ei** + **nud**-vorm: ma **ei olnud**, nad **ei elanud**, ta **ei tulnud**.',
          'Küsimus algab sõnaga **kas**: Kas sa olid eile tööl? — Jah, olin. / Ei, ei olnud.',
          'Minevikule viitavad ajasõnad: **eile**, **eelmisel nädalal**, **eelmisel aastal**, **kaks päeva tagasi**.',
        ],
      },
      {
        h: 'Näited',
        examples: [
          ['Eile olin ma kodus.', 'olla → olin'],
          ['Me elasime kaks aastat Tartus.', 'elama → elasime'],
          ['Eelmisel aastal töötas ta poes.', 'töötama → töötas'],
          ['Nad tulid koju hilja.', 'tulema → tulid'],
          ['Ma ei olnud eile tööl.', 'ei + olnud'],
        ],
      },
      {
        h: 'Sagedased vead',
        list: [
          '**ma ei elanud**, mitte „ma ei elasin“: pärast sõna ei on alati nud-vorm ilma pöördelõputa.',
          'Ainsuse 3. pöördes lõppu ei ole: **ta elas**, **ta oli** (mitte „ta olis“).',
          'Kogemuse kohta kasutatakse täisminevikku: **Ma olen Tartus elanud.**',
        ],
      },
      { h: 'Mida edasi õppida', links: ['past2', 'perfect'] },
    ],
  },
  past2: {
    ru: [
      {
        h: 'Прошедшее время частых глаголов',
        p: [
          'На уровне A2 к простому прошедшему (**lihtminevik**) добавляются частые глаголы, формы которых не выводятся из инфинитива напрямую. Их удобнее учить тройкой: инфинитив → **ma**-форма → **ta**-форма.',
          'Прошедшее на **-i-**: tulema → **tulin**, ta **tuli**; nägema → **nägin**, ta **nägi**; tegema → **tegin**, ta **tegi**; saama → **sain**, ta **sai**. Особняком стоит minema → **läksin**, ta **läks**.',
          'Прошедшее на **-s-** с изменением основы: võtma → **võtsin**, но ta **võttis**; andma → **andsin**, ta **andis**; ostma → **ostsin**, ta **ostis**. После двух согласных в 3-м лице обычно появляется **-is**.',
        ],
        table: {
          head: ['Лицо', 'minema', 'tegema', 'võtma'],
          rows: [
            ['ma', 'läksin', 'tegin', 'võtsin'],
            ['sa', 'läksid', 'tegid', 'võtsid'],
            ['ta', 'läks', 'tegi', 'võttis'],
            ['me', 'läksime', 'tegime', 'võtsime'],
            ['te', 'läksite', 'tegite', 'võtsite'],
            ['nad', 'läksid', 'tegid', 'võtsid'],
          ],
        },
      },
      {
        h: 'Отрицание',
        p: [
          'Как и у всех глаголов: **ei** + форма на **-nud**, одинаково для всех лиц: ma **ei läinud**, ta **ei tulnud**, nad **ei näinud**, me **ei teinud**.',
          'Эти формы тоже надо запомнить: minema → **läinud**, tegema → **teinud**, nägema → **näinud**, ütlema → **öelnud**.',
        ],
      },
      {
        h: 'Примеры',
        examples: [
          ['Eile läksin ma poodi.', 'Вчера я пошёл в магазин.'],
          ['Eile nägime kinos head filmi.', 'Вчера мы посмотрели в кино хороший фильм.'],
          ['Ta võttis vihmavarju kaasa.', 'Она взяла с собой зонт.'],
          ['Ma ostsin endale uue telefoni.', 'Я купил себе новый телефон.'],
          ['Nad ei tulnud peole.', 'Они не пришли на праздник.'],
        ],
      },
      {
        h: 'Частые ошибки',
        list: [
          '**ta läks**, а не «ta läksis»: у minema в 3-м лице нет окончания.',
          '**ta võttis**, а не «ta võtsis»: в 3-м лице основа другая.',
          '**ma ei öelnud**, а не «ma ei ütlenud»: у ütlema форма на -nud строится от основы öel-.',
        ],
      },
      { h: 'Что учить дальше', links: ['past', 'perfect', 'kaima'] },
    ],
    en: [
      {
        h: 'Past tense of common verbs',
        p: [
          'At A2 the simple past (**lihtminevik**) adds common verbs whose forms can’t be worked out straight from the infinitive. Learn them as a set of three: infinitive → **ma** form → **ta** form.',
          'The **-i-** past: tulema → **tulin**, ta **tuli**; nägema → **nägin**, ta **nägi**; tegema → **tegin**, ta **tegi**; saama → **sain**, ta **sai**. minema stands apart: **läksin**, ta **läks**.',
          'The **-s-** past with a stem change: võtma → **võtsin** but ta **võttis**; andma → **andsin**, ta **andis**; ostma → **ostsin**, ta **ostis**. After two consonants the third person usually ends in **-is**.',
        ],
        table: {
          head: ['Person', 'minema', 'tegema', 'võtma'],
          rows: [
            ['ma', 'läksin', 'tegin', 'võtsin'],
            ['sa', 'läksid', 'tegid', 'võtsid'],
            ['ta', 'läks', 'tegi', 'võttis'],
            ['me', 'läksime', 'tegime', 'võtsime'],
            ['te', 'läksite', 'tegite', 'võtsite'],
            ['nad', 'läksid', 'tegid', 'võtsid'],
          ],
        },
      },
      {
        h: 'Negation',
        p: [
          'As with every verb: **ei** + the **-nud** form, the same for every person: ma **ei läinud**, ta **ei tulnud**, nad **ei näinud**, me **ei teinud**.',
          'These forms are irregular too: minema → **läinud**, tegema → **teinud**, nägema → **näinud**, ütlema → **öelnud**.',
        ],
      },
      {
        h: 'Examples',
        examples: [
          ['Eile läksin ma poodi.', 'Yesterday I went to the shop.'],
          ['Eile nägime kinos head filmi.', 'Yesterday we saw a good film at the cinema.'],
          ['Ta võttis vihmavarju kaasa.', 'She took an umbrella with her.'],
          ['Ma ostsin endale uue telefoni.', 'I bought myself a new phone.'],
          ['Nad ei tulnud peole.', 'They didn’t come to the party.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          '**ta läks**, not “ta läksis”: minema has no ending in the third person.',
          '**ta võttis**, not “ta võtsis”: the third person has a different stem.',
          '**ma ei öelnud**, not “ma ei ütlenud”: the -nud form of ütlema is built on öel-.',
        ],
      },
      { h: 'What to learn next', links: ['past', 'perfect', 'kaima'] },
    ],
    et: [
      {
        h: 'Sagedaste verbide lihtminevik',
        p: [
          'A2 tasemel lisanduvad lihtminevikule sagedased verbid, mille vorme ei saa otse ma-tegevusnimest tuletada. Neid on mugav õppida kolmikuna: ma-tegevusnimi → **ma**-vorm → **ta**-vorm.',
          '**i-minevik**: tulema → **tulin**, ta **tuli**; nägema → **nägin**, ta **nägi**; tegema → **tegin**, ta **tegi**; saama → **sain**, ta **sai**. Omaette on minema → **läksin**, ta **läks**.',
          '**s-minevik** tüvemuutusega: võtma → **võtsin**, aga ta **võttis**; andma → **andsin**, ta **andis**; ostma → **ostsin**, ta **ostis**. Kahe kaashääliku järel on 3. pöördes tavaliselt lõpp **-is**.',
        ],
        table: {
          head: ['Pööre', 'minema', 'tegema', 'võtma'],
          rows: [
            ['ma', 'läksin', 'tegin', 'võtsin'],
            ['sa', 'läksid', 'tegid', 'võtsid'],
            ['ta', 'läks', 'tegi', 'võttis'],
            ['me', 'läksime', 'tegime', 'võtsime'],
            ['te', 'läksite', 'tegite', 'võtsite'],
            ['nad', 'läksid', 'tegid', 'võtsid'],
          ],
        },
      },
      {
        h: 'Eitus',
        p: [
          'Nagu kõigil verbidel: **ei** + **nud**-vorm, kõigis pööretes ühesugune: ma **ei läinud**, ta **ei tulnud**, nad **ei näinud**, me **ei teinud**.',
          'Ka need vormid tuleb meelde jätta: minema → **läinud**, tegema → **teinud**, nägema → **näinud**, ütlema → **öelnud**.',
        ],
      },
      {
        h: 'Näited',
        examples: [
          ['Eile läksin ma poodi.', 'minema → läksin'],
          ['Eile nägime kinos head filmi.', 'nägema → nägime'],
          ['Ta võttis vihmavarju kaasa.', 'võtma → võttis'],
          ['Ma ostsin endale uue telefoni.', 'ostma → ostsin'],
          ['Nad ei tulnud peole.', 'ei + tulnud'],
        ],
      },
      {
        h: 'Sagedased vead',
        list: [
          '**ta läks**, mitte „ta läksis“: minema 3. pöördes lõppu ei ole.',
          '**ta võttis**, mitte „ta võtsis“: 3. pöördes on teine tüvi.',
          '**ma ei öelnud**, mitte „ma ei ütlenud“: ütlema nud-vorm tuleb tüvest öel-.',
        ],
      },
      { h: 'Mida edasi õppida', links: ['past', 'perfect', 'kaima'] },
    ],
  },
  time: {
    ru: [
      {
        h: 'Как спросить и сказать время',
        p: [
          'Вопрос — **Mis kell on?** («Который час?»). Ответ — **Kell on kolm.** («Три часа»). Если нужно «во сколько?», слово **kell** ставится перед числом: Mis kell sa tuled? — **Kell kolm.**',
          'Половины и четверти считаются к **следующему** часу — так же, как в русском «половина третьего»: **pool kolm** = 2:30, **veerand kolm** = 2:15, **kolmveerand kolm** = 2:45.',
        ],
        table: {
          head: ['Время', 'По-эстонски', 'По-русски'],
          rows: [
            ['2:00', 'kell kaks', 'два часа'],
            ['2:15', 'veerand kolm', 'четверть третьего'],
            ['2:30', 'pool kolm', 'половина третьего'],
            ['2:45', 'kolmveerand kolm', 'без четверти три'],
            ['3:00', 'kell kolm', 'три часа'],
          ],
        },
      },
      {
        h: 'Время суток',
        p: [
          'Части суток отвечают на вопрос «когда?» и стоят в форме на -l: **hommikul** — утром, **päeval** — днём, **õhtul** — вечером, **öösel** — ночью.',
          'Их легко соединять со словами täna, eile, homme: **täna hommikul** — сегодня утром, **eile õhtul** — вчера вечером, **homme päeval** — завтра днём.',
        ],
      },
      {
        h: 'Примеры',
        examples: [
          ['Kell on pool üheksa.', 'Сейчас половина девятого (8:30).'],
          ['Tööpäev algab kell üheksa.', 'Рабочий день начинается в девять.'],
          ['Buss tuleb kell veerand kuus.', 'Автобус придёт в четверть шестого (5:15).'],
          ['Õhtul vaatan ma telerit.', 'Вечером я смотрю телевизор.'],
          ['Eile öösel sadas lund.', 'Вчера ночью шёл снег.'],
        ],
      },
      {
        h: 'Частые ошибки',
        list: [
          '**pool kolm** — это 2:30, а не 3:30: отсчёт идёт к следующему часу.',
          '**kell** — время на часах, **tund** — час как длительность: Kell on kaks, но film kestab **kaks tundi**.',
          '**Mis kell on?**, а не «Mis aeg on?»: aeg — время вообще («Mul ei ole aega» — у меня нет времени).',
        ],
      },
      { h: 'Что учить дальше', links: ['dates', 'days', 'time-expr'] },
    ],
    en: [
      {
        h: 'Asking and telling the time',
        p: [
          'The question is **Mis kell on?** (“What time is it?”). The answer: **Kell on kolm.** (“It’s three o’clock.”) For “at what time?”, put **kell** before the number: Mis kell sa tuled? — **Kell kolm.**',
          'Halves and quarters count towards the **next** hour, as in German “halb drei”: **pool kolm** = 2:30, **veerand kolm** = 2:15, **kolmveerand kolm** = 2:45.',
        ],
        table: {
          head: ['Time', 'In Estonian', 'Literally'],
          rows: [
            ['2:00', 'kell kaks', 'two o’clock'],
            ['2:15', 'veerand kolm', 'a quarter of three'],
            ['2:30', 'pool kolm', 'half of three'],
            ['2:45', 'kolmveerand kolm', 'three quarters of three'],
            ['3:00', 'kell kolm', 'three o’clock'],
          ],
        },
      },
      {
        h: 'Parts of the day',
        p: [
          'Parts of the day answer “when?” and take the -l ending: **hommikul** — in the morning, **päeval** — in the daytime, **õhtul** — in the evening, **öösel** — at night.',
          'They combine with täna, eile, homme: **täna hommikul** — this morning, **eile õhtul** — last night, **homme päeval** — tomorrow afternoon.',
        ],
      },
      {
        h: 'Examples',
        examples: [
          ['Kell on pool üheksa.', 'It’s half past eight (8:30).'],
          ['Tööpäev algab kell üheksa.', 'The working day starts at nine.'],
          ['Buss tuleb kell veerand kuus.', 'The bus comes at a quarter past five (5:15).'],
          ['Õhtul vaatan ma telerit.', 'In the evening I watch TV.'],
          ['Eile öösel sadas lund.', 'It snowed last night.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          '**pool kolm** is 2:30, not 3:30: the count goes towards the next hour.',
          '**kell** is clock time, **tund** is an hour of duration: Kell on kaks, but the film lasts **kaks tundi**.',
          '**Mis kell on?**, not “Mis aeg on?”: aeg is time in general (“Mul ei ole aega” — I have no time).',
        ],
      },
      { h: 'What to learn next', links: ['dates', 'days', 'time-expr'] },
    ],
    et: [
      {
        h: 'Kuidas kellaaega küsida ja öelda',
        p: [
          'Küsimus on **Mis kell on?** Vastus: **Kell on kolm.** Kui küsitakse, mis ajal midagi toimub, pannakse **kell** arvu ette: Mis kell sa tuled? — **Kell kolm.**',
          'Pool ja veerand loetakse **järgmise** tunni poole: **pool kolm** = 2.30, **veerand kolm** = 2.15, **kolmveerand kolm** = 2.45.',
        ],
        table: {
          head: ['Aeg', 'Eesti keeles', 'Teisiti öeldes'],
          rows: [
            ['2.00', 'kell kaks', 'täpselt kaks'],
            ['2.15', 'veerand kolm', '15 minutit üle kahe'],
            ['2.30', 'pool kolm', '30 minutit üle kahe'],
            ['2.45', 'kolmveerand kolm', '15 minutit kolmeni'],
            ['3.00', 'kell kolm', 'täpselt kolm'],
          ],
        },
      },
      {
        h: 'Päeva osad',
        p: [
          'Päeva osad vastavad küsimusele „millal?“ ja on l-lõpulised: **hommikul**, **päeval**, **õhtul**, **öösel**.',
          'Neid saab ühendada sõnadega täna, eile, homme: **täna hommikul**, **eile õhtul**, **homme päeval**.',
        ],
      },
      {
        h: 'Näited',
        examples: [
          ['Kell on pool üheksa.', '8.30'],
          ['Tööpäev algab kell üheksa.', '9.00'],
          ['Buss tuleb kell veerand kuus.', '5.15'],
          ['Õhtul vaatan ma telerit.', 'õhtu → õhtul'],
          ['Eile öösel sadas lund.', 'öö → öösel'],
        ],
      },
      {
        h: 'Sagedased vead',
        list: [
          '**pool kolm** on 2.30, mitte 3.30: loetakse järgmise tunni poole.',
          '**kell** on kellaaeg, **tund** on ajavahemik: Kell on kaks, aga film kestab **kaks tundi**.',
          '**Mis kell on?**, mitte „Mis aeg on?“: aeg tähendab aega üldiselt (Mul ei ole aega).',
        ],
      },
      { h: 'Mida edasi õppida', links: ['dates', 'days', 'time-expr'] },
    ],
  },
  cases: {
    ru: [
      {
        h: 'Где, откуда, куда: три окончания',
        p: [
          'В эстонском нет предлогов «в», «из», «в(о что)» — вместо них окончания. Для мест «внутри» (город, страна, здание) их три: **-s** отвечает на **kus?** (где), **-st** — на **kust?** (откуда), **-sse** — на **kuhu?** (куда).',
          'Окончание добавляется к основе родительного падежа, а не к начальной форме: linn → (linna) → **linnas**, **linnast**, **linnasse**. У многих частых слов есть короткая форма «куда?»: **linna**, **kooli**, **Tallinna**, а у kodu — особая: **koju**.',
        ],
        table: {
          head: ['Слово', 'kus? (где)', 'kust? (откуда)', 'kuhu? (куда)'],
          rows: [
            ['Tartu', 'Tartus', 'Tartust', 'Tartusse'],
            ['Eesti', 'Eestis', 'Eestist', 'Eestisse'],
            ['linn', 'linnas', 'linnast', 'linna / linnasse'],
            ['kool', 'koolis', 'koolist', 'kooli'],
            ['kodu', 'kodus', 'kodust', 'koju'],
          ],
        },
      },
      {
        h: 'Примеры',
        examples: [
          ['Ma elan Tallinnas.', 'Я живу в Таллинне.'],
          ['Ta tuleb Soomest.', 'Он приезжает из Финляндии.'],
          ['Homme sõidame Tartusse.', 'Завтра мы едем в Тарту.'],
          ['Lapsed on koolis.', 'Дети в школе.'],
          ['Ma lähen koju.', 'Я иду домой.'],
        ],
      },
      {
        h: 'Частые ошибки',
        list: [
          '**linnas**, а не «linns»: окончание идёт к основе родительного падежа (linna-).',
          '**koju**, а не «kodusse»: у kodu особая форма «куда?».',
          'Не путайте «где» и «куда»: Ma elan **Tallinnas**, но Ma sõidan **Tallinna**.',
          'Для улицы, рынка, работы и т.п. нужны другие окончания -l, -lt, -le: **tööl**, **turul** — их разбирает тема о внешних падежах.',
        ],
      },
      { h: 'Что учить дальше', links: ['kuhu', 'outer', 'genitive'] },
    ],
    en: [
      {
        h: 'Where, from where, where to: three endings',
        p: [
          'Estonian has no words for “in”, “from” or “into” — it uses endings instead. For places you are “inside” (a town, a country, a building) there are three: **-s** answers **kus?** (where), **-st** answers **kust?** (from where), **-sse** answers **kuhu?** (where to).',
          'The ending goes on the genitive stem, not on the dictionary form: linn → (linna) → **linnas**, **linnast**, **linnasse**. Many common words also have a short “where to” form: **linna**, **kooli**, **Tallinna**, and kodu has its own: **koju**.',
        ],
        table: {
          head: ['Word', 'kus? (where)', 'kust? (from)', 'kuhu? (to)'],
          rows: [
            ['Tartu', 'Tartus', 'Tartust', 'Tartusse'],
            ['Eesti', 'Eestis', 'Eestist', 'Eestisse'],
            ['linn', 'linnas', 'linnast', 'linna / linnasse'],
            ['kool', 'koolis', 'koolist', 'kooli'],
            ['kodu', 'kodus', 'kodust', 'koju'],
          ],
        },
      },
      {
        h: 'Examples',
        examples: [
          ['Ma elan Tallinnas.', 'I live in Tallinn.'],
          ['Ta tuleb Soomest.', 'He is coming from Finland.'],
          ['Homme sõidame Tartusse.', 'Tomorrow we are going to Tartu.'],
          ['Lapsed on koolis.', 'The children are at school.'],
          ['Ma lähen koju.', 'I am going home.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          '**linnas**, not “linns”: the ending goes on the genitive stem (linna-).',
          '**koju**, not “kodusse”: kodu has its own “where to” form.',
          'Don’t mix up “where” and “where to”: Ma elan **Tallinnas**, but Ma sõidan **Tallinna**.',
          'Streets, the market, work and similar places take the -l, -lt, -le endings instead: **tööl**, **turul** — see the topic on the outer cases.',
        ],
      },
      { h: 'What to learn next', links: ['kuhu', 'outer', 'genitive'] },
    ],
    et: [
      {
        h: 'Kus, kust, kuhu: kolm lõppu',
        p: [
          'Sisekohakäänded näitavad asukohta millegi sees (linn, riik, hoone). Neid on kolm: **-s** vastab küsimusele **kus?**, **-st** küsimusele **kust?** ja **-sse** küsimusele **kuhu?**',
          'Lõpp liitub omastava käände tüvele, mitte algvormile: linn → (linna) → **linnas**, **linnast**, **linnasse**. Paljudel sagedastel sõnadel on lühike sisseütlev: **linna**, **kooli**, **Tallinna**; sõnal kodu on oma vorm **koju**.',
        ],
        table: {
          head: ['Sõna', 'kus?', 'kust?', 'kuhu?'],
          rows: [
            ['Tartu', 'Tartus', 'Tartust', 'Tartusse'],
            ['Eesti', 'Eestis', 'Eestist', 'Eestisse'],
            ['linn', 'linnas', 'linnast', 'linna / linnasse'],
            ['kool', 'koolis', 'koolist', 'kooli'],
            ['kodu', 'kodus', 'kodust', 'koju'],
          ],
        },
      },
      {
        h: 'Näited',
        examples: [
          ['Ma elan Tallinnas.', 'kus? → -s'],
          ['Ta tuleb Soomest.', 'kust? → -st'],
          ['Homme sõidame Tartusse.', 'kuhu? → -sse'],
          ['Lapsed on koolis.', 'kus? → -s'],
          ['Ma lähen koju.', 'kodu → koju'],
        ],
      },
      {
        h: 'Sagedased vead',
        list: [
          '**linnas**, mitte „linns“: lõpp liitub omastava tüvele (linna-).',
          '**koju**, mitte „kodusse“: sõnal kodu on oma sisseütlev.',
          'Ära aja segi „kus“ ja „kuhu“: Ma elan **Tallinnas**, aga Ma sõidan **Tallinna**.',
          'Tänav, turg, töö jms saavad välise kohakäände lõpud -l, -lt, -le: **tööl**, **turul**.',
        ],
      },
      { h: 'Mida edasi õppida', links: ['kuhu', 'outer', 'genitive'] },
    ],
  },
  kaima: {
    ru: [
      {
        h: 'Чем отличаются käima, minema, tulema и sõitma',
        p: [
          '**käima** — ходить регулярно или сходить куда-то и вернуться. Поэтому после него вопрос **где?** (-s, -l): käin **tööl**, käin **koolis**, eile käisin **kinos**.',
          '**minema** — идти или уходить куда-то в одну сторону. После него вопрос **куда?** (-sse, -le, короткая форма): lähen **tööle**, lähen **kinno**, ta läks **koju**.',
          '**tulema** — приходить сюда, к говорящему: Tule siia! **sõitma** — ехать на транспорте: sõidan **bussiga** tööle.',
        ],
        table: {
          head: ['Глагол', 'Значение', 'ma (сейчас)', 'ma (прошл.)', '-nud'],
          rows: [
            ['käima', 'ходить, бывать', 'käin', 'käisin', 'käinud'],
            ['minema', 'идти куда-то', 'lähen', 'läksin', 'läinud'],
            ['tulema', 'приходить сюда', 'tulen', 'tulin', 'tulnud'],
            ['sõitma', 'ехать', 'sõidan', 'sõitsin', 'sõitnud'],
          ],
        },
      },
      {
        h: 'Примеры',
        examples: [
          ['Ma käin iga päev tööl.', 'Я каждый день хожу на работу.'],
          ['Eile käisime teatris.', 'Вчера мы ходили в театр (и вернулись).'],
          ['Homme lähen arsti juurde.', 'Завтра я иду к врачу.'],
          ['Tule homme meile külla!', 'Приходи завтра к нам в гости!'],
          ['Ta sõidab rongiga Tartusse.', 'Она едет в Тарту на поезде.'],
        ],
      },
      {
        h: 'Частые ошибки',
        list: [
          '**käin tööl**, а не «käin tööle»: после käima — где?',
          '**lähen tööle**, а не «lähen tööl»: после minema — куда?',
          '**Ma käisin Pariisis** — съездил и вернулся; **Ma läksin Pariisi** — уехал (и, возможно, ещё там).',
          'Об опыте спрашивают перфектом от käima: **Kas sa oled Pariisis käinud?** — «Ты бывал в Париже?»',
        ],
      },
      { h: 'Что учить дальше', links: ['cases', 'perfect', 'transport'] },
    ],
    en: [
      {
        h: 'käima, minema, tulema and sõitma: the difference',
        p: [
          '**käima** — to go regularly, or to go somewhere and come back. So it answers **where?** (-s, -l): käin **tööl**, käin **koolis**, eile käisin **kinos**.',
          '**minema** — to go or leave for somewhere, one way. It answers **where to?** (-sse, -le, short form): lähen **tööle**, lähen **kinno**, ta läks **koju**.',
          '**tulema** — to come here, towards the speaker: Tule siia! **sõitma** — to travel by vehicle: sõidan **bussiga** tööle.',
        ],
        table: {
          head: ['Verb', 'Meaning', 'ma (now)', 'ma (past)', '-nud'],
          rows: [
            ['käima', 'go, visit', 'käin', 'käisin', 'käinud'],
            ['minema', 'go somewhere', 'lähen', 'läksin', 'läinud'],
            ['tulema', 'come here', 'tulen', 'tulin', 'tulnud'],
            ['sõitma', 'travel, ride', 'sõidan', 'sõitsin', 'sõitnud'],
          ],
        },
      },
      {
        h: 'Examples',
        examples: [
          ['Ma käin iga päev tööl.', 'I go to work every day.'],
          ['Eile käisime teatris.', 'Yesterday we went to the theatre (and came back).'],
          ['Homme lähen arsti juurde.', 'Tomorrow I am going to the doctor.'],
          ['Tule homme meile külla!', 'Come and visit us tomorrow!'],
          ['Ta sõidab rongiga Tartusse.', 'She is taking the train to Tartu.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          '**käin tööl**, not “käin tööle”: käima takes where?',
          '**lähen tööle**, not “lähen tööl”: minema takes where to?',
          '**Ma käisin Pariisis** — I went to Paris and came back; **Ma läksin Pariisi** — I left for Paris (and may still be there).',
          'Ask about experience with the perfect of käima: **Kas sa oled Pariisis käinud?** — “Have you been to Paris?”',
        ],
      },
      { h: 'What to learn next', links: ['cases', 'perfect', 'transport'] },
    ],
    et: [
      {
        h: 'Mis vahe on verbidel käima, minema, tulema ja sõitma',
        p: [
          '**käima** — käia regulaarselt või minna kuhugi ja tulla tagasi. Seepärast järgneb küsimus **kus?** (-s, -l): käin **tööl**, käin **koolis**, eile käisin **kinos**.',
          '**minema** — liikuda kuhugi ühes suunas. Järgneb küsimus **kuhu?** (-sse, -le, lühike vorm): lähen **tööle**, lähen **kinno**, ta läks **koju**.',
          '**tulema** — liikuda siia, rääkija poole: Tule siia! **sõitma** — liikuda sõidukiga: sõidan **bussiga** tööle.',
        ],
        table: {
          head: ['Verb', 'Tähendus', 'olevik', 'lihtminevik', 'nud-vorm'],
          rows: [
            ['käima', 'käia ja tagasi tulla', 'käin', 'käisin', 'käinud'],
            ['minema', 'liikuda kuhugi', 'lähen', 'läksin', 'läinud'],
            ['tulema', 'liikuda siia', 'tulen', 'tulin', 'tulnud'],
            ['sõitma', 'liikuda sõidukiga', 'sõidan', 'sõitsin', 'sõitnud'],
          ],
        },
      },
      {
        h: 'Näited',
        examples: [
          ['Ma käin iga päev tööl.', 'käima + kus?'],
          ['Eile käisime teatris.', 'käima + kus?'],
          ['Homme lähen arsti juurde.', 'minema + kuhu?'],
          ['Tule homme meile külla!', 'tulema'],
          ['Ta sõidab rongiga Tartusse.', 'sõitma + millega?'],
        ],
      },
      {
        h: 'Sagedased vead',
        list: [
          '**käin tööl**, mitte „käin tööle“: käima järel on kus?',
          '**lähen tööle**, mitte „lähen tööl“: minema järel on kuhu?',
          '**Ma käisin Pariisis** — käisin ja tulin tagasi; **Ma läksin Pariisi** — sõitsin ära (ja võin veel seal olla).',
          'Kogemuse kohta küsitakse täisminevikuga: **Kas sa oled Pariisis käinud?**',
        ],
      },
      { h: 'Mida edasi õppida', links: ['cases', 'perfect', 'transport'] },
    ],
  },
  connectors: {
    ru: [
      {
        h: 'Маленькие слова, которые связывают речь',
        p: [
          'Союзы соединяют части предложения: **ja** — и, **aga** — но, **või** — или, **sest** — потому что. После них порядок слов обычный: Ma ei tule, **sest** ma olen haige.',
          'Наречия уточняют смысл: **väga** — очень, **liiga** — слишком, **ka** — тоже, **juba** — уже, **veel** — ещё, **ainult** — только. Без них речь звучит обрывочно, поэтому на устном экзамене они очень заметны.',
        ],
        table: {
          head: ['Слово', 'Значение', 'Пример'],
          rows: [
            ['ja', 'и', 'Mina ja sina.'],
            ['aga', 'но', 'Ilus, aga kallis.'],
            ['või', 'или', 'Tee või kohv?'],
            ['sest', 'потому что', 'Jään koju, sest sajab vihma.'],
            ['väga', 'очень', 'Väga hea!'],
            ['liiga', 'слишком', 'See on liiga kallis.'],
            ['ka', 'тоже', 'Mina tulen ka.'],
            ['juba', 'уже', 'Ta on juba kodus.'],
            ['veel', 'ещё', 'Veel üks kohv, palun.'],
            ['ainult', 'только', 'Mul on ainult viis eurot.'],
          ],
        },
      },
      {
        h: 'Частые ошибки',
        list: [
          '**väga** и **liiga** — не одно и то же: väga kallis — «очень дорогой», **liiga** kallis — «слишком дорогой» (не куплю).',
          '**juba** и **veel**: Ta on **juba** kodus — уже дома; Ta on **veel** tööl — ещё на работе. «Ещё не» — **ei ole veel**: Ta ei ole veel tulnud.',
          '**või** — «или» в выборе; вопрос «ли» задаётся словом **kas**: **Kas** sa tahad teed **või** kohvi?',
        ],
      },
      { h: 'Что учить дальше', links: ['complex', 'questions', 'negation'] },
    ],
    en: [
      {
        h: 'The small words that join speech together',
        p: [
          'Conjunctions join parts of a sentence: **ja** — and, **aga** — but, **või** — or, **sest** — because. The word order after them stays normal: Ma ei tule, **sest** ma olen haige.',
          'Adverbs sharpen the meaning: **väga** — very, **liiga** — too, **ka** — also, **juba** — already, **veel** — still / more, **ainult** — only. Without them speech sounds choppy, which examiners notice in the speaking test.',
        ],
        table: {
          head: ['Word', 'Meaning', 'Example'],
          rows: [
            ['ja', 'and', 'Mina ja sina.'],
            ['aga', 'but', 'Ilus, aga kallis.'],
            ['või', 'or', 'Tee või kohv?'],
            ['sest', 'because', 'Jään koju, sest sajab vihma.'],
            ['väga', 'very', 'Väga hea!'],
            ['liiga', 'too (much)', 'See on liiga kallis.'],
            ['ka', 'also, too', 'Mina tulen ka.'],
            ['juba', 'already', 'Ta on juba kodus.'],
            ['veel', 'still, more', 'Veel üks kohv, palun.'],
            ['ainult', 'only', 'Mul on ainult viis eurot.'],
          ],
        },
      },
      {
        h: 'Common mistakes',
        list: [
          '**väga** and **liiga** differ: väga kallis — “very expensive”, **liiga** kallis — “too expensive” (I won’t buy it).',
          '**juba** and **veel**: Ta on **juba** kodus — already at home; Ta on **veel** tööl — still at work. “Not yet” is **ei ole veel**: Ta ei ole veel tulnud.',
          '**või** is “or” in a choice; a yes/no question starts with **kas**: **Kas** sa tahad teed **või** kohvi?',
        ],
      },
      { h: 'What to learn next', links: ['complex', 'questions', 'negation'] },
    ],
    et: [
      {
        h: 'Väikesed sõnad, mis seovad kõne',
        p: [
          'Sidesõnad ühendavad lauseosi: **ja**, **aga**, **või**, **sest**. Nende järel on tavaline sõnajärg: Ma ei tule, **sest** ma olen haige.',
          'Määrsõnad täpsustavad tähendust: **väga**, **liiga**, **ka**, **juba**, **veel**, **ainult**. Ilma nendeta kõlab kõne katkendlikult, seepärast on need suulisel eksamil hästi märgatavad.',
        ],
        table: {
          head: ['Sõna', 'Millal', 'Näide'],
          rows: [
            ['ja', 'liitmine', 'Mina ja sina.'],
            ['aga', 'vastandamine', 'Ilus, aga kallis.'],
            ['või', 'valik', 'Tee või kohv?'],
            ['sest', 'põhjus', 'Jään koju, sest sajab vihma.'],
            ['väga', 'tugevdamine', 'Väga hea!'],
            ['liiga', 'üle piiri', 'See on liiga kallis.'],
            ['ka', 'samuti', 'Mina tulen ka.'],
            ['juba', 'varem kui oodati', 'Ta on juba kodus.'],
            ['veel', 'jätkub / lisaks', 'Veel üks kohv, palun.'],
            ['ainult', 'piiramine', 'Mul on ainult viis eurot.'],
          ],
        },
      },
      {
        h: 'Sagedased vead',
        list: [
          '**väga** ja **liiga** ei ole sama: väga kallis on lihtsalt kallis, **liiga** kallis tähendab, et ei osta.',
          '**juba** ja **veel**: Ta on **juba** kodus; Ta on **veel** tööl. Eitavalt: **ei ole veel** — Ta ei ole veel tulnud.',
          '**või** tähistab valikut; üldküsimus algab sõnaga **kas**: **Kas** sa tahad teed **või** kohvi?',
        ],
      },
      { h: 'Mida edasi õppida', links: ['complex', 'questions', 'negation'] },
    ],
  },
  'self-intro': {
    ru: [
      {
        h: 'Как построить рассказ о себе',
        p: [
          'Рассказ о себе обычно звучит в начале устной части экзамена. Удобный порядок: откуда вы, где выросли, когда переехали, семья, работа или учёба, планы.',
          'История жизни рассказывается в **простом прошедшем**: Ma **sündisin** Narvas, **kasvasin üles** Tartus, 2015. aastal **kolisime** Tallinna. Факт, важный сейчас, можно сказать перфектом: Ma **olen sündinud** Narvas.',
          '**kui** + прошедшее — «когда»: **Kui ma olin laps**, elasime maal. Не путайте **tutvuma** («знакомиться»: me tutvusime tööl) и **tutvustama** («представлять»: tutvustan sind vanematele).',
        ],
      },
      {
        h: 'Полезные фразы',
        examples: [
          ['Ma olen pärit Lätist / Soomest.', 'Я родом из Латвии / Финляндии.'],
          ['Ma elan Eestis juba kümme aastat.', 'Я живу в Эстонии уже десять лет.'],
          ['Ma olen abielus. Mul on kaks last.', 'Я женат / замужем. У меня двое детей.'],
          ['Mu elukaaslane töötab õpetajana.', 'Мой партнёр работает учителем.'],
          ['Tulevikus tahan sooritada B1-taseme eksami.', 'В будущем я хочу сдать экзамен B1.'],
        ],
      },
      {
        h: 'Частые ошибки',
        list: [
          '**Inglismaalt**, а не «Inglismaast»: у названий стран на -maa — внешний падеж (Soomest, но Inglismaalt, Saksamaalt).',
          '**kaks last**, а не «kaks lapsed»: после числа — партитив единственного числа.',
          '**Ma tutvusin temaga**, а не «Ma tutvusin teda»: tutvuma требует -ga.',
          '**töötan õpetajana** — профессия после töötama стоит в форме на **-na** («кем?»).',
        ],
      },
      { h: 'Что учить дальше', links: ['about-me', 'family2', 'perfect'] },
    ],
    en: [
      {
        h: 'How to build a self-introduction',
        p: [
          'Talking about yourself usually opens the speaking part of the exam. A handy order: where you are from, where you grew up, when you moved, family, work or studies, plans.',
          'A life story is told in the **simple past**: Ma **sündisin** Narvas, **kasvasin üles** Tartus, 2015. aastal **kolisime** Tallinna. A fact that matters now can take the perfect: Ma **olen sündinud** Narvas.',
          '**kui** + past means “when”: **Kui ma olin laps**, elasime maal. Don’t confuse **tutvuma** (“to get to know”: me tutvusime tööl) with **tutvustama** (“to introduce”: tutvustan sind vanematele).',
        ],
      },
      {
        h: 'Useful phrases',
        examples: [
          ['Ma olen pärit Lätist / Soomest.', 'I am from Latvia / Finland.'],
          ['Ma elan Eestis juba kümme aastat.', 'I have lived in Estonia for ten years.'],
          ['Ma olen abielus. Mul on kaks last.', 'I am married. I have two children.'],
          ['Mu elukaaslane töötab õpetajana.', 'My partner works as a teacher.'],
          ['Tulevikus tahan sooritada B1-taseme eksami.', 'In future I want to pass the B1 exam.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          '**Inglismaalt**, not “Inglismaast”: country names ending in -maa take the outer case (Soomest, but Inglismaalt, Saksamaalt).',
          '**kaks last**, not “kaks lapsed”: after a number, use the partitive singular.',
          '**Ma tutvusin temaga**, not “Ma tutvusin teda”: tutvuma takes -ga.',
          '**töötan õpetajana** — after töötama the job takes the **-na** ending (“as”).',
        ],
      },
      { h: 'What to learn next', links: ['about-me', 'family2', 'perfect'] },
    ],
    et: [
      {
        h: 'Kuidas endast rääkida',
        p: [
          'Endast rääkimisega algab tavaliselt eksami suuline osa. Mugav järjekord: kust oled pärit, kus kasvasid üles, millal kolisid, pere, töö või õpingud, plaanid.',
          'Eluloo jutustamiseks sobib **lihtminevik**: Ma **sündisin** Narvas, **kasvasin üles** Tartus, 2015. aastal **kolisime** Tallinna. Praegu olulist fakti võib öelda täisminevikus: Ma **olen sündinud** Narvas.',
          '**kui** + minevik: **Kui ma olin laps**, elasime maal. Ära aja segi verbe **tutvuma** (me tutvusime tööl) ja **tutvustama** (tutvustan sind vanematele).',
        ],
      },
      {
        h: 'Kasulikud laused',
        examples: [
          ['Ma olen pärit Lätist / Soomest.', 'päritolu'],
          ['Ma elan Eestis juba kümme aastat.', 'kui kaua'],
          ['Ma olen abielus. Mul on kaks last.', 'pere'],
          ['Mu elukaaslane töötab õpetajana.', 'töö: -na'],
          ['Tulevikus tahan sooritada B1-taseme eksami.', 'plaanid'],
        ],
      },
      {
        h: 'Sagedased vead',
        list: [
          '**Inglismaalt**, mitte „Inglismaast“: maa-lõpulised riiginimed saavad välise kohakäände (Soomest, aga Inglismaalt, Saksamaalt).',
          '**kaks last**, mitte „kaks lapsed“: arvsõna järel on ainsuse osastav.',
          '**Ma tutvusin temaga**, mitte „Ma tutvusin teda“: tutvuma nõuab kaasaütlevat.',
          '**töötan õpetajana** — ameti nimetus on olevas käändes (-na).',
        ],
      },
      { h: 'Mida edasi õppida', links: ['about-me', 'family2', 'perfect'] },
    ],
  },
  weather: {
    ru: [
      {
        h: 'Как говорить о погоде',
        p: [
          'Вопрос — **Mis ilm täna on?** («Какая сегодня погода?»). Ответ строится с **on**: Täna on **ilus** ilm, täna on **külm**, **soe**, **kuum**.',
          'Для осадков используется глагол **sadama** («падать, идти»), а сами осадки стоят в партитиве: **sajab vihma** — идёт дождь, **sajab lund** — идёт снег. Для солнца и ветра — свои глаголы: **päike paistab**, **tuul puhub**.',
          'Температура: **viis kraadi sooja** — +5, **viis kraadi külma** — −5.',
        ],
        table: {
          head: ['Слово', 'Значение', 'Как сказать'],
          rows: [
            ['vihm', 'дождь', 'Sajab vihma.'],
            ['lumi', 'снег', 'Sajab lund.'],
            ['päike', 'солнце', 'Päike paistab.'],
            ['tuul', 'ветер', 'Tuul puhub.'],
            ['pilv', 'облако', 'On pilves.'],
          ],
        },
      },
      {
        h: 'Примеры',
        examples: [
          ['Täna on ilus ilm.', 'Сегодня хорошая погода.'],
          ['Väljas sajab lund.', 'На улице идёт снег.'],
          ['Päike paistab, aga tuul on külm.', 'Светит солнце, но ветер холодный.'],
          ['Homme on kümme kraadi sooja.', 'Завтра будет +10.'],
          ['Talvel on Eestis külm.', 'Зимой в Эстонии холодно.'],
        ],
      },
      {
        h: 'Частые ошибки',
        list: [
          '**sajab vihma**, а не «sajab vihm»: после sadama осадки в партитиве (vihm → vihma, lumi → lund).',
          '**Mul on külm** — «мне холодно»; «Ma olen külm» значит «я холодный (человек)».',
          '**ilm** — погода, **aeg** — время: Mis **ilm** täna on?',
        ],
      },
      { h: 'Что учить дальше', links: ['months', 'forecast', 'clothes'] },
    ],
    en: [
      {
        h: 'Talking about the weather',
        p: [
          'The question is **Mis ilm täna on?** (“What’s the weather like today?”). Answers use **on**: Täna on **ilus** ilm, täna on **külm**, **soe**, **kuum**.',
          'For rain and snow use the verb **sadama** (“to fall”), with the precipitation in the partitive: **sajab vihma** — it’s raining, **sajab lund** — it’s snowing. The sun and wind have their own verbs: **päike paistab**, **tuul puhub**.',
          'Temperature: **viis kraadi sooja** — plus five, **viis kraadi külma** — minus five.',
        ],
        table: {
          head: ['Word', 'Meaning', 'How to say it'],
          rows: [
            ['vihm', 'rain', 'Sajab vihma.'],
            ['lumi', 'snow', 'Sajab lund.'],
            ['päike', 'sun', 'Päike paistab.'],
            ['tuul', 'wind', 'Tuul puhub.'],
            ['pilv', 'cloud', 'On pilves.'],
          ],
        },
      },
      {
        h: 'Examples',
        examples: [
          ['Täna on ilus ilm.', 'The weather is nice today.'],
          ['Väljas sajab lund.', 'It’s snowing outside.'],
          ['Päike paistab, aga tuul on külm.', 'The sun is shining, but the wind is cold.'],
          ['Homme on kümme kraadi sooja.', 'Tomorrow it will be plus ten.'],
          ['Talvel on Eestis külm.', 'In winter it’s cold in Estonia.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          '**sajab vihma**, not “sajab vihm”: after sadama the precipitation is partitive (vihm → vihma, lumi → lund).',
          '**Mul on külm** — “I’m cold”; “Ma olen külm” means “I am a cold person”.',
          '**ilm** is weather, **aeg** is time: Mis **ilm** täna on?',
        ],
      },
      { h: 'What to learn next', links: ['months', 'forecast', 'clothes'] },
    ],
    et: [
      {
        h: 'Kuidas ilmast rääkida',
        p: [
          'Küsimus on **Mis ilm täna on?** Vastuses on verb **on**: Täna on **ilus** ilm, täna on **külm**, **soe**, **kuum**.',
          'Sademete kohta kasutatakse verbi **sadama**, sademe nimetus on osastavas: **sajab vihma**, **sajab lund**. Päikesel ja tuulel on oma verbid: **päike paistab**, **tuul puhub**.',
          'Temperatuur: **viis kraadi sooja** on +5, **viis kraadi külma** on −5.',
        ],
        table: {
          head: ['Sõna', 'Nähtus', 'Kuidas öelda'],
          rows: [
            ['vihm', 'sademed', 'Sajab vihma.'],
            ['lumi', 'sademed', 'Sajab lund.'],
            ['päike', 'valgus', 'Päike paistab.'],
            ['tuul', 'õhu liikumine', 'Tuul puhub.'],
            ['pilv', 'taevas', 'On pilves.'],
          ],
        },
      },
      {
        h: 'Näited',
        examples: [
          ['Täna on ilus ilm.', 'on + omadussõna'],
          ['Väljas sajab lund.', 'sadama + osastav'],
          ['Päike paistab, aga tuul on külm.', 'paistma, külm'],
          ['Homme on kümme kraadi sooja.', '+10'],
          ['Talvel on Eestis külm.', 'talv → talvel'],
        ],
      },
      {
        h: 'Sagedased vead',
        list: [
          '**sajab vihma**, mitte „sajab vihm“: sadama järel on osastav (vihm → vihma, lumi → lund).',
          '**Mul on külm** tähendab, et sul on külm; „Ma olen külm“ kirjeldab iseloomu.',
          '**ilm** ja **aeg** on eri sõnad: Mis **ilm** täna on?',
        ],
      },
      { h: 'Mida edasi õppida', links: ['months', 'forecast', 'clothes'] },
    ],
  },
  pronouns: {
    ru: [
      {
        h: 'Формы личных местоимений',
        p: [
          'Местоимения меняются по падежам, как существительные. На уровне A2 чаще всего нужны пять форм: кто? (**ma**), кого? (**mind**), кому? (**mulle**), чей? (**minu**) и с кем? (**minuga**).',
          'Форма «кого?» — партитив — стоит после глаголов вроде armastama, ootama, aitama, nägema: Ma **ootan sind**. Форма на **-le** отвечает на «кому?»: Anna **mulle**! Helista **talle**!',
          '«У меня есть» — отдельная форма на -l: **mul, sul, tal, meil, teil, neil**: Mul on auto.',
        ],
        table: {
          head: ['Кто?', 'Кого?', 'Кому?', 'Чей?', 'С кем?'],
          rows: [
            ['ma / mina', 'mind', 'mulle', 'minu', 'minuga'],
            ['sa / sina', 'sind', 'sulle', 'sinu', 'sinuga'],
            ['ta / tema', 'teda', 'talle', 'tema', 'temaga'],
            ['me / meie', 'meid', 'meile', 'meie', 'meiega'],
            ['te / teie', 'teid', 'teile', 'teie', 'teiega'],
            ['nad / nemad', 'neid', 'neile', 'nende', 'nendega'],
          ],
        },
      },
      {
        h: 'Примеры',
        examples: [
          ['Ma ootan sind kell viis.', 'Я жду тебя в пять.'],
          ['Helista mulle homme!', 'Позвони мне завтра!'],
          ['See on tema auto.', 'Это его машина.'],
          ['Kas sa tuled meiega?', 'Ты пойдёшь с нами?'],
          ['Ma ei tunne neid.', 'Я их не знаю.'],
        ],
      },
      {
        h: 'Частые ошибки',
        list: [
          '**Ma helistan sulle**, а не «Ma helistan sind»: helistama требует «кому?» (-le).',
          '**nende**, а не «neide»: «их (чей?)» — nende auto.',
          'В разговоре чаще короткие формы: **mu**, **su** вместо minu, sinu: Mu nimi on Anna.',
        ],
      },
      { h: 'Что учить дальше', links: ['genitive', 'comitative', 'have'] },
    ],
    en: [
      {
        h: 'Forms of the personal pronouns',
        p: [
          'Pronouns change by case, just like nouns. At A2 you mostly need five forms: who? (**ma**), whom? (**mind**), to whom? (**mulle**), whose? (**minu**) and with whom? (**minuga**).',
          'The “whom?” form — the partitive — follows verbs like armastama, ootama, aitama, nägema: Ma **ootan sind**. The **-le** form answers “to whom?”: Anna **mulle**! Helista **talle**!',
          '“I have” uses a separate -l form: **mul, sul, tal, meil, teil, neil**: Mul on auto.',
        ],
        table: {
          head: ['Who?', 'Whom?', 'To whom?', 'Whose?', 'With whom?'],
          rows: [
            ['ma / mina', 'mind', 'mulle', 'minu', 'minuga'],
            ['sa / sina', 'sind', 'sulle', 'sinu', 'sinuga'],
            ['ta / tema', 'teda', 'talle', 'tema', 'temaga'],
            ['me / meie', 'meid', 'meile', 'meie', 'meiega'],
            ['te / teie', 'teid', 'teile', 'teie', 'teiega'],
            ['nad / nemad', 'neid', 'neile', 'nende', 'nendega'],
          ],
        },
      },
      {
        h: 'Examples',
        examples: [
          ['Ma ootan sind kell viis.', 'I’ll wait for you at five.'],
          ['Helista mulle homme!', 'Call me tomorrow!'],
          ['See on tema auto.', 'This is his car.'],
          ['Kas sa tuled meiega?', 'Are you coming with us?'],
          ['Ma ei tunne neid.', 'I don’t know them.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          '**Ma helistan sulle**, not “Ma helistan sind”: helistama takes “to whom?” (-le).',
          '**nende**, not “neide”: “their” is nende — nende auto.',
          'In speech the short forms are common: **mu**, **su** instead of minu, sinu: Mu nimi on Anna.',
        ],
      },
      { h: 'What to learn next', links: ['genitive', 'comitative', 'have'] },
    ],
    et: [
      {
        h: 'Isikuliste asesõnade vormid',
        p: [
          'Asesõnad käänduvad nagu nimisõnad. A2 tasemel on kõige vajalikumad viis vormi: kes? (**ma**), keda? (**mind**), kellele? (**mulle**), kelle? (**minu**) ja kellega? (**minuga**).',
          'Osastav (keda?) järgneb verbidele nagu armastama, ootama, aitama, nägema: Ma **ootan sind**. Alaleütlev vastab küsimusele „kellele?“: Anna **mulle**! Helista **talle**!',
          'Omamist väljendab alalütlev: **mul, sul, tal, meil, teil, neil**: Mul on auto.',
        ],
        table: {
          head: ['Kes?', 'Keda?', 'Kellele?', 'Kelle?', 'Kellega?'],
          rows: [
            ['ma / mina', 'mind', 'mulle', 'minu', 'minuga'],
            ['sa / sina', 'sind', 'sulle', 'sinu', 'sinuga'],
            ['ta / tema', 'teda', 'talle', 'tema', 'temaga'],
            ['me / meie', 'meid', 'meile', 'meie', 'meiega'],
            ['te / teie', 'teid', 'teile', 'teie', 'teiega'],
            ['nad / nemad', 'neid', 'neile', 'nende', 'nendega'],
          ],
        },
      },
      {
        h: 'Näited',
        examples: [
          ['Ma ootan sind kell viis.', 'keda? → sind'],
          ['Helista mulle homme!', 'kellele? → mulle'],
          ['See on tema auto.', 'kelle? → tema'],
          ['Kas sa tuled meiega?', 'kellega? → meiega'],
          ['Ma ei tunne neid.', 'keda? → neid'],
        ],
      },
      {
        h: 'Sagedased vead',
        list: [
          '**Ma helistan sulle**, mitte „Ma helistan sind“: helistama nõuab alaleütlevat (-le).',
          '**nende**, mitte „neide“: nende auto.',
          'Kõnes kasutatakse sageli lühivorme **mu**, **su**: Mu nimi on Anna.',
        ],
      },
      { h: 'Mida edasi õppida', links: ['genitive', 'comitative', 'have'] },
    ],
  },
};
