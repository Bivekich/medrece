// schemas/studentPage.js
export default {
  name: 'studentPage',
  title: 'Страница для студентов',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: 'Основной заголовок',
      type: 'string',
    },
    {
      name: 'academicTitle',
      title: 'Заголовок академической информации',
      type: 'string',
    },
    {
      name: 'academicText',
      title: 'Текст академической информации',
      type: 'text',
    },
    {
      name: 'academicImage',
      title: 'Изображение академической информации',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'importantDatesTitle',
      title: 'Заголовок важные даты',
      type: 'string',
    },
    {
      name: 'importantDates',
      title: 'Важные даты',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'date',
              title: 'Дата',
              type: 'date',
            },
            {
              name: 'event',
              title: 'Событие',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'rulesTitle',
      title: 'Заголовок правил',
      type: 'string',
    },
    {
      name: 'rulesText',
      title: 'Текст правил',
      type: 'text',
    },
    {
      name: 'scheduleFilesTitle',
      title: 'Заголовок файлов расписания',
      type: 'string',
    },
    {
      name: 'scheduleFiles',
      title: 'Файлы расписания',
      type: 'array',
      of: [
        {
          type: 'file',
        },
      ],
    },
  ],
}
