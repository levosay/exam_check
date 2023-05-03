import {
  IHookFormValues,
  IQuestionData,
  IQuestionsCheckProps,
  IQuestionsTextProps
} from 'types/forms'

const regQuestionsId = new RegExp(/_[a-z|0-9]*_/)
const regAnswerId = new RegExp(/_[0-9]$/)
const regTypeCheck = new RegExp(/^questionCheck/)
const regTypeText = new RegExp(/^questionText/)

const matchQuestionsTypeCheck = (string: string) => regTypeCheck.test(string)
const matchQuestionsTypeText = (string: string) => regTypeText.test(string)

const getQuestionsId = (string: string) => {
  return string.match(regQuestionsId)?.shift()?.replace(/^_/g, '')
    .replace(/_$/g, '') || ''
}

const getAnswerId = (string: string) => {
  return string.match(regAnswerId)?.shift()?.replace(/^_/g, '') || ''
}

const getQuestionsType = (string: string) => {
  return string.match(regTypeCheck)
    ?.shift() || string.match(regTypeText)?.shift() || ''
}

const createQuestionsCheck = ({ obj, key, value }: IQuestionsCheckProps) => {
  const fieldName = getQuestionsId(key)
  obj[fieldName] = {}
  obj[fieldName].id = fieldName
  obj[fieldName].type = getQuestionsType(key)
  obj[fieldName].answers = [{
    id: getAnswerId(key), value: value
  }]
}

const updateQuestionsCheck = ({ obj, key, value }: IQuestionsCheckProps) => {
  const fieldName = getQuestionsId(key)
  obj[fieldName].answers = [...obj[fieldName].answers, {
    id: getAnswerId(key), value: value
  }]
}

const createQuestionsText = ({ obj, key, value }: IQuestionsTextProps) => {
  const fieldName = getQuestionsId(key)
  obj[fieldName] = {}
  obj[fieldName].id = fieldName
  obj[fieldName].type = getQuestionsType(key)
  obj[fieldName].answers = [{
    id: fieldName,
    value: value
  }]
}

export const prepareQuestionsData = (data: IHookFormValues) => {
  const obj: IQuestionData = {}

  for (const key in data) {
    const validKey = key as keyof IHookFormValues

    if (matchQuestionsTypeCheck(key)) {
      if (obj[getQuestionsId(key)]) {
        updateQuestionsCheck({ obj, key, value: data[validKey] as boolean })
      } else {
        createQuestionsCheck({ obj, key, value: data[validKey] as boolean })
      }
    }

    if (matchQuestionsTypeText(key)) {
      createQuestionsText({ obj, key, value: data[validKey] as string })
    }
  }

  return obj
}

