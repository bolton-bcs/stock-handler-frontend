import axios from "../axios";

class ProductService {
    postProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('product', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }
}

export default new ProductService();