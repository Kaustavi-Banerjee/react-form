import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormField {
  fname: string,
  options: string
}

export default function FormScreen() {
  const [ inputVal, setInputVal ] = useState<FormField>();
  const { register, handleSubmit, reset, formState: {errors} } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    setInputVal(data);
    reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label>Name</label><br/>
          <input type="text" id="name"
            {...register('fname', {required: true})} />
          {errors.fname &&
          <p className="text-danger">Please enter your name</p>}
        </div>
        <div>
          <label htmlFor="options">
            Choose any option
          </label>
          <div>
            <input type="radio" {...register('options', {required: true})}
            value="optionA" />
            option A
          </div>
          <div>
            <input type="radio" {...register('options', {required: true})} 
            value="optionB" />
            option B
          </div>
          <div>
            <input type="radio" {...register('options', {required: true})} 
            value="optionC" />
            option C
          </div>
          {errors.options &&
          <p className="text-danger">Please select any one option.</p>}
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
        {inputVal?.fname &&(
        <p>My name is: "{inputVal?.fname}"</p>
        )}
        {inputVal?.options &&(
        <p>Choose option: "{inputVal?.options}"</p>
        )}
    </div>
  )
}
