import { mc, typed } from './helpers';
import { tr } from './questions';
import type { L, Question } from './questions';

/**
 * Helpers for B1 questions. Every text carries its own Estonian (ru, en, et), so nothing needs et.ts.
 * Estonian sentences with a gloss in brackets keep the gloss in ru / en and drop it in et.
 */
export type Text = [ru: string, en: string, et: string];

export const pick = (prompt: Text, options: L[], answer: number, explain: Text): Question =>
  mc(tr(...prompt), options, answer, tr(...explain));

export const write = (prompt: Text, accept: string[], explain: Text): Question =>
  typed(tr(...prompt), accept, tr(...explain));

/** A sentence with a gap and Estonian options. */
export const gap = (sentence: string, ru: string, en: string, options: string[], answer: number, explain: Text): Question =>
  pick([`${sentence} (${ru})`, `${sentence} (${en})`, sentence], options, answer, explain);

/** A typed sentence with a gap. */
export const gapTyped = (sentence: string, ru: string, en: string, accept: string[], explain: Text): Question =>
  write([`${sentence} (${ru})`, `${sentence} (${en})`, sentence], accept, explain);

