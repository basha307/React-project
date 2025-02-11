import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound(){

    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
        navigate("/Vegitable Items")
    },7000)}
    ,[])

return(
    <>
    <h3 style={{color:"green"}}>404 page NotFound</h3>
    <img style={{background:"blue"}} src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"></img>
    </>
    )
    }

export default NotFound;