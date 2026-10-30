import type { Lang } from '../i18n/ui';
import { etText } from './et';
import { emoji } from './pictures';

export type Level = 'A1' | 'A2' | 'B1';
/** Translated text. Estonian is optional here: a missing `et` comes from the dictionary in et.ts. */
export type Tr = { ru: string; en: string; et?: string };
/** Text that is either identical in every language or translated. */
export type L = string | Tr;

/** One line of a dialogue card. With `options` the text holds one "___" to fill; without, it is shown as it is. */
export interface DialogTurn {
  who: string;
  text: string;
  options: string[]; // Estonian words, the right one first in the source (shuffled at run time)
  answer: number;
  tr: Tr; // translation of the finished line, shown after checking
}

export interface Question {
  level: Level;
  prompt: L;
  options: L[]; // empty array for a typed answer
  answer: number; // option index; -1 for a typed answer
  accept?: string[]; // accepted typed answers
  explain: Tr;
  audio?: string; // listening question: file under /audio, played above the prompt
  image?: string; // picture shown above the prompt: markup from pictures.ts
  pics?: string[]; // picture options, one per option; `options` then hold their captions, shown after checking
  dialog?: DialogTurn[]; // dialogue card: one gap per line, all on one card (`options` is then empty and `answer` -1)
  pair?: { et: string; tr: Tr }; // the word or phrase being practised, for the topic word list
}

export const t = (v: L, lang: Lang): string => {
  if (typeof v === 'string') return v;
  if (lang !== 'et') return v[lang];
  const et = v.et ?? etText[v.en];
  // Fail the build rather than publish an Estonian page with English text in it.
  if (et === undefined) throw new Error(`Missing Estonian text for: ${v.en}`);
  return et;
};

/** Same text in Russian and English (Estonian examples, numbers), or an Estonian sentence that differs only by its gloss in brackets. */
const neutral = (ru: string, en: string) => {
  if (ru === en) return true;
  const head = (s: string) => s.match(/^(.+?)\s*\([^()]*\)\s*$/)?.[1];
  return head(ru) !== undefined && head(ru) === head(en);
};

// Neutral text keeps the English version in Estonian: glosses stay English, as in the translation questions.
export const tr = (ru: string, en: string, et?: string): Tr => ({ ru, en, et: et ?? (neutral(ru, en) ? en : undefined) });

