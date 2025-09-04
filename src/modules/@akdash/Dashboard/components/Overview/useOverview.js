import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext";


export const useOverview = props => {
    const {} = usePVContext();

    const property = {
        src: '',
        contacts: {
            property : {
                name: 'Property Name',
                number: '001',
                address: '1234 Street Name',
                unit: '',
            },
            manager : {
                name: 'David Whitehaven',
                tel: '1 555 555 1234',
                email: 'dwhitehaven@company.com'
            },
            owner : {
                name: 'Susan Bakerson',
                tel: '1 555 555 1235',
                email: 'sbakerson@company.com'
            }
        }
    }


    return {
        property
    }
}