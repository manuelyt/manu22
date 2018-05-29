import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';
import { TagsValidator } from './tags-validator/tags-validator.component';

@Component({
  selector: 'app-add-list',
  
  
  
  
  
  //templateUrl: './add-list.component.html',
  templateUrl: `
  <input [(ngModel)]="tag" [tagValidator]="existingTags" #dir="ngModel" />
  <div> Valid: {{ dir.valid }} </div>
  <div> Existing tags: {{ existingTags | json }} </div>
  `,
  
  
  
  
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {


  tag = 'hello';
  existingTags = ['hello', 'world'];



  private newList :List;
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  constructor(private listServ: ListService) { }
 
  ngOnInit() {
  	this.newList = {
                
  		nombrec:'',
  		email:'',
  		dni:'',
  		direccion:'',
  		codigop:'',
  		region:'',
  		ciudad:'',
  		pais:'',
  		observaciones:'',
  		subscrito:'',
  		captacion:'',
                
  		_id:''

  	}
  }

  public onSubmit() {
  	console.log(this.newList.nombrec);
  	this.listServ.addList(this.newList).subscribe(
  		response=> {
  			
  			if(response.success== true)
  				this.addList.emit(this.newList);
  		},
	);

	}
}