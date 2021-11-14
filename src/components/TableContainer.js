import TableRow from './TableRow'
import { nanoid } from 'nanoid'

function TableContainer({ data }) {
    let count = 0;
    const tableRows = data.map(item => {
        count++;
        return <TableRow key={nanoid()} count={count} name={item.owner} address={item.address} link={item.mapLink} />
    })

    return (
        <div>
            <table id="owner-table" className="ui celled table" style={{ textAlign: "center", width: "fit-content" }}>
                <thead>
                    <tr><th>Count</th>
                        <th>Owner(s)</th>
                        <th>Address</th>
                    </tr></thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}

export default TableContainer
