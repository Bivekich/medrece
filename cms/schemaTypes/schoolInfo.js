export default {
  name: 'schoolInfo',
  type: 'document',
  title: 'Информация о школе',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Изображение',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'quote',
      type: 'string',
      title: 'Цитата',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Автор',
    },
  ],
}
