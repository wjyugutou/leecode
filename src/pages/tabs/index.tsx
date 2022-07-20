import type { FC, Key, ReactElement, ReactNode } from 'react'

interface TabsProps {
  children: ReactElement<PanelProps>[]
}

interface PanelProps {
  tabKey: Key
  label: ReactNode
  children: ReactNode | undefined
}

const TabsPanel: FC<PanelProps> = (props) => {
  return <>
  {props.children}</>
}

const Tabs: FC<TabsProps> = (props) => {
  const { children } = props
  console.log(children)

  const tabHeader = children?.map(val => val.props)
  console.log(tabHeader)
  const [current, setCurrent] = useState({
    tabKey: tabHeader[0].tabKey,
    label: tabHeader[0].label,
    children: tabHeader[0].children,
  })

  return <>
    <div className="flex gap-1 justify-center">
      {
        tabHeader.map(item =>
          <div key={item.tabKey}
            className={`tabNav ${item.tabKey === current.tabKey ? 'tabNav__active' : ''}`}
            onClick={() => setCurrent(item)}
          >{item.label}</div>,
        )
      }
    </div>

    <div className="tabContent justify-self-start">
      {current.children}
    </div>
  </>
}

const Index: FC = () => {
  return <>
    <Tabs>
      <TabsPanel tabKey="Tab-1" label="Tab-1" >
        <h1>Tab-1</h1>
      </TabsPanel>
      <TabsPanel tabKey="Tab-2" label="Tab-2" >
        <h1>Tab-2</h1>
      </TabsPanel>
      <TabsPanel tabKey="Tab-3" label="Tab-3" >
        <h1>Tab-3</h1>
      </TabsPanel>
    </Tabs>
  </>
}

export default Index
