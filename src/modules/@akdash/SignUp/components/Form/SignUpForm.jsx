import React, {useState} from "react";
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import {Link} from "react-router-dom";
import {Field, Loader, TextInput} from "../../../UI";
import {useSignUpForm} from "./useSignUpForm.js";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

  class LocationSearchInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = { address: '' };
    }
   
    handleChange = address => {
      this.setState({ address });
    };
   
    handleSelect = address => {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error));
    };
   
    render() {
      return (
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      );
    }
  }  
  
const SignUpForm = () => {
    const {
        handleSubmit,
        isLoading
    } = useSignUpForm();

    const renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
        <div className="autocomplete-root">
          <input {...getInputProps()} />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => (
              <div {...getSuggestionItemProps(suggestion)}>
                <span>{suggestion.description}</span>
              </div>
            ))}
          </div>
        </div>
      );
    
    
return (
    <div>
        <Form className=""
              onSubmit={handleSubmit}
        >
            <div className="">
                <Field>
                    <TextInput
                        field="property_name"
                        type="text"
                        placeholder="Create Property Name"
                        required
                    />
                </Field>
            </div>
            <div className="">
                <Field>
                    <TextInput
                        field="property_reference_number"
                        type="text"
                        placeholder="Add Property Reference Number"
                        required
                    />
                </Field>
            </div>
            <div className="">
                <Field>
                    <TextInput
                        field="address"
                        type="address"
                        placeholder="Enter Address"
                        required
                    />
                </Field>
            </div>

            <LocationSearchInput/>
            <Loader
                isActive={isLoading}
                color={'#AE9040'} />

            <div className="mt-5">
                <button type="submit"
                        className="bg-green text-2xl font-sans-bold text-white py-4 px-[55px] rounded-2xl hover:bg-dark-gold transition-all duration-300"
                        disabled={isLoading}
                >
                    <span>Next</span>
                </button>
            </div>
        </Form>
    </div>
)}

export default SignUpForm;