/**
 * Pictures for picture questions: small HTML/SVG snippets built at compile time, so no image files are needed.
 * The quiz inserts them as markup; styles live in Quiz.astro under the `pic` classes.
 */
const esc = (x: string) => x.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Analogue clock showing h:mm. */
export const clock = (h: number, m: number): string => {
  const hand = (deg: number, len: number, w: number) => {
    const a = ((deg - 90) * Math.PI) / 180;
    const x = (50 + len * Math.cos(a)).toFixed(1);
    const y = (50 + len * Math.sin(a)).toFixed(1);
    return `<line x1="50" y1="50" x2="${x}" y2="${y}" stroke-width="${w}" stroke-linecap="round"/>`;
  };
  const ticks = Array.from({ length: 12 }, (_, k) => {
    const a = (k * 30 * Math.PI) / 180;
    const x = (r: number) => (50 + r * Math.sin(a)).toFixed(1);
    const y = (r: number) => (50 - r * Math.cos(a)).toFixed(1);
    const r1 = k % 3 ? 40 : 36; // longer ticks at 12, 3, 6 and 9
    return `<line x1="${x(r1)}" y1="${y(r1)}" x2="${x(43)}" y2="${y(43)}" stroke-width="${k % 3 ? 1.5 : 3}"/>`;
  }).join('');
  return `<svg class="pic pic-clock" viewBox="0 0 100 100" aria-hidden="true"><g stroke="currentColor" fill="none">`
    + `<circle cx="50" cy="50" r="46" stroke-width="3"/>${ticks}`
    + hand(((h % 12) + m / 60) * 30, 22, 5) + hand(m * 6, 34, 3)
    + `</g><circle cx="50" cy="50" r="3.5" fill="currentColor"/></svg>`;
};

/** One or more emoji: objects, weather, transport, things to count. */
export const emoji = (chars: string): string => `<div class="pic pic-emoji" aria-hidden="true">${chars}</div>`;

/** Price tag. */
export const price = (text: string): string => `<div class="pic pic-price" aria-hidden="true"><span>${esc(text)}</span></div>`;

/** Plain colour square. */
export const swatch = (color: string): string => `<div class="pic pic-swatch" style="background:${color}" aria-hidden="true"></div>`;

/** Notice or door sign: the first line is the big one. */
export const sign = (lines: string[], tone: 'plain' | 'red' | 'green' | 'blue' = 'plain'): string =>
  `<div class="pic sign sign-${tone}" aria-hidden="true">${lines.map((l, k) => (k ? `<span>${esc(l)}</span>` : `<b>${esc(l)}</b>`)).join('')}</div>`;

/** Board with a title and rows: timetables, menus, receipts, opening hours, forecasts. */
export const board = (title: string, rows: string[][], head?: string[]): string =>
  `<div class="pic board" aria-hidden="true"><div class="board-title">${esc(title)}</div><table>`
  + (head ? `<tr>${head.map((c) => `<th>${esc(c)}</th>`).join('')}</tr>` : '')
  + rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')
  + `</table></div>`;

/** Tear-off calendar page. */
export const calendar = (weekday: string, day: number, month: string): string =>
  `<div class="pic cal" aria-hidden="true"><div class="cal-top">${esc(weekday)}</div><div class="cal-day">${day}</div><div class="cal-month">${esc(month)}</div></div>`;

/** Family tree, one generation per row of [emoji, name]: every row but the last is a couple, the last row is their children. */
export const familyTree = (rows: [string, string][][]): string =>
  `<div class="pic tree" aria-hidden="true">`
  + rows.map((row, k) => {
    const people = row.map(([face, name]) => `<div class="tree-person"><span>${face}</span>${esc(name)}</div>`);
    return `<div class="tree-row">${people.join(k < rows.length - 1 ? '<i></i>' : '')}</div>`;
  }).join('<div class="tree-line"></div>')
  + `</div>`;
