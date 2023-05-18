import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-submit-kycontract',
  templateUrl: './submit-kycontract.component.html',
  styleUrls: ['./submit-kycontract.component.css']
})
export class SubmitKycontractComponent implements OnInit {
  
  kyContractForm = new FormGroup({
    submittorAddress: new FormControl(''),
    teamWallet: new FormControl(''),
    projectName: new FormControl(''),
    projectContractAddress: new FormControl(''),
    projectEmailAddress: new FormControl(''),
    projectWebsite: new FormControl(''),
    projectLogo: new FormControl(''),
    projectDescription: new FormControl(''),
    projectDetails: new FormControl(''),
    projectCategory: new FormControl(''),
    network: new FormControl(''),
    sourceCode: new FormControl(''),
    docs: new FormControl('')
  });

  categories = [
    {
      name: "DeFi",  
    },
    {
      name: "GameFi",
    },
    {
      name: "Social",
    },
    {
      name: "Wallets",
    },
    {
      name: "Infra",
    },
    {
      name: "Storage",
    },
    {
      name: "DAO",
    },
    {
      name: "TradFi",
    },
    {
      name: "Zero Knowledge",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.kyContractForm.value)
  }

}
