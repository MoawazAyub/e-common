import React from 'react';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Luxury Apartment',
          imageUrl: 'https://thisrentaldoesnotexist.com/img-new/img4.jpg',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'Condo Apartment',
          imageUrl: 'https://thisrentaldoesnotexist.com/img-new/img2.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'Business Apartments',
          imageUrl: 'https://thisrentaldoesnotexist.com/img-new/img1.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'Town House',
          imageUrl: 'https://thisrentaldoesnotexist.com/img-new/hero.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'Mentions',
          imageUrl: 'https://thisrentaldoesnotexist.com/img-new/img3.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  menuItems = () => {
    return (this.state.sections.map(({ id, ...sectionItems }) => (
      <MenuItem key={id} {...sectionItems} />
    )))
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.menuItems()}
      </div>
    );
  }
}

export default Directory;
