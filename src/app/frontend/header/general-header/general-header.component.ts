import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core/testing';

declare var $: any;

@Component({
  selector: 'app-general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.css']
})
export class GeneralHeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window: scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById('nav').classList.add('scrolled')
    } else {
      document.getElementById('nav').classList.remove('scrolled')
    }
  }

  ngOnInit(): void {
   

  }

}
