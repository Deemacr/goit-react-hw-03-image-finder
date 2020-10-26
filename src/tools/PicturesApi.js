import axios from "axios";

const fetchPicturesWithQuery = (searchQuery, page = 1) => {
	return axios
		.get(
			`https://pixabay.com/api/?key=18847688-8d11b7eecf2ca80c5f8524db0&q=${searchQuery}&image_type=photo&per_page=12&page=${page}`
		)
		.then((response) => response.data.hits);
};

export default {
	fetchPicturesWithQuery,
};
