import PropTypes from 'prop-types';
import {
  ThermometerStyle,
  ContainerStyle,
  LayerStyle,
  CircleStyle,
  HeightStyle,
  DegreesStyle
} from './styles';

function pointerValue(percentage, limit){
  switch (true) {
    case percentage == 0:
      return parseInt(percentage / 20);
    case percentage > limit:
      return 0;
    default:
      return parseInt(percentage / 20) + 1;
  }
};

function Thermometer ({ percentage, maxHeight }) {
  const limit = 100;
  const calcHeight = maxHeight - ((percentage / limit) * maxHeight);
  const isFilled = percentage >= 1 && percentage <= limit;
  const toPositive = Math.abs(percentage);
  const value = pointerValue(toPositive, limit);

  return (
    <ThermometerStyle>
      <ContainerStyle>
        <LayerStyle>
          <HeightStyle pointer={value} fullHeight={calcHeight} />
          <CircleStyle filled={isFilled}>
            <span>{`${percentage}%`}</span>
          </CircleStyle>
        </LayerStyle>
        <DegreesStyle pointer={value}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </DegreesStyle>
      </ContainerStyle>
    </ThermometerStyle>
  );
}

Thermometer.defaultProps = {
  maxHeight: 100,
}

Thermometer.propTypes = {
  percentage: PropTypes.number.isRequired,
  maxHeight: PropTypes.number
};

export default Thermometer;