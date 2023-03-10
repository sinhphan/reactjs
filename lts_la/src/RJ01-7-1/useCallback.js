import {useState,useCallback,memo,useRef} from 'react'
import "./stopwatch.css"

/**
 *  Khi click và start:đồng hồ bắt đầu đếm, mỗi lần tăng lên 1s
 *  Khi click vào stop: đồng hồ dừng lại, và reset về 00:00
 *  Nâng cao:

 *  Giảm khoảng cách mỗi lần đếm là 0.1s (00:00:00)
 *  Đưa 2 button start và stop vào một component con
 *  Sử dụng HOC (hight-order component) memo và hook useCallback để tối ưu hóa, 
 *  tránh việc re-render lại 2 button không cần thiết mỗi lần đếm
 */

/**
 *!  1. create interface
 *!  2. create timer function from 0.01s 
 *!     after 1 reset timer an set second + 1
 *!      after second > 60 reset second to 0 
 *!      and minute + 1 
 *!  3. display time in interface
 *!  4. Đưa 2 button start và stop vào một component con
 *!      Sử dụng HOC (hight-order component) memo và hook useCallback để tối ưu hóa, 
 *!     tránh việc re-render lại 2 button không cần thiết mỗi lần đếm
 */ 

export default function StopWatch(){
    const [time,setTime] = useState({
        milisecond : 0,
        second : 0,
        minute : 0
    })
    const [start,setStart] = useState(false);

    /**
     *  if not use useRef every time StopWatch component re-render 
     *  will reset timerId to undefined 
     */
    let timerId = useRef();

    function timer(){
        // console.log('call timer');
        let milisecond = 0
        let second = 0
        let minute = 0

        return setInterval(()=>{  
            ++milisecond

            // reset milisecond and increase second
            if(milisecond >=100){
                ++second
                milisecond = 0
            }

            // reset second and increase minute
            if(second >=60){
                ++minute
                second = 0
            }

            setTime({
                milisecond:milisecond,
                second : second,
                minute : minute

            })
        },10);
    }

    const handleStart = useCallback(()=>{
        if(!start){
            timerId.current = timer()
            setStart(true)
            // console.log(timerId);
        }
    },[start])
    
    const handleStop = useCallback(()=>{
        if(start){
            clearInterval(timerId.current)
            setStart(false)
            // console.log(timerId);
        }
    },[start])
    


    return (<div style={{padding: 30}} className="stopwatch-wrap">
        <div className='stopwatch'>
                {time.minute <10 ? `0${time.minute}` : time.minute} : 
                {time.second <10 ? `0${time.second}` : time.second} : 
                {time.milisecond <10 ? `0${time.milisecond}` : time.milisecond}
        </div>
        <ControlButton onStart={handleStart} onStop={handleStop} status={start}/>
    </div>)
}

const ControlButton = memo(function ControlButton({onStart,onStop,status}){
    // console.log('Control button re-render');
    return (
        <div className='control-button'>
            <button onClick={onStart} disabled={status}>Start</button> 
            <button onClick={onStop} disabled ={!status}>Stop</button> 
        </div>
    )
})