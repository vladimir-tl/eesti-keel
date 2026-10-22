import type { Lang } from '../i18n/ui';

/**
 * The rule behind a topic, written out under the quiz so readers and search engines get more
 * than the short hint. `**bold**` marks Estonian forms. `links` are topic ids.
 * Topics not listed here show only the quiz.
 */
export interface NoteSection {
  h: string;
  p?: string[];
  table?: { head: string[]; rows: string[][] };
  examples?: [string, string][]; // Estonian sentence, translation or note
  list?: string[];
  links?: string[];
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
};
