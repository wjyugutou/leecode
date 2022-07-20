import type { RouteObject } from 'react-router-dom'
import loadable from '@loadable/component'
import { Suspense } from 'react'
import Loading from '@/components/loading'

function lazyRoute(path: string) {
  path = path.replace(/^@/, '..')
  const Component = loadable(/* @vite-ignore */ () => import(path))
  return <Suspense fallback={<Loading />}>
    <Component/>
  </Suspense>
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: lazyRoute('@/pages'),
  }, {
    path: '/hi/:name',
    element: lazyRoute('@/pages/hi'),
  }, {
    path: '/hi',
    element: lazyRoute('@/pages/hi'),
  }, {
    path: '/home',
    element: lazyRoute('@/pages/home'),
  }, {
    path: '/loadableComponent',
    element: lazyRoute('@/pages/loadableComponent'),
  }, {
    path: '/tabs',
    element: lazyRoute('@/pages/tabs'),
  },
]
export default routes
