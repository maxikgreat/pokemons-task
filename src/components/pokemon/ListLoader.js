
import React,{useState} from 'react'

export const ListLoader = ({maxCount, fetchList, showAlert, hideAlert, dispatch}) => {

    const [poksNumber, setPoksNumber] = useState('');

    const checkValue =(value) => {
        if(/^[0-9]*$/.test(value)){
            setPoksNumber(value);
        }
    };

    const checkInput = () => {
        if(!poksNumber || poksNumber <= 0){
            dispatch(showAlert('danger', "Number must be positive. Be positive :)"));
            setTimeout(() => {
                dispatch(hideAlert());
            }, 3000)
        } else if (poksNumber > maxCount){
            dispatch(showAlert('danger', `Max count is ${maxCount}. I know, that's You know it :)`));
            setTimeout(() => {
                dispatch(hideAlert());
            }, 3000)
        } else {
            dispatch(fetchList(poksNumber, {showAlert, hideAlert}));
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
