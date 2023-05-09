import { FunctionComponent } from 'react'
import { TAccountModuleProps } from './AccountModule.d'
import { Button, Container } from 'components'
import { InfoBlock, ReviewBlock } from './components'
import { useAuthUser } from '@/src/hooks'

export const AccountModule: FunctionComponent<
  TAccountModuleProps
> = ({ username, roles, exams }): JSX.Element => {
  const { logOut } = useAuthUser()

  const examsJSX = exams.map((exam) => (
    <ReviewBlock key={exam._id} {...exam} />
  ))

  return (
    <Container>
      <div className={'flex flex-col mb-2'}>
        <InfoBlock filedName={'Ваш Логин'} filedValue={username} />
        <InfoBlock filedName={'Ваша Роль'} filedValue={roles} />
        <Button
          className={'h-4 mt-2'}
          title={'Выйти'}
          onClick={logOut}
        />
      </div>
      <div className={'flex flex-col gap-2'}>{examsJSX}</div>
    </Container>
  )
}
