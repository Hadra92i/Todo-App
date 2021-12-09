import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "./responsive";
import { db } from "./firebase_config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

const Form = styled.form``;

const Input = styled.input`
  padding: 1rem;
  text-indent: 2px;
  width: 75%;
  border: none;
  outline: none;
  margin-left: 15px;
  border-radius: 5px;
  ${mobile({
    width: "64%",
    marginLeft: "12px",
    padding: "1rem 1.5rem",
    textIndent: "0px",
    fontSize: "14px",
  })}
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  margin-left: 3px;
  text-transform: uppercase;
  background-color: #5396e7;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  ${mobile({
    padding: "1.03rem 1.5rem",
    fontSize: ".9rem",
  })}
`;

const AddTodo = () => {
  const [todo, setTodoText] = useState("");

  const createTodo = async (e) => {
    e.preventDefault();
    try {
      if (todo === "") {
        Swal.fire("Erreur", "Veillez saisir une tache !", "error");
      } else {
        const newTodo = await addDoc(collection(db, "todos"), {
          name: todo,
          isCompleted: false,
          timestamp: serverTimestamp(),
        });
        setTodoText("");
        Swal.fire("Succès", "La tache à été ajoutée avec succès !", "success");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form>
      <Input
        type="text"
        placeholder="Saisir une nouvelle tache à faire"
        value={todo}
        onChange={(e) => setTodoText(e.target.value)}
      ></Input>
      <Button onClick={createTodo}>Ajouter</Button>
    </Form>
  );
};

export default AddTodo;
