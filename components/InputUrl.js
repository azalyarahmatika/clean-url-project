import { useState } from 'react';
import component from '../styles/components/mainSection.module.scss';
import handler from '../pages/api/hello';

function InputUrl() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!url.trim()) {
      setError('Please add a link');
      return;
    }

    const response = await fetch ('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    
    const cleanURL = await response.json();
    console.log(cleanURL);
  };


  const handleChange = (event) => {
    setUrl(event.target.value);
    setError('');
  };

  return (
    <form className={component.inputUrlForm} onSubmit={handleSubmit}>
      
        <label htmlFor="shortenUrl"></label>
        <input 
          type="text" 
          id="shortenUrl" 
          name="shortenUrl" 
          placeholder='Shorten a link here...' 
          value={url}
          onChange={handleChange}
          className={error ? component.inputError : ''}
        />
        {error && <p className={component.error_message}><em>{error}</em></p>}
      
      
      <input type="submit" value="Shorten It!"  />
    </form>
  );
};

export default InputUrl;
