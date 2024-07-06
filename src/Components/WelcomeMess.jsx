import { Itemcontext } from "../Store/StoRE"
import { useContext } from "react"
export default function WelcomeMess()
{
    const {AllItems}=useContext(Itemcontext)
     if(AllItems.length==0){
        return<>
        <center>
          <div style={{fontSize:"30px", color:"aqua"}}> Sorry Nothing is there to show right now <br />Add something before </div>
          </center>
        </>
     }
     return<>
     <center>
        <div style={{color:'blue',fontSize:"30px"}}> 
            You have these many tasks pending
        </div>
        </center>
     </>
}