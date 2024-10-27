import { useState } from "react"
import "../app.css"

export function Buttons({ breakCookie, newCookie, cookie }) {
    const [disableButton, setDisableButton] = useState(true)

    //Função para quebrar/destroir o biscoito
    function destroy() {
        setDisableButton(false)
        cookie()
        breakCookie()
    }

    //Função para pegar um novo biscoito
    function fresh() {
        cookie()
        setDisableButton(true)
        newCookie()
    }
    
    return (
        <div id="buttonContainer">
            <button
                className="buttons"
                onClick={() => destroy()}
                disabled={!disableButton}
            >
                Quebrar
            </button>
            <button
                className="buttons"
                onClick={() => fresh()}
                disabled={disableButton}
            >
                Pegar um novo biscoito
            </button>
        </div>
    )
}