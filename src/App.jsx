import AppName from "./Components/AppName"
import AddItems from "./Components/AddItems"
import { ContextProvider } from "./Store/StoRE"
import Tasks from "./Components/Tasks"
import WelcomeMess from "./Components/WelcomeMess"
export default function App()
{
  return<>
  <ContextProvider>
    <AppName></AppName>
    <AddItems></AddItems>
    <WelcomeMess></WelcomeMess>
    <Tasks></Tasks>
  </ContextProvider>
  </>
}