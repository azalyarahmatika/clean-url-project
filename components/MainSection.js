import InputUrl from "./InputUrl";
import FeatureHeading from "./FeatureHeading";
import FeatureContainer from './FeatureContainer';
import component from '../styles/components/mainSection.module.scss';

function MainSection() {
  return (
    <div className={component.mainSection}>
      <InputUrl/>
      <FeatureHeading />
      <FeatureContainer />
    </div>      
  );
}
 
export default MainSection;