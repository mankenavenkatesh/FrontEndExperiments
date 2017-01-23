var CategoryList=React.createClass({
  render:function(){

      var categoryList=this.props.categories.map(function(category){
        return (
            <Category key={category.id}>{category.name}</Category>
        )
      });

      return(
        <div className='categoryList col-md-3'>
          <h3>Categories</h3>
          <ul className='list-group'>
            {categoryList}
          </ul>
        </div>
      )
  }
});

var Dashboard=React.createClass({
  getInitialState:function(){
    return {contacts:[], groups:[], tasks:[]};
  },

  render:function(){
    return(
      <div>

        <CategoryList categories=['']/>
      </div>
    )
  }
});

// var locations=[{id:1,title:'Taj-Mahal', image:'images/taj-mahal.jpg', category:'mausoleum'},{id:2,title:'Red Fort', image:'images/red-fort.jpeg', category:'fort'},{id:3,title:'Taj-Mahal', image:'images/taj-mahal.jpg', category:'mausoleum'},{id:4,title:'Red Fort', image:'images/red-fort.jpeg', category:'fort'}];
// var categories=[{id:1,name:'All'},{id:2,name:'Fort'},{id:3,name:'Mausoleum'}];

ReactDOM.render(<Dashboard/>, document.getElementById('content'));
