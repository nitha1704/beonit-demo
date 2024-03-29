import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { PresentationComponent } from "./presentation/presentation.component";
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
import { OfferComponent } from "./pages/offer/offer.component";
import { TeamComponent } from "./pages/team/team.component";
import { AchievementComponent } from "./pages/achievement/achievement.component";
import { IotComponent } from "./pages/products/iot/iot.component";
import { ErpComponent } from "./pages/products/erp/erp.component";
import { ResearchComponent } from "./pages/products/research/research.component";
import { KeyboardComponent } from "./pages/products/keyboard/keyboard.component";
import { PulseOximeterComponent } from "./pages/products/pulse-oximeter/pulse-oximeter.component";
import { WaterQualityMonitoringComponent } from "./pages/products/water-quality-monitoring/water-quality-monitoring.component";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "components", component: IndexComponent },
  { path: "presentation", component: PresentationComponent },
  { path: "sections", component: SectionsComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "error500", component: Error500Component },
  { path: "account-settings", component: AccountsettingsComponent },
  { path: "blogpost", component: BlogpostComponent },
  { path: "blogposts", component: BlogpostsComponent },
  { path: "chat", component: ChatpageComponent },
  { path: "checkout", component: CheckoutpageComponent },
  { path: "ecommerce", component: EcommerceComponent },
  { path: "error", component: ErrorComponent },
  { path: "invoice", component: InvoicepageComponent },
  { path: "login", component: LoginpageComponent },
  { path: "pricing", component: PricingComponent },
  { path: "product", component: ProductpageComponent },
  { path: "reset", component: ResetpageComponent },

  // My Customize Pages
  { path: "home", component: LandingpageComponent },
  { path: "contact-us", component: ContactusComponent },
  { path: "about-us", component: AboutusComponent },
  { path: "team", component: TeamComponent },
  { path: "achievement", component: AchievementComponent },
  { path: "offer", component: OfferComponent },

  // Products
  { path: "iot", component: IotComponent },
  { path: "erp", component: ErpComponent },
  { path: "research", component: ResearchComponent },
  { path: "keyboard", component: KeyboardComponent },
  { path: "pulse-oximeter", component: PulseOximeterComponent },
  { path: "water-quality-monitoring", component: WaterQualityMonitoringComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
