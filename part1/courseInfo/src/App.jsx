const Course = ({ course }) => {
  return <p>{course.name}</p>;
};

const Part = ({ name, excercises }) => {
  return (
    <p>
      {name}:: {excercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part name={part.name} excercises={part.exercises} />
      ))}
    </>
  );
};

const Total = (props) => {
  return <p>Total:: {props.total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const totalExcercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );

  return (
    <>
      <Course course={course} />
      <Content parts={course.parts} />
      <Total total={totalExcercises} />
    </>
  );
};
export default App;
