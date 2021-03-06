export const getCustomerinfoById = (id, customersData) => {
    const result = customersData.find((customer) => {
        return customer._id === id
    })
    return result ? result : 'deleted customer'
}
export const getProductinfoById = (id, productData) => {
    const result = productData.find((product) => {
        return product._id === id
    })
    return result ? result : 'deleted product'
}
export const getBillinfoById = (id, billData) => {
    const result = billData.find((bill) => {
        return bill._id === id
    })
    return result ? result : 'deleted bill'
}