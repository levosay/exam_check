import * as Yup from 'yup'

export const schema = Yup.object().shape({
  title: Yup.string()
    .required('Поле обязательно для заполнения'),
  answer: Yup.string()
    .required('Поле обязательно для заполнения'),
})
