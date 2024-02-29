export const Router = {
    goTo: (route) => {
        console.log(`Navigating to ${route}`);
        $('#main').load(`/pages/${route}.html`);
    }
}