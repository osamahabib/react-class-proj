import { useState } from "react";

export function Counter() {
  // let like=100;
  const [like, setLike] = useState(0); //these are called hooks
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <button className='btn-like' onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button className='btn-dislike' onClick={() => setDislike(dislike + 1)}>👎{dislike}</button>
    </div>

  );
}
