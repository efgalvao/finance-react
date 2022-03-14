import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// TODO: Update <Search> usage after its will be implemented


const Navbar = () => (
  <div>
    <Menu attached='top'>
      <Dropdown item icon='unordered list' simple>
        <Dropdown.Menu>
        <Dropdown.Item as={ Link } name='home' to='/'>Home</Dropdown.Item>
          <Dropdown.Item as={ Link } name='accounts' to='accounts'>Accounts</Dropdown.Item>
          <Dropdown.Item as={ Link } name='balances' to='balances'>Balances</Dropdown.Item>
          <Dropdown.Item  as={ Link } name='categories' to='categories'>Categories</Dropdown.Item>
          <Dropdown.Item>Dividends</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Setup</Dropdown.Header>
          <Dropdown.Item>Preferences</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            <input
              className='prompt'
              type='text'
              placeholder='Search animals...'
            />
            <i className='search link icon' />
          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
    </Menu>

    {/* <Segment attached='bottom'>
      <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment> */}
  </div>
)

export default Navbar
