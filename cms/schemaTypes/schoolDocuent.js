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
