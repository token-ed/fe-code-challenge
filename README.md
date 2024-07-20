# FE Code Challenge

## Start application

- Clone this repository
  - `git clone`
- Go into the project directory: `cd fe-code-challenge\`
- You will need to install the package [`json-server`](https://github.com/typicode/json-server) as that's the package mimicking the server and where the API is stored (`db.json`)
  - `npm install json-server`
- Start the application with: `npm run start`
- Webpack will start a local server on port 4000, if you have any process running under that port that could be easily overcome by setting a new port in `./fe-code-challenge/webpack.dev.config.ts`, line 86.
- Also, please bare in mind that I'm using _node-sass_ package and it requires a download from GitHub, if you're sitting behind a proxy it might be problematic - in this case please follow the recommendations on the error logged in the terminal.
- Any other error on starting the app, please let me know: *emiguel.dev@gmail.com*

## Motivation

This project is part of the recruitment process of Random Company. As suggested by Random Company, I need to fullfil the requirements on the document entitled _Front-End Code Challenge_ in which I need to call an API to get professional categories and descriptions.
All the code should be wrapped up in an single page application using React.js library and be written in TypeScript.

## Getting Started

### Overview

This application was built with:

- **ReactJs** (library used to build the UI's)
- **TypeScript** (the strongly-typed style of code)
- **Webpack** (the bundler with all bundling configurations)
- **Babel** (the compiler responsible for TypeScript transpilation)
- Other plugins like loaders (_css-loader_), Hot Module Replacement plugin or ESLint which supported the fluent development of the app.

### Structure

A quick structure explanation on how I would personally set up a project

```
fe-code-challenge/ 				// Root of the project
├── src/  					// [src] folder holds all the application code
│    ├── app  					// [app] folder is where index.tsx (the bundling entry point) sits
│    ├── assets  				// [assets] holds all the assets of this application - images, svgs etc would go in here
│    ├── libs/  				// [libs] is the folder where generic UI components, HOC's and other reusable UI related stuff goes in
│    │	   └──components/  		        // [components] is pretty much self explanatory, all the reusable UI components go in here
│    │		   └──resources  		// [resources] folder has all the resources needed  and reused by components sitting in /components
│    └── logic/  				// [logic] will hold all the generic logic, generic hooks, api-contract definition types etc
│	    └── processes/  			// [processes] will group all the processes entry-points' components which can be injected (in my case) on React.Router links
│
└── .../configuration-files  	                // All the configuration files which drive the application behavior in terms of bundling, building artifacts, module definitions etc.
```

As previously described, I usually like to make a clear separation between the logic and presentation layers. In the logic layer, I have my generic hooks or other components that contain reusable and generic functions and behaviors, but only logic-related behaviors, not UI elements. This includes API calls, mapping responses, business-related calculations, and holding Redux or other Flux stores (though I didn't use any of these libraries in this app).

#### ./src/logic:

In my case, I have placed the following in this directory:

- The API responses typed objects as interfaces (**_/api-contracts/professionals_**): These were generated using an external tool to create TypeScript interfaces based on the "API contract" provided in the document. Ideally, we would use proper API contracts from Swagger, for example.
- All the professionals process logic (**_/professionals_**): This contains all the hooks responsible for calling the APIs, mapping the responses, and validating fields. These hooks expose all the necessary methods to handle form validations, button clicks (submitting and pagination logic), and returning the stateful objects that make the UI components dynamic.
- A generic `use-ajax` hook: This hook's sole responsibility is to receive props and expose the HTTP methods (`get()` and `post()`) for use in the application. It also exposes methods created within a defined inner hook (`use-ajax-actions`), which are used to clear AJAX errors or change isLoading in our local state. This implementation may appear a bit verbose, but it is designed to work out of the box and be extremely reusable.

#### ./src/processes:

In the processes directory, I envisioned it serving all the processes in the application. For example, in my case, there will be only one process: **_/professionals_**. This process can have multiple business requirements, but the scope for this app is small. The only function of this process is to present a small _form_ to _search_ for professionals based on a category and a postcode-based location. As such, it includes two presentational components named `form.tsx` and `search.tsx`. The search component wraps the form component and calls the `useData()` hook, which in turn exposes all the methods responsible for the entire behavior in the Professionals Search process.

As the application scales, this symbiotic agreement between the **logic** and **presentational** layers can adapt to ongoing changes made by various team members. It's also beneficial to have such a separation, as it allows you to know exactly where to find the logic and presentational components.

#### ./src/libs/components:

In this directory, I've placed all the generic components used in this app. Initially, I considered using stable and highly configurable components provided by the frontend community, such as **_material-ui_** components or other libraries. However, I decided that creating components from scratch could be a challenging task that would also demonstrate how I build generic components. Some of the generic components created in this app include:

- Table
- Dropdown
- TextBox
- Fullpage Loader
- Navigation Menu

I aimed to keep the application lightweight, so these components are very basic. Towards the end, I had to install a pagination component library due to a lack of time to finish the project.

#### ./src/app:

This directory serves the single purpose of holding the entry point for bundling the project and other components that might impact the top level of the hierarchical component tree. Examples include **_ErrorBoundaries_**, custom **_ContextProviders_**, **_i18n_** logic, etc.

In my case, I have only the index and `App` components. The index component solely delegates the responsibility of rendering the entire application to `ReactDOM`. The `App` component, on the other hand, provides a `ReactRouter` to navigate through multiple pages within the React SPA. It is at this point that the Search Professionals process is rendered.

## Testing the application

When the application starts, you should see the About screen where you can read the contents of this exact same README. That is the first page in the ReactRouter switch. The entry point is `/`. You will soon notice the "Search Professionals" navigation tab on the menu. Click it to start looking up professionals, navigating to `/search-professionals`. I've aimed to provide a good UX look and feel, making everything intuitive. The design follows the wireframe in the requirements document.

Some user actions to be taken into account:

- On the Search Professionals page, you can submit your form and navigate through the pages at the bottom of the table (once it is populated with data).
- Both form fields are validated before you can submit the form or navigate through professionals using the pagination CTA's.
- If the user changes the professional category, the current state is reset and the professionals table is cleared.
- If the user changes the postcode, it will be validated when blurring out of the field. If the postcode is incorrect, the pagination module at the bottom won't be available—the user must fetch the professionals again.
- The user can navigate to higher page indexes instead of just using the "previous" and "next" buttons.

## Analysis

Throughout the development, I considered many improvements that I wanted to include, but due to time constraints, I couldn't implement everything. Here are some enhancements I thought could be made:

- Adding polyfills to provide complete browser compatibility (especially because I'm using [fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)); (Please use a recent browser for testing the app.)
- Providing bundling configurations for both development and production environments. This task, while not the most exciting, is essential in a corporate environment (e.g., obfuscating rules, building rules, bundling, etc.).
- Establishing strict coding configurations, including:
  - Adding/excluding linter rules tailored to the company/environment.
  - Setting code formatting rules to avoid conflicts during branch merging to upper environments and ease the CI process
- Implementing responsive or adaptive design, which is currently nonexistent in this app.
- Simplifying some of the types, as they are overengineered and add unnecessary complexity.
- Adhering to web standards, particularly in generic components, such as accessibility rules and WHATWG standards.
- Improving error handling for API calls, as network errors (e.g., 500) or API custom errors are not currently handled.
- Adding unit tests, which was a goal initially but was not realized due to time constraints.
- Providing good documentation for generic hooks and components in a proper README.md document.

## Support

If anything goes wrong with the application or if you have any questions, please feel free to email me, and I'll look into it. Clone the repository, experiment with the code, and don’t hesitate to suggest improvements or ask any questions you may have.

## Authors

Eduardo Miguel Fernandes

- emiguel.dev@gmail.com
- [@token-ed](https://github.com/token-ed)

## Version History

- 1.0.1
  - FE code challenge
