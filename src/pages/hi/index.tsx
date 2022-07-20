import type { FC } from 'react'

interface Props {
}

const Hi: FC<Props> = () => {
  const params = useParams()

  return <>
    <h1 className="text-gray-500">hellow {params.name}</h1>
  </>
}

export default Hi
