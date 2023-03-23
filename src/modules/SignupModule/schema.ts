import * as Yup from 'yup'

export const schema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Логин не может быть менее 3 символов')
    .max(22, 'Логин не может быть длиннее 22 символов')
    .required('Поле обязательно для заполнения'),
  password: Yup.string()
    .min(6, 'Пароль может быть менее 6 символов')
    .required('Поле обязательно для заполнения'),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Пароли должны совпадать')
    .required('Поле обязательно для заполнения')
})
