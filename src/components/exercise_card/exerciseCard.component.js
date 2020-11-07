import { exerciseCardTemplate } from './exerciseCard.template';
import { ExerciseSelectComponent } from './../exercise_select/exerciseSelect.component';
import { AlertComponent } from './../alert/alert.component';
import { Exercises } from './../../util/exercise';
import { TodayCardComponent } from './../today_card/todayCard.component';

// Define a new card that will be used to log the exercise data.
export const ExerciseCardComponent = {

    // Initialize the component this methods defines the id for the new HTML tags that will
    // be created by this component.
    init(idElement, user, todayCardId, date) {
        // Store the email address of the user that is currently logged in.
        this.user = user;
        // Locate the HTML element in which the card will be displayed
        this.componentElement = document.querySelector(idElement);
        this.todayCardId = todayCardId;
        // Define the ids for this component.
        this.model = {
            id: 'log-exercise-card',
            date: date,
            // Define the id for the ExerciseSelectComponent.
            selectModel: {
                id: 'exercise-select-component',
            }
        };
        this.render();
    },

    // Create the html form that will be use to capture the exercise the user want to log.
    render() {
        this.componentElement.innerHTML = exerciseCardTemplate(this.model);
        const selectComponent = document.getElementById(this.model.id + 'Select');
        selectComponent.innerHTML = ExerciseSelectComponent.render(this.model.selectModel);
        this.afterRender();
    },

    // Add the OnClick event listener for the Log btn. 
    // This button will allow to stored new data.
    // If the exercise is already log it will add a new repetition for it.
    afterRender() {
        const model = this.model;
        const user = this.user;
        const todayCardId = this.todayCardId;
        // Locate the btn for which the OnClick event will be added.
        const submitBtn = document.getElementById(model.id + 'Submit');
        // Define the onclick callback function that will be executed when the button
        // is clicked by the user.
        submitBtn.addEventListener('click', event => {
            // Before storing or updating the data we need to retrieve the values the user
            // enter on the form we will use the id of each HTML element to locate them
            // and retrieve its current value. 
            const selectComponent = document.getElementById(model.selectModel.id);
            const repetition = document.getElementById(model.id + 'Rep');
            const weight = document.getElementById(model.id + 'Weight');
            // Before storing or updating the data we need to validate the values entered
            // by the user are correct.
            if (validData(selectComponent, repetition, weight)) {
                // We need to create a new repetitions object to store it on firestore
                let data = {
                    repetitions: [repetition.value],
                    weights: [weight.value]
                };
                // Store or update the proper firestore document.
                saveOrUpdate(selectComponent.value, user, model.date, data, todayCardId);
            }
        });
        // Call the afterRender method of the select exercise component to define its event listeners
        ExerciseSelectComponent.afterRender(this.model.selectModel);
    },
    
    // This function renders an alert to let the user know if the data was stored successfully.
    displayAlert(innerHTML) {
        let alertDiv = document.querySelector('#log-exercise-cardAlert');
        alertDiv.innerHTML = innerHTML;
    },
};

// Validate tha the data from the form is valid
function validData(selectComponent, repetition, weight) {
    return selectComponent.value !== '' && repetition.value !== '' && weight.value !== ''
}

// This function should create a new entry on firestore.
function saveOrUpdate(exercise, userEmail, newDate, data, todayCardId) {
    
}
