import React, {useState} from "react";
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import {Link} from "react-router-dom";
import {Field, Loader, TextInput} from "../../../UI";


const SingInForm = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

return (
    <div>
        <Form className=""
              // onSubmit={handleSubmit}
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

        {/*    <Loader*/}
        {/*        // isActive={isLoading}*/}
        {/*        height={60} width={60} color={'#AE9040'} />*/}

            <div className="mt-5">
                <button type="submit"
                        className="bg-green text-2xl font-sans-bold"
                        // disabled={isLoading}
                >
                    <span>Sing In</span>
                </button>
            </div>
        </Form>
    </div>
)
}

export default SingInForm;