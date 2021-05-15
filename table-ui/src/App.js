import React, {useState, useEffect, useMemo, Fragment} from "react";
import {Container, Pagination} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableBody from "./components/TableBody/TableBody";
import Loader from "./components/Loader/Loader";
import UseServerData from "./components/Hooks/UseServerData";
import Paginator from "./components/Paginator/Paginator";

function App() {
    const baseUrl = 'http://127.0.0.1:8000/api/rows/' // url для запросов
    const [pageActive, setPageActive] = useState(0) // кол-во строк на странице
    const rowsLimit = 4 // кол-во строк на странице
    const [pageCount, setPageCount] = useState(0) // кол-во страниц
    const [url, setUrl] = useState(baseUrl)

    // Формируем url в зависимости от страницы
    useEffect(() => {
        if (url === baseUrl) {
            setUrl(url + '?offset=' + (pageActive * rowsLimit))
        } else if (url.includes('offset')) {
            setUrl(url.substring(0, url.length - 1) + (pageActive * rowsLimit))
        } else {
            setUrl(url + '&offset=' + (pageActive * rowsLimit))
        }
    }, [pageActive])

    // Получаем список строк для страницы
    const [rows, isLoading] = UseServerData(url)

    // Формируем url с фильтрами
    const onSearchSend = (filter) => {
        if (filter.value === '') {
            setUrl(baseUrl)
        } else {
            setUrl(baseUrl + '?' + filter.field + '__' + filter.param + '=' + filter.value)
        }
    }

    // Считаем кол-во страниц
    useEffect(() => {
        if (isLoading) {
            setPageCount(Math.ceil(rows.count / rowsLimit))
        }
    }, [isLoading, rows.count])

    // Получаем список элементов пагинации
    const pageItems = useMemo(() => {
        let pageItems = []
        for (let i = 0; i < pageCount; i++) {
            pageItems.push(
                <Pagination.Item key={i} active={i === pageActive} onClick={() => setPageActive(i)}>
                    {i + 1}
                </Pagination.Item>
            )
        }
        return pageItems
    }, [pageActive, pageCount])

    return (
        <Container>
            {isLoading ?
                <Fragment>
                    <TableBody rows={rows} onSearchSend={onSearchSend}/>
                    <Paginator items={pageItems}/>
                </Fragment>
                : <Loader/>}
        </Container>
    );
}

export default App;
