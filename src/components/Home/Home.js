import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Page from '../Page/Page';

const Home = () => {
   // console.log('i am sourav');
   const [data,setdata] = useState([]);

   // const [result,setResult] = useState(null);

   React.useEffect(() => {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      axios.get(url).then((response) => {
        setdata(response.data);
      });
    }, []);

   
   
   return (
      <div>
   <Page data={data}></Page>
      </div>
   );
};

export default Home;