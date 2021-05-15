import React, {useState} from "react";
import {Button, FormControl, InputGroup, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = ({onSearchSend}) => {
    // Фильтры
    const [searchValue, setSearchValue] = useState({
        'field': 'title',
        'param': 'gte',
        'value': ''
    })

    return (
        <div className="Search">
            <InputGroup className="mb-3">
                <Form.Control
                    as="select"
                    defaultValue="Название"
                    onChange={(event) => {
                        setSearchValue({
                            field: event.target.value,
                            param: searchValue.param,
                            value: searchValue.value
                        })
                    }}
                >
                    <option value='title'>Название</option>
                    <option value='count'>Количество</option>
                    <option value='distance'>Расстояние</option>
                </Form.Control>
                <Form.Control
                    as="select"
                    defaultValue="Больше"
                    onChange={(event) => {
                        setSearchValue({
                            field: searchValue.field,
                            param: event.target.value,
                            value: searchValue.value
                        })
                    }}>
                    <option value='gte'>Больше</option>
                    <option value='lte'>Меньше</option>
                    <option value='iexact'>Равно</option>
                    <option value='icontains'>Содержит</option>
                </Form.Control>
                <FormControl
                    aria-describedby="basic-addon2"
                    value={searchValue.value}
                    onChange={(event) => {
                        setSearchValue({
                            field: searchValue.field,
                            param: searchValue.param,
                            value: event.target.value
                        })
                    }}
                />
                <InputGroup.Append>
                    <Button
                        variant="outline-secondary"
                        onClick={() => {
                            onSearchSend(searchValue)
                        }}
                    >
                        Найти
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default Search;
