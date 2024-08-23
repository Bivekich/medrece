export default {
  name: 'mediaInfo',
  title: 'Для Сми',
  type: 'document',
  fields: [
    {
      name: 'phoneNumbers',
      title: 'Номера телефонов',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Номер телефона',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Подпись',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'email',
      title: 'Почта',
      type: 'string',
    },
    {
      name: 'legalAddress',
      title: 'Адрес',
      type: 'string',
    },
    {
      name: 'addressText',
      title: 'Описание адреса',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
