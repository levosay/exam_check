import * as Yup from 'yup'

export const schema = Yup.object().shape({
  title: Yup.string()
    .required('Поле обязательно для заполнения'),
  description: Yup.string()
    .required('Поле обязательно для заполнения'),
})
