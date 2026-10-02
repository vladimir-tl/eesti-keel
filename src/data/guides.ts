import type { Lang } from '../i18n/ui';
import { harnoLinks } from './exam-a2';

/**
 * Articles linked from the footer: what the site does not cover, and guides to the parts of the
 * A2 exam. Exam facts and examples come from the Harno A2 consultation booklet (2026); the resource
 * links were checked in September 2026.
 */

/** A link: an absolute URL, or a site path after the language (e.g. "guide/a2-writing"). */
type Link = [label: string, href: string, note?: string];

interface Section {
  h: string;
  p?: string[];
  table?: { head: string[]; rows: string[][] };
  list?: string[];
  phrases?: [et: string, tr: string][];
  samples?: { label: string; et: string; tr: string }[];
  after?: string[];
  links?: Link[];
}

export interface Guide {
  slug: string;
  nav: string; // short label for the footer
  group: 'exam' | 'help'; // footer column
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: Section[];
}

export const guidesUpdated = '2026-09-26';

const booklet = harnoLinks.booklet;

// Official sources for "who needs A2", checked in September 2026.
const sources = {
  // Government regulation no. 84, current wording (in force from 01.09.2025).
  regulation84: 'https://www.riigiteataja.ee/akt/127072024003?leiaKehtiv',
  ppaEmployment: 'https://www.politsei.ee/en/instructions/residence-permit-for-employment',
  ppaLongTerm: 'https://www.politsei.ee/en/instructions/residence-permit-for-a-permanent-resident/long-term-resident-s-residence-permit',
  harnoB1: 'https://harno.ee/sites/default/files/documents/2021-06/Iseseisev-keelekasutaja.pdf',
};

// Estonian samples are shared by all languages.
const card = {
  et: 'Anna Mets töötab juuksurina. Ta töötab salongis Lokk. Salong asub Tallinnas, Tartu maanteel 15. Anna töötab esmaspäevast reedeni kella kümnest hommikul kuni seitsmeni õhtul. Temaga saab kontakti telefoni teel. Tema telefoninumber on 5123 4567.',
  card: 'Salong Lokk, Anna Mets, juuksur, Tartu mnt 15, Tallinn, E–R 10–19, tel 5123 4567',
};
const invitation = 'Tere, Mari!\nMul on laupäeval sünnipäev ja ma kutsun sind külla. Pidu algab kell kuus õhtul minu kodus, Pärnu maanteel 10, korter 5. Me sööme torti ja mängime lauamänge. Palun anna teada, kas sa saad tulla. Minu telefon on 5555 1234.\nOotan sind!\nOlga';
const weekend = 'Laupäeval käisin hommikul turul ja ostsin köögivilju. Pärast lõunat koristasin kodu. Õhtul kohtusin sõbrannaga kohvikus ja me rääkisime kaua. Pühapäeval sõitsime perega maale vanaema juurde. Seal oli ilus ilm ja me jalutasime metsas. Õhtul olin väsinud, aga rõõmus.';
const familyAnswer = 'Laupäeval käime tavaliselt poes ja koristame kodu. Pühapäeval sõidame vahel maale, sest seal elab minu ema. Suvel käime koos ujumas.';
const dialogue = 'A: Mida sa hommikul sööd?\nB: Tavaliselt söön putru ja joon kohvi. Aga sina?\nA: Mina söön võileiba. Kus sa lõunat sööd?\nB: Tööl, sööklas. Seal on soe toit odav.\nA: Kas sa sööd tihti magustoitu?\nB: Ei, ainult pühapäeviti. Siis küpsetan perega kooki.';

