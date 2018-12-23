import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/MainBar";
import "./index.css";
import "react-sweet-progress/lib/style.css";

ReactDOM.render(
    <Main/>,
    document.getElementById("root")
);

// $(document).ready(function() {
//     $('#example').DataTable( {
//         "scrollX": true
//     } );
// } );