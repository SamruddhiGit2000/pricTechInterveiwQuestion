import { jsonObj } from '././data/data';
function InputDataForm(props:any){

    function handleFormSubmit(e:any){
        e.preventDefault();
        jsonObj.push([props.fname,props.lname, props.cname]);
        props.fnamehandle("");
        props.lnamehandle("");
        props.cnamehandle("");
      }
    return <>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Firstname
              </label>
              <input id='username' type='text' name="inputFName" placeholder="Enter your Firstname" value={props.fname} onChange={(e)=>{props.fnamehandle(e.target.value)}}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                Lastname
              </label>
              <input id='lastname' type='text' name="inputLName" placeholder="Enter your Lastname" value={props.lname} onChange={(e)=>{props.lnamehandle(e.currentTarget.value)}}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="compname">
                Companyname
              </label>
              <input id='compname' type='text' name="inputCName" placeholder="Enter your Companyname" value={props.cname} onChange={(e)=>{props.cnamehandle(e.currentTarget.value)}}/>
            </div>
            <div className="flex items-center justify-between">
              <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Add Person"/>
            </div> 
          </form>
        </div>
    </>

}

export default InputDataForm;