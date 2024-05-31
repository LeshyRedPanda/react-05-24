import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import authService from "../services/authService";

const FormComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<AuthDataModel>({defaultValues: {username: 'username1', password: 'Pa$$word1'}});

    const [isAuthState, setIsAuthState] = useState<boolean>(false)
    const authenticate = async (formData: AuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    }
    return (
        <div>
            <h3> Login form : </h3>
            <div>
                {
                    isAuthState ? <span>ok</span> : <span>not ok</span>
                }
            </div>
            <br/>

            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text"{...register('username')}/>
                <input type="text"{...register('password')}/>
                <button>login</button>
            </form>

        </div>
    );
};

export default FormComponent;