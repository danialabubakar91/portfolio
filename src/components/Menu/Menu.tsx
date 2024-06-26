
import React from 'react'

interface Props {
    children : React.ReactNode;
    shalin: string
}


const Menu:React.FC<Props> = ({children,shalin}:Props) => {
    return(
        <div>
            <h1>{shalin}</h1>
            {children}
        </div>
    )
}

export default Menu;

// import React from 'react'

// type Props = {
//     children: React.ReactNode;
//     shalin: string
// }


// const Menu:React.FC<Props> = (props: Props) => {
//     return(
//         <div>
//             <h1>{props.shalin}</h1>
//             {props.children}
//         </div>
//     )
// }

// export default Menu;