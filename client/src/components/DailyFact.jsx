import { useState } from "react";

const DailyFact = () => {
    const [fact, setFact] = useState("");
    const [year, setYear] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date?fragment=true&json=true`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8fdc060475msh59dca9a6d7cef8cp109777jsn3485d134fba7',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        },
    };

    async function LoadFact() {
        try {
            const response = await fetch(url, options)
            const data = await response.json()
            const { year, text } = data;
            setFact(text);
            setYear(year);
        } catch (error) {
            console.error(error);
        }
    }


    const handleClick = () => {
        LoadFact();
        setIsClicked(true);
    }


    return (

        <table className="table1">
            <tr>
                <td className="tabledate">{monthNames[month]} {day} {isClicked ? <span className="year"> {year} </span> : <span className="filler-space"> XXXX </span>} :</td>
                <td rowspan="2" className="tablefact">{fact.charAt(0).toUpperCase() + fact.slice(1)}</td>
            </tr>
            <tr>
                <td className="tablebutton"><button type="button" class="btn btn-light" onClick={handleClick}> <p className="Daily-Fact">Daily Fact</p> </button></td>
            </tr>

        </table>
    )
}

export default DailyFact