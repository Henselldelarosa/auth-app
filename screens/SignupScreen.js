import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { authenticate,createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const handleSignup = async ({email, password}) => {
    setIsAuthenticating(true)
    await createUser(email, password)
    setIsAuthenticating(false)
  }


  if(isAuthenticating) {
    return <LoadingOverlay message='Creating User...'/>
  }

  return <AuthContent onAuthenticate={handleSignup}/>;
}

export default SignupScreen;
