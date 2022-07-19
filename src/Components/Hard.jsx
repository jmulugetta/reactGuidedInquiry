import React from "react";
import Personal from "./Medium";

const Peeps = () => {
    const theirBusiness = [

        {name: "Jubilee",
        age: "23",
        dateOfBirth: "02/20/2003",
        number: "704-123-4567",
        },

        {name: "Sarah",
        age: "20",
        dateOfBirth: "04/12/1999",
        number:"704-123-4567",
        },

        {name: "Rachael",
        age: "23",
        dateOfBirth: "12/15/1997",
        number: "704-123-4567",
        },

        {name: "Peter",
        age: "24",
        dateOfBirth: "09/18/1996",
        number:"704-123-4567",
        }

    ]; 

    return (
        <div className="List">
            {theirBusiness.map((info) => (
                <Personal 
                    name={info.name} 
                    age={info.age} 
                    dateOfBirth={info.dateOfBirth} 
                    number={info.number} 
                />
            ))}
        </div>
    );

};

export default Peeps;