import UserGreeting from './UserGreeting'

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="BroCode" />
      <UserGreeting isLoggedIn={false} username="False BroCode" />
    </>
  )
}

export default App
