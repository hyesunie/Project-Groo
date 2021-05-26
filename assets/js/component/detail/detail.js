export class Detail {
  constructor() {}
  get body() {
    return `<div class="detail__habits__container">
    <p>Habit List</p>
    <div class="habit__management">
        <form class="add__habit">
            <input type="text" placeholder="add habits"/>
        </form>
        <ul class="detail__habit__list">
            
        </ul>
    </div> 
</div>
<div class="comment__container">
    <p>Comment</p>
    <input type="text" class="user__comment" value="Comment" disabled></input>
    <button>edit</button>      
</div>`;
  }
}
