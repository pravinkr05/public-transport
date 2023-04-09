
import React, { useState } from 'react';
import './style.css';

function HomePage({ handlePageChange }) {
    const [meansOfTravel, setMeansOfTravel] = useState('');
    const [distance, setDistance] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handlePageChange(meansOfTravel, distance);
    };

    return (

        <div className="container jumbotron ">
            {/* Preparing a form of Q1 and Q2 and their optiond  */}
            <h1>Respondent Travel Profile</h1>
            <form onSubmit={handleSubmit}>
                <label className='option'>
                    {/* Q1 */}
                    <span className='text'>
                        What is your most frequently used means of travel from your home to work location?</span>
                    <br />
                    <input type="radio" name="meansOfTravel" value="Bus" onChange={(event) => setMeansOfTravel(event.target.value)} /> Bus
                    <br />
                    <input type="radio" name="meansOfTravel" value="Metro" onChange={(event) => setMeansOfTravel(event.target.value)} /> Metro
                    <br />
                    <input type="radio" name="meansOfTravel" value="Own Two-wheeler" onChange={(event) => setMeansOfTravel(event.target.value)} /> Own Two-wheeler
                    <br />
                    <input type="radio" name="meansOfTravel" value="Own Car" onChange={(event) => setMeansOfTravel(event.target.value)} /> Own Car
                    <br />
                    <input type="radio" name="meansOfTravel" value="Walk / Bicycle" onChange={(event) => setMeansOfTravel(event.target.value)} /> Walk / Bicycle
                    <br />
                    <input type="radio" name="meansOfTravel" value="Auto" onChange={(event) => setMeansOfTravel(event.target.value)} /> Auto
                    <br />
                    <input type="radio" name="meansOfTravel" value="App based ride hailing cab services including Ola / Uber" onChange={(event) => setMeansOfTravel(event.target.value)} /> App based ride hailing cab services including Ola / Uber
                    <br />
                </label>

                <span className='text-dark'> <hr /></span>
{/* Q2 */}
                <label className='option'>
                    <span className='text'>
                        What is the total distance between your home and workplace?</span>
                    <br />
                    <input type="radio" name="distance" value="< 5 km" onChange={(event) => setDistance(event.target.value)} />{' < 5 km'}
                    <br />
                    <input type="radio" name="distance" value="5 - 10 km" onChange={(event) => setDistance(event.target.value)} />{' 5 - 10 km'}
                    <br />
                    <input type="radio" name="distance" value="10 - 15 km" onChange={(event) => setDistance(event.target.value)} />{' 10 - 15 km'}
                    <br />
                    <input type="radio" name="distance" value="15 - 20 km" onChange={(event) => setDistance(event.target.value)} />{' 15 - 20 km'}
                    <br />
                    <input type="radio" name="distance" value="20 - 25 km" onChange={(event) => setDistance(event.target.value)} />{' 20 - 25 km'}
                    <br />
                    <input type="radio" name="distance" value="> 25 km" onChange={(event) => setDistance(event.target.value)} />{' > 25 km'}
                    <br />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default HomePage;
