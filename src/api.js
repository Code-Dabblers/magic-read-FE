import axios from "axios";

export default axios.create({
	baseURL: process.env.REACT_APP_API,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});
