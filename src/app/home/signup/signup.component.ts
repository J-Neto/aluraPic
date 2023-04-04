import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
    templateUrl: './signup.component.html',
    providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit {

    signupForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private renderer: Renderer2,
        private platformDetectorService: PlatformDetectorService
    ) {}
    
    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['', 
                [
                    Validators.required, 
                    Validators.email,
                ]
            ],
            fullName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(60)
                ]
            ],
            userName: ['', 
                [
                    Validators.required,
                    lowerCaseValidator,
                    // Validators.pattern(/^[a-z0-9_\-]+$/),
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(14)
                ]
            ]
        });

        this.platformDetectorService.isPlatformBrowser() && this.renderer.selectRootElement('#emailInput').focus();
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signUpService
            .signup(newUser)
            .subscribe(
                {
                    next: () => {
                        this.router.navigate([''])
                    },
                    error: (err) => {
                        console.log(err);
                        this.platformDetectorService.isPlatformBrowser() && this.renderer.selectRootElement('#emailInput').focus();
                    }
                }
            );
    }
}