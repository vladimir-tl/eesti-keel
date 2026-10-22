import type { Lang } from '../i18n/ui';

/**
 * Hand-written search snippets for topics where the shared template undersells the page
 * (picked from Search Console queries). {n} is the number of questions.
 * Topics not listed here use seoTopicTitle / seoTopicDesc from ui.ts.
 */
export const topicSeo: Record<string, Record<Lang, { title: string; desc: string }>> = {
  // "past" and "past2" were both titled "Past tense" and split the query "past eesti keeles".
  past: {
    ru: {
      title: 'Прошедшее время в эстонском (lihtminevik): olin, elasin — упражнения A1',
      desc: 'Простое прошедшее время: olla → olin, oli; правильные глаголы elama → elasin, elas. {n} вопросов с объяснениями, бесплатно и без регистрации.',
    },
    en: {
      title: 'Estonian past tense (lihtminevik): olin, elasin — A1 exercises',
      desc: 'Practise the Estonian simple past: olla → olin, oli; regular verbs elama → elasin, elas. {n} questions with explanations, free and with no sign-up.',
    },
    et: {
      title: 'Lihtminevik: olin, elasin, töötasin — eesti keele harjutused (A1)',
      desc: 'Harjuta lihtminevikku: olla → olin, oli; reeglipärased verbid elama → elasin, elas. {n} küsimust selgitustega, tasuta ja registreerimata.',
    },
  },
  past2: {
    ru: {
      title: 'Прошедшее время в эстонском: трудные глаголы (läksin, nägin, tegin) — A2',
      desc: 'Формы, которые нужно запомнить: minema → läksin, nägema → nägin, tegema → tegin, võtma → võtsin. {n} вопросов с объяснениями, бесплатно.',
    },
    en: {
      title: 'Estonian past tense: irregular verbs (läksin, nägin, tegin) — A2',
      desc: 'The past forms to learn by heart: minema → läksin, nägema → nägin, tegema → tegin, võtma → võtsin. {n} questions with explanations, free.',
    },
    et: {
      title: 'Lihtminevik: läksin, nägin, tegin, võtsin — eesti keele harjutused (A2)',
      desc: 'Lihtmineviku vormid, mis tuleb meelde jätta: minema → läksin, nägema → nägin, tegema → tegin, võtma → võtsin. {n} küsimust selgitustega, tasuta.',
    },
  },
};
