import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandeler = (event) => {
    event.preventDefault();
    
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      return;
    }

    if (+enteredAge < 1){ // parse to Int
      return;
    }

    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandeler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandeler = (event) => {
    setEnteredAge(event.target.value);
  };



  return (
    <div>
    <ErrorModal title ="An error occured!" message="Somethings went wrong"/>
    <Card className={classes.input}>
      <form onSubmit={addUserHandeler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandeler}/>

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandeler}/>

       <Button type="submit">Add User</Button>
       
      </form>

    </Card>
    </div>
  );
};

export default AddUser;
