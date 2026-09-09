import education from "../data/education.js";
import CourseItem from "../components/CourseItem.jsx";
import Section from "../components/Section.jsx";

export default function EducationSection() {
    return (
        <Section>
            <div className='education-row'>
                <div className='education-header'>
                    <h3 className='education-title'>{education.title}</h3>
                    <p className='education-details'>{education.details}</p>
                </div>
                <p className='education-coursework-label'>Relevant Coursework</p>
                <div className='course-block'>
                    {education.coursework.map((course) => (
                        <CourseItem key={course.title} course={course} />
                    ))}
                </div>
            </div>
        </Section>
    )
}
