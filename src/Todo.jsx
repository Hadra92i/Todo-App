import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { mobile } from "./responsive";
import { db } from "./firebase_config";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const Box = styled.div`
  width: 523.8px;
  height: 60px;
  padding: 1rem;
  border-radius: 5px;
  background-color: #fff;
  margin: 0.6rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "94%",
  })}
`;

const Todo = ({ id, name, isCompleted }) => {
  const toggleCompleted = async () => {
    const todoToUpdate = doc(db, "todos", id);
    await updateDoc(todoToUpdate, {
      isCompleted: !isCompleted,
    });
    Swal.fire("Success", "Task completed !", "success");
  };

  const deleteTodo = async () => {
    try {
      await deleteDoc(doc(db, "todos", id));
      Swal.fire("Success", "Task deleted successfully !", "success");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box onDoubleClick={toggleCompleted}>
      <div>
        <p>{name}</p>
        <p style={{ fontSize: "12.5px" }}>
          {isCompleted ? (
            <span style={{ color: "green" }}>Completed</span>
          ) : (
            <span style={{ color: "blueviolet" }}>In Progress</span>
          )}
        </p>
      </div>
      <FaTrashAlt
        onClick={deleteTodo}
        style={{ color: "red", marginLeft: "6px", cursor: "pointer" }}
      />
    </Box>
  );
};

export default Todo;
