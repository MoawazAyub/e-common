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
          id: 1
        },
        {
          title: 'Condo Apartment',
          imageUrl: 'https://thisrentaldoesnotexist.com/img-new/img2.jpg',
          id: 2
        },
        {
          title: 'Business Apartments',
          imageUrl: 'https://thisrentaldoesnotexist.com/img-new/img1.jpg',
          id: 3
        },
        {
          title: 'Town House',
          imageUrl: 'https://thisrentaldoesnotexist.com/img-new/hero.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'Mentions',
          imageUrl: 'https://thisrentaldoesnotexist.com/img-new/img3.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  menuItems = () => {
    return (this.state.sections.map(({ title, imageUrl, id, size }) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
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
