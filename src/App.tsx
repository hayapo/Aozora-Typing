import { Title } from "./components/atoms/Title"
import { TypingPage } from "./components/page/TypingPage"

function App() {
  const siteTitle= "Aozora Typing"
  return (
    <>
      <div className="mt-4 flex justify-center">
        <Title titleText={siteTitle}/>
      </div>
      <TypingPage />
    </>
  )
}

export default App
