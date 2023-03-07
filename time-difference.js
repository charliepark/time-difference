export class TimeDifference extends HTMLElement {
  constructor() {
    super();
    this.rawTime = this.getAttribute('time');
    this.time = new Date(this.rawTime);
  }
  timeDifference() {
    console.log('timeDifference');
    const now = new Date();
    const difference = now.getTime() - this.time.getTime();
    const absoluteDifference = Math.abs(difference);
    const isInPast = difference > 0;
    const seconds = Math.floor(absoluteDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    const formattedDelta = (num, str) => {
      const noun = num === 1 ? str : `${str}s`;
      return `${num} ${noun} ${isInPast ? 'ago' : 'from now'}`;
    };
    if (seconds < 5) {
      return 'just now';
    }
    if (seconds < 60) {
      return `${formattedDelta(seconds, 'second')}`;
    }
    if (minutes < 60) {
      return `${formattedDelta(minutes, 'minute')}`;
    }
    if (hours < 24) {
      return `${formattedDelta(hours, 'hour')}`;
    }
    if (days < 30) {
      return `${formattedDelta(days, 'day')}`;
    }
    if (months < 12) {
      return `${formattedDelta(months, 'month')}`;
    }
    return `${formattedDelta(years, 'year')}`;
  }

  connectedCallback() {
    // Although not technically a `time` element, this is the closest semantic
    // element to what we're trying to do here.
    this.innerHTML = `
      <time datetime=${this.rawTime} title="${this.rawTime}">${this.timeDifference()}</time>
    `;
  }
}

customElements.define('time-difference', TimeDifference);
