import { useContext } from "react"
import {ThemeContext} from "./themecontext"


export default function ContentOfContext(){
    const themeContext = useContext(ThemeContext)
    return (
        <>
        <p className={themeContext.theme}>
        The static import declaration is used to import read-only live bindings
        which are exported by another module. The imported bindings are called
        live bindings because they are updated by the module that exported the
        binding, but cannot be re-assigned by the importing module. In order to
        use the import declaration in a source file, the file must be
        interpreted by the runtime as a module. In HTML, this is done by adding
        type="module" to the tag. Modules are automatically interpreted in
        strict mode. There is also a function-like dynamic import, which does
        not require scripts of type="module".
      </p>
        </>
    )
}