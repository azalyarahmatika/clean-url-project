import { useState } from 'react';
import component from '../styles/components/mainSection.module.scss';
import Image from 'next/image';
import deleteIcon from '../images/icon-delete.svg';

function ShortenedLink(props) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const input = document.createElement('input');
    input.setAttribute('value', props.shortUrl);
    document.body.appendChild(input);
    
    input.select();
    document.execCommand('copy');

    document.body.removeChild(input);

    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  const buttonClass = copied ? `${component.copiedButton}` : '';

  return (
    <div className={component.link_wrapper}>
      <p>{props.longUrl}</p>
      <hr className={component.hr_line}></hr>
      <div>
        <p className={component.shortenedLink}>{props.shortUrl}</p>
        <button className={buttonClass} onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy'}</button>
      </div>
      <Image
        onClick={() => props.deleteHandler(props)}
        className={component.deleteIcon}
        src={deleteIcon}
        height={40}
        alt="delete"
        title='Delete'
      />
    </div>
  );
}
 
export default ShortenedLink;
