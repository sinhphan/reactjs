import { useEffect,useState } from "react";

export default function ChangeAvatar(){
    const [avatar, setAvatar] = useState()

    function handleChangeAvatar(e){
        // get file from input
        const file = e.target.files[0]

        // create a fake url for file 
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    useEffect(()=>{
        return ()=>{
            // delete file in memory
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])


    return (
        <div>   
            <input 
                type={'file'} 
                onChange={handleChangeAvatar}
            />
            {avatar && (<img src={avatar.preview}  width="80%"/>)}
        </div>
    )
}