import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import QueryInfo from './QueryInfo';

const SelectDoctor = (props) => {
    const {rooms, title, querySucess, setValueIsTrue } = props;
    // console.log('visitArr',rooms,title)
    // const rooms = visitArr.rooms;
    // const title = visitArr.title;

    const [successPage, setSuccessPage] = useState(false)
    
    const [currentTitle, setCurrentTitle] = useState('')
    const [currentItem, setCurrentItem] = useState([])


    
    

    return(
        <div className='yunyi-select-doctor yunyi-bg-black-opacity d-flex justify-content-center align-items-center'>
        { !successPage ?
            <div className='yunyi-select-content yunyi-bg-green rounded-lg'>
                <h5 className='yunyi-bg-green text-center mb-0 text-white p-2'>选择医生</h5>
                <div className='bg-white yunyi-select-bd d-flex justify-content-between flex-wrap'>
                    {
                        rooms.slice(0,8).map((item) => { 
                            return <RoomsItem title={title} item={item} key={item.id} setSuccessPage={setSuccessPage} setCurrentTitle={setCurrentTitle} setCurrentItem={setCurrentItem} />
                        })
                    }
                </div>
            </div>
            : <QueryInfo title={currentTitle} room={currentItem.room}  doctor={currentItem.doctor}   querySucess={querySucess} successPage={successPage} setSuccessPage ={setSuccessPage}  setValueIsTrue={setValueIsTrue}  /> }
        </div>
        
    )
}

// const Success = ({title, item}) => {
//     // console.log('success',success) 
//     return (
//         <div className='yunyi-success bg-white'>{title}{item.room}{item.doctor}</div>
//     )
// }


const RoomsItem = ({title, item, setSuccessPage, setCurrentTitle, setCurrentItem}) => {

    let isNumTrue = item.allNum > item.currentNum;
    
    // const [itemCurrentNum, setItemCurrentNum] = useState(item.currentNum);
    
    const handleClick = (title,item) => {
        
        if(isNumTrue) {
            // setItemCurrentNum(item.currentNum+1);
            setSuccessPage(true)
            setCurrentTitle(title)
            setCurrentItem(item)
        }
        else return;

    }

    return(
        <div className='yunyi-select-cell mb-3 rounded-lg text-center yunyi-border-green border-3' >
            <div className='yunyi-bg-green text-white p-1'>{title}</div>
            <div className='container'>
                <div className="row row-cols-2">
                    <div className='yunyi-border-green col py-1'>{item.room}</div>
                    <div className='yunyi-border-green col py-1'>{item.doctor}</div>
                
                    <div className='col p-1 py-2'>
                        <img src={item.photo}  className='rounded-lg border yunyi-doctor ml-1' />
                    </div>

                    <div className='col p-1 py-2'>
                        <div className='yunyi-bg-green text-white rounded-top yunyi-hzdl py-2'>候诊队列</div>

                        <div className='h2 mb-0 py-2 yunyi-text-red yunyi-border-green'>{ isNumTrue ? item.currentNum +1 : '已满' }</div>


                        { isNumTrue ? <button className='btn yunyi-bg-blue text-white px-2 py-1 rounded-0 yunyi-border-green' onClick={()=>handleClick(title,item)}>点击报到</button> : <button className='btn yunyi-bg-blue text-white px-2 py-1 rounded-0 btn-secondary' disabled>点击报到</button>}
                    </div>

                </div>
            </div>
        </div>
    )
}


SelectDoctor.propTypes = {

}

export default SelectDoctor;

