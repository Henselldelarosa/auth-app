import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { authenticate, login } from '../util/auth';
import { Alert } from 'react-native';


function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const handleLogin = async ({email, password}) => {
    setIsAuthenticating(true)
    setIsAuthenticating(false)
    await login(email, password)
    try {

    } catch (error) {
      Alert.alert(
        'Authentication Failed',
        'Please check your credential or try again later'
      )
    }
  }

  if(isAuthenticating) {
    return <LoadingOverlay message='Logging you in...'/>
  }

  return <AuthContent isLogin onAuthenticate={handleLogin}/>;
}

export default LoginScreen;
