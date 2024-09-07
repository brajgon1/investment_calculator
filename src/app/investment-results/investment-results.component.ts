import { Component, inject, computed } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService)


  results = computed(() => this.investmentService.resultData()) 
  // This ^^ or the below --- working with signals ---

  // get results() {
  //   return this.investmentService.resultData;
  // }

  // or
  // results = this.investmentService.resultData.asReadonly();
}
