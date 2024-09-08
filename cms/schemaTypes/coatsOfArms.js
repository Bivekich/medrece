export default {
  name: 'coatsOfArms',
  type: 'document',
  title: 'Гербы',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Название',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Ссылка',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Изображение',
      options: {
        hotspot: true,
      },
    },
  ],
}
