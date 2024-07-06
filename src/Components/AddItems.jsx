import { useRef ,useContext} from "react"
import { Itemcontext } from "../Store/StoRE";
export default function AddItems()
{
    const nameref=useRef();
    const dateRef=useRef();
    const {AddItem}=useContext(Itemcontext);
    function handleAdd()
    {    
        if(nameref.current.value.length==0&&dateRef.current.value.length==0){
        alert("Give data first")
        return;
        }
        AddItem({task:nameref.current.value,duedate:dateRef.current.value});
        
        nameref.current.value='';
        dateRef.current.value='';
    }
    return<>
       <center>
        <div style={{color:"grey", fontSize:"40px"}}>Adding prompt</div>
        <label htmlFor="inputdata" style={{margin:"30px", fontSize:"30px" ,color:"green" }}>
            Your Task:
        </label>
        <input type="text" id="inputdata" ref={nameref} style={{width:"200px", height:"30px", fontSize:"25px"}}/>
        <label htmlFor="date"  style={{margin:"30px", fontSize:"30px" ,color:"green" }}> Duedate : </label>
        <input type="date" ref={dateRef} id="dateRef" style={{width:"180px", height:"30px",fontSize:"25px"}}/>
        <button onClick={()=> handleAdd()
            
        } style={{width:"60px", height:"40px", margin:"20px", borderRadius:"40%"}}>Add</button>
       </center>
    </>
}