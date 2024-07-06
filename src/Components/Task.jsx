export default function Task({item,DeleteItem})
{

    return<>
         <li style={{fontSize:"20px"}}>
            <span style={{margin:"10px"}}>
            {
                    item.task.toUpperCase()
            }
            </span>
            {
                item.duedate
            }
            <button onClick={()=> DeleteItem(item.task) } style={{width:"80px",height:"30px", borderRadius:"40px", margin:"30px"}}>Delete</button>
         </li>
    </>
}