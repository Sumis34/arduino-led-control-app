import React, {useSate} from 'react'
import axios from 'axios'

export default function findLed() {
    const saveHostName = (hostname) => {
        localStorage.setItem('hostname', hostname);
    }
    
    const find = () => {

        let host = localStorage.getItem('hostname') || "arduinoled"

        let url = `http://${host}`

        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    return (
        <div>
            <button onClick={find}></button>
        </div>
    )
}
