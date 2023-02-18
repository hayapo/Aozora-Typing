import { Title } from "./components/atoms/Title"
import { TypingPage } from "./components/page/TypingPage"

function App() {
  const siteTitle= "Aozora Typing"
  return (
    <div className="flex justify-center">
      <div className="absolute top-0 my-10">
        <Title titleText={siteTitle}/>
      </div>
      <TypingPage />
    </div>
  )
}

export default App
