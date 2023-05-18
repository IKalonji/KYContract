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
    projectWebsite: new FormControl(''),
    projectLogo: new FormControl(''),
    projectDescription: new FormControl(''),
    projectCategory: new FormControl(''),
    network: new FormControl(''),
    sourceCode: new FormControl('')
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

  networkOptions = [
    {
      network: "Polgon POS Mainnet",  
    },
    {
      network: "Polygon Mumbai Testnet",
    },
    {
      network: "Polygon zkEVM Mainnet",
    },
    {
      network: "Polygon zkEVM Testnet",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.kyContractForm.value)
  }

}
