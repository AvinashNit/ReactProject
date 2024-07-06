import { useContext } from "react"
import { Itemcontext } from "../Store/StoRE"
import Task from "./Task"
export default function Tasks()
{
  const {AllItems,DeleteItem}=useContext(Itemcontext)
    return<>
       <center>
        {
            AllItems.map(item=> <Task item={item} key={item.task} DeleteItem={DeleteItem}></Task>   )
        }
       </center>
    </>
}