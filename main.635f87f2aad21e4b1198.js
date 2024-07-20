"use strict";(self.webpackChunkrandom_company_fe_code_challenge=self.webpackChunkrandom_company_fe_code_challenge||[]).push([[792],{355:(e,t,n)=>{var r=n(540),a=n(961),o=n(867),l=function(){return r.createElement("section",{className:o.A.readme},r.createElement("h1",null,"FE Code Challenge"),r.createElement("h2",null,"Start application"),r.createElement("ul",null,r.createElement("li",null,"Clone this repository",r.createElement("pre",null,r.createElement("code",null,"git clone"))),r.createElement("li",null,"Go into the project directory:",r.createElement("pre",null,r.createElement("code",null,"cd fe-code-challenge\\"))),r.createElement("li",null,"You will need to install the package"," ",r.createElement("a",{href:"https://github.com/typicode/json-server"},"json-server")," as that's the package mimicking the server and where the API is stored (db.json)",r.createElement("pre",null,r.createElement("code",null,"npm install json-server"))),r.createElement("li",null,"Start the application with:",r.createElement("pre",null,r.createElement("code",null,"npm run start"))),r.createElement("li",null,"Webpack will start a local server on port 4000, if you have any process running under that port that could be easily overcome by setting a new port in"," ",r.createElement("code",null,"./fe-code-challenge/webpack.dev.config.ts"),", line 86."),r.createElement("li",null,"Also, please bare in mind that I'm using ",r.createElement("em",null,"node-sass")," package and it requires a download from GitHub, if you're sitting behind a proxy it might be problematic - in this case please follow the recommendations on the error logged in the terminal."),r.createElement("li",null,"Any other error on starting the app, please let me know: ",r.createElement("em",null,"emiguel.dev@gmail.com"))),r.createElement("h2",null,"Motivation"),r.createElement("p",null,"This project is part of the recruitment process of Random Company. As suggested by Random Company, I need to fullfil the requirements on the document entitled"," ",r.createElement("em",null,"Front-End Code Challenge")," in which I need to call an API to get professional categories and descriptions. All the code should be wrapped up in an single page application using React.js library and be written in TypeScript."),r.createElement("h2",null,"Getting Started"),r.createElement("h3",null,"Overview"),r.createElement("p",null,"This application was built with:"),r.createElement("ul",null,r.createElement("li",null,r.createElement("strong",null,"ReactJs")," (library used to build the UI's)"),r.createElement("li",null,r.createElement("strong",null,"TypeScript")," (the strongly-typed style of code)"),r.createElement("li",null,r.createElement("strong",null,"Webpack")," (the bundler with all bundling configurations)"),r.createElement("li",null,r.createElement("strong",null,"Babel")," (the compiler responsible for TypeScript transpilation)"),r.createElement("li",null,"Other plugins like loaders (",r.createElement("em",null,"css-loader"),"), Hot Module Replacement plugin or ESLint which supported the fluent development of the app.")),r.createElement("h3",null,"Structure"),r.createElement("p",null,"A quick structure explanation on how I would personally set up a project"),r.createElement("pre",null,r.createElement("code",null,"\n        fe-code-challenge/             // Root of the project\n        ├── src/                            // [src] folder holds all the application code\n        │    ├── app                     // [app] folder is where index.tsx (the bundling entry point) sits\n        │    ├── assets                 // [assets] holds all the assets of this application - images, svgs etc would go in here\n        │    ├── libs/                     // [libs] is the folder where generic UI components, HOC's and other reusable UI related stuff goes in\n        │       └──components/     // [components] is pretty much self explanatory, all the reusable UI components go in here\n        │           └──resources      // [resources] folder has all the resources needed  and reused by components sitting in /components\n        │    └── logic/                   // [logic] will hold all the generic logic, generic hooks, api-contract definition types etc\n        │       └── processes/       // [processes] will group all the processes entry-points' components which can be injected (in my case) on React.Router links\n        │\n        └── .../configuration-files             // All the configuration files which drive the application behavior in terms of bundling, building artifacts, module definitions etc.\n        ")),r.createElement("p",null,"As previously described, I usually like to make a clear separation between the logic and presentation layers. In the logic layer, I have my generic hooks or other components that contain reusable and generic functions and behaviors, but only logic-related behaviors, not UI elements. This includes API calls, mapping responses, business-related calculations, and holding Redux or other Flux stores (though I didn't use any of these libraries in this app)."),r.createElement("h4",null,"./src/logic:"),r.createElement("p",null,"In my case, I have placed the following in this directory:"),r.createElement("ul",null,r.createElement("li",null,"The API responses typed objects as interfaces (",r.createElement("strong",null,"_/api-contracts/professionals_"),'): These were generated using an external tool to create TypeScript interfaces based on the "API contract" provided in the document. Ideally, we would use proper API contracts from Swagger, for example.'),r.createElement("li",null,"All the professionals process logic (",r.createElement("strong",null,"_/professionals_"),"): This contains all the hooks responsible for calling the APIs, mapping the responses, and validating fields. These hooks expose all the necessary methods to handle form validations, button clicks (submitting and pagination logic), and returning the stateful objects that make the UI components dynamic."),r.createElement("li",null,"A generic `use-ajax` hook: This hook's sole responsibility is to receive props and expose the HTTP methods (",r.createElement("code",null,"get()")," and ",r.createElement("code",null,"post()"),") for use in the application. It also exposes methods created within a defined inner hook (",r.createElement("code",null,"use-ajax-actions"),"), which are used to clear AJAX errors or change isLoading in our local state. This implementation may appear a bit verbose, but it is designed to work out of the box and be extremely reusable.")),r.createElement("h4",null,"./src/processes:"),r.createElement("p",null,"In the processes directory, I envisioned it serving all the processes in the application. For example, in my case, there will be only one process: ",r.createElement("strong",null,"_/professionals_"),". This process can have multiple business requirements, but the scope for this app is small. The only function of this process is to present a small _form_ to _search_ for professionals based on a category and a postcode-based location. As such, it includes two presentational components named ",r.createElement("code",null,"form.tsx")," and ",r.createElement("code",null,"search.tsx"),". The search component wraps the form component and calls the ",r.createElement("code",null,"useData()")," hook, which in turn exposes all the methods responsible for the entire behavior in the Professionals Search process."),r.createElement("p",null,"As the application scales, this symbiotic agreement between the ",r.createElement("strong",null,"logic")," and"," ",r.createElement("strong",null,"presentational")," layers can adapt to ongoing changes made by various team members. It's also beneficial to have such a separation, as it allows you to know exactly where to find the logic and presentational components."),r.createElement("h4",null,"./src/libs/components:"),r.createElement("p",null,"In this directory, I've placed all the generic components used in this app. Initially, I considered using stable and highly configurable components provided by the frontend community, such as ",r.createElement("em",null,"material-ui")," components or other libraries. However, I decided that creating components from scratch could be a challenging task that would also demonstrate how I build generic components. Some of the generic components created in this app include:"),r.createElement("ul",null,r.createElement("li",null,"Table"),r.createElement("li",null,"Dropdown"),r.createElement("li",null,"TextBox"),r.createElement("li",null,"Fullpage Loader"),r.createElement("li",null,"Navigation Menu")),r.createElement("p",null,"I aimed to keep the application lightweight, so these components are very basic. Towards the end, I had to install a pagination component library due to a lack of time to finish the project."),r.createElement("h4",null,"./src/app:"),r.createElement("p",null,"This directory serves the single purpose of holding the entry point for bundling the project and other components that might impact the top level of the hierarchical component tree. Examples include ",r.createElement("em",null,"ErrorBoundaries"),", custom ",r.createElement("em",null,"ContextProviders"),", ",r.createElement("em",null,"i18n")," ","logic, etc."),r.createElement("p",null,"In my case, I have only the index and `App` components. The index component solely delegates the responsibility of rendering the entire application to `ReactDOM`. The `App` component, on the other hand, provides a `ReactRouter` to navigate through multiple pages within the React SPA. It is at this point that the Search Professionals process is rendered."),r.createElement("h2",null,"Testing the application"),r.createElement("p",null,'When the application starts, you should see the About screen where you can read the contents of this exact same README. That is the first page in the ReactRouter switch. The entry point is `/`. You will soon notice the "Search Professionals" navigation tab on the menu. Click it to start looking up professionals, navigating to `/search-professionals`. I\'ve aimed to provide a good UX look and feel, making everything intuitive. The design follows the wireframe in the requirements document.'),r.createElement("p",null,"Some user actions to be taken into account:"),r.createElement("ul",null,r.createElement("li",null,"On the Search Professionals page, you can submit your form and navigate through the pages at the bottom of the table (once it is populated with data)."),r.createElement("li",null,"Both form fields are validated before you can submit the form or navigate through professionals using the pagination CTA's."),r.createElement("li",null,"If the user changes the professional category, the current state is reset and the professionals table is cleared."),r.createElement("li",null,"If the user changes the postcode, it will be validated when blurring out of the field. If the postcode is incorrect, the pagination module at the bottom won't be available—the user must fetch the professionals again."),r.createElement("li",null,'The user can navigate to higher page indexes instead of just using the "previous" and "next" buttons.')),r.createElement("h2",null,"Analysis"),r.createElement("p",null,"Throughout the development, I considered many improvements that I wanted to include, but due to time constraints, I couldn't implement everything. Here are some enhancements I thought could be made:"),r.createElement("ul",null,r.createElement("li",null,"Adding polyfills to provide complete browser compatibility (especially because I'm using"," ",r.createElement("a",{href:"https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API"},"fetch API"),"); (Please use a recent browser for testing the app.)"),r.createElement("li",null,"Providing bundling configurations for both development and production environments. This task, while not the most exciting, is essential in a corporate environment (e.g., obfuscating rules, building rules, bundling, etc.)."),r.createElement("li",null,"Establishing strict coding configurations, including:",r.createElement("ul",null,r.createElement("li",null,"Adding/excluding linter rules tailored to the company/environment."),r.createElement("li",null,"Setting code formatting rules to avoid conflicts during branch merging to upper environments and ease the CI process"))),r.createElement("li",null,"Implementing responsive or adaptive design, which is currently nonexistent in this app."),r.createElement("li",null,"Simplifying some of the types, as they are overengineered and add unnecessary complexity."),r.createElement("li",null,"Adhering to web standards, particularly in generic components, such as accessibility rules and WHATWG standards."),r.createElement("li",null,"Improving error handling for API calls, as network errors (e.g., 500) or API custom errors are not currently handled."),r.createElement("li",null,"Adding unit tests, which was a goal initially but was not realized due to time constraints."),r.createElement("li",null,"Providing good documentation for generic hooks and components in a proper README.md document.")),r.createElement("h2",null,"Support"),r.createElement("p",null,"If anything goes wrong with the application or if you have any questions, please feel free to email me, and I'll look into it. Clone the repository, experiment with the code, and don’t hesitate to suggest improvements or ask any questions you may have."),r.createElement("h2",null,"Authors"),r.createElement("p",null,"Eduardo Miguel Fernandes"),r.createElement("ul",null,r.createElement("li",null,"emiguel.dev@gmail.com"),r.createElement("li",null,r.createElement("a",{href:"https://github.com/token-ed"},"@token-ed"))),r.createElement("h2",null,"Version History"),r.createElement("ul",null,r.createElement("li",null,"1.0.1",r.createElement("ul",null,r.createElement("li",null,"FE code challenge")))))};const i=n.p+"3563016f0978fb248b85.png";var s=function(e){var t=e.className,n=e.height,a=e.width,o=e.src;return r.createElement("img",{role:"img",className:t,src:o,height:n,width:a,loading:"lazy"})},c=n(625),u=n(691),p=function(){return r.createElement("nav",{className:u.A.navigation},r.createElement(s,{className:u.A.image,src:i,width:280}),r.createElement("ul",{className:u.A.ul},r.createElement(c.N_,{to:"/"},r.createElement("li",null,r.createElement("h5",null,"About"))),r.createElement(c.N_,{to:"/search-professionals"},r.createElement("li",null,r.createElement("h5",null,"Search Professionals")))))},d=n(705),m=n(45),h=n(458);const g=n.p+"8981e9a58e16221f8156.gif";var f=n(942),b=n.n(f),y=n(739),v=function(e){var t=e.isLoading,n=b()((0,d.A)({},y.A.hidden,!t),y.A.container);return r.createElement("div",{className:n},r.createElement("div",{className:y.A.loader},r.createElement(s,{src:g})))},E=n(168),w=n(764),O=n.n(w),A=n(839),x=function(e,t){return r.isValidElement(e)?"".concat(t):e.toString()},j=function(e){var t=e.headData,n=e.bodyData,a=e.tableClassName,o=e.onPageChange;return t&&t.length?r.createElement("section",{className:A.A.tableContainer},r.createElement("table",{className:a},r.createElement("thead",null,r.createElement("tr",null,t.map((function(e,t){return r.createElement("td",{key:t},e)})))),r.createElement("tbody",null,null==n?void 0:n.map((function(e,t){return r.createElement("tr",{key:t},Object.values(e).map((function(e,t){return r.createElement("td",{key:x(e,t)},e)})))})))),o&&n.length?r.createElement(O(),(0,E.A)({previousLabel:"←",nextLabel:"→",containerClassName:A.A.paginationContainer,activeClassName:A.A.paginationLinkActive,pageClassName:A.A.pageLi,pageLinkClassName:A.A.pageLiLink,previousClassName:A.A.previous,nextLinkClassName:A.A.nextLink,previousLinkClassName:A.A.previousLink,breakClassName:A.A.pageLi,nextClassName:A.A.next,breakLinkClassName:A.A.pageLiLink},e)):null):null},k=n(296),P=n(467),C=n(756),_=n.n(C),S=function(e){return e.GET="GET",e.POST="POST",e}({});function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,d.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){var t=e.headers,n=void 0===t?new Headers:t,r=e.method,a=e.contentType,o=e.acceptLanguage,l=e.bodyParams;a&&n.set("Content-Type",a),o&&n.set("Accept-Language",o);var i={headers:n,method:r};return l&&(i.body=JSON.stringify(l)),i};function L(e){return D.apply(this,arguments)}function D(){return(D=(0,P.A)(_().mark((function e(t){var n,r,a;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.endpoint){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,n=T(t),r=new URLSearchParams(t.queryParams),e.next=7,fetch("".concat(t.endpoint,"?").concat(r),n);case 7:if((a=e.sent).ok){e.next=10;break}throw{errorHandled:new Error(a.statusText),response:a};case 10:return e.abrupt("return",a);case 13:if(e.prev=13,e.t0=e.catch(2),!(e.t0&e.t0.errorHandled)){e.next=17;break}throw{error:e.t0.errorHandled,response:e.t0.response};case 17:throw{error:e.t0};case 19:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}function R(e,t){return V.apply(this,arguments)}function V(){return(V=(0,P.A)(_().mark((function e(t,n){var r,a,o,l,i,s;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",null);case 2:return r={isLoading:!1},a=null,e.prev=4,e.next=7,n.text();case 7:o=e.sent,l=o&&JSON.parse(o)||null,i=l&&l.errors||[],r=N(N({},r),{},{ajaxServerErrors:i}),t&&(a=t.mapResponse({httpResponse:n,request:t,response:l})),e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(4),{error:e.t0,response:n};case 17:return s=N({ajaxState:r},a),e.abrupt("return",s);case 19:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)}function M(e){return B.apply(this,arguments)}function B(){return B=(0,P.A)(_().mark((function e(t){var n,r,a;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=(0,P.A)(_().mark((function e(){var n,r;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:return n=e.sent,e.next=5,R(t,n);case 5:return r=e.sent,e.abrupt("return",{rawResponse:n,ajaxState:r});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,r=n(),e.next=5,r;case 5:return a=e.sent,e.abrupt("return",a.ajaxState);case 9:throw e.prev=9,e.t0=e.catch(1),N({},{ajaxError:e.t0,ajaxServerErrors:[],isLoading:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),B.apply(this,arguments)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,d.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={ajaxServerErrors:[],isLoading:!1};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,d.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(e){return e.JSON="application/json",e.Text="text/plain",e}({});function W(e){var t,n,a=(t=e.onAjaxStateUpdate,n=function(e){t&&t(F(F({},q),e))},{clearErrors:function(){n({})},setLoading:function(e){n({isLoading:e})}}),o=(0,r.useCallback)(function(){var t=(0,P.A)(_().mark((function t(n,r,o){var l;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(U(U({},e),{},{method:n,bodyParams:null==r?void 0:r.bodyParams,queryParams:null==r?void 0:r.queryParams,headers:o}));case 3:return l=t.sent,t.abrupt("return",U(U({},l),{},{ajaxState:U(U({},null==l?void 0:l.ajaxState),a)}));case 7:throw t.prev=7,t.t0=t.catch(0),U(U({},t.t0),a);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n,r){return t.apply(this,arguments)}}(),[a,e]);return(0,r.useMemo)((function(){return U({get:o.bind(null,S.GET),post:o.bind(null,S.POST)},a)}),[a,o])}var J=function(e,t){return e.designation<t.designation?-1:e.designation>t.designation?1:0},z=function(e){var t=e.response;return t&&t.length?{categories:t.filter((function(e){return!e.concealed})).sort(J)}:null},K=function(e){var t=e.response,n=e.httpResponse;return t&&t.length&&n?{professionals:t.map((function(e){var t;return{id:e.id,name:e.name,postCode:null===(t=e.address)||void 0===t?void 0:t.postcode,reviewRating:e.rating}}))}:null};function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){(0,d.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=/^[a-zA-Z0-9 ]*$/;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,d.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=/^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/i,ne={categoryId:null,postCode:"",isCategoryIdValid:null,isPostCodeValid:null};function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){(0,d.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe=n(142),le=n(196),ie=(0,r.memo)((function(e){var t=e.className,n=e.id,a=e.label,o=e.name,l=e.onBlur,i=e.onSelect,s=e.options,c=e.selected,u=e.isValid,p=b()(t,le.A.dropdownContainer),m=b()(le.A.select,(0,d.A)({},le.A.selectNotValid,!1===u)),h=(0,r.useCallback)((function(e){if(e){var t=e.currentTarget;i(t.value)}}),[i]),g=(0,r.useMemo)((function(){var e=null==s?void 0:s.find((function(e){return e.value===c}));if(e)return e.value}),[s,c]),f=null==s?void 0:s.map((function(e){return r.createElement("option",{value:e.value,key:e.value},e.label)}));return f&&!g&&f.unshift(r.createElement("option",{value:0,key:"0"},"Choose Category")),r.createElement("div",{className:p},r.createElement("label",{htmlFor:n,className:le.A.label},a),r.createElement("select",{className:m,name:o,id:n,value:g,onChange:h,onBlur:l},f))}));ie.displayName="Dropdown";var se=n(944),ce=function(e){var t=e.id,n=e.isValid,a=e.maxLength,o=e.className,l=e.label,i=e.onChange,s=e.value,c=e.onBlur,u=b()(se.A.input,(0,d.A)({},se.A.inputNotValid,!1===n));return r.createElement("div",{className:b()(o,se.A.textBoxContainer)},r.createElement("label",{htmlFor:t,className:se.A.label},l),r.createElement("input",{id:t,className:u,maxLength:a,onChange:i,value:s,onBlur:c}))},ue=n(826),pe=function(e){var t=e.maxLength,n=e.onChange,a=e.onSelect,o=e.onSubmit,l=e.options,i=e.categoryId,s=e.postCode,c=e.isCategoryIdValid,u=e.isPostCodeValid,p=e.validateCategory,d=e.validatePostcode;return r.createElement("form",{className:ue.A.formContainer,onSubmit:function(e){e.preventDefault(),d(),p(),o()}},r.createElement(ie,{id:"category-dropdown",isValid:c,label:"Category",name:"categories",onSelect:function(e){a(e)},options:l,selected:i,onBlur:function(){p()},className:ue.A.dropdown}),r.createElement(ce,{id:"postcode-text-box",isValid:u,label:"Postcode",maxLength:t,onBlur:function(){d()},onChange:n,value:s,className:ue.A.textBox}),r.createElement("button",{className:ue.A.button,type:"submit"},"Submit"))},de=["reviewRating"];function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){(0,d.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=["Id","Name","Postcode","Review Rating"],fe=function(){var e=function(){var e,t,n,a,o,l,i,s=(0,r.useState)(ne),c=(0,k.A)(s,2),u=c[0],p=c[1],m=function(){var e=(0,r.useState)({isLoading:!0}),t=(0,k.A)(e,2),n=t[0],a=t[1],o=(0,r.useState)(null),l=(0,k.A)(o,2),i=l[0],s=l[1],c=W({endpoint:"https://my-json-server.typicode.com/token-ed/fe-code-challenge/categories",mapResponse:z,onAjaxStateUpdate:a,contentType:G.Text}),u=(0,r.useCallback)((function(){try{setTimeout((0,P.A)(_().mark((function e(){var t,n;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get();case 2:t=e.sent,n=t.categories,s(n),c.setLoading(!1);case 6:case"end":return e.stop()}}),e)}))),500)}catch(e){throw e}}),[c]);return(0,r.useEffect)((function(){return u()}),[]),{ajaxState:n,categories:i}}(),h=m.ajaxState,g=m.categories,f=function(){var e=(0,r.useState)({isLoading:!1}),t=(0,k.A)(e,2),n=t[0],a=t[1],o=(0,r.useState)(),l=(0,k.A)(o,2),i=l[0],s=l[1],c=W({endpoint:"https://my-json-server.typicode.com/token-ed/fe-code-challenge/professionals",mapResponse:K,onAjaxStateUpdate:a,contentType:G.JSON}),u=(0,r.useCallback)(function(){var e=(0,P.A)(_().mark((function e(t,n){var r,a,o=arguments;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=o.length>2&&void 0!==o[2]?o[2]:1,e.prev=1,c.setLoading(!0),a=1===r?0:5*r,setTimeout((0,P.A)(_().mark((function e(){var t,n,r;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get({queryParams:(0,d.A)((0,d.A)({},"_start",a),"_limit",5)});case 2:t=e.sent,n=t.professionals,r={professionals:n,totalPages:Math.floor(3.2)},s(r),c.setLoading(!1);case 7:case"end":return e.stop()}}),e)}))),1e3),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(1),c.setLoading(!1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),[c]);return{ajaxState:n,getProfessionals:u,professionalsWithPagination:i,resetProfessionals:(0,r.useCallback)((function(){s({})}),[])}}(),b=f.ajaxState,y=f.professionalsWithPagination,v=f.getProfessionals,E=f.resetProfessionals,w=(t=(e={state:u,setState:p}).state,n=e.setState,a=t.categoryId,o=t.postCode,l=(0,r.useCallback)((function(){return!!a&&a>0}),[a]),i=(0,r.useCallback)((function(){return!!o&&te.test(o)}),[o]),{validateCategory:(0,r.useCallback)((function(){var e=l();return n(e?function(e){return ee(ee({},e),{},{isCategoryIdValid:!0})}:function(e){return ee(ee({},e),{},{isCategoryIdValid:!1})}),e}),[l,n]),validatePostcode:(0,r.useCallback)((function(){var e=i();return n(e?function(e){return ee(ee({},e),{},{isPostCodeValid:!0})}:function(e){return ee(ee({},e),{},{isPostCodeValid:!1})}),e}),[i,n])}),O=function(e){var t=e.state,n=e.setState,a=(0,r.useCallback)((function(e){var r=parseInt(e);isNaN(r)||n(Q(Q({},t),{},{categoryId:r}))}),[n,t]);return{setPostcode:(0,r.useCallback)((function(e){Y.test(e)&&n(Q(Q({},t),{},{postCode:e.toUpperCase()}))}),[n,t]),setCategory:a}}({state:u,setState:p}),A=(0,r.useMemo)((function(){var e=u.isCategoryIdValid,t=u.isPostCodeValid;return e&&t}),[u]);return ae(ae(ae({categoriesAjaxState:h,professionalsAjaxState:b,categories:g,professionalsWithPagination:y,onSubmit:(0,r.useCallback)((function(){A&&v(u.categoryId,u.postCode.toLowerCase())}),[v,u.categoryId,u.postCode,A]),onPageChange:(0,r.useCallback)((function(e){A&&v(u.categoryId,u.postCode.toLowerCase(),e)}),[v,u.categoryId,u.postCode,A]),resetProfessionals:E},w),O),u)}(),t=e.categories,n=e.categoriesAjaxState,a=e.categoryId,o=e.isCategoryIdValid,l=e.isPostCodeValid,i=e.onSubmit,s=e.onPageChange,c=e.postCode,u=e.professionalsAjaxState,p=e.professionalsWithPagination,g=e.resetProfessionals,f=e.setCategory,b=e.setPostcode,y=e.validateCategory,E=e.validatePostcode,w=o&&l,O=(0,r.useCallback)((function(e){b(e.target.value)}),[b]),A=(0,r.useCallback)((function(){i()}),[i]),x=(0,r.useCallback)((function(e){if(!e)return null;s(e.selected+1)}),[s]),C=(0,r.useMemo)((function(){return null==t?void 0:t.map((function(e){return{label:e.designation,value:e.id}}))}),[t]),S=(0,r.useMemo)((function(){var e=p&&p.professionals?(0,h.A)(p.professionals):[];return null==e?void 0:e.map((function(e){return e.reviewRating,he(he({},(0,m.A)(e,de)),{},{reviewRatingComponent:r.createElement(oe.A,{count:5,edit:!1,size:24,value:Math.round(e.reviewRating),className:ue.A.stars})})}))}),[p]);return r.createElement(r.Fragment,null,r.createElement(v,{isLoading:n.isLoading||u.isLoading}),r.createElement("section",{className:ue.A.searchContainer},r.createElement(pe,{maxLength:8,onChange:O,onSelect:function(e){f(e),g()},onSubmit:A,options:C,categoryId:a,postCode:c,isCategoryIdValid:o,isPostCodeValid:l,validateCategory:y,validatePostcode:E}),r.createElement(j,{headData:ge,bodyData:S,pageCount:(null==p?void 0:p.totalPages)||0,onPageChange:w&&x,disableInitialCallback:!0,pageRangeDisplayed:8,marginPagesDisplayed:0})))},be=n(347),ye=n(785),ve=function(){return r.createElement(c.Kd,null,r.createElement("div",{className:ye.A.container},r.createElement(p,null),r.createElement(be.dO,null,r.createElement(be.qh,{path:"/",exact:!0,component:l}),r.createElement(be.qh,{path:"/search-professionals",component:fe}))))};a.render(r.createElement(r.StrictMode,null,r.createElement(ve,null)),document.getElementById("root"))},785:(e,t,n)=>{n.d(t,{A:()=>r});const r={container:"app_container_Orjb4y"};var a=n(140)(e.id,{locals:!0});e.hot.dispose(a)},867:(e,t,n)=>{n.d(t,{A:()=>r});const r={readme:"about_readme_ORbM-o"};var a=n(140)(e.id,{locals:!0});e.hot.dispose(a)},196:(e,t,n)=>{n.d(t,{A:()=>r});const r={"dropdown-container":"dropdown_dropdown-container_kEzcR2",dropdownContainer:"dropdown_dropdown-container_kEzcR2",label:"dropdown_label_ozX28L",select:"dropdown_select_KgwDMq","select-not-valid":"dropdown_select-not-valid_p6wpDg",selectNotValid:"dropdown_select-not-valid_p6wpDg"};var a=n(140)(e.id,{locals:!0});e.hot.dispose(a)},944:(e,t,n)=>{n.d(t,{A:()=>r});const r={"text-box-container":"text-box_text-box-container_bRMQSd",textBoxContainer:"text-box_text-box-container_bRMQSd",label:"text-box_label_NjB3lJ",input:"text-box_input_l-qJhA","input-not-valid":"text-box_input-not-valid_ukwO66",inputNotValid:"text-box_input-not-valid_ukwO66"};var a=n(140)(e.id,{locals:!0});e.hot.dispose(a)},739:(e,t,n)=>{n.d(t,{A:()=>r});const r={container:"loader_container_IXtUEA",hidden:"loader_hidden_GS6IcV",loader:"loader_loader_i3DjbT"};var a=n(140)(e.id,{locals:!0});e.hot.dispose(a)},691:(e,t,n)=>{n.d(t,{A:()=>r});const r={navigation:"menu_navigation_axMOEL",image:"menu_image_1npch3",ul:"menu_ul_HdLY6v"};var a=n(140)(e.id,{locals:!0});e.hot.dispose(a)},839:(e,t,n)=>{n.d(t,{A:()=>r});const r={"table-container":"table_table-container_IHZOj+",tableContainer:"table_table-container_IHZOj+","pagination-container":"table_pagination-container_jpVd5N",paginationContainer:"table_pagination-container_jpVd5N","pagination-link-active":"table_pagination-link-active_M4HZoF",paginationLinkActive:"table_pagination-link-active_M4HZoF",previous:"table_previous_4JeWwD",next:"table_next_203wbc","next-link":"table_next-link_ZR+j7K",nextLink:"table_next-link_ZR+j7K","previous-link":"table_previous-link_lwmwbT",previousLink:"table_previous-link_lwmwbT","page-li":"table_page-li_kE+Cu6",pageLi:"table_page-li_kE+Cu6","page-li-link":"table_page-li-link_pX+1ey",pageLiLink:"table_page-li-link_pX+1ey"};var a=n(140)(e.id,{locals:!0});e.hot.dispose(a)},826:(e,t,n)=>{n.d(t,{A:()=>r});const r={"form-container":"styles-shared_form-container_GfIsAN",formContainer:"styles-shared_form-container_GfIsAN","search-container":"styles-shared_search-container_LZZB+p",searchContainer:"styles-shared_search-container_LZZB+p","text-box":"styles-shared_text-box_kpFDMc",textBox:"styles-shared_text-box_kpFDMc",dropdown:"styles-shared_dropdown_sW3Kam",button:"styles-shared_button_95CN65",stars:"styles-shared_stars_oS8ogT"};var a=n(140)(e.id,{locals:!0});e.hot.dispose(a)}},e=>{e.O(0,[96],(()=>e(e.s=355))),e.O()}]);
//# sourceMappingURL=main.635f87f2aad21e4b1198.js.map