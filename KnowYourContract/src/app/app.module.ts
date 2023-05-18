import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubmitKycontractComponent } from './form-components/submit-kycontract/submit-kycontract.component';
import { SubmitObjectionComponent } from './form-components/submit-objection/submit-objection.component';
import { SearchKycontractsComponent } from './search-kycontracts/search-kycontracts.component';
import { ViewKycontractDetailsComponent } from './view-kycontract-details/view-kycontract-details.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule} from 'primeng/button'
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { ChipModule } from 'primeng/chip';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubmitKycontractComponent,
    SubmitObjectionComponent,
    SearchKycontractsComponent,
    ViewKycontractDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    ToolbarModule,
    TooltipModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    SplitButtonModule,
    InputTextareaModule,
    EditorModule,
    ChipModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
