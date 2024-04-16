import { useState, useEffect } from 'react';
import styles from '../styles/components/mainSection.module.scss';
import ShortenedLink from './ShortenedLink';

const postLink = async (url) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY; 
  const apiUrl = 'https://url-shortener-service.p.rapidapi.com/shorten';

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
    },
    body: new URLSearchParams({
      url: url
    })
  };

  try {
    const response = await fetch(apiUrl, options);
    const result = await response.json(); 

    const existingShortenedLinks = JSON.parse(localStorage.getItem('shortenedLink')) || [];

    const newShortenedLink = { longUrl: url, shortUrl: result.result_url };
    const updatedShortenedLinks = [...existingShortenedLinks, newShortenedLink];
    localStorage.setItem('shortenedLink', JSON.stringify(updatedShortenedLinks));

    return result.result_url;
  } catch (error) {
    console.error(error);
  }
}

function InputUrl() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([]);

  useEffect(() => {
    const savedLink = JSON.parse(localStorage.getItem('shortenedLink'));
    if (savedLink) {
      setShortenedLinks(savedLink);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!url.trim()) {
      setError('Please add a link');
      return;
    }

    const shorten = await postLink(url); 

    const newShortenedLink = { longUrl: url, shortUrl: shorten };
    setShortenedLinks([newShortenedLink, ...shortenedLinks]);    
    setUrl('');
  };

  const handleChange = (event) => {
    setUrl(event.target.value);
    setError('');
  };

  const handleDelete = (props) => {
    const existingShortenedLinks = JSON.parse(localStorage.getItem('shortenedLink')) || [];
    const updatedShortenedLinks = existingShortenedLinks.filter(link => link.shortUrl !== props.shortUrl);
    localStorage.setItem('shortenedLink', JSON.stringify(updatedShortenedLinks));
    setShortenedLinks(updatedShortenedLinks);
  };

  return (
    <>
      <form className={styles.inputUrlForm} onSubmit={handleSubmit}>
        <label htmlFor="shortenUrl"></label>
        <input 
          type="text" 
          id="shortenUrl" 
          name="shortenUrl" 
          placeholder='Shorten a link here...' 
          value={url}
          onChange={handleChange}
          className={error ? styles.inputError : ''}
        />
        {error && <p className={styles.error_message}><em>{error}</em></p>}
        <input type="submit" value="Shorten It!"  />
      </form>
      
      <div className={styles.shortenedLinks_wrapper}>
        {shortenedLinks.reverse().map((link, index) => (
          <ShortenedLink
            key={index}
            longUrl={link.longUrl}
            shortUrl={link.shortUrl}
            deleteHandler={handleDelete}
          />
        ))}
      </div>
      
    </>
  );
};

export default InputUrl;
