import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  public testimonials: any[] = [
    {
      "message": "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      "image_path": "assets/img/testimonials/testimonials-1.jpg",
      "first_name": "Morteza",
      "last_name": "Akbarpour",
      "job": "Senior Software Developer",
    },
    {
      "message": "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      "image_path": "assets/img/testimonials/testimonials-2.jpg",
      "first_name": "Hamid",
      "last_name": "Abedi",
      "job": "Senior IT Manager"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  onSwiper(swiper:any) {
  }
  onSlideChange() {
  }

}
