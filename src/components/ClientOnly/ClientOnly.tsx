import { FunctionComponent, useEffect, useState } from 'react'

import { IClientOnlyProps } from './ClientOnly.d'

export const ClientOnly: FunctionComponent<IClientOnlyProps> = ({
  children,
}): JSX.Element => {
  const [renderWithClient, setRenderWithClient] = useState(false)

  useEffect(() => {
    setRenderWithClient(true)
  }, [])

  return renderWithClient && children
}
