export default {
  name: 'ayat',
  type: 'document',
  title: 'Аят дня',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Заголовок',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Фото',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'quote',
      type: 'string',
      title: 'Цитата',
    },
  ],
}
