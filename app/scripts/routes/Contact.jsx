import React, { Component } from 'react';
import Form from '../elements/form/Form.jsx';
import Section from '../elements/form/Section.jsx';
import TextField from '../elements/form/TextField.jsx';
import EmailField from '../elements/form/EmailField.jsx';
import TextArea from '../elements/form/TextArea.jsx';
import Button from '../elements/Button.jsx';
import { FaIcon } from '../components/font-awesome/FaIcon.jsx';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  stopSend (e) {
    e.preventDefault();

    let request = fetch("/mail", {
      method: 'POST',
      body: {
        from: document.getElementById('from').value,
        subject: document.getElementById('subject').value,
        content: document.getElementById('message').value
      }
    });

    request.then(response => {
      response.json().then(json => console.log(json));
    });

    request.catch(err => {
      console.log(err);
    });

    this.setState({
      error: 'Can not Send Message at This Time'
    });
  }

  render () {
    return (
      <div className="container-fluid" style={{marginTop: 50}}>
        <header><h1>Contact</h1></header>
        <section className="col-xs-12" style={{marginBottom: 10}}>
          <header>
            <h2>Social Media</h2>
          </header>

          <a style={{margin: '0.5em'}} href="https://github.com/jnmorse" className="btn btn-default">
            <FaIcon type='github' size='2x'/><span>Github</span>
          </a>

          <a style={{margin: '0.5em'}} href="https://twitter.com/tamed_lionheart" className="btn btn-default">
            <FaIcon type='twitter' size='2x'/><span>Twitter</span>
          </a>

          <a style={{margin: '0.5em'}} href="http://www.freecodecamp.com/jnmorse" className="btn btn-default">
            <FaIcon type="freecodecamp" size="2x"/><span>freeCodeCamp</span>
          </a>

          <a style={{margin: '0.5em'}} href="https://www.linkedin.com/in/jnmorse" className="btn btn-default">
            <FaIcon type="linkedin" size="2x"/><span>LinkedIn</span>
          </a>
        </section>


        <Form action="mailto:tamed.lionheart@gmail.com" method="POST" type="text/plain" className="col-xs-12">
          <h1 className="sr-only">Contact form</h1>

          <Section title="Send Message">
            <TextField id="name" label="Name" placeHolder="John/Jane Doe" required={true} />
            <EmailField id="from" label="E-Mail" placeHolder="username@example.com" />
            <TextField id="subject" label="Subject" list="subjects" placeHolder="Inquiry" required={true} />

            <datalist id="subjects">
              <option value="Web Design"/>
              <option value="Job Offer"/>
              <option value="Code Review"/>
              <option value="Other Services"/>
            </datalist>

            <TextArea id="message" rows={3} label="Message" placeHolder="Would would you like to talk about?" required={true} />
            <p className="bg-danger pull-right" style={{padding: '0.4em',fontWeight: 'bold'}}>{this.state.error}</p>
            <Button type="submit" clickHandler={this.stopSend.bind(this)}>
              <div>
                Send Message&nbsp;<i className="glyphicon glyphicon-send"></i>
              </div>
            </Button>
          </Section>
        </Form>
      </div>
    );
  }
}
