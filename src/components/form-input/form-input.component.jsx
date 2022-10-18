import {Group,Input,FormInputLabel}  from './form-input.styles';
const FormInput = ({label, ...otherprops}) => {

    return(
        <Group>
        <Input  {...otherprops} />
        { label &&( 
        <FormInputLabel shrink ={otherprops.value.length ? 'shrink' : '' } >{label}</FormInputLabel> )}
         
       </Group>
    );
    
};

export default FormInput;