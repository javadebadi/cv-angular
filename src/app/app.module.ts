import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './components/education/education.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { InterestsComponent } from './components/about/interests/interests.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { SwiperModule } from 'swiper/angular';
import { TestimonialsComponent } from './components/about/testimonials/testimonials.component';
import { SkillsComponent } from './components/about/skills/skills.component';
import { BasicInfoComponent } from './components/about/basic-info/basic-info.component';
import { CountsComponent } from './components/about/counts/counts.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    HeaderComponent,
    AboutComponent,
    InterestsComponent,
    ResumeComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    TestimonialsComponent,
    SkillsComponent,
    BasicInfoComponent,
    CountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
