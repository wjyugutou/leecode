import { Suspense } from 'react'

export default function syncElement(path: string) {
  const realPath = path.replace(/^@/, '..')
  const Component = lazy(() => import(/* @vite-ignore */ `${realPath}/index`))
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}
