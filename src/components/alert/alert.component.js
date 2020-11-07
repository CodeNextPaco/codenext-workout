import { alertBasicTemplate } from './alertBasic.template';

// This component allows you to display a boostrap alert.
export const AlertComponent = {

    /* The information required to display an alert are:
        - style: 'alert-primary', 'alert-secondary', 'alert-success'
                 see: https://getbootstrap.com/docs/4.5/components/alerts/#examples
        - msg: the message you want to display
    */
    renderBasic(style, msg) {
        this.model = {
            type: style,
            msg: msg,
        };
        return alertBasicTemplate(this.model);
    },
}