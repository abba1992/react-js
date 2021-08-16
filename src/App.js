import React, { Component } from 'react'
import Items from './components/Items/Items';
class App extends Component {

  // state = {
  //   items: {
  //     spoon: 0,
  //     plate: 1,
  //     pot: 0
  //   }
  // }
  state = {
    items: [
      { id: 1, item: 'shoe', qty: 0 },
      { id: 2, item: 'umbrella', qty: 0 },
      { id: 3, item: 'clock', qty: 0 },
    ],
    total: null,
    disable: false
  }
  addItemHandler = (id) => {
    const itemId = this.state.items.findIndex(index => {
      return index.id === id + 1;
    });
    const item = { ...this.state.items[itemId] };
    const oldCount = item.qty
    const newCount = oldCount + 1;
    const items = [...this.state.items];

    items[itemId].qty = newCount
    this.setState(prevState => {
      return { items: prevState.items }
    })
  }
  minusItemHandler = (id) => {
    const itemId = this.state.items.findIndex(index => {
      return index.id === id + 1;
    });
    const item = { ...this.state.items[itemId] };
    // ********************* //
    for (let i in item) {
      if (item[i] <= 0)
        return;
    }
    // ******************** //
    const oldCount = item.qty
    const newCount = oldCount - 1;
    const items = [...this.state.items];
    items[itemId].qty = newCount
    this.setState(prevState => {
      return { items: prevState.items }
    })
  }


  // totalQuantityHandler = () => {


  //   this.setState({
  //     total: items
  //   })
  // }

  render() {

    const purchase = this.state.items.map((item, index) => <Items
      key={item.id}
      item={item.id}
      qty={item.qty}
      add={() => this.addItemHandler(index, item.id)}
      minus={() => this.minusItemHandler(index, item.id)}
    />)
    const items = this.state.items.map(item => item.qty).reduce((sum, current) => sum + current, 0);
    const disabledInfo = items <= 0;
    return (
      <div>
        {purchase}
        <h1>Total: {items}</h1>
        <button disabled={disabledInfo}>Go to Cart</button>
      </div>
    )
  }

}
export default App;
