import { useEffect, useState } from "react";

export const useFetchData = ({
    requestFn,
    dependecy=[]
}) =>{
    const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();



  useEffect(()=>{

    const fetchData = async () =>{
      setLoading(true)
      try{
        const res = await requestFn();
        setData(res.data)
      }catch(err){
        setError(err)
      }finally{
        setLoading(false)
      }
    }
    fetchData()

  },[...dependecy])



  return {data, loading, error}
}
 
