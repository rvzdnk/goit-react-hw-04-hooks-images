import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

export const fetchImages = async (searchValue, page) => {
    try {
        const params = new URLSearchParams({
            key: "28306933-4038f820c251ef9eb8ffc5349",
            q: searchValue,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            per_page: 12,
            page,
        })

        const response = await axios.get(`?${params}`);
        return response.data;
    }
    catch (error) {
        console.log(`${error.name}: ${error.message}`);
    }
};



export default fetchImages;