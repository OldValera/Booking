import React from 'react'
import './header.css'
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';



export const Header = ({ type }) => {
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }])

    const [destination, setDestination] = useState(false);
    const [OpenDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 2,
    });


    const bebra = {
        bebra: 1,
        vebra: 2
    };





    const handleOption = (name, operation) => {

        setOptions(prev => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1

            }

        })
    }
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } })
    }






    return (
        <div className='header'>
            <div className={type == 'list' ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>

                {type !== 'list' &&
                    <>
                        <h1 className='headerTitle'> A lifeTime of disCounts? its Genius.</h1>
                        <p className='headerDesc'>Get rewarded for your travels - unlock instant saving of 10% or with  a free Lamabooking account </p>
                        <button className='headerBtn'> sign In /Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input onChange={e => setDestination(e.target.value)} type="text"
                                    placeholder='Where are you going?'
                                    className='HeaderSearchInput' />p
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenDate(!OpenDate)} className='headerSearchText'> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MMM/dd/yyyy")}`}</span>
                                {OpenDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                    minDate={new Date()}
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} - adult ${options.children} - children ${options.room} - room `} </span>
                                {openOptions &&
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")} className="optionCounterButton">-</button>
                                                <span className="optionCounterNumber">{options.adult}</span>
                                                <button onClick={() => handleOption("adult", "i")} className="optionCounterButton">+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">children</span>
                                            <div className="optionCounter">
                                                <button disabled={options.children <= 1} onClick={() => handleOption("children", "d")} className="optionCounterButton">-</button>
                                                <span className="optionCounterNumber">{options.children}</span>
                                                <button onClick={() => handleOption("children", "i")} className="optionCounterButton">+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">room</span>
                                            <div className="optionCounter">
                                                <button disabled={options.room <= 1} onClick={() => handleOption("room", "d")} className="optionCounterButton">-</button>
                                                <span className="optionCounterNumber">{options.room}</span>
                                                <button onClick={() => handleOption("room", "i")} className="optionCounterButton">+</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="headerSearchItem">
                                <button onClick={() => handleSearch()} className='headerBtn'>Search</button>
                            </div>

                        </div>
                    </>
                }

            </div>
        </div>

    )
}
