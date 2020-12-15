import { Component } from '@angular/core'
import { VideoService } from './services/video.service'

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'] })
export class AppComponent {
  constructor(public videoService: VideoService) {
    this.videoService.search({ page: 1, perPage: 10 }).subscribe((videos) => {
      console.log('videos', videos)
    })
  }
}
