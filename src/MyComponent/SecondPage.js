import React from 'react';
import './style.css';

// for temporary basis we have taken options of travelling and distance
function SecondPage({ handlePageChange2, meansOfTravel, distance }) {
    let options = ['No Options Available'];

    if (meansOfTravel === 'Own Car') {
        if (distance === '< 5 km') {
            options = ['Drive myself', 'Call a friend for a ride'];
        } else if (distance === '5 - 10 km') {
            options = ['Drive myself', 'Call a friend for a ride', 'Take a taxi', 'Use a ride-sharing app'];
        } else if (distance === '10 - 15 km') {
            options = ['Drive myself', 'Call a friend for a ride', 'Take a bus', 'Take a train', 'Take a flight'];
        } else
        {options = ['All options Available'];}
    } else if ( meansOfTravel  === 'Bus') {
        if (distance === '< 5 km') {
            options = ['Take a bus', 'Take a train'];
        } else if (distance === '5 - 10 km') {
            options = ['Take a bus', 'Take a train', 'Take a taxi', 'Use a ride-sharing app'];
        } else if (distance === '10 - 15 km') {
            options = ['Take a train', 'Take a flight'];
        } else
            {options = ['All options Available'];}

    }
     else if (meansOfTravel === 'Bicycle') {
        if (distance === '< 5 km') {
            options = ['Ride my own bike', 'Rent a bike'];
        } else if (distance === '5 - 10 km') {
            options = ['Ride my own bike', 'Rent a bike', 'Take a taxi', 'Use a ride-sharing app'];
        } else if (distance === '10 - 15 km') {
            options = ['Take a train with my bike', 'Take a flight with my bike'];
        } else
        {options = ['All options Available'];}
    }
    else if (meansOfTravel === 'Metro') {
        if (distance === '< 5 km') {
            options = ['Ride my own bike', 'Rent a bike', 'No Metro'];
        } else if (distance === '5 - 10 km') {
            options = ['Ride my own bike', 'Rent a bike', 'Take a taxi', 'Use a ride-sharing app'];
        } else if (distance === '10 - 15 km') {
            options = ['Take a train with my bike', 'Take a flight with my bike'];
        } else
            options = ['All options Available'];
    }
    else if (meansOfTravel === 'App based ride hailing cab services including Ola / Uber') {
        if (distance === '< 5 km') {
            options = ['Rent a bike'];
        } else if (distance === '5 - 10 km') {
            options = ['Ride my own bike', 'Rent a bike', 'Take a taxi', 'Use a ride-sharing app'];
        } else if (distance === '10 - 15 km') {
            options = ['Take a train with my bike', 'Take a taxi with my bike'];
        } else
        {options = ['All options Available'];}
    }
    else if (meansOfTravel === 'Own Two-wheeler') {
        if (distance === '< 5 km') {
            options = ['Ride my own bike', 'Rent a bike'];
        } else if (distance === '5 - 10 km') {
            options = ['Ride my own bike', 'Rent a bike', 'Take a taxi', 'Use a ride-sharing app'];
        } else if (distance === '10 - 15 km') {
            options = ['Take a train with my bike', 'Take a flight with my bike'];
        } else
        {options = ['All options Available'];}
    } 
    else if ({ meansOfTravel } === 'Auto') {
        if (distance === '< 5 km') {
            options = ['Ride my own bike', 'Rent a bike'];
        } else if (distance === '5 - 10 km') {
            options = ['Ride my own bike', 'Rent a bike', 'Take a taxi', 'Use a ride-sharing app'];
        } else if (distance === '10 - 15 km') {
            options = ['Take a train with my bike', 'Take a flight with my bike'];
        } else
        {options = ['All options Available'];}
    }
    
    const handleSubmit1 = (event) => {
        event.preventDefault();
        handlePageChange2();
    };

    return (
        <div className="container jumbotron my-5 ">
            <div className='option'>
                <h2>Means of Travel: {meansOfTravel}</h2>
                <h2>Distance: {distance} </h2>
                <h2>Options:  </h2>
                <ul>
                    {options.map((option, index) => (
                        <li key={index}>
                            <p>{option}</p>
                        </li>
                    ))}
                </ul>

            </div>

            <form onSubmit={handleSubmit1} className='my-4'>
                <button type="submit">Go Back</button>
            </form>

        </div>
    );
}

export default SecondPage;