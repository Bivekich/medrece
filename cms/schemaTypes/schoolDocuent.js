export default {
  name: 'schoolDocument',
  title: 'Школьные документы',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'file',
      title: 'Файл',
      type: 'file',
      options: {
        hotspot: true,
      },
    },
  ],
}
