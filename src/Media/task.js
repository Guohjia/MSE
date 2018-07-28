class Task{
  constructor(options){
    this._fetchUrl = options.url;
    this._taskCallback = options.callback;

    this.fetchData();
  }

  fetchData(){
    fetch(this._fetchUrl).then(function(response) {
      return response.arrayBuffer();
    }).then( arrayBuffer => {
      this._taskCallback(arrayBuffer)
    })
  }
}


export default Task;

