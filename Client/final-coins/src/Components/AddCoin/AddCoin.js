import React, {useState} from "react";
import {EditLeft, EditMain, EditMid, EditRight} from "../EditCoin/EditCoinStyle";
import {ControlButtons} from "../AdminPanel/adminStyles";
import {Link} from "react-router-dom";


const AddCoin = () =>{
    const [name, setName] = useState("");
    const [face, setFace] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [country, setCountry] = useState("");
    const [metal, setMetal] = useState("");
    const [short, setShort] = useState("");
    const [long, setLong] = useState("");
    const [quality, setQuality] = useState("");
    const [weight, setWeight] = useState("");
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const [type, setType] = useState("");

    const addHandler = (e)=>{
        e.preventDefault();
        if(name!=='' && face!=='' && year!=='' && price!=='' && country!=='' && metal!=='' && short!=='' && long!=='' && quality!=='' && weight!=='' && front!=='' && back!=='' ) {
            fetch(`/add`, {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    denomination: face,
                    date: year,
                    price: price,
                    country: country,
                    composition: metal,
                    short: short,
                    information: long,
                    quality: quality,
                    weight: weight,
                    imgFrontUrl: front,
                    imgBackUrl: back,
                    type: type
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
        else{
            alert('Fill all fields')
        }
    };
  return(
      <EditMain>
          <EditLeft>
              <p>Coin name</p>
              <input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  placeholder={'Coin name'}
              />
              <p>Face value</p>
              <input
                  type="text"
                  onChange={(event) => setFace(event.target.value)}
                  value={face}
                  placeholder={'Face value'}
              />
              <p>Year of issue</p>
              <input
                  type="text"
                  onChange={(event) => setYear(event.target.value)}
                  value={year}
                  placeholder={'Year of issue'}
              />
              <p>Price</p>
              <input
                  type="text"
                  onChange={(event) => setPrice(event.target.value)}
                  value={price}
                  placeholder={'Price'}
              />
              <p>Country</p>
              <input
                  type="text"
                  onChange={(event) => setCountry(event.target.value)}
                  value={country}
                  placeholder={'Country'}
              />
              <p>Metal</p>
              <input
                  type="text"
                  onChange={(event) => setMetal(event.target.value)}
                  value={metal}
                  placeholder={'Metal'}
              />
          </EditLeft>
          <EditMid>
              <p>Short description</p>
              <textarea
                  cols="30"
                  rows="10"
                  onChange={(event) => setShort(event.target.value)}
                  value={short}
                  placeholder={'Short description'}
              />
              <p>Long description</p>
              <textarea
                  cols="30"
                  rows="10"
                  onChange={(event) => setLong(event.target.value)}
                  value={long}
                  placeholder={'Long description'}
              />
              <p>Quality of the coin</p>
              <input
                  type="text"
                  onChange={(event) => setQuality(event.target.value)}
                  value={quality}
                  placeholder={'Quality of the coin'}
              />
              <p>Weight</p>
              <input
                  type="text"
                  onChange={(event) => setWeight(event.target.value)}
                  value={weight}
                  placeholder={'Weight'}
              />
          </EditMid>
          <EditRight>
              <p>Type</p>
              <select onChange={(event) => setType(event.target.value)} value={type} >
                  <option value="Investment">Investment</option>
                  <option value="Exclusive">Exclusive</option>
                  <option value="Investment">Memorable</option>
              </select>
              <p>Link to obverse image</p>
              <input
                  type="text"
                  onChange={(event) => setFront(event.target.value)}
                  value={front}
                  placeholder={'Link to obverse image'}
              />
              <p>Link to reverse image</p>
              <input
                  type="text"
                  onChange={(event) => setBack(event.target.value)}
                  value={back}
                  placeholder={'Link to reverse image'}
              />
              <ControlButtons className={"editButtons"}>
                  <a href=" #" onClick={addHandler} >Add</a>
                  <Link to={'/adminPanel'}>Cancel</Link>
              </ControlButtons>
          </EditRight>
      </EditMain>
  )
};
export default AddCoin;