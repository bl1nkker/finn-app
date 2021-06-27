import React, { useState } from 'react'

function RegistryModal({setOpenPopUp}) {
    const [formData, setFormData] = useState({
        actualBalance: undefined,
        comment: ''
    }) 

    const sendActualBalance = async() =>{
        // Send request with formData to backend 
        console.log(formData)
        setOpenPopUp(false)
    }

    return (
            <div className="accept-window">
                <div className="accept__title">Подтвердить остаток в кассе</div>
                <label className="remainder">Остаток в кассе</label>
                <div className="accept__remainder">1000.00 ₽</div>
                <label className="remainder accept__addit-remainder">Действительный остаток в кассе</label>
                <input 
                className="accept__remainder accept__addit-input" 
                value={formData.actualBalance} 
                onChange={(event) => setFormData({...formData, actualBalance:parseInt(event.target.value)})}
                type="number"/>
                <label className="remainder accept__addit-remainder textarea-remainder">Комментарий</label>
                <textarea 
                className="accept__addit-textarea" 
                value={formData.comment} 
                onChange={(event) => setFormData({...formData, comment:event.target.value})}/>
                <div className="accept__buttons">
                    <button className="accept__button inner-btns" onClick={e => {
                    document.querySelector(".accept-window").classList.add("accept__addit");
                    }}>Ошибка</button>
                    <button className="accept__button  inner-btns" id="blue--btn" onClick={() => setOpenPopUp(false)}>
                        Подтвердить
                    </button>
                    {/* <button className="accept__button  inner-btns" id="blue--btn" onClick={e => {
                    document.querySelector(".black-bg").style.display = "none";
                    document.querySelector(".accept-window").style.display = "none";
                    }}>Подтвердить</button> */}
                    <button className="accept__button accept__addit-buttons" onClick={e => {
                    document.querySelector(".accept-window").classList.remove("accept__addit");
                    }}>Назад</button>
                    <button className="accept__button  accept__addit-buttons" 
                    onClick={sendActualBalance}>Отправить</button>
                </div>
            </div>
    )
}

export default RegistryModal
