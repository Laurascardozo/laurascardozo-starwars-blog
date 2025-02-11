import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom"


export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.people)
	return (
		<div className="container">
			<div>
				<h1 className="characters text-light mt-5 ">Characters:</h1>
				<div className="row flex-nowrap overflow-auto">
					{store.people.map((result) => {
						return (
							<div className="col-4"
								style={{ flex: "0 0 auto", maxWidth: "35%", }}>
								<div className="card bgc">
									<div>
										<div className="image">
											<img src={`https://starwars-visualguide.com/assets/img/characters/${result.url.split("/")[5]}.jpg`} onError={(e) => e.target.src = "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/12/star-wars-scaled.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1"} className="card-img-top" alt="..." />
										</div>
									</div>
									<div className="card-body" key={result.url.split("/")[5]}>
										<h5 className="card-title text-light">{result.name}</h5>
										<div className="d-flex justify-content-between">
											<Link to={`/character/${result.url.split("/")[5]}`} className="btn btn-outline-light">More information</Link>
											<button className="btn btn-outline-light" onClick={() => actions.addFavorites(result.url.split("/")[5], result.name)}>
												<i className="fas fa-heart"></i>
											</button>
										</div>

									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className="mt-5">
				<h1 className="planets text-light">Planets:</h1>
				<div className="row flex-nowrap overflow-auto">
					{store.planets.map((result) => {
						return (
							<div className="col-4"
								style={{ flex: "0 0 auto", maxWidth: "35%" }}>
								<div className="card bgc">
									<img src={`https://starwars-visualguide.com/assets/img/planets/${result.url.split("/")[5]}.jpg`} onError={(e) => e.target.src = "https://media.es.wired.com/photos/65d3a691d5395740395ba76e/16:9/w_3744,h_2106,c_limit/Pluto%CC%81n%20(1).jpg"} className="card-img-top" alt="..." />
									<div className="card-body" key={result.url.split("/")[5]}>
										<h5 className="card-title text-light">{result.name}</h5>
										<div className="d-flex justify-content-between">
											<Link to={`/planet/${result.url.split("/")[5]}`} className="btn btn-outline-light">More information</Link>
											<button className="btn btn-outline-light" onClick={() => actions.addFavorites(result.url.split("/")[5], result.name)}>
												<i className="fas fa-heart"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div>
				<h1 className="starships text-light mt-5 ">Starships:</h1>
				<div className="row flex-nowrap overflow-auto">
					{store.starships.map((result) => {
						return (
							<div className="col-4"
								style={{ flex: "0 0 auto", maxWidth: "35%", }}>
								<div className="card bgc">
									<div>
										<div className="image">
											<img src={`https://starwars-visualguide.com/assets/img/starships/${result.url.split("/")[5]}.jpg`} onError={(e) => e.target.src = "https://static.wikia.nocookie.net/star-warsrata/images/9/98/Caza-estelar-jedi.jpg/revision/latest?cb=20180327221152&path-prefix=es"} className="card-img-top" alt="..." />
										</div>
									</div>
									<div className="card-body" key={result.url.split("/")[5]}>
										<h5 className="card-title text-light">{result.name}</h5>
										<div className="d-flex justify-content-between">
											<Link to={`/starship/${result.url.split("/")[5]}`} className="btn btn-outline-light">More information</Link>
											<button className="btn btn-outline-light" onClick={() => actions.addFavorites(result.url.split("/")[5], result.name)}>
												<i className="fas fa-heart"></i>
											</button>
										</div>

									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
};
