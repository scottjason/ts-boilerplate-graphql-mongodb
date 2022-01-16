import * as React from 'react';
import { useNavigate } from 'react-router';
import { EnterEmail } from './EnterEmail';
import { CreateAccount } from './CreateAccount';
import { useAuth } from '../hooks/useAuth';
import { SignIn } from './SignIn';

export const Authenticate: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [view, setView] = React.useState('enter-email');
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (auth.isFetched && auth.isAuthenticated) {
      navigate('/dashboard');
    } else if (auth.isFetched) {
      setIsLoaded(true);
    }
  }, [auth]);

  const onToggleView = (type: string, email: string) => {
    setEmail(email);
    setView(type);
  };

  return (
    <>
      {isLoaded && (
        <>
          {view === 'enter-email' && <EnterEmail onToggleView={onToggleView} />}
          {view === 'create-account' && <CreateAccount email={email} />}
          {view === 'sign-in' && <SignIn email={email} />}
        </>
      )}
    </>
  );
};
