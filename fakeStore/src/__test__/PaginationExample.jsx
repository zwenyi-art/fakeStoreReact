import React, { useState, useEffect } from 'react';
import axios from 'axios';
//this page is example for movie website
const itemsPerPage = 5;
const apiUrl = 'https://fakestoreapi.com/products';

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedItems = response.data.slice(startIndex, endIndex);
        setItems(slicedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

   console.log(totalPages);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {/* Render your items */}
      {items.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}

      {/* Pagination controls */}
      <div>
        <button
          className='bg-green-500 px-3 mx-2'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            className='bg-green-500 px-3 mx-2'
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button
          className='bg-green-500 px-3 mx-2'
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationExample;
