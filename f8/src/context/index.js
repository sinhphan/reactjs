import { useContext } from "react";
import ContentOfContext from "./content";
import {ThemeContext} from "./themecontext";

function TestContext() {
    const themecontext = useContext(ThemeContext)
    console.log(themecontext)
  return (
    <>
      <button 
        onClick={themecontext.toggleTheme}
      >
        Toggle theme
      </button>
      <ContentOfContext />
    </>
  );
}

export default TestContext
