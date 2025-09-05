import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext";


export const useReports = props => {
    const {} = usePVContext();

    const reportList = {
        items: [
            {
                id: '001',
                title: 'PASER Ranking – Action Report',
                createDate: 'January 1, 2025',
                shortDescription:
                    'Agnataqu aessequiant volendi ssequi re corerum dit escilig enimpelias restrumquis es sumqui beat aspidun tiistiis eveniet, fugia enit dolorem quaecaest offictur sam aceatempores.',
            pdfSrc:''
            },
            {
                id: '002',
                title: 'Aerial Assessment Detailed Report',
                createDate: 'January 1, 2025',
                shortDescription:
                    'Agnataqu aessequiant volendi ssequi re corerum dit escilig enimpelias restrumquis es sumqui beat aspidun tiistiis eveniet, fugia enit dolorem quaecaest offictur sam aceatempores.',
                pdfSrc:''
            },
            {
                id: '003',
                title: 'Ground Assessment Detailed Report',
                createDate: 'January 1, 2025',
                shortDescription:
                    'Agnataqu aessequiant volendi ssequi re corerum dit escilig enimpelias restrumquis es sumqui beat aspidun tiistiis eveniet, fugia enit dolorem quaecaest offictur sam aceatempores.',
                pdfSrc:''
            },
        ],
    };


    return {
        reportList
    }
}