import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-confirmation-message-client',
  templateUrl: './confirmation-message-client.component.html',
  styleUrls: ['./confirmation-message-client.component.scss']
})
export class ConfirmationMessageClientComponent implements OnInit {

  end$: Observable<any>;
  driver: any = [];
  constructor(private requirementService: RequirementService) {
    this.end$ = this.requirementService.cart$;
  }

  ngOnInit(): void {
    this.end$.subscribe((data) => {
      this.driver = [...data];
    })
  }

}
