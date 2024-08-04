import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { AuthContext } from '../store/auth-context';
import {createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authCtx = useContext(AuthContext)

  const handleSignup = async ({email, password}) => {

    setIsAuthenticating(true)
    try {

      const token = await createUser(email, password)
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert(
        'Signup Fail',
        'Could not create user, please check your input and try again later'
      )


      setIsAuthenticating(false)
    }
  }




  if(isAuthenticating) {
    return <LoadingOverlay message='Creating User...'/>
  }

  return <AuthContent onAuthenticate={handleSignup}/>;
}

export default SignupScreen;
