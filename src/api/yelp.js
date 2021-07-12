import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
            'Bearer JMd6iHcDvem3w0raXGfFMZBctfuBwTggJcdF8ufu2RvyUn_5tiP_wiebjkLHOmMl4BzHQe7cyWz9PMaf-4u7dyzABjlFrXfGyHl2_pkRPh-sOYfjn0B-wguOgF_hYHYx'
    }
});