export default {
  name: 'teacher',
  type: 'document',
  title: 'Преподователи',
  fields: [
    {
      name: 'photo',
      type: 'image',
      title: 'Фотография преподователя',
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
      name: 'position',
      type: 'string',
      title: 'Должность',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Дата',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Описание',
    },
  ],
}
