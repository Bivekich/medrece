export default {
  name: 'photoVideo',
  title: 'Фото и Видео',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Тип',
      type: 'string',
      options: {
        list: [
          {title: 'Фото', value: 'photo'},
          {title: 'Видео', value: 'video'},
        ],
      },
    },
    {
      name: 'media',
      title: 'Медиа',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'videoUrl',
      title: 'Ссылка на видео',
      type: 'url',
      hidden: ({parent}) => parent?.type !== 'video',
    },
  ],
}
