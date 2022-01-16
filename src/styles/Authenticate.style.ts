import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  max-width: 380px;
  margin: 0 1rem;
`;

export const Form = styled.form`
  width: 100%;
  text-align: center;
`;

export const HeadingWrap = styled.div`
  text-align: left;
  width: 100%;
`;

export const Email = styled.p`
  text-align: left;
  color: #e535ab;
  font-size: 1rem;
`;

export const Heading = styled.h1<{ isWelcome: boolean }>`
  color: white;
  text-transform: uppercase;
  font-size: ${props => (props.isWelcome ? '0.8rem' : '1.1rem')};
  letter-spacing: 2px;
  margin-bottom: ${props => (props.isWelcome ? '0' : '0.1rem')};
`;

export const InputField = styled.input<{ pushDown: boolean }>`
  font-size: 1rem;
  outline: none;
  padding: 1rem;
  width: 100%;
  color: #333;
  border: none;
  border-radius: 0.25rem;
  min-width: 280px;
  margin-top: 0.85rem;
  ::placeholder {
    color: #888;
  }
`;

export const InputFieldEmail = styled.input`
  font-size: 1rem;
  outline: none;
  padding: 1rem;
  width: 100%;
  color: #333;
  border: none;
  border-radius: 0.25rem;
  min-width: 280px;
  margin-top: 0.25rem;
  ::placeholder {
    color: #888;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  color: white;
  width: 100%;
  height: 30px;
  color: #333;
`;

export const NextButton = styled.button`
  color: white;
  min-width: 150px;
  width: auto;
  height: 43px;
  color: #023e8a;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 2px;
  margin-top: 0.25rem;
  border-radius: 0.5rem;
  background: white;
  border: 1px solid #333;
  transition: border-radius 0.35s ease-in-out;
  :hover {
    border-radius: 0.75rem;
  }
  padding: 0 1rem;
`;

export const EmailError = styled.p`
  position: absolute;
  color: #ffbf6b;
  text-align: left;
  margin-top: 0.2rem;
`;

export const PasswordError = styled.div`
  position: absolute;
  display: flex:
  flex-direction: column;
  color: #ffbf6b;
  text-align: left;
  margin-top: 0.2rem;
  max-width: 194px;
  font-size: .8rem;
`;
