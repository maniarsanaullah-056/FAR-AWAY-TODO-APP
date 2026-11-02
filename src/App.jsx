import { useState } from 'react'

import './App.css'

function App() {
  const [itemsList, setItemsList] = useState([])

  return (
    <>
     <Logo />
      <Form      itemsList={itemsList} setItemsList={setItemsList} />
      <PackageingList   itemsList={itemsList} setItemsList={setItemsList}  />
     <Stats   itemsList={itemsList} /> 
    
         
    
       
    </>
  )
}

export default App


function Logo() {
 return (
  <h1 style={{
    backgroundColor:"#f19720",
    padding:"15px",
    textAlign:"center",
  }}>FAR AWAY TODO APPLICATION</h1>
 )
  
};


const Form=({itemsList , setItemsList})=>{
const [itemNumber,setItemNumber] = useState()
const [itemData,setItemData] = useState()
const addHandler= ()=> {
  const newList =[...itemsList]
  newList.push({
    id:Date.now(),
    number:itemNumber,
    data:itemData,
    isPacked:false
  })
  setItemsList(newList)
  
}




const itemDataHandler = (value)=>{
  setItemData(value)
  console.log(value)
}

const itemNumberHandler = (value)=>{
  setItemNumber(value)
  console.log(value)
}



  return(
    <div id='form'>
      <p>What do you need for your trip? </p>
      <select name="" id="" onChange={(e)=> itemNumberHandler(e.target.value)} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    <input type="text" placeholder='Listitems' onChange={(e)=> itemDataHandler(e.target.value)} />
    <button onClick={addHandler}>ADD</button>
    </div>
  )
}

const PackageingList= ({itemsList , setItemsList}) => {
  return(
    <div id='packagetinglist'>
     <div id="itemssList">
      {
        itemsList?.map(itemLi => <Items   itemLi={itemLi} itemsList={itemsList} setItemsList={setItemsList} />)
      }
    
     </div>
     <div id="btns">
      <select name="" id="">
        <option value="">Sort by order input</option>
        <option value="">Sort by Descreption</option>
        <option value="">Sort by Pakced Status</option>
      </select>
      <button onClick={()=>setItemsList([])}>Clera List</button>
     </div>

    </div>
  )
}

const Stats = ({itemsList}) => {
  return(
    <>
    <p style={{
      backgroundColor:"#67c1a3",
      padding:"20px",
      textAlign:"center"
    }}>you have {itemsList.length} items on in list and you alredy package  {itemsList.filter((i)=> i.isPacked).length}
     ({Math.round(itemsList.filter((i)=> i.isPacked).length / itemsList.length * 100)|| 0 }%)</p>
    </>
  )
}

const Items = ({itemLi , itemsList ,setItemsList}) => {

 function listUpdateHandler(bool) {
   const newArr= itemsList.map((singleItem)=>{
   return singleItem.id === itemLi.id ? {
      ...itemLi,
      isPacked: bool
    }: singleItem
  })

  setItemsList(newArr)
 }


  return(
    <div id='items'>
      <input type="checkbox"  onChange={(e) => listUpdateHandler(e.target.checked)}   />
      <p style={{
        textDecoration:itemLi.isPacked ? "line-through" : "none"
      }}>{itemLi.number}-{itemLi.data}</p>
      <button style={{
        width:"15px",
        height:"15px",
        fontSize:"10px",
        border:"none"
      }}>X</button>
    </div>
  )
}