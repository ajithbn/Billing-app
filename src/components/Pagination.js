import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []
    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (<nav>
        <ul className='pagination'>
            { pageNumbers.map((number) => {
                return <li key={number} className='page-item'>
                    <a href='#' className='page-link' onClick={(e) => {
                        e.preventDefault()
                        paginate(number)}}>{number}</a>
                </li>
            })}
        </ul>
    </nav>)
}

export default Pagination