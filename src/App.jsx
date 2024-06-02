import Chats from "./components/chats/Chats"
import Details from "./components/details/Details"
import Lists from "./components/lists/Lists"
import Logins from "./components/login/Logins"
import Notifications from "./components/notifications/Notifications"


const App = () => {
  const user = true
  return (
    <div className='w-[90vw] h-[90vh]  container flex'>
    
    {
      user ? <>
      <div className="w-[30%] flex">
      <Lists/>
    </div>
    <div className="w-[45%] flex">
   <Chats/>
    </div>
    <div className="w-[25%]">
    <Details/>
    </div>
      </> : <Logins/>
    }

    <Notifications/>
    </div>
  )
}

export default App