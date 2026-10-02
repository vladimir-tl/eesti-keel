import type { L, Question } from './questions';
import { tr } from './questions';

/** Multiple choice: "How do you say X in Estonian?" — options are Estonian. */
export const toEt = (ru: string, en: string, options: string[], answer: number): Question => ({
  level: 'A1',
  prompt: tr(`Как по-эстонски «${ru}»?`, `What is “${en}” in Estonian?`, `Kuidas on eesti keeles «${en}»?`),
  options,
  answer,
  explain: tr(`${options[answer]} — ${ru}.`, `${options[answer]} — ${en}.`, `${options[answer]} — ${en}.`),
  pair: { et: options[answer], tr: tr(ru, en, en) },
});

/** Multiple choice: "What does Estonian word X mean?" — options are translated. */
export const fromEt = (word: string, ru: string[], en: string[], answer: number): Question => ({
  level: 'A1',
  prompt: tr(`Что значит «${word}»?`, `What does “${word}” mean?`, `Mida tähendab «${word}»?`),
  options: ru.map((r, i) => tr(r, en[i], en[i])),
  answer,
  explain: tr(`${word} — ${ru[answer]}.`, `${word} — ${en[answer]}.`, `${word} — ${en[answer]}.`),
  pair: { et: word, tr: tr(ru[answer], en[answer], en[answer]) },
});

/** Typed: write the Estonian word. */
export const typeEt = (ru: string, en: string, accept: string[]): Question => ({
  level: 'A1',
  prompt: tr(`Напишите по-эстонски: «${ru}»`, `Write in Estonian: “${en}”`, `Kirjuta eesti keeles: «${en}»`),
  options: [],
  answer: -1,
  accept,
  explain: tr(`${ru} — ${accept[0]}.`, `${en} — ${accept[0]}.`, `${en} — ${accept[0]}.`),
  pair: { et: accept[0], tr: tr(ru, en, en) },
});

export const mc = (p: L, options: L[], answer: number, explain: L): Question => ({
  level: 'A1',
  prompt: p,
  options,
  answer,
  explain: typeof explain === 'string' ? tr(explain, explain) : explain,
});

export const typed = (p: L, accept: string[], explain: L): Question => ({
  level: 'A1',
  prompt: p,
  options: [],
  answer: -1,
  accept,
  explain: typeof explain === 'string' ? tr(explain, explain) : explain,
});


/** Multiple choice with Estonian options and RU/EN prompt + explanation. */
export const m = (ru: string, en: string, options: string[], answer: number, eru: string, een: string): Question =>
  mc(tr(ru, en), options, answer, tr(eru, een));

/** Typed answer with RU/EN prompt + explanation. */
export const ty = (ru: string, en: string, accept: string[], eru: string, een: string): Question =>
  typed(tr(ru, en), accept, tr(eru, een));
