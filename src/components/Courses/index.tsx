import React from 'react'
import s from './index.module.scss'
import CoursesItem from './CoursesItem'
import { ICourse } from '../../types'

const Courses = ({ courses, selectedTag }: { courses: ICourse[], selectedTag: string }) => {
    return (
        <div className={s.courses}>
            {courses
                .filter(course => selectedTag
                    ? course.tags.some(tag => tag === selectedTag)
                    : true
                )
                .map(course => (
                    <CoursesItem key={course.id} course={course} />
                ))
            }
        </div>
    )
}

export default Courses