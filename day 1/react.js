import React from "react";
import ReactDOM from "react-dom";

// Define your React components using React.createElement
const App = React.createElement(
  "div",
  { className: "App" },
  Header(),
  Experience(),
  Education(),
  Skills(),
  Hobbies()
);

function Header() {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Suhel Mulla"),
    React.createElement("p", null, "Software Developer"),
    React.createElement(
      "a",
      { href: "https://www.linkedin.com/in/suhel-mulla-a66a5420a/" },
      "LinkedIn"
    ),
    React.createElement(
      "a",
      { href: "https://github.com/SMulla786" },
      "Github"
    ),
    React.createElement("hr", null)
  );
}

function Experience() {
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "Experience"),
    React.createElement("h4", null, "Software Developer at Amazon"),
    React.createElement(
      "p",
      null,
      "I work with Amazon in the transportation team. Some more description ",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ",
      "ullam! Maxime officiis consequuntur libero eaque reprehenderit quisquam ",
      "nam ab vitae totam id commodi laborum enim, sint ea odit quasi soluta! ",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iusto ",
      "ut praesentium modi. Incidunt atque voluptatem, dignissimos officiis ",
      "reprehenderit est!"
    ),
    React.createElement("hr", null)
  );
}

function Education() {
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "Education"),
    // Add your education details here
    React.createElement("hr", null)
  );
}

function Skills() {
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "Skills"),
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, "Java"),
      React.createElement("li", null, "JavaScript"),
      React.createElement("li", null, "Testing"),
      React.createElement("li", null, "API Designing"),
      React.createElement("li", null, "System Design")
    ),
    React.createElement("hr", null)
  );
}

function Hobbies() {
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "Hobbies"),
    React.createElement(
      "ol",
      null,
      React.createElement("li", null, "Table Tennis"),
      React.createElement("li", null, "Reading Books"),
      React.createElement("li", null, "Biography"),
      React.createElement("li", null, "Teaching")
    )
  );
}

// Render the App component to the root element
ReactDOM.render(App, document.getElementById("root"));
