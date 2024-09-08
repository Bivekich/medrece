export default {
  name: 'quote',
  type: 'document',
  title: 'Цитата дня',
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
