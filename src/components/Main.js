import React from "react"

function GetList() {
  const listItems = ['Lorem', 'Ipsum','dolar', 'duck'];

  return (
    <div>
      <ul>
      <li>
        { listItems.map((value, index) => {
          return <li key={index}> 
            <label for="checkbox">{value}</label>
            <input type="checkbox" 
              name="checkbox" 
              value="{value}"
              onClick={CheckIt}></input> 
            </li>
        })}
        </li>
      </ul>
    </div>

  );
}

function CheckIt(){
  return (
    console.log('eeeehhhhyyy')
  );
}


function getListItem(index) {

}


function Main () {
  return (
    <div>
      <GetList />
    </div>
  );
}

export default Main