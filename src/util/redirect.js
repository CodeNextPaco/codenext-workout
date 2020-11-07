// Helper function that redirects to the home page.
export function gotoHome() {
    redirectToPage("home.html");
}

// Helper function that redirects to the index page.
export function gotoIndex() {
    redirectToPage("index.html");
}

// Helper function that redirects to the login page
export function gotoLogin() {
    redirectToPage("login.html");
}

// Helper function that perform redirects to a specific page.
export function redirectToPage(page) {
    let url = window.location.href;
    let urlSplit = url.split('/');
    let newUrl = url.split(urlSplit[urlSplit.length - 1]);
    newUrl = newUrl[0] + page;
    window.location.replace(newUrl);
}
