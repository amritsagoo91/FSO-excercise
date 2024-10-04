import React, { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Personform from './components/Personform'


function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filterList, setFilterList] = useState(persons)


  const addPerson = (newPerson) => {
    setPersons(persons.concat(newPerson))
    setFilterList(persons.concat(newPerson))
  }

  const onFilter = (filterName) => {
    const filteredList_ = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
    setFilterList(filteredList_)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilter={onFilter} />
      <h2>Add a new</h2>
      <Personform addPerson={addPerson} persons={persons} />
      <h2>Numbers</h2>
      <ul>

        {
          filterList.map((person) =>
            <Person key={person.id} person={person} />
          )
        }
      </ul>
    </div>
  )
}

export default App
