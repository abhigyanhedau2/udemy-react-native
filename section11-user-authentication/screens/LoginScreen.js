import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { Alert } from 'react-native';

function LoginScreen({ navigation }) {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    async function loginHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            await login(email, password);
        } catch (error) {
            Alert.alert(
                'Authentication failed!',
                'Could not log you in. Please check your credentials or try again later!'
            );
        }
        setIsAuthenticating(false);
    }


    if (isAuthenticating) return <LoadingOverlay message="Logging in..." />;

    return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;