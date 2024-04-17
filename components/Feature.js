import component from '../styles/components/feature.module.scss';
import Image from 'next/image';

function Feature({img, title, description}) {
  return (
    <div className={component.feature} id={title}>
      <div className={component.feature_image}>
        <Image
            src={img}
            height={40}
            alt={title}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
 
export default Feature;