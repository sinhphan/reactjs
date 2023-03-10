import {useState,useEffect} from 'react';

export default function MountedAndUnMounted(){
    const [show,setShow] = useState(false);

    return (
        <div style={{padding: 20}}>
            <button onClick={()=> setShow(!show)}>Toggle</button>
            {show && <Content/>}
        </div>
    );
}



const tabs = ['posts','comments','albums']

function Content(){
    const [text, setText] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    console.log(type)
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts=>{
                setPosts(posts)
            })
    },[type]);

    return (<>
        <div><input onChange={(e)=>setText(e.target.value)}/></div>
        <div>
            {tabs.map(tab=>
            <button 
                key={tab}
                onClick={()=>setType(tab)}
                style={tab === type ? {backgroundColor : '#333', color: '#fff'}:{}}
            >
            {tab}
            </button>)}
        </div>
        <ul>
            {posts.map(e=>
            <li key={e.id}>
                {e.title || e.name}
            </li>)}
        </ul>
    </>)
}