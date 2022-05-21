import React, { FC } from "react";
import style from "./AddCommentBox.module.css";

const AddCommentBox: FC<{ commentBox: boolean; setCommentBox: any}> = ({
  commentBox,
  setCommentBox
}) => {
  return (
    <div className={style.AddCommentBox}>
      <div className={style.Inputs}>
        <input
          className={style.InputName}
          placeholder="Введите имя"
        />
        <input
          className={style.InputPhone}
          placeholder="Введите номер телефона"
        />
        <input
          className={style.InputComment}
          placeholder="Введите текст комментария"
        />
      </div>
      <div className={style.ButtonBox}>
        <button
          className={style.AddCommentBoxButton}
          onClick={() => setCommentBox(false)}
        >
          Оставить комментарий
        </button>
      </div>
    </div>
  );
};

export default AddCommentBox;
