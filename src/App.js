import { storage } from './firebase';
import { getDownloadURL, ref } from 'firebase/storage'
import { useState,useEffect } from 'react';
import { useUploadFile,useDownloadURL } from 'react-firebase-hooks/storage';
import Upload from './components/Upload/Upload'
import Copy from './components/Copy/Copy'
import Error from './components/Error/Error';
import { v4 } from "uuid"
import './App.css';
import Loading from './components/Loading/Loading';



function App() {
  const [uploadFile,uploading,error] = useUploadFile();
  const storageRef = ref(storage,`images/${v4()}`);
  const [selectedFile,setSelectedFile] = useState(null);
  const [imgURL,setImgURL] = useState('')


  useEffect(() => {
    upload();
  },[selectedFile])
  
  const upload = async () => {
    if(selectedFile !== null){
      const result = await uploadFile(storageRef,selectedFile,{
        contentType:'image/jpeg'
      })
    }
    const url = await getDownloadURL(storageRef)
    setImgURL(url)
    console.log(url)
  }
  
  if(selectedFile === null){
    return(
      <div className='App'>
        <Upload handleChange={(e) => {
             const file = e.target.files ? e.target.files[0] : undefined;
             setSelectedFile(file)}} dragEnter={(e) => e.preventDefault()}
             dragOver={(e) => e.preventDefault()} dragLeave={(e) => e.preventDefault()} dragDrop={(e) => {
              const newFile = e.target.files ? e.target.files[0] : undefined;
              selectedFile(newFile)
             }}/>
      </div>
    )
  }

  if(uploading){
    return (
      <div className='App'>
        <Loading/>
      </div>
    )
  }

  if(error){
    <div className='App'>
      <Error/>
    </div>
  }

  if(imgURL !== ''){
    return(
      <div className='App'>
        <Copy imageSrc={imgURL.slice(0,40)} copySrc={imgURL} handleClick={() => {navigator.clipboard.writeText(imgURL)}}/>
      </div> 
    )
  }

}

export default App;
