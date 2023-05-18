import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-submit-objection',
  templateUrl: './submit-objection.component.html',
  styleUrls: ['./submit-objection.component.css']
})
export class SubmitObjectionComponent implements OnInit {

  kyContractForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
