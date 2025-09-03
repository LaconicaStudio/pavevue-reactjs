import React from "react";
import {Form } from 'informed';

import {useForgotForm} from "./useForgotForm.js";
import {Field, TextInput} from "../../../../UI/index.js";


const ForgotForm = () => {
    const {
        handleSubmit,
        loading
    } = useForgotForm();

    return (
        <div>
            <Form className=""
                  onSubmit={handleSubmit}
            >
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

                <div className="mt-5">
                    <button type="submit"
                            className="bg-green text-2xl font-sans-bold text-white py-4 px-[55px] rounded-2xl hover:bg-dark-gold transition-all duration-300"
                            disabled={loading}
                    >
                        <span>I forgot my password</span>
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default ForgotForm;