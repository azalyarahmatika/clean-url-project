import component from '../styles/components/feature.module.scss';
import Feature from "./Feature";
import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustomizable from "../images/icon-fully-customizable.svg";

function FeatureContainer() {
  return (
    <div className={component.feature_container}>
      <Feature img={BrandRecognition} title='Brand Recognition' description='Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil confidence in your content.' />
      <Feature img={DetailedRecords} title='Detailed Records' description='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.' />
      <Feature img={FullyCustomizable} title='Fully Customizable' description='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.' />
    </div>
  );
}
 
export default FeatureContainer;