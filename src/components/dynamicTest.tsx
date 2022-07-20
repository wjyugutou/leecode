import type { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const DynamicTest: FC<Props> = ({ children }) => {
  // props.children

  async function lazy() {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  }

  useEffect(() => {
    lazy()
  }, [])

  return <>
    <h1>DynamicTest</h1>
    {children}
   </>
}

export default DynamicTest
