import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { VMessageComponent } from '../shared/components/vmessage/vmessage.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [ 
        CommonModule, 
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule {}