// schemas/schoolInfo.js

export default {
  name: 'aboutMedrece',
  type: 'document',
  title: 'Информация о Медресе',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Заголовок',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Изображение',
    },
    {
      name: 'paragraph1',
      type: 'string',
      title: 'Абзац 1',
    },
    {
      name: 'paragraph2',
      type: 'string',
      title: 'Абзац 2',
    },
    {
      name: 'paragraph3',
      type: 'string',
      title: 'Абзац 3',
    },
    {
      name: 'paragraph4',
      type: 'string',
      title: 'Абзац 4',
    },
    {
      name: 'paragraph5',
      type: 'string',
      title: 'Абзац 5',
    },
    {
      name: 'paragraph6',
      type: 'string',
      title: 'Абзац 6',
    },
  ],
}
