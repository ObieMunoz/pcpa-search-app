import { nanoid } from "nanoid";

function StreetList({ streets }) {
    const streetItems = streets.map(street => <div className={"item"} key={nanoid()}>{street}</div>);
    return (
        <div className={"ui list"}>
            {streetItems}
        </div>
    )
}

export default StreetList
