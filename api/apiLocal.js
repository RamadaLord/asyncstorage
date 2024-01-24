import axios from "axios";

const apiLocal = axios.create({
    baseUrl:
        "http://10.152.46.27:3333"
    
})

export default apiLocal