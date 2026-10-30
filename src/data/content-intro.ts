import { toEt, fromEt, typeEt, typeEtPic, mc, typed } from './helpers';
import { emoji, swatch } from './pictures';
import { tr } from './questions';
import type { Question } from './questions';

export const greetings: Question[] = [
  fromEt('Tere', ['Привет', 'Спасибо', 'Пока', 'Извините'], ['Hello', 'Thank you', 'Bye', 'Sorry'], 0),
  toEt('спасибо', 'thank you', ['palun', 'aitäh', 'tere', 'vabandust'], 1),
  typeEt('пожалуйста', 'please', ['palun']),
  typeEt('извините', 'sorry', ['vabandust']),
  fromEt('Head aega', ['До свидания', 'Доброе утро', 'Спасибо', 'Пожалуйста'], ['Goodbye', 'Good morning', 'Thank you', 'Please'], 0),
  fromEt('Tere hommikust', ['Добрый вечер', 'Доброе утро', 'Спокойной ночи', 'До свидания'], ['Good evening', 'Good morning', 'Good night', 'Goodbye'], 1),
  toEt('Добрый вечер', 'Good evening', ['Tere hommikust', 'Tere õhtust', 'Head ööd', 'Head aega'], 1),
  typeEt('Спокойной ночи', 'Good night', ['head ööd']),
  mc(tr('Mis sinu nimi on? — Выберите ответ.', 'Mis sinu nimi on? — Choose a reply.'), ['Minu nimi on Mari', 'Ma elan Tallinnas', 'Hästi, aitäh', 'Jah'], 0,
    tr('Minu nimi on … — «Меня зовут …».', 'Minu nimi on … — “My name is …”.')),
  mc(tr('Kuidas läheb? — Выберите ответ.', 'Kuidas läheb? — Choose a reply.'), ['Minu nimi on Mari', 'Hästi, aitäh', 'Head aega', 'Tallinnas'], 1,
    tr('Kuidas läheb? — «Как дела?». Hästi, aitäh — «хорошо, спасибо».', 'Kuidas läheb? — “How are you?”. Hästi, aitäh — “fine, thanks”.')),
  mc(tr('Kust sa pärit oled? (Откуда ты?)', 'Kust sa pärit oled? (Where are you from?)'), ['Ma olen pärit Eestist', 'Minu nimi on Mari', 'Kell on kolm', 'Ma joon kohvi'], 0,
    tr('pärit + окончание -st («из»): Eestist — из Эстонии, Soomest — из Финляндии.', 'pärit + the ending -st (“from”): Eestist — from Estonia, Soomest — from Finland.')),
  typeEt('да', 'yes', ['jah']),
];

export const family: Question[] = [
  fromEt('ema', ['мама', 'папа', 'сестра', 'брат'], ['mum', 'dad', 'sister', 'brother'], 0),
  fromEt('isa', ['мама', 'папа', 'дедушка', 'сын'], ['mum', 'dad', 'grandfather', 'son'], 1),
  toEt('сестра', 'sister', ['vend', 'õde', 'ema', 'vanaema'], 1),
  typeEt('брат', 'brother', ['vend']),
  typeEtPic(emoji('👵'), 'бабушка', 'grandmother', ['vanaema']),
  toEt('дедушка', 'grandfather', ['vanaisa', 'vanaema', 'isa', 'onu'], 0),
  fromEt('laps', ['ребёнок', 'мама', 'друг', 'сын'], ['child', 'mum', 'friend', 'son'], 0),
  typeEtPic(emoji('👨‍👩‍👧'), 'семья', 'family', ['pere']),
  typeEt('дочь', 'daughter', ['tütar']),
  mc(tr('Как сказать «моя мама»?', 'How do you say “my mum”?'), ['minu ema', 'sinu ema', 'tema ema', 'meie ema'], 0,
    tr('minu — мой, sinu — твой, tema — его/её, meie — наш.', 'minu — my, sinu — your, tema — his/her, meie — our.')),
  mc(tr('Как сказать «твой брат»?', 'How do you say “your brother”?'), ['minu vend', 'sinu vend', 'tema vend', 'meie vend'], 1,
    tr('sinu vend — твой брат.', 'sinu vend — your brother.')),
  fromEt('Mul on õde', ['У меня есть сестра', 'Я сестра', 'Она моя сестра', 'У меня нет сестры'], ['I have a sister', 'I am a sister', 'She is my sister', 'I have no sister'], 0),
];

export const professions: Question[] = [
  fromEt('õpetaja', ['учитель', 'врач', 'студент', 'повар'], ['teacher', 'doctor', 'student', 'cook'], 0),
  toEt('врач', 'doctor', ['arst', 'õpetaja', 'kokk', 'müüja'], 0),
  typeEt('студент', 'student', ['tudeng', 'üliõpilane']),
  typeEtPic(emoji('👨‍🍳'), 'повар', 'cook', ['kokk']),
  fromEt('müüja', ['продавец', 'водитель', 'учитель', 'врач'], ['shop assistant', 'driver', 'teacher', 'doctor'], 0),
  toEt('водитель', 'driver', ['autojuht', 'arst', 'kokk', 'õpetaja'], 0),
  fromEt('töö', ['работа', 'школа', 'дом', 'время'], ['work', 'school', 'home', 'time'], 0),
  typeEtPic(emoji('🏫'), 'школа', 'school', ['kool']),
  mc(tr('Ma ___ koolis. (Я работаю в школе.)', 'Ma ___ koolis. (I work at a school.)'), ['töötan', 'töötad', 'töötab', 'töötame'], 0,
    tr('töötama: ma töötan, sa töötad, ta töötab, me töötame, te töötate, nad töötavad.', 'töötama: ma töötan, sa töötad, ta töötab, me töötame, te töötate, nad töötavad.')),
  mc(tr('Mis sinu amet on? — Выберите ответ.', 'Mis sinu amet on? — Choose a reply.'), ['Ma olen arst', 'Ma olen Mari', 'Ma elan Tartus', 'Ma olen kolm'], 0,
    tr('amet — профессия. Ma olen arst — «Я врач».', 'amet — profession. Ma olen arst — “I am a doctor”.')),
  fromEt('Ma töötan kontoris', ['Я работаю в офисе', 'Я учусь в офисе', 'Я иду в офис', 'Я ищу работу'], ['I work in an office', 'I study in an office', 'I am going to the office', 'I am looking for work'], 0),
  typed(tr('Ma ___ arst. (Я врач.) Впишите форму глагола olla.', 'Ma ___ arst. (I am a doctor.) Type the form of “olla”.'), ['olen'], 'ma olen.'),
];
