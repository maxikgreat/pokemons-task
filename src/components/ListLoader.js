
import React,{useState} from 'react'

export const ListLoader = ({maxCount, showAlert, fetchList}) => {

    const [poksNumber, setPoksNumber] = useState('');

    const checkValue =(value) => {
        if(/^[0-9]*$/.test(value)){
            setPoksNumber(value);
        }
    };

    const checkInput = () => {
        if(!poksNumber || poksNumber <= 0){
            showAlert('danger', "Number must be positive. Be positive :)")
        } else if (poksNumber > maxCount){
            showAlert('danger', `Max count is ${maxCount}. I know, that's You know it :)`)
        } else {
            fetchList(poksNumber);
            setPoksNumber('');
        }
    };

    return(
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button
                    className="btn btn-success"
                    type="button"
                    onClick={() => checkInput()}
                >Load</button>
            </div>
            <input
                type="text"
                className="form-control"
                placeholder={"Enter count of pokemons that's you want to load. Max. is " + maxCount}
                aria-label=""
                aria-describedby="basic-addon1"
                value={poksNumber}
                onChange={e => checkValue(e.target.value)}
            />
        </div>
    )
};
