import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormField {
  fname: String
}

export default function FormScreen() {
  const [ inputVal, setInputVal ] = useState<FormField>();
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    setInputVal(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label><br/>
        <input type="text" id="name"
          {...register('fname', {required: true})} />
        {errors.fname && <p>Please enter your name</p>}
        <br/>
        <button type="submit">Submit</button>
      </form>
      {inputVal?.fname &&
         (
        <p>My name is: "{inputVal?.fname}"</p>
        )
      
      }
    </div>
  )
}
