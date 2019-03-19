import { Event } from '../models/Event';

import { Injectable } from '@angular/core';
import { uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private EventMap = {};

  constructor() {
  }

  // combination of save and update (if id is null create a new Event)
  public save(Event: Event): Event {
    return null;
  }

  public delete(id: string): void {

  }

  public findAll(): Array<Event> {
    return null;
  }

  public findById(id: string): Event {
    return null;
  }
}
