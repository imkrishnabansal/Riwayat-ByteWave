import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

interface Vendor {
  name: string;
  description: string;
  category: string;
  rating: number;
  peopleServed: number;
  image: string;
}

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrl: './vendor-profile.component.scss'
})
export class VendorProfileComponent implements OnInit {

  selectedVendor: Vendor | undefined;

  allVendors: Vendor[] = [
    {
      name: 'Elegant Decorations',
      description: 'Providing world-class decoration services for weddings, parties, and more.',
      category: 'Decorations',
      rating: 4.5,
      peopleServed: 120,
      image: 'assets/vendor.jpg'
    },
    {
      name: 'Venue Royale',
      description: 'Premium venues for all types of events.',
      category: 'Venue',
      rating: 4.2,
      peopleServed: 90,
      image: 'assets/vendor.jpg'
    },
    {
      name: 'Elite Catering',
      description: 'Top-notch catering with a wide range of cuisines.',
      category: 'Catering',
      rating: 4.8,
      peopleServed: 150,
      image: 'assets/vendor.jpg'
    },
    {
      name: 'Star Entertainment',
      description: 'Bringing the best entertainment acts to your events.',
      category: 'Entertainment',
      rating: 4.7,
      peopleServed: 200,
      image: 'assets/vendor.jpg'
    },
    {
      name: 'Grand Events',
      description: 'Luxury event management and decoration services.',
      category: 'Decorations',
      rating: 4.9,
      peopleServed: 250,
      image: 'assets/vendor.jpg'
    },
    {
      name: 'Culinary Masters',
      description: 'Gourmet catering for weddings and corporate events.',
      category: 'Catering',
      rating: 4.6,
      peopleServed: 180,
      image: 'assets/vendor.jpg'
    },
    {
      name: 'Spectacular Venues',
      description: 'Exquisite venues with a wide range of amenities.',
      category: 'Venue',
      rating: 4.3,
      peopleServed: 100,
      image: 'assets/vendor.jpg'
    },
    {
      name: 'Ultimate DJ',
      description: 'Top-rated DJ services for any kind of event.',
      category: 'Entertainment',
      rating: 4.9,
      peopleServed: 220,
      image: 'assets/vendor.jpg'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const searchTerm = params['term'];
      if (searchTerm) {
        this.selectedVendor = this.allVendors.find(planner => planner.name.toLowerCase() === searchTerm.toLowerCase());
      }
    });
  }


  getStars(rating: number): Array<number> {
    return Array(Math.round(rating)).fill(0);
  }
}
