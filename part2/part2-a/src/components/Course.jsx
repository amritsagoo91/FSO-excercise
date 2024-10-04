
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Header = ({ name }) => <h1>{name}</h1>
const Content = ({ parts }) => {
  return (
    <>
      {
        parts.map((part) => <Part key={part.id} part={part} />)
      }
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <h4>
      Total of {parts.reduce((sum, part) => sum += part.exercises, 0)} exercises
    </h4>
  )
}

const Course = ({ course }) => {
  return (<>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>)
}

export default Course