import { createContext ,useReducer,useContext} from "react";
export const Itemcontext=createContext({AllItems:[],AddItem:()=>{},DeleteItem:()=>{}});
function Reducer(Current,action){
    switch(action.type)
    {
        case 'add':
            Current=[...Current,{task:action.payload.task , duedate:action.payload.duedate}];
            break;
            case "delete":
            Current=Current.filter(item=>item.task!=action.task );
            break;
    }
    
    

    return Current;
}
 export function ContextProvider({children})
{
    const [ItemState,dispatch]=useReducer(Reducer,[]);
    function Add(item)
    {
            dispatch({type:"add",payload:{task:item.task,duedate:item.duedate}});
    }
    function Delete(task)
    {
        dispatch({type:"delete",task:task});
    }
    return<>
    <Itemcontext.Provider
       value={{AllItems:ItemState,AddItem:Add,DeleteItem:Delete}}>
            {
                children 
            }
            </Itemcontext.Provider>
    </>

}
