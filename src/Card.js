import React from "react";

export default function Card (props) {
    const {image ,title} =props;
    return(
        <div className="w-2xs rounded-3xl border-red-800 bg-slate-300 p-4 m-10 text-center ">
            <h2 className="text-2xl text-slate-800 ">{title}</h2> 
            <img src={image} alt="Image" className="rounded-2xl"/>
        </div>
    )
}