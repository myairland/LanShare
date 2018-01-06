import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { InputComponent  } from "./inputbar.component";
import { MatInputModule  } from "@angular/material";
import { MatButtonModule  } from "@angular/material";
import { MatCardModule  } from "@angular/material";
import { ContainerComponent } from './container.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
