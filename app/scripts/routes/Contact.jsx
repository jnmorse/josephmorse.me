import React, { Component } from 'react';
import Form from '../elements/form/Form.jsx';
import Section from '../elements/form/Section.jsx';
import Button from '../elements/Button.jsx';
import { FaIcon } from '../components/font-awesome/FaIcon.jsx';

export default class Contact extends Component {
  state = {
    error: false,
    name: '',
    from: '',
    subject: '',
    message: '',
    success: false
  };

  async sendMail(data, cb) {
    const request = await fetch('/mail', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const res = await request.json();
    cb(res);
  }

  stopSend(e) {
    e.preventDefault();

    const data = {
      name: this.state.name,
      from: this.state.from,
      subject: this.state.subject,
      message: this.state.message
    };

    // console.log(data);

    this.sendMail(data, res => {
      if (res.error) {
        return this.setState({ error: 'There was a problem' });
      }

      this.setState({
        error: null,
        name: '',
        from: '',
        subject: '',
        message: '',
        success: true
      });
    });
  }

  updateFrom(from) {
    this.setState({ from });
  }

  updateName(name) {
    this.setState({ name });
  }

  updateSubject(subject) {
    this.setState({ subject });
  }

  updateMessage(message) {
    this.setState({ message });
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginTop: 50 }}>
        <header>
          <h1>Contact</h1>
        </header>
        <section className="col-xs-12" style={{ marginBottom: 10 }}>
          <header>
            <h2>Social Media</h2>
          </header>

          <a
            style={{ margin: '0.5em' }}
            href="https://github.com/jnmorse"
            className="btn btn-default"
          >
            <FaIcon type="github" size="2x" />
            <span>Github</span>
          </a>

          <a
            style={{ margin: '0.5em' }}
            href="https://twitter.com/tamed_lionheart"
            className="btn btn-default"
          >
            <FaIcon type="twitter" size="2x" />
            <span>Twitter</span>
          </a>

          <a
            style={{ margin: '0.5em' }}
            href="http://www.freecodecamp.com/jnmorse"
            className="btn btn-default"
          >
            <FaIcon type="freecodecamp" size="2x" />
            <span>freeCodeCamp</span>
          </a>

          <a
            style={{ margin: '0.5em' }}
            href="https://www.linkedin.com/in/jnmorse"
            className="btn btn-default"
          >
            <FaIcon type="linkedin" size="2x" />
            <span>LinkedIn</span>
          </a>
        </section>

        <Form method="post" className="col-xs-12">
          <h1 className="sr-only">Contact form</h1>

          <Section title="Send Message">
            <div className="form-group has-success">
              <label className="control-label" htmlFor="name">
                <span>Name</span>
              </label>
              <input
                className={['form-control'].join(' ')}
                type="text"
                id="name"
                required
                value={this.state.name}
                onChange={e => this.updateName(e.target.value)}
                placeholder="John/Jane Doe"
              />
            </div>

            <div className="form-group has-success">
              <label className="control-label" htmlFor="from">
                <span>From</span>
              </label>
              <input
                className={['form-control'].join(' ')}
                type="email"
                onChange={e => this.updateFrom(e.target.value)}
                value={this.state.from}
                id="from"
                placeholder="someone@example.com"
                required
              />
            </div>

            <div className="form-group has-success">
              <label className="control-label" htmlFor="subject">
                <span>Subject</span>
              </label>
              <input
                className={['form-control'].join(' ')}
                type="text"
                id="subject"
                list="subjects"
                required
                value={this.state.subject}
                onChange={e => this.updateSubject(e.target.value)}
                placeholder="subject"
              />
            </div>

            <datalist id="subjects">
              <option value="Web Design" />
              <option value="Job Offer" />
              <option value="Code Review" />
              <option value="Other Services" />
            </datalist>

            <div className="form-group has-success">
              <label className="control-label" htmlFor="message">
                <span>Message</span>
              </label>
              <textarea
                className={['form-control'].join(' ')}
                type="text"
                rows={3}
                id="message"
                value={this.state.message}
                onChange={e => this.updateMessage(e.target.value)}
                placeholder="What would your like to talk about?"
                required
              />
            </div>

            {this.state.success
              ? <p className="bg-success pull-right">Message Sent</p>
              : null}

            <p
              className="bg-danger pull-right"
              style={{ padding: '0.4em', fontWeight: 'bold' }}
            >
              {this.state.error}
            </p>
            <Button type="submit" clickHandler={this.stopSend.bind(this)}>
              <div>
                Send Message&nbsp;<i className="glyphicon glyphicon-send" />
              </div>
            </Button>
          </Section>
        </Form>
      </div>
    );
  }
}
