import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
	
	title = "Newsletter";
	description = "Enter your e-mail and subscribe to our newsletter.";

  constructor() { }

  ngOnInit(): void {
  }

}