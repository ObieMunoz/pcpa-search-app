import TableRow from './TableRow'
import { nanoid } from 'nanoid'

async function FetchData(street, setData) {
    const BASE_URL = `https://search.pascopa.com/default.aspx?mprs=2&src=Q&pid=add&key=LOD&add2=${street}&add=Submit&sf=3&so=1&recs=1000`
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(BASE_URL)}`)
    const data = await response.json()
    const parser = new DOMParser()
    const doc = parser.parseFromString(data.contents, "text/html")
    const allRows = doc.querySelectorAll('.datarow')
    const dataObject = []
    allRows.forEach(row => {
        const rowData = row.querySelectorAll('td')
        const homeLink = rowData[1].querySelector('a').href
        console.log(homeLink)
        const homeOwner = rowData[2].innerText
        const homeAddress = rowData[3].innerText
        dataObject.push([homeOwner, homeAddress, homeLink])
    })
    setData(dataObject)
    console.log("FETCH COMPLETE")
}

export default FetchData