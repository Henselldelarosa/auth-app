import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { authenticate,createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const alert =   Alert.alert(
    'Signup Fail',
    'Could not create user, please check your input and try again later'

  )
  const handleSignup = async ({email, password}) => {

    setIsAuthenticating(true)
    try {

      await createUser(email, password)
    } catch (error) {

    }
    setIsAuthenticating(false)
  }


  if(isAuthenticating) {
    return <LoadingOverlay message='Creating User...'/>
  }

  return <AuthContent onAuthenticate={handleSignup}/>;
}

export default SignupScreen;
