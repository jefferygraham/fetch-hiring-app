import React, { Component } from 'react';
import Item from './Item';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    //This API enables cross-origin requests to anywhere.
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://fetch-hiring.s3.amazonaws.com/hiring.json';
    fetch(proxyUrl + targetUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: [...data] });
      });
  }

  render() {
    //filter items and sort by list if & name
    const items = this.state.data
      .filter((item) => item.name)
      .sort(function (a, b) {
        return a.listId - b.listId || +a.name.slice(5) - +b.name.slice(5);
      });

    //get unique list ids for grouping items
    const listIds = [...new Set(items.map((data) => data.listId))];

    return (
      <React.Fragment>
        <Navbar className='bg-dark' dark sticky='top'>
          <NavbarBrand href='/'>Fetch Rewards</NavbarBrand>
          <Nav>
            {listIds.map((listId) => (
              <NavItem key={listId}>
                <NavLink href={`#listId${listId}`}>List Id {listId}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </Navbar>

        <Container>
          {listIds.map((listId) => (
            <div key={listId}>
              <h2 id={`listId${listId}`}>List Id: {listId}</h2>
              {items.map(
                (item) =>
                  listId === item.listId && <Item key={item.id} item={item} />
              )}
            </div>
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
