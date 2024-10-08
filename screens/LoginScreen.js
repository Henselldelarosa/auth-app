import { useState, useContext } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {login } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';


function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authCtx = useContext(AuthContext)

  const handleLogin = async ({email, password}) => {
    setIsAuthenticating(true)

    try {

      const token = await login(email, password)
      authCtx.authenticate(token)

    } catch (error) {
      Alert.alert(
        'Authentication Failed',
        'Please check your credential or try again later'
      )
      setIsAuthenticating(false)
    }
  }

  if(isAuthenticating) {
    return <LoadingOverlay message='Logging you in...'/>
  }

  return <AuthContent isLogin onAuthenticate={handleLogin}/>;
}

export default LoginScreen;
