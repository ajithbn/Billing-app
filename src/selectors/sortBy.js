const sortBy = (data, sortType, key) => {
    if(key === 'customers') {
        if(sortType === 'ascending') {
            return data.sort((a,b) => a.name.localeCompare(b.name))
        } else if(sortType === 'descending') {
            return data.sort((a,b) => b.name.localeCompare(a.name))
        }
    }
    else if(key === 'products') {
        if(sortType === 'ascending') {
            return data.sort((a,b) => a.name.localeCompare(b.name))
        } else if(sortType === 'descending') {
            return data.sort((a,b) => b.name.localeCompare(a.name))
        }
    } else if(key === 'bills') {
        if(sortType === 'ascending') {
            return data.sort((a,b) => a.name.localeCompare(b.name))
        } else if(sortType === 'descending') {
            return data.sort((a,b) => b.name.localeCompare(a.name))
        }
    }
}
export default sortBy