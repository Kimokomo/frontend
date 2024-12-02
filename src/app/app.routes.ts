import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'userList',
        component: UserListComponent,
    },
    {
        path: 'productList',
        component: ProductListComponent,
    },
    {
        path: 'userDetails',
        component: UserDetailsComponent,
    }
];
