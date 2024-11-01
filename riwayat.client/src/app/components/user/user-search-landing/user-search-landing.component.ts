import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

// Define the Vendor interface
interface Vendor {
  name: string;
  description: string;
  category: string;
  rating: number;
  peopleServed: number;
  image: string;
}

@Component({
  selector: 'app-user-search-landing',
  templateUrl: './user-search-landing.component.html',
  styleUrls: ['./user-search-landing.component.scss']
})
export class UserSearchLandingComponent implements OnInit {
  searchTerm: string = '';

  // Explicitly type the allVendors and searchResults arrays
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
  

  // searchResults also needs to be explicitly typed as an array of Vendor objects
  searchResults: Vendor[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchTerm = params['term'];
      this.filterVendors();
    });
  }

  // Function to filter vendors based on the search term
  filterVendors(): void {
    const searchLower = this.searchTerm ? this.searchTerm.toLowerCase() : '';
  
    if (!searchLower || searchLower === 'all') {
      // If the search term is null, empty, or 'all', display all vendors
      this.searchResults = this.allVendors;
    } else {
      // Otherwise, filter vendors by name or category
      this.searchResults = this.allVendors.filter(vendor =>
        vendor.name.toLowerCase().includes(searchLower) || 
        vendor.category.toLowerCase().includes(searchLower)
      );
    }
  
    console.log('Filtered vendors:', this.searchResults);  // Debug log
  }

  getStars(rating: number): Array<number> {
    return Array(Math.round(rating)).fill(0);
  }
  
  goToPlannerProfile(planner: string){
    if (planner){
      this.router.navigate(['/plannerprofile', planner])
    }
  }

  goToVendorProfile(vendor: string){
    if (vendor){
      this.router.navigate(['/vendorprofile', vendor])
    }
  }
}
