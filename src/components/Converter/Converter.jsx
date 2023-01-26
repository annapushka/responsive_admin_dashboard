import React, { useState, useEffect } from 'react';
import axios from "axios";
import arrow from "../../img/arrow.svg";
import useReactIpLocation from "react-ip-details";

import './Converter.scss';

function Converter() {
    const { currency } = useReactIpLocation({});
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("USD");
    const [output, setOutput] = useState(0);
    const [currencyList, setCurrency] = useState([]);
    const [rates, setRates] = useState([]);


    useEffect(() => {
        setFrom(currency);
    }, [currency]);

    useEffect(() => {
        loadData();
    }, [from, to, input]);

    const loadData = () => {
        const options = {
            method: 'GET',
            url: 'https://exchangerate-api.p.rapidapi.com/rapid/latest/USD',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_YT,
                'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setCurrency(Object.keys(response.data.rates));
            setRates(response.data.rates);
            calculateResult(from, to, input);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const handleChangeFrom = (e) => setFrom(e.target.value);

    const handleChangeTo = (e) => setTo(e.target.value);

    const flip = () => {
        var temp = from;
        setFrom(to);
        setTo(temp);
    }

    const calculateResult = (from, to, input) => {
        const result = (rates[to] / rates[from]) * input;
        setOutput((isNaN(result) || result < 0) ? 0 : result.toFixed(3));
    }


    return (
        <div className='converter'>
            <div className="converter__wrapper">
                <input type="number"
                    className="converter__input"
                    placeholder="Amount"
                    min={0}
                    onChange={(e) => setInput(+e.target.value)} />
                <div className="converter__currency">
                    <select value={from} onChange={handleChangeFrom} className='currency'>
                        {currencyList.map((currency, index) =>
                            <option key={index} value={currency}>{currency}</option>)}
                    </select>
                    <button className='converter__switch' onClick={() => { flip() }}>
                        <img src={arrow} alt="switch" />
                    </button>
                    <select value={to} onChange={handleChangeTo} className='currency'>
                        {currencyList.map((currency, index) =>
                            <option key={index} value={currency}>{currency}</option>)}
                    </select>
                </div>
            </div>
            <div className="converter__output">
                <p className="converter__from">{input} {from} =</p>
                <p className="converter__to">{output} {to}</p>
            </div>
        </div>
    );
}

export default Converter;