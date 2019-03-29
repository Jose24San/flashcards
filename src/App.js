import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import { arrayFlashCardData } from "./data/array";
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import './App.css';
import Highlight from 'react-highlight'



class Main extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <div className='content-wrapper'>
          <CardContainer/>
        </div>
      </div>
    );
  }
}

export default Main;