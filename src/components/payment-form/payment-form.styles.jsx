import styled from "styled-components";
import Button from "../button/button.component";
export const PaymentFormContainer = styled.div`
height: 350px;
display: flex;
align-items: center;
justify-content: center;
`

export const FormContainer = styled.form`
height: 150px;
min-width: 600px;
`;
export const PaymentButton = styled(Button)`
margin-left: auto;
margin-top: 30px;

`;