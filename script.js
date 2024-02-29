import { Router } from './scripts/router.js';

$(() => {
    // Load the home page
    Router.goTo('home');


    $('[data-key="route"]').on('click', (e) => {
        const route = $(e.target).data('value');
        Router.goTo(route);
    });
});