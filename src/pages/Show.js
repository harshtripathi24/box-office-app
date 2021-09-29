import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
      );
      const data = await res.json();

      setShow(data);
    };

    fetchData();
  }, [id]);

  console.log(show);

  return <div>fdsf</div>;
};

export default Show;
