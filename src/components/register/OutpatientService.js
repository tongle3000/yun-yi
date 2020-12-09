import "bootstrap/dist/css/bootstrap.min.css";
import "./css/OutpatientService.css";

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import useSize from "../../hooks/useSize";
import img001 from "./img/001.png";
import SelectDoctor from "./SelectDoctor";

import QueryInfo from "./QueryInfo";

function OutpatientService(props) {
    const { data } = props;

    const [value, setValue] = useState("");

    const [valueIsTrue, setValueIsTrue] = useState(false);
    const [errorPage, setErrorPage] = useState(false)

    const [rooms, setRooms] = useState([])
    const [title, setTitlle] = useState([])
    const [querySucess, setQuerySuccess]=useState({})
    const [queryError, setQueryError]=useState({})

    let startNum = value.substring(0, 3); // 编号头 3 个数字 , 代表诊室
    let arr = data.service;
    let visitArr=[];
    
    console.log(data.service)
    

    Array.prototype.IsInAarry = function (element) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id == element) { 
                return visitArr=arr[i];
            };
        }
        return false;
    };
    

    const handleServiceArray = (num) => {
        console.log(num);
        console.log(startNum, data.service[0].id);
        // 如果找到头 3 个数字的 ,
        if (arr.IsInAarry(startNum)) {
            // 再判断是否有这个号,
            if(visitArr.visitNum.includes(value)) {
                console.log('value--------------', value);
                console.log('service',visitArr.title, visitArr.location);
                
                return (
                    setValueIsTrue(true),
                    setRooms(visitArr.rooms),
                    setTitlle(visitArr.title),
                    setQuerySuccess(data.success)
                    
                );
                
                
                // <RegisterPop title='选择医生' />
            } else {
                setErrorPage(true);
                setQueryError(data.error)
                console.log(errorPage)

            }
            console.log(startNum);
            // console.log(visitArr.title, visitArr.location);

            // return visitArr;
        } else {
            setErrorPage(true);
            setQueryError(data.error)
            console.log(errorPage)
        }
    };

    // console.log(valueIsTrue)

    // const RegisterPop = (props) => {
    //     // const {rooms, title} = props;
    //     console.log('visitArr',visitArr,visitArr.rooms)
    //     const rooms = visitArr.rooms;
    //     const title = visitArr.title;

    //     return(
    //         <div style={{position: "absolute", width:'100%', top:'0', left:0,height:'200px',background:'rgba(0,0,0, .5)'}}>  
    //             <div>选择医生</div>
    //             <div>aaa
    //                 {
    //                     rooms.map((item) => { 
    //                         return <li key={item.id} ><RoomsItem title={title} item={item} /></li>
    //                     })
    //                 }
    //             </div>
    //         </div>
    //     )
    // }

    // const RoomsItem = ({title, item}) => {
    //     return(
    //         <>
    //             <div>{title}</div>
    //             <div>{item.room}</div>
    //             <div>{item.doctor}</div>
    //             <div><img src={item.photo} style={{width:'3rem'}} /></div>
    //             <div></div>
    //             <div>{ item.allNum > item.currentNum + 1 ? item.currentNum +1 : '已满' }</div>
    //         </>
    //     )
    // }

    
    const { sizeHeight, sizeWidth } = useSize();

    // const numHeightWidth = sizeWidth-12*8.65;
    const cellWidth = ((sizeWidth - sizeWidth * 0.22) / 100) * 25;
    const cellHeight = ((sizeWidth - sizeWidth * 0.22) / 100) * 22;

    // const ErrorPage = () => {
    //     let seconds = 500;
    //     console.log('wai',seconds)
    //     let interv;

    //     useEffect(() => {
    //         if (interv) {
    //             clearInterval(interv); 
    //         }
    //         interv = setInterval(() => {
    //             if(seconds > 0){
    //                 seconds=seconds-1;
    //                 console.log(seconds);
    //                 document.getElementById("seconds").innerHTML = seconds;
    //             } else {
    //                 setErrorPage(false);
    //                 clearInterval(interv); 
    //             }
    //         }, 1000);
    //         return () => {
    //             clearInterval(interv); 
    //         }
    //     }, [seconds])
        
    //     return (
    //         <div className='yunyi-select-doctor yunyi-bg-black-opacity d-flex justify-content-center align-items-center'>
    //             <div className='bg-white yunyi-error d-flex  flex-column'>
    //                 <div className='d-flex yunyi-error-icon justify-content-center mb-5'>
    //                     <FontAwesomeIcon 
    //                         icon={faTimesCircle} size='10x'  
    //                         className='bg-white rounded-pill yunyi-text-danger yunyi-box-shadow1'
    //                     />
    //                 </div>
    //                 <h2 className='yunyi-text-danger text-center p-3'>对不起，报到信息!</h2>
    //                 <p className='text-center yunyi-text-red mb-2 h5'>原因：未查到挂号信</p>
    //                 <button className='btn yunyi-bg-danger yunyi-box-shadow text-white m-5 py-3 rounded-lg' onClick={()=> {setErrorPage(false);clearInterval(interv)}}>
    //                     <h4 className='mb-0'>好的(<span id='seconds'>{seconds}</span>S)</h4>
    //                 </button>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <>
        {  valueIsTrue &&
            <SelectDoctor rooms={rooms} title={title} querySucess={querySucess} setValueIsTrue={setValueIsTrue} />
        }
        {
            errorPage &&
            <QueryInfo errorPage={errorPage} setErrorPage={setErrorPage} querySucess={querySucess} queryError={queryError} />
            // <ErrorPage  />
        }

        <div
            className="d-flex p-1 pt-2 flex-column yunyi-outpatient-service yunyi-bg-green"
            style={{ height:'1280px', width: sizeWidth }}
        >
            
            {/* <div className='d-flex px-3 flex-column'> */}
            <div className="mx-1 flex-column rounded-lg h-100 bg-white yunyi-box-padding">
                <header className="d-flex rounded-lg yunyi-outpatient-header">
                    <img className="flex-shrink-1 yunyi-header-img border" src={data.img} />
                    <div className="d-flex p-2 flex-column text-center w-100 yunyi-bg-green text-white">
                        <h1 className="font-weight-bolder">{data.name}</h1>
                        <h4 className="font-weight-bolder">
                            { data.category[0].title}
                        </h4>
                    </div>
                </header>
                <main>
                    <form>
                        <div className="form-group">
                            <h1 className="rounded-lg mt-3 mb-3 p-2 yunyi-bg-red text-center text-white font-weight-bolder yunyi-location">
                                位置: { arr.IsInAarry(startNum) && visitArr.location }
                            </h1>

                            <input
                                type="text"
                                className="form-control form-control-sm rounded-lg border-yunyi-green font-weight-bolder yunyi-num-input"
                                placeholder="请输入就诊号或刷卡"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />

                            <div className="d-flex flex-wrap yunyi-square-btn justify-content-between">
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue(value + "1")}
                                >
                                    1
                </div>
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue(value + "2")}
                                >
                                    2
                </div>
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue(value + "3")}
                                >
                                    3
                </div>
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue(value + "4")}
                                >
                                    4
                </div>
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue(value + "5")}
                                >
                                    5
                </div>
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue(value + "6")}
                                >
                                    6
                </div>
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue(value + "7")}
                                >
                                    7
                </div>
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue(value + "8")}
                                >
                                    8
                </div>
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue(value + "9")}
                                >
                                    9
                </div>
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow yunyi-text"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue("")}
                                >
                                    清空
                </div>
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue(value + "0")}
                                >
                                    0
                </div>
                                <div
                                    className="yunyi-cell yunyi-bg-green d-flex justify-content-center align-items-center yunyi-box-shadow yunyi-text"
                                    style={{ width: cellWidth, height: cellHeight }}
                                    onClick={() => setValue(value.substring(0, value.length - 1))}
                                >
                                    退格
                </div>
                            </div>
                            <button
                                type="button"
                                className="btn text-white btn-block font-weight-bolder yunyi-bg-green yunyi-btn-ok yunyi-box-shadow"
                                onClick={() => handleServiceArray(value)}
                            >
                                确定
              </button>
                        </div>
                    </form>
                </main>
            </div>
            <div className="mt-2 flex-column flex-shrink-1">
                <div className="mx-1 d-flex bg-white rounded-lg py-3 px-5 justify-content-between">
                    <img className="m-2" src={data.img} className="yunyi-footer-img border" />
                    <img className="m-2" src={data.img} className="yunyi-footer-img border" />
                </div>
                <footer className="text-center text-white p-1">
                    杭州求是云医股份有限公司-2020
        </footer>
            </div>
        </div>
        </>
    );
}

OutpatientService.propTypes = {};

export default OutpatientService;
