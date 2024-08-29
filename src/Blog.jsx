import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, off } from "firebase/database";
import { useNavigate } from "react-router-dom";
import notFoundImage from './Res/not-found.gif';

export default function Blog() {
  const db = getDatabase();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.warn("Running");
    const dataRef = ref(db, '/Posts'); // Replace with your database path

    // Listen for changes to the data
    const fetchData = onValue(
      dataRef,
      (snapshot) => {
        const fetchedData = snapshot.val();
        console.log(fetchedData);

        // Assuming the data is an object where each property is a post
        const posts = fetchedData ? Object.values(fetchedData) : [];
        setData(posts);
        setFilteredData(posts);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );

    return () => {
      // Cleanup function to unsubscribe when the component unmounts
      off(dataRef, 'value', fetchData);
    };
  }, [db]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter posts based on search query
    const results = data.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.content.toLowerCase().includes(query)
    );
    setFilteredData(results);
  };

  const handleClick = (id) => {
    navigate(`/blog/${id}`); // Navigate to the post details page
  };

  return (
    <div >
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search posts..."
        style={{ marginBottom: '20px', padding: '10px', width: '50%',borderRadius:"1rem" }}
      />
      <div style={{display:"flex"}}>
      {filteredData.length > 0 ? (
        filteredData.map((post, index) => (
          <div
            key={index}
            onClick={() => handleClick(post.postname)}
            style={{ cursor: 'pointer',width:"25%",border:"2px solid gray",padding:"2rem",borderRadius:"2rem", marginBottom: '20px',margin:"3rem" }}
          >
            <img src={post.image} alt={post.title} style={{marginBottom:"2rem", maxWidth: '200px', height: 'auto',borderRadius:"1rem" }} />
            <h3 style={{}}>{post.title}</h3>
            <p style={{textAlign:"left"}}>{post.content}</p>
          </div>
        ))
      ) : (
        <div style={{margin:"auto",padding:"0"}}>
          <img style={{width:"13rem",padding : "1rem"}} src={notFoundImage}/>
          <p>No Blog Found</p>
          </div>
      )}
      </div>
    </div>
  );
}
