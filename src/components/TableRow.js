function TableRow({ count, name, address, link }) {
    return (
        <tr>
            <td data-label="Count">{count}</td>
            <td data-label="Name">{name}</td>
            <td data-label="Address">{address}</td>
            {/* <td data-label="Link">{link}</td> */}
        </tr>
    )
}

export default TableRow
