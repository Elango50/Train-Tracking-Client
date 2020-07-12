import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { ActivatedRoute } from '@angular/router';
import { TrainLocation } from './TrainLocation';

@Component({
    selector: 'app-live-train-location',
    templateUrl: './live-train-location.component.html',
    styleUrls: ['./live-train-location.component.scss']
})
export class LiveTrainLocationComponent implements OnInit {

    public train;
    constructor(private route: ActivatedRoute) { 
        this.train = this.route.snapshot.queryParams.id;

    }

    public receivedMessages: TrainLocation[] = [];
    private topicSubscription: Subscription;

    ws: any;
    name: string;
    disabled: boolean;

    ngOnInit(): void {
        this.connect()
    }

    connect() {
        //connect to stomp where stomp endpoint is exposed
        var socket = new SockJS('http://localhost:8080/live');
        this.ws = Stomp.over(socket);
        let that = this;
        this.ws.connect({}, function (frame) {
            debugger
            that.ws.subscribe("/errors", function (message) {
                alert("Error " + message.body);
            });
            that.ws.subscribe("/topic/get/" + that.train, function (message) {
                console.log(message)
                that.receivedMessages.push(JSON.parse(message.body));
            });
            that.disabled = true;
        }, function (error) {
            alert("STOMP error " + error);
        });
    }

    disconnect() {
        if (this.ws !== null) {
            this.ws.disconnect();
        }
        console.log("Disconnected");
    }
}
