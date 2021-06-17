import { useState, useEffect } from 'react';
import produce from 'immer';

const Notes = props => props.data.map(note => <div>{note.text}</div>);

export default () => {
  const initialData = [{ text: 'Loading Journal Entries ... ' }];
  const [data, setData] = useState(initialData);

  const handleClick = () => {
    const text = document.querySelector('#noteinput').value.trim() + ': ' + Date().toLocaleString();

    if (text) {
      const nextState = produce(data, draftState => {
        draftState.push({ text });
      });
      document.querySelector('#noteinput').value = '';

      if (typeof window !== 'undefined') {
        localStorage.setItem('data', JSON.stringify(nextState));
      }

      setData(nextState);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getData = localStorage.getItem('data');

      if (getData !== '' && getData !== null) {
        return setData(JSON.parse(getData));
      }
      return setData([]);
    }
  }, 0);
  const styleObj = {
    fontSize: 30,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "40px",
}
  return (
    <>
      <p style={styleObj}> Journaling is scientifically proven to elevate your mood and improve overall well-being</p>
      <input id="noteinput" style={{ width: '80%' }} type="text" placeholder="Enter a new journal entry" />
      <button onClick={() => handleClick()}>Add journal entry</button>
      <Notes data={data} />
    </>
  );
};
