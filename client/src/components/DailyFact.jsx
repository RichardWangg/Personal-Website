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
        <div>
            {isClicked ? (
                <span>
                    <div className="fact-prompt">
                        {monthNames[month]} {day} <span className="year"> {year}</span> :
                    </div>
                    <span className="fact text-center"> {fact.charAt(0).toUpperCase() + fact.slice(1)} </span>
                </span>
            ) : null}
            <button type="button" class="btn btn-light" onClick={handleClick}> Daily Fact</button>
        </div>
    )
}

export default DailyFact