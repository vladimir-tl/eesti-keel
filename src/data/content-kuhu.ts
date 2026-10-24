import { toEt, fromEt, typeEt, mc, typed } from './helpers';
import { tr } from './questions';
import type { Question } from './questions';

const m = (ru: string, en: string, options: string[], answer: number, eru: string, een: string): Question =>
  mc(tr(ru, en), options, answer, tr(eru, een));
const ty = (ru: string, en: string, accept: string[], eru: string, een: string): Question =>
  typed(tr(ru, en), accept, tr(eru, een));

/** Kus? Kust? Kuhu? — the full where / from where / where to set. */
export const kuhu: Question[] = [
  m('Kuhu sa lähed? — Ma lähen ___. (в Таллинн)', 'Kuhu sa lähed? — Ma lähen ___. (to Tallinn)', ['Tallinnas', 'Tallinnast', 'Tallinna', 'Tallinn'], 2,
    'Kuhu? — «куда?». Короткая форма: Tallinn → Tallinna; полная: Tallinnasse.', 'Kuhu? — “where to?”. Short form: Tallinn → Tallinna; long form: Tallinnasse.'),
  m('Ma lähen ___. (в Пярну)', 'Ma lähen ___. (to Pärnu)', ['Pärnus', 'Pärnust', 'Pärnusse', 'Pärnu'], 2,
    'Pärnu → Pärnusse («в Пярну»). Окончание -sse — полная форма «куда?».', 'Pärnu → Pärnusse (“to Pärnu”). The ending -sse is the long “where to?” form.'),
  m('Ma lähen ___. (в аптеку)', 'Ma lähen ___. (to the pharmacy)', ['apteegis', 'apteegist', 'apteeki', 'apteek'], 2,
    'apteek → apteeki («в аптеку»), apteegis («в аптеке»), apteegist («из аптеки»).', 'apteek → apteeki (“to the pharmacy”), apteegis (“in the pharmacy”), apteegist (“from the pharmacy”).'),
  m('Ma lähen ___. (в город)', 'Ma lähen ___. (into town)', ['linn', 'linnas', 'linnast', 'linna'], 3,
    'linn → linna («в город»), linnas («в городе»), linnast («из города»).', 'linn → linna (“to town”), linnas (“in town”), linnast (“from town”).'),
  ty('Ma lähen ___. (в Эстонию) Форма слова Eesti.', 'Ma lähen ___. (to Estonia) Form of Eesti.', ['eestisse'], 'Eesti → Eestisse.', 'Eesti → Eestisse.'),
  ty('Ma lähen ___. (в Финляндию) Форма слова Soome.', 'Ma lähen ___. (to Finland) Form of Soome.', ['soome', 'soomesse'], 'Soome → Soome (у слов на -e короткая форма совпадает с именительным).', 'Soome → Soome (for words in -e the short form equals the nominative).'),
  m('Ma sõidan ___. (в Финляндию)', 'Ma sõidan ___. (to Finland)', ['Soomes', 'Soomest', 'Soome', 'Soomega'], 2,
    'sõitma + kuhu: Soome, Tallinna, Tartusse.', 'sõitma + kuhu: Soome, Tallinna, Tartusse.'),
  m('Ma lähen ___. (в кино)', 'Ma lähen ___. (to the cinema)', ['kinos', 'kinost', 'kinno', 'kino'], 2,
    'kino → kinno («в кино»): краткая форма куда? нередко меняет основу.', 'kino → kinno (“to the cinema”): the short where-to form often changes the stem.'),
  m('Ma lähen ___. (в парк)', 'Ma lähen ___. (to the park)', ['pargis', 'parki', 'pargist', 'park'], 1,
    'park → parki («в парк»), pargis («в парке»).', 'park → parki (“to the park”), pargis (“in the park”).'),
  m('Ma lähen ___. (в кафе)', 'Ma lähen ___. (to the café)', ['kohvikus', 'kohvikust', 'kohvikusse', 'kohvik'], 2,
    'kohvik → kohvikusse; в полной форме -sse.', 'kohvik → kohvikusse; the long form ends in -sse.'),
  m('Kuhu sa sõidad? — Ma sõidan ___. (в Нарву)', 'Kuhu sa sõidad? — Ma sõidan ___. (to Narva)', ['Narvas', 'Narvast', 'Narva', 'Narvaga'], 2,
    'Narva → Narva (краткая форма «куда?» совпадает с именительным), Narvas — «в Нарве».', 'Narva → Narva (the short where-to form equals the nominative), Narvas — “in Narva”.'),
  m('Ma lähen ___. (в библиотеку)', 'Ma lähen ___. (to the library)', ['raamatukogus', 'raamatukogust', 'raamatukokku', 'raamatukogu'], 2,
    'raamatukogu → raamatukokku («в библиотеку»), raamatukogus («в библиотеке»).', 'raamatukogu → raamatukokku (“to the library”), raamatukogus (“in the library”).'),
  fromEt('Ma sõidan Tallinna', ['Я еду в Таллинн', 'Я живу в Таллинне', 'Я из Таллинна', 'Я работаю в Таллинне'], ['I am going to Tallinn', 'I live in Tallinn', 'I am from Tallinn', 'I work in Tallinn'], 0),
  ty('Напишите: «Я иду в театр» (3 слова)', 'Write: “I am going to the theatre” (3 words)', ['ma lähen teatrisse'], 'Ma lähen teatrisse.', 'Ma lähen teatrisse.'),
  ty('Напишите: «Я иду в больницу» (3 слова)', 'Write: “I am going to the hospital” (3 words)', ['ma lähen haiglasse'], 'Ma lähen haiglasse.', 'Ma lähen haiglasse.'),
];
