import React from "react";
import { useState, useEffect } from "react";
import { FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from 'react-toastify';

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
   // console.log(e.target);
   const name=e.target.name;
   const value=e.target.value;
   //console.log(`${name} and ${value}`)
   setValues({...values,[name]:value})
  };
  const onSubmit = (e) => {
    e.preventDefault();
   // console.log(e.target);
   const {name,email,password,isMember}=values;
   if(!email || !password || (!isMember && !name)){
    toast.error('please fill out all the fields..')
   }
  };
  const toggleMember = () => {
    console.log(values);
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'register'}</h3>
        {/*name*/}
        {!values.isMember && <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />}
        
        {/*email*/}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/*password*/}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>{values.isMember ? 'not a member yet' : 'already a member?'}
           <button className="member-btn" type="button" onClick={toggleMember}>
         {values.isMember ? 'register': 'login'}
        </button>
        </p>
       
      </form>
    </Wrapper>
  );
};

export default Register;