const ru: Guide[] = [
  {
    slug: 'coverage',
    nav: 'Что сайт не проверяет',
    group: 'help',
    title: 'Что тренирует этот сайт и чего в нём пока нет',
    description: 'Тесты на сайте тренируют грамматику, слова и короткие реплики. Заданий на аудирование, письмо и говорение пока нет. Здесь описано, как готовиться к этим частям экзамена A2.',
    h1: 'Что тренирует этот сайт и чего в нём пока нет',
    lead: 'Экзамен A2 состоит из четырёх частей: письмо, аудирование, чтение и говорение. Каждая оценивается из 20 баллов. Тесты на сайте помогают готовиться не ко всем частям.',
    sections: [
      {
        h: 'Части экзамена и задания на сайте',
        table: {
          head: ['Часть экзамена', 'Баллы', 'На сайте'],
          rows: [
            ['Чтение (lugemine)', '20', 'Частично. Есть короткие вопросы с выбором ответа, реплики в ситуациях и пропуски в предложениях. Длинных текстов и объявлений пока мало.'],
            ['Аудирование (kuulamine)', '20', 'Пока нет.'],
            ['Письмо (kirjutamine)', '20', 'Пока нет. На сайте вводятся только отдельные слова.'],
            ['Говорение (rääkimine)', '20', 'Пока нет.'],
            ['Грамматика и слова', '—', 'Основная часть сайта: падежи, глаголы, слова по 13 темам A2.'],
          ],
        },
        after: ['Отдельной части по грамматике на экзамене нет. Грамматика и слова нужны во всех четырёх частях, поэтому тесты помогают, но не заменяют подготовку к самому экзамену.'],
      },
      {
        h: 'О результатах тестов',
        list: [
          'Если вы хорошо проходите тесты A2, значит, грамматику и слова этого уровня вы знаете.',
          'Понимание на слух, письмо и разговор тесты не проверяют.',
          'Экзамен сдан, если набрано 48 баллов из 80 и ни одна часть не оценена в 0 баллов. Поэтому готовиться нужно ко всем четырём частям.',
        ],
      },
      {
        h: 'Чего на сайте пока нет',
        list: [
          'Заданий на аудирование.',
          'Проверки письменных текстов.',
          'Заданий на говорение и диалог.',
          'Пробного экзамена в формате Harno с ограничением по времени.',
          'Уровня B1 (он в работе).',
        ],
      },
      {
        h: 'Как готовиться к остальным частям',
        list: [
          'Письмо. Посмотрите, какие бывают задания, и пишите по 2–3 коротких текста в неделю. Хорошо, если их кто-нибудь проверит.',
          'Говорение. Отвечайте вслух на вопросы по темам экзамена и записывайте себя на телефон.',
          'Аудирование. Слушайте эстонскую речь каждый день и обращайте внимание на числа, время и дни недели.',
          'В буклете Harno есть примеры заданий всех четырёх частей с ответами.',
        ],
        links: [
          ['Письмо на экзамене A2', 'guide/a2-writing'],
          ['Говорение на экзамене A2', 'guide/a2-speaking'],
          ['Аудирование и чтение на экзамене A2', 'guide/a2-listening-reading'],
          ['Бесплатные курсы и материалы', 'guide/resources'],
          ['Буклет Harno с примерами заданий A2 (PDF)', booklet],
        ],
      },
      {
        h: 'Планы',
        p: ['Позже мы планируем добавить аудиозадания, задания на письмо, разговорные ситуации и уровень B1.'],
      },
    ],
  },
  {
    slug: 'who-needs-a2',
    nav: 'Кому нужен A2',
    group: 'exam',
    title: 'Кому нужен экзамен A2 по эстонскому языку',
    description: 'Когда уровень A2 требуется официально: некоторые профессии по постановлению правительства № 84 и продление вида на жительство для работы. Чем A2 отличается от B1 и когда нужен B1.',
    h1: 'Кому нужен экзамен A2',
    lead: 'Уровень A2 официально требуется в двух случаях: для некоторых профессий и для продления вида на жительство для работы. Для гражданства и вида на жительство долгосрочного резидента нужен уровень B1. Ниже подробности со ссылками на официальные источники.',
    sections: [
      {
        h: 'Что такое уровень A2',
        p: [
          'Уровни владения эстонским языком соответствуют общеевропейской шкале (CEFR). Экзамены Harno проводятся на четырёх уровнях: A2, B1, B2 и C1.',
          'По этой шкале уровни A1 и A2 относятся к начинающему пользователю языка, а B1 и B2 к самостоятельному. Справочники Harno так и называются: «Algaja keelekasutaja» для A2 и «Iseseisev keelekasutaja» для B1 и B2. A2 завершает начальный уровень, следующая ступень после него B1.',
          'На уровне A2 человек понимает простые фразы на знакомые темы (о себе и семье, покупки, дом, работа), справляется с несложными повседневными ситуациями и может коротко рассказать о себе, семье и условиях жизни.',
        ],
      },
      {
        h: 'Работа',
        p: ['Требования к знанию эстонского на работе установлены постановлением правительства № 84 от 20.06.2011 «Ametniku, töötaja ning füüsilisest isikust ettevõtja eesti keele oskuse ja kasutamise nõuded». Уровень A2 в нём нужен:'],
        list: [
          'работникам государственных учреждений, которые выполняют техническую или вспомогательную работу: водителям, кочегарам, операторам копировальной техники и другим похожим работникам;',
          'машинистам локомотивов и поездов;',
          'сторожам и вахтёрам, контролёрам билетов, гардеробщикам, швейцарам, курьерам.',
        ],
        after: [
          'Это минимальный уровень. Работодатель может потребовать более высокий, но не выше C1.',
          'Для многих профессий в том же постановлении нужен уже B1. Например, для продавцов и работников сферы обслуживания, которые регулярно обслуживают клиентов, водителей общественного транспорта, работников по уходу.',
          'По данным Harno, экзамен не нужно сдавать тем, кто окончил основную школу, гимназию или вуз, где не менее 60% обучения шло на эстонском языке.',
        ],
      },
      {
        h: 'Вид на жительство для работы',
        p: [
          'По данным Департамента полиции и погранохраны (PPA), с 15 июля 2018 года действует требование знать эстонский на уровне A2. Оно касается тех, кто прожил в Эстонии 5 лет по временному виду на жительство для работы, выданному начиная с 16.07.2018, и подаёт заявление на продление или на новый вид на жительство для работы.',
          'Подробные условия уточняйте на сайте PPA или у миграционного консультанта.',
        ],
      },
      {
        h: 'Когда нужен B1',
        list: [
          'Гражданство Эстонии. Нужен экзамен на уровень не ниже B1.',
          'Вид на жительство долгосрочного резидента. Нужно знание эстонского не ниже B1 и выполненное требование интеграции. По данным PPA, языковое требование не касается людей младше 15 лет, старше 65 лет и с ограниченной дееспособностью, а экзамен не нужен тем, кто получил основное, среднее или высшее образование на эстонском.',
          'Многие профессии по постановлению № 84, особенно работа с клиентами.',
        ],
        after: ['Если в итоге вам нужен B1, подготовка к A2 не будет лишней: слова и грамматика A2 входят в основу уровня B1.'],
      },
      {
        h: 'Как сдать экзамен',
        p: ['Экзамен бесплатный, записаться можно в системе EIS. Формат экзамена, баллы и порядок регистрации описаны на отдельной странице.'],
        links: [
          ['Как устроен экзамен A2', 'exam-a2'],
          ['EIS, регистрация на экзамен', harnoLinks.eis],
        ],
      },
      {
        h: 'Источники',
        links: [
          ['Riigi Teataja: постановление правительства № 84, действующая редакция', sources.regulation84],
          ['PPA: вид на жительство для работы', sources.ppaEmployment],
          ['PPA: вид на жительство долгосрочного резидента', sources.ppaLongTerm],
          ['Harno: экзамены на уровень владения эстонским языком', harnoLinks.exams],
          ['Harno: справочник «Iseseisev keelekasutaja. B1- ja B2-taseme eesti keele oskus» (PDF)', sources.harnoB1],
        ],
      },
    ],
  },
  {
    slug: 'a2-writing',
    nav: 'Письмо',
    group: 'exam',
    title: 'Письменная часть экзамена A2 по эстонскому языку',
    description: 'Какие задания бывают в письменной части экзамена A2: текст по визитке и короткое сообщение или описание. Примеры текстов с переводом и полезные фразы.',
    h1: 'Письмо на экзамене A2',
    lead: 'Письменная часть идёт первой и длится 30 минут. В ней два задания, всего 20 баллов. Описание заданий взято из буклета Harno, примеры текстов составлены нами.',
    sections: [
      {
        h: 'Первое задание',
        p: ['Нужно написать текст по визитке человека или учреждения, не меньше 25 слов. В задании есть вопросы. Для визитки человека они такие:'],
        phrases: [
          ['Kellena ta töötab?', 'Кем он(а) работает?'],
          ['Kus ta töötab?', 'Где он(а) работает?'],
          ['Millal ta töötab?', 'Когда он(а) работает?'],
          ['Kuidas saab temaga kontakti?', 'Как с ним (с ней) связаться?'],
        ],
        after: [
          'Если на визитке учреждение, вопросы другие: Mis asutus see on? Kus see asub? Mida seal teha saab? Kuidas saab kontakti?',
          'На визитках часто встречаются сокращения. E, T, K, N, R, L, P обозначают дни недели с понедельника по воскресенье. mnt значит maantee, tn значит tänav, pst значит puiestee.',
        ],
        samples: [
          {
            label: `Пример. На визитке: ${card.card}`,
            et: card.et,
            tr: 'Анна Метс работает парикмахером. Она работает в салоне Lokk. Салон находится в Таллинне, на Тартуском шоссе, 15. Анна работает с понедельника по пятницу с десяти утра до семи вечера. Связаться с ней можно по телефону. Её номер 5123 4567.',
          },
        ],
      },
      {
        h: 'Второе задание',
        p: ['Текст должен быть не меньше 30 слов. Это может быть записка, сообщение или приглашение. Например, в буклете вы нашли дома кошелёк друга и пишете ему, где он был, как выглядит и как его забрать. Или это описание на заданную тему, например «Minu nädalavahetus» (мои выходные). В задании тоже есть вопросы, и ответить нужно на каждый.'],
        samples: [
          {
            label: 'Пример приглашения',
            et: invitation,
            tr: 'Привет, Мари!\nВ субботу у меня день рождения, и я приглашаю тебя в гости. Праздник начнётся в шесть вечера у меня дома, Пярнуское шоссе, 10, квартира 5. Будем есть торт и играть в настольные игры. Дай, пожалуйста, знать, сможешь ли ты прийти. Мой телефон 5555 1234.\nЖду тебя!\nОльга',
          },
          {
            label: 'Пример описания на тему «Minu nädalavahetus»',
            et: weekend,
            tr: 'В субботу утром я сходила на рынок и купила овощи. После обеда убрала дом. Вечером встретилась с подругой в кафе, и мы долго разговаривали. В воскресенье мы с семьёй поехали в деревню к бабушке. Там была хорошая погода, и мы гуляли в лесу. Вечером я устала, но была довольна.',
          },
        ],
      },
      {
        h: 'Полезные фразы',
        phrases: [
          ['Tere, Mari! / Kallis Mari!', 'Обращение к знакомому'],
          ['Lugupeetud härra Tamm!', 'Официальное обращение'],
          ['Kirjutan sulle, sest …', 'Пишу тебе, потому что …'],
          ['Kas sa saad … tulla?', 'Сможешь прийти …?'],
          ['Palun helista mulle. / Palun anna teada.', 'Позвони мне, пожалуйста. / Дай знать.'],
          ['Kõigepealt … Siis … Pärast seda …', 'Сначала … Потом … После этого …'],
          ['…, sest … / …, aga …', '…, потому что … / …, но …'],
          ['Tervitades / Lugupidamisega', 'С приветом / С уважением'],
          ['Kohtumiseni!', 'До встречи!'],
        ],
      },
      {
        h: 'Советы',
        list: [
          'Ответьте на все вопросы задания.',
          'Следите за количеством слов: 25 и 30 слов — это минимум. Пишите предложениями, а не списком.',
          'Используйте простые предложения, в которых вы уверены.',
          'Оставьте несколько минут на проверку: окончания глаголов, падежи, выражения времени.',
          'Пишите разборчиво, чёрной или синей ручкой.',
          'Для тренировки пишите по 2–3 текста в неделю и просите кого-нибудь их проверить.',
        ],
        links: [
          ['Тема «Письма и сообщения»', 'topics/letters'],
          ['Буклет Harno с примерами заданий (PDF)', booklet],
        ],
      },
    ],
  },
  {
    slug: 'a2-speaking',
    nav: 'Говорение',
    group: 'exam',
    title: 'Устная часть экзамена A2 по эстонскому языку',
    description: 'Как проходит устная часть экзамена A2: рассказ по картинке, вопросы экзаменатора и разговор с партнёром. Примеры вопросов и фраз с переводом.',
    h1: 'Говорение на экзамене A2',
    lead: 'Устная часть длится около 12 минут. Её сдают в паре с другим участником в тот же день, что и письменную. В ней два задания, всего 20 баллов. Ответы записываются.',
    sections: [
      {
        h: 'Первое задание',
        p: ['Около 6–7 минут. Задание связано с темой из повседневной жизни, в буклете Harno это «Pere ja sugulased» (семья и родственники). Сначала нужно рассказать, что на картинке, потом ответить на вопросы экзаменатора. Фразы для описания картинки:'],
        phrases: [
          ['Pildil on …', 'На картинке …'],
          ['Pildil ma näen …', 'На картинке я вижу …'],
          ['Vasakul / paremal / keskel on …', 'Слева / справа / в центре …'],
          ['Nad istuvad / söövad / räägivad.', 'Они сидят / едят / разговаривают.'],
          ['Minu arvates on see …', 'По-моему, это …'],
          ['Tundub, et neil on hea tuju.', 'Кажется, у них хорошее настроение.'],
        ],
      },
      {
        h: 'Примеры вопросов экзаменатора',
        p: ['Вопросы взяты из буклета Harno.'],
        phrases: [
          ['Kui suur on teie pere?', 'Большая ли у вас семья?'],
          ['Kes on teie pereliikmed?', 'Кто входит в вашу семью?'],
          ['Mida te koos perega nädalavahetusel teete?', 'Что вы делаете с семьёй на выходных?'],
          ['Kus teie sugulased elavad?', 'Где живут ваши родственники?'],
          ['Kui sageli te oma sugulastega kohtute?', 'Как часто вы встречаетесь с родственниками?'],
          ['Mida sugulased teile tavaliselt kingivad?', 'Что родственники обычно вам дарят?'],
        ],
        samples: [
          {
            label: 'Пример ответа на вопрос «Mida te koos perega nädalavahetusel teete?»',
            et: familyAnswer,
            tr: 'В субботу мы обычно ходим в магазин и убираем дом. В воскресенье иногда ездим в деревню, потому что там живёт моя мама. Летом вместе ходим купаться.',
          },
        ],
      },
      {
        h: 'Второе задание',
        p: ['Около 5–6 минут. Участники получают карточку с темой и картинками (ideekaart) и расспрашивают друг друга. В буклете два примера. «Söök»: что и когда ест собеседник. «Igapäevane elu»: что он делает в магазине, в сервисе, в центре здоровья и как часто. Нужно и задавать вопросы, и отвечать. Вопросительные слова:'],
        phrases: [
          ['Mida sa … ?', 'Что ты …?'],
          ['Millal? / Mis kell?', 'Когда? / Во сколько?'],
          ['Kui tihti? / Kui sageli?', 'Как часто?'],
          ['Kus? Kellega? Miks?', 'Где? С кем? Почему?'],
          ['Kas sa … ?', 'Ты …? (вопрос «да или нет»)'],
          ['Aga sina?', 'А ты?'],
        ],
        samples: [
          {
            label: 'Пример диалога по карточке «Söök»',
            et: dialogue,
            tr: 'A: Что ты ешь утром?\nB: Обычно ем кашу и пью кофе. А ты?\nA: Я ем бутерброд. Где ты обедаешь?\nB: На работе, в столовой. Там горячая еда недорогая.\nA: Ты часто ешь десерт?\nB: Нет, только по воскресеньям. Тогда мы с семьёй печём пирог.',
          },
        ],
      },
      {
        h: 'Если вы не поняли вопрос или не знаете слово',
        phrases: [
          ['Vabandust, ma ei saanud aru.', 'Извините, я не понял(а).'],
          ['Kas te saate korrata?', 'Можете повторить?'],
          ['Palun rääkige aeglasemalt.', 'Говорите, пожалуйста, медленнее.'],
          ['Mida see sõna tähendab?', 'Что значит это слово?'],
          ['Ma ei mäleta, kuidas see eesti keeles on.', 'Не помню, как это по-эстонски.'],
          ['Hetkeke, ma mõtlen.', 'Секунду, я подумаю.'],
        ],
      },
      {
        h: 'Советы',
        list: [
          'Отвечайте не одним словом, а двумя-тремя предложениями.',
          'Не стоит учить монолог наизусть: вопросы могут не совпасть с подготовленным текстом.',
          'Во втором задании спросите партнёра обо всех пунктах карточки и отвечайте на его вопросы.',
          'Тренируйтесь вслух и записывайте себя на телефон.',
          'Если ошиблись, не останавливайтесь и говорите дальше.',
        ],
        links: [
          ['Темы A2 на сайте', 'topics#a2'],
          ['Буклет Harno с картинками и карточками (PDF)', booklet],
        ],
      },
    ],
  },
  {
    slug: 'a2-listening-reading',
    nav: 'Аудирование и чтение',
    group: 'exam',
    title: 'Аудирование и чтение на экзамене A2 по эстонскому языку',
    description: 'Какие задания бывают в аудировании и чтении на экзамене A2 и на что обратить внимание при подготовке.',
    h1: 'Аудирование и чтение на экзамене A2',
    lead: 'Аудирование длится 30 минут, чтение 50 минут. Каждая часть оценивается из 20 баллов. Во всех заданиях нужно выбрать ответ или написать слово или число.',
    sections: [
      {
        h: 'Задания по аудированию',
        list: [
          'Выбрать картинку, число или слово. Например, вопрос «Mis kell väljub Tallinna–Tartu rong?» и варианты 20.05, 20.15 и 20.25.',
          'Определить, верно или неверно утверждение (õige / vale).',
          'Написать слово или число, например ответ на вопрос «Mitu tundi reis kestab?».',
          'Соотнести дни недели и занятия. Два варианта остаются лишними.',
        ],
        after: ['В ответах к буклету в задании с коротким ответом засчитываются и цифра, и слово (4 или neli), а также разные формы слова (pannkook, pannkooke).'],
      },
      {
        h: 'На что обратить внимание',
        list: [
          'Перед прослушиванием прочитайте вопросы.',
          'Повторите, как говорят время: pool viis (4:30), veerand kuus (5:15), kolmveerand seitse (6:45).',
          'Слушайте запись до конца. Слова ei, mitte, aga, hoopis могут изменить смысл.',
          'В задании «верно или неверно» слово из утверждения может прозвучать в записи, хотя смысл будет другим.',
          'Полезно каждый день слушать эстонскую речь: радио, передачи ERR, видео Keeleklikk.',
        ],
      },
      {
        h: 'Задания по чтению',
        list: [
          'Выбрать подходящий ответ на реплику. Например, на «Kuidas sul läheb?» подходит «Pole viga.»',
          'Определить, к какому из трёх текстов относится утверждение.',
          'Соотнести надписи и объявления с объяснениями. Например, «Libe põrand!» значит «Siin peab olema väga ettevaatlik.»',
          'Прочитать текст и ответить на вопросы, выбрав A, B или C.',
          'Заполнить пропуски в письме, выбрав одно слово из трёх.',
        ],
      },
      {
        h: 'Частые реплики',
        phrases: [
          ['Pole viga.', 'Неплохо, ничего.'],
          ['Palju õnne!', 'Поздравляю!'],
          ['Jõudu!', 'Сил! Удачи!'],
          ['Anna andeks! / Vabandust!', 'Прости! / Извините!'],
          ['Olgu (nii).', 'Ладно, хорошо.'],
          ['Ole terve!', 'Будь здоров!'],
          ['Pole vaja.', 'Не нужно.'],
          ['Muidugi!', 'Конечно!'],
          ['Head aega! / Nägemiseni!', 'До свидания!'],
        ],
      },
      {
        h: 'Надписи и таблички',
        phrases: [
          ['Avatud / Suletud', 'Открыто / Закрыто'],
          ['Tõmba / Lükka', 'На себя / От себя'],
          ['Sissepääs / Väljapääs', 'Вход / Выход'],
          ['Tasuta', 'Бесплатно'],
          ['Keelatud', 'Запрещено'],
          ['Libe!', 'Скользко!'],
          ['Märg värv', 'Осторожно, окрашено'],
          ['Mitte suitsetada', 'Не курить'],
          ['Hoia pilet alles!', 'Сохраняйте билет!'],
        ],
      },
      {
        h: 'Советы по чтению',
        list: [
          'В буклете 30 вопросов на 50 минут, это примерно полторы минуты на вопрос. Если вопрос сложный, вернитесь к нему позже.',
          'В заданиях с пропусками смотрите на соседние слова. Например, в «Eile ___ ootamatult haigeks» подходит jäin, потому что говорят haigeks jääma.',
          'Если вариантов больше, чем нужно, сначала выберите те, в которых уверены.',
          'Буквы ответов пишите печатными заглавными: A, B, C.',
        ],
        links: [
          ['Итоговый тест A2', 'test-a2'],
          ['Где слушать эстонскую речь', 'guide/resources'],
          ['Буклет Harno с примерами и ответами (PDF)', booklet],
        ],
      },
    ],
  },
  {
    slug: 'resources',
    nav: 'Бесплатные ресурсы',
    group: 'help',
    title: 'Бесплатные ресурсы для изучения эстонского языка',
    description: 'Бесплатные курсы и материалы по эстонскому языку уровней A1–B1: Keeleklikk, Keeletee, Settle in Estonia, Eesti keele maja, Sõnaveeb, ERR и буклет Harno.',
    h1: 'Бесплатные ресурсы для изучения эстонского',
    lead: 'Здесь собраны бесплатные курсы и материалы. Они помогут тренировать то, чего нет на этом сайте: аудирование, письмо и говорение.',
    sections: [
      {
        h: 'Онлайн-курсы',
        links: [
          ['Keeleklikk', 'https://www.keeleklikk.ee/', 'Онлайн-курс для начинающих до уровня A2. Анимации, видео по грамматике, около 1200 упражнений. Инструкции на русском, английском и украинском.'],
          ['Keeletee', 'https://www.keeletee.ee/', 'Продолжение Keeleklikk, от A2 до B1. Интервью, видео и тесты. Инструкции на русском и английском.'],
        ],
      },
      {
        h: 'Курсы и консультации',
        links: [
          ['Settle in Estonia', 'https://settleinestonia.ee/', 'Программа адаптации. Бесплатные курсы A1, A2 и B1 для тех, кто живёт в Эстонии меньше пяти лет. Условия участия описаны на сайте.'],
          ['Eesti keele maja', 'https://www.integratsioon.ee/eestikeelemaja', 'Дом эстонского языка при Integratsiooni Sihtasutus. Бесплатные консультации в Таллинне и Нарве, курсы и мероприятия.'],
        ],
      },
      {
        h: 'Словарь',
        links: [
          ['Sõnaveeb', 'https://sonaveeb.ee/', 'Словарь Института эстонского языка (EKI). Значения, примеры и формы слов, удобно проверять падежи.'],
        ],
      },
      {
        h: 'Радио и телевидение',
        links: [
          ['ERR Jupiter', 'https://jupiter.err.ee/', 'Передачи, фильмы и радио Эстонской телерадиокомпании. Для начала подойдут новости и детские передачи.'],
        ],
      },
      {
        h: 'Материалы Harno',
        links: [
          ['Экзамены на знание эстонского языка', harnoLinks.exams],
          ['Буклет с примерами заданий A2 и ответами (PDF)', booklet],
          ['EIS, регистрация на экзамен', harnoLinks.eis],
        ],
      },
      {
        h: 'На этом сайте',
        links: [
          ['Как устроен экзамен A2', 'exam-a2'],
          ['Что тренирует сайт и чего в нём пока нет', 'guide/coverage'],
          ['Темы A2', 'topics#a2'],
          ['Итоговый тест A2', 'test-a2'],
        ],
      },
    ],
  },
];

