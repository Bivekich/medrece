export default {
  name: 'news',
  title: 'Новости',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Дата',
      type: 'date',
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Краткое описание',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Полное описание',
      type: 'text',
    },
    {
      name: 'additionalImages',
      title: 'Дополнительные изображения',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
