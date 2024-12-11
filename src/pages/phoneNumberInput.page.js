import { useState } from 'react';
import GlobalConfig from '../global';

export default function PhoneNumberInputPage() {

    const currentFile = import.meta.url;
    const currentFileName = currentFile.slice(currentFile.lastIndexOf("/")+1)


    /**
      * * * * * * * * * * * * * * * * * * * * 
      *          Core code start            * 
      * * * * * * * * * * * * * * * * * * * * 
    */

    const [phone, setPhone] = useState('');

    function handelInputChange(e){
        let inputVal = e.target.value;

        //only accept number
        inputVal = inputVal.replace(/\D/g,"");

        if(inputVal.length > 10){
            inputVal = inputVal.slice(0,10);
        }

        if(inputVal.length >= 7){
            inputVal = `(${inputVal.slice(0,3)})${inputVal.slice(3,6)}-${inputVal.slice(6,10)}`
        }else if(inputVal.length >= 4) {
            inputVal = `(${inputVal.slice(0,3)})${inputVal.slice(3)}`;
        }

        setPhone(inputVal)
    }

    /**
      * * * * * * * * * * * * * * * * * * * * 
      *          Core code end              * 
      * * * * * * * * * * * * * * * * * * * * 
    */


    return (
        <div className="pageContainer">
            <div className="questionBox">
                <h1>Amazon Customer Reviews Example</h1>
                <pre>
                    <code>
                        {`
 Create a PhoneNumberInput component.

 only accepts numerical digits

 format the number automatically as (123)456-7890 by
    1. adding the parenthesis when the 4th digit is entered
    2. adding '-' before 7th digit

 You can use the default text input without any styling.`}
                    </code>
                </pre>
            </div>
            <div className="answerContainer">
                <p><a target='_blank' href={GlobalConfig.GITHUB_URL+currentFileName}>View Source Code</a></p>
                <input
                    value={phone}
                    onChange={handelInputChange}
                />
            </div>
        </div>
    )
}