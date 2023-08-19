import axios from "../axios";

class SupplierService {
    postSupplier = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('supplier', data)    // 20s
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

export default new SupplierService();