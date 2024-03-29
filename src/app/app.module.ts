import { BrowserModule } from "@angular/platform-browser";
import { TagInputModule } from "ngx-chips";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
//import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { TimepickerModule } from "ngx-bootstrap/timepicker";

import { CarouselModule } from "ngx-owl-carousel-o";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PresentationModule } from "./presentation/presentation.module";

import { IndexComponent } from "./index/index.component";
import { SectionsComponent } from "./sections/sections.component";
import { ProfilepageComponent } from "./examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./examples/landingpage/landingpage.component";
import { AboutusComponent } from "./examples/aboutus/aboutus.component";
import { Error500Component } from "./examples/500error/500error.component";
import { AccountsettingsComponent } from "./examples/accountsettings/accountsettings.component";
import { BlogpostComponent } from "./examples/blogpost/blogpost.component";
import { BlogpostsComponent } from "./examples/blogposts/blogposts.component";
import { ChatpageComponent } from "./examples/chatpage/chatpage.component";
import { CheckoutpageComponent } from "./examples/checkoutpage/checkoutpage.component";
import { ContactusComponent } from "./examples/contactus/contactus.component";
import { EcommerceComponent } from "./examples/ecommerce/ecommerce.component";
import { ErrorComponent } from "./examples/error/error.component";
import { InvoicepageComponent } from "./examples/invoicepage/invoicepage.component";
import { LoginpageComponent } from "./examples/loginpage/loginpage.component";
import { PricingComponent } from "./examples/pricing/pricing.component";
import { ProductpageComponent } from "./examples/productpage/productpage.component";
import { ResetpageComponent } from "./examples/resetpage/resetpage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PictureUploadComponent } from "./components/picture-upload/picture-upload.component";
import { OfferComponent } from './pages/offer/offer.component';
import { ContactmodalComponent } from './components/contactmodal/contactmodal.component';
import { TeamComponent } from './pages/team/team.component';
import { AchievementComponent } from './pages/achievement/achievement.component';
import { IotComponent } from './pages/products/iot/iot.component';
import { ErpComponent } from './pages/products/erp/erp.component';
import { ResearchComponent } from './pages/products/research/research.component';
import { KeyboardComponent } from './pages/products/keyboard/keyboard.component';
import { PulseOximeterComponent } from './pages/products/pulse-oximeter/pulse-oximeter.component';
import { WaterQualityMonitoringComponent } from './pages/products/water-quality-monitoring/water-quality-monitoring.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
    SectionsComponent,
    AboutusComponent,
    Error500Component,
    AccountsettingsComponent,
    BlogpostComponent,
    BlogpostsComponent,
    ChatpageComponent,
    CheckoutpageComponent,
    ContactusComponent,
    EcommerceComponent,
    ErrorComponent,
    InvoicepageComponent,
    LoginpageComponent,
    PricingComponent,
    ProductpageComponent,
    ResetpageComponent,
    NavbarComponent,
    FooterComponent,
    PictureUploadComponent,
    OfferComponent,
    ContactmodalComponent,
    TeamComponent,
    AchievementComponent,
    IotComponent,
    ErpComponent,
    ResearchComponent,
    KeyboardComponent,
    PulseOximeterComponent,
    WaterQualityMonitoringComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    PresentationModule,
    TooltipModule.forRoot(),
    TimepickerModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    AngularMultiSelectModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    
    ///// Bootstrap Carousel /////
    //CarouselModule.forRoot(),

    // Owl Carousel
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
