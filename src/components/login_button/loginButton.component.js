import firebase from 'firebase';
import 'firebase/auth';
import { buttonLoginTemplate } from './loginButton.template';

export const LoginButtonComponent = {

    render(model) {
        return buttonLoginTemplate(model);
    },

    afterRender(model, onSuccess, onError) {
        const loginButton = document.querySelector('#' + model.id);
        loginButton.addEventListener('click', event => {
            const provider = model.provider;
            console.log(model);
            firebase.auth().signInWithPopup(provider).then(function (result) {
                console.log(result);
                if (onSuccess !== undefined) {
                    onSuccess(result);
                }
            }).catch(function (error) {
                console.log(error);
                if (onError !== undefined) {
                    onError(error);
                }
            });
        });
    },
}
