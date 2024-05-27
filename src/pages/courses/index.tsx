import React, { useEffect, useState } from 'react'
import s from './index.module.scss'
import Sidebar from '../../components/Sidebar'
import Courses from '../../components/Courses'
import { ICourse } from '../../types'

const CoursesPage = () => {
    const [courses, setCourses] = useState<ICourse[]>([])
    const [tags, setTags] = useState<string[]>([])
    const [selectedTag, setSelectedTag] = useState('')

    // Получение даннных
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://logiclike.com/docs/courses.json')
                    .then(res => res.json())
                setCourses(res)
            } catch (e) {
                //
            }
        }
        fetchData()
    }, [])

    // Получение тэгов из данных
    useEffect(() => {
        const allTags: string[] = []

        courses.map(course => allTags.push(...course.tags))

        const newSet = new Set(allTags)
        const uniqueTags = Array.from(newSet)

        setTags(uniqueTags)
    }, [courses])

    return (
        <div className={s.wrapper}>
            <Sidebar
                tags={tags}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
            />
            <Courses courses={courses} selectedTag={selectedTag} />
        </div>
    )
}

export default CoursesPage
