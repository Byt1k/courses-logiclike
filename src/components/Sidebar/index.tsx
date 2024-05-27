import React, { FC } from 'react'
import s from './index.module.scss'
import SidebarItem from './Item'

const Sidebar: FC<IProps> = ({ tags, selectedTag, setSelectedTag }) => {
    return (
        <div>
            <div className={s.sidebar}>
                {/* Применение индекса в качестве ключа смогу объяснить ) */}
                {['', ...tags].map((tag, i) => (
                    <SidebarItem
                        key={'sidebarItem-' + i}
                        item={tag}
                        selectedTag={selectedTag}
                        setSelectedTag={setSelectedTag}
                    />
                ))}
            </div>
        </div>
    )
}

export default Sidebar

interface IProps {
    tags: string[]
    selectedTag: string
    setSelectedTag: (value: string) => void
}