export const a1: Question[] = [
  {
    level: 'A1',
    prompt: tr('Что значит «Tere»?', 'What does “Tere” mean?'),
    options: [tr('Привет', 'Hello'), tr('До свидания', 'Goodbye'), tr('Спасибо', 'Thank you'), tr('Извините', 'Sorry')],
    answer: 0,
    explain: tr('Tere — «привет / здравствуйте». Утром: Tere hommikust.', 'Tere — “hello”. In the morning: Tere hommikust.'),
  },
  {
    level: 'A1',
    prompt: tr('Как сказать «Спасибо»?', 'How do you say “Thank you”?'),
    options: ['Aitäh', 'Palun', 'Vabandust', 'Head aega'],
    answer: 0,
    explain: tr('Aitäh — спасибо; Palun — пожалуйста / прошу; Vabandust — извините.', 'Aitäh — thanks; Palun — please / you’re welcome; Vabandust — sorry.'),
  },
  {
    level: 'A1',
    prompt: tr('Что значит «Head aega»?', 'What does “Head aega” mean?'),
    options: [tr('Доброе утро', 'Good morning'), tr('До свидания', 'Goodbye'), tr('Добрый вечер', 'Good evening'), tr('Пожалуйста', 'Please')],
    answer: 1,
    explain: tr('Head aega — «до свидания» (буквально «доброго времени»). Неформально: Nägemist!', 'Head aega — “goodbye” (literally “good time”). Informal: Nägemist!'),
  },
  {
    level: 'A1',
    prompt: tr('Mis on sinu nimi? — Minu nimi ___ Anna.', 'Mis on sinu nimi? — Minu nimi ___ Anna.'),
    options: ['on', 'olen', 'oled', 'oleme'],
    answer: 0,
    explain: tr('Подлежащее «nimi» (имя) — 3-е лицо, поэтому on.', 'The subject “nimi” (name) is 3rd person, so on.'),
  },
  {
    level: 'A1',
    prompt: tr('Mina ___ õpilane. (Я ученик.)', 'Mina ___ õpilane. (I am a student.)'),
    options: ['on', 'olen', 'oled', 'oleme'],
    answer: 1,
    explain: tr('olla: mina olen, sina oled, tema on, meie oleme, teie olete, nemad on.', 'olla: mina olen, sina oled, tema on, meie oleme, teie olete, nemad on.'),
  },
  {
    level: 'A1',
    prompt: tr('Sina ___ eestlane? (Ты эстонец?)', 'Sina ___ eestlane? (Are you Estonian?)'),
    options: ['olen', 'oled', 'on', 'olete'],
    answer: 1,
    explain: tr('С «sina» (ты) — oled.', 'With “sina” (you, singular) — oled.'),
  },
  {
    level: 'A1',
    prompt: tr('Как по-эстонски «три»?', 'What is “three” in Estonian?'),
    options: ['kaks', 'neli', 'kolm', 'viis'],
    answer: 2,
    explain: tr('1 üks, 2 kaks, 3 kolm, 4 neli, 5 viis, 6 kuus, 7 seitse, 8 kaheksa, 9 üheksa, 10 kümme.', '1 üks, 2 kaks, 3 kolm, 4 neli, 5 viis, 6 kuus, 7 seitse, 8 kaheksa, 9 üheksa, 10 kümme.'),
  },
  {
    level: 'A1',
    prompt: tr('Что значит «seitse»?', 'What does “seitse” mean?'),
    options: ['5', '6', '7', '8'],
    answer: 2,
    explain: tr('seitse = 7 (kuus = 6, kaheksa = 8).', 'seitse = 7 (kuus = 6, kaheksa = 8).'),
  },
  {
    level: 'A1',
    prompt: tr('Напишите ответ словом: 2 + 3 = ?', 'Write the answer as a word: 2 + 3 = ?'),
    options: [],
    answer: -1,
    accept: ['viis'],
    explain: tr('kaks + kolm = viis.', 'kaks + kolm = viis.'),
  },
  {
    level: 'A1',
    prompt: tr('Что значит «punane»?', 'What does “punane” mean?'),
    options: [tr('красный', 'red'), tr('синий', 'blue'), tr('зелёный', 'green'), tr('жёлтый', 'yellow')],
    answer: 0,
    explain: tr('punane — красный, sinine — синий, roheline — зелёный, kollane — жёлтый, valge — белый, must — чёрный.', 'punane — red, sinine — blue, roheline — green, kollane — yellow, valge — white, must — black.'),
  },
  {
    level: 'A1',
    prompt: tr('Как по-эстонски «хлеб»?', 'What is “bread” in Estonian?'),
    options: ['piim', 'leib', 'vesi', 'kohv'],
    answer: 1,
    explain: tr('leib — хлеб, piim — молоко, vesi — вода, kohv — кофе.', 'leib — bread, piim — milk, vesi — water, kohv — coffee.'),
  },
  {
    level: 'A1',
    prompt: tr('Что на картинке? Напишите по-эстонски.', 'What is in the picture? Write it in Estonian.', 'Mis on pildil? Kirjuta eesti keeles.'),
    image: emoji('🥛'),
    options: [],
    answer: -1,
    accept: ['piim'],
    explain: tr('piim — молоко.', 'piim — milk.'),
  },
  {
    level: 'A1',
    prompt: tr('Что значит «ema»?', 'What does “ema” mean?'),
    options: [tr('отец', 'father'), tr('мать', 'mother'), tr('сестра', 'sister'), tr('брат', 'brother')],
    answer: 1,
    explain: tr('ema — мама, isa — папа, õde — сестра, vend — брат.', 'ema — mum, isa — dad, õde — sister, vend — brother.'),
  },
  {
    level: 'A1',
    prompt: tr('Какой день — «esmaspäev»?', 'Which day is “esmaspäev”?'),
    options: [tr('понедельник', 'Monday'), tr('вторник', 'Tuesday'), tr('суббота', 'Saturday'), tr('воскресенье', 'Sunday')],
    answer: 0,
    explain: tr('esmaspäev — пн, teisipäev — вт, kolmapäev — ср, neljapäev — чт, reede — пт, laupäev — сб, pühapäev — вс.', 'esmaspäev — Mon, teisipäev — Tue, kolmapäev — Wed, neljapäev — Thu, reede — Fri, laupäev — Sat, pühapäev — Sun.'),
  },
  {
    level: 'A1',
    prompt: tr('Kuidas läheb? (Как дела?) — Выберите ответ.', 'Kuidas läheb? (How are you?) — Choose a reply.'),
    options: ['Hästi, aitäh', 'Minu nimi on Anna', 'Head aega', 'Ma elan Tallinnas'],
    answer: 0,
    explain: tr('Hästi, aitäh — «хорошо, спасибо».', 'Hästi, aitäh — “fine, thanks”.'),
  },
  {
    level: 'A1',
    prompt: tr('Напишите по-эстонски: «нет» (ответ на вопрос)', 'Write in Estonian: “no” (answer to a question)'),
    options: [],
    answer: -1,
    accept: ['ei'],
    explain: tr('jah — да, ei — нет.', 'jah — yes, ei — no.'),
  },
  {
    level: 'A1',
    prompt: tr('Ma ___ eesti keelt. (Я учу эстонский.)', 'Ma ___ eesti keelt. (I am learning Estonian.)'),
    options: ['õpin', 'õpid', 'õpib', 'õpime'],
    answer: 0,
    explain: tr('õppima: ma õpin, sa õpid, ta õpib, me õpime, te õpite, nad õpivad.', 'õppima: ma õpin, sa õpid, ta õpib, me õpime, te õpite, nad õpivad.'),
  },
  {
    level: 'A1',
    prompt: tr('Tema ___ kohvi. (Он пьёт кофе.)', 'Tema ___ kohvi. (He drinks coffee.)'),
    options: ['joon', 'jood', 'joob', 'joome'],
    answer: 2,
    explain: tr('juua: ma joon, sa jood, ta joob, me joome, te joote, nad joovad.', 'juua: ma joon, sa jood, ta joob, me joome, te joote, nad joovad.'),
  },
  {
    level: 'A1',
    prompt: tr('Я живу в Таллинне: Ma elan ___.', 'I live in Tallinn: Ma elan ___.'),
    options: ['Tallinn', 'Tallinnas', 'Tallinnast', 'Tallinna'],
    answer: 1,
    explain: tr('Окончание -s (инессив) = «в»: Tallinnas — в Таллинне, Tartus — в Тарту.', 'The ending -s (inessive) = “in”: Tallinnas — in Tallinn, Tartus — in Tartu.'),
  },
  {
    level: 'A1',
    prompt: tr('Как по-эстонски «Пожалуйста» (при просьбе)?', 'How do you say “Please” (when asking)?'),
    options: ['Aitäh', 'Vabandust', 'Palun', 'Tere'],
    answer: 2,
    explain: tr('Palun — «пожалуйста» и при просьбе, и в ответ на «спасибо».', 'Palun — “please” when asking and “you’re welcome” after thanks.'),
  },
];
