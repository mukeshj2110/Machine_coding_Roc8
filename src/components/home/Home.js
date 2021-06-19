import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React, { useEffect , useState } from 'react';
import Product from '../product/Product'
import './home.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const Home =() =>{

    const [content , setContent] = useState([]);
    const [val , setVal] = useState(0);
    const [gender, setGender] = useState(3);

    const getData =()=>{
        fetch('./data.json'
        ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }
        )
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            setContent(data.products)
        })
    }

  
   
    const handleSort =(e, newValue )=>{
        setVal(newValue);
        if(newValue ===0){
            fetch('./data.json'
            ,{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
              }
            )
            .then(function(resp){
                return resp.json();
            })
            .then(function(data){
                setContent(data.products)
            })
        }else if(newValue === 1){
            setContent(content.sort((a,b)=>a.price - b.price));
        }else if(newValue === 2){
            setContent(content.sort((a,b)=>b.price - a.price));
        }
    }

    const handleGender =(e)=>{
        setGender(e.target.value);
        if(gender ===0){
        //    setContent(content.filter((a)=>a.gender.includes(e.target.value)))
        //    console.log(content);
        }else if(gender === 1){
           
        }else if(gender === 2){
            
        }
    }

    useEffect(()=>{
        getData();
    },[]);
    return(
        <div className="home_container">
            <Tabs value={val} indicatorColor="primary" textColor="primary"
                onChange={handleSort}
            >
                <Tab style={{width: "10%"}} label="SortBy-UnSort"></Tab>
                <Tab style={{width: "10%"}} label="Price-Low to High" ></Tab>
                <Tab style={{width: "10%"}} label="Price-High to Low"></Tab>
            </Tabs>

        <FormControl>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          onChange={handleGender}
        >
          <MenuItem value={0}>Male</MenuItem>
          <MenuItem value={1}>Female</MenuItem>
          <MenuItem value={2}>None</MenuItem>
        </Select>
      </FormControl>

        <div className="home">
            {
                content &&
                content.map((c)=>(
                    <div className="home_row">
                    <Product key={c.id} name={c.name}
                    brand={c.brand}
                    id={c.id}
                    img={c.img_src} price={c.price}
                    />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Home;