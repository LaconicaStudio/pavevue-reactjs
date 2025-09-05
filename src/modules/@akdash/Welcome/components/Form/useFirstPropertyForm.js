import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext";


export const useFirstPropertyForm = props => {
    const {loading, setLoading} = usePVContext();
    const navigate = useNavigate();
    const [address, setAddress] = useState("");


    const parseAddress = data => {
        console.log(data);

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

    const handleSubmit = async ({ values, errors }) => {

        const url = 'https://pavevue.loc/api/properties/add';

        if (errors && Object.keys(errors).length) return;

        const addressData = parseAddress(address);

        const payload = {
            propertyName: values.propertyName || "",
            propertyNumber: values.propertyNumber || "",
            address: addressData || ""
        };

        try {
            setLoading(true)
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            
            if (!response.ok || data.status !== "success") {
                console.error("Failed:", data.message || "Unknown error");
                return;
            }

            // redirect
            navigate("/dashboard", { replace: true });

        } catch (error) {
            console.error('Error while submitting:', error);
        } finally {
            setLoading(false);
        }
    }
    return {
        loading,
        setAddress,
        handleSubmit
    }
}