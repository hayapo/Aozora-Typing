import { TypingTemplate } from "./components/templates/TypingTemplate"
import { Title } from "./components/atoms/Title"

function App() {
  const siteTitle= "Aozora Typing"
  return (
    <div className="mx-20 max-h-screen overflow-hidden">
      <div className="mt-8 flex justify-center">
        <Title titleText={siteTitle}/>
      </div>
      <div className="mt-[-10rem] flex min-h-screen place-content-center items-center">
        <TypingTemplate />
      </div>
    </div>
  )
}

export default App
