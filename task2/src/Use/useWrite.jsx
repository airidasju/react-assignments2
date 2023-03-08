import { useEffect, useState } from 'react';
import axios from 'axios';
const URL = 'http://localhost:3003/accounts';


export const useWrite = _ => {

    const [response, setResponse] = useState(null);
    const [create, setCreate] = useState();

    useEffect(() => {
        axios.post(URL, create)
            .then(res => setResponse(res.data));

    }, [create]);


    return [response, setCreate];

}