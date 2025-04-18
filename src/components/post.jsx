// export default function Post() {

import { useState } from "react";
import CommentForm from "./commentform";

//     let Post = () => {

//     }

//   return (
//     <div>

//     </div>
//   )
// }

let Post = () => {

    let [like,setLike]=useState(0);
    let [btnComment, setBtnComment]=useState(false);
    let showComment = ()=> setBtnComment(!btnComment);
    // console.log(btnComment)

  return (
    <div className="card" style={{"width" : "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">Homero Programando</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <img src={"https://imagenes.elpais.com/resizer/v2/3ZEJPM6PLU6PCY5OUKBN6GNEXU.jpg?auth=dd3f9ca8b31a820c583c45ab0e3e97bb46c5dd6df1297d0e4406d712ad1fac00&width=1960&height=1470&smart=true"} className="card-img-top" alt="..." />
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-around">
            <span>❤️😂👍 {like}</span><span>2mil 💬</span>
        </li>
        <li className="list-group-item d-flex justify-content-around">
            <button className="btn btn-secondary" 
            onClick={()=>setLike(like+1)}
            >👍 Like</button><button className="btn btn-secondary"
                onClick={showComment}
            >💬 Comment</button>
        </li>
      </ul>
      <div className="card-footer">
        {btnComment && <CommentForm/>}
      </div>
    </div>
  );
};

export default Post;
