import type { L, Question } from './questions';
import { etText } from './et';

const verbs: [RegExp, string][] = [
  [/^(Напишите|Впишите|Введите)(?=[\s:.])/, 'Выберите'],
  [/^(Write|Type)(?=[\s:.])/, 'Choose'],
  [/^(Kirjuta|Sisesta)(?=[\s:.])/, 'Vali'],
];
const reword = (s: string) => verbs.reduce((acc, [re, to]) => acc.replace(re, to), s);
const rewordL = (p: L): L => (typeof p === 'string' ? reword(p) : { ...p, ru: reword(p.ru), en: reword(p.en), et: (p.et ?? etText[p.en]) !== undefined ? reword((p.et ?? etText[p.en])!) : undefined });

const words = (s: string) => s.trim().split(/\s+/).length;
const common = (a: string, b: string) => {
  let n = 0;
  while (n < a.length && n < b.length && a[a.length - 1 - n] === b[b.length - 1 - n]) n++;
  return n;
};
const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

/** Typed answers become multiple choice: the right answer plus the closest-looking Estonian answers from the same set. */
export const choicify = (questions: Question[]): Question[] => {
  const pool = new Set<string>();
  for (const q of questions) {
    if (q.accept?.length) pool.add(q.accept[0]);
    else if (q.answer >= 0 && !q.pics && typeof q.options[q.answer] === 'string') pool.add(q.options[q.answer] as string);
  }
  return questions.map((q) => {
    if (!q.accept?.length || q.answer >= 0) return q;
    const right = q.accept[0];
    const taken = new Set(q.accept.map((a) => a.toLowerCase()));
    const rank = (c: string) => (words(c) === words(right) ? 0 : 100) - common(c, right) * 3 + Math.abs(c.length - right.length);
    const wrong = [...pool]
      .filter((c) => !taken.has(c.toLowerCase()))
      .sort((a, b) => rank(a) - rank(b) || hash(a + right) - hash(b + right))
      .slice(0, 3);
    // Right answer goes first; the quiz shuffles the options when it runs.
    return { ...q, prompt: rewordL(q.prompt), options: [right, ...wrong], answer: 0, accept: undefined };
  });
};
