import { useState } from "react";
import "./styles.css";


export default function SquidCursor() {

window.requestAnimFrame =function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback);
        }
    );
};

return (
    <div
      className="colsel"
    >
        <canvas id="canvas"></canvas>
    </div>
      );
    }