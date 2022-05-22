import * as React from 'react';
import { EnterEmail } from './EnterEmail';
import { CreateAccount } from './CreateAccount';
import { useAuth } from '../hooks/useAuth';
import { SignIn } from './SignIn';

export const Authenticate = (): JSX.Element => {
  const auth = useAuth();
  const [email, setEmail] = React.useState<string>('');
  const [view, setView] = React.useState<string>('enterEmail');
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (auth.isFetched && auth.isAuthenticated) {
      window.location.href = '/dashboard';
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
      {!isLoaded && null}
      {isLoaded && (
        <>
          {view === 'enterEmail' && <EnterEmail onToggleView={onToggleView} />}
          {view === 'createAccount' && <CreateAccount email={email} />}
          {view === 'signIn' && <SignIn email={email} />}
        </>
      )}
    </>
  );
};
