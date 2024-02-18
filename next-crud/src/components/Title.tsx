import * as React from 'react'

export default function Title(props: any){
    return(
        <div className={`
        flex
        flex-col
        justify-center
        `}>
            <h1 className='px-4 py-1 text-2xl'>{props.children}
                <hr className='border-2 border-blue-600' />
            </h1>
        </div>
    )
}