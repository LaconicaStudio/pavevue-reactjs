import React, { useState } from "react";
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import { Link } from "react-router-dom";
import { Field, Loader, TextInput } from "../../../UI";
import { useSignUpForm } from "./useSignUpForm.js";
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

  parseAddress = data => {
    var componentFormMap = {};
    var result = {};
    var streetNumber = '';

    componentFormMap['street_number'] = 'street-number';
    componentFormMap['route'] = 'street';
    componentFormMap['locality'] = 'city';
    componentFormMap['administrative_area_level_1'] = 'state';
    componentFormMap['postal_code'] = 'postal_code';
    componentFormMap['country'] = 'country';

    for (var i = 0; i < data.address_components.length; i++) {
      var addressType = data.address_components[i].types[0];
      if (componentFormMap[addressType]) {
        var addressFieldId = componentFormMap[addressType];
        var field = (addressType == 'administrative_area_level_1' || addressType == 'postal_code') ? 'short_name' : 'long_name';
        var val = data.address_components[i][field];

        if (addressType != 'street_number') {
          result[componentFormMap[addressType]] = val;
        } else {
          streetNumber = val
        }

      }
    }
    if (result['street'] && streetNumber != '') {
      result['street'] = streetNumber +' ' + result['street'];      
    }
    return result;
  };

  handleSelect = address => {
    geocodeByAddress(address)
      //.then(results => getLatLng(results[0]))
      .then(results => this.parseAddress(results[0]))
      .then(address_result => console.log('Success', address_result))
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

        <LocationSearchInput />
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
  )
}

export default SignUpForm;