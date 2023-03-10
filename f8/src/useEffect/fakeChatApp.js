import { useState, useEffect } from "react";

const lessons = [
    {
        id: 1,
        title: "Lesson 1",
        description: "Description 1"
    },
    {
        id: 2,
        title: "Lesson 2",
        description: "Description 2"
    },
    {
        id: 3,
        title: "Lesson 3",
        description: "Description 3"
    }
]

export default function FakeChatApp(){
    const [currentLesson, setCurrentlesson] = useState(1)

    const handleClickLesson = (id,e) => {
        setCurrentlesson(id)
    }

    useEffect(() => {
        const handleEvent = ({detail}) => {console.log(detail)}

        window.addEventListener(`lesson-${currentLesson}`, handleEvent)

        // clean up functions 
        return () => window.removeEventListener(`lesson-${currentLesson}`, handleEvent)
    },[currentLesson])

    return (
        <div >
            <ul className="fakechatapp">
                {
                    lessons.map(lesson =>(
                        <li 
                        key={lesson.id}
                        onClick = {
                            (e) => handleClickLesson(lesson.id,e)
                        }
                        className={currentLesson === lesson.id ? 'active':''}
                        >
                            {lesson.title}
                        </li>
                    ) )
                }
            </ul>
        </div>
    )


}