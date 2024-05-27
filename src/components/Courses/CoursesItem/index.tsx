import React, { memo } from 'react'
import s from './index.module.scss'
import { ICourse } from '../../../types'

const CoursesItem = memo(({ course }: { course: ICourse }) => {
    return (
        <div>
            <div className={s.course}>
                <div className={s.course__image} style={{ backgroundColor: course.bgColor }}>
                    <img src={course.image} alt={course.name} />
                </div>
                <div className={s.course__title}>
                    {course.name}
                </div>
            </div>
        </div>
    )
})

export default CoursesItem