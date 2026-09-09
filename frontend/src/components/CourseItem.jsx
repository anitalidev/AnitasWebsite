export default function CourseItem({ course }) {
    return (
        <div className='course-row'>
            <div className='course-icon' />
            <span className='course-title'>{course.title}</span>
            <span className='course-received'>{course.received}</span>
            <span className='course-date'>{course.date}</span>
        </div>
    )
}
