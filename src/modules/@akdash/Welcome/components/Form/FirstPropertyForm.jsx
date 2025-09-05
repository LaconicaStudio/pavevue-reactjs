import React, {useState} from "react";
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import {Link} from "react-router-dom";
import {Field, Loader, TextInput} from "../../../UI";
import {useFirstPropertyForm} from "./useFirstPropertyForm.js";
import Autocomplete from "react-google-autocomplete";


const FirstPropertyForm = () => {
    const {
        handleSubmit,
        isLoading,
        setAddress
    } = useFirstPropertyForm();

return (
    <div>
        <Form className=""
              onSubmit={handleSubmit}
        >
            <div className="">
                <Field>
                    <TextInput
                        field="propertyName"
                        type="text"
                        label="Create Property Name"
                        required
                    />
                </Field>
            </div>
            <div className="">
                <Field>
                    <TextInput
                        field="propertyNumber"
                        type="text"
                        placeholder="Add Property Reference Number"
                    />
                </Field>
            </div>
            {/*<div className="">*/}
            {/*    <Field>*/}
            {/*        <TextInput*/}
            {/*            field="email"*/}
            {/*            type="email"*/}
            {/*            label="Enter Address"*/}
            {/*            required*/}
            {/*        />*/}
            {/*    </Field>*/}
            {/*</div>*/}

            <Autocomplete
                apiKey={import.meta.env.VITE_GMAPS_KEY}
                onPlaceSelected={(place) => {
                    setAddress(place)
                }}

                options={{
                    types: ["address"],
                    fields: ["formatted_address", "address_components", "geometry"],
                }}
                className="w-full rounded-[15px] border bg-black border border-gold h-[65px] text-xl px-[25px] focus-visiable:border-gold outline-none"
                placeholder="Enter Address"
            />;




            <div className="mt-5">
                <button type="submit"
                        className="bg-gold text-2xl font-sans-bold text-white py-4 px-[55px] rounded-2xl hover:bg-dark-gold transition-all duration-300"
                        disabled={isLoading}
                >
                    <span>Next</span>
                </button>
            </div>
        </Form>
    </div>
)}

export default FirstPropertyForm;