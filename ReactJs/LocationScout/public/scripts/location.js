var Location=React.createClass({
    render : function(){
          return(
            <div className="col-md-4">
              <div className="thumbnail">
                <img src={this.props.image} alt={this.props.title} style={{width:300 , height:200}} />
                <div className="caption">
                  <p className='pull-right'>Category:{this.props.category}</p>
                  <h4><a href={this.props.image}>{this.props.title}</a></h4>
                </div>
              </div>
            </div>
          )
    }
}
);

var LocationList=React.createClass({
  render : function(){
      var locationList=this.props.locations.map(function(location){
        return(
            <Location title={location.title} image={location.image} key={location.id} category={location.category}></Location>
        )
      });

    return(
      <div className="locationList col-md-9">
        {locationList}
      </div>
    )
  }
});

var Category=React.createClass({
  render:function(){
    return(
      <li className='list-group-item'><input type='checkbox'></input> {this.props.children}</li>
    )
  }
});

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

var LocationFinder=React.createClass({
  render:function(){
    return (
      <div className='locationFinder col-md-9'>
        <span className='col-md-3'>Search:</span> <input type='text' name='Enter Location Here To Search' className='col-md-6'></input>
      </div>
    )
  }
});
var LocationBox=React.createClass({
  render:function(){
    return(
      <div>
        <CategoryList categories={this.props.categories}/>

        <LocationList locations={this.props.locations}/>
      </div>
    )
  }
});

var locations=[{id:1,title:'Taj-Mahal', image:'images/taj-mahal.jpg', category:'mausoleum'},{id:2,title:'Red Fort', image:'images/red-fort.jpeg', category:'fort'},{id:3,title:'Taj-Mahal', image:'images/taj-mahal.jpg', category:'mausoleum'},{id:4,title:'Red Fort', image:'images/red-fort.jpeg', category:'fort'}];
var categories=[{id:1,name:'All'},{id:2,name:'Fort'},{id:3,name:'Mausoleum'}];

ReactDOM.render(<LocationBox locations={locations} categories={categories} />, document.getElementById('content'));
