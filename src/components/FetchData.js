import { nanoid } from 'nanoid'

async function FetchData(searchTerm, data, setData) {
    const BASE_URL = `https://search.pascopa.com/default.aspx?mprs=2&src=Q&pid=add&key=LOD&add2=${searchTerm}&add=Submit&sf=3&so=1&recs=1000`
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(BASE_URL)}`)
    const resData = await response.json()
    const parser = new DOMParser()
    const doc = parser.parseFromString(resData.contents, "text/html")
    const allRows = doc.querySelectorAll('.datarow')
    allRows.forEach(row => {
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
}

export default FetchData