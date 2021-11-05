import "./App.css";
import { Global, css } from "@emotion/react";

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap");
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Roboto", sans-serif;
          }
          :root {
            --gray-1: #333333;
            --gray-2: #4f4f4f;
            --gray-4: #bdbdbd;
            --blue-1: #2f80ed;
            --blue-2: #2d9cdb;
            --red: #eb5757;
          }
        `}
      />
      <div className="App"></div>
    </>
  );
}

export default App;
