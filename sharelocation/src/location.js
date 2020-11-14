import React from 'react';
import logo from './logo.svg';
import './location.css';
import pp from './pp.JPG';

class Location extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [], nextID: 0, editIndex: 0, input: "", mode: "Add",
      distance: "0", status: "IDLING", privacy: "PRIVATE", dropdown1: false, dropdown2: false
    }
  }

  // We change the text/behavior of our button depending on the mode
  submit() {

    // If we're adding an item to the list...
    if (this.state.mode == "Add") {
      var t = new Date();
      this.setState({
        nextID: this.state.nextID + 1,
        input: "",
        items: [...this.state.items,
        { item: this.state.input, id: this.state.nextID + 1, time: t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() }]
      })
    }
    // If we're editing an item in the list
    else {
      // Create a new items list, modify the item at the edit index
      var newItems = this.state.items;
      newItems[this.state.editIndex].item = this.state.input;

      // Flip back to Add mode, set input textbox to blank, 
      this.setState({
        mode: "Add",
        input: "",
        items: newItems
      })
    }
  }

  // Deletes an item from the list
  delete(delID) {

    if (this.state.mode != "Edit") {

      this.setState({
        items: this.state.items.filter(({ item, id }) => id != delID)
      })
    }
  }

  // Sets the list to edit mode
  edit(editID) {

    var editItem = this.state.items.find(({ item, id }) => id == editID);

    this.setState({
      input: editItem.item,
      mode: "Edit",
      editIndex: this.state.items.indexOf(editItem)
    })
  }

  render() {
    return (
      <div className="grid-box">
        <div className="profile-container">
          <div className="profile-box">
            <div className="photo"><img src={pp} alt="profile" />
              <div className="buttons">
                <div className="status-pp">
                  <div className="button-status" style={{ backgroundColor: "#ca9624" }} onClick={() => this.setState({ dropdown1: !this.state.dropdown1 })}>{this.state.status}</div>
                  <div className="dropdown-box" style={{ display: this.state.dropdown1 ? "block" : "none" }}>
                    <div className="dropdown-item" onClick={() => this.setState({ status: "NONE", dropdown1: !this.state.dropdown1 })}>NONE</div>
                    <div className="dropdown-item" onClick={() => this.setState({ status: "IDLING", dropdown1: !this.state.dropdown1 })}>IDLING</div>
                    <div className="dropdown-item" onClick={() => this.setState({ status: "WAITING", dropdown1: !this.state.dropdown1 })}>WAITING</div>
                    <div className="dropdown-item" onClick={() => this.setState({ status: "STUDYING", dropdown1: !this.state.dropdown1 })}>STUDYING</div>
                  </div>
                </div>
                <div className="status-pp">
                  <div className="button-status" onClick={() => this.setState({ dropdown2: !this.state.dropdown2 })}>{this.state.privacy}</div>
                  <div className="dropdown-box" style={{ display: this.state.dropdown2 ? "block" : "none" }}>
                    <div className="dropdown-item" onClick={() => this.setState({ privacy: "PUBLIC", dropdown2: !this.state.dropdown2 })}>PUBLIC</div>
                    <div className="dropdown-item" onClick={() => this.setState({ privacy: "PRIVATE", dropdown2: !this.state.dropdown2 })}>PRIVATE</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-box">
              <h3>Add a message:</h3>
              <textarea
                onChange={(event) => this.setState({ input: event.target.value })}
                value={this.state.input} />
              <div className="add">
                <button onClick={this.submit.bind(this)}>{this.state.mode}</button>
              </div>

            </div>
            <div>
              <h3>Your messages:</h3>
              <ul>
                {this.state.items.map(
                  ({ item, id, time }) =>
                    <li key={id}>
                      <div>
                        {item}
                        <div>Posted today at: {time}</div>
                      </div>
                      <span onClick={this.delete.bind(this, id)}> Delete </span>
                    </li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="map-box">
          {this.state.privacy == "PUBLIC" ?
            <p className="public">{this.state.privacy}</p>
            :
            <p className="private">{this.state.privacy}</p>
          }
          <div className="filter-box">
            Distance: 200m
              <input type="range" value={this.state.distance} onChange={() => {
              if (this.state.distance == "0") { this.setState({ distance: "100" }) } else { this.setState({ distance: "0" }) }
            }} /> 500m
          </div>
          <div className="iframe-box">
            {this.state.distance == "0" ? <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1PyKuNAgtq5ejkNC2ktOwpaTSu3pzxUUd"
              width="900" height="600"></iframe>
              : <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1UP0yCsWbGM4QgYRuo81KbCEHRdaFxWRm"
                width="900" height="600"></iframe>
            }
          </div>


        </div>

      </div >
    )
  }

};

export default Location;
