import InputUrl from "./InputUrl";
import component from '../styles/components/mainSection.module.scss';
import FeatureHeading from "./FeatureHeading";
import FeatureContainer from './FeatureContainer';

function MainSection({apiKey}) {
  // console.log(apiKey)
  return (
    <div className={component.mainSection}>
      <InputUrl apiKey={apiKey}/>
      <FeatureHeading />
      <FeatureContainer />
    </div>
  );
}
 
export default MainSection;