import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Progress} from 'semantic-ui-react';

function App() {
  return (
    <div>
      <p>안녕하세요</p>
      <Button primary>hi hi hi</Button>
      <Progress percent = {66}></Progress>
    </div>
  );
}

export default App;
