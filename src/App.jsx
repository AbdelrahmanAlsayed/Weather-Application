import Layout from "./components/Layout"
import AppProvider from "./context/AppContext"

function App() {
    return (
        <AppProvider>
            <Layout/>
        </AppProvider>
    )
}

export default App;
