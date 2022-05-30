import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../models/doctors';
import { DoctorService } from '../../../services/doctors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctorsList.component.html',
  styleUrls: ['./doctorsList.component.scss']
})

export class DoctorListComponent implements OnInit {
  doctors!: Doctor[];
  user = '';
  selectedDoctor!: number;
  selectedEntry!: boolean;
  subscription!: Subscription;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.subscription = this.doctorService.getAllDoctor().subscribe((data) => {
      this.doctors = data;
      if (this.doctors.length > 0) {
         this.selectedDoctor = this.doctors[0].id;
      }
    });
  }

  toggleUser(user: string): void {
    this.user = user;
  }

  toggleDoctor(selected: number = null as any): void {
    if (selected) {
     if (this.isSelected(selected)) {
       console.log(selected);
       return;
     }
     this.selectedDoctor = selected;
     console.log(selected);
     return;
    }
    this.selectedDoctor = null as any;
  }

  isSelected(id: number): boolean {
    return id === this.selectedDoctor;
  }
}
