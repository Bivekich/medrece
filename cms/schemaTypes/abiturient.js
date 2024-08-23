export default {
  name: 'abiturient',
  type: 'document',
  title: 'Абитуриенту',
  fields: [
    {
      name: 'mainTitle',
      type: 'string',
      title: 'Заголовок основной',
    },
    {
      name: 'distanceTitle',
      type: 'string',
      title: 'Заголовок дистанционной подачи документов',
    },
    {
      name: 'distanceText',
      type: 'text',
      title: 'Текст дистанционной подачи документов',
    },
    {
      name: 'distanceImage',
      type: 'image',
      title: 'Изображение дистанционной подачи документов',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contactPhone',
      type: 'string',
      title: 'Телефон приемной комиссии',
    },
    {
      name: 'admissionTitle',
      type: 'string',
      title: 'Заголовок правил приема',
    },
    {
      name: 'admissionText',
      type: 'text',
      title: 'Текст правил приема',
    },
    {
      name: 'admissionImage',
      type: 'image',
      title: 'Изображение правил приема',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'examsTitle',
      type: 'string',
      title: 'Заголовок вступительных экзаменов',
    },
    {
      name: 'examsText',
      type: 'text',
      title: 'Текст вступительных экзаменов',
    },
    {
      name: 'costTitle',
      type: 'string',
      title: 'Заголовок стоимости обучения',
    },
    {
      name: 'costText',
      type: 'text',
      title: 'Текст стоимости обучения',
    },
  ],
}
