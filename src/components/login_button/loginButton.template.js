export const buttonLoginTemplate = model => `
<div class="col col-lg-2">
    <button id="${model.id}" type="button" class="btn btn-outline-light">
        <span class="fab ${model.image}" aria-hidden="true"></span>
    </button>
</div>
`;