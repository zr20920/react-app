import React, { Component } from 'react'

const TodoList = (props) => (
  <ul>
    {
      props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))
    }
  </ul>
)

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      text: ''
    }
  }
  onChange(e) {
    this.setState({text: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
    const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}])
    const nextText = ''
    this.setState({items: nextItems, text: nextText})
  }
  componentDidMount() {
    // dom加载完毕
    console.log('dom加载完毕')
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.onChange.bind(this)} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length)}</button>
        </form>
      </div>
    )
  }
}
