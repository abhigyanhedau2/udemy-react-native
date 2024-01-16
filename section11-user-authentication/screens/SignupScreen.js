import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import { Alert } from 'react-native';
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authContext = useContext(AuthContext);

    async function signupHandler({ email, password }) {
        setIsAuthenticating(true);

        try {
            const token = await createUser(email, password);
            authContext.authenticate(token);
        } catch (error) {
            Alert.alert(
                'Authentication failed!',
                'Could not log you in. Please check your credentials or try again later!'
            );
            setIsAuthenticating(false);
        }
    }

    if (isAuthenticating) return <LoadingOverlay message="Signing up..." />;

    return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;