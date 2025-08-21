import React, {useState} from "react";
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import {Link} from "react-router-dom";
import {Field, Loader, TextInput} from "../../../UI";
import {useSignInForm} from "./useSignInForm.js";


const SignInForm = () => {


    const {
        email,
        setEmail,
        pass,
        setPass,
        handleSubmit,
        isLoading
    } = useSignInForm();


return (
    <div>
        <Form className=""
              onSubmit={handleSubmit}
        >
            <div className="">
                <Field>
                    <TextInput
                        field="email"
                        type="text"
                        autoComplete="off"
                        placeholder={'Enter Email Address'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        classes={{ input:'text-white' }}
                    />
                </Field>
            </div>
            <div className="">
                <Field>
                    <TextInput
                        field="password"
                        type="password"
                        autoComplete="off"
                        placeholder={'Enter Password'}
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        classes={{ input:'text-white' }}
                    />
                </Field>
            </div>

        {/*    /!*{isFormError &&*!/*/}
        {/*    /!*    <div className='errorMessage'>*!/*/}
        {/*    /!*        <span>{message}</span>*!/*/}
        {/*    /!*    </div>*!/*/}
        {/*    /!*}*!/*/}

            <Link to="/" className="inline-block pt-1.5">Forgot your password?</Link>

            <Loader
                isActive={isLoading}
                color={'#AE9040'} />

            <div className="mt-5">
                <button type="submit"
                        className="bg-green text-2xl font-sans-bold text-white py-4 px-[55px] rounded-2xl hover:bg-dark-gold transition-all duration-300"
                        disabled={isLoading}
                >
                    <span>Sing In</span>
                </button>
            </div>
        </Form>
    </div>
)
}

export default SignInForm;