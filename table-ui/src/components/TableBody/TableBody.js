import React from "react";
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "../Search/Search";

const TableBody = ({rows, onSearchSend}) => {

    return (
        <div className="Table">
            <h1>Таблица</h1>
            <Search onSearchSend={onSearchSend}/>
            <Table striped bordered variant="dark" className="mt-3">
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Расстояние</th>
                </tr>
                </thead>
                <tbody>
                {rows.results.length !== 0 ? rows.results.map(row => (
                    <tr key={row.id}>
                        <td>{row.date}</td>
                        <td>{row.title}</td>
                        <td>{row.count}</td>
                        <td>{row.distance}</td>
                    </tr>
                )) : <h4>Данные не найдены.</h4>}
                </tbody>
            </Table>
        </div>
    );
}

export default TableBody;
