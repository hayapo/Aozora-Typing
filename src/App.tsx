import { TypingTemplate } from "./components/templates/TypingTemplate"
import { Title } from "./components/atoms/Title"

function App() {
  const siteTitle= "Aozora Typing"
  return (
    <>
      <div className="mt-4 flex justify-center">
        <Title titleText={siteTitle}/>
      </div>
      <TypingTemplate />
    </>
  )
}

export default App
