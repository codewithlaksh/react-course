import Button from "./components/Button"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Button style={{ backgroundColor: "blue", borderRadius: "16px", color: "white", border: "none", padding: "8px 16px" }} show>
        <h3>Submit</h3>
      </Button>
    </>
  )
}

export default App