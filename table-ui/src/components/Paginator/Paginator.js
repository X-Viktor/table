import React from "react";
import {Pagination} from "react-bootstrap";

const Paginator = ({items}) => {
    return (
        <Pagination className="mt-3">
            {items}
        </Pagination>
    )
}

export default Paginator;
