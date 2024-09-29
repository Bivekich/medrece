export default {
  name: 'quote',
  type: 'document',
  title: 'Цитата дня',
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
