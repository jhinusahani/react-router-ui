import { useParams } from "react-router-dom"

const CoursesDetail = () => {
  const { courseId } = useParams()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">
        {courseId} Course Details
      </h1>
      <p className="text-gray-300">
        Get in-depth insights, structured lessons, and hands-on knowledge
        through this course.
      </p>
    </div>
  )
}

export default CoursesDetail
