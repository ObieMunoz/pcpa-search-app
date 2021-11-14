import TableRow from './TableRow'
import { useState, useEffect } from 'react'
import FetchData from './FetchData'
import { nanoid } from 'nanoid'

function TableContainer({ data, setData }) {
    let count = 0;
    const tableRows = data.map(item => {
        count++;
        return <TableRow key={nanoid()} count={count} name={item[0]} address={item[1]} link={item[2]} />
    })

    return (
        <div>
            <table id="owner-table" className="ui celled table" style={{ textAlign: "center", width: "fit-content" }}>
                <thead>
                    <tr><th>Count</th>
                        <th>Owner(s)</th>
                        <th>Address</th>
                        {/* <th>Link</th> */}
                    </tr></thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}

export default TableContainer
