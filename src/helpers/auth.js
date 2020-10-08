import axios from "../api";

export const signup = (user) => {
	return axios
		.post("/signup", JSON.stringify(user))
		.then((res /* {name, email, _id} = user */) => {
			return res.json();
		})
		.catch((err) => {
			throw new Error(err);
		});
};

export const signin = (user) => {
	return axios
		.post("/signin", JSON.stringify(user))
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			throw new Error(err);
		});
};

export const authenticate = (data, next) => {
	if (typeof window !== "undefined") {
		localStorage.setItem("jwt", JSON.stringify(data));
		next();
	}
};

export const signout = (next) => {
	if (typeof window !== "undefined") {
		localStorage.removeItem("jwt");
		next();

		return axios
			.get(`/signout`)
			.then((res) => console.log("Signout successful"))
			.catch((err) => console.log(err));
	}
};

export const isAuthenticated = () => {
	if (typeof window == "undefined") {
		return false;
	}
	if (localStorage.getItem("jwt")) {
		return JSON.parse(localStorage.getItem("jwt"));
	} else {
		return false;
	}
};
