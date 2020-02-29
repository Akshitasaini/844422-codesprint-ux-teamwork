import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ViewGiftcardComponent } from './components/view-giftcard/view-giftcard.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "order", component: OrderPageComponent },
  { path: "main", component: MainContentComponent },
  { path: "viewcard", component: ViewGiftcardComponent },
  { path: "contact", component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
