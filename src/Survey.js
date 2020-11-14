import React from 'react';
import logo from './logo.svg';
import { Button, Nav, Navbar, FormControl, Form, NavLink, Dropdown, DropdownButton } from 'react-bootstrap';
import './Survey.css';
import deleteIcon from './images/delete.png';
import addIcon from './images/add.png';
import editIcon from './images/edit.png';
import ReactDOM from 'react-dom';

class Survey extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [], nextID: 0, editIndex: 0, q: "What", input: "Choose a question", answer: "", mode: "Add",
      inputType: 0, file: null, border: "1px solid grey", edit: false,
      questions: ["What's the most instersting course you have taken?",
        "What's the most worried thing for the semester?",
        "What are you happy about right now?",
        "Describe a tutor you prefer most.",
        "Describe what help you are looking for.",
        "Share a photo you think it is best described your mood."]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  submit() {
    if (this.state.mode == "Add") {
      this.setState({
        mode: "Adding",
        input: "Choose a question",
        answer: ""
      })
    }
    else if (this.state.mode == "Adding") {

      this.setState({
        nextID: this.state.nextID + 1,
        mode: "Add",
        input: "Choose a question",
        answer: "",
        items: [...this.state.items,
        { item: this.state.input, ans: this.state.answer, id: this.state.nextID }]
      })
    }
    // If we're editing an item in the list
    else {
      // Create a new items list, modify the item at the edit index
      var newItems = this.state.items
      var index = -1
      for (var i = 0; i < newItems.length; i++) {
        if (newItems[i].id == this.state.editIndex) {
          index = newItems.indexOf(newItems[i])
        }
      }
      newItems[index].item = this.state.input;
      newItems[index].ans = this.state.answer;
      // Flip back to Add mode, set input textbox to blank, 
      this.setState({
        mode: "Add",
        input: "",
        answer: "",
        items: newItems
      })
    }
  }

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
      answer: editItem.ans,
      mode: "Edit",
      editIndex: editItem.id
    })
  }

  cancel() {

  }

  changeQuestion(event) {
    this.setState({
      q: event.target.title
    })
  }

  render() {
    return (
      <div>
        <div className="background">d</div>
        <div className="container">
          {this.state.edit ?
            <div className="form-container1">
              <div>
                <div className="title-container">
                  <h1>Self-Survey Form</h1>
                  <p id="Star">*Add more questions and answers to let people know more about about you</p>
                </div>
              </div>
              <ul>
                {
                  this.state.items.map(
                    ({ item, ans, id }) =>
                      <div className="whole-box">
                        {this.state.mode == "Edit" && this.state.editIndex == id ?
                          <div className="edit-box">
                            <div className="edit-form">
                              <Form.Group className="left-box">
                                <div className="bar">d</div>
                                <div>
                                  <DropdownButton className="question" variant="none" id="dropdown-basic-button" title={this.state.input}>
                                    {this.state.questions.map(
                                      (q) =>
                                        <Dropdown.Item key={q} onClick={(event) => this.setState({ input: q })}>
                                          <span onClick=""> {q} </span>
                                        </Dropdown.Item>)}
                                  </DropdownButton>
                                  <Form.Control type="textarea" placeholder="Write a description"
                                    onChange={(event) => this.setState({ answer: event.target.value })}
                                    value={this.state.answer} />
                                </div>

                              </Form.Group>
                            </div>
                            <p className="save" onClick={this.submit.bind(this)} >
                              save
                                    </p>
                          </div>
                          :
                          <li key={id}>
                            <div className="content-box">
                              <div className="question">
                                {item}
                              </div>
                              <div className="description">
                                {ans}
                              </div>
                            </div>
                            <div className="button-container">
                              <img id="Edit" onClick={this.edit.bind(this, id)} src={editIcon} alt="edit" />
                              <img id="Delete" onClick={this.delete.bind(this, id)} src={deleteIcon} alt="delete" />
                            </div>
                          </li>}

                      </div>
                  )}
              </ul>
              <div className="add-container">
                {this.state.mode == "Add" ?
                  <div className="add-box" onClick={this.submit.bind(this)}>
                    <img id="Add" src={addIcon} alt="add" />
                    <p id="AddText">Add a question</p>
                  </div>

                  : (this.state.mode == "Adding" ?
                    <div className="edit-box">
                      <Form.Group className="left-box">
                        <div className="bar">d</div>
                        <div>
                          <DropdownButton variant="none" id="dropdown-basic-button" title={this.state.input}>
                            {this.state.questions.map(
                              (q) =>
                                <Dropdown.Item key={q} onClick={(event) => this.setState({ input: q })}>
                                  <span onClick=""> {q} </span>
                                </Dropdown.Item>)}
                          </DropdownButton>
                          <Form.Control type="textarea" placeholder="Write a description"
                            onChange={(event) => this.setState({ answer: event.target.value })}
                            value={this.state.answer} />
                        </div>

                      </Form.Group>
                      <p className="save" onClick={this.submit.bind(this)} >
                        save
                            </p>
                    </div> : null)
                }

              </div>
              {this.state.mode != "Add" ?
                <div className="button-container">
                  <Button id="Submit" variant="none" style={{backgroundColor: "lightgrey"}}>Save</Button>
                </div>
                :
                <div className="button-container">
                  <Button id="Submit" variant="primary" onClick={() => this.setState({ edit: false })}>Save</Button>
                </div>
              }

            </div>
            :
            <div className="form-container1">
              <div className="title-container">
                <h1>Self-Survey Form</h1>
                <p id="Star">*Add more questions and answers to let people know more about about you</p>
              </div>
              <ul>
                {
                  this.state.items.map(
                    ({ item, ans, id }) =>
                      <div className="whole-box">
                        <li key={id}>
                          <div className="content-box">
                            <div className="question">
                              {item}
                            </div>
                            <div className="description">
                              {ans}
                            </div>
                          </div>
                        </li>
                      </div>
                  )}
              </ul>
              <div className="button-container">
                <Button id="Submit" variant="primary" onClick={() => this.setState({ edit: true })}>Edit</Button>
              </div>
            </div>

          }
        </div >
      </div>

    )
  }

};

export default Survey;
