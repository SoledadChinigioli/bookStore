import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { DataApiService} from '../../service/data-api.service';
import { NgForm } from '@angular/forms'; 
import { BookInterface } from '../../models/book';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSaveBook(bookForm: NgForm): void {
     if (bookForm.value.id == null) {
      // New 
      bookForm.value.userUid = this.userUid;
      this.dataApi.addBook(bookForm.value);
    } else {
      // Update
      this.dataApi.updateBook(bookForm.value);
    }
    bookForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
  


