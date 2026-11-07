import React from 'react'

export default function CategoryItem(props) {
    return <>
        <div>{props.categoryObj.label}</div>
        <img src={props.categoryObj.img_url} alt="" style={{width:"60px",height:"60px"}} />
    </>
}
