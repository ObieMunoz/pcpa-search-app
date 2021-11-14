function TableRow({ count, name, address, link }) {
    return (
        <tr>
            <td data-label="Count">{count}</td>
            <td data-label="Name">{name}</td>
            <td data-label="Address"><a href={link} target={"_blank"} rel={"noreferrer"}>{address}</a></td>
        </tr>
    )
}

export default TableRow
