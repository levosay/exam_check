import { FunctionComponent } from 'react'
import { TAccountModuleProps } from './AccountModule.d'
import { Button, Container } from 'components'
import { InfoBlock, ReviewBlock } from './components'
import { useAuthUser, useBlackRout } from 'hooks'
import { ROLES } from '@/src/types'
import { useAppSelector, userStore } from '@/src/store/hooks'

export const AccountModule: FunctionComponent<
  TAccountModuleProps
> = ({ username, roles, exams }): JSX.Element => {
  const { logOut } = useAuthUser()
  const { user } = useAppSelector(userStore)


  const examsJSX = exams.map((exam) => (
    <ReviewBlock key={exam._id} {...exam} />
  ))

  const { toCustomRoute } = useBlackRout()

  return (
    <Container>
      <div
        className={'flex justify-between items-center gap-2 max-md:flex-col max-md:items-start'}>
        <div className={'flex items-center gap-2'}>
          {user?.roles?.includes(ROLES.ADMIN) && (
            <>
              <Button
                className={'h-4 min-w-100'}
                title="Добавить Тему"
                onClick={() => toCustomRoute('/theme/add')}
              />
              <Button
                className={'h-4 min-w-100'}
                title="Добавить Тест"
                onClick={() => toCustomRoute('/test/add')}
              />
            </>
          )}
        </div>
        <Button
          className={'h-4 min-w-100'}
          title={'Выйти'}
          onClick={logOut}
        />
      </div>
      <div className={'flex flex-col mb-2 mt-2'}>
        <InfoBlock filedName={'Ваш логин'} filedValue={username} />
        <InfoBlock filedName={'Ваша роль'} filedValue={roles.join('/')} />
      </div>
      <div
        className={'flex flex-col-reverse gap-2 max-md:gap-1'}
      >
        {examsJSX}
      </div>
    </Container>
  )
}
