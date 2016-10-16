import { Component, OnInit,OnDestroy } from '@angular/core';
import { KSLFeedService }              from '../ksl-feed-service.service'

@Component({
  selector: 'ksl-live-feed',
  templateUrl: './ksl-live-feed-component.component.html',
  providers: [KSLFeedService]
})
export class KSLLiveFeed implements OnInit, OnDestroy {
  messages = [];
  connection;

  constructor(private kslFeedService:KSLFeedService) {}

  ngOnInit() {
    this.connection = this.kslFeedService.getMessages().subscribe(message => {
      //console.log(JSON.parse(message.text))
      this.messages.unshift(JSON.parse((message as any).text));
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
