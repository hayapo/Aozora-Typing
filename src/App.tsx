import { TypingTemplate } from "./components/templates/TypingTemplate"
import { Title } from "./components/atoms/Title"

function App() {
  const siteTitle= "Aozora Typing"
  return (
    <div className="min-w-full">
      <Title titleText={siteTitle}/>
      <TypingTemplate />
    </div>
  )
}

export default App
