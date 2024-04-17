import component from '../styles/components/feature.module.scss';

function FeatureHeading() {
  return (
    <div className={component.feature_heading}>
      <h2>Advanced Statistics</h2>
      <p>Track how your links are performing across the web with<br />our advanced statistics dashboard.</p>
    </div>
  );
}
 
export default FeatureHeading;