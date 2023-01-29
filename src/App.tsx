import { TypingArea } from "./components/organisms/TypingArea"
import { Title } from "./components/atoms/Title"

function App() {
  const siteTitle= "Aozora Typing"
  return (
    <div>
      <Title titleText={siteTitle}/>
      <TypingArea />
    </div>
  )
}

export default App
