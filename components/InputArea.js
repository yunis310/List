import React, { useState } from "react";
import styles from "../styles/inputarea.module.css";
import AddIcon from "@mui/icons-material/Add";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className={styles.form}>
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>
          <AddIcon />
        </span>
      </button>
    </div>
  );
}

export default InputArea;
