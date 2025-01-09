import { useEffect, useState } from 'react';
import { jsonObj } from '././data/data';
import Link from 'next/link';

function PersonTable(props:any):any{
    const [le,setLe] = useState<number>(jsonObj.length);
    const [flag, setFlag] = useState<boolean>(false);
    const [dataa, setDataa] = useState<any>({});

    useEffect(()=>{
        //fetch("http://localhost:4000").then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.error(error))
        (async()=>{
            const response = await fetch("http://localhost:5000");
            const data1 = await response.json();
            setDataa(data1);
            return data1;
        })()
    },[le])
    if(dataa.length===0){
        return "";
    }
    function handleRemoveElement(e){
        console.log(e)
        
    fetch(`http://localhost:5000/person/${e}`,{
        method:"DELETE"
      }).then(response=>response.json()).then(data=>console.log(data+ "send to API")).catch(error=>console.log(error))
    }
    return <>
        <h1>Person Details table: </h1>
        <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Firstname
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    LastName
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    CompanyName
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Update/Delete Button
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(dataa) && 
                                dataa.map((ele:any, index:number)=>{
                                    return (
                                        <tr key={index}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4">
                                                {ele.FirstName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ele.LastName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ele.ComponyName}
                                            </td>
                                            <td className="px-6 py-4">
                                            <button type="button" 
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            onClick={()=>{
                                                console.log("HandleEdit");
                                            }}
                                            >Edit</button>
                                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" 
                                            onClick={()=>{
                                                handleRemoveElement(ele.FirstName);
                                            }}>Remove</button>

                                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                <Link href="http://localhost:5000/person/[param]" as={`http://localhost:5000/person/${ele.FirstName}`} 
                                                className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</Link> */}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        {/* <tbody>
                            {jsonObj.map((item:any,index:any) =>{
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item[0]}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item[1]}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item[2]}
                                        </td>
                                        <td className="px-6 py-4">
                                        <button type="button" 
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={()=>{
                                            console.log(dataa)
                                        }}
                                        >Update</button>
                                        <button type="button" 
                                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        onClick={()=>{
                                            if(jsonObj.length===1){
                                                jsonObj.length=0;
                                                setLe(jsonObj.length);
                                            }else{
                                                jsonObj.splice(index,1)
                                            }
                                            setLe(jsonObj.length);
                                        }}
                                        >Delete</button>
                                        {/* {<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>} */}
                                        {/* </td>
                                    </tr>
                            )
                            })}
                        </tbody> */} 
                    </table>
            </div>
    
    </>

}
export default PersonTable;