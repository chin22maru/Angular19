import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { VariablesComponent } from './components/variables/variables.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ApiCallIntegrationComponent } from './components/api-call-integration/api-call-integration.component';
import { UserComponent } from './components/user/user.component';
import { UserReactiveFormComponent } from './components/user-reactive-form/user-reactive-form.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';

export const routes: Routes = [
    {
        path: 'variables',
        component: VariablesComponent
    },
    {
        path: 'data-bindings',
        component: DataBindingComponent
    },
    {
        path: 'directives',
        component: DirectivesComponent
    },
    {
        path: 'template-form',
        component: TemplateFormComponent
    },
    {
        path: 'api-call-integration',
        component: ApiCallIntegrationComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'user-reactive-form',
        component: UserReactiveFormComponent
    },
    {
        path: 'resource-api',
        component: ResourceApiComponent
    },
];
