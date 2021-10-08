import React ,{useEffect, useState} from "react";
import axios from "axios";

const ComA=()=>{
    const [num, setNum] = useState();
    const [name, setName]=useState();

    const[moves,setMoves]=useState();



    useEffect(()=>{
        // alert("hi");

        async function getData(){
            const res=await axios.get(` https://pokeapi.co/api/v2/pokemon/${num}`);
            // console.log(res);
            console.log(res.data);
            setName(res.data.name);
            setMoves(res.data.moves.length);
            // const  res = await axios


        }
        getData();
    });


    return(
        <>

        <h1>You choose <span style={{color:'red'}}>{num}value</span></h1>
        <h1>My name is <span style={{color:'red'}}>{name} this</span></h1>
        <h1>i have<span style={{color:'red'}}> {moves} moves</span></h1>

        <select value={num} onChange={(event)=>{
            setNum(event.target.value);

        }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="6">6</option>
        </select>
        </>
    )

}
export default ComA;