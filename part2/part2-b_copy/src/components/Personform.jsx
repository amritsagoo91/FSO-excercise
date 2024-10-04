import React, { useState } from 'react'
const Personform = ({ addPerson, persons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const handleSubmit = (e) => {
      e.preventDefault();
      const exist = persons.some(person => person.name.toLowerCase().trim() === newName.toLowerCase().trim());
      if (exist) {
        alert(`${newName} is already exists`)
      } else {
        const newPersonObject = { name: newName, number: newNumber, id: persons.length + 1 }
        addPerson(newPersonObject);
        setNewName('')
        setNewNumber('')
      }
    }
    return (<>
      <form onSubmit={handleSubmit}>
        <div>
          name:: <input placeholder='Add name' value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number:: <input placeholder='Add number' value={newNumber} onChange={e => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </>)
  }

  export default Personform