import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid ms-5 ps-5">
				<div className="logo text-white">
					<p className="my-0">STAR</p>
					<span>WARS</span>
				</div>
				<div className="favorites btn-group me-5">
					<button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul class="dropdown-menu dropdown-menu-end">
						{store.favorites.map((favorite, index) => {
							return (
								<div key={index}>
									<div className="d-flex justify-content-between">
										<p className="text-dark m-2">{favorite.name}</p>
										<button className="btn btn-outline-light text-dark" onClick={() => { actions.deleteFavorite(favorite) }}><i class="fa-solid fa-trash"></i></button>
									</div>
								</div>
							)
						})}
					</ul>
				</div>
			</div>
		</nav >
	);
};

