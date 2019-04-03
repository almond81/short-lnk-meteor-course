import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links';
import { LinksListItem } from './LinksListItem';
import { Session } from 'meteor/session';
import NoLinks from './NoLinks';



export default class LinksList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  componentDidMount() {

    console.log('component did mount linkslist');
    this.linksTracker = Tracker.autorun(() => {

      Meteor.subscribe('links');
      const links = Links.find({
        visible: Session.get('showVisible')
      }).fetch();
      this.setState({ links });
      console.log(links);

    });

  }

  componentWillUnmount() {

    console.log('Compoent will unmount links list');
    this.linksTracker.stop();
  }

  renderLinkListItems() {

    if (this.state.links.length == 0 ) {
      return (<NoLinks />);
    }

    return this.state.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return (<LinksListItem key={link._id} shortUrl={shortUrl} {...link} />);
    })

  }

  render() {
    return (
      <div>
       <div>
       {this.renderLinkListItems()}
       </div>
      </div>
    );
  }
}
