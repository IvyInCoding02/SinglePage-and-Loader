import React, { useEffect, useState } from 'react';
import styles from './singlepostpage.module.css';
import { useParams } from 'react-router-dom';
import postService from '../services/posts';


function SinglePostPage(props) {
  const [singlePost, setSinglePost] = useState({});
  const { id } = useParams();

 useEffect(() => {
    postService
    .getPost(id)
    .then(res => {
      setSinglePost(res.data)
    })
  }, []);
  
  const date = new Date(singlePost.createdAt);
  const options = {day: "numeric", month: "short", year: "numeric"};
  const formattedDate = date.toLocaleDateString("EN", options)

  return (
    <article className={styles.post}>
      <h1 className={styles.title}>{singlePost.title}</h1>
      <img className={styles.img} src={singlePost.img} alt="singPostImg"/>
      <p className={styles.descr}>{singlePost.descr}</p>
      <p className={styles.date}>{formattedDate}</p>
    </article>
  );
}


export default SinglePostPage;