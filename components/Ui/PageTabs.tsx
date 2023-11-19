'use client'
import Link from "next/link"

import '@/styles/components/page-tabs.scss'

import { usePathname } from "next/navigation"

type Tab = {
  title: string,
  key: string
}

type PropType = {
  tabs: Tab[],
  mainPath: string
}
const PageTabs = ({tabs, mainPath}: PropType) => {

  const segments = usePathname().split('/')
  const current = segments[segments.length - 1]
  return (
    <div className="page-tabs">
      {tabs.map(tab => (
        <Link className={`page-tab ${current === tab.key ? 'active' : ''}`} href={`/${mainPath}/${tab.key}`} key={tab.key}>{tab.title}</Link>
      ))}
    </div>
  )
}

export default PageTabs