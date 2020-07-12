import { Component, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Subscription } from 'rxjs';
import { socketConfig } from '../socket.config';

@Component({
  selector: 'app-live-train-location',
  templateUrl: './live-train-location.component.html',
  styleUrls: ['./live-train-location.component.scss']
})
export class LiveTrainLocationComponent implements OnInit {

  constructor(private rxStompService: RxStompService) { }

  public receivedMessages: string[] = [];
  private topicSubscription: Subscription;

  ngOnInit(): void {
      debugger
     this.rxStompService.configure(socketConfig);
     this.rxStompService.activate();
  }

  disconnect() {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    const message = `Message generated at ${new Date}`;
    this.rxStompService.publish({
        destination: '/topic/demo', 
        body: message
    });
  }

  connect() {
    this.topicSubscription = this.rxStompService.watch('/topic/posts/12356/get').subscribe((message: any) => {
    debugger
        this.receivedMessages.push(message.body);
    });
  }


}
