import React from 'react';
import s from './Textarea.module.css'



export const Textarea = ({ input, meta, ...props}: any) => {
    const haseError = meta.touched && meta.error
    return (
        <div >
            {haseError && <span className={s.errText}>{meta.error}</span>}
            <div>
                {/*@ts-ignore*/}
                <textarea className={haseError ? s.textArea + ' ' + s.error : s.textArea} {...input} {...props}/>
            </div>
        </div>
    );
};


export const Input = ({ input, meta, ...props}: any) => {
    const haseError = meta.touched && meta.error
    return (
        <div >
            {haseError && <span className={s.errText}>{meta.error}</span>}
            <div>
                {/*@ts-ignore*/}
                <input className={haseError ? s.textArea + ' ' + s.error : s.textArea} {...input} {...props}/>
            </div>
        </div>
    );
};

