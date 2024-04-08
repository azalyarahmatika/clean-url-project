import InputUrl from "./InputUrl";
import component from '../styles/components/mainSection.module.scss';
import FeatureHeading from "./FeatureHeading";
import FeatureContainer from './FeatureContainer';

function MainSection() {
  return (
    <div className={component.mainSection}>
      <InputUrl />
      <FeatureHeading />
      <FeatureContainer />
    </div>
  );
}
 
export default MainSection;