const Filter = ({ onFilter }) => {

    const handleChange = (e) => {
      onFilter(e.target.value)
    }
    return <>
      filter shown with <input onChange={handleChange} />
    </>
  }

  export default Filter