import  React, {useState } from "react";
import "./styles.css";
import "./photo.jpg";

export default function MultiDrop() {

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
//good start but not complete yet
// works ish, but keeps looping the second movement/image
// need to wrap a for each loop round the functions so each drag 
//prompts a check and clear of the previous stored iteration
  return (
    <>
    <div>
    <br></br>

    <h2>Multi drop</h2>
    <section className="container">
     <div id="div1" className="box" onDrop={drop} onDragOver={allowDrop} onDoubleClick={drag}>
     <div className="image" draggable="true" onDragStart={drag} id="drag1" />
     </div>

     <div className="box" onDrop={drop} onDragOver={allowDrop} onDoubleClick={drag}></div>
     <div className="box" onDrop={drop} onDragOver={allowDrop} onDoubleClick={drag}></div>
     <div className="box" onDrop={drop} onDragOver={allowDrop} onDoubleClick={drag}></div>
     <div className="box" onDrop={drop} onDragOver={allowDrop} onDoubleClick={drag}></div>
     <div className="box" onDrop={drop} onDragOver={allowDrop} onDoubleClick={drag}></div>
     </section>
     </div>
    </>
  )
}