export default {
  name: 'dumKchr',
  type: 'document',
  title: 'ДУМ КЧР',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Заголовок',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Описание',
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Фотография',
      options: {
        hotspot: true,
      },
    },
  ],
}
