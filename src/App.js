import React,{useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const App=() =>{
    const alanKey= 'b7d99b9ac87352fca22cbccb2616d7102e956eca572e1d8b807a3e2338fdd0dc/stage' ;
    // const news_api = 'b7b9c12d0895497db418e32bfe232089';
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command ,articles}) => {
                if (command === 'newsheadline') {
                    console.log(articles);
                }
            }
        })
    }, [])
    return (
        <div className="app">
            <h1>ALAN NEWS APP</h1>
        </div>
    )
};

export default  App;
