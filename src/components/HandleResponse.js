import { nanoid } from 'nanoid'

function HandleResponse({ pageData, setData }) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(pageData.contents, "text/html")
    const tableRows = doc.querySelectorAll('.datarow')
    tableRows.forEach(row => {
        const rowData = row.querySelectorAll('td')
        const dataObject = {
            id: nanoid(),
            mapLink: rowData[0].querySelector('a').href,
            parcelLink: rowData[1].querySelector('a').href,
            owner: rowData[2].textContent,
            address: rowData[3].textContent,
        }
        setData(originalData => [...originalData, dataObject])
    })
    return null;
}

export default HandleResponse
