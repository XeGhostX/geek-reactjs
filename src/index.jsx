import React, { useState } from 'react';
import ReactDOM from 'react-dom';


let def_messages = ['Привет', 'Как дела ?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

const App = () => {
   const [messages, setMessage] = useState(def_messages);

   const insertHello = () => {
      const newLine = 'Привет';
      setMessage(((prev) => [...prev, newLine]));
      console.log(messages);
   }

   return (
      <>
         <button onClick={insertHello}>Отправить: "Привет"</button>
         <MessageField messages={ messages } />         
      </>
   );
}

ReactDOM.render(
   <App />,
   document.getElementById('root'),
);