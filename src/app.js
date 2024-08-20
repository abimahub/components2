import * as React from 'react';
import RenderDragDrop from './components/DragNDrop/AllowDrop';
import DragDrop from './components/DragNDrop';
import MultiDrop from './components/DragNDrop/MultiDrop';
"use client";
import './app.css';

function App() {
  return (
    <>
    <h1>
     Created a react app from scratch
    </h1>
    
    <RenderDragDrop />
    
    <DragDrop />
    
    <MultiDrop />
    </>
  )
};
export default App
