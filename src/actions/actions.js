import axios from '../config/axios'

export const asyncAddUser = (formData, redirect) => {
    return (dispatch) => {
        axios.post('/users/register', formData)
            .then((response) => {
                const result = response.data
                if(result.hasOwnProperty('errors')) {
                } else {
                    alert('Successfully Registered')
                    dispatch(addUser(result))
                    redirect()
                }
                
            }).catch((err) => {
                alert(err.message)
            })
    }
}
export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export const asyncLoginUser = (formData, redirect) => {
    return (dispatch) => {
        axios.post('/users/login', formData)
        .then((res) => {
            const result = res.data
            
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            } else {
                //alert("successfully Logged In")
                localStorage.setItem('token', result.token)
                redirect()
                dispatch(setCurrentUser());
            }
        }).catch((err) => {
            alert(err.message)
        })
    }
}
export const  setCurrentUser = () => {
    return {
        type: 'SET_CURRENT_USER'
    }
}

//user logout

export const userLogout = () => {
    localStorage.removeItem('token')
    return {
        type: 'USER_LOGOUT',

    }
}

//GET PROFILE
export const asyncGetProfile = () => {
    return (dispatch) => {
        axios.get('/users/account', {
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                const result = res.data
                dispatch(setProfile(result))
            }).catch((err) => {
                alert(err.message)
            })  
    }
}
const setProfile = (user) => {
    return {
        type: 'SET_PROFILE',
        payload: user
    }
}

//GET CUstomer 

export const asyncGetCustomer = () => {
    return (dispatch) => {
        axios.get('/customers', {
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                const result = res.data
                dispatch(getCustomers(result))
                dispatch(customerToggleLoading())
            }).catch((err) => {
                alert(err.message)
            })

    }
}

export const getCustomers = (customers) => {
    return {
        type: 'GET_CUSTOMERS',
        payload: customers
    }
}

//Add Customer
export const asyncAddCustomer = (formData, togglePopup) => {
    return (dispatch) => {
        axios.post('/customers', formData, {
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')) {
                    alert('server', result.errors)
                } else {
                    dispatch(addCustomer(result))
                    togglePopup()
                }
                
            }).catch((err) => {
                alert(err.message)
            })
    }
}
export const addCustomer = (customer) => {
    return {
        type: 'ADD_CUSTOMER',
        payload: customer
    }
}

//Delete Customer
export const asyncDeleteCustomer = (id) => {
    return (dispatch) => {
        const confirmDelete = window.confirm('Are you sure Want to Delete?')
        if(confirmDelete) {
            axios.delete(`/customers/${id}`, {
                headers : {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                const result = res.data
                dispatch(deleteCustomer(result._id))
    
            }).catch((err) => {
                alert(err.message)
            })
        }
        
    }
}

export const deleteCustomer = (id) => {
    return {
        type: 'DELETE_CUSTOMER',
        payload: id
    }
}

//EDIT Customer

export const asyncEditCustomer = (formData, id, togglePopup) => {

    return (dispatch) => {
        axios.put(`/customers/${id}`, formData, {
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            const result = res.data
            dispatch(updateCustomer(result))
            togglePopup()
        }).catch((err) => {
            alert(err.message)
        })
    }
    //alert(id)
    
}

export const updateCustomer = (customer) => {
    return {
        type: 'UPDATE_CUSTOMER',
        payload: customer
    }
}

//GET PRODUCTS
export const asyncGetProducts = () => {
    return (dispatch) => {
        axios.get('/products', {
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                const result = res.data
                dispatch(getProducts(result))
            }).catch((err) => {
                alert(err.message)
            })

    }
}

export const getProducts = (products) => {
    return {
        type: 'GET_PRODUCTS',
        payload: products
    }
}

//Add Product

export const asyncAddProduct = (formData, togglePopup) => {
    return (dispatch) => {
        axios.post('/products', formData, {
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            const result = res.data
            if(result.hasOwnProperty('errors')) {
                alert('server', result.errors)
            } else {
                dispatch(addProduct(result))
                togglePopup()
            }

        }).catch((err) => {
            alert(err.message)
        })
    }
}

const addProduct = (result) => {
    return {
        type: 'ADD_PRODUCT',
        payload: result
    }
}

//Delete CUstomer

export const asyncDeleteProduct = (id) => {
    return (dispatch) => {
        axios.delete(`/products/${id}`, {
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            const result = res.data
            dispatch(deleteProduct(result))
        }).catch(() => {

        })
    }
}

const deleteProduct = (product) => {
    return {
        type: 'DELETE_PRODUCT',
        payload:product._id
    }
}

//UPDATE PRoduct

export const asyncUpdateProduct = (formData, id, togglePopup) => {
    return (dispatch) => {
        axios.put(`/products/${id}`, formData, {
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        } ).then((res) => {
            const result = res.data
            dispatch(updateProduct(result))
            togglePopup()

        }).catch((err) => {
            alert(err.message)
        })
    }
}

const updateProduct = (product) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: product
    }
}

//GET Bills

export const asyncGetBills = () => {
    return (dispatch) => {
        axios.get('/bills', {
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            const result = res.data
            dispatch(getBills(result))
        }).catch((err) => {
            alert(err.message)
        })
    }
}

const getBills = (bills) => {
    return {
        type: 'GET_BILLS',
        payload: bills
    }
}



const getCustomerByID = (customer) => {
    return {
        type: 'GET_CUSTOMER_BY_ID',
        payload: customer
    }
}

//Add bill

export const asyncAddBill = (formData, togglePopup, redirectUrl) => {
    return (dispatch) => {
        axios.post('/bills', formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            const result = res.data
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            } else {
                alert('Successfully Bill genarated')
                dispatch(addBill(result))
                togglePopup()
                redirectUrl(result._id)
            }
            
        }).catch((err) => {
            alert(err.message)
        })
    }
}

const addBill = (bill) => {
    return {
        type: 'ADD_BILL',
        payload:bill
    }
}

//Delete Bill
export const asyncDeleteBill = (id) => {
    return (dispatch) => {
        axios.delete(`/bills/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            const result = res.data
            dispatch(deleteBill(result._id))
        }).catch((err) => {
            alert(err.message)
        })
    }
}

const deleteBill = (id) => {
    return {
        type: 'DELETE_BILL',
        payload: id
    }
}

// customer Loading
const customerToggleLoading = () => {
    return {
        type: 'CUSTOMER_TOGGLE_LOADING'
    }
}


