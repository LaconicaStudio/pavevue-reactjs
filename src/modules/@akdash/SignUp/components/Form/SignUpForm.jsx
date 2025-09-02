import React, {useState} from "react";
import {Form } from 'informed';
import {Field, Loader, TextInput} from "../../../UI";
import {useSignUpForm} from "./useSignUpForm";


const SignUpForm = () => {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const {
        handleSubmit,
        loading
    } = useSignUpForm({setWasSubmitted});


    return (
        <div>
            <Form className=""
                  onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="">
                        <Field>
                            <TextInput
                                field="firstname"
                                type="text"
                                label="First name"
                                required
                                showErrors={wasSubmitted}
                            />
                        </Field>
                    </div>
                    <div className="">
                        <Field>
                            <TextInput
                                field="lastname"
                                type="text"
                                label="Last name"
                                required
                            />
                        </Field>
                    </div>
                </div>
                <div className="">
                    <Field>
                        <TextInput
                            field="email"
                            type="email"
                            placeholder="Enter Email Address"
                            required
                        />
                    </Field>
                </div>

                <div className="">
                    <Field>
                        <TextInput
                            field="name"
                            type="text"
                            label="Enter Company Name"
                            required
                        />
                    </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="">
                        <Field>
                            <TextInput
                                field="password"
                                type="password"
                                placeholder="Enter Password"
                                required
                            />
                        </Field>
                    </div>

                    <div className="">
                        <Field>
                            <TextInput
                                field="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                required
                            />
                        </Field>
                    </div>
                </div>

                <Loader
                    isActive={loading}
                    color={'#AE9040'}/>

                <div className="mt-5">
                    <button type="submit"
                            className="bg-green text-2xl font-sans-bold text-white py-4 px-[55px] rounded-2xl hover:bg-dark-gold transition-all duration-300"
                            disabled={loading}
                    >
                        <span>Sing Up</span>
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default SignUpForm;