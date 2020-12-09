import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'


const QueryInfo = ({errorPage, setErrorPage, queryError, successPage, setSuccessPage, querySucess, room,doctor, title, setValueIsTrue}) => {

    let seconds = 5;
    console.log('wai', seconds)
    let interv;

    useEffect(() => {
        if (interv) {
            clearInterval(interv);
        }
        interv = setInterval(() => {
            if (seconds > 0) {
                seconds = seconds - 1;
                console.log(seconds);
                document.getElementById("seconds").innerHTML = seconds;
            } else {
                if(errorPage) setErrorPage(false);
                if(successPage) {setSuccessPage(false);setValueIsTrue(false)};
                clearInterval(interv);
            }
        }, 1000);
        return () => {
            clearInterval(interv);
        }
    }, [seconds])

    return (
                <div className='yunyi-select-doctor yunyi-bg-black-opacity d-flex justify-content-center align-items-center'>
                    <div className='bg-white yunyi-error d-flex flex-column'>
                        <div className={`d-flex ${errorPage ? 'yunyi-error-icon' : 'yunyi-success-icon'} justify-content-center mb-5`}>
                            <FontAwesomeIcon
                                icon={errorPage ? faTimesCircle : faCheckCircle} size='10x'
                                className={`bg-white rounded-pill ${errorPage ? 'yunyi-text-danger' : 'yunyi-text-green'} yunyi-box-shadow1`}
                            />
                        </div>

                        { querySucess && <p className='h3 yunyi-text-red text-center'>{title}-{room}-{doctor}</p> }

                        <h3 className={`${errorPage ? 'yunyi-text-danger' : 'yunyi-text-green'} text-center p-3`}>
                            { errorPage ? queryError.text : querySucess.text }
                        </h3>
                        <p className={`text-center ${errorPage ? 'yunyi-text-red' : ''} mb-2 h5`}>
                            { errorPage ? queryError.note : querySucess.note }
                        </p>
                        <button className={`btn ${errorPage ? 'yunyi-bg-danger' : 'yunyi-bg-green'} yunyi-box-shadow text-white m-5 py-3 rounded-lg`} onClick={() => { 
                            if(errorPage) setErrorPage(false);
                            if(successPage) {setSuccessPage(false);setValueIsTrue(false)};
                            clearInterval(interv) 
                        }}>
                            <h4 className='mb-0'>好的(<span id='seconds'>{seconds}</span>S)</h4>
                        </button>
                    </div>
                </div>
    )
}

export default QueryInfo;
