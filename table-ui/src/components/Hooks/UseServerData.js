import {useEffect, useState} from "react";
import axios from "axios";

const UseServerData = (url) => {
    const [rows, setRows] = useState([]) // список строк
    const [isLoading, setIsLoading] = useState(false) // переключатель загрузки данных

    // Отправляем запрос, получаем список строк и переключаем isLoading
    useEffect(() => {
        axios({
            method: "GET",
            url: url
        }).then(response => {
            setRows(response.data)
            setIsLoading(true)
        })
    }, [url])

    return [rows, isLoading]
}

export default UseServerData;
