# MagLoft - Angular Developer Test

This development test was created to evaluate relevant frontend skills for a full stack developer at MagLoft.

A briefing video and demo of the desired result is <a href="https://cdn.magloft.com/recruitment/angular/briefing.mp4" target="_blank">available here</a>.

## Preparation

The candidate should be familiar with relevant technologies before attempting this developer test.

The following resources should help acquiring the necessary experience to work on this test:

1. **Angular 2+**
    * [Getting Started](https://angular.io/start)
    * [Using Forms for User Input](https://angular.io/start/start-forms)
    * [Components Overview](https://angular.io/guide/component-overview)
    * [Component Interaction](https://angular.io/guide/component-interaction)
2. **GraphQL**
    * [Introduction to GraphQL](https://graphql.org/learn/)
    * [Apollo Angular Getting Started](https://apollo-angular.com/docs/get-started)
3. **RxJS / Observables**
    * [RxJS Overview](https://rxjs.dev/guide/overview)
    * [Angular RxJS Guide](https://angular.io/guide/rx-library)

## Briefing

The objective of this developer test is to create a searchable list of Anime movies based on the AniList GraphQL API.

The following user stories should be implemented:

1. A user can browse a list view of Anime movies with thumbnail, title and description.
2. A user can click on a search result to open then corresponding movie website on AniList in a new browser tab.
3. A user can filter their list by prividing a search term. The list will then only show results that match the given search term.
4. A user can browse up to 10 search results at the same time, and further browse through the remaining items by pagination.
5. A user can see a loading indicator while waiting for search results.
6. A previously browsed result set is cached in memory, so that returning to a page that was previously loaded returns the results quickly.

## Requirements

The following technical requirements should be met when implementing the above user stories:

1. **RxJS:** RxJS should be used as a pattern to manage GraphQL API workloads. Observables, Subjects and Pipes should be used to map the user input (pagination page, search term) to received search results.
2. **Debounce:** The search term input should use a `debounceTime` of `500ms` to avoid sending unnecessary requests.
3. **Components:** The following Angular Components should be created:
    * Pagination Component: `src/app/components/pagination/pagination.component.*`
    * Video Component for individual search results: `src/app/components/video/video.component.*`
    * App Component for overall layout and application logic: `src/app/app.component.html`
4. **TSLint/TSC:** All ESLint rules need to pass, and all typescript compiler warnings / errors need to be resolved.

## About this Repository

This repository serves as a starting point to implement the above requirements. The project is based on the most recent angular version and was generated using the angular project generator.

The following libraries and scaffolds have been added:

1. **GraphQL:** `apollo-angular` and `graphql-codegen` were installed and configured to provide a working GraphQL API Client and Typings.
2. **CSS Framework:** `materialize.css` has been installed and relevant CSS classes have been created in `app.component.scss` to assist with the design of the app.

## Developer Test Process

1. Read these instructions and briefing carefully.
2. Watch the <a href="https://cdn.magloft.com/recruitment/angular/briefing.mp4" target="_blank">briefing video</a>.
3. *Optional:* <a href="https://calendly.com/tobias-strebitzer/developer-interview" target="_blank">Book a meeting</a> with me to clarify on any questions regarding the developer test and briefing.
6. Work on the developer test. The test was designed to take around 3-4 hours of development.
7. Once the implementation is completed, make sure all Lint tests are passing and the project builds (`ng build`) without warnings and compiler errors.
8. Create a ZIP file of the project and email it to [tobias.strebitzer@magloft.com](mailto:tobias.strebitzer@magloft.com)

## Installation

Run `yarn` to install the project.

## Development server

Run `yarn serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## GraphQL

This project uses [graphql-codegen](https://graphql-code-generator.com/) and [apollo-angular](https://apollo-angular.com/docs/) to generate a client library and Typings for the [AniList GraphQL API](https://github.com/AniList/ApiV2-GraphQL-Docs).

Run `yarn generate:graphql` to generate the client and typings based on the schema located at `src/graphql/*.graphql`. This will generate `src/graphql/index.ts` which contains the necessary client and typings.
