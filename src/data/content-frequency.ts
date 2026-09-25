import { toEt, fromEt, typeEt, mc } from './helpers';
import { tr } from './questions';
import type { Question } from './questions';

export const frequency: Question[] = [
  fromEt('alati', ['всегда', 'никогда', 'часто', 'иногда'], ['always', 'never', 'often', 'sometimes'], 0),
  toEt('никогда', 'never', ['mitte kunagi', 'alati', 'harva', 'mõnikord'], 0),
  typeEt('редко', 'rarely', ['harva']),
  typeEt('иногда', 'sometimes', ['mõnikord']),
  fromEt('tavaliselt', ['обычно', 'редко', 'всегда', 'иногда'], ['usually', 'rarely', 'always', 'sometimes'], 0),
  fromEt('sageli', ['часто', 'редко', 'никогда', 'сегодня'], ['often', 'rarely', 'never', 'today'], 0),
  toEt('всегда', 'always', ['alati', 'harva', 'mõnikord', 'tavaliselt'], 0),
  typeEt('обычно', 'usually', ['tavaliselt']),
  mc(tr('Что значит «Ma joon hommikul alati kohvi»?', 'What does “Ma joon hommikul alati kohvi” mean?'), ['Утром я всегда пью кофе', 'Утром я никогда не пью кофе', 'Утром я иногда пью кофе', 'Я пью кофе вечером'], 0,
    tr('alati — всегда; hommikul — утром; ma joon kohvi — я пью кофе.', 'alati — always; hommikul — in the morning; ma joon kohvi — I drink coffee.')),
  mc(tr('Что значит «Ma käin harva kinos»?', 'What does “Ma käin harva kinos” mean?'), ['Я редко хожу в кино', 'Я часто хожу в кино', 'Я никогда не хожу в кино', 'Я работаю в кино'], 0,
    tr('harva — редко; kino — кино; kinos — «в кино».', 'harva — rarely; kino — cinema; kinos — “at the cinema”.')),
  typeEt('часто', 'often', ['sageli', 'tihti']),
  mc(tr('Противоположность слова «alati»?', 'Opposite of “alati”?'), ['mitte kunagi', 'tihti', 'tavaliselt', 'mõnikord'], 0,
    tr('Шкала: alati (всегда) → tavaliselt (обычно) → sageli / tihti (часто) → mõnikord (иногда) → harva (редко) → mitte kunagi (никогда).', 'Scale: alati (always) → tavaliselt (usually) → sageli / tihti (often) → mõnikord (sometimes) → harva (rarely) → mitte kunagi (never).')),
];

export const regularity: Question[] = [
  fromEt('iga päev', ['каждый день', 'каждую неделю', 'каждый год', 'сегодня'], ['every day', 'every week', 'every year', 'today'], 0),
  typeEt('каждый день', 'every day', ['iga päev']),
  fromEt('iga nädal', ['каждый день', 'каждую неделю', 'каждый месяц', 'каждый год'], ['every day', 'every week', 'every month', 'every year'], 1),
  toEt('каждое утро', 'every morning', ['igal hommikul', 'igal õhtul', 'iga nädal', 'igal aastal'], 0),
  fromEt('igal õhtul', ['каждое утро', 'каждый вечер', 'каждую ночь', 'каждый день'], ['every morning', 'every evening', 'every night', 'every day'], 1),
  typeEt('каждый год', 'every year', ['igal aastal', 'iga aasta']),
  fromEt('üks kord nädalas', ['раз в неделю', 'каждую неделю в 1 час', 'раз в день', 'раз в год'], ['once a week', 'every week at one', 'once a day', 'once a year'], 0),
  fromEt('kaks korda päevas', ['два раза в день', 'два дня', 'каждые два дня', 'два раза в неделю'], ['twice a day', 'two days', 'every two days', 'twice a week'], 0),
  typeEt('три раза в неделю', 'three times a week', ['kolm korda nädalas']),
  mc(tr('Igal hommikul ma ___ kohvi. (пью)', 'Igal hommikul ma ___ kohvi. (drink)'), ['joon', 'jood', 'joob', 'joome'], 0,
    tr('Igal hommikul — каждое утро; ma joon — я пью.', 'Igal hommikul — every morning; ma joon — I drink.')),
  mc(tr('Что значит «Ma ärkan iga päev kell seitse»?', 'What does “Ma ärkan iga päev kell seitse” mean?'), ['Я просыпаюсь каждый день в семь', 'Я сплю до семи', 'Сегодня я встаю в семь', 'Я работаю семь дней'], 0,
    tr('ärkama — просыпаться; kell seitse — в семь часов.', 'ärkama — to wake up; kell seitse — at seven o’clock.')),
  fromEt('Mitu korda?', ['Сколько раз?', 'Когда?', 'Где?', 'Как?'], ['How many times?', 'When?', 'Where?', 'How?'], 0),
];
