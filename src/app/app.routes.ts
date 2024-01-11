import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CommentsComponent } from './components/comments/comments.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
{
    path:'blog-post',
    component:BlogPostComponent,
    title:'Blog'

},
{
    path:'contact',
    component:ContactComponent,
    title:'Contacto'
}
];
