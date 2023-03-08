import { createContext } from "react";
import { useRead } from "../Use/useRead";
import { useWrite } from "../Use/useWrite";
import { useEffect } from 'react';

export const Global = createContext();

export const GlobalProvider = ({children}) => {

    const [response, setCreate] = useWrite();
    const [list, setUpdate] = useRead();

    useEffect(() => {
        setUpdate(Date.now());
        if (null !== response) {

        }
    }, [response]);

    console.log(list)

    return (
        <Global.Provider value={{
            setCreate,
            list
        }}>
            {children}
        </Global.Provider>
    )
}