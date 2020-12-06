import { useEffect, useState } from 'react';

const useSize = () => {

    const [size, setSize] = useState({
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
    })

    const onResize = () => {
        setSize({
            height: document.documentElement.clientHeight,
            width: document.documentElement.clientWidth,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', onResize, false);
        return () => {
            window.removeEventListener('resize', onResize, false);
        }
    }, [])
    const sizeHeight = size.height;
    const sizeWidth = size.width;
    return { sizeHeight, sizeWidth }

}
export default useSize;