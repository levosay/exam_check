import * as Yup from 'yup'

export const schema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Логин не может быть менее 3 символов')
    .max(12, 'Логин не может быть длиннее 12 символов')
    .required('Поле обязательно для заполнения'),
  password: Yup.string()
    .min(6, 'Пароль не может быть менее 6 символов')
    .required('Поле обязательно для заполнения')
})
