import React, { FC, memo } from 'react'
import classnames from 'classnames'
import s from "./index.module.scss"

const SidebarItem: FC<IProps> = memo(({ item, selectedTag, setSelectedTag }) => {
    return (
        <button
            className={classnames(
                s.sidebar__item,
                selectedTag === item && s.sidebar__item_active
            )}
            onClick={() => setSelectedTag(item)}
        >
            {!item ? 'Все темы' : item}
        </button>
    )
})

export default SidebarItem

interface IProps {
    item: string
    selectedTag: string
    setSelectedTag: (value: string) => void
}
