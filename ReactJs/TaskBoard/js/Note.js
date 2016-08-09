var Note=React.createClass({
  getInitialState:function(){
    return {
      editing:false
    }
  },
  componentWillMount:function(){
    this.style={
      right:this.randomBetween(0, window.innerWidth-150)+'px',
      top:this.randomBetween(0,window.innerHeight-150)+'px',
      transform:'rotate('+this.randomBetween(-15,15)+'deg)'
    };
  },

  randomBetween:function(min, max){
    return (min + Math.ceil(Math.random()*max));
  },
  edit:function(){
    this.setState({editing:true});
  },

  remove:function(){
    this.props.onRemove(this.props.index);
  },

  save:function(){
    // var val=this.refs.newText.getDOMNode().value;
    // this.props.onChange(this.refs.newText.getDOMNode().value,this.props.index);
    this.props.onChange(ReactDOM.findDOMNode(this.refs.newText).value,this.props.index);
    this.setState({editing:false});
  },

  renderDisplay:function(){
    return (
      <div className="note" style={this.style}>
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
      <div className="note" style={this.style}>
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

var Board=React.createClass({
  propTypes:{
    count:function(props,propName){
      if(typeof props[propName] != "number"){
        return new Error("The count property must be a number");
      }
      if(props[propName]>100){
        return new Error("Creating ");
      }
    }
  },

  getInitialState:function(){
    return {
      notes:[]
    };
  },

  nextId:function(){
    this.uniqueId=this.uniqueId||0;
    return this.uniqueId++;
  },
  add:function(text){
    console.log("inside add-"+text);
    var arr=this.state.notes;
    arr.push({
      id:this.nextId(),
      note:text
    });
    this.setState({notes:arr});
  },
  update:function(newText, i){
    var arr=this.state.notes;
    arr[i].note=newText;
     console.log("new text"+newText);
    this.setState({notes:arr});
  },

  remove:function(i){
    var arr=this.state.notes;
    arr.splice(i,1);
    this.setState({notes:arr});
  },

  eachNote:function(note, i){
      return (
          <Note key={note.id} index={note.id} onChange={this.update} onRemove={this.remove}>{note.note}</Note>
      );
  },


  render:function(){
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
        <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.add.bind(null, "New Note")}></button>
      </div>

    );
  }
});
// ReactDOM.render(<Note>HelloWorld</Note>, document.getElementById('react-container'));
ReactDOM.render(<Board count={10}/>, document.getElementById('react-container'));
