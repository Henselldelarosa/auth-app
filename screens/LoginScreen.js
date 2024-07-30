import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { authenticate, login } from '../util/auth';


function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const handleLogin = async ({email, password}) => {
    
    setIsAuthenticating(true)
    await login(email, password)
    setIsAuthenticating(false)
  }

  if(isAuthenticating) {
    return <LoadingOverlay message='Logging you in...'/>
  }

  return <AuthContent isLogin onAuthenticate={handleLogin}/>;
}

export default LoginScreen;
