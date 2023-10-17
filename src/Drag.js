import React, { useState } from 'react'


function Drag() {

    // const [items, setItems] = useState(['html', 'css', ' javascript', 'React'])

    const [items, setItems] = useState([
        { id: 1, value: "html" },
        { id: 2, value: 'css' },
        { id: 3, value: "javascript" },
        { id: 4, value: "React" }

    ])

    const [selected, setSelected] = useState([])
    const [transfer , setTransfer] = useState([])

    function handleControl(e) {

        if(e.target.checked === true){
            // console.log(e.target.id)
         setSelected([...selected,{id: e.target.id , value: e.target.value}])
        }

        else{
    setSelected(
        items.filter((filterList)=>{
            return filterList.id !== e.target.id
        })
    )
        }
   }
// console.log(selected)


function moveLeft(){
      
   setTransfer([...selected])
   
}


// function moveRight(){
// setItems([...selected])
// }
    return (    
        <>
            <div>

                <div className='left'>
                    <ul>
                        {
                            items.map((list, index) => {
                                return (
                                    <li key={index}>
                                        <input type='checkbox' id  = {list.id} value={list.value} onChange={handleControl} />
                                        {list.value }
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <button onClick={moveLeft}>left</button>
                <button >right</button>


                <div>
                    <ul>
                        {
transfer.map((newlist , index)=>{
    return(
        <li>
            <input type='checkbox' id={newlist.id} 
            value={newlist.value} 
            
            />
            {newlist.value}
        </li>
    )
})
                        }
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Drag
