import type { FC } from 'react'
import { Suspense } from 'react'
import loadable from '@loadable/component'
import Loading from '@/components/loading'
import DynamicTesta from '@/components/dynamicTest'

const DynamicTest = loadable(() => import('@/components/dynamicTest'))

interface Props {
}

const LoadableComponent: FC<Props> = () => {
  return <>
    <h1>LoadableComponent</h1>

    <DynamicTest />
    <Suspense fallback={<Loading/>}>
      <DynamicTesta />
    </Suspense>

   </>
}

export default LoadableComponent
