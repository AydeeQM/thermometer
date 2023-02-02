import styled, { css } from 'styled-components';
import { fadeFilled } from '../styles/keyFrames';

export const ThermometerStyle = styled.div`
  position: relative;
`;

export const ContainerStyle = styled.div`
  height: 184px;
  position: relative;
  width: 66px;
`;

export const DegreesStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 102px;
  justify-content: space-between;
  position: absolute;
  right: 0.25rem;
  top: 11px;

  span {
    background-color: var(--grey-100);
    border-radius: 8px;
    display: block;
    height: 3px;

    &:nth-child(2n) {
      width: 0.5rem;
    }

    &:nth-child(2n + 1) {
      width: 0.688rem;
    }
  }

  ${(props) =>
    props.pointer &&
    css`
      span:nth-last-child(-n + ${props.pointer}) {
        background-color: var(--orange);
      }
    `}
`;

export const LayerStyle = styled.div`
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  top: -12px;
  width: 100%;
`;

export const CircleStyle = styled.div`
  align-items: center;
  background-color: ${(props) => (props.filled ? 'var(--orange)' : 'var(--grey-100)')};
  border: 10px solid var(--grey);
  border-radius: 50%;
  display: flex;
  height: 66px;
  justify-content: center;
  width: 54px;

  span {
    color: ${(props) => (props.filled ? 'var(--white)' : 'var(--orange)')};
    font-weight: 700;
    line-height: 112%;
    text-align: justify;
  }
`;

export const HeightStyle = styled.div`
  background-color: var(--grey-100);
  border-color: var(--grey);
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  bottom: -12px;
  height: calc(100% - 60px);
  overflow: hidden;
  position: relative;
  width: 16px;
  &::before {
    content: '';
    background-color: var(--orange);
    bottom: 0;
    height: 0px;
    position: absolute;
    right: 0;
    width: 16px;
  }
  ${(props) =>
    props.pointer &&
    css`
      &::before {
        animation: ${fadeFilled(props.fullHeight)} 2s ease;
        height: calc(100px - ${props.fullHeight}px);
      }
    `}
`;
