import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext";


export const useOverview = props => {
    const {} = usePVContext();

    const property = {
        src: '/images/property/property-image.png',
        name: 'Property Name',
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
        },
        ranking: {
            status: 'failed',
            number: 1,
            message: 'FAILED! Action Required',
            lastUpdate: 'February 12, 2025'
        },
        report: {
            created: 'August 14, 2024'
        },
        activeProjects: 3,
        openRFQs: 2,
        nextInspectionDate: 'July 14, 2025',
        teamMembers: 3
    }


    return {
        property
    }
}