const en: Guide[] = [
  {
    slug: 'coverage',
    nav: 'What the site does not cover',
    group: 'help',
    title: 'What this site covers and what it does not have yet',
    description: 'The quizzes here train grammar, vocabulary and short replies. There are no listening, writing or speaking tasks yet. This page explains how to prepare for those parts of the A2 exam.',
    h1: 'What this site covers and what it does not have yet',
    lead: 'The A2 exam has four parts: writing, listening, reading and speaking. Each is scored out of 20 points. The quizzes on this site help with some of these parts, not all of them.',
    sections: [
      {
        h: 'Exam parts and tasks on the site',
        table: {
          head: ['Exam part', 'Points', 'On this site'],
          rows: [
            ['Reading (lugemine)', '20', 'Partly. There are short multiple-choice questions, replies in situations and gaps in sentences. Few long texts or notices so far.'],
            ['Listening (kuulamine)', '20', 'Not yet.'],
            ['Writing (kirjutamine)', '20', 'Not yet. You only type single words on the site.'],
            ['Speaking (rääkimine)', '20', 'Not yet.'],
            ['Grammar and vocabulary', '—', 'The main part of the site: cases, verbs, words for the 13 A2 topics.'],
          ],
        },
        after: ['The exam has no separate grammar part. Grammar and vocabulary are needed in all four parts, so the quizzes help, but they do not replace preparing for the exam itself.'],
      },
      {
        h: 'About quiz results',
        list: [
          'If you do well on the A2 quizzes, you know the grammar and vocabulary of this level.',
          'The quizzes do not test listening, writing or speaking.',
          'You pass the exam with 48 of 80 points, provided no part scores 0. So you need to prepare for all four parts.',
        ],
      },
      {
        h: 'Not on the site yet',
        list: [
          'Listening tasks.',
          'Checking of written texts.',
          'Speaking and dialogue tasks.',
          'A timed mock exam in the Harno format.',
          'Level B1 (in progress).',
        ],
      },
      {
        h: 'How to prepare for the other parts',
        list: [
          'Writing. Look at the task types and write 2–3 short texts a week. It helps if someone checks them.',
          'Speaking. Answer questions on the exam topics out loud and record yourself on your phone.',
          'Listening. Listen to Estonian every day and pay attention to numbers, times and days of the week.',
          'The Harno booklet has sample tasks for all four parts, with answers.',
        ],
        links: [
          ['Writing in the A2 exam', 'guide/a2-writing'],
          ['Speaking in the A2 exam', 'guide/a2-speaking'],
          ['Listening and reading in the A2 exam', 'guide/a2-listening-reading'],
          ['Free courses and materials', 'guide/resources'],
          ['Harno booklet with A2 sample tasks (PDF)', booklet],
        ],
      },
      {
        h: 'Plans',
        p: ['Later we plan to add listening tasks, writing tasks, speaking situations and level B1.'],
      },
    ],
  },
  {
    slug: 'who-needs-a2',
    nav: 'Who needs A2',
    group: 'exam',
    title: 'Who needs the Estonian A2 exam',
    description: 'When A2 is officially required: certain jobs under Government Regulation No. 84 and extending a residence permit for employment. How A2 differs from B1 and when B1 is required.',
    h1: 'Who needs the A2 exam',
    lead: 'Level A2 is officially required in two cases: for certain jobs and for extending a residence permit for employment. Citizenship and a long-term resident’s residence permit require level B1. Details and links to official sources are below.',
    sections: [
      {
        h: 'What level A2 means',
        p: [
          'Estonian proficiency levels follow the Common European Framework of Reference (CEFR). Harno holds exams at four levels: A2, B1, B2 and C1.',
          'On this scale, levels A1 and A2 belong to the basic user and B1 and B2 to the independent user. The Harno handbooks are named accordingly: “Algaja keelekasutaja” for A2 and “Iseseisev keelekasutaja” for B1 and B2. A2 completes the basic stage; the next step is B1.',
          'At A2, a person understands simple phrases on familiar topics (personal and family information, shopping, home, work), manages simple everyday situations and can briefly describe themselves, their family and living conditions.',
        ],
      },
      {
        h: 'Work',
        p: ['Language requirements at work are set by Government Regulation No. 84 of 20.06.2011, “Ametniku, töötaja ning füüsilisest isikust ettevõtja eesti keele oskuse ja kasutamise nõuded”. It requires A2 from:'],
        list: [
          'employees of government agencies doing technical or support work, such as drivers, stokers, copying machine operators and similar workers;',
          'locomotive and train drivers;',
          'watchmen, ticket inspectors, cloakroom attendants, doorkeepers and couriers.',
        ],
        after: [
          'This is the minimum. An employer may require a higher level, but not higher than C1.',
          'The same regulation requires B1 for many jobs, for example service and sales staff who serve customers regularly, public transport drivers and personal care workers.',
          'According to Harno, you do not need to take the exam if you graduated from a basic school, upper secondary school or university where at least 60% of the studies were in Estonian.',
        ],
      },
      {
        h: 'Residence permit for employment',
        p: [
          'According to the Police and Border Guard Board (PPA), an Estonian A2 requirement has applied since 15 July 2018. It concerns people who have lived in Estonia for 5 years on a temporary residence permit for employment issued on or after 16.07.2018 and who apply for an extension or a new residence permit for employment.',
          'Check the details on the PPA website or with a migration adviser.',
        ],
      },
      {
        h: 'When B1 is required',
        list: [
          'Estonian citizenship. You need to pass an exam at level B1 or higher.',
          'Long-term resident’s residence permit. You need Estonian at level B1 or higher and to have met the integration requirement. According to the PPA, the language requirement does not apply to people under 15, over 65 or with limited active legal capacity, and those who received basic, secondary or higher education in Estonian do not need to take the exam.',
          'Many jobs under Regulation No. 84, especially work with customers.',
        ],
        after: ['If you eventually need B1, preparing for A2 is still useful: A2 vocabulary and grammar are the basis of B1.'],
      },
      {
        h: 'Taking the exam',
        p: ['The exam is free, and you register in the EIS system. The format, points and registration are described on a separate page.'],
        links: [
          ['How the A2 exam works', 'exam-a2'],
          ['EIS, exam registration', harnoLinks.eis],
        ],
      },
      {
        h: 'Sources',
        links: [
          ['Riigi Teataja: Government Regulation No. 84, current wording', sources.regulation84],
          ['PPA: residence permit for employment', sources.ppaEmployment],
          ['PPA: long-term resident’s residence permit', sources.ppaLongTerm],
          ['Harno: Estonian language proficiency exams', harnoLinks.exams],
          ['Harno: handbook “Iseseisev keelekasutaja. B1- ja B2-taseme eesti keele oskus” (PDF)', sources.harnoB1],
        ],
      },
    ],
  },
  {
    slug: 'a2-writing',
    nav: 'Writing',
    group: 'exam',
    title: 'The writing part of the Estonian A2 exam',
    description: 'The tasks in the writing part of the A2 exam: a text based on a business card and a short message or description. Sample texts with translations and useful phrases.',
    h1: 'Writing in the A2 exam',
    lead: 'The writing part comes first and lasts 30 minutes. It has two tasks worth 20 points in total. The task descriptions are from the Harno booklet; the sample texts are our own.',
    sections: [
      {
        h: 'Task 1',
        p: ['You write a text based on the business card of a person or an institution, at least 25 words. The task includes questions. For a person’s card they are:'],
        phrases: [
          ['Kellena ta töötab?', 'What does he or she work as?'],
          ['Kus ta töötab?', 'Where does he or she work?'],
          ['Millal ta töötab?', 'When does he or she work?'],
          ['Kuidas saab temaga kontakti?', 'How can you contact him or her?'],
        ],
        after: [
          'If the card belongs to an institution, the questions are different: Mis asutus see on? Kus see asub? Mida seal teha saab? Kuidas saab kontakti?',
          'Cards often use abbreviations. E, T, K, N, R, L, P are the days from Monday to Sunday. mnt means maantee (road), tn means tänav (street), pst means puiestee (avenue).',
        ],
        samples: [
          {
            label: `Example. The card says: ${card.card}`,
            et: card.et,
            tr: 'Anna Mets works as a hairdresser. She works at the Lokk salon. The salon is in Tallinn, at Tartu maantee 15. Anna works from Monday to Friday from ten in the morning to seven in the evening. You can contact her by phone. Her number is 5123 4567.',
          },
        ],
      },
      {
        h: 'Task 2',
        p: ['The text must be at least 30 words. It can be a note, a message or an invitation. In the booklet, for example, you found a friend’s wallet at your home and write to them about where it was, what it looks like and how to get it back. Or it is a description on a given topic, such as “Minu nädalavahetus” (my weekend). This task also has questions, and you need to answer each one.'],
        samples: [
          {
            label: 'Sample invitation',
            et: invitation,
            tr: 'Hi Mari!\nIt’s my birthday on Saturday and I’m inviting you over. The party starts at six in the evening at my place, Pärnu maantee 10, flat 5. We’ll eat cake and play board games. Please let me know if you can come. My phone is 5555 1234.\nSee you!\nOlga',
          },
          {
            label: 'Sample description on “Minu nädalavahetus”',
            et: weekend,
            tr: 'On Saturday morning I went to the market and bought vegetables. After lunch I cleaned the house. In the evening I met a friend at a café and we talked for a long time. On Sunday my family and I drove to the countryside to see my grandmother. The weather was nice there and we walked in the forest. In the evening I was tired but happy.',
          },
        ],
      },
      {
        h: 'Useful phrases',
        phrases: [
          ['Tere, Mari! / Kallis Mari!', 'Greeting someone you know'],
          ['Lugupeetud härra Tamm!', 'Formal greeting'],
          ['Kirjutan sulle, sest …', 'I’m writing to you because …'],
          ['Kas sa saad … tulla?', 'Can you come …?'],
          ['Palun helista mulle. / Palun anna teada.', 'Please call me. / Please let me know.'],
          ['Kõigepealt … Siis … Pärast seda …', 'First … Then … After that …'],
          ['…, sest … / …, aga …', '…, because … / …, but …'],
          ['Tervitades / Lugupidamisega', 'Regards / Yours sincerely'],
          ['Kohtumiseni!', 'See you!'],
        ],
      },
      {
        h: 'Tips',
        list: [
          'Answer all the questions in the task.',
          'Watch the word count: 25 and 30 words are the minimum. Write sentences, not a list.',
          'Use simple sentences you are sure of.',
          'Leave a few minutes to check verb endings, cases and time expressions.',
          'Write legibly, with a black or blue pen.',
          'To practise, write 2–3 texts a week and ask someone to check them.',
        ],
        links: [
          ['The “Letters and messages” topic', 'topics/letters'],
          ['Harno booklet with sample tasks (PDF)', booklet],
        ],
      },
    ],
  },
  {
    slug: 'a2-speaking',
    nav: 'Speaking',
    group: 'exam',
    title: 'The speaking part of the Estonian A2 exam',
    description: 'How the speaking part of the A2 exam works: talking about a picture, the examiner’s questions and a conversation with a partner. Sample questions and phrases with translations.',
    h1: 'Speaking in the A2 exam',
    lead: 'The speaking part takes about 12 minutes. You do it in a pair with another candidate, on the same day as the written part. It has two tasks worth 20 points in total. Your answers are recorded.',
    sections: [
      {
        h: 'Task 1',
        p: ['About 6–7 minutes. The task is based on an everyday topic; in the Harno booklet it is “Pere ja sugulased” (family and relatives). First you say what is in a picture, then you answer the examiner’s questions. Phrases for describing a picture:'],
        phrases: [
          ['Pildil on …', 'In the picture there is …'],
          ['Pildil ma näen …', 'In the picture I can see …'],
          ['Vasakul / paremal / keskel on …', 'On the left / on the right / in the middle there is …'],
          ['Nad istuvad / söövad / räägivad.', 'They are sitting / eating / talking.'],
          ['Minu arvates on see …', 'I think this is …'],
          ['Tundub, et neil on hea tuju.', 'They seem to be in a good mood.'],
        ],
      },
      {
        h: 'Sample examiner questions',
        p: ['The questions are from the Harno booklet.'],
        phrases: [
          ['Kui suur on teie pere?', 'How big is your family?'],
          ['Kes on teie pereliikmed?', 'Who is in your family?'],
          ['Mida te koos perega nädalavahetusel teete?', 'What do you do with your family at the weekend?'],
          ['Kus teie sugulased elavad?', 'Where do your relatives live?'],
          ['Kui sageli te oma sugulastega kohtute?', 'How often do you see your relatives?'],
          ['Mida sugulased teile tavaliselt kingivad?', 'What do your relatives usually give you?'],
        ],
        samples: [
          {
            label: 'Sample answer to “Mida te koos perega nädalavahetusel teete?”',
            et: familyAnswer,
            tr: 'On Saturday we usually go shopping and clean the house. On Sunday we sometimes drive to the countryside, because my mother lives there. In summer we go swimming together.',
          },
        ],
      },
      {
        h: 'Task 2',
        p: ['About 5–6 minutes. The candidates get a card with a topic and pictures (ideekaart) and ask each other questions. The booklet has two examples. “Söök”: what your partner eats and when. “Igapäevane elu”: what they do at the shop, at a service point, at the health centre and how often. You need to both ask and answer. Question words:'],
        phrases: [
          ['Mida sa … ?', 'What do you …?'],
          ['Millal? / Mis kell?', 'When? / What time?'],
          ['Kui tihti? / Kui sageli?', 'How often?'],
          ['Kus? Kellega? Miks?', 'Where? With whom? Why?'],
          ['Kas sa … ?', 'Do you …? (a yes/no question)'],
          ['Aga sina?', 'And you?'],
        ],
        samples: [
          {
            label: 'Sample dialogue for the “Söök” card',
            et: dialogue,
            tr: 'A: What do you eat in the morning?\nB: Usually porridge, and I drink coffee. And you?\nA: I have a sandwich. Where do you have lunch?\nB: At work, in the canteen. The hot food there is cheap.\nA: Do you often have dessert?\nB: No, only on Sundays. Then I bake a cake with my family.',
          },
        ],
      },
      {
        h: 'If you did not understand or do not know a word',
        phrases: [
          ['Vabandust, ma ei saanud aru.', 'Sorry, I didn’t understand.'],
          ['Kas te saate korrata?', 'Could you repeat that?'],
          ['Palun rääkige aeglasemalt.', 'Please speak more slowly.'],
          ['Mida see sõna tähendab?', 'What does this word mean?'],
          ['Ma ei mäleta, kuidas see eesti keeles on.', 'I can’t remember how to say it in Estonian.'],
          ['Hetkeke, ma mõtlen.', 'Just a moment, let me think.'],
        ],
      },
      {
        h: 'Tips',
        list: [
          'Answer with two or three sentences, not a single word.',
          'Do not memorise a monologue: the questions may not match the text you prepared.',
          'In task 2, ask your partner about every point on the card and answer their questions.',
          'Practise out loud and record yourself on your phone.',
          'If you make a mistake, do not stop; keep talking.',
        ],
        links: [
          ['A2 topics on this site', 'topics#a2'],
          ['Harno booklet with pictures and cards (PDF)', booklet],
        ],
      },
    ],
  },
  {
    slug: 'a2-listening-reading',
    nav: 'Listening and reading',
    group: 'exam',
    title: 'Listening and reading in the Estonian A2 exam',
    description: 'The task types in the listening and reading parts of the A2 exam and what to pay attention to when preparing.',
    h1: 'Listening and reading in the A2 exam',
    lead: 'Listening lasts 30 minutes and reading 50 minutes. Each part is scored out of 20 points. In every task you choose an answer or write a word or a number.',
    sections: [
      {
        h: 'Listening tasks',
        list: [
          'Choose a picture, number or word. For example, the question “Mis kell väljub Tallinna–Tartu rong?” with the options 20.05, 20.15 and 20.25.',
          'Decide whether a statement is true or false (õige / vale).',
          'Write a word or a number, for example the answer to “Mitu tundi reis kestab?”.',
          'Match days of the week with activities. Two options are left over.',
        ],
        after: ['In the booklet’s answer key for the short-answer task, both the digit and the word are accepted (4 or neli), as are different forms of a word (pannkook, pannkooke).'],
      },
      {
        h: 'What to pay attention to',
        list: [
          'Read the questions before the recording starts.',
          'Review how times are said: pool viis (4:30), veerand kuus (5:15), kolmveerand seitse (6:45).',
          'Listen to the end. The words ei, mitte, aga and hoopis can change the meaning.',
          'In the true/false task, a word from the statement may appear in the recording even though the meaning is different.',
          'It helps to listen to Estonian every day: radio, ERR programmes, Keeleklikk videos.',
        ],
      },
      {
        h: 'Reading tasks',
        list: [
          'Choose the right reply. For example, “Pole viga.” is a reply to “Kuidas sul läheb?”',
          'Decide which of three texts a statement refers to.',
          'Match signs and notices with explanations. For example, “Libe põrand!” means “Siin peab olema väga ettevaatlik.”',
          'Read a text and answer questions by choosing A, B or C.',
          'Fill the gaps in a letter by choosing one word out of three.',
        ],
      },
      {
        h: 'Common replies',
        phrases: [
          ['Pole viga.', 'Not bad.'],
          ['Palju õnne!', 'Congratulations!'],
          ['Jõudu!', 'Good luck!'],
          ['Anna andeks! / Vabandust!', 'Sorry! / Excuse me!'],
          ['Olgu (nii).', 'OK, fine.'],
          ['Ole terve!', 'Bless you!'],
          ['Pole vaja.', 'No need.'],
          ['Muidugi!', 'Of course!'],
          ['Head aega! / Nägemiseni!', 'Goodbye!'],
        ],
      },
      {
        h: 'Signs and notices',
        phrases: [
          ['Avatud / Suletud', 'Open / Closed'],
          ['Tõmba / Lükka', 'Pull / Push'],
          ['Sissepääs / Väljapääs', 'Entrance / Exit'],
          ['Tasuta', 'Free'],
          ['Keelatud', 'Forbidden'],
          ['Libe!', 'Slippery!'],
          ['Märg värv', 'Wet paint'],
          ['Mitte suitsetada', 'No smoking'],
          ['Hoia pilet alles!', 'Keep your ticket!'],
        ],
      },
      {
        h: 'Reading tips',
        list: [
          'The booklet has 30 questions in 50 minutes, about a minute and a half per question. If a question is hard, come back to it later.',
          'For gaps, look at the neighbouring words. For example, in “Eile ___ ootamatult haigeks” the answer is jäin, because the phrase is haigeks jääma.',
          'If there are more options than you need, first choose the ones you are sure of.',
          'Write answer letters in capitals: A, B, C.',
        ],
        links: [
          ['Final A2 test', 'test-a2'],
          ['Where to listen to Estonian', 'guide/resources'],
          ['Harno booklet with samples and answers (PDF)', booklet],
        ],
      },
    ],
  },
  {
    slug: 'resources',
    nav: 'Free resources',
    group: 'help',
    title: 'Free resources for learning Estonian',
    description: 'Free Estonian courses and materials for levels A1–B1: Keeleklikk, Keeletee, Settle in Estonia, Eesti keele maja, Sõnaveeb, ERR and the Harno booklet.',
    h1: 'Free resources for learning Estonian',
    lead: 'Free courses and materials. They help with what this site does not cover: listening, writing and speaking.',
    sections: [
      {
        h: 'Online courses',
        links: [
          ['Keeleklikk', 'https://www.keeleklikk.ee/', 'An online course for beginners up to A2. Animations, grammar videos, about 1,200 exercises. Instructions in English, Russian and Ukrainian.'],
          ['Keeletee', 'https://www.keeletee.ee/', 'The follow-up to Keeleklikk, from A2 to B1. Interviews, videos and tests. Instructions in English and Russian.'],
        ],
      },
      {
        h: 'Courses and advice',
        links: [
          ['Settle in Estonia', 'https://settleinestonia.ee/', 'The welcoming programme. Free A1, A2 and B1 courses for people who have lived in Estonia for less than five years. Eligibility is described on the site.'],
          ['Eesti keele maja', 'https://www.integratsioon.ee/eestikeelemaja', 'The Estonian Language House of the Integration Foundation. Free advice in Tallinn and Narva, courses and events.'],
        ],
      },
      {
        h: 'Dictionary',
        links: [
          ['Sõnaveeb', 'https://sonaveeb.ee/', 'The dictionary of the Institute of the Estonian Language (EKI). Meanings, examples and word forms, useful for checking cases.'],
        ],
      },
      {
        h: 'Radio and TV',
        links: [
          ['ERR Jupiter', 'https://jupiter.err.ee/', 'Programmes, films and radio from Estonian Public Broadcasting. News and children’s programmes are a good start.'],
        ],
      },
      {
        h: 'Harno materials',
        links: [
          ['Estonian language proficiency exams', harnoLinks.exams],
          ['Booklet with A2 sample tasks and answers (PDF)', booklet],
          ['EIS, exam registration', harnoLinks.eis],
        ],
      },
      {
        h: 'On this site',
        links: [
          ['How the A2 exam works', 'exam-a2'],
          ['What this site covers and what it does not have yet', 'guide/coverage'],
          ['A2 topics', 'topics#a2'],
          ['Final A2 test', 'test-a2'],
        ],
      },
    ],
  },
];

