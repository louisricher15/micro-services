# micro-services

### Sources
- https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527
- 🧠

### What I've done
- `ng new parent-application --routing`
  - Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?
    This setting helps improve maintainability and catch bugs ahead of time.
    For more information, see https://angular.io/strict -----> Yes
  - Which stylesheet format would you like to use? -----> SCSS


- 🍺


- `cd parent-application`


- `ng serve`


- `ng g application first-children-app --routing`
  - Which stylesheet format would you like to use? -----> SCSS


- `ng g application second-children-app --routing`
  - Which stylesheet format would you like to use? -----> SCSS


- Create a blank page on each app to differentiate them : e.g. in first-children-app directory set the main 
html content page to 'FirstChildrenApp' and in second-children-app directory, 'SecondChildrenApp' for example


- test by running : `ng serve --project first-children-app` or `ng serve --project second-children-app`


- configure each app.module files from children apps :
  - add
    ```
    @NgModule({})
    export class FirstChildrenAppSharedModule {
      static forRoot(): ModuleWithProviders<any> {
        return {
          ngModule: AppModule,
          providers: []
        }
      }
    }
    ```
    on the first children app, and 
    ```
    @NgModule({})
    export class SecondChildrenAppSharedModule {
      static forRoot(): ModuleWithProviders<any> {
        return {
          ngModule: AppModule,
          providers: []
        }
      }
    }
    ``` 
    on the second.
  - declare a provider array for later usages : `const providers: any[] = [];` and bind it through the 'providers' 
  fields in each Modules (First/SecondChildrenAppModule and AppModule)


- configure app.module fil from parent app by importing the forRoot() conventions from the children apps into the import 
field on Parent AppModule:
  ```
  ...,
  FirstChildrenAppSharedModule.forRoot(),
  SecondChildrenAppSharedModule.forRoot()
  ```

- on each children app, generate 2 views as component and another one as a bridge to navigate between them:
  - `ng g c first-view --project=first-children-app`
  - `ng g c second-view --project=first-children-app`
  - `ng g c view-bridge --project=first-children-app`
  - `ng g c first-view --project=second-children-app`
  - `ng g c second-view --project=second-children-app`
  - `ng g c view-bridge --project=second-children-app`

  - On first children app :
  
    first view component
    ```
    <app-view-bridge></app-view-bridge>
    <p>first-view works! (First App)</p>
    ```
    second view component
    ```
    <app-view-bridge></app-view-bridge>
    <p>second-view works! (First App)</p>
    ```
    view bridge component
    ```
    <p>view-bridge works!</p>
    <a routerLink="/first/first" >First View (First App)</a><div style="margin: 0 42px"></div><a routerLink="/first/second" >Second View (First App)</a>
    ```
  - On second children app :
  
    first view component
    ```
    <app-view-bridge></app-view-bridge>
    <p>first-view works! (Second App)</p>
    ```
    second view component
    ```
    <app-view-bridge></app-view-bridge>
    <p>second-view works! (Second App)</p>
    ```
    view bridge component
    ```
    <p>view-bridge works!</p>
    <a routerLink="/second/first" >First View (Second App)</a><div style="margin: 0 42px"></div><a routerLink="/second/second" >Second View (Second App)</a>
    ```
    
- Set up the routes on each children app-routing.module:
  - on first children app :
  ```
  const routes: Routes = [
    { path: 'first/first', component: FirstViewComponent },
    { path: 'first/second', component: SecondViewComponent },
    { path: 'first', redirectTo: 'first/first' }
  ];
  ```
  - on second children app :
  ```
  const routes: Routes = [
    { path: 'second/first', component: FirstViewComponent },
    { path: 'second/second', component: SecondViewComponent },
    { path: 'second', redirectTo: 'second/first' },
  ];
  ```

- Set up the routes on parent app-routing.module:
```
const routes: Routes = [
  { path: 'first', loadChildren: '../../projects/first-children-app/src/app/app.module#FirstChildrenAppSharedModule' },
  { path: 'second', loadChildren: '../../projects/second-children-app/src/app/app.module#SecondChildrenAppSharedModule' },
];
```

- Add the forRoot() convention in imports:
```
..., FirstChildrenAppSharedModule.forRoot(), SecondChildrenAppSharedModule.forRoot()

```

### Let's go ! 🍻
At this point, we reached the end of the tutorial from the 'Sources' section and we can run separately the parent and 
the children apps or just one of them (only the parent can handle the children apps at same time, if your run only the 
second children app -for example-, you'll be running only the second children app (Logic 🤷‍)).

Pretty cool, but not enough !
Now let's use our brain to try to REALY separate the children projects : for the real aim of this project, we want to 
create another children outside this eco-system and try to use it through this system 😬

[IN PROGRESS]
