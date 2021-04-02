import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };
  //関数をpropsとして渡す場合はuseCallbackを使って関数のメモ化が必要
  //でないと、都度関数が再生成されてしまい再レンダリングが起きる
  //配列に入れた値を監視する
  const onClickClose = useCallback(() => {
    setOpen(!open);
  }, [setOpen]);
  //再レンダリングの度に計算しないようにする。（空の配列の場合はマウント時のみ計算してそのあと4を使いまわす）
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea onClickClose={onClickClose} open={open} />
    </div>
  );
}
