import 'bootstrap/dist/css/bootstrap.min.css';
import './css/OutpatientService.css';

import PropTypes from 'prop-types';
import React from 'react';

import useSize from '../../hooks/useSize';
import img001 from './img/001.png';



function OutpatientService(props) {
    const { data } = props;

    const {sizeHeight, sizeWidth} = useSize();

    return (
        <div className='d-flex p-2 bg-yunyi-green flex-column outpatient-service' style={{height:sizeHeight, width:sizeWidth}}>
            <div className='m-1 px-5 py-3 bg-light flex-column rounded-lg h-100'>
                <header className='d-flex rounded-lg outpatient-header'>
                    <img className='flex-shrink-1' src={data.img} style={{width:'8rem'}}  />
                    <div className='d-flex p-2 flex-column text-center w-100 bg-danger text-light'>
                        <h2>{data.name}</h2>
                        <h4>{data.category[0].title}</h4>
                    </div>
                </header>
                <main>
                    <h1 className='mx-5 my-2 p-2 bg-yunyi-red rounded-lg text-center text-light'>4楼 C区</h1>
                    <img src={img001} style={{width:'300px'}} />
                </main>
                
            </div>
            <div className='d-flex mx-1 mt-2 flex-column flex-shrink-1'>
                <div className='d-flex bg-light rounded-lg py-3 px-5 justify-content-around'>
                    <img className='m-2' src={data.img} style={{width:'8rem'}}  />
                    <img className='m-2'  src={data.img} style={{width:'8rem'}}  />
                </div>
                <footer className='text-center text-light p-2'>
                    杭州求是云医股份有限公司-2020
                </footer>
            </div>
        </div>
    )
}

OutpatientService.propTypes = {

}

export default OutpatientService;

