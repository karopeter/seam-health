import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../models/doctors';
import { DoctorService } from '../../../services/doctors.service';

@Component({
  selector: 'app-register',
  templateUrl: './registerDoctors.component.html',
  styleUrls: ['./registerDoctors.component.scss']
})

export class RegisterDoctorsComponent implements OnInit {
  doctor!: Doctor;
  name = '';
  username = '';
  email = '';
  phone = '';
  address!: object;
  city!: object;
  website = '';

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  createDoctor(): void {
    if (this.name.length === 0) {
      return;
    }
    this.doctor = {
      id: 0,
      name: this.name,
      username: this.username,
      email: this.email,
      phone: this.phone,
      address: this.address,
      city: this.city,
      website: this.website
    };
    this.doctorService.registerDoctor(this.doctor).subscribe((response) => {
      this.name = '';
      console.log(response);
    });
  }
}
