import { useState, useCallback } from 'react'

const useInput = (initialState) => {
    const[value, setValue] = useState(initialState);
      const onChange = useCallback(e => {
        setValue(e.target.value)
      }, [])
  return [value, onChange]
}

export default useInput;