// Estonian: the text is in Estonian; translations of samples and phrases stay in English, as in the quizzes.
const et: Guide[] = [
  {
    slug: 'coverage',
    nav: 'Mida sait ei kata',
    group: 'help',
    title: 'Mida see sait katab ja mida siin veel ei ole',
    description: 'Siinsed küsimustikud harjutavad grammatikat, sõnavara ja lühikesi vastuseid. Kuulamis-, kirjutamis- ja rääkimisülesandeid veel ei ole. Sellel lehel on kirjas, kuidas valmistuda A2 eksami nendeks osadeks.',
    h1: 'Mida see sait katab ja mida siin veel ei ole',
    lead: 'A2 eksamil on neli osa: kirjutamine, kuulamine, lugemine ja rääkimine. Igat osa hinnatakse 20 punktiga. Selle saidi küsimustikud aitavad mõne osa juures, aga mitte kõigi.',
    sections: [
      {
        h: 'Eksami osad ja ülesanded saidil',
        table: {
          head: ['Eksami osa', 'Punktid', 'Sellel saidil'],
          rows: [
            ['Lugemine', '20', 'Osaliselt. On lühikesed valikvastustega küsimused, repliigid olukordades ja lüngad lausetes. Pikki tekste ja teateid on veel vähe.'],
            ['Kuulamine', '20', 'Veel ei ole.'],
            ['Kirjutamine', '20', 'Veel ei ole. Saidil kirjutad ainult üksikuid sõnu.'],
            ['Rääkimine', '20', 'Veel ei ole.'],
            ['Grammatika ja sõnavara', '—', 'Saidi põhiosa: käänded, verbid, sõnad A2 13 teema kohta.'],
          ],
        },
        after: ['Eksamil ei ole eraldi grammatikaosa. Grammatikat ja sõnavara on vaja kõigis neljas osas, nii et küsimustikud aitavad, kuid ei asenda eksamiks valmistumist.'],
      },
      {
        h: 'Küsimustike tulemustest',
        list: [
          'Kui A2 küsimustikud lähevad hästi, tunned selle taseme grammatikat ja sõnavara.',
          'Küsimustikud ei kontrolli kuulamist, kirjutamist ega rääkimist.',
          'Eksam on sooritatud 48 punktiga 80-st, kui ükski osa ei ole 0 punkti. Seega tuleb valmistuda kõigiks neljaks osaks.',
        ],
      },
      {
        h: 'Mida saidil veel ei ole',
        list: [
          'Kuulamisülesanded.',
          'Kirjutatud tekstide kontroll.',
          'Rääkimis- ja dialoogiülesanded.',
          'Ajaga proovieksam Harno formaadis.',
          'B1 tase (tulekul).',
        ],
      },
      {
        h: 'Kuidas valmistuda teisteks osadeks',
        list: [
          'Kirjutamine. Vaata ülesandetüüpe ja kirjuta 2–3 lühikest teksti nädalas. Hea, kui keegi neid kontrollib.',
          'Rääkimine. Vasta eksami teemade küsimustele valjusti ja salvesta end telefoniga.',
          'Kuulamine. Kuula eesti keelt iga päev ja pane tähele arve, kellaaegu ja nädalapäevi.',
          'Harno vihikus on kõigi nelja osa näidisülesanded koos vastustega.',
        ],
        links: [
          ['Kirjutamine A2 eksamil', 'guide/a2-writing'],
          ['Rääkimine A2 eksamil', 'guide/a2-speaking'],
          ['Kuulamine ja lugemine A2 eksamil', 'guide/a2-listening-reading'],
          ['Tasuta kursused ja materjalid', 'guide/resources'],
          ['Harno A2 näidisülesannete vihik (PDF)', booklet],
        ],
      },
      {
        h: 'Plaanid',
        p: ['Edaspidi plaanime lisada kuulamisülesanded, kirjutamisülesanded, rääkimisolukorrad ja B1 taseme.'],
      },
    ],
  },
  {
    slug: 'who-needs-a2',
    nav: 'Kellele on A2 vaja',
    group: 'exam',
    title: 'Kellele on eesti keele A2 eksam vajalik',
    description: 'Millal on A2 ametlikult nõutud: teatud ametikohad Vabariigi Valitsuse määruse nr 84 järgi ja töötamiseks antud elamisloa pikendamine. Mille poolest A2 erineb B1-st ja millal on vaja B1.',
    h1: 'Kellele on A2 eksam vajalik',
    lead: 'A2 tase on ametlikult nõutud kahel juhul: teatud ametikohtadel ja töötamiseks antud elamisloa pikendamisel. Kodakondsuse ja pikaajalise elaniku elamisloa jaoks on vaja B1 taset. Üksikasjad ja viited ametlikele allikatele on allpool.',
    sections: [
      {
        h: 'Mida tähendab A2 tase',
        p: [
          'Eesti keele oskustasemed järgivad Euroopa keeleõppe raamdokumenti (CEFR). Harno korraldab eksameid neljal tasemel: A2, B1, B2 ja C1.',
          'Sellel skaalal kuuluvad A1 ja A2 algaja keelekasutaja ning B1 ja B2 iseseisva keelekasutaja tasemele. Ka Harno käsiraamatud on nii nimetatud: „Algaja keelekasutaja“ A2 jaoks ja „Iseseisev keelekasutaja“ B1 ja B2 jaoks. A2 lõpetab algtaseme; järgmine samm on B1.',
          'A2 tasemel saab inimene aru lihtsatest fraasidest tuttavatel teemadel (isiku- ja pereandmed, ostlemine, kodu, töö), tuleb toime lihtsates igapäevaolukordades ja oskab lühidalt kirjeldada ennast, oma perekonda ja elutingimusi.',
        ],
      },
      {
        h: 'Töö',
        p: ['Keelenõuded tööl on kehtestatud Vabariigi Valitsuse 20.06.2011 määrusega nr 84 „Ametniku, töötaja ning füüsilisest isikust ettevõtja eesti keele oskuse ja kasutamise nõuded“. A2 taset nõutakse:'],
        list: [
          'riigiasutuste töötajatelt, kes teevad tehnilist või abitööd, näiteks autojuhid, kütjad, paljundusmasina operaatorid jms;',
          'vedurijuhtidelt ja rongijuhtidelt;',
          'valvuritelt, piletikontrolöridelt, garderoobitöötajatelt, uksehoidjatelt ja kulleritelt.',
        ],
        after: [
          'See on miinimum. Tööandja võib nõuda kõrgemat taset, kuid mitte kõrgemat kui C1.',
          'Sama määrus nõuab paljudel ametikohtadel B1 taset, näiteks teenindus- ja müügitöötajatelt, kes teenindavad kliente regulaarselt, ühistranspordi juhtidelt ja hooldustöötajatelt.',
          'Harno andmetel ei pea eksamit tegema, kui oled lõpetanud põhikooli, gümnaasiumi või kõrgkooli, kus vähemalt 60% õppest toimus eesti keeles.',
        ],
      },
      {
        h: 'Töötamiseks antud elamisluba',
        p: [
          'Politsei- ja Piirivalveameti (PPA) andmetel kehtib eesti keele A2 nõue alates 15. juulist 2018. See puudutab inimesi, kes on elanud Eestis 5 aastat 16.07.2018 või hiljem antud tähtajalise elamisloaga töötamiseks ja taotlevad selle pikendamist või uut töötamiseks antud elamisluba.',
          'Kontrolli üksikasju PPA kodulehelt või rändenõustajalt.',
        ],
      },
      {
        h: 'Millal on vaja B1',
        list: [
          'Eesti kodakondsus. Tuleb sooritada vähemalt B1 taseme eksam.',
          'Pikaajalise elaniku elamisluba. Vaja on vähemalt B1 taseme eesti keelt ja integratsiooninõude täitmist. PPA andmetel ei kehti keelenõue alla 15-aastastele, üle 65-aastastele ja piiratud teovõimega inimestele ning eksamit ei pea tegema need, kes on omandanud põhi-, kesk- või kõrghariduse eesti keeles.',
          'Paljud ametikohad määruse nr 84 järgi, eriti töö klientidega.',
        ],
        after: ['Kui sul läheb hiljem vaja B1, on A2 ettevalmistus ikkagi kasulik: A2 sõnavara ja grammatika on B1 alus.'],
      },
      {
        h: 'Eksami sooritamine',
        p: ['Eksam on tasuta ja registreerimine toimub EIS-is. Ülesehitus, punktid ja registreerimine on kirjas eraldi lehel.'],
        links: [
          ['Kuidas A2 eksam käib', 'exam-a2'],
          ['EIS, eksamile registreerimine', harnoLinks.eis],
        ],
      },
      {
        h: 'Allikad',
        links: [
          ['Riigi Teataja: Vabariigi Valitsuse määrus nr 84, kehtiv redaktsioon', sources.regulation84],
          ['PPA: elamisluba töötamiseks (inglise keeles)', sources.ppaEmployment],
          ['PPA: pikaajalise elaniku elamisluba (inglise keeles)', sources.ppaLongTerm],
          ['Harno: eesti keele tasemeeksamid (inglise keeles)', harnoLinks.exams],
          ['Harno: käsiraamat „Iseseisev keelekasutaja. B1- ja B2-taseme eesti keele oskus“ (PDF)', sources.harnoB1],
        ],
      },
    ],
  },
  {
    slug: 'a2-writing',
    nav: 'Kirjutamine',
    group: 'exam',
    title: 'Eesti keele A2 eksami kirjutamisosa',
    description: 'A2 eksami kirjutamisosa ülesanded: tekst visiitkaardi põhjal ja lühike teade või kirjeldus. Näidistekstid tõlkega ja kasulikud fraasid.',
    h1: 'Kirjutamine A2 eksamil',
    lead: 'Kirjutamisosa on esimene ja kestab 30 minutit. Selles on kaks ülesannet, kokku 20 punkti. Ülesannete kirjeldused on Harno vihikust, näidistekstid on meie omad.',
    sections: [
      {
        h: '1. ülesanne',
        p: ['Kirjutad inimese või asutuse visiitkaardi põhjal teksti, vähemalt 25 sõna. Ülesandes on küsimused. Inimese kaardi puhul on need:'],
        phrases: [
          ['Kellena ta töötab?', 'What does he or she work as?'],
          ['Kus ta töötab?', 'Where does he or she work?'],
          ['Millal ta töötab?', 'When does he or she work?'],
          ['Kuidas saab temaga kontakti?', 'How can you contact him or her?'],
        ],
        after: [
          'Kui kaart kuulub asutusele, on küsimused teised: Mis asutus see on? Kus see asub? Mida seal teha saab? Kuidas saab kontakti?',
          'Kaartidel on sageli lühendid. E, T, K, N, R, L, P on nädalapäevad esmaspäevast pühapäevani. mnt tähendab maantee, tn tähendab tänav, pst tähendab puiestee.',
        ],
        samples: [
          {
            label: `Näide. Kaardil on kirjas: ${card.card}`,
            et: card.et,
            tr: 'Anna Mets works as a hairdresser. She works at the Lokk salon. The salon is in Tallinn, at Tartu maantee 15. Anna works from Monday to Friday from ten in the morning to seven in the evening. You can contact her by phone. Her number is 5123 4567.',
          },
        ],
      },
      {
        h: '2. ülesanne',
        p: ['Tekst peab olema vähemalt 30 sõna. See võib olla märkus, teade või kutse. Vihikus on näiteks olukord, kus leidsid oma kodust sõbra rahakoti ja kirjutad talle, kus see oli, milline see välja näeb ja kuidas selle tagasi saab. Või on see kirjeldus etteantud teemal, näiteks „Minu nädalavahetus“. Ka selles ülesandes on küsimused ja igale tuleb vastata.'],
        samples: [
          {
            label: 'Näidiskutse',
            et: invitation,
            tr: 'Hi Mari!\nIt’s my birthday on Saturday and I’m inviting you over. The party starts at six in the evening at my place, Pärnu maantee 10, flat 5. We’ll eat cake and play board games. Please let me know if you can come. My phone is 5555 1234.\nSee you!\nOlga',
          },
          {
            label: 'Näidiskirjeldus teemal „Minu nädalavahetus“',
            et: weekend,
            tr: 'On Saturday morning I went to the market and bought vegetables. After lunch I cleaned the house. In the evening I met a friend at a café and we talked for a long time. On Sunday my family and I drove to the countryside to see my grandmother. The weather was nice there and we walked in the forest. In the evening I was tired but happy.',
          },
        ],
      },
      {
        h: 'Kasulikud fraasid',
        phrases: [
          ['Tere, Mari! / Kallis Mari!', 'Tuttava tervitamine'],
          ['Lugupeetud härra Tamm!', 'Ametlik pöördumine'],
          ['Kirjutan sulle, sest …', 'I’m writing to you because …'],
          ['Kas sa saad … tulla?', 'Can you come …?'],
          ['Palun helista mulle. / Palun anna teada.', 'Please call me. / Please let me know.'],
          ['Kõigepealt … Siis … Pärast seda …', 'First … Then … After that …'],
          ['…, sest … / …, aga …', '…, because … / …, but …'],
          ['Tervitades / Lugupidamisega', 'Mitteametlik / ametlik lõpetus'],
          ['Kohtumiseni!', 'See you!'],
        ],
      },
      {
        h: 'Nõuanded',
        list: [
          'Vasta kõigile ülesande küsimustele.',
          'Jälgi sõnade arvu: 25 ja 30 sõna on miinimum. Kirjuta lauseid, mitte loetelu.',
          'Kasuta lihtsaid lauseid, milles oled kindel.',
          'Jäta paar minutit verbilõppude, käänete ja ajamääruste kontrollimiseks.',
          'Kirjuta loetavalt, musta või sinise pastakaga.',
          'Harjutamiseks kirjuta 2–3 teksti nädalas ja palu kellelgi neid kontrollida.',
        ],
        links: [
          ['Teema „Kirjad ja sõnumid“', 'topics/letters'],
          ['Harno näidisülesannete vihik (PDF)', booklet],
        ],
      },
    ],
  },
  {
    slug: 'a2-speaking',
    nav: 'Rääkimine',
    group: 'exam',
    title: 'Eesti keele A2 eksami rääkimisosa',
    description: 'Kuidas käib A2 eksami rääkimisosa: pildi kirjeldamine, eksamineerija küsimused ja vestlus paarilisega. Näidisküsimused ja fraasid tõlkega.',
    h1: 'Rääkimine A2 eksamil',
    lead: 'Rääkimisosa kestab umbes 12 minutit. Teed seda paaris teise eksaminandiga, samal päeval kui kirjalikku osa. Selles on kaks ülesannet, kokku 20 punkti. Vastused salvestatakse.',
    sections: [
      {
        h: '1. ülesanne',
        p: ['Umbes 6–7 minutit. Ülesanne põhineb igapäevasel teemal; Harno vihikus on see „Pere ja sugulased“. Kõigepealt räägid, mis on pildil, seejärel vastad eksamineerija küsimustele. Fraasid pildi kirjeldamiseks:'],
        phrases: [
          ['Pildil on …', 'In the picture there is …'],
          ['Pildil ma näen …', 'In the picture I can see …'],
          ['Vasakul / paremal / keskel on …', 'On the left / on the right / in the middle there is …'],
          ['Nad istuvad / söövad / räägivad.', 'They are sitting / eating / talking.'],
          ['Minu arvates on see …', 'I think this is …'],
          ['Tundub, et neil on hea tuju.', 'They seem to be in a good mood.'],
        ],
      },
      {
        h: 'Eksamineerija näidisküsimused',
        p: ['Küsimused on Harno vihikust.'],
        phrases: [
          ['Kui suur on teie pere?', 'How big is your family?'],
          ['Kes on teie pereliikmed?', 'Who is in your family?'],
          ['Mida te koos perega nädalavahetusel teete?', 'What do you do with your family at the weekend?'],
          ['Kus teie sugulased elavad?', 'Where do your relatives live?'],
          ['Kui sageli te oma sugulastega kohtute?', 'How often do you see your relatives?'],
          ['Mida sugulased teile tavaliselt kingivad?', 'What do your relatives usually give you?'],
        ],
        samples: [
          {
            label: 'Näidisvastus küsimusele „Mida te koos perega nädalavahetusel teete?“',
            et: familyAnswer,
            tr: 'On Saturday we usually go shopping and clean the house. On Sunday we sometimes drive to the countryside, because my mother lives there. In summer we go swimming together.',
          },
        ],
      },
      {
        h: '2. ülesanne',
        p: ['Umbes 5–6 minutit. Eksaminandid saavad teema ja piltidega kaardi (ideekaart) ning esitavad teineteisele küsimusi. Vihikus on kaks näidet. „Söök“: mida ja millal paariline sööb. „Igapäevane elu“: mida ta teeb poes, teeninduspunktis, tervisekeskuses ja kui tihti. Tuleb nii küsida kui ka vastata. Küsisõnad:'],
        phrases: [
          ['Mida sa … ?', 'What do you …?'],
          ['Millal? / Mis kell?', 'When? / What time?'],
          ['Kui tihti? / Kui sageli?', 'How often?'],
          ['Kus? Kellega? Miks?', 'Where? With whom? Why?'],
          ['Kas sa … ?', 'Jah/ei-küsimus'],
          ['Aga sina?', 'And you?'],
        ],
        samples: [
          {
            label: 'Näidisdialoog kaardi „Söök“ põhjal',
            et: dialogue,
            tr: 'A: What do you eat in the morning?\nB: Usually porridge, and I drink coffee. And you?\nA: I have a sandwich. Where do you have lunch?\nB: At work, in the canteen. The hot food there is cheap.\nA: Do you often have dessert?\nB: No, only on Sundays. Then I bake a cake with my family.',
          },
        ],
      },
      {
        h: 'Kui sa ei saanud aru või ei tea sõna',
        phrases: [
          ['Vabandust, ma ei saanud aru.', 'Sorry, I didn’t understand.'],
          ['Kas te saate korrata?', 'Could you repeat that?'],
          ['Palun rääkige aeglasemalt.', 'Please speak more slowly.'],
          ['Mida see sõna tähendab?', 'What does this word mean?'],
          ['Ma ei mäleta, kuidas see eesti keeles on.', 'I can’t remember how to say it in Estonian.'],
          ['Hetkeke, ma mõtlen.', 'Just a moment, let me think.'],
        ],
      },
      {
        h: 'Nõuanded',
        list: [
          'Vasta kahe-kolme lausega, mitte ühe sõnaga.',
          'Ära õpi monoloogi pähe: küsimused ei pruugi sobida ettevalmistatud tekstiga.',
          '2. ülesandes küsi paariliselt kaardi iga punkti kohta ja vasta tema küsimustele.',
          'Harjuta valjusti ja salvesta end telefoniga.',
          'Kui teed vea, ära jää seisma, räägi edasi.',
        ],
        links: [
          ['A2 teemad sellel saidil', 'topics#a2'],
          ['Harno vihik piltide ja kaartidega (PDF)', booklet],
        ],
      },
    ],
  },
  {
    slug: 'a2-listening-reading',
    nav: 'Kuulamine ja lugemine',
    group: 'exam',
    title: 'Kuulamine ja lugemine eesti keele A2 eksamil',
    description: 'A2 eksami kuulamis- ja lugemisosa ülesandetüübid ning millele ettevalmistusel tähelepanu pöörata.',
    h1: 'Kuulamine ja lugemine A2 eksamil',
    lead: 'Kuulamine kestab 30 minutit ja lugemine 50 minutit. Igat osa hinnatakse 20 punktiga. Igas ülesandes valid vastuse või kirjutad sõna või arvu.',
    sections: [
      {
        h: 'Kuulamisülesanded',
        list: [
          'Vali pilt, arv või sõna. Näiteks küsimus „Mis kell väljub Tallinna–Tartu rong?“ vastusevariantidega 20.05, 20.15 ja 20.25.',
          'Otsusta, kas väide on õige või vale.',
          'Kirjuta sõna või arv, näiteks vastus küsimusele „Mitu tundi reis kestab?“.',
          'Seosta nädalapäevad tegevustega. Kaks varianti jääb üle.',
        ],
        after: ['Vihiku vastustes lühivastusega ülesande juures sobivad nii number kui ka sõna (4 või neli) ning sõna eri vormid (pannkook, pannkooke).'],
      },
      {
        h: 'Millele tähelepanu pöörata',
        list: [
          'Loe küsimused läbi enne salvestuse algust.',
          'Korda, kuidas öeldakse kellaaegu: pool viis (4.30), veerand kuus (5.15), kolmveerand seitse (6.45).',
          'Kuula lõpuni. Sõnad ei, mitte, aga ja hoopis võivad tähendust muuta.',
          'Õige/vale-ülesandes võib väite sõna salvestuses esineda, kuigi tähendus on teine.',
          'Abiks on iga päev eesti keele kuulamine: raadio, ERR-i saated, Keeleklikki videod.',
        ],
      },
      {
        h: 'Lugemisülesanded',
        list: [
          'Vali õige repliik. Näiteks „Pole viga.“ on vastus küsimusele „Kuidas sul läheb?“',
          'Otsusta, millise kolmest tekstist kohta väide käib.',
          'Seosta sildid ja teated selgitustega. Näiteks „Libe põrand!“ tähendab „Siin peab olema väga ettevaatlik.“',
          'Loe teksti ja vasta küsimustele, valides A, B või C.',
          'Täida kirjas lüngad, valides kolmest sõnast ühe.',
        ],
      },
      {
        h: 'Sagedased repliigid',
        phrases: [
          ['Pole viga.', 'Not bad.'],
          ['Palju õnne!', 'Congratulations!'],
          ['Jõudu!', 'Good luck!'],
          ['Anna andeks! / Vabandust!', 'Sorry! / Excuse me!'],
          ['Olgu (nii).', 'OK, fine.'],
          ['Ole terve!', 'Bless you!'],
          ['Pole vaja.', 'No need.'],
          ['Muidugi!', 'Of course!'],
          ['Head aega! / Nägemiseni!', 'Goodbye!'],
        ],
      },
      {
        h: 'Sildid ja teated',
        phrases: [
          ['Avatud / Suletud', 'Open / Closed'],
          ['Tõmba / Lükka', 'Pull / Push'],
          ['Sissepääs / Väljapääs', 'Entrance / Exit'],
          ['Tasuta', 'Free'],
          ['Keelatud', 'Forbidden'],
          ['Libe!', 'Slippery!'],
          ['Märg värv', 'Wet paint'],
          ['Mitte suitsetada', 'No smoking'],
          ['Hoia pilet alles!', 'Keep your ticket!'],
        ],
      },
      {
        h: 'Nõuanded lugemiseks',
        list: [
          'Vihikus on 30 küsimust 50 minuti jooksul, umbes poolteist minutit küsimuse kohta. Kui küsimus on raske, tule selle juurde hiljem tagasi.',
          'Lünkade puhul vaata naabersõnu. Näiteks lauses „Eile ___ ootamatult haigeks“ on vastus jäin, sest väljend on haigeks jääma.',
          'Kui variante on rohkem kui vaja, vali kõigepealt need, milles oled kindel.',
          'Kirjuta vastusetähed suurtähtedega: A, B, C.',
        ],
        links: [
          ['A2 lõputest', 'test-a2'],
          ['Kus eesti keelt kuulata', 'guide/resources'],
          ['Harno vihik näidiste ja vastustega (PDF)', booklet],
        ],
      },
    ],
  },
  {
    slug: 'resources',
    nav: 'Tasuta materjalid',
    group: 'help',
    title: 'Tasuta materjalid eesti keele õppimiseks',
    description: 'Tasuta eesti keele kursused ja materjalid tasemetele A1–B1: Keeleklikk, Keeletee, Settle in Estonia, Eesti keele maja, Sõnaveeb, ERR ja Harno vihik.',
    h1: 'Tasuta materjalid eesti keele õppimiseks',
    lead: 'Tasuta kursused ja materjalid. Need aitavad selle juures, mida see sait ei kata: kuulamine, kirjutamine ja rääkimine.',
    sections: [
      {
        h: 'E-kursused',
        links: [
          ['Keeleklikk', 'https://www.keeleklikk.ee/', 'E-kursus algajatele kuni A2 tasemeni. Animatsioonid, grammatikavideod, umbes 1200 harjutust. Juhised inglise, vene ja ukraina keeles.'],
          ['Keeletee', 'https://www.keeletee.ee/', 'Keeleklikki jätk, A2-st B1-ni. Intervjuud, videod ja testid. Juhised inglise ja vene keeles.'],
        ],
      },
      {
        h: 'Kursused ja nõustamine',
        links: [
          ['Settle in Estonia', 'https://settleinestonia.ee/', 'Kohanemisprogramm. Tasuta A1, A2 ja B1 kursused inimestele, kes on elanud Eestis alla viie aasta. Tingimused on kirjas saidil.'],
          ['Eesti keele maja', 'https://www.integratsioon.ee/eestikeelemaja', 'Integratsiooni Sihtasutuse eesti keele maja. Tasuta nõustamine Tallinnas ja Narvas, kursused ja üritused.'],
        ],
      },
      {
        h: 'Sõnaraamat',
        links: [
          ['Sõnaveeb', 'https://sonaveeb.ee/', 'Eesti Keele Instituudi (EKI) sõnaraamat. Tähendused, näited ja sõnavormid, kasulik käänete kontrollimiseks.'],
        ],
      },
      {
        h: 'Raadio ja TV',
        links: [
          ['ERR Jupiter', 'https://jupiter.err.ee/', 'Eesti Rahvusringhäälingu saated, filmid ja raadio. Hea algus on uudised ja lastesaated.'],
        ],
      },
      {
        h: 'Harno materjalid',
        links: [
          ['Eesti keele tasemeeksamid (inglise keeles)', harnoLinks.exams],
          ['A2 näidisülesannete ja vastustega vihik (PDF)', booklet],
          ['EIS, eksamile registreerimine', harnoLinks.eis],
        ],
      },
      {
        h: 'Sellel saidil',
        links: [
          ['Kuidas A2 eksam käib', 'exam-a2'],
          ['Mida see sait katab ja mida siin veel ei ole', 'guide/coverage'],
          ['A2 teemad', 'topics#a2'],
          ['A2 lõputest', 'test-a2'],
        ],
      },
    ],
  },
];

export const guides: Record<Lang, Guide[]> = { ru, en, et };
