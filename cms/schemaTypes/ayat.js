export default {
  name: 'ayat',
  type: 'document',
  title: 'Аят дня',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Цитата',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Фото',
      options: {
        hotspot: true,
      },
    },
  ],
}
