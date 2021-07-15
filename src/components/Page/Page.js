import React, { useEffect, useState } from 'react';

const Page = ({data}) => {

   const [searched,setSearched] = useState('');
   const [searchResults,setSearchResults] = useState('');


   useEffect(() => {
      const results = data.filter(post =>
        post.title.toLowerCase().includes(searched)
      );
      setSearchResults(results);
    }, [searched]);


   const handleChange=(e)=>{
      setSearched(e.target.value);
    //   console.log(e.target.value);
     }
     console.log({searchResults});
 

   return (
      <div>
      <input placeholder='search here' type='text' onChange={handleChange} />
      </div>
   );
};

export default Page;