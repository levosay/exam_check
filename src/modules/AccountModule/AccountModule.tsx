import { FunctionComponent } from 'react'
import { TAccountModuleProps } from './AccountModule.d'
import { Container } from 'components'
import { InfoBlock, ReviewBlock } from './components'

export const AccountModule: FunctionComponent<
  TAccountModuleProps
> = ({ username, roles, exams }): JSX.Element => {
  const examsJSX = exams.map((exam) => (
    <ReviewBlock key={exam._id} {...exam} />
  ))

  return (
    <Container>
      <div className={'flex flex-col mb-2'}>
        <InfoBlock filedName={'Ваш Логин'} filedValue={username} />
        <InfoBlock filedName={'Ваша Роль'} filedValue={roles} />
      </div>
      <div className={'flex flex-col gap-2'}>{examsJSX}</div>
    </Container>
  )
}
