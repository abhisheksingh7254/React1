const heading = React.createElement("h1", {
    id:"heading",
    class:"heading"
}, "Hello World By React");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
