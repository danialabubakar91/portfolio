import {useState} from 'react';

const useToggle = ():[boolean, ()=>void] => {
    
    const [on, setOn] = useState(true);

    const toggle = () => {
        setOn( (prevState) => {
            return !prevState
        })
    }

    return [on, toggle];
}

export default useToggle;