import * as React from "react";
import "./styles.css";
import "./photo.jpg";


export default function DragDrop() {

    //DOM elements
   const boxes = document.querySelectorAll(".box"),
   image = document.querySelector(".image");

   //loop through each boxes element
   boxes.forEach((box) => {
    //when draggable element dragged over box element
    box.addEventListener("dragover", (e) => {
        e.preventDefault(); //prevent default behaviour
        box.classList.add("hovered");
    });
    
    //when a draggable element leaves a box element
    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered");
    });

    //when a draggable element is dropped on a box element
    box.addEventListener("drop", (e) => {
        e.preventDefault(); //prevent default behaviour
        box.appendChild(image);
        box.classList.remove("hovered");
    });
   });

    return (
        <>
        <div>
        <br></br>
        
        <h2>Multi drag n drop</h2>
            <section className="container">
                <div className="box">
                    <div className="image" draggable="true"></div>
                </div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </section>
            </div>
        </>
    )
}



