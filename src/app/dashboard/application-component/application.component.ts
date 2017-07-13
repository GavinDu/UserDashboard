import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../../vo/application.interface';
import { FilesService } from '../../service/files.service';
import { WebsocketService } from '../../service/websocket.service';
import { User } from '../../vo/user.class';
@Component({
    selector: 'application-component',
    templateUrl: './application.component.html',
    styleUrls: ['./application.scss']
})

export class ApplicationComponent {
  public selectedData: Application = {
    businessName: '',
    amountsToBorrow: '',
    creditCardVolume: '',
    monthlyDeposit: '',
    time: '',
    industry: '',

    street: '',
    city: '',
    state: '',
    zip: '',

    ficoScore: '',
    firstName: '',
    lastName: '',
    phone: ''
  };

  public ficoScores: Array<string> = ['Not Sure', 'Less than 500', '500-599', '600-699', '700+'];

  public states: Array<string> = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
                                  'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY',
                                  'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT',
                                  'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH',
                                  'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
                                  'VT', 'VA', 'WA', 'WV', 'WI'];
  public amountsToBorrow: Array<string> = [ 'Less than 5000',
                                            '5000-9999',
                                            '10000-19999',
                                            '20000-49999',
                                            '50000-74999',
                                            '75000-99999',
                                            '100000-149999',
                                            '150000-199999',
                                            '200000-249999',
                                            '250000+'];
  public creditCardVolumes: Array<string> = [ 'Not Sure',
                                              'Less than $2,500',
                                              '$2,500 - $4,999',
                                              '$5,000 - $9,999',
                                              '$10,000+',
                                              'I do not accept credit cards'];
  public monthlyDeposits: Array<string> = [ 'Not Sure',
                                            'Less than $10,000',
                                            '$10,000 - $19,999',
                                            '$20,000 - $39,999',
                                            '$40,000+'];
  public times: Array<string> = ['Less than 6 Months',
                                 '6 Months - 2 Years',
                                 '2 - 5 Years',
                                 '5 Years +'];
  public industries: Array<string> = ['Accounting, Bookkeeping, Tax Preparation',
                                      'Advertising Agencies',
                                      'Amusement &amp; Recreation Services',
                                      'Auto Repair',
                                      'Beauty Salons / Barbers / Tanning Salons / Spas',
                                      'Business Services',
                                      'Catering',
                                      'Child Care',
                                      'Construction',
                                      'Dentists / Orthodontists / Dental Labs',
                                      'Dry Cleaning / Laundry Services',
                                      'Equipment Sales / Rental',
                                      'Gas Station &amp; Convenience Stores',
                                      'Grocery &amp; Convenience Stores',
                                      'Health &amp; Fitness Facilities',
                                      'Home-Based Business',
                                      'Home Furniture &amp; Furnishing',
                                      'Hotels / Motels',
                                      'Computer / IT / Software Services',
                                      'Janitorial / Housekeeping Services',
                                      'Landscape / Lawn Maintenance / Gardeners',
                                      'Mining',
                                      'Optometrists / Eye Glasses',
                                      'Other',
                                      'Painting / Handyman Services / Home Repair',
                                      'Physicians',
                                      'Restaurants / Bars',
                                      'Retailer',
                                      'Taxis / Delivery Services / Limousine Services',
                                      'Telemarketing',
                                      'Trucking / Transportation',
                                      'Veterinarians&#8203;',
                                      'Wholesale Trade'];
  constructor(private fs: FilesService,
              private router: Router,
              private webSocketService: WebsocketService) {
   this.selectedData.amountsToBorrow = this.amountsToBorrow[0];
   this.selectedData.creditCardVolume = this.creditCardVolumes[0];
   this.selectedData.ficoScore = this.ficoScores[0];
   this.selectedData.industry = this.industries[0];
   this.selectedData.monthlyDeposit = this.monthlyDeposits[0];
   this.selectedData.state = this.states[0];
   this.selectedData.time = this.times[0];
  }
  public ficoScoreSelected(value: any): void {
    this.selectedData.ficoScore = value['id'];
  }
  public stateSelected(value: any): void {
    this.selectedData.state = value['id'];
  }
  public amountToBorrowSelected(value: any): void {
    this.selectedData.amountsToBorrow = value['id'];
  }
  public avgMonthlyCreditCardVolumeSelected(value: any): void {
    this.selectedData.creditCardVolume = value['id'];
  }
  public avgMonthlyDepositsSelected(value: any): void {
    this.selectedData.monthlyDeposit = value['id'];
  }
  public timeInBusinessSelected(value: any): void {
    this.selectedData.time = value['id'];
  }
  public industrySelected(value: any): void {
    this.selectedData.industry = value['id'];
  }

  public onSubmit(): void {
    const user: User = JSON.parse(localStorage.getItem('currentUser')) as User;
    // this.fs.sendApplication(this.selectedData, user.userId).subscribe(
    //   status => console.log(status),
    //   error => console.log(error));
    this.webSocketService.send(JSON.stringify(this.selectedData), user.userId);
    this.router.navigate(['dashboard/home']);
  }
}
