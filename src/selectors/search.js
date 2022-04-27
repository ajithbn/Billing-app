export const filterBySearch = (data, searchTerm, key) => {
    let result = []
    if(key === 'customers') {
        result = data.filter(customer => {
            return customer.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
    } else if(key === 'products') {
        result = data.filter(product => {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
    }

    return result
}

export const getBillSearch = (customers, bills, searchTerm) => {
    let resultfinal = []
    const customerFilter = customers.filter((customer) => {
        return customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    customerFilter.forEach((customer) => {
        const result = bills.filter((bill) => {
            return bill.customer === customer._id
        })

        resultfinal = resultfinal.concat(result)
    })

    return resultfinal
}




