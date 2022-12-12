import PropTypes from 'prop-types';
import {
  ThermometerStyle,
  ContainerStyle,
  LayerStyle,
  CircleStyle,
  HeightStyle,
  DegreesStyle
} from './styles';

function pointerValue(percentage){
  switch (true) {
    case percentage < 1:
      return 0;
    case percentage >= 1 && percentage < 20:
      return 1;
    case percentage >= 20 && percentage < 40:
      return 2;
    case percentage >= 40 && percentage < 60:
      return 3;
    case percentage >= 60 && percentage < 80:
      return 4;
    case percentage >= 80 && percentage <= 100:
      return 5;
    default:
      return 0;
  }
};

function Thermometer ({ percentage, maxHeight }) {
  const calcHeight = maxHeight - ((percentage / 100) * maxHeight);
  const isFilled = percentage >= 1;
  const value = pointerValue(percentage);

  return (
    <ThermometerStyle>
      <ContainerStyle>
        <LayerStyle>
          <HeightStyle fullHeight={calcHeight} />
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