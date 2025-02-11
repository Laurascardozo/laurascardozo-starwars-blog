import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom"



export const StarshipDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [starship, setStarship] = useState({});

    useEffect(() => {
        if (params.id && store.starships.length > 0) {
            const currentStarship = store.starships.find(item => params.id == item.url.split("/")[5])
            console.log(currentStarship)
            setStarship(currentStarship)
        }
    }, [params.id, store.starships, starship])
    return (
        <div>
            {Object.keys(starship).length > 0 ?
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-start">
                            <div className="ms-5 mt-5">
                                <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.url.split("/")[5]}.jpg`} onError={(e) => e.target.src = "https://static.wikia.nocookie.net/star-warsrata/images/9/98/Caza-estelar-jedi.jpg/revision/latest?cb=20180327221152&path-prefix=es"} className="card-img-top" alt="..." />
                            </div>
                            <div className="ms-5 mt-4">
                                <h1 className="text-light">{starship.name}</h1>
                                <h2 className="text-light">Model: {starship.model}</h2>
                                <h2 className="text-light">Length: {starship.length}</h2>
                                <h2 className="text-light">Cargo capacity: {starship.cargo_capacity}</h2>
                                <h2 className="text-light">Consumables: {starship.consumables}</h2>
                                <h2 className="text-light">Starship class: {starship.starship_class}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 d-flex justify-content-center">
                        <Link to="/" className="btn btn-primary" >Go back</Link>
                    </div>
                </div>

                :
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light mx-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

        </div>

    )
};

