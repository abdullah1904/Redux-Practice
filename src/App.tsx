import { CounterButtons, CounterDisplay } from "./components/Counter"
import PostsList from "./components/PostsList"

const App = () => {

  return (
    <>
      <CounterDisplay />
      <CounterButtons />
      <PostsList/>
    </>
  )
}

export default App