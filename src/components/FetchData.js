import HandleResponse from './HandleResponse';

async function FetchData(searchTerm, setData) {
    const BASE_URL = `https://search.pascopa.com/default.aspx?mprs=2&src=Q&pid=add&key=LOD&add2=${searchTerm}&add=Submit&sf=3&so=1&recs=1000`
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(BASE_URL)}`)
    const pageData = await response.json()
    return HandleResponse({ pageData, setData })
}

export default FetchData