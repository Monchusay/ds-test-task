import React, {FC, useState} from "react";
import style from "./AddCommentBox.module.css";

const AddCommentBox: FC<{ onSendComment: (newSenderName: string, newSentText: string) => void, commentBox: boolean; setCommentBox: any}> = ({onSendComment}) => {

    const [senderName, setSenderName] = useState<string>("")
    const [senderText, setSenderText] = useState<string>("")

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenderName( e.target.value );
    };

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenderText( e.target.value );
    };

  return (
    <div className={style.AddCommentBox}>
      <div className={style.Inputs}>
        <input
          className={style.InputName}
          placeholder="Введите имя"
          value={senderName}
          onChange={onNameChange}
        />
        <input
          className={style.InputPhone}
          placeholder="Введите номер телефона"
        />
        <input
          className={style.InputComment}
          placeholder="Введите текст комментария"
          value={senderText}
          onChange={onTextChange}
        />
      </div>
      <div className={style.ButtonBox}>
        <button
          className={style.AddCommentBoxButton}
          onClick={()=> onSendComment(senderName,senderText)}
        >
          Оставить комментарий
        </button>
      </div>
    </div>
  );
};

export default AddCommentBox;
