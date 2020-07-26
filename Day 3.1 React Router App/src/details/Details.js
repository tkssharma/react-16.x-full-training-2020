import React from 'react';
import events from '../data/events.json';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { event: {} };
  }

  getEvent(id) {
    return events.find(item => item.id === parseInt(id, 10));
  }

  componentDidMount() {
    this.setState({
      event: this.getEvent(this.props.match.params.eventId)
    });
  }

  componentDidUpdate() {
    const event = this.getEvent(this.props.match.params.eventId);

    if (event.id !== this.state.event.id) {
      this.setState({
        event
      });
    }
  }

  render() {
    const { name, place, date, time } = this.state.event;

    return (
      <div>
        <strong>Nazwa:</strong> {name}<br />
        <strong>Miejsce:</strong> {place}<br />
        <strong>Data:</strong> {date}<br />
        <strong>Godzina:</strong> {time}
      </div>
    );
  }
}

export default Details;
