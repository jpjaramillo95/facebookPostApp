import { useState } from "react";

let CommentForm = () => {
    let [comment, setComment]=useState("");
    let getComment = (e)=>{
        setComment(e.target.value);
    }
    return(
        <section className="comentario">
            <textarea className="form-control" placeholder="Comentarios"
            value={comment}
            onChange={getComment}>
            </textarea>
            <br />
            <button className="btn btn-secondary">Comentar</button>
        </section>
    )
}

export default CommentForm;
