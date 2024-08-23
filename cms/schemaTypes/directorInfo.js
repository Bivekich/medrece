export default {
  name: 'directorInfo',
  type: 'document',
  title: 'Информация о директоре',
  fields: [
    {
      name: 'photo',
      type: 'image',
      title: 'Фотография директора',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'fullName',
      type: 'string',
      title: 'ФИО',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Описание',
    },
  ],
}
