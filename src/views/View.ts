import { User } from './../models/User';

export abstract class View {
  constructor(public parent: Element, public model: User) { 
    this.bindModel();
  }
  abstract eventsMap(): { [key: string]: () => void};
  abstract template(): string;

  bindModel(): void {
    this.model.on('change', () => { 
      this.render();
    })
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      });
    }
  }
}