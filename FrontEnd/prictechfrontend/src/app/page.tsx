'use client';
import { useState } from "react";
import { jsonObj } from '././data/data';
import PersonTable from './PersonTable';

export default function Home(): any {
  const [inputFName, setInputFName] = useState<any|string>("");
  const [inputLName, setInputLName] = useState<any|string>("");
  const [inputCName, setInputCName] = useState<any|string>("");
  const [isAddedActive, setIsAddedActive] = useState<any>(false);
  
  function handleFormSubmit(e:any){
    e.preventDefault();
    fetch("http://localhost:5000/person/update",{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body: JSON.stringify({fname:`${inputFName}`,lname:`${inputLName}`,cname:`${inputCName}`})
    }).then(response=>response.json()).then(data=>console.log(data+ "send to API")).catch(error=>console.log(error))
    .finally(()=>console.log("end"));
    setInputFName("");
    setInputLName("");
    setInputCName("");
  }
  return (
    <>
      <PersonTable fname={inputFName} lname={inputLName} cname={inputCName} handlefname={(e:any)=>setInputFName(e.currentTarget.value)}/>
      <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      onClick={()=>setIsAddedActive(!isAddedActive)}
      >
        Add Person/Hide InputBox
      </button>
      {isAddedActive && 
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Firstname
              </label>
              <input id='username' type='text' name="inputFName" placeholder="Enter your Firstname" value={inputFName} onChange={(e)=>{setInputFName(e.currentTarget.value)}}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                Lastname
              </label>
              <input id='lastname' type='text' name="inputLName" placeholder="Enter your Lastname" value={inputLName} onChange={(e)=>{setInputLName(e.currentTarget.value)}}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="compname">
                Companyname
              </label>
              <input id='compname' type='text' name="inputCName" placeholder="Enter your Companyname" value={inputCName} onChange={(e)=>{setInputCName(e.currentTarget.value)}}/>
            </div>
            <div className="flex items-center justify-between">
              <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Add Person"/>
            </div> 
          </form>
        </div>
      }
    </>
  );
}
