import { exerciseSelectTemplate } from './exerciseSelect.template';
import { imageMap } from './../../util/image';

/* 
Creates a Select component that renders the exercise image as a label.
Every time the use select an exercise from the select the poper image
will be displayed on the label.
*/
export const ExerciseSelectComponent = {

    // Returns the HTML string to create the proper select and its label.
    render(model) {
        model.imageMap = imageMap;
        return exerciseSelectTemplate(model);
    },

    // Add an OnChange event for the selec to properly change the image every time 
    // a new one is selected by the user.
    afterRender(model) {
        // Locate the image the will be change very time a new item is selected.
        const exerciseImg = document.querySelector('#' + model.id + 'Img');
        // Locate the exercise select to add the OnChange event listener.
        const exerciseSelect = document.querySelector('#' + model.id);
        // Every time the use select a new exercise the proper image will be render.
        exerciseSelect.addEventListener('change', event => {
            if (exerciseSelect.value !== "") {
                // Use the selected value to retrieve the proper image from the map.
                exerciseImg.src = model.imageMap[exerciseSelect.value];
            } else {
                exerciseImg.src = "";
            }
        });
    },
}
