import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser';

@Component({
  selector: 'segments',
  templateUrl: 'segment.html'
})

export class Segment {

 editorial = '';

 indians = [
    {
      name: 'The Hindu',
      url: 'http://www.thehindu.com/opinion/editorial/'
    },
    {
      name: 'Hindustan Times',
      url: 'http://www.hindustantimes.com/editorials/'
    },
    {
      name: 'Hindu Business line',
      url: 'http://www.thehindubusinessline.com/opinion/editorial/'
    }];


international  = [
      {
        name: 'The Washington Post',
        url: 'https://www.washingtonpost.com/opinions/letters-to-the-editor/?utm_term=.3827ad074d36'
      },
      {
        name: 'Project Syndicate',
        url: 'https://www.project-syndicate.org/'
      },
      {
        name: 'New York Time',
        url: 'https://www.nytimes.com/section/opinion/editorials'
      }
    ]

  constructor(private iab: InAppBrowser) {
      this.editorial = 'indian';
  }

  itemSelected(url: string) {

        const browser = this.iab.create(url, '_self');

  }

}
