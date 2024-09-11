export default {
  name: 'documentsAbiturient',
  title: 'Документы Для Абитуриентов',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Порядок отображения',
      type: 'number',
      description: 'Чем меньше число, тем выше документ будет отображаться.',
      validation: (Rule) => Rule.min(0),
    },
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'documentType',
      title: 'Тип документа',
      type: 'string',
      options: {
        list: [
          {title: 'Файл', value: 'file'},
          {title: 'Список файлов', value: 'fileList'},
          {title: 'Текст', value: 'text'},
        ],
      },
    },
    {
      name: 'file',
      title: 'Файл',
      type: 'file',
      hidden: ({parent}) => parent.documentType !== 'file',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'files',
      title: 'Файлы',
      type: 'array',
      hidden: ({parent}) => parent.documentType !== 'fileList',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'file',
              title: 'Файл',
              type: 'file',
            },
            {
              name: 'title',
              title: 'Название файла',
              type: 'string',
            },
            {
              name: 'fileName',
              title: 'Фактическое имя файла',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      title: 'Текстовое содержимое',
      type: 'text',
      hidden: ({parent}) => parent.documentType !== 'text',
    },
  ],
}
