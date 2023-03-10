import {useState,useEffect} from 'react';

/**
 * 
 * @returns 
 *! function setState Có thể nhận đc đối số là một callback nhận đc giá trị của state
 * 
 * ! alway clear timeout , interval , asyn , listiener Event subcribe event... when not use or component unmount 
 */

export default function CountDown(){
    const [countDown, SetCountDown] = useState(180)

    // useEffect(()=>{
    //     const timerId = setInterval(() => {SetCountDown(pre=>pre-1)}, 1000)
    //     return ()=> clearInterval(timerId)
    // }
    // ,[])

    useEffect(()=>{
        const timerId = setTimeout(() => {
            SetCountDown(countDown -1)
            console.log('CountDown....');
        }, 1000)

        return ()=> clearTimeout(timerId)
    }
    ,[countDown])


    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )
}