import 'bootstrap/dist/css/bootstrap.min.css';
import './css/OutpatientService.css';

import PropTypes from 'prop-types';
import React from 'react';

import useSize from '../../hooks/useSize';
import img001 from './img/001.png';



function OutpatientService(props) {
    const { data } = props;

    const {sizeHeight, sizeWidth} = useSize();

    const numHeightWidth = sizeWidth-12*8.65;
    const cellWidth = (sizeWidth-sizeWidth * .22) / 100 *25;
    const cellHeight = (sizeWidth-sizeWidth * .22) / 100 *22; 


    return (
        <div className='d-flex p-1 flex-column outpatient-service' style={{height:'100%', width:sizeWidth}}>
            {/* <div className='d-flex px-3 flex-column'> */}
                <div className=' flex-column rounded-lg h-100 box-padding'>
                    <header className='d-flex rounded-lg outpatient-header'>
                        <img className='flex-shrink-1 header-img' src={data.img} />
                        <div className='d-flex p-2 flex-column text-center w-100 bg-yunyi-green text-white'>
                            <h1 className='font-weight-bolder'>{data.name}</h1>
                            <h4 className='font-weight-bolder'>{data.category[0].title}</h4>
                        </div>
                    </header>
                    <main>
                        <form>
                            <div className='form-group'>
                                <h1 className='rounded-lg mt-3 mb-4 p-3 bg-yunyi-red text-center text-white font-weight-bolder location'>4楼 C区</h1>
                            
                                <input type='text' className='form-control form-control-sm border-width rounded-lg border-yunyi-green font-weight-bolder font-size3 outpatient-service-input' placeholder="请输入就诊号或刷卡" />
                                
                                <div className='d-flex flex-wrap square-btn justify-content-between'>
                                    <div className='cell bg-yunyi-red d-flex justify-content-center align-items-center' style={{width:cellWidth,height:cellHeight}}>
                                        1
                                    </div>
                                    <div className='cell bg-yunyi-red d-flex justify-content-center align-items-center' style={{width:cellWidth,height:cellHeight}}>
                                        2
                                    </div>
                                    <div className='cell bg-yunyi-red  d-flex justify-content-center align-items-center' style={{width:cellWidth,height:cellHeight}}>
                                        3
                                    </div>
                                    <div className='cell bg-yunyi-red d-flex justify-content-center align-items-center' style={{width:cellWidth,height:cellHeight}}>
                                        4
                                    </div>
                                    <div className='cell bg-yunyi-green d-flex justify-content-center align-items-center' style={{width:cellWidth,height:cellHeight}}>5</div>
                                    <div className='cell bg-yunyi-green d-flex justify-content-center align-items-center' style={{width:cellWidth,height:cellHeight}}>6</div>
                                    <div className='cell bg-yunyi-green d-flex justify-content-center align-items-center' style={{width:cellWidth,height:cellHeight}}>7</div>
                                    <div className='cell bg-yunyi-green d-flex justify-content-center align-items-center' style={{width:cellWidth,height:cellHeight}}>8</div>
                                    <div className='cell bg-yunyi-green d-flex justify-content-center align-items-center' style={{width:cellWidth,height:cellHeight}}>9</div>
                                    <div className='cell bg-yunyi-green d-flex justify-content-center align-items-center text' style={{width:cellWidth,height:cellHeight}}>清空</div>
                                    <div className='cell bg-yunyi-green d-flex justify-content-center align-items-center' style={{width:cellWidth,height:cellHeight}}>0</div>
                                    <div className='cell bg-yunyi-green d-flex justify-content-center align-items-center text' style={{width:cellWidth,height:cellHeight}}>退格</div>
                                </div>
                                <button type='button' className='btn bg-yunyi-green text-white btn-lg btn-block'>确认</button>
                                
                            </div>
                        </form>
                    </main>
                    
                </div>
                <div className=' mt-2 flex-column flex-shrink-1'>
                    <div className='d-flex bg-white rounded-lg py-3 px-5 justify-content-around'>
                        <img className='m-2' src={data.img} style={{width:'8rem'}}  />
                        <img className='m-2'  src={data.img} style={{width:'8rem'}}  />
                    </div>
                    <footer className='text-center text-white p-2'>
                        杭州求是云医股份有限公司-2020
                    </footer>
                </div>
            </div>
        // </div>
    )
}

OutpatientService.propTypes = {

}

export default OutpatientService;

