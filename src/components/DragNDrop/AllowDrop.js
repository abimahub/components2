import  React, {useState } from "react";
import "./styles.css";
import "./photo.jpg";

export default function RenderDragDrop() {

 const boxes = document.querySelectorAll(".box");
 const image = document.querySelector(".image");


  
      function allowDrop(ev) {
        ev.preventDefault();
      }
  
      function drag(ev) {
        ev.dataTransfer.setData(image, ev.target.id);
      }
  
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData(image); 
        ev.target.appendChild(document.getElementById(data));
      }
  

  return (
    <>
    <section className="container">
     <h2>Simple drag n drop</h2>
     <p>Drag the image back and forth between the two div elements.</p>

     <div id="div1" className="box" onDrop={drop} onDragOver={allowDrop} onDoubleClick={drag}>
     <div className="image" draggable="true" onDragStart={drag} id="drag1" />
     </div>

     <div className="box" onDrop={drop} onDragOver={allowDrop} onDoubleClick={drag}></div>
     </section>
     <br></br>
     <br></br>
    </>
  )
}