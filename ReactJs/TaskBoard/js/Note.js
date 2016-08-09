var Note=React.createClass({
  getInitialState:function(){
    return {
      editing:false
    }
  },
  edit:function(){
    this.setState({editing:true});
  },

  remove:function(){
    this.setState({editing:false});
  },

  save:function(){
    // var val=this.refs.newText.getDOMNode().value;

    this.setState({editing:false});
  },

  renderDisplay:function(){
    return (
      <div className="note">
      <p>{this.props.children}</p>
        <span>
           <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}/>
           <button className="btn btn-danger glyphicon glyphicon-trash" onClick={this.remove}/>
        </span>
      </div>
    );
  },

  renderForm:function(){
    return (
      <div className="note">
        <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
        <button className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" onClick={this.save}></button>
      </div>

    )
  },

  render:function(){
      if(this.state.editing){
        return this.renderForm();
      }
      else {
        return this.renderDisplay();
      }
  }

});

ReactDOM.render(<Note>HelloWorld</Note>, document.getElementById('react-container'));
