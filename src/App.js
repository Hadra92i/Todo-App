import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import AddTodo from './AddTodo';
import Footer from './Footer';
import { mobile } from "./responsive";
import Todo from './Todo';
import { db } from './firebase_config';
import { collection, getDocs } from 'firebase/firestore';

const Container = styled.div`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  ${mobile({
  margin: "2rem 0"
})}
`

const Title = styled.h2`
  font-weight: 400;
  text-align: center;
  margin: .8rem 0;
  color: #fff;
  ${mobile({
  fontSize: "1rem",
  margin: ".9rem 0",
})}
`

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  });

  const getTodos = async () => {
    const datas = [];
    const querySnapchot = await getDocs(collection(db, "todos"));

    querySnapchot.forEach(doc => {
      datas.push({ ...doc.data(), key: doc.id });
    });

    setTodos(datas);
  }

  return (
    <Container>
      <Title>Todo List Application With React JS & Firebase</Title>
      <AddTodo />
      {
        todos.map(todo => <Todo key={todo.key} id={todo.key} name={todo.name} isCompleted={todo.isCompleted} />)
      }
      <Footer />
    </Container>
  );
}

export default App;
