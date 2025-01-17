import styled from 'styled-components';
import Icon from '../../images/chevron-up.svg';

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 67px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  // @media screen and (min-width: 1440px) {
  // padding: 0 100px;
  // max-width: ${p => p.theme.breakPoints[2]};
  // }
`;

export const InputFieldsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px;

  @media screen and (min-width: 768px) {
    height: 268px;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
  // margin-bottom: 24px;

  // @media screen and (min-width: 768px) {
  //   margin-bottom: 32px;
  // }
`;

export const InputTitle = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding-left: 140px;
  text-align: right;
  padding-bottom: 18px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 12px;
  line-height: 12px;
  color: #000000;
  outline: none;

  &:invalid {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const LabelTitle = styled.label`
  position: absolute;
  top: 0;
  left: 0;

  font-size: 14px;
  line-height: 21px;
  color: #000000;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const InputDescription = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding-left: 180px;
  text-align: right;
  padding-bottom: 18px;

  font-size: 12px;
  line-height: 12px;
  color: #000000;
  outline: none;
  resize: none;
`;

export const FieldSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;

  // margin-bottom: 24px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  
  // @media screen and (min-width: 768px) {
  //   margin-bottom: 32px;
  // }
`;

export const LabelCategory = styled.label`
  font-size: 14px;
  line-height: 21px;
  color: #000000;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const InputCategory = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: url(${Icon}) no-repeat 90% 50%;
  background-size: 14px;
  background-size: 14px;

  padding-right: 13px;
  font-size: 12px;
  line-height: 12px;
  color: #000000;
  outline: none;
  border: none;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const OptionCategory = styled.option`
  color: rgba(0, 0, 0, 0.5);
  // background-color: rgb(230, 230, 230);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const FileInputContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }
`;

export const RreviewImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 279px;
  height: 268px;

  background-color: #8baa36;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const InputIconContainer = styled.div`
  position: absolute;

  width: 64px;
  height: 64px;
`;

export const FileLabel = styled.label`
  position: absolute;
  inset: 0;
`;

export const InputFile = styled.input`
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  z-index: -10;
`;
