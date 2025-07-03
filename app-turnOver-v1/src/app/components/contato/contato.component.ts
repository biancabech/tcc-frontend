import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit{
form: FormGroup = new FormGroup({});

constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    
  }

  initializeForm(){
    this.form = this.fb.group({
      
    })
  }
}
