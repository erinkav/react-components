// var GroceryList = React.createClass ({
	
// 	render: function () {
// 		return (
// 			<div>
// 				<ul>
// 					<li>Peas</li>
// 					<li>Carrots</li>
// 				</ul>
// 			</div>
// 		)
// 	}
// });

// ReactDOM.render(<GroceryList />), document.getElementById('body')); 
class GroceryListItem extends React.Component {
	constructor (props) {
		super(props); 
		this.state = {
			bought: false
		}
	}
	onListItemClick() {
		this.setState({
			done: !this.state.done
		})
	}
	render() {
		var style = {
			textDecoration: this.state.bought ? 'heavy' : 'none'
		}
		return (
			<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
		);	
	}
}

var GroceryList = (props) => (
	<div>
		<ul>
			<h2>my Grocery List </h2>
			{props.groceryItem.map(groceryItem =>

				<GroceryListItem groceryItem={groceryItem}/>
			)}
		</ul>
	</div>
);

ReactDOM.render(<GroceryList groceryItem={['kale', 'cucumber', 'bread']}/>, document.getElementById('app')); 
