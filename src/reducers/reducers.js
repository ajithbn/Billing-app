
const initialState = {
    users : { loading: false, data: [], errors: {} },
    customers : { loading: true, data: [], errors: {}},
    products : { loading: false, data: [], errors: {}},
    bills : { loading: false, data: [], errors: {}},
    isAuthenticated: localStorage.getItem('token') ? true : false
}
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER' : return {...state, users:{...state.users, data:[...state.users.data, 
            {...action.payload}]}}
        case 'SET_CURRENT_USER' : return {
            ...state, isAuthenticated: !state.isAuthenticated
        }
        case 'USER_LOGOUT' : return {
            ...state, isAuthenticated: !state.isAuthenticated
        }
        case 'SET_PROFILE': return {
            ...state, users: {...state.users, data:{...action.payload}}
        }
        case 'GET_CUSTOMERS' : return {
            ...state, customers: {...state.customers, data:action.payload}
        }
        case 'ADD_CUSTOMER' : return {
            ...state, customers: {...state.customers, data: [action.payload, ...state.customers.data ]}
        }
        case 'DELETE_CUSTOMER' : return {
            ...state, customers: {...state.customers, data: state.customers.data.filter((customer) => {
                return customer._id !== action.payload
            })}
        }
        case 'UPDATE_CUSTOMER' : return {
            ...state, customers: {...state.customers, data: state.customers.data.map((customer) => {
                if(customer._id === action.payload._id) {
                    return {...action.payload}
                } else {
                    return {...customer}
                }
            })}
        }
        case 'GET_CUSTOMER_BY_ID' : return {
            ...state, customers: {...state.customers, data: {...action.payload}}
        }
        case 'GET_PRODUCTS' : return {
            ...state, products:{...state.products, data:[...action.payload]}
        }
        case 'ADD_PRODUCT' : return {
            ...state, products: {...state.products, data: [action.payload, ...state.products.data]}
        }
        case 'DELETE_PRODUCT' : return {
            ...state, products: {...state.products, data: state.products.data.filter((product) => {
                return product._id !== action.payload
            })}
        }
        case 'UPDATE_PRODUCT': return {
            ...state, products: {...state.products, data:state.products.data.map((product) => {
                if(product._id === action.payload._id) {
                    return {...action.payload}
                } else {
                    return {...product}
                }
            })}
        }
        case 'GET_BILLS' : return {
            ...state, bills: {...state.bills, data:[...action.payload]}
        }
        case 'ADD_BILL' : return {
            ...state, bills:{...state.bills, data:[...state.bills.data, {...action.payload}]}
        }
        case 'DELETE_BILL' : return {
            ...state, bills: {...state.bills, data: state.bills.data.filter((bill) => {
                return bill._id != action.payload
            })}
        }
        case 'CUSTOMER_TOGGLE_LOADING' : return {
            ...state, customers: {...state.customers, loading: false}
        }
        default: {
            return {...state}
        } 
    }
}

export default rootReducer