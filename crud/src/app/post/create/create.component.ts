import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: PostService,
    private router: Router
  ) {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.myForm.valid);
    if (this.myForm.valid) {
      this.service.addData(this.myForm.value).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('post/index');
      });
    }
  }
}
