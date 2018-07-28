class Task{
  constructor(options){
    this._fetchUrl = options.url;
    this._taskCallback = options.callback;

    this.fetchData();
  }

  fetchData(){
    var xhr = new XMLHttpRequest;
    xhr.open('get', this._fetchUrl);
    xhr.responseType = 'arraybuffer';
    xhr.onload = ()=>{
      this._taskCallback(xhr.response);
    }
    xhr.send();
  }
}


export default Task;

