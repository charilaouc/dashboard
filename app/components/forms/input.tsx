'use client'

import { UseFormRegister,FieldValues, FieldErrors} from "react-hook-form";

interface InputProps{
    id: string;
    label:  string;
    type?:  string;
    disabled?:  boolean;
    required?:  boolean;
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({

}) => {
    return ( <div>

    </div> );
}
 
export default Input;