import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
