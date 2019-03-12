class SimpleComponent extends Component {
  constructor() {
    super() ;
    this.state = {
      mood: 'happy'
    }
    render() {
      return (
        <div>
          {this.state.mood}
        </div>
      )
    }
  }
}
